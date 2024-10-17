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
exports.defaultPaymentCollectionRelations = exports.defaultPaymentCollectionFields = void 0;
var express_1 = require("express");
require("reflect-metadata");
var middlewares_1 = __importStar(require("../../../middlewares"));
var authorize_batch_payment_sessions_1 = require("./authorize-batch-payment-sessions");
var get_payment_collection_1 = require("./get-payment-collection");
var manage_batch_payment_sessions_1 = require("./manage-batch-payment-sessions");
var manage_payment_session_1 = require("./manage-payment-session");
var route = (0, express_1.Router)();
exports.default = (function (app, container) {
    app.use("/payment-collections", route);
    route.get("/:id", (0, middlewares_1.transformStoreQuery)(get_payment_collection_1.StoreGetPaymentCollectionsParams, {
        defaultFields: exports.defaultPaymentCollectionFields,
        defaultRelations: exports.defaultPaymentCollectionRelations,
        isList: false,
    }), middlewares_1.default.wrap(require("./get-payment-collection").default));
    route.post("/:id/sessions/batch", (0, middlewares_1.transformBody)(manage_batch_payment_sessions_1.StorePostPaymentCollectionsBatchSessionsReq), middlewares_1.default.wrap(require("./manage-batch-payment-sessions").default));
    route.post("/:id/sessions/batch/authorize", (0, middlewares_1.transformBody)(authorize_batch_payment_sessions_1.StorePostPaymentCollectionsBatchSessionsAuthorizeReq), middlewares_1.default.wrap(require("./authorize-batch-payment-sessions").default));
    route.post("/:id/sessions", (0, middlewares_1.transformBody)(manage_payment_session_1.StorePaymentCollectionSessionsReq), middlewares_1.default.wrap(require("./manage-payment-session").default));
    route.post("/:id/sessions/:session_id", middlewares_1.default.wrap(require("./refresh-payment-session").default));
    route.post("/:id/sessions/:session_id/authorize", middlewares_1.default.wrap(require("./authorize-payment-session").default));
    return app;
});
exports.defaultPaymentCollectionFields = [
    "id",
    "type",
    "status",
    "description",
    "amount",
    "region",
    "currency_code",
    "currency",
    "metadata",
];
exports.defaultPaymentCollectionRelations = ["region", "payment_sessions"];
__exportStar(require("./authorize-batch-payment-sessions"), exports);
__exportStar(require("./get-payment-collection"), exports);
__exportStar(require("./manage-batch-payment-sessions"), exports);
__exportStar(require("./manage-payment-session"), exports);
__exportStar(require("./refresh-payment-session"), exports);
//# sourceMappingURL=index.js.map