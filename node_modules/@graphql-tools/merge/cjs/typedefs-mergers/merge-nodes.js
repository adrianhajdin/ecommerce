"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeGraphQLNodes = exports.isNamedDefinitionNode = exports.schemaDefSymbol = void 0;
const graphql_1 = require("graphql");
const utils_1 = require("@graphql-tools/utils");
const directives_js_1 = require("./directives.js");
const enum_js_1 = require("./enum.js");
const input_type_js_1 = require("./input-type.js");
const interface_js_1 = require("./interface.js");
const scalar_js_1 = require("./scalar.js");
const schema_def_js_1 = require("./schema-def.js");
const type_js_1 = require("./type.js");
const union_js_1 = require("./union.js");
exports.schemaDefSymbol = 'SCHEMA_DEF_SYMBOL';
function isNamedDefinitionNode(definitionNode) {
    return 'name' in definitionNode;
}
exports.isNamedDefinitionNode = isNamedDefinitionNode;
function mergeGraphQLNodes(nodes, config, directives = {}) {
    const mergedResultMap = directives;
    for (const nodeDefinition of nodes) {
        if (isNamedDefinitionNode(nodeDefinition)) {
            const name = nodeDefinition.name?.value;
            if (config?.commentDescriptions) {
                (0, utils_1.collectComment)(nodeDefinition);
            }
            if (name == null) {
                continue;
            }
            if (config?.exclusions?.includes(name + '.*') || config?.exclusions?.includes(name)) {
                delete mergedResultMap[name];
            }
            else {
                switch (nodeDefinition.kind) {
                    case graphql_1.Kind.OBJECT_TYPE_DEFINITION:
                    case graphql_1.Kind.OBJECT_TYPE_EXTENSION:
                        mergedResultMap[name] = (0, type_js_1.mergeType)(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case graphql_1.Kind.ENUM_TYPE_DEFINITION:
                    case graphql_1.Kind.ENUM_TYPE_EXTENSION:
                        mergedResultMap[name] = (0, enum_js_1.mergeEnum)(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case graphql_1.Kind.UNION_TYPE_DEFINITION:
                    case graphql_1.Kind.UNION_TYPE_EXTENSION:
                        mergedResultMap[name] = (0, union_js_1.mergeUnion)(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case graphql_1.Kind.SCALAR_TYPE_DEFINITION:
                    case graphql_1.Kind.SCALAR_TYPE_EXTENSION:
                        mergedResultMap[name] = (0, scalar_js_1.mergeScalar)(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case graphql_1.Kind.INPUT_OBJECT_TYPE_DEFINITION:
                    case graphql_1.Kind.INPUT_OBJECT_TYPE_EXTENSION:
                        mergedResultMap[name] = (0, input_type_js_1.mergeInputType)(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case graphql_1.Kind.INTERFACE_TYPE_DEFINITION:
                    case graphql_1.Kind.INTERFACE_TYPE_EXTENSION:
                        mergedResultMap[name] = (0, interface_js_1.mergeInterface)(nodeDefinition, mergedResultMap[name], config, directives);
                        break;
                    case graphql_1.Kind.DIRECTIVE_DEFINITION:
                        if (mergedResultMap[name]) {
                            const isInheritedFromPrototype = name in {}; // i.e. toString
                            if (isInheritedFromPrototype) {
                                if (!isASTNode(mergedResultMap[name])) {
                                    mergedResultMap[name] = undefined;
                                }
                            }
                        }
                        mergedResultMap[name] = (0, directives_js_1.mergeDirective)(nodeDefinition, mergedResultMap[name]);
                        break;
                }
            }
        }
        else if (nodeDefinition.kind === graphql_1.Kind.SCHEMA_DEFINITION ||
            nodeDefinition.kind === graphql_1.Kind.SCHEMA_EXTENSION) {
            mergedResultMap[exports.schemaDefSymbol] = (0, schema_def_js_1.mergeSchemaDefs)(nodeDefinition, mergedResultMap[exports.schemaDefSymbol], config);
        }
    }
    return mergedResultMap;
}
exports.mergeGraphQLNodes = mergeGraphQLNodes;
function isASTNode(node) {
    return (node != null && typeof node === 'object' && 'kind' in node && typeof node.kind === 'string');
}
