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
exports.AdminPriceListPricesCreateReq = exports.AdminPriceListPricesUpdateReq = exports.FilterablePriceListProps = exports.PriceListStatus = exports.PriceListType = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var common_1 = require("./common");
var xor_1 = require("./validators/xor");
/**
 * @enum
 *
 * The type of price list.
 */
var PriceListType;
(function (PriceListType) {
    /**
     * The price list is used for a sale.
     */
    PriceListType["SALE"] = "sale";
    /**
     * The price list is used to override original prices for specific conditions.
     */
    PriceListType["OVERRIDE"] = "override";
})(PriceListType = exports.PriceListType || (exports.PriceListType = {}));
/**
 * @enum
 *
 * The status of a price list.
 */
var PriceListStatus;
(function (PriceListStatus) {
    /**
     * The price list is active, meaning its prices are applied to customers.
     */
    PriceListStatus["ACTIVE"] = "active";
    /**
     * The price list is a draft, meaning its not yet applied to customers.
     */
    PriceListStatus["DRAFT"] = "draft";
})(PriceListStatus = exports.PriceListStatus || (exports.PriceListStatus = {}));
/**
 * Filters to apply on the retrieved price lists.
 */
var FilterablePriceListProps = /** @class */ (function () {
    function FilterablePriceListProps() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], FilterablePriceListProps.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], FilterablePriceListProps.prototype, "q", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(PriceListStatus, { each: true }),
        __metadata("design:type", Array)
    ], FilterablePriceListProps.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], FilterablePriceListProps.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], FilterablePriceListProps.prototype, "customer_groups", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], FilterablePriceListProps.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(PriceListType, { each: true }),
        __metadata("design:type", Array)
    ], FilterablePriceListProps.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator
        /**
         * Date filters to apply on the price lists' `updated_at` date.
         */
        )
    ], FilterablePriceListProps.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator
        /**
         * Date filters to apply on the price lists' `deleted_at` date.
         */
        )
    ], FilterablePriceListProps.prototype, "updated_at", void 0);
    __decorate([
        (0, class_validator_1.ValidateNested)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], FilterablePriceListProps.prototype, "deleted_at", void 0);
    return FilterablePriceListProps;
}());
exports.FilterablePriceListProps = FilterablePriceListProps;
var AdminPriceListPricesUpdateReq = /** @class */ (function () {
    function AdminPriceListPricesUpdateReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPriceListPricesUpdateReq.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.ValidateIf)(function (o) { return !o.id; }),
        (0, class_validator_1.Validate)(xor_1.XorConstraint, ["currency_code"]),
        __metadata("design:type", String)
    ], AdminPriceListPricesUpdateReq.prototype, "region_id", void 0);
    __decorate([
        (0, class_validator_1.ValidateIf)(function (o) { return !o.id; }),
        (0, class_validator_1.Validate)(xor_1.XorConstraint, ["region_id"]),
        __metadata("design:type", String)
    ], AdminPriceListPricesUpdateReq.prototype, "currency_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPriceListPricesUpdateReq.prototype, "variant_id", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], AdminPriceListPricesUpdateReq.prototype, "amount", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], AdminPriceListPricesUpdateReq.prototype, "min_quantity", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], AdminPriceListPricesUpdateReq.prototype, "max_quantity", void 0);
    return AdminPriceListPricesUpdateReq;
}());
exports.AdminPriceListPricesUpdateReq = AdminPriceListPricesUpdateReq;
var AdminPriceListPricesCreateReq = /** @class */ (function () {
    function AdminPriceListPricesCreateReq() {
    }
    __decorate([
        (0, class_validator_1.Validate)(xor_1.XorConstraint, ["currency_code"]),
        __metadata("design:type", String)
    ], AdminPriceListPricesCreateReq.prototype, "region_id", void 0);
    __decorate([
        (0, class_validator_1.Validate)(xor_1.XorConstraint, ["region_id"]),
        __metadata("design:type", String)
    ], AdminPriceListPricesCreateReq.prototype, "currency_code", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], AdminPriceListPricesCreateReq.prototype, "amount", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPriceListPricesCreateReq.prototype, "variant_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], AdminPriceListPricesCreateReq.prototype, "min_quantity", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], AdminPriceListPricesCreateReq.prototype, "max_quantity", void 0);
    return AdminPriceListPricesCreateReq;
}());
exports.AdminPriceListPricesCreateReq = AdminPriceListPricesCreateReq;
//# sourceMappingURL=price-list.js.map