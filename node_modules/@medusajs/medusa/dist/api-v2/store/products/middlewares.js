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
exports.storeProductRoutesMiddlewares = void 0;
var utils_1 = require("@medusajs/utils");
var authenticate_middleware_1 = require("../../../utils/authenticate-middleware");
var maybe_apply_link_filter_1 = require("../../utils/maybe-apply-link-filter");
var middlewares_1 = require("../../utils/middlewares");
var validate_query_1 = require("../../utils/validate-query");
var QueryConfig = __importStar(require("./query-config"));
var validators_1 = require("./validators");
exports.storeProductRoutesMiddlewares = [
    {
        method: "ALL",
        matcher: "/store/products*",
        middlewares: [
            (0, authenticate_middleware_1.authenticate)("store", ["session", "bearer"], {
                allowUnauthenticated: true,
            }),
        ],
    },
    {
        method: ["GET"],
        matcher: "/store/products",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.StoreGetProductsParams, QueryConfig.listProductQueryConfig),
            (0, middlewares_1.filterByValidSalesChannels)(),
            (0, maybe_apply_link_filter_1.maybeApplyLinkFilter)({
                entryPoint: "product_sales_channel",
                resourceId: "product_id",
                filterableField: "sales_channel_id",
            }),
            (0, middlewares_1.applyDefaultFilters)({
                status: utils_1.ProductStatus.PUBLISHED,
                categories: function (filters, fields) {
                    var categoryIds = filters.category_id;
                    delete filters.category_id;
                    if (!(0, utils_1.isPresent)(categoryIds)) {
                        return;
                    }
                    return { id: categoryIds, is_internal: false, is_active: true };
                },
            }),
            (0, middlewares_1.setPricingContext)(),
        ],
    },
    {
        method: ["GET"],
        matcher: "/store/products/:id",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.StoreGetProductsParams, QueryConfig.retrieveProductQueryConfig),
            (0, middlewares_1.filterByValidSalesChannels)(),
            (0, maybe_apply_link_filter_1.maybeApplyLinkFilter)({
                entryPoint: "product_sales_channel",
                resourceId: "product_id",
                filterableField: "sales_channel_id",
            }),
            (0, middlewares_1.applyDefaultFilters)({
                status: utils_1.ProductStatus.PUBLISHED,
                categories: function (_filters, fields) {
                    if (!fields.some(function (field) { return field.startsWith("categories"); })) {
                        return;
                    }
                    return { is_internal: false, is_active: true };
                },
            }),
            (0, middlewares_1.setPricingContext)(),
        ],
    },
];
//# sourceMappingURL=middlewares.js.map