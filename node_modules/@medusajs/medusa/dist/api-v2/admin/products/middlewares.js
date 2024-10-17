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
exports.adminProductRoutesMiddlewares = void 0;
var authenticate_middleware_1 = require("../../../utils/authenticate-middleware");
var maybe_apply_link_filter_1 = require("../../utils/maybe-apply-link-filter");
var unless_path_1 = require("../../utils/unless-path");
var validate_body_1 = require("../../utils/validate-body");
var validate_query_1 = require("../../utils/validate-query");
var validators_1 = require("../../utils/validators");
var QueryConfig = __importStar(require("./query-config"));
var utils_1 = require("./utils");
var validators_2 = require("./validators");
exports.adminProductRoutesMiddlewares = [
    {
        method: ["ALL"],
        matcher: "/admin/products*",
        middlewares: [(0, authenticate_middleware_1.authenticate)("admin", ["bearer", "session", "api-key"])],
    },
    {
        method: ["GET"],
        matcher: "/admin/products",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductsParams, QueryConfig.listProductQueryConfig),
            (0, maybe_apply_link_filter_1.maybeApplyLinkFilter)({
                entryPoint: "product_sales_channel",
                resourceId: "product_id",
                filterableField: "sales_channel_id",
            }),
            (0, utils_1.maybeApplyPriceListsFilter)(),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/products",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_2.AdminCreateProduct),
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductParams, QueryConfig.retrieveProductQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/products/batch",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)((0, validators_1.createBatchBody)(validators_2.AdminCreateProduct, validators_2.AdminBatchUpdateProduct)),
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductParams, QueryConfig.retrieveProductQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/products/:id",
        middlewares: [
            (0, unless_path_1.unlessPath)(/.*\/products\/batch/, (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductParams, QueryConfig.retrieveProductQueryConfig)),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/products/:id",
        middlewares: [
            (0, unless_path_1.unlessPath)(/.*\/products\/batch/, (0, validate_body_1.validateAndTransformBody)(validators_2.AdminUpdateProduct)),
            (0, unless_path_1.unlessPath)(/.*\/products\/batch/, (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductParams, QueryConfig.retrieveProductQueryConfig)),
        ],
    },
    {
        method: ["DELETE"],
        matcher: "/admin/products/:id",
        middlewares: [
            (0, unless_path_1.unlessPath)(/.*\/products\/batch/, (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductParams, QueryConfig.retrieveProductQueryConfig)),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/products/:id/variants",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductVariantsParams, QueryConfig.listVariantConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/products/:id/variants",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_2.AdminCreateProductVariant),
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductParams, QueryConfig.retrieveProductQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/products/:id/variants/batch",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)((0, validators_1.createBatchBody)(validators_2.AdminCreateProductVariant, validators_2.AdminBatchUpdateProductVariant)),
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductVariantParams, QueryConfig.retrieveVariantConfig),
        ],
    },
    // Note: New endpoint in v2
    {
        method: ["GET"],
        matcher: "/admin/products/:id/variants/:variant_id",
        middlewares: [
            (0, unless_path_1.unlessPath)(/.*\/variants\/batch/, (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductVariantParams, QueryConfig.retrieveVariantConfig)),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/products/:id/variants/:variant_id",
        middlewares: [
            (0, unless_path_1.unlessPath)(/.*\/variants\/batch/, (0, validate_body_1.validateAndTransformBody)(validators_2.AdminUpdateProductVariant)),
            (0, unless_path_1.unlessPath)(/.*\/variants\/batch/, (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductParams, QueryConfig.retrieveProductQueryConfig)),
        ],
    },
    {
        method: ["DELETE"],
        matcher: "/admin/products/:id/variants/:variant_id",
        middlewares: [
            (0, unless_path_1.unlessPath)(/.*\/variants\/batch/, (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductParams, QueryConfig.retrieveProductQueryConfig)),
        ],
    },
    // Note: New endpoint in v2
    {
        method: ["GET"],
        matcher: "/admin/products/:id/options",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductOptionsParams, QueryConfig.listOptionConfig),
        ],
    },
    // Note: New endpoint in v2
    {
        method: ["GET"],
        matcher: "/admin/products/:id/options/:option_id",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductOptionParams, QueryConfig.retrieveOptionConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/products/:id/options",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_2.AdminCreateProductOption),
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductParams, QueryConfig.retrieveProductQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/products/:id/options/:option_id",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_2.AdminUpdateProductOption),
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductParams, QueryConfig.retrieveProductQueryConfig),
        ],
    },
    {
        method: ["DELETE"],
        matcher: "/admin/products/:id/options/:option_id",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_2.AdminGetProductParams, QueryConfig.retrieveProductQueryConfig),
        ],
    },
];
//# sourceMappingURL=middlewares.js.map