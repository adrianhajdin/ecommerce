import { isDefinitionNode, isSchema, Kind, parse, } from 'graphql';
import { getDocumentNodeFromSchema, isDocumentNode, printWithComments, resetComments, } from '@graphql-tools/utils';
import { mergeGraphQLNodes, schemaDefSymbol } from './merge-nodes.js';
import { DEFAULT_OPERATION_TYPE_NAME_MAP } from './schema-def.js';
import { defaultStringComparator, isSourceTypes, isStringTypes } from './utils.js';
export function mergeTypeDefs(typeSource, config) {
    resetComments();
    const doc = {
        kind: Kind.DOCUMENT,
        definitions: mergeGraphQLTypes(typeSource, {
            useSchemaDefinition: true,
            forceSchemaDefinition: false,
            throwOnConflict: false,
            commentDescriptions: false,
            ...config,
        }),
    };
    let result;
    if (config?.commentDescriptions) {
        result = printWithComments(doc);
    }
    else {
        result = doc;
    }
    resetComments();
    return result;
}
function visitTypeSources(typeSource, options, allDirectives = [], allNodes = [], visitedTypeSources = new Set()) {
    if (typeSource && !visitedTypeSources.has(typeSource)) {
        visitedTypeSources.add(typeSource);
        if (typeof typeSource === 'function') {
            visitTypeSources(typeSource(), options, allDirectives, allNodes, visitedTypeSources);
        }
        else if (Array.isArray(typeSource)) {
            for (const type of typeSource) {
                visitTypeSources(type, options, allDirectives, allNodes, visitedTypeSources);
            }
        }
        else if (isSchema(typeSource)) {
            const documentNode = getDocumentNodeFromSchema(typeSource, options);
            visitTypeSources(documentNode.definitions, options, allDirectives, allNodes, visitedTypeSources);
        }
        else if (isStringTypes(typeSource) || isSourceTypes(typeSource)) {
            const documentNode = parse(typeSource, options);
            visitTypeSources(documentNode.definitions, options, allDirectives, allNodes, visitedTypeSources);
        }
        else if (typeof typeSource === 'object' && isDefinitionNode(typeSource)) {
            if (typeSource.kind === Kind.DIRECTIVE_DEFINITION) {
                allDirectives.push(typeSource);
            }
            else {
                allNodes.push(typeSource);
            }
        }
        else if (isDocumentNode(typeSource)) {
            visitTypeSources(typeSource.definitions, options, allDirectives, allNodes, visitedTypeSources);
        }
        else {
            throw new Error(`typeDefs must contain only strings, documents, schemas, or functions, got ${typeof typeSource}`);
        }
    }
    return { allDirectives, allNodes };
}
export function mergeGraphQLTypes(typeSource, config) {
    resetComments();
    const { allDirectives, allNodes } = visitTypeSources(typeSource, config);
    const mergedDirectives = mergeGraphQLNodes(allDirectives, config);
    const mergedNodes = mergeGraphQLNodes(allNodes, config, mergedDirectives);
    if (config?.useSchemaDefinition) {
        // XXX: right now we don't handle multiple schema definitions
        const schemaDef = mergedNodes[schemaDefSymbol] || {
            kind: Kind.SCHEMA_DEFINITION,
            operationTypes: [],
        };
        const operationTypes = schemaDef.operationTypes;
        for (const opTypeDefNodeType in DEFAULT_OPERATION_TYPE_NAME_MAP) {
            const opTypeDefNode = operationTypes.find(operationType => operationType.operation === opTypeDefNodeType);
            if (!opTypeDefNode) {
                const possibleRootTypeName = DEFAULT_OPERATION_TYPE_NAME_MAP[opTypeDefNodeType];
                const existingPossibleRootType = mergedNodes[possibleRootTypeName];
                if (existingPossibleRootType != null && existingPossibleRootType.name != null) {
                    operationTypes.push({
                        kind: Kind.OPERATION_TYPE_DEFINITION,
                        type: {
                            kind: Kind.NAMED_TYPE,
                            name: existingPossibleRootType.name,
                        },
                        operation: opTypeDefNodeType,
                    });
                }
            }
        }
        if (schemaDef?.operationTypes?.length != null && schemaDef.operationTypes.length > 0) {
            mergedNodes[schemaDefSymbol] = schemaDef;
        }
    }
    if (config?.forceSchemaDefinition && !mergedNodes[schemaDefSymbol]?.operationTypes?.length) {
        mergedNodes[schemaDefSymbol] = {
            kind: Kind.SCHEMA_DEFINITION,
            operationTypes: [
                {
                    kind: Kind.OPERATION_TYPE_DEFINITION,
                    operation: 'query',
                    type: {
                        kind: Kind.NAMED_TYPE,
                        name: {
                            kind: Kind.NAME,
                            value: 'Query',
                        },
                    },
                },
            ],
        };
    }
    const mergedNodeDefinitions = Object.values(mergedNodes);
    if (config?.sort) {
        const sortFn = typeof config.sort === 'function' ? config.sort : defaultStringComparator;
        mergedNodeDefinitions.sort((a, b) => sortFn(a.name?.value, b.name?.value));
    }
    return mergedNodeDefinitions;
}
