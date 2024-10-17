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
exports.ClaimOrder = exports.ClaimFulfillmentStatus = exports.ClaimPaymentStatus = exports.ClaimType = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var address_1 = require("./address");
var claim_item_1 = require("./claim-item");
var fulfillment_1 = require("./fulfillment");
var line_item_1 = require("./line-item");
var order_1 = require("./order");
var return_1 = require("./return");
var shipping_method_1 = require("./shipping-method");
/**
 * @enum
 *
 * The claim's type.
 */
var ClaimType;
(function (ClaimType) {
    /**
     * The claim refunds an amount to the customer.
     */
    ClaimType["REFUND"] = "refund";
    /**
     * The claim replaces the returned item with a new one.
     */
    ClaimType["REPLACE"] = "replace";
})(ClaimType = exports.ClaimType || (exports.ClaimType = {}));
/**
 * @enum
 *
 * The claim's payment status
 */
var ClaimPaymentStatus;
(function (ClaimPaymentStatus) {
    /**
     * The payment status isn't set, which is typically used when the claim's type is `replace`.
     */
    ClaimPaymentStatus["NA"] = "na";
    /**
     * The payment isn't refunded.
     */
    ClaimPaymentStatus["NOT_REFUNDED"] = "not_refunded";
    /**
     * The payment is refunded.
     */
    ClaimPaymentStatus["REFUNDED"] = "refunded";
})(ClaimPaymentStatus = exports.ClaimPaymentStatus || (exports.ClaimPaymentStatus = {}));
/**
 * @enum
 *
 * The claim's fulfillment status.
 */
var ClaimFulfillmentStatus;
(function (ClaimFulfillmentStatus) {
    /**
     * The claim's replacement items are not fulfilled.
     */
    ClaimFulfillmentStatus["NOT_FULFILLED"] = "not_fulfilled";
    /**
     * Some of the claim's replacement items, but not all, are fulfilled.
     */
    ClaimFulfillmentStatus["PARTIALLY_FULFILLED"] = "partially_fulfilled";
    /**
     * The claim's replacement items are fulfilled.
     */
    ClaimFulfillmentStatus["FULFILLED"] = "fulfilled";
    /**
     * Some of the claim's replacement items, but not all, are shipped.
     */
    ClaimFulfillmentStatus["PARTIALLY_SHIPPED"] = "partially_shipped";
    /**
     * The claim's replacement items are shipped.
     */
    ClaimFulfillmentStatus["SHIPPED"] = "shipped";
    /**
     * Some of the claim's items, but not all, are returned.
     */
    ClaimFulfillmentStatus["PARTIALLY_RETURNED"] = "partially_returned";
    /**
     * The claim's items are returned.
     */
    ClaimFulfillmentStatus["RETURNED"] = "returned";
    /**
     * The claim's fulfillments are canceled.
     */
    ClaimFulfillmentStatus["CANCELED"] = "canceled";
    /**
     * The claim's fulfillment requires action.
     */
    ClaimFulfillmentStatus["REQUIRES_ACTION"] = "requires_action";
})(ClaimFulfillmentStatus = exports.ClaimFulfillmentStatus || (exports.ClaimFulfillmentStatus = {}));
var ClaimOrder = /** @class */ (function (_super) {
    __extends(ClaimOrder, _super);
    function ClaimOrder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    ClaimOrder.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "claim");
    };
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({
            type: "enum",
            enum: ClaimPaymentStatus,
            default: ClaimPaymentStatus.NA,
        }),
        __metadata("design:type", String)
    ], ClaimOrder.prototype, "payment_status", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({
            type: "enum",
            enum: ClaimFulfillmentStatus,
            default: ClaimFulfillmentStatus.NOT_FULFILLED,
        }),
        __metadata("design:type", String)
    ], ClaimOrder.prototype, "fulfillment_status", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return claim_item_1.ClaimItem; }, function (ci) { return ci.claim_order; }),
        __metadata("design:type", Array)
    ], ClaimOrder.prototype, "claim_items", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return line_item_1.LineItem; }, function (li) { return li.claim_order; }, { cascade: ["insert"] }),
        __metadata("design:type", Array)
    ], ClaimOrder.prototype, "additional_items", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: ClaimType }),
        __metadata("design:type", Object)
    ], ClaimOrder.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ClaimOrder.prototype, "order_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return order_1.Order; }, function (o) { return o.claims; }),
        (0, typeorm_1.JoinColumn)({ name: "order_id" }),
        __metadata("design:type", Object)
    ], ClaimOrder.prototype, "order", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return return_1.Return; }, function (ret) { return ret.claim_order; }),
        __metadata("design:type", Object)
    ], ClaimOrder.prototype, "return_order", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ClaimOrder.prototype, "shipping_address_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return address_1.Address; }, { cascade: ["insert"] }),
        (0, typeorm_1.JoinColumn)({ name: "shipping_address_id" }),
        __metadata("design:type", Object)
    ], ClaimOrder.prototype, "shipping_address", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return shipping_method_1.ShippingMethod; }, function (method) { return method.claim_order; }, {
            cascade: ["insert"],
        }),
        __metadata("design:type", Array)
    ], ClaimOrder.prototype, "shipping_methods", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return fulfillment_1.Fulfillment; }, function (fulfillment) { return fulfillment.claim_order; }, {
            cascade: ["insert"],
        }),
        __metadata("design:type", Array)
    ], ClaimOrder.prototype, "fulfillments", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Number)
    ], ClaimOrder.prototype, "refund_amount", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Date)
    ], ClaimOrder.prototype, "canceled_at", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], ClaimOrder.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], ClaimOrder.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], ClaimOrder.prototype, "deleted_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "boolean", nullable: true }),
        __metadata("design:type", Boolean)
    ], ClaimOrder.prototype, "no_notification", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], ClaimOrder.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ClaimOrder.prototype, "idempotency_key", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ClaimOrder.prototype, "beforeInsert", null);
    ClaimOrder = __decorate([
        (0, typeorm_1.Entity)()
    ], ClaimOrder);
    return ClaimOrder;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.ClaimOrder = ClaimOrder;
/**
 * @schema ClaimOrder
 * title: "Claim"
 * description: "A Claim represents a group of faulty or missing items. It consists of claim items that refer to items in the original order that should be replaced or refunded. It also includes details related to shipping and fulfillment."
 * type: object
 * required:
 *   - canceled_at
 *   - created_at
 *   - deleted_at
 *   - fulfillment_status
 *   - id
 *   - idempotency_key
 *   - metadata
 *   - no_notification
 *   - order_id
 *   - payment_status
 *   - refund_amount
 *   - shipping_address_id
 *   - type
 *   - updated_at
 * properties:
 *   id:
 *     description: The claim's ID
 *     type: string
 *     example: claim_01G8ZH853Y6TFXWPG5EYE81X63
 *   type:
 *     description: The claim's type
 *     type: string
 *     enum:
 *       - refund
 *       - replace
 *   payment_status:
 *     description: The status of the claim's payment
 *     type: string
 *     enum:
 *       - na
 *       - not_refunded
 *       - refunded
 *     default: na
 *   fulfillment_status:
 *     description: The claim's fulfillment status
 *     type: string
 *     enum:
 *       - not_fulfilled
 *       - partially_fulfilled
 *       - fulfilled
 *       - partially_shipped
 *       - shipped
 *       - partially_returned
 *       - returned
 *       - canceled
 *       - requires_action
 *     default: not_fulfilled
 *   claim_items:
 *     description: The details of the items that should be replaced or refunded.
 *     type: array
 *     x-expandable: "claim_items"
 *     items:
 *       $ref: "#/components/schemas/ClaimItem"
 *   additional_items:
 *     description: The details of the new items to be shipped when the claim's type is `replace`
 *     type: array
 *     x-expandable: "additional_items"
 *     items:
 *       $ref: "#/components/schemas/LineItem"
 *   order_id:
 *     description: The ID of the order that the claim comes from.
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   order:
 *     description: The details of the order that this claim was created for.
 *     x-expandable: "order"
 *     nullable: true
 *     $ref: "#/components/schemas/Order"
 *   return_order:
 *     description: The details of the return associated with the claim if the claim's type is `replace`.
 *     x-expandable: "return_order"
 *     nullable: true
 *     $ref: "#/components/schemas/Return"
 *   shipping_address_id:
 *     description: The ID of the address that the new items should be shipped to
 *     nullable: true
 *     type: string
 *     example: addr_01G8ZH853YPY9B94857DY91YGW
 *   shipping_address:
 *     description: The details of the address that new items should be shipped to.
 *     x-expandable: "shipping_address"
 *     nullable: true
 *     $ref: "#/components/schemas/Address"
 *   shipping_methods:
 *     description: The details of the shipping methods that the claim order will be shipped with.
 *     type: array
 *     x-expandable: "shipping_methods"
 *     items:
 *       $ref: "#/components/schemas/ShippingMethod"
 *   fulfillments:
 *     description: The fulfillments of the new items to be shipped
 *     type: array
 *     x-expandable: "fulfillments"
 *     items:
 *       $ref: "#/components/schemas/Fulfillment"
 *   refund_amount:
 *     description: The amount that will be refunded in conjunction with the claim
 *     nullable: true
 *     type: integer
 *     example: 1000
 *   canceled_at:
 *     description: The date with timezone at which the claim was canceled.
 *     nullable: true
 *     type: string
 *     format: date-time
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
 *   no_notification:
 *     description: Flag for describing whether or not notifications related to this should be send.
 *     nullable: true
 *     type: boolean
 *     example: false
 *   idempotency_key:
 *     description: Randomly generated key used to continue the completion of the cart associated with the claim in case of failure.
 *     nullable: true
 *     type: string
 *     externalDocs:
 *       url: https://docs.medusajs.com/development/idempotency-key/overview.md
 *       description: Learn more how to use the idempotency key.
 */
//# sourceMappingURL=claim-order.js.map