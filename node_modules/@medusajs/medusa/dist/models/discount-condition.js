"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.DiscountCondition = exports.DiscountConditionOperator = exports.DiscountConditionType = void 0;
var typeorm_1 = require("typeorm");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var db_aware_column_1 = require("../utils/db-aware-column");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var customer_group_1 = require("./customer-group");
var discount_rule_1 = require("./discount-rule");
var product_1 = require("./product");
var product_collection_1 = require("./product-collection");
var product_tag_1 = require("./product-tag");
var product_type_1 = require("./product-type");
/**
 * @enum
 *
 * The discount condition's type.
 */
var DiscountConditionType;
(function (DiscountConditionType) {
    /**
     * The discount condition is used for products.
     */
    DiscountConditionType["PRODUCTS"] = "products";
    /**
     * The discount condition is used for product types.
     */
    DiscountConditionType["PRODUCT_TYPES"] = "product_types";
    /**
     * The discount condition is used for product collections.
     */
    DiscountConditionType["PRODUCT_COLLECTIONS"] = "product_collections";
    /**
     * The discount condition is used for product tags.
     */
    DiscountConditionType["PRODUCT_TAGS"] = "product_tags";
    /**
     * The discount condition is used for customer groups.
     */
    DiscountConditionType["CUSTOMER_GROUPS"] = "customer_groups";
})(DiscountConditionType = exports.DiscountConditionType || (exports.DiscountConditionType = {}));
/**
 * @enum
 *
 * The possible operators used for a discount condition.
 */
var DiscountConditionOperator;
(function (DiscountConditionOperator) {
    /**
     * The discountable resources are within the specified resources.
     */
    DiscountConditionOperator["IN"] = "in";
    /**
     * The discountable resources are everything but the specified resources.
     */
    DiscountConditionOperator["NOT_IN"] = "not_in";
})(DiscountConditionOperator = exports.DiscountConditionOperator || (exports.DiscountConditionOperator = {}));
var DiscountCondition = /** @class */ (function (_super) {
    __extends(DiscountCondition, _super);
    function DiscountCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    DiscountCondition.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "discon");
    };
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({
            type: "enum",
            enum: DiscountConditionType,
        }),
        __metadata("design:type", String)
    ], DiscountCondition.prototype, "type", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({
            type: "enum",
            enum: DiscountConditionOperator,
        }),
        __metadata("design:type", String)
    ], DiscountCondition.prototype, "operator", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], DiscountCondition.prototype, "discount_rule_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return discount_rule_1.DiscountRule; }, function (dr) { return dr.conditions; }),
        (0, typeorm_1.JoinColumn)({ name: "discount_rule_id" }),
        __metadata("design:type", Object)
    ], DiscountCondition.prototype, "discount_rule", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return product_1.Product; }),
        (0, typeorm_1.JoinTable)({
            name: "discount_condition_product",
            joinColumn: {
                name: "condition_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "product_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], DiscountCondition.prototype, "products", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return product_type_1.ProductType; }),
        (0, typeorm_1.JoinTable)({
            name: "discount_condition_product_type",
            joinColumn: {
                name: "condition_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "product_type_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], DiscountCondition.prototype, "product_types", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return product_tag_1.ProductTag; }),
        (0, typeorm_1.JoinTable)({
            name: "discount_condition_product_tag",
            joinColumn: {
                name: "condition_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "product_tag_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], DiscountCondition.prototype, "product_tags", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return product_collection_1.ProductCollection; }),
        (0, typeorm_1.JoinTable)({
            name: "discount_condition_product_collection",
            joinColumn: {
                name: "condition_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "product_collection_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], DiscountCondition.prototype, "product_collections", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return customer_group_1.CustomerGroup; }),
        (0, typeorm_1.JoinTable)({
            name: "discount_condition_customer_group",
            joinColumn: {
                name: "condition_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "customer_group_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], DiscountCondition.prototype, "customer_groups", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], DiscountCondition.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DiscountCondition.prototype, "beforeInsert", null);
    DiscountCondition = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)("dctypeuniq", ["type", "operator", "discount_rule_id"])
    ], DiscountCondition);
    return DiscountCondition;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.DiscountCondition = DiscountCondition;
/**
 * @schema DiscountCondition
 * title: "Discount Condition"
 * description: "Holds rule conditions for when a discount is applicable"
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - discount_rule_id
 *   - id
 *   - metadata
 *   - operator
 *   - type
 *   - updated_at
 * properties:
 *   id:
 *     description: The discount condition's ID
 *     type: string
 *     example: discon_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   type:
 *     description: "The type of the condition. The type affects the available resources associated with the condition. For example, if the type is `products`,
 *      that means the `products` relation will hold the products associated with this condition and other relations will be empty."
 *     type: string
 *     enum:
 *       - products
 *       - product_types
 *       - product_collections
 *       - product_tags
 *       - customer_groups
 *   operator:
 *     description: >-
 *       The operator of the condition. `in` indicates that discountable resources are within the specified resources. `not_in` indicates that
 *       discountable resources are everything but the specified resources.
 *     type: string
 *     enum:
 *       - in
 *       - not_in
 *   discount_rule_id:
 *     description: The ID of the discount rule associated with the condition
 *     type: string
 *     example: dru_01F0YESMVK96HVX7N419E3CJ7C
 *   discount_rule:
 *     description: The details of the discount rule associated with the condition.
 *     x-expandable: "discount_rule"
 *     nullable: true
 *     $ref: "#/components/schemas/DiscountRule"
 *   products:
 *     description: products associated with this condition if `type` is `products`.
 *     type: array
 *     x-expandable: "products"
 *     items:
 *       $ref: "#/components/schemas/Product"
 *   product_types:
 *     description: Product types associated with this condition if `type` is `product_types`.
 *     type: array
 *     x-expandable: "product_types"
 *     items:
 *       $ref: "#/components/schemas/ProductType"
 *   product_tags:
 *     description: Product tags associated with this condition if `type` is `product_tags`.
 *     type: array
 *     x-expandable: "product_tags"
 *     items:
 *       $ref: "#/components/schemas/ProductTag"
 *   product_collections:
 *     description: Product collections associated with this condition if `type` is `product_collections`.
 *     type: array
 *     x-expandable: "product_collections"
 *     items:
 *       $ref: "#/components/schemas/ProductCollection"
 *   customer_groups:
 *     description: Customer groups associated with this condition if `type` is `customer_groups`.
 *     type: array
 *     x-expandable: "customer_groups"
 *     items:
 *       $ref: "#/components/schemas/CustomerGroup"
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     description: The date with timezone at which the resource was deleted.
 *     nullable: true
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
//# sourceMappingURL=discount-condition.js.map