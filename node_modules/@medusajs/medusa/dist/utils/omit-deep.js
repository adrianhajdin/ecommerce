"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.omitDeep = void 0;
var is_object_1 = require("./is-object");
function omitDeep(input, excludes) {
    if (!input) {
        return input;
    }
    return Object.entries(input).reduce(function (nextInput, _a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        var shouldExclude = excludes.includes(key);
        if (shouldExclude) {
            return nextInput;
        }
        if (Array.isArray(value)) {
            nextInput[key] = value.map(function (arrItem) {
                if ((0, is_object_1.isObject)(arrItem)) {
                    return omitDeep(arrItem, excludes);
                }
                return arrItem;
            });
            return nextInput;
        }
        else if ((0, is_object_1.isObject)(value)) {
            nextInput[key] = omitDeep(value, excludes);
            return nextInput;
        }
        nextInput[key] = value;
        return nextInput;
    }, {});
}
exports.omitDeep = omitDeep;
//# sourceMappingURL=omit-deep.js.map