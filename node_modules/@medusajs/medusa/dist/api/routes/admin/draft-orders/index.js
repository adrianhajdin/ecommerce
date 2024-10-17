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
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAdminDraftOrdersFields = exports.defaultAdminDraftOrdersCartFields = exports.defaultAdminDraftOrdersCartRelations = exports.defaultAdminDraftOrdersRelations = void 0;
var express_1 = require("express");
var middlewares_1 = __importStar(require("../../../middlewares"));
var list_draft_orders_1 = require("./list-draft-orders");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/draft-orders", route);
    route.get("/", (0, middlewares_1.transformQuery)(list_draft_orders_1.AdminGetDraftOrdersParams, {
        defaultFields: exports.defaultAdminDraftOrdersFields,
        defaultRelations: exports.defaultAdminDraftOrdersRelations,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-draft-orders").default));
    route.get("/:id", middlewares_1.default.wrap(require("./get-draft-order").default));
    route.post("/", middlewares_1.default.wrap(require("./create-draft-order").default));
    route.post("/:id", middlewares_1.default.wrap(require("./update-draft-order").default));
    route.delete("/:id", middlewares_1.default.wrap(require("./delete-draft-order").default));
    route.delete("/:id/line-items/:line_id", middlewares_1.default.wrap(require("./delete-line-item").default));
    route.post("/:id/line-items", middlewares_1.default.wrap(require("./create-line-item").default));
    route.post("/:id/line-items/:line_id", middlewares_1.default.wrap(require("./update-line-item").default));
    route.post("/", middlewares_1.default.wrap(require("./create-draft-order").default));
    route.post("/:id/pay", middlewares_1.default.wrap(require("./register-payment").default));
    return app;
});
exports.defaultAdminDraftOrdersRelations = [
    "order",
    "cart",
    "cart.items",
    "cart.items.adjustments",
];
exports.defaultAdminDraftOrdersCartRelations = [
    "region",
    "items",
    "items.adjustments",
    "payment",
    "shipping_address",
    "shipping_address.country",
    "billing_address",
    "billing_address.country",
    "region.payment_providers",
    "shipping_methods",
    "payment_sessions",
    "shipping_methods.shipping_option",
    "discounts",
    "customer",
    "discounts.rule",
];
exports.defaultAdminDraftOrdersCartFields = [
    "subtotal",
    "tax_total",
    "shipping_total",
    "discount_total",
    "gift_card_total",
    "total",
];
exports.defaultAdminDraftOrdersFields = [
    "id",
    "status",
    "display_id",
    "cart_id",
    "order_id",
    "canceled_at",
    "created_at",
    "updated_at",
    "metadata",
    "no_notification_order",
];
__exportStar(require("./create-draft-order"), exports);
__exportStar(require("./create-line-item"), exports);
__exportStar(require("./delete-draft-order"), exports);
__exportStar(require("./delete-line-item"), exports);
__exportStar(require("./get-draft-order"), exports);
__exportStar(require("./list-draft-orders"), exports);
__exportStar(require("./register-payment"), exports);
__exportStar(require("./update-draft-order"), exports);
__exportStar(require("./update-line-item"), exports);
//# sourceMappingURL=index.js.map