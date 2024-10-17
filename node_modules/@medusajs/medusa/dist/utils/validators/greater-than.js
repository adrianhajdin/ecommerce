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
exports.IsGreaterThan = void 0;
var class_validator_1 = require("class-validator");
function IsGreaterThan(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "IsGreaterThan",
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate: function (value, args) {
                    var _a = __read(args.constraints, 1), relatedPropertyName = _a[0];
                    var relatedValue = args.object[relatedPropertyName];
                    return relatedValue ? value > relatedValue : (0, class_validator_1.isDefined)(value);
                },
                defaultMessage: function (args) {
                    return "\"".concat(propertyName, "\" must be greater than ").concat(JSON.stringify(args === null || args === void 0 ? void 0 : args.constraints[0]));
                },
            },
        });
    };
}
exports.IsGreaterThan = IsGreaterThan;
//# sourceMappingURL=greater-than.js.map