"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relocatedError = exports.createGraphQLError = void 0;
const graphql_1 = require("graphql");
const possibleGraphQLErrorProperties = [
    'message',
    'locations',
    'path',
    'nodes',
    'source',
    'positions',
    'originalError',
    'name',
    'stack',
    'extensions',
];
function isGraphQLErrorLike(error) {
    return (error != null &&
        typeof error === 'object' &&
        Object.keys(error).every(key => possibleGraphQLErrorProperties.includes(key)));
}
function createGraphQLError(message, options) {
    if (options?.originalError &&
        !(options.originalError instanceof Error) &&
        isGraphQLErrorLike(options.originalError)) {
        options.originalError = createGraphQLError(options.originalError.message, options.originalError);
    }
    if (graphql_1.versionInfo.major >= 17) {
        return new graphql_1.GraphQLError(message, options);
    }
    return new graphql_1.GraphQLError(message, options?.nodes, options?.source, options?.positions, options?.path, options?.originalError, options?.extensions);
}
exports.createGraphQLError = createGraphQLError;
function relocatedError(originalError, path) {
    return createGraphQLError(originalError.message, {
        nodes: originalError.nodes,
        source: originalError.source,
        positions: originalError.positions,
        path: path == null ? originalError.path : path,
        originalError,
        extensions: originalError.extensions,
    });
}
exports.relocatedError = relocatedError;
