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
exports.defaultPaymentFields = void 0;
var express_1 = require("express");
require("reflect-metadata");
var middlewares_1 = __importStar(require("../../../middlewares"));
var get_payment_1 = require("./get-payment");
var refund_payment_1 = require("./refund-payment");
var route = (0, express_1.Router)();
exports.default = (function (app, container) {
    app.use("/payments", route);
    route.get("/:id", (0, middlewares_1.transformQuery)(get_payment_1.GetPaymentsParams, {
        defaultFields: exports.defaultPaymentFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./get-payment").default));
    route.post("/:id/capture", middlewares_1.default.wrap(require("./capture-payment").default));
    route.post("/:id/refund", (0, middlewares_1.transformBody)(refund_payment_1.AdminPostPaymentRefundsReq), middlewares_1.default.wrap(require("./refund-payment").default));
    return app;
});
exports.defaultPaymentFields = [
    "id",
    "swap_id",
    "cart_id",
    "order_id",
    "amount",
    "currency_code",
    "amount_refunded",
    "provider_id",
    "data",
    "captured_at",
    "canceled_at",
    "metadata",
];
__exportStar(require("./get-payment"), exports);
__exportStar(require("./refund-payment"), exports);
//# sourceMappingURL=index.js.map