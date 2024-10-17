"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeEnumValues = void 0;
const utils_1 = require("@graphql-tools/utils");
const directives_js_1 = require("./directives.js");
function mergeEnumValues(first, second, config, directives) {
    if (config?.consistentEnumMerge) {
        const reversed = [];
        if (first) {
            reversed.push(...first);
        }
        first = second;
        second = reversed;
    }
    const enumValueMap = new Map();
    if (first) {
        for (const firstValue of first) {
            enumValueMap.set(firstValue.name.value, firstValue);
        }
    }
    if (second) {
        for (const secondValue of second) {
            const enumValue = secondValue.name.value;
            if (enumValueMap.has(enumValue)) {
                const firstValue = enumValueMap.get(enumValue);
                firstValue.description = secondValue.description || firstValue.description;
                firstValue.directives = (0, directives_js_1.mergeDirectives)(secondValue.directives, firstValue.directives, directives);
            }
            else {
                enumValueMap.set(enumValue, secondValue);
            }
        }
    }
    const result = [...enumValueMap.values()];
    if (config && config.sort) {
        result.sort(utils_1.compareNodes);
    }
    return result;
}
exports.mergeEnumValues = mergeEnumValues;
