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
exports.ProductVariantPricesCreateReq = exports.ProductVariantPricesUpdateReq = exports.FilterableProductVariantProps = void 0;
var common_1 = require("./common");
var class_validator_1 = require("class-validator");
var is_type_1 = require("../utils/validators/is-type");
var xor_1 = require("./validators/xor");
var FilterableProductVariantProps = /** @class */ (function () {
    function FilterableProductVariantProps() {
    }
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        (0, is_type_1.IsType)([String, [String], common_1.StringComparisonOperator]),
        __metadata("design:type", Object)
    ], FilterableProductVariantProps.prototype, "id", void 0);
    __decorate([
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], FilterableProductVariantProps.prototype, "title", void 0);
    __decorate([
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], FilterableProductVariantProps.prototype, "product_id", void 0);
    __decorate([
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], FilterableProductVariantProps.prototype, "sku", void 0);
    __decorate([
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], FilterableProductVariantProps.prototype, "barcode", void 0);
    __decorate([
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], FilterableProductVariantProps.prototype, "ean", void 0);
    __decorate([
        (0, is_type_1.IsType)([String]),
        __metadata("design:type", String)
    ], FilterableProductVariantProps.prototype, "upc", void 0);
    __decorate([
        (0, is_type_1.IsType)([Number, common_1.NumericalComparisonOperator]),
        __metadata("design:type", Object)
    ], FilterableProductVariantProps.prototype, "inventory_quantity", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], FilterableProductVariantProps.prototype, "allow_backorder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Boolean)
    ], FilterableProductVariantProps.prototype, "manage_inventory", void 0);
    __decorate([
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], FilterableProductVariantProps.prototype, "hs_code", void 0);
    __decorate([
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], FilterableProductVariantProps.prototype, "origin_country", void 0);
    __decorate([
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], FilterableProductVariantProps.prototype, "mid_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], FilterableProductVariantProps.prototype, "material", void 0);
    __decorate([
        (0, is_type_1.IsType)([Number, common_1.NumericalComparisonOperator]),
        __metadata("design:type", Object)
    ], FilterableProductVariantProps.prototype, "weight", void 0);
    __decorate([
        (0, is_type_1.IsType)([Number, common_1.NumericalComparisonOperator]),
        __metadata("design:type", Object)
    ], FilterableProductVariantProps.prototype, "length", void 0);
    __decorate([
        (0, is_type_1.IsType)([Number, common_1.NumericalComparisonOperator]),
        __metadata("design:type", Object)
    ], FilterableProductVariantProps.prototype, "height", void 0);
    __decorate([
        (0, is_type_1.IsType)([Number, common_1.NumericalComparisonOperator]),
        __metadata("design:type", Object)
    ], FilterableProductVariantProps.prototype, "width", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], FilterableProductVariantProps.prototype, "q", void 0);
    __decorate([
        (0, is_type_1.IsType)([common_1.DateComparisonOperator]),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], FilterableProductVariantProps.prototype, "created_at", void 0);
    __decorate([
        (0, is_type_1.IsType)([common_1.DateComparisonOperator]),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], FilterableProductVariantProps.prototype, "updated_at", void 0);
    return FilterableProductVariantProps;
}());
exports.FilterableProductVariantProps = FilterableProductVariantProps;
var ProductVariantPricesUpdateReq = /** @class */ (function () {
    function ProductVariantPricesUpdateReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantPricesUpdateReq.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.ValidateIf)(function (o) { return !o.id; }),
        (0, class_validator_1.Validate)(xor_1.XorConstraint, ["currency_code"]),
        __metadata("design:type", String)
    ], ProductVariantPricesUpdateReq.prototype, "region_id", void 0);
    __decorate([
        (0, class_validator_1.ValidateIf)(function (o) { return !o.id; }),
        (0, class_validator_1.Validate)(xor_1.XorConstraint, ["region_id"]),
        __metadata("design:type", String)
    ], ProductVariantPricesUpdateReq.prototype, "currency_code", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], ProductVariantPricesUpdateReq.prototype, "amount", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], ProductVariantPricesUpdateReq.prototype, "min_quantity", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], ProductVariantPricesUpdateReq.prototype, "max_quantity", void 0);
    return ProductVariantPricesUpdateReq;
}());
exports.ProductVariantPricesUpdateReq = ProductVariantPricesUpdateReq;
var ProductVariantPricesCreateReq = /** @class */ (function () {
    function ProductVariantPricesCreateReq() {
    }
    __decorate([
        (0, class_validator_1.Validate)(xor_1.XorConstraint, ["currency_code"]),
        __metadata("design:type", String)
    ], ProductVariantPricesCreateReq.prototype, "region_id", void 0);
    __decorate([
        (0, class_validator_1.Validate)(xor_1.XorConstraint, ["region_id"]),
        __metadata("design:type", String)
    ], ProductVariantPricesCreateReq.prototype, "currency_code", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], ProductVariantPricesCreateReq.prototype, "amount", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], ProductVariantPricesCreateReq.prototype, "min_quantity", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], ProductVariantPricesCreateReq.prototype, "max_quantity", void 0);
    return ProductVariantPricesCreateReq;
}());
exports.ProductVariantPricesCreateReq = ProductVariantPricesCreateReq;
//# sourceMappingURL=product-variant.js.map