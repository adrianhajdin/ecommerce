import { Kind, } from 'graphql';
import { collectComment } from '@graphql-tools/utils';
import { mergeDirective } from './directives.js';
import { mergeEnum } from './enum.js';
import { mergeInputType } from './input-type.js';
import { mergeInterface } from './interface.js';
import { mergeScalar } from './scalar.js';
import { mergeSchemaDefs } from './schema-def.js';
import { mergeType } from './type.js';
import { mergeUnion } from './union.js';
export const schemaDefSymbol = 'SCHEMA_DEF_SYMBOL';
export function isNamedDefinitionNode(definitionNode) {
    return 'name' in definitionNode;
}
export function mergeGraphQLNodes(nodes, config, directives = {}) {
    const mergedResultMap = directives;
    for (const nodeDefinition of nodes) {
        if (isNamedDefinitionNode(nodeDefinition)) {
            const name = nodeDefinition.name?.value;
            if (config?.commentDescriptions) {
                collectComment(nodeDefinition);
            }
            if (name == null) {
                continue;
            }
            if (config?.exclusions?.includes(name + '.*') || config?.exclusions?.includes(name)) {
                delete mergedResultMap[name];
            }
            else {
                switch (nodeDefinition.kind) {
                    case Kind.OBJECT_TYPE_DEFINITION:
                    case Kind.OBJECT_TYPE_EXTENSION:
                        mergedResultMap[name] = mergeType(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case Kind.ENUM_TYPE_DEFINITION:
                    case Kind.ENUM_TYPE_EXTENSION:
                        mergedResultMap[name] = mergeEnum(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case Kind.UNION_TYPE_DEFINITION:
                    case Kind.UNION_TYPE_EXTENSION:
                        mergedResultMap[name] = mergeUnion(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case Kind.SCALAR_TYPE_DEFINITION:
                    case Kind.SCALAR_TYPE_EXTENSION:
                        mergedResultMap[name] = mergeScalar(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case Kind.INPUT_OBJECT_TYPE_DEFINITION:
                    case Kind.INPUT_OBJECT_TYPE_EXTENSION:
                        mergedResultMap[name] = mergeInputType(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case Kind.INTERFACE_TYPE_DEFINITION:
                    case Kind.INTERFACE_TYPE_EXTENSION:
                        mergedResultMap[name] = mergeInterface(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case Kind.DIRECTIVE_DEFINITION:
                        if (mergedResultMap[name]) {
                            const isInheritedFromPrototype = name in {}; // i.e. toString
                            if (isInheritedFromPrototype) {
                                if (!isASTNode(mergedResultMap[name])) {
                                    mergedResultMap[name] = undefined;
                                }
                            }
                        }
                        mergedResultMap[name] = mergeDirective(nodeDefinition, mergedResultMap[name]);
                        break;
                }
            }
        }
        else if (nodeDefinition.kind === Kind.SCHEMA_DEFINITION ||
            nodeDefinition.kind === Kind.SCHEMA_EXTENSION) {
            mergedResultMap[schemaDefSymbol] = mergeSchemaDefs(nodeDefinition, mergedResultMap[schemaDefSymbol], config);
        }
    }
    return mergedResultMap;
}
function isASTNode(node) {
    return (node != null && typeof node === 'object' && 'kind' in node && typeof node.kind === 'string');
}
