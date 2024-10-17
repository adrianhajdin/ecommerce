"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XorConstraint = void 0;
var class_validator_1 = require("class-validator");
// returns true if it has xor relation with the specified key in the constraint
// stolen from: https://github.com/typestack/class-validator/issues/168#issuecomment-373944641
var XorConstraint = /** @class */ (function () {
    function XorConstraint() {
    }
    XorConstraint.prototype.validate = function (propertyValue, args) {
        return ((!!propertyValue && !args.object[args.constraints[0]]) ||
            (!propertyValue && !!args.object[args.constraints[0]]));
    };
    XorConstraint.prototype.defaultMessage = function (args) {
        return "Failed XOR relation between \"".concat(args.property, "\" and \"").concat(args.constraints[0], "\".");
    };
    XorConstraint = __decorate([
        (0, class_validator_1.ValidatorConstraint)({ name: "xorConstraint", async: false })
    ], XorConstraint);
    return XorConstraint;
}());
exports.XorConstraint = XorConstraint;
//# sourceMappingURL=xor.js.map