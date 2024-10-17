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
exports.DiscountConditionCustomerGroup = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var customer_group_1 = require("./customer-group");
var discount_condition_1 = require("./discount-condition");
var DiscountConditionCustomerGroup = /** @class */ (function () {
    function DiscountConditionCustomerGroup() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], DiscountConditionCustomerGroup.prototype, "customer_group_id", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], DiscountConditionCustomerGroup.prototype, "condition_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return customer_group_1.CustomerGroup; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)({ name: "customer_group_id" }),
        __metadata("design:type", customer_group_1.CustomerGroup)
    ], DiscountConditionCustomerGroup.prototype, "customer_group", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return discount_condition_1.DiscountCondition; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)({ name: "condition_id" }),
        __metadata("design:type", discount_condition_1.DiscountCondition)
    ], DiscountConditionCustomerGroup.prototype, "discount_condition", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], DiscountConditionCustomerGroup.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], DiscountConditionCustomerGroup.prototype, "updated_at", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], DiscountConditionCustomerGroup.prototype, "metadata", void 0);
    DiscountConditionCustomerGroup = __decorate([
        (0, typeorm_1.Entity)()
    ], DiscountConditionCustomerGroup);
    return DiscountConditionCustomerGroup;
}());
exports.DiscountConditionCustomerGroup = DiscountConditionCustomerGroup;
/**
 * @schema DiscountConditionCustomerGroup
 * title: "Product Tag Discount Condition"
 * description: "Associates a discount condition with a customer group"
 * type: object
 * required:
 *   - condition_id
 *   - created_at
 *   - customer_group_id
 *   - metadata
 *   - updated_at
 * properties:
 *   customer_group_id:
 *     description: The ID of the Product Tag
 *     type: string
 *     example: cgrp_01G8ZH853Y6TFXWPG5EYE81X63
 *   condition_id:
 *     description: The ID of the Discount Condition
 *     type: string
 *     example: discon_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   customer_group:
 *     description: Available if the relation `customer_group` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/CustomerGroup"
 *   discount_condition:
 *     description: Available if the relation `discount_condition` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/DiscountCondition"
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
//# sourceMappingURL=discount-condition-customer-group.js.map