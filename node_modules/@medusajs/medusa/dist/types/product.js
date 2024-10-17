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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeReq = exports.ProductTagReq = exports.ProductProductCategoryReq = exports.ProductSalesChannelReq = exports.FilterableProductProps = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var models_1 = require("../models");
var common_1 = require("./common");
var sales_channels_1 = __importDefault(require("../loaders/feature-flags/sales-channels"));
var feature_flag_decorators_1 = require("../utils/feature-flag-decorators");
var is_boolean_1 = require("../utils/validators/is-boolean");
var is_type_1 = require("../utils/validators/is-type");
/**
 * Filters to apply on retrieved products.
 */
var FilterableProductProps = /** @class */ (function () {
    function FilterableProductProps() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], FilterableProductProps.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], FilterableProductProps.prototype, "q", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(models_1.ProductStatus, { each: true }),
        __metadata("design:type", Array)
    ], FilterableProductProps.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], FilterableProductProps.prototype, "price_list_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], FilterableProductProps.prototype, "collection_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], FilterableProductProps.prototype, "tags", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], FilterableProductProps.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], FilterableProductProps.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], FilterableProductProps.prototype, "handle", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return is_boolean_1.optionalBooleanMapper.get(value.toLowerCase());
        }),
        __metadata("design:type", Boolean)
    ], FilterableProductProps.prototype, "is_giftcard", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], FilterableProductProps.prototype, "type_id", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)(sales_channels_1.default.key, [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)()]),
        __metadata("design:type", Array)
    ], FilterableProductProps.prototype, "sales_channel_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], FilterableProductProps.prototype, "discount_condition_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], FilterableProductProps.prototype, "category_id", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return is_boolean_1.optionalBooleanMapper.get(value.toLowerCase());
        }),
        __metadata("design:type", Boolean)
    ], FilterableProductProps.prototype, "include_category_children", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator
        /**
         * Date filters to apply on the products' `updated_at` date.
         */
        )
    ], FilterableProductProps.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator
        /**
         * Date filters to apply on the products' `deleted_at` date.
         */
        )
    ], FilterableProductProps.prototype, "updated_at", void 0);
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], FilterableProductProps.prototype, "deleted_at", void 0);
    return FilterableProductProps;
}());
exports.FilterableProductProps = FilterableProductProps;
var ProductSalesChannelReq = /** @class */ (function () {
    function ProductSalesChannelReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ProductSalesChannelReq.prototype, "id", void 0);
    return ProductSalesChannelReq;
}());
exports.ProductSalesChannelReq = ProductSalesChannelReq;
var ProductProductCategoryReq = /** @class */ (function () {
    function ProductProductCategoryReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ProductProductCategoryReq.prototype, "id", void 0);
    return ProductProductCategoryReq;
}());
exports.ProductProductCategoryReq = ProductProductCategoryReq;
var ProductTagReq = /** @class */ (function () {
    function ProductTagReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductTagReq.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ProductTagReq.prototype, "value", void 0);
    return ProductTagReq;
}());
exports.ProductTagReq = ProductTagReq;
/**
 * The details of a product type, used to create or update an existing product type.
 */
var ProductTypeReq = /** @class */ (function () {
    function ProductTypeReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductTypeReq.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ProductTypeReq.prototype, "value", void 0);
    return ProductTypeReq;
}());
exports.ProductTypeReq = ProductTypeReq;
//# sourceMappingURL=product.js.map