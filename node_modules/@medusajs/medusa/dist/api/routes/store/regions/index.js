"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStoreRegionFields = exports.defaultStoreRegionRelations = void 0;
var utils_1 = require("@medusajs/utils");
var express_1 = require("express");
var middlewares_1 = require("../../../middlewares");
var get_region_1 = __importDefault(require("./get-region"));
var list_regions_1 = __importStar(require("./list-regions"));
var route = (0, express_1.Router)();
exports.default = (function (app, featureFlagRouter) {
    if (featureFlagRouter.isFeatureEnabled(utils_1.TaxInclusivePricingFeatureFlag.key)) {
        exports.defaultStoreRegionFields.push("includes_tax");
    }
    var retrieveTransformQueryConfig = {
        defaultFields: exports.defaultStoreRegionFields,
        defaultRelations: exports.defaultStoreRegionRelations,
        allowedRelations: exports.defaultStoreRegionRelations,
        isList: false,
    };
    var listTransformQueryConfig = __assign(__assign({}, retrieveTransformQueryConfig), { isList: true });
    app.use("/regions", route);
    route.get("/", (0, middlewares_1.transformQuery)(list_regions_1.StoreGetRegionsParams, listTransformQueryConfig), (0, utils_1.wrapHandler)(list_regions_1.default));
    route.get("/:region_id", (0, middlewares_1.transformQuery)(list_regions_1.StoreGetRegionsParams, retrieveTransformQueryConfig), (0, utils_1.wrapHandler)(get_region_1.default));
    return app;
});
exports.defaultStoreRegionRelations = [
    "countries",
    "payment_providers",
    "fulfillment_providers",
    "currency",
];
exports.defaultStoreRegionFields = [
    "id",
    "name",
    "currency_code",
    "tax_rate",
    "tax_code",
    "gift_cards_taxable",
    "automatic_taxes",
    "tax_provider_id",
    "metadata",
    "created_at",
    "updated_at",
    "deleted_at",
];
__exportStar(require("./get-region"), exports);
__exportStar(require("./list-regions"), exports);
//# sourceMappingURL=index.js.map