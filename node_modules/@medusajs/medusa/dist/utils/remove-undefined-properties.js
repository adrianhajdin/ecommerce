"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUndefinedProperties = void 0;
var medusa_core_utils_1 = require("medusa-core-utils");
function removeUndefinedProperties(inputObj) {
    var removeProperties = function (obj) {
        var res = {};
        Object.keys(obj).reduce(function (acc, key) {
            if (typeof obj[key] === "undefined") {
                return acc;
            }
            acc[key] = removeUndefinedDeeply(obj[key]);
            return acc;
        }, res);
        return res;
    };
    return removeProperties(inputObj);
}
exports.removeUndefinedProperties = removeUndefinedProperties;
function removeUndefinedDeeply(input) {
    if ((0, medusa_core_utils_1.isDefined)(input)) {
        if (input === null || input === "null") {
            return null;
        }
        else if (Array.isArray(input)) {
            return input
                .map(function (item) {
                return removeUndefinedDeeply(item);
            })
                .filter(function (v) { return (0, medusa_core_utils_1.isDefined)(v); });
        }
        else if (Object.prototype.toString.call(input) === "[object Date]") {
            return input;
        }
        else if (typeof input === "object") {
            return Object.keys(input).reduce(function (acc, key) {
                if (typeof input[key] === "undefined") {
                    return acc;
                }
                acc[key] = removeUndefinedDeeply(input[key]);
                return acc;
            }, {});
        }
        else {
            return input;
        }
    }
}
//# sourceMappingURL=remove-undefined-properties.js.map