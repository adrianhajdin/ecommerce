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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStoreProductRemoteQueryObject = exports.allowedStoreProductsRelations = exports.allowedStoreProductsFields = exports.defaultStoreProductsFields = exports.defaultStoreProductsRelations = void 0;
require("reflect-metadata");
var middlewares_1 = __importStar(require("../../../middlewares"));
var express_1 = require("express");
var extend_request_params_1 = require("../../../middlewares/publishable-api-key/extend-request-params");
var validate_product_sales_channel_association_1 = require("../../../middlewares/publishable-api-key/validate-product-sales-channel-association");
var validate_sales_channel_param_1 = require("../../../middlewares/publishable-api-key/validate-sales-channel-param");
var with_default_sales_channel_1 = require("../../../middlewares/with-default-sales-channel");
var get_product_1 = require("./get-product");
var list_products_1 = require("./list-products");
var route = (0, express_1.Router)();
exports.default = (function (app, featureFlagRouter) {
    if (featureFlagRouter.isFeatureEnabled("product_categories")) {
        exports.allowedStoreProductsRelations.push("categories");
    }
    app.use("/products", extend_request_params_1.extendRequestParams, validate_sales_channel_param_1.validateSalesChannelParam, route);
    route.use("/:id", validate_product_sales_channel_association_1.validateProductSalesChannelAssociation);
    route.get("/", (0, with_default_sales_channel_1.withDefaultSalesChannel)({ attachChannelAsArray: true }), (0, middlewares_1.transformStoreQuery)(list_products_1.StoreGetProductsParams, {
        defaultRelations: exports.defaultStoreProductsRelations,
        defaultFields: exports.defaultStoreProductsFields,
        allowedFields: exports.allowedStoreProductsFields,
        allowedRelations: exports.allowedStoreProductsRelations,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-products").default));
    route.get("/:id", (0, with_default_sales_channel_1.withDefaultSalesChannel)(), (0, middlewares_1.transformStoreQuery)(get_product_1.StoreGetProductsProductParams, {
        defaultRelations: exports.defaultStoreProductsRelations,
        defaultFields: exports.defaultStoreProductsFields,
        allowedFields: exports.allowedStoreProductsFields,
        allowedRelations: exports.allowedStoreProductsRelations,
    }), middlewares_1.default.wrap(require("./get-product").default));
    route.post("/search", middlewares_1.default.wrap(require("./search").default));
    return app;
});
exports.defaultStoreProductsRelations = [
    "variants",
    "variants.prices",
    "variants.options",
    "options",
    "options.values",
    "images",
    "tags",
    "collection",
    "type",
    "profiles",
];
exports.defaultStoreProductsFields = [
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
exports.allowedStoreProductsFields = __spreadArray(__spreadArray([], __read(exports.defaultStoreProductsFields), false), [
    // profile_id is not a column in the products table, so it should be ignored as it
    // will be rejected by typeorm as invalid, though, it is an entity property
    // that we want to return, so it part of the allowedStoreProductsFields
    "profile_id",
    "variants.title",
    "variants.prices.amount",
], false);
exports.allowedStoreProductsRelations = __spreadArray(__spreadArray([], __read(exports.defaultStoreProductsRelations), false), [
    "variants.inventory_items",
    "sales_channels",
], false);
/**
 * This is temporary.
 */
exports.defaultStoreProductRemoteQueryObject = {
    fields: exports.defaultStoreProductsFields,
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
__exportStar(require("./list-products"), exports);
__exportStar(require("./search"), exports);
//# sourceMappingURL=index.js.map