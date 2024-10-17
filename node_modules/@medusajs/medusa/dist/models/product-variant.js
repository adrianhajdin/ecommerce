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
exports.ProductVariant = void 0;
var typeorm_1 = require("typeorm");
var utils_1 = require("../utils");
var interfaces_1 = require("../interfaces");
var money_amount_1 = require("./money-amount");
var product_1 = require("./product");
var product_option_value_1 = require("./product-option-value");
var product_variant_inventory_item_1 = require("./product-variant-inventory-item");
var ProductVariant = /** @class */ (function (_super) {
    __extends(ProductVariant, _super);
    function ProductVariant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    ProductVariant.prototype.beforeInsert = function () {
        this.id = (0, utils_1.generateEntityId)(this.id, "variant");
    };
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ProductVariant.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ProductVariant.prototype, "product_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_1.Product; }, function (product) { return product.variants; }),
        (0, typeorm_1.JoinColumn)({ name: "product_id" }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "product", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return money_amount_1.MoneyAmount; }, {
            cascade: ["remove", "soft-remove", "recover"],
        }),
        (0, typeorm_1.JoinTable)({
            name: "product_variant_money_amount",
            joinColumn: {
                name: "variant_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "money_amount_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], ProductVariant.prototype, "prices", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "text" }),
        (0, typeorm_1.Index)({ unique: true, where: "deleted_at IS NULL" }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "sku", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "text" }),
        (0, typeorm_1.Index)({ unique: true, where: "deleted_at IS NULL" }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "barcode", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "text" }),
        (0, typeorm_1.Index)({ unique: true, where: "deleted_at IS NULL" }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "ean", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "text" }),
        (0, typeorm_1.Index)({ unique: true, where: "deleted_at IS NULL" }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "upc", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "text", default: 0 }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "variant_rank", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        __metadata("design:type", Number)
    ], ProductVariant.prototype, "inventory_quantity", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: false }),
        __metadata("design:type", Boolean)
    ], ProductVariant.prototype, "allow_backorder", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], ProductVariant.prototype, "manage_inventory", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "text" }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "hs_code", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "text" }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "origin_country", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "text" }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "mid_code", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: "text" }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "material", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "weight", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "length", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "height", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "width", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_option_value_1.ProductOptionValue; }, function (optionValue) { return optionValue.variant; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], ProductVariant.prototype, "options", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_variant_inventory_item_1.ProductVariantInventoryItem; }, function (inventoryItem) { return inventoryItem.variant; }, {
            cascade: ["soft-remove", "remove"],
        }),
        __metadata("design:type", Array)
    ], ProductVariant.prototype, "inventory_items", void 0);
    __decorate([
        (0, utils_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], ProductVariant.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductVariant.prototype, "beforeInsert", null);
    ProductVariant = __decorate([
        (0, typeorm_1.Entity)()
    ], ProductVariant);
    return ProductVariant;
}(interfaces_1.SoftDeletableEntity));
exports.ProductVariant = ProductVariant;
/**
 * @schema ProductVariant
 * title: "Product Variant"
 * description: "A Product Variant represents a Product with a specific set of Product Option configurations. The maximum number of Product Variants that a Product can have is given by the number of available Product Option combinations. A product must at least have one product variant."
 * type: object
 * required:
 *   - allow_backorder
 *   - barcode
 *   - created_at
 *   - deleted_at
 *   - ean
 *   - height
 *   - hs_code
 *   - id
 *   - inventory_quantity
 *   - length
 *   - manage_inventory
 *   - material
 *   - metadata
 *   - mid_code
 *   - origin_country
 *   - product_id
 *   - sku
 *   - title
 *   - upc
 *   - updated_at
 *   - weight
 *   - width
 * properties:
 *   id:
 *     description: The product variant's ID
 *     type: string
 *     example: variant_01G1G5V2MRX2V3PVSR2WXYPFB6
 *   title:
 *     description: A title that can be displayed for easy identification of the Product Variant.
 *     type: string
 *     example: Small
 *   product_id:
 *     description: The ID of the product that the product variant belongs to.
 *     type: string
 *     example: prod_01G1G5V2MBA328390B5AXJ610F
 *   product:
 *     description: The details of the product that the product variant belongs to.
 *     x-expandable: "product"
 *     nullable: true
 *     $ref: "#/components/schemas/Product"
 *   prices:
 *     description: The details of the prices of the Product Variant, each represented as a Money Amount. Each Money Amount represents a price in a given currency or a specific Region.
 *     type: array
 *     x-expandable: "prices"
 *     items:
 *       $ref: "#/components/schemas/MoneyAmount"
 *   sku:
 *     description: The unique stock keeping unit used to identify the Product Variant. This will usually be a unique identifer for the item that is to be shipped, and can be referenced across multiple systems.
 *     nullable: true
 *     type: string
 *     example: shirt-123
 *   barcode:
 *     description: A generic field for a GTIN number that can be used to identify the Product Variant.
 *     nullable: true
 *     type: string
 *     example: null
 *   ean:
 *     description: An EAN barcode number that can be used to identify the Product Variant.
 *     nullable: true
 *     type: string
 *     example: null
 *   upc:
 *     description: A UPC barcode number that can be used to identify the Product Variant.
 *     nullable: true
 *     type: string
 *     example: null
 *   variant_rank:
 *     description: The ranking of this variant
 *     nullable: true
 *     type: number
 *     default: 0
 *   inventory_quantity:
 *     description: The current quantity of the item that is stocked.
 *     type: integer
 *     example: 100
 *   allow_backorder:
 *     description: Whether the Product Variant should be purchasable when `inventory_quantity` is 0.
 *     type: boolean
 *     default: false
 *   manage_inventory:
 *     description: Whether Medusa should manage inventory for the Product Variant.
 *     type: boolean
 *     default: true
 *   hs_code:
 *     description: The Harmonized System code of the Product Variant. May be used by Fulfillment Providers to pass customs information to shipping carriers.
 *     nullable: true
 *     type: string
 *     example: null
 *   origin_country:
 *     description: The country in which the Product Variant was produced. May be used by Fulfillment Providers to pass customs information to shipping carriers.
 *     nullable: true
 *     type: string
 *     example: null
 *   mid_code:
 *     description: The Manufacturers Identification code that identifies the manufacturer of the Product Variant. May be used by Fulfillment Providers to pass customs information to shipping carriers.
 *     nullable: true
 *     type: string
 *     example: null
 *   material:
 *     description: The material and composition that the Product Variant is made of, May be used by Fulfillment Providers to pass customs information to shipping carriers.
 *     nullable: true
 *     type: string
 *     example: null
 *   weight:
 *     description: The weight of the Product Variant. May be used in shipping rate calculations.
 *     nullable: true
 *     type: number
 *     example: null
 *   length:
 *     description: "The length of the Product Variant. May be used in shipping rate calculations."
 *     nullable: true
 *     type: number
 *     example: null
 *   height:
 *     description: The height of the Product Variant. May be used in shipping rate calculations.
 *     nullable: true
 *     type: number
 *     example: null
 *   width:
 *     description: The width of the Product Variant. May be used in shipping rate calculations.
 *     nullable: true
 *     type: number
 *     example: null
 *   options:
 *     description: The details of the product options that this product variant defines values for.
 *     type: array
 *     x-expandable: "options"
 *     items:
 *       $ref: "#/components/schemas/ProductOptionValue"
 *   inventory_items:
 *     description: The details inventory items of the product variant.
 *     type: array
 *     x-expandable: "inventory_items"
 *     items:
 *       $ref: "#/components/schemas/ProductVariantInventoryItem"
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
 *   purchasable:
 *     description: |
 *        Only used with the inventory modules.
 *        A boolean value indicating whether the Product Variant is purchasable.
 *        A variant is purchasable if:
 *          - inventory is not managed
 *          - it has no inventory items
 *          - it is in stock
 *          - it is backorderable.
 *     type: boolean
 */
//# sourceMappingURL=product-variant.js.map