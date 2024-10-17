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
exports.allowedStoreOrdersFields = exports.defaultStoreOrdersFields = exports.allowedStoreOrdersRelations = exports.defaultStoreOrdersRelations = void 0;
var express_1 = require("express");
require("reflect-metadata");
var common_1 = require("../../../../types/common");
var middlewares_1 = __importStar(require("../../../middlewares"));
var require_customer_authentication_1 = __importDefault(require("../../../middlewares/require-customer-authentication"));
var confirm_order_request_1 = require("./confirm-order-request");
var get_order_1 = require("./get-order");
var lookup_order_1 = require("./lookup-order");
var request_order_1 = require("./request-order");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/orders", route);
    /**
     * Lookup
     */
    route.get("/", (0, middlewares_1.transformStoreQuery)(lookup_order_1.StoreGetOrdersParams, {
        defaultFields: exports.defaultStoreOrdersFields,
        defaultRelations: exports.defaultStoreOrdersRelations,
        allowedFields: exports.allowedStoreOrdersFields,
        allowedRelations: exports.allowedStoreOrdersRelations,
        isList: true,
    }), middlewares_1.default.wrap(require("./lookup-order").default));
    /**
     * Retrieve Order
     */
    route.get("/:id", (0, middlewares_1.transformStoreQuery)(get_order_1.StoreGetOrderParams, {
        defaultFields: exports.defaultStoreOrdersFields,
        defaultRelations: exports.defaultStoreOrdersRelations,
        allowedFields: exports.allowedStoreOrdersFields,
        allowedRelations: exports.allowedStoreOrdersRelations,
    }), middlewares_1.default.wrap(require("./get-order").default));
    /**
     * Retrieve by Cart Id
     */
    route.get("/cart/:cart_id", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultFields: exports.defaultStoreOrdersFields,
        defaultRelations: exports.defaultStoreOrdersRelations,
        allowedFields: exports.allowedStoreOrdersFields,
        allowedRelations: exports.allowedStoreOrdersRelations,
    }), middlewares_1.default.wrap(require("./get-order-by-cart").default));
    route.post("/customer/confirm", (0, middlewares_1.transformBody)(confirm_order_request_1.StorePostCustomersCustomerAcceptClaimReq), middlewares_1.default.wrap(require("./confirm-order-request").default));
    route.post("/batch/customer/token", (0, require_customer_authentication_1.default)(), (0, middlewares_1.transformBody)(request_order_1.StorePostCustomersCustomerOrderClaimReq), middlewares_1.default.wrap(require("./request-order").default));
    return app;
});
exports.defaultStoreOrdersRelations = [
    "shipping_address",
    "fulfillments",
    "fulfillments.tracking_links",
    "items",
    "items.variant",
    "shipping_methods",
    "shipping_methods.shipping_option",
    "discounts",
    "discounts.rule",
    "customer",
    "payments",
    "region",
];
exports.allowedStoreOrdersRelations = __spreadArray(__spreadArray([], __read(exports.defaultStoreOrdersRelations), false), [
    "billing_address",
], false);
exports.defaultStoreOrdersFields = [
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
    "created_at",
];
exports.allowedStoreOrdersFields = __spreadArray(__spreadArray([], __read(exports.defaultStoreOrdersFields), false), [
    "object",
    "shipping_total",
    "discount_total",
    "tax_total",
    "refunded_total",
    "total",
    "subtotal",
    "paid_total",
    "refundable_amount",
    "gift_card_total",
    "gift_card_tax_total",
    "items.refundable",
], false);
__exportStar(require("./confirm-order-request"), exports);
__exportStar(require("./lookup-order"), exports);
__exportStar(require("./request-order"), exports);
//# sourceMappingURL=index.js.map