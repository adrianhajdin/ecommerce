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
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAdminVariantFields = exports.defaultAdminVariantRelations = void 0;
var middlewares_1 = __importStar(require("../../../middlewares"));
var get_variant_1 = require("./get-variant");
var list_variants_1 = require("./list-variants");
var express_1 = require("express");
var check_registered_modules_1 = require("../../../middlewares/check-registered-modules");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/variants", route);
    route.get("/", (0, middlewares_1.transformQuery)(list_variants_1.AdminGetVariantsParams, {
        defaultRelations: exports.defaultAdminVariantRelations,
        defaultFields: exports.defaultAdminVariantFields,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-variants").default));
    route.get("/:id", (0, middlewares_1.transformQuery)(get_variant_1.AdminGetVariantParams, {
        defaultRelations: exports.defaultAdminVariantRelations,
        defaultFields: exports.defaultAdminVariantFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./get-variant").default));
    route.get("/:id/inventory", (0, check_registered_modules_1.checkRegisteredModules)({
        inventoryService: "Inventory is not enabled. Please add an Inventory module to enable this functionality.",
    }), middlewares_1.default.wrap(require("./get-inventory").default));
    return app;
});
exports.defaultAdminVariantRelations = ["product", "prices", "options"];
exports.defaultAdminVariantFields = [
    "id",
    "title",
    "product_id",
    "sku",
    "barcode",
    "ean",
    "upc",
    "inventory_quantity",
    "allow_backorder",
    "weight",
    "length",
    "height",
    "width",
    "hs_code",
    "origin_country",
    "mid_code",
    "material",
    "created_at",
    "updated_at",
    "metadata",
    "deleted_at",
    "manage_inventory",
];
__exportStar(require("./list-variants"), exports);
__exportStar(require("./get-variant"), exports);
__exportStar(require("./get-inventory"), exports);
//# sourceMappingURL=index.js.map