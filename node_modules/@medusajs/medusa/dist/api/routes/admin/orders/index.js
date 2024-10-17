"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowedOrderIncludes = exports.AvailableOrderIncludes = exports.filterableAdminOrdersFields = void 0;
var express_1 = require("express");
require("reflect-metadata");
var sales_channels_1 = __importDefault(require("../../../../loaders/feature-flags/sales-channels"));
var common_1 = require("../../../../types/common");
var orders_1 = require("../../../../types/orders");
var middlewares_1 = __importStar(require("../../../middlewares"));
var check_registered_modules_1 = require("../../../middlewares/check-registered-modules");
var add_shipping_method_1 = require("./add-shipping-method");
var archive_order_1 = require("./archive-order");
var cancel_claim_1 = require("./cancel-claim");
var cancel_fulfillment_1 = require("./cancel-fulfillment");
var cancel_fulfillment_claim_1 = require("./cancel-fulfillment-claim");
var cancel_fulfillment_swap_1 = require("./cancel-fulfillment-swap");
var cancel_order_1 = require("./cancel-order");
var cancel_swap_1 = require("./cancel-swap");
var capture_payment_1 = require("./capture-payment");
var complete_order_1 = require("./complete-order");
var create_claim_1 = require("./create-claim");
var create_claim_shipment_1 = require("./create-claim-shipment");
var create_fulfillment_1 = require("./create-fulfillment");
var create_reservation_for_line_item_1 = require("./create-reservation-for-line-item");
var create_shipment_1 = require("./create-shipment");
var create_swap_1 = require("./create-swap");
var create_swap_shipment_1 = require("./create-swap-shipment");
var fulfill_claim_1 = require("./fulfill-claim");
var fulfill_swap_1 = require("./fulfill-swap");
var get_reservations_1 = require("./get-reservations");
var list_orders_1 = require("./list-orders");
var process_swap_payment_1 = require("./process-swap-payment");
var refund_payment_1 = require("./refund-payment");
var request_return_1 = require("./request-return");
var update_claim_1 = require("./update-claim");
var update_order_1 = require("./update-order");
var route = (0, express_1.Router)();
exports.default = (function (app, featureFlagRouter) {
    app.use("/orders", route);
    var relations = __spreadArray([], __read(orders_1.defaultAdminOrdersRelations), false);
    var defaultFields = __spreadArray([], __read(orders_1.defaultAdminOrdersFields), false);
    if (featureFlagRouter.isFeatureEnabled(sales_channels_1.default.key)) {
        relations.push("sales_channel");
        defaultFields.push("sales_channel_id");
    }
    /**
     * List orders
     */
    route.get("/", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformQuery)(list_orders_1.AdminGetOrdersParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-orders").default));
    /**
     * Get an order
     */
    route.get("/:id", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes, [
        exports.AvailableOrderIncludes.RETURNABLE_ITEMS,
    ]), (0, middlewares_1.transformQuery)(update_order_1.AdminPostOrdersOrderParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./get-order").default));
    /**
     * Update an order
     */
    route.post("/:id", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformBody)(update_order_1.AdminPostOrdersOrderReq), (0, middlewares_1.transformQuery)(common_1.FindParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./update-order").default));
    /**
     * Mark an order as completed
     */
    route.post("/:id/complete", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformQuery)(complete_order_1.AdminPostOrdersOrderCompleteParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./complete-order").default));
    /**
     * Refund an amount to the customer's card.
     */
    route.post("/:id/refund", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformBody)(refund_payment_1.AdminPostOrdersOrderRefundsReq), (0, middlewares_1.transformQuery)(refund_payment_1.AdminPostOrdersOrderRefundsParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./refund-payment").default));
    /**
     * Capture the authorized amount on the customer's card.
     */
    route.post("/:id/capture", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformQuery)(capture_payment_1.AdminPostOrdersOrderCaptureParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./capture-payment").default));
    /**
     * Create a fulfillment.
     */
    route.post("/:id/fulfillment", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformBody)(create_fulfillment_1.AdminPostOrdersOrderFulfillmentsReq), (0, middlewares_1.transformQuery)(create_fulfillment_1.AdminPostOrdersOrderFulfillmentsParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./create-fulfillment").default));
    /**
     * Cancel a fulfillment related to an order.
     */
    route.post("/:id/fulfillments/:fulfillment_id/cancel", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformQuery)(cancel_fulfillment_1.AdminPostOrdersOrderFulfillementsCancelParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./cancel-fulfillment").default));
    /**
     * Cancel a fulfillment related to a swap.
     */
    route.post("/:id/swaps/:swap_id/fulfillments/:fulfillment_id/cancel", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformQuery)(cancel_fulfillment_swap_1.AdminPostOrdersOrderSwapFulfillementsCancelParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./cancel-fulfillment-swap").default));
    /**
     * Cancel a fulfillment related to a claim.
     */
    route.post("/:id/claims/:claim_id/fulfillments/:fulfillment_id/cancel", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformQuery)(cancel_fulfillment_claim_1.AdminPostOrdersClaimFulfillmentsCancelParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./cancel-fulfillment-claim").default));
    /**
     * Create a shipment.
     */
    route.post("/:id/shipment", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformBody)(create_shipment_1.AdminPostOrdersOrderShipmentReq), (0, middlewares_1.transformQuery)(create_shipment_1.AdminPostOrdersOrderShipmentParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./create-shipment").default));
    /**
     * Request a return.
     */
    route.post("/:id/return", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformBody)(request_return_1.AdminPostOrdersOrderReturnsReq), (0, middlewares_1.transformQuery)(request_return_1.AdminPostOrdersOrderReturnsParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./request-return").default));
    /**
     * Cancel an order.
     */
    route.post("/:id/cancel", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformQuery)(cancel_order_1.AdminPostOrdersOrderCancel, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./cancel-order").default));
    /**
     * Add a shipping method
     */
    route.post("/:id/shipping-methods", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformBody)(add_shipping_method_1.AdminPostOrdersOrderShippingMethodsReq), (0, middlewares_1.transformQuery)(add_shipping_method_1.AdminPostOrdersOrderShippingMethodsParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./add-shipping-method").default));
    /**
     * Archive an order.
     */
    route.post("/:id/archive", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformQuery)(archive_order_1.AdminPostOrdersOrderArchiveParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./archive-order").default));
    /**
     * Creates a swap, requests a return and prepares a cart for payment.
     */
    route.post("/:id/swaps", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes, [
        exports.AvailableOrderIncludes.RETURNABLE_ITEMS,
    ]), (0, middlewares_1.transformBody)(create_swap_1.AdminPostOrdersOrderSwapsReq), (0, middlewares_1.transformQuery)(create_swap_1.AdminPostOrdersOrderSwapsParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./create-swap").default));
    /**
     * Cancels a swap.
     */
    route.post("/:id/swaps/:swap_id/cancel", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformQuery)(cancel_swap_1.AdminPostOrdersSwapCancelParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./cancel-swap").default));
    /**
     * Fulfills a swap.
     */
    route.post("/:id/swaps/:swap_id/fulfillments", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformQuery)(fulfill_swap_1.AdminPostOrdersOrderSwapsSwapFulfillmentsParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./fulfill-swap").default));
    /**
     * Marks a swap fulfillment as shipped.
     */
    route.post("/:id/swaps/:swap_id/shipments", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformBody)(create_swap_shipment_1.AdminPostOrdersOrderSwapsSwapShipmentsReq), (0, middlewares_1.transformQuery)(create_swap_shipment_1.AdminPostOrdersOrderSwapsSwapShipmentsParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./create-swap-shipment").default));
    /**
     * Captures the payment associated with a swap
     */
    route.post("/:id/swaps/:swap_id/process-payment", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformQuery)(process_swap_payment_1.AdminPostOrdersOrderSwapsSwapProcessPaymentParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./process-swap-payment").default));
    /**
     * Creates a claim
     */
    route.post("/:id/claims", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformBody)(create_claim_1.AdminPostOrdersOrderClaimsReq), (0, middlewares_1.transformQuery)(create_claim_1.AdminPostOrdersOrderClaimsParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./create-claim").default));
    /**
     * Cancels a claim
     */
    route.post("/:id/claims/:claim_id/cancel", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformQuery)(cancel_claim_1.AdminPostOrdersClaimCancel, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./cancel-claim").default));
    /**
     * Updates a claim
     */
    route.post("/:id/claims/:claim_id", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformBody)(update_claim_1.AdminPostOrdersOrderClaimsClaimReq), (0, middlewares_1.transformQuery)(update_claim_1.AdminPostOrdersOrderClaimsClaimParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./update-claim").default));
    /**
     * Creates claim fulfillment
     */
    route.post("/:id/claims/:claim_id/fulfillments", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformBody)(fulfill_claim_1.AdminPostOrdersOrderClaimsClaimFulfillmentsReq), (0, middlewares_1.transformQuery)(fulfill_claim_1.AdminPostOrdersOrderClaimsClaimFulfillmentsParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./fulfill-claim").default));
    /**
     * Creates claim shipment
     */
    route.post("/:id/claims/:claim_id/shipments", (0, middlewares_1.transformIncludesOptions)(exports.allowedOrderIncludes), (0, middlewares_1.transformBody)(create_claim_shipment_1.AdminPostOrdersOrderClaimsClaimShipmentsReq), (0, middlewares_1.transformQuery)(create_claim_shipment_1.AdminPostOrdersOrderClaimsClaimShipmentsParams, {
        defaultRelations: relations,
        defaultFields: defaultFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./create-claim-shipment").default));
    route.get("/:id/reservations", (0, check_registered_modules_1.checkRegisteredModules)({
        inventoryService: "Inventory is not enabled. Please add an Inventory module to enable this functionality.",
    }), (0, middlewares_1.transformQuery)(get_reservations_1.AdminGetOrdersOrderReservationsParams, {
        isList: true,
    }), middlewares_1.default.wrap(require("./get-reservations").default));
    route.post("/:id/line-items/:line_item_id/reserve", (0, check_registered_modules_1.checkRegisteredModules)({
        inventoryService: "Inventory is not enabled. Please add an Inventory module to enable this functionality.",
    }), (0, middlewares_1.transformBody)(create_reservation_for_line_item_1.AdminOrdersOrderLineItemReservationReq), middlewares_1.default.wrap(require("./create-reservation-for-line-item").default));
    return app;
});
exports.filterableAdminOrdersFields = [
    "id",
    "status",
    "fulfillment_status",
    "payment_status",
    "display_id",
    "cart_id",
    "customer_id",
    "email",
    "region_id",
    "currency_code",
    "tax_rate",
    "canceled_at",
    "created_at",
    "updated_at",
];
exports.AvailableOrderIncludes = {
    RETURNABLE_ITEMS: "returnable_items",
};
exports.allowedOrderIncludes = [exports.AvailableOrderIncludes.RETURNABLE_ITEMS];
__exportStar(require("./add-shipping-method"), exports);
__exportStar(require("./archive-order"), exports);
__exportStar(require("./cancel-claim"), exports);
__exportStar(require("./cancel-fulfillment"), exports);
__exportStar(require("./cancel-fulfillment-claim"), exports);
__exportStar(require("./cancel-fulfillment-swap"), exports);
__exportStar(require("./cancel-order"), exports);
__exportStar(require("./cancel-swap"), exports);
__exportStar(require("./capture-payment"), exports);
__exportStar(require("./complete-order"), exports);
__exportStar(require("./create-claim"), exports);
__exportStar(require("./create-claim-shipment"), exports);
__exportStar(require("./create-fulfillment"), exports);
__exportStar(require("./create-shipment"), exports);
__exportStar(require("./create-swap"), exports);
__exportStar(require("./create-swap-shipment"), exports);
__exportStar(require("./fulfill-claim"), exports);
__exportStar(require("./fulfill-swap"), exports);
__exportStar(require("./get-order"), exports);
__exportStar(require("./list-orders"), exports);
__exportStar(require("./process-swap-payment"), exports);
__exportStar(require("./refund-payment"), exports);
__exportStar(require("./request-return"), exports);
__exportStar(require("./update-claim"), exports);
__exportStar(require("./update-order"), exports);
//# sourceMappingURL=index.js.map