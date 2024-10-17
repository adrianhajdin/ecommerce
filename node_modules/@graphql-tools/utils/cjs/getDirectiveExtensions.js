"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDirectiveExtensions = void 0;
const graphql_1 = require("graphql");
const getArgumentValues_js_1 = require("./getArgumentValues.js");
const memoize_js_1 = require("./memoize.js");
function getDirectiveExtensions(directableObj, schema, pathToDirectivesInExtensions = ['directives']) {
    const directiveExtensions = {};
    if (directableObj.extensions) {
        let directivesInExtensions = directableObj.extensions;
        for (const pathSegment of pathToDirectivesInExtensions) {
            directivesInExtensions = directivesInExtensions?.[pathSegment];
        }
        if (directivesInExtensions != null) {
            for (const directiveNameProp in directivesInExtensions) {
                const directiveObjs = directivesInExtensions[directiveNameProp];
                const directiveName = directiveNameProp;
                if (Array.isArray(directiveObjs)) {
                    for (const directiveObj of directiveObjs) {
                        let existingDirectiveExtensions = directiveExtensions[directiveName];
                        if (!existingDirectiveExtensions) {
                            existingDirectiveExtensions = [];
                            directiveExtensions[directiveName] = existingDirectiveExtensions;
                        }
                        existingDirectiveExtensions.push(directiveObj);
                    }
                }
                else {
                    let existingDirectiveExtensions = directiveExtensions[directiveName];
                    if (!existingDirectiveExtensions) {
                        existingDirectiveExtensions = [];
                        directiveExtensions[directiveName] = existingDirectiveExtensions;
                    }
                    existingDirectiveExtensions.push(directiveObjs);
                }
            }
        }
    }
    const memoizedStringify = (0, memoize_js_1.memoize1)(obj => JSON.stringify(obj));
    const astNodes = [];
    if (directableObj.astNode) {
        astNodes.push(directableObj.astNode);
    }
    if (directableObj.extensionASTNodes) {
        astNodes.push(...directableObj.extensionASTNodes);
    }
    for (const astNode of astNodes) {
        if (astNode.directives?.length) {
            for (const directive of astNode.directives) {
                const directiveName = directive.name.value;
                let existingDirectiveExtensions = directiveExtensions[directiveName];
                if (!existingDirectiveExtensions) {
                    existingDirectiveExtensions = [];
                    directiveExtensions[directiveName] = existingDirectiveExtensions;
                }
                const directiveInSchema = schema?.getDirective(directiveName);
                let value = {};
                if (directiveInSchema) {
                    value = (0, getArgumentValues_js_1.getArgumentValues)(directiveInSchema, directive);
                }
                if (directive.arguments) {
                    for (const argNode of directive.arguments) {
                        const argName = argNode.name.value;
                        if (value[argName] == null) {
                            const argInDirective = directiveInSchema?.args.find(arg => arg.name === argName);
                            if (argInDirective) {
                                value[argName] = (0, graphql_1.valueFromAST)(argNode.value, argInDirective.type);
                            }
                        }
                        if (value[argName] == null) {
                            value[argName] = (0, graphql_1.valueFromASTUntyped)(argNode.value);
                        }
                    }
                }
                if (astNodes.length > 0 && existingDirectiveExtensions.length > 0) {
                    const valStr = memoizedStringify(value);
                    if (existingDirectiveExtensions.some(val => memoizedStringify(val) === valStr)) {
                        continue;
                    }
                }
                existingDirectiveExtensions.push(value);
            }
        }
    }
    return directiveExtensions;
}
exports.getDirectiveExtensions = getDirectiveExtensions;
