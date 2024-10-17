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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shippingOptionsDefaultRelations = exports.shippingOptionsDefaultFields = void 0;
var express_1 = require("express");
var tax_inclusive_pricing_1 = __importDefault(require("../../../../loaders/feature-flags/tax-inclusive-pricing"));
var middlewares_1 = __importStar(require("../../../middlewares"));
var list_shipping_options_1 = require("./list-shipping-options");
var route = (0, express_1.Router)();
exports.default = (function (app, featureFlagRouter) {
    app.use("/shipping-options", route);
    if (featureFlagRouter.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
        exports.shippingOptionsDefaultFields.push("includes_tax");
    }
    route.get("/", (0, middlewares_1.transformQuery)(list_shipping_options_1.AdminGetShippingOptionsParams, {
        defaultFields: exports.shippingOptionsDefaultFields,
        defaultRelations: exports.shippingOptionsDefaultRelations,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-shipping-options").default));
    route.post("/", middlewares_1.default.wrap(require("./create-shipping-option").default));
    route.get("/:option_id", middlewares_1.default.wrap(require("./get-shipping-option").default));
    route.post("/:option_id", middlewares_1.default.wrap(require("./update-shipping-option").default));
    route.delete("/:option_id", middlewares_1.default.wrap(require("./delete-shipping-option").default));
    return app;
});
exports.shippingOptionsDefaultFields = [
    "id",
    "name",
    "region_id",
    "profile_id",
    "provider_id",
    "price_type",
    "amount",
    "is_return",
    "admin_only",
    "data",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
];
exports.shippingOptionsDefaultRelations = [
    "region",
    "profile",
    "requirements",
];
__exportStar(require("./create-shipping-option"), exports);
__exportStar(require("./delete-shipping-option"), exports);
__exportStar(require("./get-shipping-option"), exports);
__exportStar(require("./list-shipping-options"), exports);
__exportStar(require("./update-shipping-option"), exports);
//# sourceMappingURL=index.js.map