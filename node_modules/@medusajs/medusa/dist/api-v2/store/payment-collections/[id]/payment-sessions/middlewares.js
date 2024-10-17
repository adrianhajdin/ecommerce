"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeCartRoutesMiddlewares = void 0;
var middlewares_1 = require("../../../../../api/middlewares");
var validators_1 = require("./validators");
exports.storeCartRoutesMiddlewares = [
    {
        method: ["POST"],
        matcher: "/store/payment-collections/:id/payment-sessions",
        middlewares: [(0, middlewares_1.transformBody)(validators_1.StorePostPaymentCollectionsPaymentSessionReq)],
    },
];
//# sourceMappingURL=middlewares.js.map