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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
exports.defaultStoreCartRelations = exports.defaultStoreCartFields = void 0;
require("reflect-metadata");
var express_1 = require("express");
var common_1 = require("../../../../types/common");
var middlewares_1 = __importStar(require("../../../middlewares"));
var update_cart_1 = require("./update-cart");
var create_cart_1 = require("./create-cart");
var sales_channels_1 = __importDefault(require("../../../../loaders/feature-flags/sales-channels"));
var extend_request_params_1 = require("../../../middlewares/publishable-api-key/extend-request-params");
var validate_sales_channel_param_1 = require("../../../middlewares/publishable-api-key/validate-sales-channel-param");
var add_shipping_method_1 = require("./add-shipping-method");
var set_payment_session_1 = require("./set-payment-session");
var update_line_item_1 = require("./update-line-item");
var update_payment_session_1 = require("./update-payment-session");
var utils_1 = require("@medusajs/utils");
var route = (0, express_1.Router)();
exports.default = (function (app, container) {
    var e_1, _a;
    var middlewareService = container.resolve("middlewareService");
    var featureFlagRouter = container.resolve("featureFlagRouter");
    app.use("/carts", route);
    if (featureFlagRouter.isFeatureEnabled(sales_channels_1.default.key)) {
        if (featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key)) {
            exports.defaultStoreCartRelations.push("sales_channels");
        }
        else {
            exports.defaultStoreCartRelations.push("sales_channel");
        }
    }
    // Inject plugin routes
    var routers = middlewareService.getRouters("store/carts");
    try {
        for (var routers_1 = __values(routers), routers_1_1 = routers_1.next(); !routers_1_1.done; routers_1_1 = routers_1.next()) {
            var router = routers_1_1.value;
            route.use("/", router);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (routers_1_1 && !routers_1_1.done && (_a = routers_1.return)) _a.call(routers_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    route.get("/:id", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./get-cart").default));
    var createMiddlewares = [
        middlewareService.usePreCartCreation(),
        (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
            defaultRelations: exports.defaultStoreCartRelations,
            defaultFields: exports.defaultStoreCartFields,
            isList: false,
        }),
        (0, middlewares_1.transformBody)(create_cart_1.StorePostCartReq),
        extend_request_params_1.extendRequestParams,
        validate_sales_channel_param_1.validateSalesChannelParam,
    ];
    route.post.apply(route, __spreadArray(__spreadArray(["/"], __read(createMiddlewares), false), [middlewares_1.default.wrap(require("./create-cart").default)], false));
    route.post("/:id", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), (0, middlewares_1.transformBody)(update_cart_1.StorePostCartsCartReq), middlewares_1.default.wrap(require("./update-cart").default));
    route.post("/:id/complete", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./complete-cart").default));
    // DEPRECATION
    route.post("/:id/complete-cart", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./complete-cart").default));
    // Line items
    route.post("/:id/line-items", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./create-line-item").default));
    route.post("/:id/line-items/:line_id", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), (0, middlewares_1.transformBody)(update_line_item_1.StorePostCartsCartLineItemsItemReq), middlewares_1.default.wrap(require("./update-line-item").default));
    route.delete("/:id/line-items/:line_id", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./delete-line-item").default));
    route.delete("/:id/discounts/:code", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./delete-discount").default));
    // Payment sessions
    route.post("/:id/payment-sessions", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./create-payment-sessions").default));
    route.post("/:id/payment-sessions/:provider_id", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), (0, middlewares_1.transformBody)(update_payment_session_1.StorePostCartsCartPaymentSessionUpdateReq), middlewares_1.default.wrap(require("./update-payment-session").default));
    route.delete("/:id/payment-sessions/:provider_id", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./delete-payment-session").default));
    route.post("/:id/payment-sessions/:provider_id/refresh", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./refresh-payment-session").default));
    route.post("/:id/payment-session", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), (0, middlewares_1.transformBody)(set_payment_session_1.StorePostCartsCartPaymentSessionReq), middlewares_1.default.wrap(require("./set-payment-session").default));
    // Shipping Options
    route.post("/:id/shipping-methods", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), (0, middlewares_1.transformBody)(add_shipping_method_1.StorePostCartsCartShippingMethodReq), middlewares_1.default.wrap(require("./add-shipping-method").default));
    // Taxes
    route.post("/:id/taxes", (0, middlewares_1.transformStoreQuery)(common_1.FindParams, {
        defaultRelations: exports.defaultStoreCartRelations,
        defaultFields: exports.defaultStoreCartFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./calculate-taxes").default));
    return app;
});
exports.defaultStoreCartFields = [];
exports.defaultStoreCartRelations = [
    "gift_cards",
    "region",
    "items",
    "items.variant",
    "items.adjustments",
    "payment",
    "shipping_address",
    "billing_address",
    "region.countries",
    "region.payment_providers",
    "shipping_methods",
    "payment_sessions",
    "shipping_methods.shipping_option",
    "discounts",
    "discounts.rule",
];
__exportStar(require("./add-shipping-method"), exports);
__exportStar(require("./create-cart"), exports);
__exportStar(require("./create-line-item"), exports);
__exportStar(require("./create-payment-sessions"), exports);
__exportStar(require("./set-payment-session"), exports);
__exportStar(require("./update-cart"), exports);
__exportStar(require("./update-line-item"), exports);
__exportStar(require("./update-payment-session"), exports);
//# sourceMappingURL=index.js.map