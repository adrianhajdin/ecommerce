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
exports.ProductTypeTaxRate = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var product_type_1 = require("./product-type");
var tax_rate_1 = require("./tax-rate");
var ProductTypeTaxRate = /** @class */ (function () {
    function ProductTypeTaxRate() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], ProductTypeTaxRate.prototype, "product_type_id", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], ProductTypeTaxRate.prototype, "rate_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_type_1.ProductType; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)({ name: "product_type_id" }),
        __metadata("design:type", product_type_1.ProductType)
    ], ProductTypeTaxRate.prototype, "product_type", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return tax_rate_1.TaxRate; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)({ name: "rate_id" }),
        __metadata("design:type", tax_rate_1.TaxRate)
    ], ProductTypeTaxRate.prototype, "tax_rate", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], ProductTypeTaxRate.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], ProductTypeTaxRate.prototype, "updated_at", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], ProductTypeTaxRate.prototype, "metadata", void 0);
    ProductTypeTaxRate = __decorate([
        (0, typeorm_1.Entity)()
    ], ProductTypeTaxRate);
    return ProductTypeTaxRate;
}());
exports.ProductTypeTaxRate = ProductTypeTaxRate;
/**
 * @schema ProductTypeTaxRate
 * title: "Product Type Tax Rate"
 * description: "This represents the association between a tax rate and a product type to indicate that the product type is taxed in a different way than the default."
 * type: object
 * required:
 *   - created_at
 *   - metadata
 *   - product_type_id
 *   - rate_id
 *   - updated_at
 * properties:
 *   product_type_id:
 *     description: The ID of the Product type
 *     type: string
 *     example: ptyp_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   product_type:
 *     description: The details of the product type.
 *     x-expandable: "product_type"
 *     nullable: true
 *     $ref: "#/components/schemas/ProductType"
 *   rate_id:
 *     description: The id of the Tax Rate
 *     type: string
 *     example: txr_01G8XDBAWKBHHJRKH0AV02KXBR
 *   tax_rate:
 *     description: The details of the tax rate.
 *     x-expandable: "tax_rate"
 *     nullable: true
 *     $ref: "#/components/schemas/TaxRate"
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
//# sourceMappingURL=product-type-tax-rate.js.map