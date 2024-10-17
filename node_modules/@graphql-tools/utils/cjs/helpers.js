"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertSome = exports.isSome = exports.compareNodes = exports.nodeToString = exports.compareStrings = exports.isValidPath = exports.isDocumentString = exports.asArray = void 0;
const graphql_1 = require("graphql");
const asArray = (fns) => (Array.isArray(fns) ? fns : fns ? [fns] : []);
exports.asArray = asArray;
const invalidDocRegex = /\.[a-z0-9]+$/i;
function isDocumentString(str) {
    if (typeof str !== 'string') {
        return false;
    }
    // XXX: is-valid-path or is-glob treat SDL as a valid path
    // (`scalar Date` for example)
    // this why checking the extension is fast enough
    // and prevent from parsing the string in order to find out
    // if the string is a SDL
    if (invalidDocRegex.test(str)) {
        return false;
    }
    try {
        (0, graphql_1.parse)(str);
        return true;
    }
    catch (e) { }
    return false;
}
exports.isDocumentString = isDocumentString;
const invalidPathRegex = /[‘“!%^<>`\n]/;
/**
 * Checkes whether the `str` contains any path illegal characters.
 *
 * A string may sometimes look like a path but is not (like an SDL of a simple
 * GraphQL schema). To make sure we don't yield false-positives in such cases,
 * we disallow new lines in paths (even though most Unix systems support new
 * lines in file names).
 */
function isValidPath(str) {
    return typeof str === 'string' && !invalidPathRegex.test(str);
}
exports.isValidPath = isValidPath;
function compareStrings(a, b) {
    if (String(a) < String(b)) {
        return -1;
    }
    if (String(a) > String(b)) {
        return 1;
    }
    return 0;
}
exports.compareStrings = compareStrings;
function nodeToString(a) {
    let name;
    if ('alias' in a) {
        name = a.alias?.value;
    }
    if (name == null && 'name' in a) {
        name = a.name?.value;
    }
    if (name == null) {
        name = a.kind;
    }
    return name;
}
exports.nodeToString = nodeToString;
function compareNodes(a, b, customFn) {
    const aStr = nodeToString(a);
    const bStr = nodeToString(b);
    if (typeof customFn === 'function') {
        return customFn(aStr, bStr);
    }
    return compareStrings(aStr, bStr);
}
exports.compareNodes = compareNodes;
function isSome(input) {
    return input != null;
}
exports.isSome = isSome;
function assertSome(input, message = 'Value should be something') {
    if (input == null) {
        throw new Error(message);
    }
}
exports.assertSome = assertSome;
