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
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowedStoreCustomersFields = exports.allowedStoreCustomersRelations = exports.defaultStoreCustomersFields = exports.defaultStoreCustomersRelations = void 0;
var express_1 = require("express");
var middlewares_1 = __importStar(require("../../../middlewares"));
var orders_1 = require("../orders");
var list_orders_1 = require("./list-orders");
var route = (0, express_1.Router)();
exports.default = (function (app, container) {
    var e_1, _a;
    var middlewareService = container.resolve("middlewareService");
    app.use("/customers", route);
    // Inject plugin routes
    var routers = middlewareService.getRouters("store/customers");
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
    route.post("/", middlewares_1.default.wrap(require("./create-customer").default));
    route.post("/password-reset", middlewares_1.default.wrap(require("./reset-password").default));
    route.post("/password-token", middlewares_1.default.wrap(require("./reset-password-token").default));
    // Authenticated endpoints
    route.use(middlewares_1.default.requireCustomerAuthentication());
    route.get("/me", middlewares_1.default.wrap(require("./get-customer").default));
    route.post("/me", middlewares_1.default.wrap(require("./update-customer").default));
    route.get("/me/orders", (0, middlewares_1.transformStoreQuery)(list_orders_1.StoreGetCustomersCustomerOrdersParams, {
        defaultFields: orders_1.defaultStoreOrdersFields,
        defaultRelations: orders_1.defaultStoreOrdersRelations,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-orders").default));
    route.post("/me/addresses", middlewares_1.default.wrap(require("./create-address").default));
    route.post("/me/addresses/:address_id", middlewares_1.default.wrap(require("./update-address").default));
    route.delete("/me/addresses/:address_id", middlewares_1.default.wrap(require("./delete-address").default));
    route.get("/me/payment-methods", middlewares_1.default.wrap(require("./get-payment-methods").default));
    return app;
});
exports.defaultStoreCustomersRelations = [
    "shipping_addresses",
    "billing_address",
];
exports.defaultStoreCustomersFields = [
    "id",
    "email",
    "first_name",
    "last_name",
    "billing_address_id",
    "phone",
    "has_account",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
];
exports.allowedStoreCustomersRelations = [
    "shipping_addresses",
    "billing_address",
    "orders",
];
exports.allowedStoreCustomersFields = [
    "id",
    "email",
    "first_name",
    "last_name",
    "billing_address_id",
    "phone",
    "has_account",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
];
__exportStar(require("./create-address"), exports);
__exportStar(require("./create-customer"), exports);
__exportStar(require("./list-orders"), exports);
__exportStar(require("./reset-password"), exports);
__exportStar(require("./reset-password-token"), exports);
__exportStar(require("./update-address"), exports);
__exportStar(require("./update-customer"), exports);
//# sourceMappingURL=index.js.map