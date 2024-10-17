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
exports.adminInventoryRoutesMiddlewares = void 0;
var QueryConfig = __importStar(require("./query-config"));
var authenticate_middleware_1 = require("../../../utils/authenticate-middleware");
var validate_query_1 = require("../../utils/validate-query");
var validators_1 = require("./validators");
var validate_body_1 = require("../../utils/validate-body");
var validators_2 = require("../../utils/validators");
var unless_path_1 = require("../../utils/unless-path");
exports.adminInventoryRoutesMiddlewares = [
    {
        method: "ALL",
        matcher: "/admin/inventory-items*",
        middlewares: [(0, authenticate_middleware_1.authenticate)("admin", ["session", "bearer", "api-key"])],
    },
    {
        method: ["GET"],
        matcher: "/admin/inventory-items",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetInventoryItemsParams, QueryConfig.listTransformQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/inventory-items/:id",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetInventoryItemParams, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/inventory-items",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.AdminCreateInventoryItem),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetInventoryItemParams, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/inventory-items/:id",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.AdminUpdateInventoryItem),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetInventoryItemParams, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["GET"],
        matcher: "/admin/inventory-items/:id/location-levels",
        middlewares: [
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetInventoryLocationLevelsParams, QueryConfig.listLocationLevelsTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/inventory-items/:id/location-levels",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)(validators_1.AdminCreateInventoryLocationLevel),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetInventoryItemParams, QueryConfig.retrieveTransformQueryConfig),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/inventory-items/:id/location-levels/batch",
        middlewares: [
            (0, validate_body_1.validateAndTransformBody)((0, validators_2.createBatchBody)(validators_1.AdminCreateInventoryLocationLevel, validators_1.AdminUpdateInventoryLocationLevel)),
            (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetInventoryLocationLevelParams, QueryConfig.retrieveLocationLevelsTransformQueryConfig),
        ],
    },
    {
        method: ["DELETE"],
        matcher: "/admin/inventory-items/:id/location-levels/:location_id",
        middlewares: [
            (0, unless_path_1.unlessPath)(/.*\/location-levels\/batch/, (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetInventoryItemParams, QueryConfig.retrieveTransformQueryConfig)),
        ],
    },
    {
        method: ["POST"],
        matcher: "/admin/inventory-items/:id/location-levels/:location_id",
        middlewares: [
            (0, unless_path_1.unlessPath)(/.*\/location-levels\/batch/, (0, validate_body_1.validateAndTransformBody)(validators_1.AdminUpdateInventoryLocationLevel)),
            (0, unless_path_1.unlessPath)(/.*\/location-levels\/batch/, (0, validate_query_1.validateAndTransformQuery)(validators_1.AdminGetInventoryItemParams, QueryConfig.retrieveTransformQueryConfig)),
        ],
    },
];
//# sourceMappingURL=middlewares.js.map