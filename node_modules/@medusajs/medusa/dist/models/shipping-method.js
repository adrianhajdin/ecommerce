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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethod = void 0;
var typeorm_1 = require("typeorm");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var db_aware_column_1 = require("../utils/db-aware-column");
var feature_flag_decorators_1 = require("../utils/feature-flag-decorators");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var cart_1 = require("./cart");
var claim_order_1 = require("./claim-order");
var order_1 = require("./order");
var return_1 = require("./return");
var shipping_method_tax_line_1 = require("./shipping-method-tax-line");
var shipping_option_1 = require("./shipping-option");
var swap_1 = require("./swap");
var ShippingMethod = /** @class */ (function () {
    function ShippingMethod() {
    }
    /**
     * @apiIgnore
     */
    ShippingMethod.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "sm");
    };
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], ShippingMethod.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ShippingMethod.prototype, "shipping_option_id", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ShippingMethod.prototype, "order_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return order_1.Order; }),
        (0, typeorm_1.JoinColumn)({ name: "order_id" }),
        __metadata("design:type", Object)
    ], ShippingMethod.prototype, "order", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Object)
    ], ShippingMethod.prototype, "claim_order_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return claim_order_1.ClaimOrder; }),
        (0, typeorm_1.JoinColumn)({ name: "claim_order_id" }),
        __metadata("design:type", Object)
    ], ShippingMethod.prototype, "claim_order", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ShippingMethod.prototype, "cart_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return cart_1.Cart; }, function (cart) { return cart.shipping_methods; }),
        (0, typeorm_1.JoinColumn)({ name: "cart_id" }),
        __metadata("design:type", Object)
    ], ShippingMethod.prototype, "cart", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ShippingMethod.prototype, "swap_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return swap_1.Swap; }),
        (0, typeorm_1.JoinColumn)({ name: "swap_id" }),
        __metadata("design:type", Object)
    ], ShippingMethod.prototype, "swap", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ShippingMethod.prototype, "return_id", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return return_1.Return; }, function (ret) { return ret.shipping_method; }),
        (0, typeorm_1.JoinColumn)({ name: "return_id" }),
        __metadata("design:type", Object)
    ], ShippingMethod.prototype, "return_order", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return shipping_option_1.ShippingOption; }),
        (0, typeorm_1.JoinColumn)({ name: "shipping_option_id" }),
        __metadata("design:type", Object)
    ], ShippingMethod.prototype, "shipping_option", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return shipping_method_tax_line_1.ShippingMethodTaxLine; }, function (tl) { return tl.shipping_method; }, {
            cascade: ["insert"],
        }),
        __metadata("design:type", Array)
    ], ShippingMethod.prototype, "tax_lines", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        __metadata("design:type", Number)
    ], ShippingMethod.prototype, "price", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb" }),
        __metadata("design:type", Object)
    ], ShippingMethod.prototype, "data", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagColumn)(tax_inclusive_pricing_1.default.key, { default: false }),
        __metadata("design:type", Boolean)
    ], ShippingMethod.prototype, "includes_tax", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShippingMethod.prototype, "beforeInsert", null);
    ShippingMethod = __decorate([
        (0, typeorm_1.Check)("\"claim_order_id\" IS NOT NULL OR \"order_id\" IS NOT NULL OR \"cart_id\" IS NOT NULL OR \"swap_id\" IS NOT NULL OR \"return_id\" IS NOT NULL"),
        (0, typeorm_1.Check)("\"price\" >= 0"),
        (0, typeorm_1.Entity)()
    ], ShippingMethod);
    return ShippingMethod;
}());
exports.ShippingMethod = ShippingMethod;
/**
 * @schema ShippingMethod
 * title: "Shipping Method"
 * description: "A Shipping Method represents a way in which an Order or Return can be shipped. Shipping Methods are created from a Shipping Option, but may contain additional details that can be necessary for the Fulfillment Provider to handle the shipment. If the shipping method is created for a return, it may be associated with a claim or a swap that the return is part of."
 * type: object
 * required:
 *   - cart_id
 *   - claim_order_id
 *   - data
 *   - id
 *   - order_id
 *   - price
 *   - return_id
 *   - shipping_option_id
 *   - swap_id
 * properties:
 *   id:
 *     description: The shipping method's ID
 *     type: string
 *     example: sm_01F0YET7DR2E7CYVSDHM593QG2
 *   shipping_option_id:
 *     description: The ID of the Shipping Option that the Shipping Method is built from.
 *     type: string
 *     example: so_01G1G5V27GYX4QXNARRQCW1N8T
 *   order_id:
 *     description: The ID of the order that the shipping method is used in.
 *     nullable: true
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   order:
 *     description: The details of the order that the shipping method is used in.
 *     x-expandable: "order"
 *     nullable: true
 *     $ref: "#/components/schemas/Order"
 *   claim_order_id:
 *     description: The ID of the claim that the shipping method is used in.
 *     nullable: true
 *     type: string
 *     example: null
 *   claim_order:
 *     description: The details of the claim that the shipping method is used in.
 *     x-expandable: "claim_order"
 *     nullable: true
 *     $ref: "#/components/schemas/ClaimOrder"
 *   cart_id:
 *     description: The ID of the cart that the shipping method is used in.
 *     nullable: true
 *     type: string
 *     example: cart_01G8ZH853Y6TFXWPG5EYE81X63
 *   cart:
 *     description: The details of the cart that the shipping method is used in.
 *     x-expandable: "cart"
 *     nullable: true
 *     $ref: "#/components/schemas/Cart"
 *   swap_id:
 *     description: The ID of the swap that the shipping method is used in.
 *     nullable: true
 *     type: string
 *     example: null
 *   swap:
 *     description: The details of the swap that the shipping method is used in.
 *     x-expandable: "swap"
 *     nullable: true
 *     $ref: "#/components/schemas/Swap"
 *   return_id:
 *     description: The ID of the return that the shipping method is used in.
 *     nullable: true
 *     type: string
 *     example: null
 *   return_order:
 *     description: The details of the return that the shipping method is used in.
 *     x-expandable: "return_order"
 *     nullable: true
 *     $ref: "#/components/schemas/Return"
 *   shipping_option:
 *     description: The details of the shipping option the method was created from.
 *     x-expandable: "shipping_option"
 *     nullable: true
 *     $ref: "#/components/schemas/ShippingOption"
 *   tax_lines:
 *     description: The details of the tax lines applied on the shipping method.
 *     type: array
 *     x-expandable: "tax_lines"
 *     items:
 *       $ref: "#/components/schemas/ShippingMethodTaxLine"
 *   price:
 *     description: The amount to charge for the Shipping Method. The currency of the price is defined by the Region that the Order that the Shipping Method belongs to is a part of.
 *     type: integer
 *     example: 200
 *   data:
 *     description: Additional data that the Fulfillment Provider needs to fulfill the shipment. This is used in combination with the Shipping Options data, and may contain information such as a drop point id.
 *     type: object
 *     example: {}
 *   includes_tax:
 *     description: "Whether the shipping method price include tax"
 *     type: boolean
 *     x-featureFlag: "tax_inclusive_pricing"
 *     default: false
 *   subtotal:
 *     description: The subtotal of the shipping
 *     type: integer
 *     example: 8000
 *   total:
 *     description: The total amount of the shipping
 *     type: integer
 *     example: 8200
 *   tax_total:
 *     description: The total of tax
 *     type: integer
 *     example: 0
 */
//# sourceMappingURL=shipping-method.js.map