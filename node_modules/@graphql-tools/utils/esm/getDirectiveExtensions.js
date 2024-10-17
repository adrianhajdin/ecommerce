import { valueFromAST, valueFromASTUntyped } from 'graphql';
import { getArgumentValues } from './getArgumentValues.js';
import { memoize1 } from './memoize.js';
export function getDirectiveExtensions(directableObj, schema, pathToDirectivesInExtensions = ['directives']) {
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
    const memoizedStringify = memoize1(obj => JSON.stringify(obj));
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
                    value = getArgumentValues(directiveInSchema, directive);
                }
                if (directive.arguments) {
                    for (const argNode of directive.arguments) {
                        const argName = argNode.name.value;
                        if (value[argName] == null) {
                            const argInDirective = directiveInSchema?.args.find(arg => arg.name === argName);
                            if (argInDirective) {
                                value[argName] = valueFromAST(argNode.value, argInDirective.type);
                            }
                        }
                        if (value[argName] == null) {
                            value[argName] = valueFromASTUntyped(argNode.value);
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
