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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.ProductStatus = void 0;
var typeorm_1 = require("typeorm");
var lodash_1 = __importDefault(require("lodash"));
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var utils_1 = require("../utils");
var db_aware_column_1 = require("../utils/db-aware-column");
var feature_flag_decorators_1 = require("../utils/feature-flag-decorators");
var image_1 = require("./image");
var product_category_1 = require("./product-category");
var product_collection_1 = require("./product-collection");
var product_option_1 = require("./product-option");
var product_tag_1 = require("./product-tag");
var product_type_1 = require("./product-type");
var product_variant_1 = require("./product-variant");
var sales_channel_1 = require("./sales-channel");
var shipping_profile_1 = require("./shipping-profile");
/**
 * @enum
 *
 * The status of a product.
 */
var ProductStatus;
(function (ProductStatus) {
    /**
     * The product is a draft. It's not viewable by customers.
     */
    ProductStatus["DRAFT"] = "draft";
    /**
     * The product is proposed, but not yet published.
     */
    ProductStatus["PROPOSED"] = "proposed";
    /**
     * The product is published.
     */
    ProductStatus["PUBLISHED"] = "published";
    /**
     * The product is rejected. It's not viewable by customers.
     */
    ProductStatus["REJECTED"] = "rejected";
})(ProductStatus = exports.ProductStatus || (exports.ProductStatus = {}));
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    Product.prototype.beforeInsert = function () {
        this.id = (0, utils_1.generateEntityId)(this.id, "prod");
        if (!this.handle) {
            this.handle = lodash_1.default.kebabCase(this.title);
        }
        if (this.profile_id) {
            this.profiles = [{ id: this.profile_id }];
        }
    };
    /**
     * @apiIgnore
     */
    Product.prototype.beforeUpdate = function () {
        if (this.profile_id) {
            this.profiles = [{ id: this.profile_id }];
        }
    };
    /**
     * @apiIgnore
     */
    Product.prototype.afterLoad = function () {
        var _a;
        if (this.profiles) {
            this.profile = this.profiles[this.profiles.length - 1];
            this.profile_id = (_a = this.profile) === null || _a === void 0 ? void 0 : _a.id;
        }
    };
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Product.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "subtitle", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Index)({ unique: true, where: "deleted_at IS NULL" }),
        (0, typeorm_1.Column)({ type: "text", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "handle", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: false }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "is_giftcard", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: ProductStatus, default: "draft" }),
        __metadata("design:type", String)
    ], Product.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return image_1.Image; }, { cascade: ["insert"] }),
        (0, typeorm_1.JoinTable)({
            name: "product_images",
            joinColumn: {
                name: "product_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "image_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], Product.prototype, "images", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "thumbnail", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_option_1.ProductOption; }, function (productOption) { return productOption.product; }),
        __metadata("design:type", Array)
    ], Product.prototype, "options", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_variant_1.ProductVariant; }, function (variant) { return variant.product; }, {
            cascade: true,
        }),
        __metadata("design:type", Array)
    ], Product.prototype, "variants", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return product_category_1.ProductCategory; }, { cascade: ["remove", "soft-remove"] }),
        (0, typeorm_1.JoinTable)({
            name: "product_category_product",
            joinColumn: {
                name: "product_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "product_category_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], Product.prototype, "categories", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return shipping_profile_1.ShippingProfile; }, {
            cascade: ["remove", "soft-remove"],
        }),
        (0, typeorm_1.JoinTable)({
            name: "product_shipping_profile",
            joinColumn: {
                name: "product_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "profile_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], Product.prototype, "profiles", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "weight", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "length", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "height", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "width", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "hs_code", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "origin_country", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "mid_code", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "material", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "collection_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_collection_1.ProductCollection; }),
        (0, typeorm_1.JoinColumn)({ name: "collection_id" }),
        __metadata("design:type", Object)
    ], Product.prototype, "collection", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "type_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_type_1.ProductType; }),
        (0, typeorm_1.JoinColumn)({ name: "type_id" }),
        __metadata("design:type", Object)
    ], Product.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return product_tag_1.ProductTag; }),
        (0, typeorm_1.JoinTable)({
            name: "product_tags",
            joinColumn: {
                name: "product_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "product_tag_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], Product.prototype, "tags", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "discountable", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "external_id", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], Product.prototype, "metadata", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)("sales_channels", [
            (0, typeorm_1.ManyToMany)(function () { return sales_channel_1.SalesChannel; }, { cascade: ["remove", "soft-remove"] }),
            (0, typeorm_1.JoinTable)({
                name: "product_sales_channel",
                joinColumn: {
                    name: "product_id",
                    referencedColumnName: "id",
                },
                inverseJoinColumn: {
                    name: "sales_channel_id",
                    referencedColumnName: "id",
                },
            }),
        ]),
        __metadata("design:type", Array)
    ], Product.prototype, "sales_channels", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Product.prototype, "beforeInsert", null);
    __decorate([
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Product.prototype, "beforeUpdate", null);
    __decorate([
        (0, typeorm_1.AfterLoad)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Product.prototype, "afterLoad", null);
    Product = __decorate([
        (0, typeorm_1.Entity)()
    ], Product);
    return Product;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.Product = Product;
/**
 * @schema Product
 * title: "Product"
 * description: "A product is a saleable item that holds general information such as name or description. It must include at least one Product Variant, where each product variant defines different options to purchase the product with (for example, different sizes or colors). The prices and inventory of the product are defined on the variant level."
 * type: object
 * required:
 *   - collection_id
 *   - created_at
 *   - deleted_at
 *   - description
 *   - discountable
 *   - external_id
 *   - handle
 *   - height
 *   - hs_code
 *   - id
 *   - is_giftcard
 *   - length
 *   - material
 *   - metadata
 *   - mid_code
 *   - origin_country
 *   - profile_id
 *   - status
 *   - subtitle
 *   - type_id
 *   - thumbnail
 *   - title
 *   - updated_at
 *   - weight
 *   - width
 * properties:
 *   id:
 *     description: The product's ID
 *     type: string
 *     example: prod_01G1G5V2MBA328390B5AXJ610F
 *   title:
 *     description: A title that can be displayed for easy identification of the Product.
 *     type: string
 *     example: Medusa Coffee Mug
 *   subtitle:
 *     description: An optional subtitle that can be used to further specify the Product.
 *     nullable: true
 *     type: string
 *   description:
 *     description: A short description of the Product.
 *     nullable: true
 *     type: string
 *     example: Every programmer's best friend.
 *   handle:
 *     description: A unique identifier for the Product (e.g. for slug structure).
 *     nullable: true
 *     type: string
 *     example: coffee-mug
 *   is_giftcard:
 *     description: Whether the Product represents a Gift Card. Products that represent Gift Cards will automatically generate a redeemable Gift Card code once they are purchased.
 *     type: boolean
 *     default: false
 *   status:
 *     description: The status of the product
 *     type: string
 *     enum:
 *       - draft
 *       - proposed
 *       - published
 *       - rejected
 *     default: draft
 *   images:
 *     description: The details of the product's images.
 *     type: array
 *     x-expandable: "images"
 *     items:
 *       $ref: "#/components/schemas/Image"
 *   thumbnail:
 *     description: A URL to an image file that can be used to identify the Product.
 *     nullable: true
 *     type: string
 *     format: uri
 *   options:
 *     description: The details of the Product Options that are defined for the Product. The product's variants will have a unique combination of values of the product's options.
 *     type: array
 *     x-expandable: "options"
 *     items:
 *       $ref: "#/components/schemas/ProductOption"
 *   variants:
 *     description: The details of the Product Variants that belong to the Product. Each will have a unique combination of values of the product's options.
 *     type: array
 *     x-expandable: "variants"
 *     items:
 *       $ref: "#/components/schemas/ProductVariant"
 *   categories:
 *     description: The details of the product categories that this product belongs to.
 *     type: array
 *     x-expandable: "categories"
 *     x-featureFlag: "product_categories"
 *     items:
 *       $ref: "#/components/schemas/ProductCategory"
 *   profile_id:
 *     description: The ID of the shipping profile that the product belongs to. The shipping profile has a set of defined shipping options that can be used to fulfill the product.
 *     type: string
 *     example: sp_01G1G5V239ENSZ5MV4JAR737BM
 *   profile:
 *     description: The details of the shipping profile that the product belongs to. The shipping profile has a set of defined shipping options that can be used to fulfill the product.
 *     x-expandable: "profile"
 *     nullable: true
 *     $ref: "#/components/schemas/ShippingProfile"
 *   profiles:
 *     description: Available if the relation `profiles` is expanded.
 *     nullable: true
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ShippingProfile"
 *   weight:
 *     description: The weight of the Product Variant. May be used in shipping rate calculations.
 *     nullable: true
 *     type: number
 *     example: null
 *   length:
 *     description: The length of the Product Variant. May be used in shipping rate calculations.
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
 *   collection_id:
 *     description: The ID of the product collection that the product belongs to.
 *     nullable: true
 *     type: string
 *     example: pcol_01F0YESBFAZ0DV6V831JXWH0BG
 *   collection:
 *     description: The details of the product collection that the product belongs to.
 *     x-expandable: "collection"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductCollection"
 *   type_id:
 *     description: The ID of the product type that the product belongs to.
 *     nullable: true
 *     type: string
 *     example: ptyp_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   type:
 *     description: The details of the product type that the product belongs to.
 *     x-expandable: "type"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductType"
 *   tags:
 *     description: The details of the product tags used in this product.
 *     type: array
 *     x-expandable: "type"
 *     items:
 *       $ref: "#/components/schemas/ProductTag"
 *   discountable:
 *     description: Whether the Product can be discounted. Discounts will not apply to Line Items of this Product when this flag is set to `false`.
 *     type: boolean
 *     default: true
 *   external_id:
 *     description: The external ID of the product
 *     nullable: true
 *     type: string
 *     example: null
 *   sales_channels:
 *     description: The details of the sales channels this product is available in.
 *     type: array
 *     x-expandable: "sales_channels"
 *     items:
 *       $ref: "#/components/schemas/SalesChannel"
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
//# sourceMappingURL=product.js.map