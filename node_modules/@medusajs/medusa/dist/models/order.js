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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.PaymentStatus = exports.FulfillmentStatus = exports.OrderStatus = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var feature_flag_decorators_1 = require("../utils/feature-flag-decorators");
var utils_1 = require("@medusajs/utils");
var base_entity_1 = require("../interfaces/models/base-entity");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var manual_auto_increment_1 = require("../utils/manual-auto-increment");
var address_1 = require("./address");
var cart_1 = require("./cart");
var claim_order_1 = require("./claim-order");
var currency_1 = require("./currency");
var customer_1 = require("./customer");
var discount_1 = require("./discount");
var draft_order_1 = require("./draft-order");
var fulfillment_1 = require("./fulfillment");
var gift_card_1 = require("./gift-card");
var gift_card_transaction_1 = require("./gift-card-transaction");
var line_item_1 = require("./line-item");
var order_edit_1 = require("./order-edit");
var payment_1 = require("./payment");
var refund_1 = require("./refund");
var region_1 = require("./region");
var return_1 = require("./return");
var sales_channel_1 = require("./sales-channel");
var shipping_method_1 = require("./shipping-method");
var swap_1 = require("./swap");
/**
 * @enum
 *
 * The order's status.
 */
var OrderStatus;
(function (OrderStatus) {
    /**
     * The order is pending.
     */
    OrderStatus["PENDING"] = "pending";
    /**
     * The order is completed, meaning that
     * the items have been fulfilled and the payment
     * has been captured.
     */
    OrderStatus["COMPLETED"] = "completed";
    /**
     * The order is archived.
     */
    OrderStatus["ARCHIVED"] = "archived";
    /**
     * The order is canceled.
     */
    OrderStatus["CANCELED"] = "canceled";
    /**
     * The order requires action.
     */
    OrderStatus["REQUIRES_ACTION"] = "requires_action";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
/**
 * @enum
 *
 * The order's fulfillment status.
 */
var FulfillmentStatus;
(function (FulfillmentStatus) {
    /**
     * The order's items are not fulfilled.
     */
    FulfillmentStatus["NOT_FULFILLED"] = "not_fulfilled";
    /**
     * Some of the order's items, but not all, are fulfilled.
     */
    FulfillmentStatus["PARTIALLY_FULFILLED"] = "partially_fulfilled";
    /**
     * The order's items are fulfilled.
     */
    FulfillmentStatus["FULFILLED"] = "fulfilled";
    /**
     * Some of the order's items, but not all, are shipped.
     */
    FulfillmentStatus["PARTIALLY_SHIPPED"] = "partially_shipped";
    /**
     * The order's items are shipped.
     */
    FulfillmentStatus["SHIPPED"] = "shipped";
    /**
     * Some of the order's items, but not all, are returned.
     */
    FulfillmentStatus["PARTIALLY_RETURNED"] = "partially_returned";
    /**
     * The order's items are returned.
     */
    FulfillmentStatus["RETURNED"] = "returned";
    /**
     * The order's fulfillments are canceled.
     */
    FulfillmentStatus["CANCELED"] = "canceled";
    /**
     * The order's fulfillment requires action.
     */
    FulfillmentStatus["REQUIRES_ACTION"] = "requires_action";
})(FulfillmentStatus = exports.FulfillmentStatus || (exports.FulfillmentStatus = {}));
/**
 * @enum
 *
 * The order's payment status.
 */
var PaymentStatus;
(function (PaymentStatus) {
    /**
     * The order's payment is not paid.
     */
    PaymentStatus["NOT_PAID"] = "not_paid";
    /**
     * The order's payment is awaiting capturing.
     */
    PaymentStatus["AWAITING"] = "awaiting";
    /**
     * The order's payment is captured.
     */
    PaymentStatus["CAPTURED"] = "captured";
    /**
     * Some of the order's payment amount is refunded.
     */
    PaymentStatus["PARTIALLY_REFUNDED"] = "partially_refunded";
    /**
     * The order's payment amount is refunded.
     */
    PaymentStatus["REFUNDED"] = "refunded";
    /**
     * The order's payment is canceled.
     */
    PaymentStatus["CANCELED"] = "canceled";
    /**
     * The order's payment requires action.
     */
    PaymentStatus["REQUIRES_ACTION"] = "requires_action";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @apiIgnore
         */
        _this.object = "order";
        return _this;
    }
    /**
     * @apiIgnore
     */
    Order.prototype.beforeInsert = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var disId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "order");
                        if (this.sales_channel_id || this.sales_channel) {
                            this.sales_channels = [
                                { id: this.sales_channel_id || ((_a = this.sales_channel) === null || _a === void 0 ? void 0 : _a.id) },
                            ];
                        }
                        if (!(process.env.NODE_ENV === "development" && !this.display_id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, manual_auto_increment_1.manualAutoIncrement)("order")];
                    case 1:
                        disId = _b.sent();
                        if (disId) {
                            this.display_id = disId;
                        }
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @apiIgnore
     */
    Order.prototype.beforeUpdate = function () {
        var _a;
        if (this.sales_channel_id || this.sales_channel) {
            this.sales_channels = [
                { id: this.sales_channel_id || ((_a = this.sales_channel) === null || _a === void 0 ? void 0 : _a.id) },
            ];
        }
    };
    /**
     * @apiIgnore
     */
    Order.prototype.afterLoad = function () {
        var _a, _b;
        if (this.sales_channels) {
            this.sales_channel = (_a = this.sales_channels) === null || _a === void 0 ? void 0 : _a[0];
            this.sales_channel_id = (_b = this.sales_channel) === null || _b === void 0 ? void 0 : _b.id;
            delete this.sales_channels;
        }
    };
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: OrderStatus, default: "pending" }),
        __metadata("design:type", String)
    ], Order.prototype, "status", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({
            type: "enum",
            enum: FulfillmentStatus,
            default: "not_fulfilled",
        }),
        __metadata("design:type", String)
    ], Order.prototype, "fulfillment_status", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: PaymentStatus, default: "not_paid" }),
        __metadata("design:type", String)
    ], Order.prototype, "payment_status", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        (0, typeorm_1.Generated)("increment"),
        __metadata("design:type", Number)
    ], Order.prototype, "display_id", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Order.prototype, "cart_id", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return cart_1.Cart; }),
        (0, typeorm_1.JoinColumn)({ name: "cart_id" }),
        __metadata("design:type", Object)
    ], Order.prototype, "cart", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Order.prototype, "customer_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return customer_1.Customer; }, { cascade: ["insert"] }),
        (0, typeorm_1.JoinColumn)({ name: "customer_id" }),
        __metadata("design:type", Object)
    ], Order.prototype, "customer", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Order.prototype, "email", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Order.prototype, "billing_address_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return address_1.Address; }, { cascade: ["insert"] }),
        (0, typeorm_1.JoinColumn)({ name: "billing_address_id" }),
        __metadata("design:type", Object)
    ], Order.prototype, "billing_address", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Order.prototype, "shipping_address_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return address_1.Address; }, { cascade: ["insert"] }),
        (0, typeorm_1.JoinColumn)({ name: "shipping_address_id" }),
        __metadata("design:type", Object)
    ], Order.prototype, "shipping_address", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Order.prototype, "region_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return region_1.Region; }),
        (0, typeorm_1.JoinColumn)({ name: "region_id" }),
        __metadata("design:type", Object)
    ], Order.prototype, "region", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Order.prototype, "currency_code", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return currency_1.Currency; }),
        (0, typeorm_1.JoinColumn)({ name: "currency_code", referencedColumnName: "code" }),
        __metadata("design:type", Object)
    ], Order.prototype, "currency", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "real", nullable: true }),
        __metadata("design:type", Object)
    ], Order.prototype, "tax_rate", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return discount_1.Discount; }, { cascade: ["insert"] }),
        (0, typeorm_1.JoinTable)({
            name: "order_discounts",
            joinColumn: {
                name: "order_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "discount_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], Order.prototype, "discounts", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return gift_card_1.GiftCard; }, { cascade: ["insert"] }),
        (0, typeorm_1.JoinTable)({
            name: "order_gift_cards",
            joinColumn: {
                name: "order_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "gift_card_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], Order.prototype, "gift_cards", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return shipping_method_1.ShippingMethod; }, function (method) { return method.order; }, {
            cascade: ["insert"],
        }),
        __metadata("design:type", Array)
    ], Order.prototype, "shipping_methods", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return payment_1.Payment; }, function (payment) { return payment.order; }, { cascade: ["insert"] }),
        __metadata("design:type", Array)
    ], Order.prototype, "payments", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return fulfillment_1.Fulfillment; }, function (fulfillment) { return fulfillment.order; }, {
            cascade: ["insert"],
        }),
        __metadata("design:type", Array)
    ], Order.prototype, "fulfillments", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return return_1.Return; }, function (ret) { return ret.order; }, { cascade: ["insert"] }),
        __metadata("design:type", Array)
    ], Order.prototype, "returns", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return claim_order_1.ClaimOrder; }, function (co) { return co.order; }, { cascade: ["insert"] }),
        __metadata("design:type", Array)
    ], Order.prototype, "claims", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return refund_1.Refund; }, function (ref) { return ref.order; }, { cascade: ["insert"] }),
        __metadata("design:type", Array)
    ], Order.prototype, "refunds", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return swap_1.Swap; }, function (swap) { return swap.order; }, { cascade: ["insert"] }),
        __metadata("design:type", Array)
    ], Order.prototype, "swaps", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Order.prototype, "draft_order_id", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return draft_order_1.DraftOrder; }),
        (0, typeorm_1.JoinColumn)({ name: "draft_order_id" }),
        __metadata("design:type", Object)
    ], Order.prototype, "draft_order", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return order_edit_1.OrderEdit; }, function (oe) { return oe.order; }),
        __metadata("design:type", Array)
    ], Order.prototype, "edits", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return line_item_1.LineItem; }, function (lineItem) { return lineItem.order; }, {
            cascade: ["insert"],
        }),
        __metadata("design:type", Array)
    ], Order.prototype, "items", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return gift_card_transaction_1.GiftCardTransaction; }, function (gc) { return gc.order; }),
        __metadata("design:type", Array)
    ], Order.prototype, "gift_card_transactions", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true, type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date)
    ], Order.prototype, "canceled_at", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], Order.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "boolean", nullable: true }),
        __metadata("design:type", Boolean)
    ], Order.prototype, "no_notification", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Order.prototype, "idempotency_key", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], Order.prototype, "external_id", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagColumn)("sales_channels", { type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], Order.prototype, "sales_channel_id", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)("sales_channels", [
            (0, typeorm_1.ManyToOne)(function () { return sales_channel_1.SalesChannel; }),
            (0, typeorm_1.JoinColumn)({ name: "sales_channel_id" }),
        ]),
        __metadata("design:type", Object)
    ], Order.prototype, "sales_channel", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)([utils_1.MedusaV2Flag.key, "sales_channels"], [
            (0, typeorm_1.ManyToMany)(function () { return sales_channel_1.SalesChannel; }, { cascade: ["remove", "soft-remove"] }),
            (0, typeorm_1.JoinTable)({
                name: "order_sales_channel",
                joinColumn: {
                    name: "cart_id",
                    referencedColumnName: "id",
                },
                inverseJoinColumn: {
                    name: "sales_channel_id",
                    referencedColumnName: "id",
                },
            }),
        ]),
        __metadata("design:type", Array)
    ], Order.prototype, "sales_channels", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Order.prototype, "beforeInsert", null);
    __decorate([
        (0, typeorm_1.BeforeUpdate)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Order.prototype, "beforeUpdate", null);
    __decorate([
        (0, typeorm_1.AfterLoad)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Order.prototype, "afterLoad", null);
    Order = __decorate([
        (0, typeorm_1.Entity)()
    ], Order);
    return Order;
}(base_entity_1.BaseEntity));
exports.Order = Order;
/**
 * @schema Order
 * title: "Order"
 * description: "An order is a purchase made by a customer. It holds details about payment and fulfillment of the order. An order may also be created from a draft order, which is created by an admin user."
 * type: object
 * required:
 *   - billing_address_id
 *   - canceled_at
 *   - cart_id
 *   - created_at
 *   - currency_code
 *   - customer_id
 *   - draft_order_id
 *   - display_id
 *   - email
 *   - external_id
 *   - fulfillment_status
 *   - id
 *   - idempotency_key
 *   - metadata
 *   - no_notification
 *   - object
 *   - payment_status
 *   - region_id
 *   - shipping_address_id
 *   - status
 *   - tax_rate
 *   - updated_at
 * properties:
 *   id:
 *     description: The order's ID
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   status:
 *     description: The order's status
 *     type: string
 *     enum:
 *       - pending
 *       - completed
 *       - archived
 *       - canceled
 *       - requires_action
 *     default: pending
 *   fulfillment_status:
 *     description: The order's fulfillment status
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
 *   payment_status:
 *     description: The order's payment status
 *     type: string
 *     enum:
 *       - not_paid
 *       - awaiting
 *       - captured
 *       - partially_refunded
 *       - refunded
 *       - canceled
 *       - requires_action
 *     default: not_paid
 *   display_id:
 *     description: The order's display ID
 *     type: integer
 *     example: 2
 *   cart_id:
 *     description: The ID of the cart associated with the order
 *     nullable: true
 *     type: string
 *     example: cart_01G8ZH853Y6TFXWPG5EYE81X63
 *   cart:
 *     description: The details of the cart associated with the order.
 *     x-expandable: "cart"
 *     nullable: true
 *     $ref: "#/components/schemas/Cart"
 *   customer_id:
 *     description: The ID of the customer associated with the order
 *     type: string
 *     example: cus_01G2SG30J8C85S4A5CHM2S1NS2
 *   customer:
 *     description: The details of the customer associated with the order.
 *     x-expandable: "customer"
 *     nullable: true
 *     $ref: "#/components/schemas/Customer"
 *   email:
 *     description: The email associated with the order
 *     type: string
 *     format: email
 *   billing_address_id:
 *     description: The ID of the billing address associated with the order
 *     nullable: true
 *     type: string
 *     example: addr_01G8ZH853YPY9B94857DY91YGW
 *   billing_address:
 *     description: The details of the billing address associated with the order.
 *     x-expandable: "billing_address"
 *     nullable: true
 *     $ref: "#/components/schemas/Address"
 *   shipping_address_id:
 *     description: The ID of the shipping address associated with the order
 *     nullable: true
 *     type: string
 *     example: addr_01G8ZH853YPY9B94857DY91YGW
 *   shipping_address:
 *     description: The details of the shipping address associated with the order.
 *     x-expandable: "shipping_address"
 *     nullable: true
 *     $ref: "#/components/schemas/Address"
 *   region_id:
 *     description: The ID of the region this order was created in.
 *     type: string
 *     example: reg_01G1G5V26T9H8Y0M4JNE3YGA4G
 *   region:
 *     description: The details of the region this order was created in.
 *     x-expandable: "region"
 *     nullable: true
 *     $ref: "#/components/schemas/Region"
 *   currency_code:
 *     description: The 3 character currency code that is used in the order
 *     type: string
 *     example: usd
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *       description: See a list of codes.
 *   currency:
 *     description: The details of the currency used in the order.
 *     x-expandable: "currency"
 *     nullable: true
 *     $ref: "#/components/schemas/Currency"
 *   tax_rate:
 *     description: The order's tax rate
 *     nullable: true
 *     type: number
 *     example: 0
 *   discounts:
 *     description: The details of the discounts applied on the order.
 *     type: array
 *     x-expandable: "discounts"
 *     items:
 *       $ref: "#/components/schemas/Discount"
 *   gift_cards:
 *     description: The details of the gift card used in the order.
 *     type: array
 *     x-expandable: "gift_cards"
 *     items:
 *       $ref: "#/components/schemas/GiftCard"
 *   shipping_methods:
 *     description: The details of the shipping methods used in the order.
 *     type: array
 *     x-expandable: "shipping_methods"
 *     items:
 *       $ref: "#/components/schemas/ShippingMethod"
 *   payments:
 *     description: The details of the payments used in the order.
 *     type: array
 *     x-expandable: "payments"
 *     items:
 *       $ref: "#/components/schemas/Payment"
 *   fulfillments:
 *     description: The details of the fulfillments created for the order.
 *     type: array
 *     x-expandable: "fulfillments"
 *     items:
 *       $ref: "#/components/schemas/Fulfillment"
 *   returns:
 *     description: The details of the returns created for the order.
 *     type: array
 *     x-expandable: "returns"
 *     items:
 *       $ref: "#/components/schemas/Return"
 *   claims:
 *     description: The details of the claims created for the order.
 *     type: array
 *     x-expandable: "claims"
 *     items:
 *       $ref: "#/components/schemas/ClaimOrder"
 *   refunds:
 *     description: The details of the refunds created for the order.
 *     type: array
 *     x-expandable: "refunds"
 *     items:
 *       $ref: "#/components/schemas/Refund"
 *   swaps:
 *     description: The details of the swaps created for the order.
 *     type: array
 *     x-expandable: "swaps"
 *     items:
 *       $ref: "#/components/schemas/Swap"
 *   draft_order_id:
 *     description: The ID of the draft order this order was created from.
 *     nullable: true
 *     type: string
 *     example: null
 *   draft_order:
 *     description: The details of the draft order this order was created from.
 *     x-expandable: "draft_order"
 *     nullable: true
 *     $ref: "#/components/schemas/DraftOrder"
 *   items:
 *     description: The details of the line items that belong to the order.
 *     x-expandable: "items"
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/LineItem"
 *   edits:
 *     description: The details of the order edits done on the order.
 *     type: array
 *     x-expandable: "edits"
 *     items:
 *       $ref: "#/components/schemas/OrderEdit"
 *   gift_card_transactions:
 *     description: The gift card transactions made in the order.
 *     type: array
 *     x-expandable: "gift_card_transactions"
 *     items:
 *       $ref: "#/components/schemas/GiftCardTransaction"
 *   canceled_at:
 *     description: The date the order was canceled on.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   no_notification:
 *     description: Flag for describing whether or not notifications related to this should be send.
 *     nullable: true
 *     type: boolean
 *     example: false
 *   idempotency_key:
 *     description: Randomly generated key used to continue the processing of the order in case of failure.
 *     nullable: true
 *     type: string
 *     externalDocs:
 *       url: https://docs.medusajs.com/development/idempotency-key/overview.md
 *       description: Learn more how to use the idempotency key.
 *   external_id:
 *     description: The ID of an external order.
 *     nullable: true
 *     type: string
 *     example: null
 *   sales_channel_id:
 *     description: The ID of the sales channel this order belongs to.
 *     nullable: true
 *     type: string
 *     example: null
 *   sales_channel:
 *     description: The details of the sales channel this order belongs to.
 *     x-expandable: "sales_channel"
 *     nullable: true
 *     $ref: "#/components/schemas/SalesChannel"
 *   shipping_total:
 *     type: integer
 *     description: The total of shipping
 *     example: 1000
 *     nullable: true
 *   shipping_tax_total:
 *     type: integer
 *     description: The tax total applied on shipping
 *     example: 1000
 *   raw_discount_total:
 *     description: The total of discount
 *     type: integer
 *     example: 800
 *   discount_total:
 *     description: The total of discount rounded
 *     type: integer
 *     example: 800
 *   tax_total:
 *     description: The total of tax
 *     type: integer
 *     example: 0
 *   item_tax_total:
 *     description: The tax total applied on items
 *     type: integer
 *     example: 0
 *     nullable: true
 *   refunded_total:
 *     description: The total amount refunded if the order is returned.
 *     type: integer
 *     example: 0
 *   total:
 *     description: The total amount of the order
 *     type: integer
 *     example: 8200
 *   subtotal:
 *     description: The subtotal of the order
 *     type: integer
 *     example: 8000
 *   paid_total:
 *     description: The total amount paid
 *     type: integer
 *     example: 8000
 *   refundable_amount:
 *     description: The amount that can be refunded
 *     type: integer
 *     example: 8200
 *   gift_card_total:
 *     description: The total of gift cards
 *     type: integer
 *     example: 0
 *   gift_card_tax_total:
 *     description: The total of gift cards with taxes
 *     type: integer
 *     example: 0
 *   returnable_items:
 *     description: The details of the line items that are returnable as part of the order, swaps, or claims
 *     type: array
 *     x-expandable: "returnable_items"
 *     items:
 *       $ref: "#/components/schemas/LineItem"
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
 *   sales_channels:
 *     description: The associated sales channels.
 *     type: array
 *     nullable: true
 *     x-expandable: "sales_channels"
 *     x-featureFlag: "medusa_v2"
 *     items:
 *       $ref: "#/components/schemas/SalesChannel"
 */
//# sourceMappingURL=order.js.map