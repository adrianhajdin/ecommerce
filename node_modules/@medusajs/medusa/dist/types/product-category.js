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
exports.ProductBatchProductCategory = exports.AdminProductCategoriesReqBase = exports.tempReorderRank = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var medusa_core_utils_1 = require("medusa-core-utils");
exports.tempReorderRank = 99999;
var AdminProductCategoriesReqBase = /** @class */ (function () {
    function AdminProductCategoriesReqBase() {
    }
    __decorate([
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return (value === "null" ? null : value);
        }),
        (0, class_validator_1.ValidateIf)(function (input) { return (0, medusa_core_utils_1.isDefined)(input.description); }),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminProductCategoriesReqBase.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminProductCategoriesReqBase.prototype, "handle", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminProductCategoriesReqBase.prototype, "is_internal", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminProductCategoriesReqBase.prototype, "is_active", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return value === "null" ? null : value;
        }),
        __metadata("design:type", Object)
    ], AdminProductCategoriesReqBase.prototype, "parent_category_id", void 0);
    return AdminProductCategoriesReqBase;
}());
exports.AdminProductCategoriesReqBase = AdminProductCategoriesReqBase;
var ProductBatchProductCategory = /** @class */ (function () {
    function ProductBatchProductCategory() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ProductBatchProductCategory.prototype, "id", void 0);
    return ProductBatchProductCategory;
}());
exports.ProductBatchProductCategory = ProductBatchProductCategory;
//# sourceMappingURL=product-category.js.map