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
exports.defaultAdminProductRemoteQueryObject = exports.defaultAdminGetProductsVariantsRelations = exports.defaultAdminGetProductsVariantsFields = exports.defaultAdminProductFields = exports.defaultAdminProductRelations = void 0;
require("reflect-metadata");
var middlewares_1 = __importStar(require("../../../middlewares"));
var express_1 = require("express");
var sales_channel_existence_1 = require("../../../middlewares/validators/sales-channel-existence");
var get_product_1 = require("./get-product");
var list_products_1 = require("./list-products");
var list_variants_1 = require("./list-variants");
var route = (0, express_1.Router)();
exports.default = (function (app, featureFlagRouter) {
    app.use("/products", route);
    if (featureFlagRouter.isFeatureEnabled("sales_channels")) {
        exports.defaultAdminProductRelations.push("sales_channels");
    }
    if (featureFlagRouter.isFeatureEnabled("product_categories")) {
        exports.defaultAdminProductRelations.push("categories");
    }
    route.post("/", (0, sales_channel_existence_1.validateSalesChannelsExist)(function (req) { var _a; return (_a = req.body) === null || _a === void 0 ? void 0 : _a.sales_channels; }), middlewares_1.default.wrap(require("./create-product").default));
    route.post("/:id", (0, sales_channel_existence_1.validateSalesChannelsExist)(function (req) { var _a; return (_a = req.body) === null || _a === void 0 ? void 0 : _a.sales_channels; }), middlewares_1.default.wrap(require("./update-product").default));
    route.get("/types", middlewares_1.default.wrap(require("./list-types").default));
    route.get("/tag-usage", middlewares_1.default.wrap(require("./list-tag-usage-count").default));
    route.get("/:id/variants", (0, middlewares_1.transformQuery)(list_variants_1.AdminGetProductsVariantsParams, {
        defaultRelations: exports.defaultAdminGetProductsVariantsRelations,
        defaultFields: exports.defaultAdminGetProductsVariantsFields,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-variants").default));
    route.post("/:id/variants", middlewares_1.default.wrap(require("./create-variant").default));
    route.post("/:id/variants/:variant_id", middlewares_1.default.wrap(require("./update-variant").default));
    route.post("/:id/options/:option_id", middlewares_1.default.wrap(require("./update-option").default));
    route.post("/:id/options", middlewares_1.default.wrap(require("./add-option").default));
    route.delete("/:id/variants/:variant_id", middlewares_1.default.wrap(require("./delete-variant").default));
    route.delete("/:id", middlewares_1.default.wrap(require("./delete-product").default));
    route.delete("/:id/options/:option_id", middlewares_1.default.wrap(require("./delete-option").default));
    route.post("/:id/metadata", middlewares_1.default.wrap(require("./set-metadata").default));
    route.get("/:id", (0, middlewares_1.transformQuery)(get_product_1.AdminGetProductParams, {
        defaultRelations: exports.defaultAdminProductRelations,
        defaultFields: exports.defaultAdminProductFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./get-product").default));
    route.get("/", (0, middlewares_1.transformQuery)(list_products_1.AdminGetProductsParams, {
        defaultRelations: exports.defaultAdminProductRelations,
        defaultFields: exports.defaultAdminProductFields,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-products").default));
    return app;
});
exports.defaultAdminProductRelations = [
    "variants",
    "variants.prices",
    "variants.options",
    "profiles",
    "images",
    "options",
    "options.values",
    "tags",
    "type",
    "collection",
];
exports.defaultAdminProductFields = [
    "id",
    "title",
    "subtitle",
    "status",
    "external_id",
    "description",
    "handle",
    "is_giftcard",
    "discountable",
    "thumbnail",
    "collection_id",
    "type_id",
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
    "deleted_at",
    "metadata",
];
exports.defaultAdminGetProductsVariantsFields = [
    "id",
    "product_id",
    "title",
    "sku",
    "inventory_quantity",
    "allow_backorder",
    "manage_inventory",
    "hs_code",
    "origin_country",
    "mid_code",
    "material",
    "weight",
    "length",
    "height",
    "width",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
    "variant_rank",
    "ean",
    "upc",
    "barcode",
];
exports.defaultAdminGetProductsVariantsRelations = ["options", "prices"];
/**
 * This is temporary.
 */
exports.defaultAdminProductRemoteQueryObject = {
    fields: exports.defaultAdminProductFields,
    images: {
        fields: ["id", "created_at", "updated_at", "deleted_at", "url", "metadata"],
    },
    tags: {
        fields: ["id", "created_at", "updated_at", "deleted_at", "value"],
    },
    type: {
        fields: ["id", "created_at", "updated_at", "deleted_at", "value"],
    },
    collection: {
        fields: ["title", "handle", "id", "created_at", "updated_at", "deleted_at"],
    },
    categories: {
        fields: [
            "id",
            "name",
            "description",
            "handle",
            "is_active",
            "is_internal",
            "parent_category_id",
        ],
    },
    options: {
        fields: [
            "id",
            "created_at",
            "updated_at",
            "deleted_at",
            "title",
            "product_id",
            "metadata",
        ],
        values: {
            fields: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "value",
                "option_id",
                "variant_id",
                "metadata",
            ],
        },
    },
    variants: {
        fields: [
            "id",
            "created_at",
            "updated_at",
            "deleted_at",
            "title",
            "product_id",
            "sku",
            "barcode",
            "ean",
            "upc",
            "variant_rank",
            "inventory_quantity",
            "allow_backorder",
            "manage_inventory",
            "hs_code",
            "origin_country",
            "mid_code",
            "material",
            "weight",
            "length",
            "height",
            "width",
            "metadata",
        ],
        options: {
            fields: [
                "id",
                "created_at",
                "updated_at",
                "deleted_at",
                "value",
                "option_id",
                "variant_id",
                "metadata",
            ],
        },
    },
    profile: {
        fields: ["id", "created_at", "updated_at", "deleted_at", "name", "type"],
    },
    sales_channels: {
        fields: [
            "id",
            "name",
            "description",
            "is_disabled",
            "created_at",
            "updated_at",
            "deleted_at",
            "metadata",
        ],
    },
};
__exportStar(require("./add-option"), exports);
__exportStar(require("./create-product"), exports);
__exportStar(require("./create-variant"), exports);
__exportStar(require("./delete-option"), exports);
__exportStar(require("./delete-product"), exports);
__exportStar(require("./delete-variant"), exports);
__exportStar(require("./get-product"), exports);
__exportStar(require("./list-products"), exports);
__exportStar(require("./list-tag-usage-count"), exports);
__exportStar(require("./list-types"), exports);
__exportStar(require("./list-variants"), exports);
__exportStar(require("./set-metadata"), exports);
__exportStar(require("./update-option"), exports);
__exportStar(require("./update-product"), exports);
__exportStar(require("./update-variant"), exports);
//# sourceMappingURL=index.js.map