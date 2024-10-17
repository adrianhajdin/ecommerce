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
exports.adminPriceListsRoutesMiddlewares = void 0;
var authenticate_middleware_1 = require("../../../utils/authenticate-middleware");
var validate_body_1 = require("../../utils/validate-body");
var validate_query_1 = require("../../utils/validate-query");
var validators_1 = require("../../utils/validators");
var QueryConfig = __importStar(require("./query-config"));
var validators_2 = require("./validators");
exports.adminPriceListsRoutesMiddlewares = [
    {
        method: ["ALL"],
        matcher: "/admin/price-lists*",
        middlewares: [(0, authenticate_middleware_1.authenticate)("admin", ["bearer", "session", "api-key"])],
    },
    {
        method: ["GET"],
        matcher: "/admin/price-lists",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetPriceListsParams, QueryConfig.listPriceListQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/price-lists/:id",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetPriceListParams, QueryConfig.retrivePriceListQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/price-lists",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_2.AdminCreatePriceList),
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetPriceListPricesParams, QueryConfig.retrivePriceListQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/price-lists/:id",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_2.AdminUpdatePriceList),
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetPriceListPricesParams, QueryConfig.retrivePriceListQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/price-lists/:id/products",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)((0, validators_1.createLinkBody)()),
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetPriceListParams, QueryConfig.listPriceListQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/price-lists/:id/prices/batch",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)((0, validators_1.createBatchBody)(validators_2.AdminCreatePriceListPrice, validators_2.AdminUpdatePriceListPrice)),
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetPriceListPricesParams, QueryConfig.listPriceListPriceQueryConfig),
        ],
    },
];
//# sourceMappingURL=middlewares.js.map