"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDescriptionNode = void 0;
const graphql_1 = require("graphql");
function getDescriptionNode(obj) {
    if (obj.astNode?.description) {
        return {
            ...obj.astNode.description,
            block: true,
        };
    }
    if (obj.description) {
        return {
            kind: graphql_1.Kind.STRING,
            value: obj.description,
            block: true,
        };
    }
}
exports.getDescriptionNode = getDescriptionNode;
