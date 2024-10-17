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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStoreSwapFields = exports.defaultStoreSwapRelations = void 0;
var express_1 = require("express");
var middlewares_1 = __importDefault(require("../../../middlewares"));
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/swaps", route);
    route.get("/:cart_id", middlewares_1.default.wrap(require("./get-swap-by-cart").default));
    route.post("/", middlewares_1.default.wrap(require("./create-swap").default));
    return app;
});
exports.defaultStoreSwapRelations = [
    "order",
    "additional_items",
    "additional_items.variant",
    "return_order",
    "return_order.shipping_method",
    "return_order.shipping_method.shipping_option",
    "fulfillments",
    "payment",
    "shipping_address",
    "shipping_methods",
    "shipping_methods.shipping_option",
    "cart",
];
exports.defaultStoreSwapFields = [
    "id",
    "fulfillment_status",
    "payment_status",
    "order_id",
    "difference_due",
    "shipping_address_id",
    "cart_id",
    "confirmed_at",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
    "idempotency_key",
];
__exportStar(require("./create-swap"), exports);
__exportStar(require("./get-swap-by-cart"), exports);
//# sourceMappingURL=index.js.map