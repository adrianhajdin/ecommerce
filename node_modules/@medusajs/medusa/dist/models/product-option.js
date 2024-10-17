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
exports.ProductOption = void 0;
var typeorm_1 = require("typeorm");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var db_aware_column_1 = require("../utils/db-aware-column");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var product_1 = require("./product");
var product_option_value_1 = require("./product-option-value");
var ProductOption = /** @class */ (function (_super) {
    __extends(ProductOption, _super);
    function ProductOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    ProductOption.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "opt");
    };
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ProductOption.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_option_value_1.ProductOptionValue; }, function (value) { return value.option; }, {
            cascade: ["soft-remove", "remove"],
        }),
        __metadata("design:type", Array)
    ], ProductOption.prototype, "values", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ProductOption.prototype, "product_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_1.Product; }, function (product) { return product.options; }),
        (0, typeorm_1.JoinColumn)({ name: "product_id" }),
        __metadata("design:type", Object)
    ], ProductOption.prototype, "product", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], ProductOption.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductOption.prototype, "beforeInsert", null);
    ProductOption = __decorate([
        (0, typeorm_1.Entity)()
    ], ProductOption);
    return ProductOption;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.ProductOption = ProductOption;
/**
 * @schema ProductOption
 * title: "Product Option"
 * description: A Product Option defines properties that may vary between different variants of a Product. Common Product Options are "Size" and "Color". Admins are free to create any product options.
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - id
 *   - metadata
 *   - product_id
 *   - title
 *   - updated_at
 * properties:
 *   id:
 *     description: The product option's ID
 *     type: string
 *     example: opt_01F0YESHQBZVKCEXJ24BS6PCX3
 *   title:
 *     description: The title that the Product Option is defined by (e.g. `Size`).
 *     type: string
 *     example: Size
 *   values:
 *     description: The details of the values of the product option.
 *     type: array
 *     x-expandable: "values"
 *     items:
 *       $ref: "#/components/schemas/ProductOptionValue"
 *   product_id:
 *     description: The ID of the product that this product option belongs to.
 *     type: string
 *     example: prod_01G1G5V2MBA328390B5AXJ610F
 *   product:
 *     description: The details of the product that this product option belongs to.
 *     x-expandable: "product"
 *     nullable: true
 *     $ref: "#/components/schemas/Product"
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
//# sourceMappingURL=product-option.js.map