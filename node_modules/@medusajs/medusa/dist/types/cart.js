"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterableCartProps = exports.isCart = void 0;
var common_1 = require("./common");
var is_type_1 = require("../utils/validators/is-type");
var class_validator_1 = require("class-validator");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isCart(object) {
    return object.object === "cart";
}
exports.isCart = isCart;
var FilterableCartProps = /** @class */ (function () {
    function FilterableCartProps() {
    }
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        (0, is_type_1.IsType)([String, [String], common_1.StringComparisonOperator]),
        __metadata("design:type", Object)
    ], FilterableCartProps.prototype, "id", void 0);
    __decorate([
        (0, is_type_1.IsType)([common_1.DateComparisonOperator]),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], FilterableCartProps.prototype, "created_at", void 0);
    __decorate([
        (0, is_type_1.IsType)([common_1.DateComparisonOperator]),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], FilterableCartProps.prototype, "updated_at", void 0);
    return FilterableCartProps;
}());
exports.FilterableCartProps = FilterableCartProps;
var GiftCard = /** @class */ (function () {
    function GiftCard() {
    }
    return GiftCard;
}());
var Discount = /** @class */ (function () {
    function Discount() {
    }
    return Discount;
}());
//# sourceMappingURL=cart.js.map