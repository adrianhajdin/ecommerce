"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDirective = exports.getDirectives = exports.getDirectiveInExtensions = exports.getDirectivesInExtensions = void 0;
const getDirectiveExtensions_js_1 = require("./getDirectiveExtensions.js");
function getDirectivesInExtensions(node, pathToDirectivesInExtensions = ['directives']) {
    const directiveExtensions = (0, getDirectiveExtensions_js_1.getDirectiveExtensions)(node, undefined, pathToDirectivesInExtensions);
    return Object.entries(directiveExtensions)
        .map(([directiveName, directiveArgsArr]) => directiveArgsArr?.map(directiveArgs => ({
        name: directiveName,
        args: directiveArgs,
    })))
        .flat(Infinity)
        .filter(Boolean);
}
exports.getDirectivesInExtensions = getDirectivesInExtensions;
function getDirectiveInExtensions(node, directiveName, pathToDirectivesInExtensions = ['directives']) {
    const directiveExtensions = (0, getDirectiveExtensions_js_1.getDirectiveExtensions)(node, undefined, pathToDirectivesInExtensions);
    return directiveExtensions[directiveName];
}
exports.getDirectiveInExtensions = getDirectiveInExtensions;
function getDirectives(schema, node, pathToDirectivesInExtensions = ['directives']) {
    const directiveExtensions = (0, getDirectiveExtensions_js_1.getDirectiveExtensions)(node, schema, pathToDirectivesInExtensions);
    return Object.entries(directiveExtensions)
        .map(([directiveName, directiveArgsArr]) => directiveArgsArr?.map(directiveArgs => ({
        name: directiveName,
        args: directiveArgs,
    })))
        .flat(Infinity)
        .filter(Boolean);
}
exports.getDirectives = getDirectives;
function getDirective(schema, node, directiveName, pathToDirectivesInExtensions = ['directives']) {
    const directiveExtensions = (0, getDirectiveExtensions_js_1.getDirectiveExtensions)(node, schema, pathToDirectivesInExtensions);
    return directiveExtensions[directiveName];
}
exports.getDirective = getDirective;
