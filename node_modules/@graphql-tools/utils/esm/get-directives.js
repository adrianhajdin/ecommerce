import { getDirectiveExtensions } from './getDirectiveExtensions.js';
export function getDirectivesInExtensions(node, pathToDirectivesInExtensions = ['directives']) {
    const directiveExtensions = getDirectiveExtensions(node, undefined, pathToDirectivesInExtensions);
    return Object.entries(directiveExtensions)
        .map(([directiveName, directiveArgsArr]) => directiveArgsArr?.map(directiveArgs => ({
        name: directiveName,
        args: directiveArgs,
    })))
        .flat(Infinity)
        .filter(Boolean);
}
export function getDirectiveInExtensions(node, directiveName, pathToDirectivesInExtensions = ['directives']) {
    const directiveExtensions = getDirectiveExtensions(node, undefined, pathToDirectivesInExtensions);
    return directiveExtensions[directiveName];
}
export function getDirectives(schema, node, pathToDirectivesInExtensions = ['directives']) {
    const directiveExtensions = getDirectiveExtensions(node, schema, pathToDirectivesInExtensions);
    return Object.entries(directiveExtensions)
        .map(([directiveName, directiveArgsArr]) => directiveArgsArr?.map(directiveArgs => ({
        name: directiveName,
        args: directiveArgs,
    })))
        .flat(Infinity)
        .filter(Boolean);
}
export function getDirective(schema, node, directiveName, pathToDirectivesInExtensions = ['directives']) {
    const directiveExtensions = getDirectiveExtensions(node, schema, pathToDirectivesInExtensions);
    return directiveExtensions[directiveName];
}
