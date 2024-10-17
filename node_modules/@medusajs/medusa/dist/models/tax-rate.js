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
exports.TaxRate = void 0;
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../interfaces/models/base-entity");
var db_aware_column_1 = require("../utils/db-aware-column");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var product_1 = require("./product");
var product_type_1 = require("./product-type");
var region_1 = require("./region");
var shipping_option_1 = require("./shipping-option");
var TaxRate = /** @class */ (function (_super) {
    __extends(TaxRate, _super);
    function TaxRate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    TaxRate.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "txr");
    };
    __decorate([
        (0, typeorm_1.Column)({ type: "real", nullable: true }),
        __metadata("design:type", Object)
    ], TaxRate.prototype, "rate", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], TaxRate.prototype, "code", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], TaxRate.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], TaxRate.prototype, "region_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return region_1.Region; }, function (region) { return region.tax_rates; }),
        (0, typeorm_1.JoinColumn)({ name: "region_id" }),
        __metadata("design:type", Object)
    ], TaxRate.prototype, "region", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], TaxRate.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return product_1.Product; }),
        (0, typeorm_1.JoinTable)({
            name: "product_tax_rate",
            joinColumn: {
                name: "rate_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "product_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], TaxRate.prototype, "products", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return product_type_1.ProductType; }),
        (0, typeorm_1.JoinTable)({
            name: "product_type_tax_rate",
            joinColumn: {
                name: "rate_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "product_type_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], TaxRate.prototype, "product_types", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return shipping_option_1.ShippingOption; }),
        (0, typeorm_1.JoinTable)({
            name: "shipping_tax_rate",
            joinColumn: {
                name: "rate_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "shipping_option_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], TaxRate.prototype, "shipping_options", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TaxRate.prototype, "beforeInsert", null);
    TaxRate = __decorate([
        (0, typeorm_1.Entity)()
    ], TaxRate);
    return TaxRate;
}(base_entity_1.BaseEntity));
exports.TaxRate = TaxRate;
/**
 * @schema TaxRate
 * title: "Tax Rate"
 * description: "A Tax Rate can be used to define a custom rate to charge on specified products, product types, and shipping options within a given region."
 * type: object
 * required:
 *   - code
 *   - created_at
 *   - id
 *   - metadata
 *   - name
 *   - rate
 *   - region_id
 *   - updated_at
 * properties:
 *   id:
 *     description: The tax rate's ID
 *     type: string
 *     example: txr_01G8XDBAWKBHHJRKH0AV02KXBR
 *   rate:
 *     description: The numeric rate to charge
 *     nullable: true
 *     type: number
 *     example: 10
 *   code:
 *     description: A code to identify the tax type by
 *     nullable: true
 *     type: string
 *     example: tax01
 *   name:
 *     description: A human friendly name for the tax
 *     type: string
 *     example: Tax Example
 *   region_id:
 *     description: The ID of the region that the rate belongs to.
 *     type: string
 *     example: reg_01G1G5V26T9H8Y0M4JNE3YGA4G
 *   region:
 *     description: The details of the region that the rate belongs to.
 *     x-expandable: "region"
 *     nullable: true
 *     $ref: "#/components/schemas/Region"
 *   products:
 *     description: The details of the products that belong to this tax rate.
 *     type: array
 *     x-expandable: "products"
 *     items:
 *       $ref: "#/components/schemas/Product"
 *   product_types:
 *     description: The details of the product types that belong to this tax rate.
 *     type: array
 *     x-expandable: "product_types"
 *     items:
 *       $ref: "#/components/schemas/ProductType"
 *   shipping_options:
 *     description: The details of the shipping options that belong to this tax rate.
 *     type: array
 *     x-expandable: "shipping_options"
 *     items:
 *       $ref: "#/components/schemas/ShippingOption"
 *   product_count:
 *     description: The count of products
 *     type: integer
 *     example: 10
 *   product_type_count:
 *     description: The count of product types
 *     type: integer
 *     example: 2
 *   shipping_option_count:
 *     description: The count of shipping options
 *     type: integer
 *     example: 1
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
//# sourceMappingURL=tax-rate.js.map