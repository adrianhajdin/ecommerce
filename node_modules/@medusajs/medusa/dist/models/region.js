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
exports.Region = void 0;
var typeorm_1 = require("typeorm");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var db_aware_column_1 = require("../utils/db-aware-column");
var feature_flag_decorators_1 = require("../utils/feature-flag-decorators");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var country_1 = require("./country");
var currency_1 = require("./currency");
var fulfillment_provider_1 = require("./fulfillment-provider");
var payment_provider_1 = require("./payment-provider");
var tax_provider_1 = require("./tax-provider");
var tax_rate_1 = require("./tax-rate");
var Region = /** @class */ (function (_super) {
    __extends(Region, _super);
    function Region() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    Region.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "reg");
    };
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Region.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Region.prototype, "currency_code", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return currency_1.Currency; }),
        (0, typeorm_1.JoinColumn)({ name: "currency_code", referencedColumnName: "code" }),
        __metadata("design:type", Object)
    ], Region.prototype, "currency", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "real" }),
        __metadata("design:type", Number)
    ], Region.prototype, "tax_rate", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return tax_rate_1.TaxRate; }, function (tr) { return tr.region; }),
        __metadata("design:type", Object)
    ], Region.prototype, "tax_rates", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Region.prototype, "tax_code", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], Region.prototype, "gift_cards_taxable", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], Region.prototype, "automatic_taxes", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return country_1.Country; }, function (c) { return c.region; }),
        __metadata("design:type", Array)
    ], Region.prototype, "countries", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "text", nullable: true }),
        __metadata("design:type", Object)
    ], Region.prototype, "tax_provider_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return tax_provider_1.TaxProvider; }),
        (0, typeorm_1.JoinColumn)({ name: "tax_provider_id" }),
        __metadata("design:type", Object)
    ], Region.prototype, "tax_provider", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return payment_provider_1.PaymentProvider; }, {
            cascade: ["insert", "update"],
        }),
        (0, typeorm_1.JoinTable)({
            name: "region_payment_providers",
            joinColumn: {
                name: "region_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "provider_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], Region.prototype, "payment_providers", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return fulfillment_provider_1.FulfillmentProvider; }, {
            cascade: ["insert", "update"],
        }),
        (0, typeorm_1.JoinTable)({
            name: "region_fulfillment_providers",
            joinColumn: {
                name: "region_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "provider_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], Region.prototype, "fulfillment_providers", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], Region.prototype, "metadata", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagColumn)(tax_inclusive_pricing_1.default.key, { default: false }),
        __metadata("design:type", Boolean)
    ], Region.prototype, "includes_tax", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Region.prototype, "beforeInsert", null);
    Region = __decorate([
        (0, typeorm_1.Entity)()
    ], Region);
    return Region;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.Region = Region;
/**
 * @schema Region
 * title: "Region"
 * description: "A region holds settings specific to a geographical location, including the currency, tax rates, and fulfillment and payment providers. A Region can consist of multiple countries to accomodate common shopping settings across countries."
 * type: object
 * required:
 *   - automatic_taxes
 *   - created_at
 *   - currency_code
 *   - deleted_at
 *   - gift_cards_taxable
 *   - id
 *   - metadata
 *   - name
 *   - tax_code
 *   - tax_provider_id
 *   - tax_rate
 *   - updated_at
 * properties:
 *   id:
 *     description: The region's ID
 *     type: string
 *     example: reg_01G1G5V26T9H8Y0M4JNE3YGA4G
 *   name:
 *     description: The name of the region as displayed to the customer. If the Region only has one country it is recommended to write the country name.
 *     type: string
 *     example: EU
 *   currency_code:
 *     description: The three character currency code used in the region.
 *     type: string
 *     example: usd
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *       description: See a list of codes.
 *   currency:
 *     description: The details of the currency used in the region.
 *     x-expandable: "currency"
 *     nullable: true
 *     $ref: "#/components/schemas/Currency"
 *   tax_rate:
 *     description: The tax rate that should be charged on purchases in the Region.
 *     type: number
 *     example: 0
 *   tax_rates:
 *     description: The details of the tax rates used in the region, aside from the default rate.
 *     type: array
 *     x-expandable: "tax_rates"
 *     items:
 *       $ref: "#/components/schemas/TaxRate"
 *   tax_code:
 *     description: The tax code used on purchases in the Region. This may be used by other systems for accounting purposes.
 *     nullable: true
 *     type: string
 *     example: null
 *   gift_cards_taxable:
 *     description: Whether the gift cards are taxable or not in this region.
 *     type: boolean
 *     default: true
 *   automatic_taxes:
 *     description: Whether taxes should be automated in this region.
 *     type: boolean
 *     default: true
 *   countries:
 *     description: The details of the countries included in this region.
 *     type: array
 *     x-expandable: "countries"
 *     items:
 *       $ref: "#/components/schemas/Country"
 *   tax_provider_id:
 *     description: The ID of the tax provider used in this region
 *     nullable: true
 *     type: string
 *     example: null
 *   tax_provider:
 *     description: The details of the tax provider used in the region.
 *     x-expandable: "tax_provider"
 *     nullable: true
 *     $ref: "#/components/schemas/TaxProvider"
 *   payment_providers:
 *     description: The details of the payment providers that can be used to process payments in the region.
 *     type: array
 *     x-expandable: "payment_providers"
 *     items:
 *       $ref: "#/components/schemas/PaymentProvider"
 *   fulfillment_providers:
 *     description: The details of the fulfillment providers that can be used to fulfill items of orders and similar resources in the region.
 *     type: array
 *     x-expandable: "fulfillment_providers"
 *     items:
 *       $ref: "#/components/schemas/FulfillmentProvider"
 *   includes_tax:
 *     description: "Whether the prices for the region include tax"
 *     type: boolean
 *     x-featureFlag: "tax_inclusive_pricing"
 *     default: false
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
//# sourceMappingURL=region.js.map