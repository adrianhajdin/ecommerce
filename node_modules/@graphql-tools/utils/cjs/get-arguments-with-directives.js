"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArgumentsWithDirectives = void 0;
const graphql_1 = require("graphql");
function isTypeWithFields(t) {
    return t.kind === graphql_1.Kind.OBJECT_TYPE_DEFINITION || t.kind === graphql_1.Kind.OBJECT_TYPE_EXTENSION;
}
function getArgumentsWithDirectives(documentNode) {
    const result = {};
    const allTypes = documentNode.definitions.filter(isTypeWithFields);
    for (const type of allTypes) {
        if (type.fields == null) {
            continue;
        }
        for (const field of type.fields) {
            const argsWithDirectives = field.arguments?.filter(arg => arg.directives?.length);
            if (!argsWithDirectives?.length) {
                continue;
            }
            const typeFieldResult = (result[`${type.name.value}.${field.name.value}`] = {});
            for (const arg of argsWithDirectives) {
                const directives = arg.directives.map(d => ({
                    name: d.name.value,
                    args: (d.arguments || []).reduce((prev, dArg) => ({ ...prev, [dArg.name.value]: (0, graphql_1.valueFromASTUntyped)(dArg.value) }), {}),
                }));
                typeFieldResult[arg.name.value] = directives;
            }
        }
    }
    return result;
}
exports.getArgumentsWithDirectives = getArgumentsWithDirectives;
