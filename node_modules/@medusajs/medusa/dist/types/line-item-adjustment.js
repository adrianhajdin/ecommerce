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
exports.FilterableLineItemAdjustmentProps = void 0;
var class_validator_1 = require("class-validator");
var is_type_1 = require("../utils/validators/is-type");
var common_1 = require("./common");
var FilterableLineItemAdjustmentProps = /** @class */ (function () {
    function FilterableLineItemAdjustmentProps() {
    }
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        (0, is_type_1.IsType)([String, [String], common_1.StringComparisonOperator]),
        __metadata("design:type", Object)
    ], FilterableLineItemAdjustmentProps.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], FilterableLineItemAdjustmentProps.prototype, "item_id", void 0);
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], FilterableLineItemAdjustmentProps.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], FilterableLineItemAdjustmentProps.prototype, "resource_id", void 0);
    __decorate([
        (0, is_type_1.IsType)([common_1.DateComparisonOperator]),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], FilterableLineItemAdjustmentProps.prototype, "created_at", void 0);
    __decorate([
        (0, is_type_1.IsType)([common_1.DateComparisonOperator]),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], FilterableLineItemAdjustmentProps.prototype, "updated_at", void 0);
    return FilterableLineItemAdjustmentProps;
}());
exports.FilterableLineItemAdjustmentProps = FilterableLineItemAdjustmentProps;
//# sourceMappingURL=line-item-adjustment.js.map