import { GraphQLDeprecatedDirective, isEnumType, isInputObjectType, isInterfaceType, isIntrospectionType, isObjectType, isScalarType, isSpecifiedDirective, isSpecifiedScalarType, isUnionType, Kind, print, } from 'graphql';
import { astFromType } from './astFromType.js';
import { astFromValue } from './astFromValue.js';
import { astFromValueUntyped } from './astFromValueUntyped.js';
import { getDescriptionNode } from './descriptionFromObject.js';
import { getDirectivesInExtensions, } from './get-directives.js';
import { isSome } from './helpers.js';
import { getRootTypeMap } from './rootTypes.js';
export function getDocumentNodeFromSchema(schema, options = {}) {
    const pathToDirectivesInExtensions = options.pathToDirectivesInExtensions;
    const typesMap = schema.getTypeMap();
    const schemaNode = astFromSchema(schema, pathToDirectivesInExtensions);
    const definitions = schemaNode != null ? [schemaNode] : [];
    const directives = schema.getDirectives();
    for (const directive of directives) {
        if (isSpecifiedDirective(directive)) {
            continue;
        }
        definitions.push(astFromDirective(directive, schema, pathToDirectivesInExtensions));
    }
    for (const typeName in typesMap) {
        const type = typesMap[typeName];
        const isPredefinedScalar = isSpecifiedScalarType(type);
        const isIntrospection = isIntrospectionType(type);
        if (isPredefinedScalar || isIntrospection) {
            continue;
        }
        if (isObjectType(type)) {
            definitions.push(astFromObjectType(type, schema, pathToDirectivesInExtensions));
        }
        else if (isInterfaceType(type)) {
            definitions.push(astFromInterfaceType(type, schema, pathToDirectivesInExtensions));
        }
        else if (isUnionType(type)) {
            definitions.push(astFromUnionType(type, schema, pathToDirectivesInExtensions));
        }
        else if (isInputObjectType(type)) {
            definitions.push(astFromInputObjectType(type, schema, pathToDirectivesInExtensions));
        }
        else if (isEnumType(type)) {
            definitions.push(astFromEnumType(type, schema, pathToDirectivesInExtensions));
        }
        else if (isScalarType(type)) {
            definitions.push(astFromScalarType(type, schema, pathToDirectivesInExtensions));
        }
        else {
            throw new Error(`Unknown type ${type}.`);
        }
    }
    return {
        kind: Kind.DOCUMENT,
        definitions,
    };
}
// this approach uses the default schema printer rather than a custom solution, so may be more backwards compatible
// currently does not allow customization of printSchema options having to do with comments.
export function printSchemaWithDirectives(schema, options = {}) {
    const documentNode = getDocumentNodeFromSchema(schema, options);
    return print(documentNode);
}
export function astFromSchema(schema, pathToDirectivesInExtensions) {
    const operationTypeMap = new Map([
        ['query', undefined],
        ['mutation', undefined],
        ['subscription', undefined],
    ]);
    const nodes = [];
    if (schema.astNode != null) {
        nodes.push(schema.astNode);
    }
    if (schema.extensionASTNodes != null) {
        for (const extensionASTNode of schema.extensionASTNodes) {
            nodes.push(extensionASTNode);
        }
    }
    for (const node of nodes) {
        if (node.operationTypes) {
            for (const operationTypeDefinitionNode of node.operationTypes) {
                operationTypeMap.set(operationTypeDefinitionNode.operation, operationTypeDefinitionNode);
            }
        }
    }
    const rootTypeMap = getRootTypeMap(schema);
    for (const [operationTypeNode, operationTypeDefinitionNode] of operationTypeMap) {
        const rootType = rootTypeMap.get(operationTypeNode);
        if (rootType != null) {
            const rootTypeAST = astFromType(rootType);
            if (operationTypeDefinitionNode != null) {
                operationTypeDefinitionNode.type = rootTypeAST;
            }
            else {
                operationTypeMap.set(operationTypeNode, {
                    kind: Kind.OPERATION_TYPE_DEFINITION,
                    operation: operationTypeNode,
                    type: rootTypeAST,
                });
            }
        }
    }
    const operationTypes = [...operationTypeMap.values()].filter(isSome);
    const directives = getDirectiveNodes(schema, schema, pathToDirectivesInExtensions);
    if (!operationTypes.length && !directives.length) {
        return null;
    }
    const schemaNode = {
        kind: operationTypes != null ? Kind.SCHEMA_DEFINITION : Kind.SCHEMA_EXTENSION,
        operationTypes,
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: directives,
    };
    const descriptionNode = getDescriptionNode(schema);
    if (descriptionNode) {
        schemaNode.description = descriptionNode;
    }
    return schemaNode;
}
export function astFromDirective(directive, schema, pathToDirectivesInExtensions) {
    return {
        kind: Kind.DIRECTIVE_DEFINITION,
        description: getDescriptionNode(directive),
        name: {
            kind: Kind.NAME,
            value: directive.name,
        },
        arguments: directive.args?.map(arg => astFromArg(arg, schema, pathToDirectivesInExtensions)),
        repeatable: directive.isRepeatable,
        locations: directive.locations?.map(location => ({
            kind: Kind.NAME,
            value: location,
        })) || [],
    };
}
export function getDirectiveNodes(entity, schema, pathToDirectivesInExtensions) {
    let directiveNodesBesidesDeprecatedAndSpecifiedBy = [];
    const directivesInExtensions = getDirectivesInExtensions(entity, pathToDirectivesInExtensions);
    let directives;
    if (directivesInExtensions != null) {
        directives = makeDirectiveNodes(schema, directivesInExtensions);
    }
    let deprecatedDirectiveNode = null;
    let specifiedByDirectiveNode = null;
    if (directives != null) {
        directiveNodesBesidesDeprecatedAndSpecifiedBy = directives.filter(directive => directive.name.value !== 'deprecated' && directive.name.value !== 'specifiedBy');
        if (entity.deprecationReason != null) {
            deprecatedDirectiveNode = directives.filter(directive => directive.name.value === 'deprecated')?.[0];
        }
        if (entity.specifiedByUrl != null || entity.specifiedByURL != null) {
            specifiedByDirectiveNode = directives.filter(directive => directive.name.value === 'specifiedBy')?.[0];
        }
    }
    if (entity.deprecationReason != null && deprecatedDirectiveNode == null) {
        deprecatedDirectiveNode = makeDeprecatedDirective(entity.deprecationReason);
    }
    if (entity.specifiedByUrl != null ||
        (entity.specifiedByURL != null && specifiedByDirectiveNode == null)) {
        const specifiedByValue = entity.specifiedByUrl || entity.specifiedByURL;
        const specifiedByArgs = {
            url: specifiedByValue,
        };
        specifiedByDirectiveNode = makeDirectiveNode('specifiedBy', specifiedByArgs);
    }
    if (deprecatedDirectiveNode != null) {
        directiveNodesBesidesDeprecatedAndSpecifiedBy.push(deprecatedDirectiveNode);
    }
    if (specifiedByDirectiveNode != null) {
        directiveNodesBesidesDeprecatedAndSpecifiedBy.push(specifiedByDirectiveNode);
    }
    return directiveNodesBesidesDeprecatedAndSpecifiedBy;
}
export function astFromArg(arg, schema, pathToDirectivesInExtensions) {
    return {
        kind: Kind.INPUT_VALUE_DEFINITION,
        description: getDescriptionNode(arg),
        name: {
            kind: Kind.NAME,
            value: arg.name,
        },
        type: astFromType(arg.type),
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        defaultValue: arg.defaultValue !== undefined
            ? (astFromValue(arg.defaultValue, arg.type) ?? undefined)
            : undefined,
        directives: getDirectiveNodes(arg, schema, pathToDirectivesInExtensions),
    };
}
export function astFromObjectType(type, schema, pathToDirectivesInExtensions) {
    return {
        kind: Kind.OBJECT_TYPE_DEFINITION,
        description: getDescriptionNode(type),
        name: {
            kind: Kind.NAME,
            value: type.name,
        },
        fields: Object.values(type.getFields()).map(field => astFromField(field, schema, pathToDirectivesInExtensions)),
        interfaces: Object.values(type.getInterfaces()).map(iFace => astFromType(iFace)),
        directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions),
    };
}
export function astFromInterfaceType(type, schema, pathToDirectivesInExtensions) {
    const node = {
        kind: Kind.INTERFACE_TYPE_DEFINITION,
        description: getDescriptionNode(type),
        name: {
            kind: Kind.NAME,
            value: type.name,
        },
        fields: Object.values(type.getFields()).map(field => astFromField(field, schema, pathToDirectivesInExtensions)),
        directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions),
    };
    if ('getInterfaces' in type) {
        node.interfaces = Object.values(type.getInterfaces()).map(iFace => astFromType(iFace));
    }
    return node;
}
export function astFromUnionType(type, schema, pathToDirectivesInExtensions) {
    return {
        kind: Kind.UNION_TYPE_DEFINITION,
        description: getDescriptionNode(type),
        name: {
            kind: Kind.NAME,
            value: type.name,
        },
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions),
        types: type.getTypes().map(type => astFromType(type)),
    };
}
export function astFromInputObjectType(type, schema, pathToDirectivesInExtensions) {
    return {
        kind: Kind.INPUT_OBJECT_TYPE_DEFINITION,
        description: getDescriptionNode(type),
        name: {
            kind: Kind.NAME,
            value: type.name,
        },
        fields: Object.values(type.getFields()).map(field => astFromInputField(field, schema, pathToDirectivesInExtensions)),
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions),
    };
}
export function astFromEnumType(type, schema, pathToDirectivesInExtensions) {
    return {
        kind: Kind.ENUM_TYPE_DEFINITION,
        description: getDescriptionNode(type),
        name: {
            kind: Kind.NAME,
            value: type.name,
        },
        values: Object.values(type.getValues()).map(value => astFromEnumValue(value, schema, pathToDirectivesInExtensions)),
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: getDirectiveNodes(type, schema, pathToDirectivesInExtensions),
    };
}
export function astFromScalarType(type, schema, pathToDirectivesInExtensions) {
    const directivesInExtensions = getDirectivesInExtensions(type, pathToDirectivesInExtensions);
    const directives = makeDirectiveNodes(schema, directivesInExtensions);
    const specifiedByValue = (type['specifiedByUrl'] ||
        type['specifiedByURL']);
    if (specifiedByValue &&
        !directives.some(directiveNode => directiveNode.name.value === 'specifiedBy')) {
        const specifiedByArgs = {
            url: specifiedByValue,
        };
        directives.push(makeDirectiveNode('specifiedBy', specifiedByArgs));
    }
    return {
        kind: Kind.SCALAR_TYPE_DEFINITION,
        description: getDescriptionNode(type),
        name: {
            kind: Kind.NAME,
            value: type.name,
        },
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: directives,
    };
}
export function astFromField(field, schema, pathToDirectivesInExtensions) {
    return {
        kind: Kind.FIELD_DEFINITION,
        description: getDescriptionNode(field),
        name: {
            kind: Kind.NAME,
            value: field.name,
        },
        arguments: field.args.map(arg => astFromArg(arg, schema, pathToDirectivesInExtensions)),
        type: astFromType(field.type),
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: getDirectiveNodes(field, schema, pathToDirectivesInExtensions),
    };
}
export function astFromInputField(field, schema, pathToDirectivesInExtensions) {
    return {
        kind: Kind.INPUT_VALUE_DEFINITION,
        description: getDescriptionNode(field),
        name: {
            kind: Kind.NAME,
            value: field.name,
        },
        type: astFromType(field.type),
        // ConstXNode has been introduced in v16 but it is not compatible with XNode so we do `as any` for backwards compatibility
        directives: getDirectiveNodes(field, schema, pathToDirectivesInExtensions),
        defaultValue: astFromValue(field.defaultValue, field.type) ?? undefined,
    };
}
export function astFromEnumValue(value, schema, pathToDirectivesInExtensions) {
    return {
        kind: Kind.ENUM_VALUE_DEFINITION,
        description: getDescriptionNode(value),
        name: {
            kind: Kind.NAME,
            value: value.name,
        },
        directives: getDirectiveNodes(value, schema, pathToDirectivesInExtensions),
    };
}
export function makeDeprecatedDirective(deprecationReason) {
    return makeDirectiveNode('deprecated', { reason: deprecationReason }, GraphQLDeprecatedDirective);
}
export function makeDirectiveNode(name, args, directive) {
    const directiveArguments = [];
    for (const argName in args) {
        const argValue = args[argName];
        let value;
        if (directive != null) {
            const arg = directive.args.find(arg => arg.name === argName);
            if (arg) {
                value = astFromValue(argValue, arg.type);
            }
        }
        if (value == null) {
            value = astFromValueUntyped(argValue);
        }
        if (value != null) {
            directiveArguments.push({
                kind: Kind.ARGUMENT,
                name: {
                    kind: Kind.NAME,
                    value: argName,
                },
                value,
            });
        }
    }
    return {
        kind: Kind.DIRECTIVE,
        name: {
            kind: Kind.NAME,
            value: name,
        },
        arguments: directiveArguments,
    };
}
export function makeDirectiveNodes(schema, directiveValues) {
    const directiveNodes = [];
    for (const { name, args } of directiveValues) {
        const directive = schema?.getDirective(name);
        directiveNodes.push(makeDirectiveNode(name, args, directive));
    }
    return directiveNodes;
}
