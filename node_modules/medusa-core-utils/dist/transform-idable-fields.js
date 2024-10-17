"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformIdableFields = void 0;
/**
 * Takes an object and a list of fields to tranform in that object. If the field
 * exists on the object and its value is a string it will append `_id` to the
 * field name. This is used when allowing API calls to hold either ID or object
 * values in the payload. The method returns a new object with the
 * transformation.
 * @param obj - the object to transform
 * @param fields - the fields to apply transformation to
 * @returns the transformed object
 *
 * @example
 * ```ts
 * const obj = { test: "test", toto: 1, tata: Symbol("tata") }
 * const out = transformIdableFields(obj, ["test"]) // out: { test_id: string, toto: number, tata: symbol }
 * ```
 */
var transformIdableFields = function (obj, fields) {
    var ret = __assign({}, obj);
    for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
        var key = fields_1[_i];
        key = key;
        if (key in obj && typeof obj[key] === "string") {
            ret["".concat(key.toString(), "_id")] = obj[key];
            delete ret[key];
        }
    }
    return ret;
};
exports.transformIdableFields = transformIdableFields;
//# sourceMappingURL=transform-idable-fields.js.map