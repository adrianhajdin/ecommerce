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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAdminTaxRatesFields = exports.defaultAdminTaxRatesRelations = void 0;
var express_1 = require("express");
var middlewares_1 = __importDefault(require("../../../middlewares"));
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/tax-rates", route);
    /**
     * List tax rates
     */
    route.get("/", middlewares_1.default.wrap(require("./list-tax-rates").default));
    /**
     * Get a tax rate
     */
    route.get("/:id", middlewares_1.default.wrap(require("./get-tax-rate").default));
    /**
     * Create a tax rate
     */
    route.post("/", middlewares_1.default.wrap(require("./create-tax-rate").default));
    /**
     * Update a tax rate
     */
    route.post("/:id", middlewares_1.default.wrap(require("./update-tax-rate").default));
    /**
     * Remove products from tax rate
     */
    route.delete("/:id/products/batch", middlewares_1.default.wrap(require("./remove-from-products").default));
    /**
     * Remove product types from tax rate
     */
    route.delete("/:id/product-types/batch", middlewares_1.default.wrap(require("./remove-from-product-types").default));
    /**
     * Remove shipping options from tax rate
     */
    route.delete("/:id/shipping-options/batch", middlewares_1.default.wrap(require("./remove-from-shipping-options").default));
    /**
     * Add products to tax rate
     */
    route.post("/:id/products/batch", middlewares_1.default.wrap(require("./add-to-products").default));
    /**
     * Add product types to tax rate
     */
    route.post("/:id/product-types/batch", middlewares_1.default.wrap(require("./add-to-product-types").default));
    /**
     * Add to shipping options
     */
    route.post("/:id/shipping-options/batch", middlewares_1.default.wrap(require("./add-to-shipping-options").default));
    /**
     * Delete a tax rate
     */
    route.delete("/:id", middlewares_1.default.wrap(require("./delete-tax-rate").default));
    return app;
});
exports.defaultAdminTaxRatesRelations = [];
exports.defaultAdminTaxRatesFields = [
    "id",
    "rate",
    "code",
    "name",
    "region_id",
    "created_at",
    "updated_at",
];
__exportStar(require("./list-tax-rates"), exports);
__exportStar(require("./get-tax-rate"), exports);
__exportStar(require("./remove-from-product-types"), exports);
__exportStar(require("./remove-from-products"), exports);
__exportStar(require("./remove-from-shipping-options"), exports);
__exportStar(require("./add-to-product-types"), exports);
__exportStar(require("./add-to-products"), exports);
__exportStar(require("./add-to-shipping-options"), exports);
__exportStar(require("./create-tax-rate"), exports);
__exportStar(require("./delete-tax-rate"), exports);
__exportStar(require("./update-tax-rate"), exports);
//# sourceMappingURL=index.js.map