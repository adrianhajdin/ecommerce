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
exports.ProductOptionValue = void 0;
var typeorm_1 = require("typeorm");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var db_aware_column_1 = require("../utils/db-aware-column");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var product_option_1 = require("./product-option");
var product_variant_1 = require("./product-variant");
var ProductOptionValue = /** @class */ (function (_super) {
    __extends(ProductOptionValue, _super);
    function ProductOptionValue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    ProductOptionValue.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "optval");
    };
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ProductOptionValue.prototype, "value", void 0);
    __decorate([
        (0, typeorm_1.Index)("idx_product_option_value_option_id"),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ProductOptionValue.prototype, "option_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_option_1.ProductOption; }, function (option) { return option.values; }),
        (0, typeorm_1.JoinColumn)({ name: "option_id" }),
        __metadata("design:type", Object)
    ], ProductOptionValue.prototype, "option", void 0);
    __decorate([
        (0, typeorm_1.Index)("idx_product_option_value_variant_id"),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ProductOptionValue.prototype, "variant_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_variant_1.ProductVariant; }, function (variant) { return variant.options; }, {
            onDelete: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)({ name: "variant_id" }),
        __metadata("design:type", Object)
    ], ProductOptionValue.prototype, "variant", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], ProductOptionValue.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductOptionValue.prototype, "beforeInsert", null);
    ProductOptionValue = __decorate([
        (0, typeorm_1.Entity)()
    ], ProductOptionValue);
    return ProductOptionValue;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.ProductOptionValue = ProductOptionValue;
/**
 * @schema ProductOptionValue
 * title: "Product Option Value"
 * description: "An option value is one of the possible values of a Product Option. Product Variants specify a unique combination of product option values."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - id
 *   - metadata
 *   - option_id
 *   - updated_at
 *   - value
 *   - variant_id
 * properties:
 *   id:
 *     description: The product option value's ID
 *     type: string
 *     example: optval_01F0YESHR7S6ECD03RF6W12DSJ
 *   value:
 *     description: The value that the Product Variant has defined for the specific Product Option (e.g. if the Product Option is "Size" this value could be `Small`, `Medium` or `Large`).
 *     type: string
 *     example: large
 *   option_id:
 *     description: The ID of the Product Option that the Product Option Value belongs to.
 *     type: string
 *     example: opt_01F0YESHQBZVKCEXJ24BS6PCX3
 *   option:
 *     description: The details of the product option that the Product Option Value belongs to.
 *     x-expandable: "option"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductOption"
 *   variant_id:
 *     description: The ID of the product variant that uses this product option value.
 *     type: string
 *     example: variant_01G1G5V2MRX2V3PVSR2WXYPFB6
 *   variant:
 *     description: The details of the product variant that uses this product option value.
 *     x-expandable: "variant"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductVariant"
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
//# sourceMappingURL=product-option-value.js.map