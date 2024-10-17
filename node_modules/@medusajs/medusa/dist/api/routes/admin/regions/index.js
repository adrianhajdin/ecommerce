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
exports.AdminGetRegionsRegionFulfillmentOptionsRes = exports.FulfillmentOption = exports.defaultAdminRegionRelations = exports.defaultAdminRegionFields = void 0;
var utils_1 = require("@medusajs/utils");
var express_1 = require("express");
require("reflect-metadata");
var tax_inclusive_pricing_1 = __importDefault(require("../../../../loaders/feature-flags/tax-inclusive-pricing"));
var middlewares_1 = require("../../../middlewares");
var get_region_1 = __importStar(require("./get-region"));
var list_regions_1 = __importStar(require("./list-regions"));
var route = (0, express_1.Router)();
exports.default = (function (app, featureFlagRouter) {
    app.use("/regions", route);
    if (featureFlagRouter.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
        exports.defaultAdminRegionFields.push("includes_tax");
    }
    var retrieveTransformQueryConfig = {
        defaultFields: exports.defaultAdminRegionFields,
        defaultRelations: exports.defaultAdminRegionRelations,
        allowedRelations: exports.defaultAdminRegionRelations,
        isList: false,
    };
    var listTransformQueryConfig = __assign(__assign({}, retrieveTransformQueryConfig), { isList: true });
    route.get("/", (0, middlewares_1.transformQuery)(list_regions_1.AdminGetRegionsParams, listTransformQueryConfig), (0, utils_1.wrapHandler)(list_regions_1.default));
    route.get("/:region_id", (0, middlewares_1.transformQuery)(get_region_1.AdminGetRegionsRegionParams, retrieveTransformQueryConfig), (0, utils_1.wrapHandler)(get_region_1.default));
    route.get("/:region_id/fulfillment-options", (0, utils_1.wrapHandler)(require("./get-fulfillment-options").default));
    route.post("/", (0, utils_1.wrapHandler)(require("./create-region").default));
    route.post("/:region_id", (0, utils_1.wrapHandler)(require("./update-region").default));
    route.delete("/:region_id", (0, utils_1.wrapHandler)(require("./delete-region").default));
    route.post("/:region_id/countries", (0, utils_1.wrapHandler)(require("./add-country").default));
    route.delete("/:region_id/countries/:country_code", (0, utils_1.wrapHandler)(require("./remove-country").default));
    route.post("/:region_id/payment-providers", (0, utils_1.wrapHandler)(require("./add-payment-provider").default));
    route.delete("/:region_id/payment-providers/:provider_id", (0, utils_1.wrapHandler)(require("./remove-payment-provider").default));
    route.post("/:region_id/fulfillment-providers", (0, utils_1.wrapHandler)(require("./add-fulfillment-provider").default));
    route.delete("/:region_id/fulfillment-providers/:provider_id", (0, utils_1.wrapHandler)(require("./remove-fulfillment-provider").default));
    return app;
});
exports.defaultAdminRegionFields = [
    "id",
    "name",
    "automatic_taxes",
    "gift_cards_taxable",
    "tax_provider_id",
    "currency_code",
    "tax_rate",
    "tax_code",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
];
exports.defaultAdminRegionRelations = [
    "countries",
    "payment_providers",
    "fulfillment_providers",
    "currency",
];
var FulfillmentOption = /** @class */ (function () {
    function FulfillmentOption() {
    }
    return FulfillmentOption;
}());
exports.FulfillmentOption = FulfillmentOption;
/**
 * @schema AdminGetRegionsRegionFulfillmentOptionsRes
 * type: object
 * description: "The list of fulfillment options in a region."
 * required:
 *   - fulfillment_options
 * properties:
 *   fulfillment_options:
 *     type: array
 *     description: Fulfillment providers details.
 *     items:
 *       type: object
 *       required:
 *         - provider_id
 *         - options
 *       properties:
 *         provider_id:
 *           description: ID of the fulfillment provider
 *           type: string
 *         options:
 *           description: fulfillment provider options
 *           type: array
 *           items:
 *             type: object
 *             example:
 *               - id: "manual-fulfillment"
 *               - id: "manual-fulfillment-return"
 *                 is_return: true
 */
var AdminGetRegionsRegionFulfillmentOptionsRes = /** @class */ (function () {
    function AdminGetRegionsRegionFulfillmentOptionsRes() {
    }
    return AdminGetRegionsRegionFulfillmentOptionsRes;
}());
exports.AdminGetRegionsRegionFulfillmentOptionsRes = AdminGetRegionsRegionFulfillmentOptionsRes;
__exportStar(require("./add-country"), exports);
__exportStar(require("./add-fulfillment-provider"), exports);
__exportStar(require("./add-payment-provider"), exports);
__exportStar(require("./create-region"), exports);
__exportStar(require("./list-regions"), exports);
__exportStar(require("./update-region"), exports);
__exportStar(require("./get-region"), exports);
//# sourceMappingURL=index.js.map