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
exports.defaultAdminPriceListRelations = exports.defaultAdminPriceListFields = void 0;
require("reflect-metadata");
var middlewares_1 = __importStar(require("../../../middlewares"));
var products_1 = require("../products");
var express_1 = require("express");
var tax_inclusive_pricing_1 = __importDefault(require("../../../../loaders/feature-flags/tax-inclusive-pricing"));
var create_price_list_1 = require("./create-price-list");
var list_price_list_products_1 = require("./list-price-list-products");
var list_price_lists_1 = require("./list-price-lists");
var route = (0, express_1.Router)();
exports.default = (function (app, featureFlagRouter) {
    app.use("/price-lists", route);
    if (featureFlagRouter.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
        exports.defaultAdminPriceListFields.push("includes_tax");
    }
    route.get("/:id", middlewares_1.default.wrap(require("./get-price-list").default));
    route.get("/", (0, middlewares_1.transformQuery)(list_price_lists_1.AdminGetPriceListPaginationParams, { isList: true }), middlewares_1.default.wrap(require("./list-price-lists").default));
    route.get("/:id/products", (0, middlewares_1.transformQuery)(list_price_list_products_1.AdminGetPriceListsPriceListProductsParams, {
        defaultFields: products_1.defaultAdminProductFields,
        defaultRelations: products_1.defaultAdminProductRelations.filter(function (r) { return r !== "variants.prices"; }),
        defaultLimit: 50,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-price-list-products").default));
    route.delete("/:id/products/:product_id/prices", middlewares_1.default.wrap(require("./delete-product-prices").default));
    route.delete("/:id/products/prices/batch", middlewares_1.default.wrap(require("./delete-products-prices-batch").default));
    route.delete("/:id/variants/:variant_id/prices", middlewares_1.default.wrap(require("./delete-variant-prices").default));
    route.post("/", (0, middlewares_1.transformBody)(create_price_list_1.AdminPostPriceListsPriceListReq), middlewares_1.default.wrap(require("./create-price-list").default));
    route.post("/:id", middlewares_1.default.wrap(require("./update-price-list").default));
    route.delete("/:id", middlewares_1.default.wrap(require("./delete-price-list").default));
    route.delete("/:id/prices/batch", middlewares_1.default.wrap(require("./delete-prices-batch").default));
    route.post("/:id/prices/batch", middlewares_1.default.wrap(require("./add-prices-batch").default));
    return app;
});
exports.defaultAdminPriceListFields = [
    "id",
    "name",
    "description",
    "type",
    "status",
    "starts_at",
    "ends_at",
    "created_at",
    "updated_at",
    "deleted_at",
];
exports.defaultAdminPriceListRelations = [
    "prices",
    "prices.variants",
    "customer_groups",
];
__exportStar(require("./add-prices-batch"), exports);
__exportStar(require("./create-price-list"), exports);
__exportStar(require("./delete-price-list"), exports);
__exportStar(require("./delete-prices-batch"), exports);
__exportStar(require("./delete-products-prices-batch"), exports);
__exportStar(require("./get-price-list"), exports);
__exportStar(require("./list-price-list-products"), exports);
__exportStar(require("./list-price-lists"), exports);
__exportStar(require("./update-price-list"), exports);
//# sourceMappingURL=index.js.map