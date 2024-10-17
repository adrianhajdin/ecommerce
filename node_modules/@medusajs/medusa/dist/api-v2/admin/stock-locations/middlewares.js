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
exports.adminStockLocationRoutesMiddlewares = void 0;
var authenticate_middleware_1 = require("../../../utils/authenticate-middleware");
var maybe_apply_link_filter_1 = require("../../utils/maybe-apply-link-filter");
var validate_body_1 = require("../../utils/validate-body");
var validate_query_1 = require("../../utils/validate-query");
var validators_1 = require("../../utils/validators");
var QueryConfig = __importStar(require("./query-config"));
var validators_2 = require("./validators");
exports.adminStockLocationRoutesMiddlewares = [
    {
        method: "ALL",
        matcher: "/admin/stock-locations*",
        middlewares: [(0, authenticate_middleware_1.authenticate)("admin", ["session", "bearer", "api-key"])],
    },
    {
        method: ["POST"],
        matcher: "/admin/stock-locations",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_2.AdminCreateStockLocation),
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetStockLocationParams, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/stock-locations",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetStockLocationsParams, QueryConfig.listTransformQueryConfig),
            (0, maybe_apply_link_filter_1.maybeApplyLinkFilter)({
                entryPoint: "sales_channel_location",
                resourceId: "stock_location_id",
                filterableField: "sales_channel_id",
            }),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/stock-locations/:id",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_2.AdminUpdateStockLocation),
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetStockLocationParams, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/stock-locations/:id",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetStockLocationParams, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/stock-locations/:id/fulfillment-sets",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_2.AdminCreateStockLocationFulfillmentSet),
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetStockLocationParams, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/stock-locations/:id/sales-channels",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)((0, validators_1.createLinkBody)()),
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetStockLocationParams, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
];
//# sourceMappingURL=middlewares.js.map