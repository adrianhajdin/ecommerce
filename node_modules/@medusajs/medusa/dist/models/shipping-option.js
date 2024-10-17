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
exports.ShippingOption = exports.ShippingOptionPriceType = void 0;
var typeorm_1 = require("typeorm");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var db_aware_column_1 = require("../utils/db-aware-column");
var feature_flag_decorators_1 = require("../utils/feature-flag-decorators");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var fulfillment_provider_1 = require("./fulfillment-provider");
var region_1 = require("./region");
var shipping_option_requirement_1 = require("./shipping-option-requirement");
var shipping_profile_1 = require("./shipping-profile");
/**
 * @enum
 *
 * The type of the shipping option price.
 */
var ShippingOptionPriceType;
(function (ShippingOptionPriceType) {
    /**
     * The shipping option's price is a flat rate.
     */
    ShippingOptionPriceType["FLAT_RATE"] = "flat_rate";
    /**
     * The shipping option's price is calculated. In this case, the `amount` field is typically `null`.
     */
    ShippingOptionPriceType["CALCULATED"] = "calculated";
})(ShippingOptionPriceType = exports.ShippingOptionPriceType || (exports.ShippingOptionPriceType = {}));
var ShippingOption = /** @class */ (function (_super) {
    __extends(ShippingOption, _super);
    function ShippingOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    ShippingOption.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "so");
    };
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ShippingOption.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ShippingOption.prototype, "region_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return region_1.Region; }),
        (0, typeorm_1.JoinColumn)({ name: "region_id" }),
        __metadata("design:type", Object)
    ], ShippingOption.prototype, "region", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ShippingOption.prototype, "profile_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return shipping_profile_1.ShippingProfile; }),
        (0, typeorm_1.JoinColumn)({ name: "profile_id" }),
        __metadata("design:type", Object)
    ], ShippingOption.prototype, "profile", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ShippingOption.prototype, "provider_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return fulfillment_provider_1.FulfillmentProvider; }),
        (0, typeorm_1.JoinColumn)({ name: "provider_id" }),
        __metadata("design:type", Object)
    ], ShippingOption.prototype, "provider", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: ShippingOptionPriceType }),
        __metadata("design:type", String)
    ], ShippingOption.prototype, "price_type", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Object)
    ], ShippingOption.prototype, "amount", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: false }),
        __metadata("design:type", Boolean)
    ], ShippingOption.prototype, "is_return", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: false }),
        __metadata("design:type", Boolean)
    ], ShippingOption.prototype, "admin_only", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return shipping_option_requirement_1.ShippingOptionRequirement; }, function (req) { return req.shipping_option; }, {
            cascade: ["insert"],
        }),
        __metadata("design:type", Array)
    ], ShippingOption.prototype, "requirements", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb" }),
        __metadata("design:type", Object)
    ], ShippingOption.prototype, "data", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], ShippingOption.prototype, "metadata", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagColumn)(tax_inclusive_pricing_1.default.key, { default: false }),
        __metadata("design:type", Boolean)
    ], ShippingOption.prototype, "includes_tax", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShippingOption.prototype, "beforeInsert", null);
    ShippingOption = __decorate([
        (0, typeorm_1.Check)("\"amount\" >= 0"),
        (0, typeorm_1.Entity)()
    ], ShippingOption);
    return ShippingOption;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.ShippingOption = ShippingOption;
/**
 * @schema ShippingOption
 * title: "Shipping Option"
 * description: "A Shipping Option represents a way in which an Order or Return can be shipped. Shipping Options have an associated Fulfillment Provider that will be used when the fulfillment of an Order is initiated. Shipping Options themselves cannot be added to Carts, but serve as a template for Shipping Methods. This distinction makes it possible to customize individual Shipping Methods with additional information."
 * type: object
 * required:
 *   - admin_only
 *   - amount
 *   - created_at
 *   - data
 *   - deleted_at
 *   - id
 *   - is_return
 *   - metadata
 *   - name
 *   - price_type
 *   - profile_id
 *   - provider_id
 *   - region_id
 *   - updated_at
 * properties:
 *   id:
 *     description: The shipping option's ID
 *     type: string
 *     example: so_01G1G5V27GYX4QXNARRQCW1N8T
 *   name:
 *     description: The name given to the Shipping Option - this may be displayed to the Customer.
 *     type: string
 *     example: PostFake Standard
 *   region_id:
 *     description: The ID of the region this shipping option can be used in.
 *     type: string
 *     example: reg_01G1G5V26T9H8Y0M4JNE3YGA4G
 *   region:
 *     description: The details of the region this shipping option can be used in.
 *     x-expandable: "region"
 *     nullable: true
 *     $ref: "#/components/schemas/Region"
 *   profile_id:
 *     description: The ID of the Shipping Profile that the shipping option belongs to.
 *     type: string
 *     example: sp_01G1G5V239ENSZ5MV4JAR737BM
 *   profile:
 *     description: The details of the shipping profile that the shipping option belongs to.
 *     x-expandable: "profile"
 *     nullable: true
 *     $ref: "#/components/schemas/ShippingProfile"
 *   provider_id:
 *     description: The ID of the fulfillment provider that will be used to later to process the shipping method created from this shipping option and its fulfillments.
 *     type: string
 *     example: manual
 *   provider:
 *     description: The details of the fulfillment provider that will be used to later to process the shipping method created from this shipping option and its fulfillments.
 *     x-expandable: "provider"
 *     nullable: true
 *     $ref: "#/components/schemas/FulfillmentProvider"
 *   price_type:
 *     description: The type of pricing calculation that is used when creatin Shipping Methods from the Shipping Option. Can be `flat_rate` for fixed prices or `calculated` if the Fulfillment Provider can provide price calulations.
 *     type: string
 *     enum:
 *       - flat_rate
 *       - calculated
 *     example: flat_rate
 *   amount:
 *     description: The amount to charge for shipping when the Shipping Option price type is `flat_rate`.
 *     nullable: true
 *     type: integer
 *     example: 200
 *   is_return:
 *     description: Flag to indicate if the Shipping Option can be used for Return shipments.
 *     type: boolean
 *     default: false
 *   admin_only:
 *     description: Flag to indicate if the Shipping Option usage is restricted to admin users.
 *     type: boolean
 *     default: false
 *   requirements:
 *     description: The details of the requirements that must be satisfied for the Shipping Option to be available for usage in a Cart.
 *     type: array
 *     x-expandable: "requirements"
 *     items:
 *       $ref: "#/components/schemas/ShippingOptionRequirement"
 *   data:
 *     description: The data needed for the Fulfillment Provider to identify the Shipping Option.
 *     type: object
 *     example: {}
 *   includes_tax:
 *     description: "Whether the shipping option price include tax"
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
//# sourceMappingURL=shipping-option.js.map