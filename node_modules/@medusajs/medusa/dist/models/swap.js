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
exports.Swap = exports.SwapPaymentStatus = exports.SwapFulfillmentStatus = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var address_1 = require("./address");
var cart_1 = require("./cart");
var fulfillment_1 = require("./fulfillment");
var line_item_1 = require("./line-item");
var order_1 = require("./order");
var payment_1 = require("./payment");
var return_1 = require("./return");
var shipping_method_1 = require("./shipping-method");
/**
 * @enum
 *
 * The swap's fulfillment status.
 */
var SwapFulfillmentStatus;
(function (SwapFulfillmentStatus) {
    /**
     * The swap's items aren't fulfilled.
     */
    SwapFulfillmentStatus["NOT_FULFILLED"] = "not_fulfilled";
    /**
     * The swap's items are fulfilled.
     */
    SwapFulfillmentStatus["FULFILLED"] = "fulfilled";
    /**
     * The swap's items are shipped.
     */
    SwapFulfillmentStatus["SHIPPED"] = "shipped";
    /**
     * Some of the swap's items are shipped.
     */
    SwapFulfillmentStatus["PARTIALLY_SHIPPED"] = "partially_shipped";
    /**
     * The swap's fulfillments are canceled.
     */
    SwapFulfillmentStatus["CANCELED"] = "canceled";
    /**
     * The swap's fulfillments require an action.
     */
    SwapFulfillmentStatus["REQUIRES_ACTION"] = "requires_action";
})(SwapFulfillmentStatus = exports.SwapFulfillmentStatus || (exports.SwapFulfillmentStatus = {}));
/**
 * @enum
 *
 * The swap's payment status.
 */
var SwapPaymentStatus;
(function (SwapPaymentStatus) {
    /**
     * The swap's additional payment isn't paid.
     */
    SwapPaymentStatus["NOT_PAID"] = "not_paid";
    /**
     * The swap is additional awaiting payment.
     */
    SwapPaymentStatus["AWAITING"] = "awaiting";
    /**
     * The swap's additional payment is captured.
     */
    SwapPaymentStatus["CAPTURED"] = "captured";
    /**
     * The swap's additional payment is confirmed.
     */
    SwapPaymentStatus["CONFIRMED"] = "confirmed";
    /**
     * The swap's additional payment is canceled.
     */
    SwapPaymentStatus["CANCELED"] = "canceled";
    /**
     * The negative difference amount between the returned item(s) and the new one(s) has been refuneded.
     */
    SwapPaymentStatus["DIFFERENCE_REFUNDED"] = "difference_refunded";
    /**
     * Some of the negative difference amount between the returned item(s) and the new one(s) has been refuneded.
     */
    SwapPaymentStatus["PARTIALLY_REFUNDED"] = "partially_refunded";
    /**
     * The amount in the associated order has been refunded.
     */
    SwapPaymentStatus["REFUNDED"] = "refunded";
    /**
     * The swap's payment requires an action.
     */
    SwapPaymentStatus["REQUIRES_ACTION"] = "requires_action";
})(SwapPaymentStatus = exports.SwapPaymentStatus || (exports.SwapPaymentStatus = {}));
var Swap = /** @class */ (function (_super) {
    __extends(Swap, _super);
    function Swap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    Swap.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "swap");
    };
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: SwapFulfillmentStatus }),
        __metadata("design:type", String)
    ], Swap.prototype, "fulfillment_status", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: SwapPaymentStatus }),
        __metadata("design:type", String)
    ], Swap.prototype, "payment_status", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ type: "string" }),
        __metadata("design:type", String)
    ], Swap.prototype, "order_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return order_1.Order; }, function (o) { return o.swaps; }),
        (0, typeorm_1.JoinColumn)({ name: "order_id" }),
        __metadata("design:type", Object)
    ], Swap.prototype, "order", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return line_item_1.LineItem; }, function (item) { return item.swap; }, { cascade: ["insert"] }),
        __metadata("design:type", Array)
    ], Swap.prototype, "additional_items", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return return_1.Return; }, function (ret) { return ret.swap; }, { cascade: ["insert"] }),
        __metadata("design:type", Object)
    ], Swap.prototype, "return_order", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return fulfillment_1.Fulfillment; }, function (fulfillment) { return fulfillment.swap; }, {
            cascade: ["insert"],
        }),
        __metadata("design:type", Array)
    ], Swap.prototype, "fulfillments", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return payment_1.Payment; }, function (p) { return p.swap; }, { cascade: ["insert"] }),
        __metadata("design:type", Object)
    ], Swap.prototype, "payment", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Number)
    ], Swap.prototype, "difference_due", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Swap.prototype, "shipping_address_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return address_1.Address; }, { cascade: ["insert"] }),
        (0, typeorm_1.JoinColumn)({ name: "shipping_address_id" }),
        __metadata("design:type", Object)
    ], Swap.prototype, "shipping_address", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return shipping_method_1.ShippingMethod; }, function (method) { return method.swap; }, {
            cascade: ["insert"],
        }),
        __metadata("design:type", Array)
    ], Swap.prototype, "shipping_methods", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Swap.prototype, "cart_id", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return cart_1.Cart; }),
        (0, typeorm_1.JoinColumn)({ name: "cart_id" }),
        __metadata("design:type", Object)
    ], Swap.prototype, "cart", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Date)
    ], Swap.prototype, "confirmed_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Date)
    ], Swap.prototype, "canceled_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "boolean", nullable: true }),
        __metadata("design:type", Boolean)
    ], Swap.prototype, "no_notification", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "boolean", default: false }),
        __metadata("design:type", Boolean)
    ], Swap.prototype, "allow_backorder", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Swap.prototype, "idempotency_key", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], Swap.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Swap.prototype, "beforeInsert", null);
    Swap = __decorate([
        (0, typeorm_1.Entity)()
    ], Swap);
    return Swap;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.Swap = Swap;
/**
 * @schema Swap
 * title: "Swap"
 * description: "A swap can be created when a Customer wishes to exchange Products that they have purchased with different Products. It consists of a Return of previously purchased Products and a Fulfillment of new Products. It also includes information on any additional payment or refund required based on the difference between the exchanged products."
 * type: object
 * required:
 *   - allow_backorder
 *   - canceled_at
 *   - cart_id
 *   - confirmed_at
 *   - created_at
 *   - deleted_at
 *   - difference_due
 *   - fulfillment_status
 *   - id
 *   - idempotency_key
 *   - metadata
 *   - no_notification
 *   - order_id
 *   - payment_status
 *   - shipping_address_id
 *   - updated_at
 * properties:
 *   id:
 *     description: The swap's ID
 *     type: string
 *     example: swap_01F0YET86Y9G92D3YDR9Y6V676
 *   fulfillment_status:
 *     description: The status of the Fulfillment of the Swap.
 *     type: string
 *     enum:
 *       - not_fulfilled
 *       - fulfilled
 *       - shipped
 *       - partially_shipped
 *       - canceled
 *       - requires_action
 *     example: not_fulfilled
 *   payment_status:
 *     description: The status of the Payment of the Swap. The payment may either refer to the refund of an amount or the authorization of a new amount.
 *     type: string
 *     enum:
 *       - not_paid
 *       - awaiting
 *       - captured
 *       - confirmed
 *       - canceled
 *       - difference_refunded
 *       - partially_refunded
 *       - refunded
 *       - requires_action
 *     example: not_paid
 *   order_id:
 *     description: The ID of the order that the swap belongs to.
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   order:
 *     description: The details of the order that the swap belongs to.
 *     x-expandable: "order"
 *     nullable: true
 *     $ref: "#/components/schemas/Order"
 *   additional_items:
 *     description: The details of the new products to send to the customer, represented as line items.
 *     type: array
 *     x-expandable: "additional_items"
 *     items:
 *       $ref: "#/components/schemas/LineItem"
 *   return_order:
 *     description: The details of the return that belongs to the swap, which holds the details on the items being returned.
 *     x-expandable: "return_order"
 *     nullable: true
 *     $ref: "#/components/schemas/Return"
 *   fulfillments:
 *     description: The details of the fulfillments that are used to send the new items to the customer.
 *     x-expandable: "fulfillments"
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Fulfillment"
 *   payment:
 *     description: The details of the additional payment authorized by the customer when `difference_due` is positive.
 *     x-expandable: "payment"
 *     nullable: true
 *     $ref: "#/components/schemas/Payment"
 *   difference_due:
 *     description: The difference amount between the order’s original total and the new total imposed by the swap. If its value is negative, a refund must be issues to the customer. If it's positive, additional payment must be authorized by the customer. Otherwise, no payment processing is required.
 *     nullable: true
 *     type: integer
 *     example: 0
 *   shipping_address_id:
 *     description: The Address to send the new Line Items to - in most cases this will be the same as the shipping address on the Order.
 *     nullable: true
 *     type: string
 *     example: addr_01G8ZH853YPY9B94857DY91YGW
 *   shipping_address:
 *     description: The details of the shipping address that the new items should be sent to.
 *     x-expandable: "shipping_address"
 *     nullable: true
 *     $ref: "#/components/schemas/Address"
 *   shipping_methods:
 *     description: The details of the shipping methods used to fulfill the additional items purchased.
 *     type: array
 *     x-expandable: "shipping_methods"
 *     items:
 *       $ref: "#/components/schemas/ShippingMethod"
 *   cart_id:
 *     description: The ID of the cart that the customer uses to complete the swap.
 *     nullable: true
 *     type: string
 *     example: cart_01G8ZH853Y6TFXWPG5EYE81X63
 *   cart:
 *     description: The details of the cart that the customer uses to complete the swap.
 *     x-expandable: "cart"
 *     nullable: true
 *     $ref: "#/components/schemas/Cart"
 *   confirmed_at:
 *     description: The date with timezone at which the Swap was confirmed by the Customer.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   canceled_at:
 *     description: The date with timezone at which the Swap was canceled.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   no_notification:
 *     description: If set to true, no notification will be sent related to this swap
 *     nullable: true
 *     type: boolean
 *     example: false
 *   allow_backorder:
 *     description: If true, swaps can be completed with items out of stock
 *     type: boolean
 *     default: false
 *   idempotency_key:
 *     description: Randomly generated key used to continue the completion of the swap in case of failure.
 *     nullable: true
 *     type: string
 *     externalDocs:
 *       url: https://docs.medusajs.com/development/idempotency-key/overview.md
 *       description: Learn more how to use the idempotency key.
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
//# sourceMappingURL=swap.js.map