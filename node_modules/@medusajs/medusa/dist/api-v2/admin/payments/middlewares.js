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
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminPaymentRoutesMiddlewares = void 0;
var authenticate_middleware_1 = require("../../../utils/authenticate-middleware");
var unless_path_1 = require("../../utils/unless-path");
var validate_body_1 = require("../../utils/validate-body");
var validate_query_1 = require("../../utils/validate-query");
var queryConfig = __importStar(require("./query-config"));
var validators_1 = require("./validators");
exports.adminPaymentRoutesMiddlewares = [
    {
        method: "ALL",
        matcher: "/admin/payments",
        middlewares: [(0, authenticate_middleware_1.authenticate)("admin", ["session", "bearer", "api-key"])],
    },
    {
        method: ["GET"],
        matcher: "/admin/payments",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetPaymentsParams, queryConfig.listTransformQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/payments/payment-providers",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetPaymentProvidersParams, queryConfig.listTransformPaymentProvidersQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/payments/:id",
        middlewares: [
            (0, unless_path_1.unlessPath)(/.*\/payments\/payment-providers/, (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetPaymentParams, queryConfig.retrieveTransformQueryConfig)),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/payments/:id/capture",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.AdminCreatePaymentCapture),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetPaymentParams, queryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/payments/:id/refund",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.AdminCreatePaymentRefund),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetPaymentParams, queryConfig.retrieveTransformQueryConfig),
        ],
    },
];
//# sourceMappingURL=middlewares.js.map