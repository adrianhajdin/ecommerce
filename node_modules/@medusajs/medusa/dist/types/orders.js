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
exports.OrdersReturnItem = exports.AdminListOrdersSelector = exports.defaultAdminOrdersFields = exports.defaultAdminOrdersRelations = exports.isOrder = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var is_type_1 = require("../utils/validators/is-type");
var common_1 = require("./common");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isOrder(object) {
    return object.object === "order";
}
exports.isOrder = isOrder;
/**
 * @enum
 *
 * The status of an order.
 */
var OrderStatus;
(function (OrderStatus) {
    /**
     * Order is pending.
     */
    OrderStatus["pending"] = "pending";
    /**
     * Order is completed. An order is completed when it's paid and fulfilled.
     */
    OrderStatus["completed"] = "completed";
    /**
     * Order is archived.
     */
    OrderStatus["archived"] = "archived";
    /**
     * Order is canceled.
     */
    OrderStatus["canceled"] = "canceled";
    /**
     * Order requires an action. This status is applied when the order's payment or fulfillment requires an additional action.
     */
    OrderStatus["requires_action"] = "requires_action";
})(OrderStatus || (OrderStatus = {}));
/**
 * @enum
 *
 * The fulfillment status of an order.
 */
var FulfillmentStatus;
(function (FulfillmentStatus) {
    /**
     * The order isn't fulfilled.
     */
    FulfillmentStatus["not_fulfilled"] = "not_fulfilled";
    /**
     * All of the order's items are fulfilled.
     */
    FulfillmentStatus["fulfilled"] = "fulfilled";
    /**
     * Some, but not all, of the order's items are fulfilled.
     */
    FulfillmentStatus["partially_fulfilled"] = "partially_fulfilled";
    /**
     * All of the order's items are shipped.
     */
    FulfillmentStatus["shipped"] = "shipped";
    /**
     * Some, but not all, of the order's items are shipped.
     */
    FulfillmentStatus["partially_shipped"] = "partially_shipped";
    /**
     * The order's fulfillments are canceled.
     */
    FulfillmentStatus["canceled"] = "canceled";
    /**
     * All of the order's items are returned.
     */
    FulfillmentStatus["returned"] = "returned";
    /**
     * Some, but not all, of the order's items are returned.
     */
    FulfillmentStatus["partially_returned"] = "partially_returned";
    /**
     * The order's fulfillment requires an action.
     */
    FulfillmentStatus["requires_action"] = "requires_action";
})(FulfillmentStatus || (FulfillmentStatus = {}));
/**
 * @enum
 *
 * The payment status of the order.
 */
var PaymentStatus;
(function (PaymentStatus) {
    /**
     * The order's payment is captured.
     */
    PaymentStatus["captured"] = "captured";
    /**
     * The order's payment is awaiting.
     */
    PaymentStatus["awaiting"] = "awaiting";
    /**
     * The order's payment isn't paid.
     */
    PaymentStatus["not_paid"] = "not_paid";
    /**
     * The order's payment is fully refunded.
     */
    PaymentStatus["refunded"] = "refunded";
    /**
     * The order's payment is partially refunded.
     */
    PaymentStatus["partially_refunded"] = "partially_refunded";
    /**
     * The order's payment is canceled.
     */
    PaymentStatus["canceled"] = "canceled";
    /**
     * The order's payment requires an action.
     */
    PaymentStatus["requires_action"] = "requires_action";
})(PaymentStatus || (PaymentStatus = {}));
exports.defaultAdminOrdersRelations = [
    "billing_address",
    "claims",
    "claims.additional_items",
    "claims.additional_items.variant",
    "claims.claim_items",
    "claims.claim_items.images",
    "claims.claim_items.item",
    "claims.fulfillments",
    "claims.fulfillments.tracking_links",
    "claims.return_order",
    "claims.return_order.shipping_method",
    "claims.return_order.shipping_method.tax_lines",
    "claims.shipping_address",
    "claims.shipping_methods",
    "customer",
    "discounts",
    "discounts.rule",
    "fulfillments",
    "fulfillments.items",
    "fulfillments.tracking_links",
    "gift_card_transactions",
    "gift_cards",
    "items",
    "payments",
    "refunds",
    "region",
    "returns",
    "returns.items",
    "returns.items.reason",
    "returns.shipping_method",
    "returns.shipping_method.shipping_option",
    "returns.shipping_method.tax_lines",
    "shipping_address",
    "shipping_methods",
    "shipping_methods.shipping_option",
    "shipping_methods.tax_lines",
    "swaps",
    "swaps.additional_items",
    "swaps.additional_items.variant",
    "swaps.fulfillments",
    "swaps.fulfillments.tracking_links",
    "swaps.payment",
    "swaps.return_order",
    "swaps.return_order.shipping_method",
    "swaps.return_order.shipping_method.shipping_option",
    "swaps.return_order.shipping_method.tax_lines",
    "swaps.shipping_address",
    "swaps.shipping_methods",
    "swaps.shipping_methods.shipping_option",
    "swaps.shipping_methods.tax_lines",
    // "claims.claim_items.tags",
];
exports.defaultAdminOrdersFields = [
    "id",
    "status",
    "fulfillment_status",
    "payment_status",
    "display_id",
    "cart_id",
    "draft_order_id",
    "customer_id",
    "email",
    "region_id",
    "currency_code",
    "tax_rate",
    "canceled_at",
    "created_at",
    "updated_at",
    "metadata",
    "items.refundable",
    "swaps.additional_items.refundable",
    "claims.additional_items.refundable",
    "no_notification",
];
/**
 * Filters to apply on the retrieved orders.
 */
var AdminListOrdersSelector = /** @class */ (function () {
    function AdminListOrdersSelector() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminListOrdersSelector.prototype, "q", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminListOrdersSelector.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsEnum)(OrderStatus, { each: true }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminListOrdersSelector.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsEnum)(FulfillmentStatus, { each: true }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminListOrdersSelector.prototype, "fulfillment_status", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsEnum)(PaymentStatus, { each: true }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminListOrdersSelector.prototype, "payment_status", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminListOrdersSelector.prototype, "display_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminListOrdersSelector.prototype, "cart_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminListOrdersSelector.prototype, "customer_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminListOrdersSelector.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], AdminListOrdersSelector.prototype, "region_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminListOrdersSelector.prototype, "currency_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminListOrdersSelector.prototype, "tax_rate", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminListOrdersSelector.prototype, "sales_channel_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator
        /**
         * Date filters to apply on the orders' `created_at` date.
         */
        )
    ], AdminListOrdersSelector.prototype, "canceled_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator
        /**
         * Date filters to apply on the orders' `updated_at` date.
         */
        )
    ], AdminListOrdersSelector.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], AdminListOrdersSelector.prototype, "updated_at", void 0);
    return AdminListOrdersSelector;
}());
exports.AdminListOrdersSelector = AdminListOrdersSelector;
var OrdersReturnItem = /** @class */ (function () {
    function OrdersReturnItem() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], OrdersReturnItem.prototype, "item_id", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], OrdersReturnItem.prototype, "quantity", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], OrdersReturnItem.prototype, "reason_id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], OrdersReturnItem.prototype, "note", void 0);
    return OrdersReturnItem;
}());
exports.OrdersReturnItem = OrdersReturnItem;
//# sourceMappingURL=orders.js.map