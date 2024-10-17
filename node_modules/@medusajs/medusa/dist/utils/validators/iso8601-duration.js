"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsISO8601Duration = void 0;
var class_validator_1 = require("class-validator");
function IsISO8601Duration(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: "IsGreaterThan",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate: function (value, args) {
                    var isoDurationRegex = /^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?$/;
                    return isoDurationRegex.test(value);
                },
                defaultMessage: function (args) {
                    return "\"".concat(propertyName, "\" must be a valid ISO 8601 duration");
                },
            },
        });
    };
}
exports.IsISO8601Duration = IsISO8601Duration;
//# sourceMappingURL=iso8601-duration.js.map