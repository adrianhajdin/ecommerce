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
exports.DiscountConditionProductTag = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var discount_condition_1 = require("./discount-condition");
var product_tag_1 = require("./product-tag");
var DiscountConditionProductTag = /** @class */ (function () {
    function DiscountConditionProductTag() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], DiscountConditionProductTag.prototype, "product_tag_id", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], DiscountConditionProductTag.prototype, "condition_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_tag_1.ProductTag; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)({ name: "product_tag_id" }),
        __metadata("design:type", product_tag_1.ProductTag)
    ], DiscountConditionProductTag.prototype, "product_tag", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return discount_condition_1.DiscountCondition; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)({ name: "condition_id" }),
        __metadata("design:type", discount_condition_1.DiscountCondition)
    ], DiscountConditionProductTag.prototype, "discount_condition", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], DiscountConditionProductTag.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], DiscountConditionProductTag.prototype, "updated_at", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], DiscountConditionProductTag.prototype, "metadata", void 0);
    DiscountConditionProductTag = __decorate([
        (0, typeorm_1.Entity)()
    ], DiscountConditionProductTag);
    return DiscountConditionProductTag;
}());
exports.DiscountConditionProductTag = DiscountConditionProductTag;
/**
 * @schema DiscountConditionProductTag
 * title: "Product Tag Discount Condition"
 * description: "This represents the association between a discount condition and a product tag"
 * type: object
 * required:
 *   - condition_id
 *   - created_at
 *   - metadata
 *   - product_tag_id
 *   - updated_at
 * properties:
 *   product_tag_id:
 *     description: The ID of the Product Tag
 *     type: string
 *     example: ptag_01F0YESHPZYY3H4SJ3A5918SBN
 *   condition_id:
 *     description: The ID of the Discount Condition
 *     type: string
 *     example: discon_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   product_tag:
 *     description: The details of the product tag.
 *     x-expandable: "product_tag"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductTag"
 *   discount_condition:
 *     description: The details of the discount condition.
 *     x-expandable: "discount_condition"
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
//# sourceMappingURL=discount-condition-product-tag.js.map