"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExactlyOne = void 0;
var class_validator_1 = require("class-validator");
// Defines constraint that ensures exactly one of given properties
// It simply checks if any of the values provided is defined as
// a property on the class along side the property which is decorated
//
// Inspiration: https://github.com/typestack/class-validator/issues/245
var ExactlyOne = /** @class */ (function () {
    function ExactlyOne() {
    }
    ExactlyOne.prototype.validate = function (propertyValue, args) {
        if ((0, class_validator_1.isDefined)(propertyValue)) {
            return this.getFailedConstraints(args).length === 0;
        }
        return true;
    };
    ExactlyOne.prototype.defaultMessage = function (args) {
        return "Only one of ".concat(args.property, ", ").concat(this.getFailedConstraints(args).join(", "), " is allowed");
    };
    ExactlyOne.prototype.getFailedConstraints = function (args) {
        return args.constraints.filter(function (prop) { return (0, class_validator_1.isDefined)(args.object[prop]); });
    };
    ExactlyOne = __decorate([
        (0, class_validator_1.ValidatorConstraint)({ async: false })
    ], ExactlyOne);
    return ExactlyOne;
}());
exports.ExactlyOne = ExactlyOne;
//# sourceMappingURL=exactly-one.js.map