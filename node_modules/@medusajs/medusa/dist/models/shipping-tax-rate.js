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
exports.ShippingTaxRate = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var shipping_option_1 = require("./shipping-option");
var tax_rate_1 = require("./tax-rate");
var ShippingTaxRate = /** @class */ (function () {
    function ShippingTaxRate() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], ShippingTaxRate.prototype, "shipping_option_id", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], ShippingTaxRate.prototype, "rate_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return shipping_option_1.ShippingOption; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)({ name: "shipping_option_id" }),
        __metadata("design:type", shipping_option_1.ShippingOption)
    ], ShippingTaxRate.prototype, "shipping_option", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return tax_rate_1.TaxRate; }, { onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)({ name: "rate_id" }),
        __metadata("design:type", tax_rate_1.TaxRate)
    ], ShippingTaxRate.prototype, "tax_rate", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], ShippingTaxRate.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], ShippingTaxRate.prototype, "updated_at", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], ShippingTaxRate.prototype, "metadata", void 0);
    ShippingTaxRate = __decorate([
        (0, typeorm_1.Entity)()
    ], ShippingTaxRate);
    return ShippingTaxRate;
}());
exports.ShippingTaxRate = ShippingTaxRate;
/**
 * @schema ShippingTaxRate
 * title: "Shipping Tax Rate"
 * description: "This represents the tax rates applied on a shipping option."
 * type: object
 * required:
 *   - created_at
 *   - metadata
 *   - rate_id
 *   - shipping_option_id
 *   - updated_at
 * properties:
 *   shipping_option_id:
 *     description: The ID of the shipping option.
 *     type: string
 *     example: so_01G1G5V27GYX4QXNARRQCW1N8T
 *   shipping_option:
 *     description: The details of the shipping option.
 *     x-expandable: "shipping_option"
 *     nullable: true
 *     $ref: "#/components/schemas/ShippingOption"
 *   rate_id:
 *     description: The ID of the associated tax rate.
 *     type: string
 *     example: txr_01G8XDBAWKBHHJRKH0AV02KXBR
 *   tax_rate:
 *     description: The details of the associated tax rate.
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
//# sourceMappingURL=shipping-tax-rate.js.map