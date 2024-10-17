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
exports.PaymentSession = exports.PaymentSessionStatus = void 0;
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var db_aware_column_1 = require("../utils/db-aware-column");
var cart_1 = require("./cart");
/**
 * @enum
 *
 * The status of a payment session.
 */
var PaymentSessionStatus;
(function (PaymentSessionStatus) {
    /**
     * The payment is authorized.
     */
    PaymentSessionStatus["AUTHORIZED"] = "authorized";
    /**
     * The payment is pending.
     */
    PaymentSessionStatus["PENDING"] = "pending";
    /**
     * The payment requires an action.
     */
    PaymentSessionStatus["REQUIRES_MORE"] = "requires_more";
    /**
     * An error occurred while processing the payment.
     */
    PaymentSessionStatus["ERROR"] = "error";
    /**
     * The payment is canceled.
     */
    PaymentSessionStatus["CANCELED"] = "canceled";
})(PaymentSessionStatus = exports.PaymentSessionStatus || (exports.PaymentSessionStatus = {}));
var PaymentSession = /** @class */ (function (_super) {
    __extends(PaymentSession, _super);
    function PaymentSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    PaymentSession.prototype.beforeInsert = function () {
        this.id = (0, utils_1.generateEntityId)(this.id, "ps");
    };
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Object)
    ], PaymentSession.prototype, "cart_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return cart_1.Cart; }, function (cart) { return cart.payment_sessions; }),
        (0, typeorm_1.JoinColumn)({ name: "cart_id" }),
        __metadata("design:type", Object)
    ], PaymentSession.prototype, "cart", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PaymentSession.prototype, "provider_id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "boolean", nullable: true }),
        __metadata("design:type", Object)
    ], PaymentSession.prototype, "is_selected", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "boolean", default: false }),
        __metadata("design:type", Boolean)
    ], PaymentSession.prototype, "is_initiated", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: PaymentSessionStatus }),
        __metadata("design:type", String)
    ], PaymentSession.prototype, "status", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb" }),
        __metadata("design:type", Object)
    ], PaymentSession.prototype, "data", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], PaymentSession.prototype, "idempotency_key", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "integer", nullable: true }),
        __metadata("design:type", Number)
    ], PaymentSession.prototype, "amount", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Date
        /**
         * @apiIgnore
         */
        )
    ], PaymentSession.prototype, "payment_authorized_at", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PaymentSession.prototype, "beforeInsert", null);
    PaymentSession = __decorate([
        (0, typeorm_1.Unique)("OneSelected", ["cart_id", "is_selected"]),
        (0, typeorm_1.Index)("UniqPaymentSessionCartIdProviderId", ["cart_id", "provider_id"], {
            unique: true,
            where: "cart_id IS NOT NULL",
        }),
        (0, typeorm_1.Entity)()
    ], PaymentSession);
    return PaymentSession;
}(interfaces_1.BaseEntity));
exports.PaymentSession = PaymentSession;
/**
 * @schema PaymentSession
 * title: "Payment Session"
 * description: "A Payment Session is created when a Customer initilizes the checkout flow, and can be used to hold the state of a payment flow. Each Payment Session is controlled by a Payment Provider, which is responsible for the communication with external payment services. Authorized Payment Sessions will eventually get promoted to Payments to indicate that they are authorized for payment processing such as capture or refund. Payment sessions can also be used as part of payment collections."
 * type: object
 * required:
 *   - amount
 *   - cart_id
 *   - created_at
 *   - data
 *   - id
 *   - is_initiated
 *   - is_selected
 *   - idempotency_key
 *   - payment_authorized_at
 *   - provider_id
 *   - status
 *   - updated_at
 * properties:
 *   id:
 *     description: The payment session's ID
 *     type: string
 *     example: ps_01G901XNSRM2YS3ASN9H5KG3FZ
 *   cart_id:
 *     description: The ID of the cart that the payment session was created for.
 *     nullable: true
 *     type: string
 *     example: cart_01G8ZH853Y6TFXWPG5EYE81X63
 *   cart:
 *     description: The details of the cart that the payment session was created for.
 *     x-expandable: "cart"
 *     nullable: true
 *     $ref: "#/components/schemas/Cart"
 *   provider_id:
 *     description: The ID of the Payment Provider that is responsible for the Payment Session
 *     type: string
 *     example: manual
 *   is_selected:
 *     description: A flag to indicate if the Payment Session has been selected as the method that will be used to complete the purchase.
 *     nullable: true
 *     type: boolean
 *     example: true
 *   is_initiated:
 *     description: A flag to indicate if a communication with the third party provider has been initiated.
 *     type: boolean
 *     default: false
 *     example: true
 *   status:
 *     description: Indicates the status of the Payment Session. Will default to `pending`, and will eventually become `authorized`. Payment Sessions may have the status of `requires_more` to indicate that further actions are to be completed by the Customer.
 *     type: string
 *     enum:
 *       - authorized
 *       - pending
 *       - requires_more
 *       - error
 *       - canceled
 *     example: pending
 *   data:
 *     description: The data required for the Payment Provider to identify, modify and process the Payment Session. Typically this will be an object that holds an id to the external payment session, but can be an empty object if the Payment Provider doesn't hold any state.
 *     type: object
 *     example: {}
 *   idempotency_key:
 *     description: Randomly generated key used to continue the completion of a cart in case of failure.
 *     nullable: true
 *     type: string
 *     externalDocs:
 *       url: https://docs.medusajs.com/development/idempotency-key/overview.md
 *       description: Learn more how to use the idempotency key.
 *   amount:
 *     description: The amount that the Payment Session has been authorized for.
 *     nullable: true
 *     type: integer
 *     example: 100
 *   payment_authorized_at:
 *     description: The date with timezone at which the Payment Session was authorized.
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
 */
//# sourceMappingURL=payment-session.js.map