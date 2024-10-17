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
exports.CustomerGroupUpdate = exports.CustomerGroupsBatchCustomer = exports.FilterableCustomerGroupProps = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var is_type_1 = require("../utils/validators/is-type");
var common_1 = require("./common");
/**
 * Filters to apply on the retrieved customer groups.
 */
var FilterableCustomerGroupProps = /** @class */ (function () {
    function FilterableCustomerGroupProps() {
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, is_type_1.IsType)([String, [String], common_1.StringComparisonOperator]),
        __metadata("design:type", Object)
    ], FilterableCustomerGroupProps.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], FilterableCustomerGroupProps.prototype, "q", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], FilterableCustomerGroupProps.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator
        /**
         * Date filters to apply on the customer groups' `created_at` date.
         */
        )
    ], FilterableCustomerGroupProps.prototype, "updated_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator
        /**
         * Filter customer groups by their associated discount condition's ID.
         */
        )
    ], FilterableCustomerGroupProps.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], FilterableCustomerGroupProps.prototype, "discount_condition_id", void 0);
    return FilterableCustomerGroupProps;
}());
exports.FilterableCustomerGroupProps = FilterableCustomerGroupProps;
var CustomerGroupsBatchCustomer = /** @class */ (function () {
    function CustomerGroupsBatchCustomer() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CustomerGroupsBatchCustomer.prototype, "id", void 0);
    return CustomerGroupsBatchCustomer;
}());
exports.CustomerGroupsBatchCustomer = CustomerGroupsBatchCustomer;
var CustomerGroupUpdate = /** @class */ (function () {
    function CustomerGroupUpdate() {
    }
    return CustomerGroupUpdate;
}());
exports.CustomerGroupUpdate = CustomerGroupUpdate;
//# sourceMappingURL=customer-groups.js.map