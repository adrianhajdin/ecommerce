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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductQueryConfig = exports.retrieveProductQueryConfig = exports.defaultAdminProductFields = exports.listOptionConfig = exports.retrieveOptionConfig = exports.defaultAdminProductsOptionFields = exports.listVariantConfig = exports.retrieveVariantConfig = exports.defaultAdminProductsVariantFields = void 0;
exports.defaultAdminProductsVariantFields = [
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
    "*prices",
    "*options",
];
exports.retrieveVariantConfig = {
    defaults: exports.defaultAdminProductsVariantFields,
    isList: false,
};
exports.listVariantConfig = __assign(__assign({}, exports.retrieveVariantConfig), { defaultLimit: 50, isList: true });
exports.defaultAdminProductsOptionFields = ["id", "title"];
exports.retrieveOptionConfig = {
    defaults: exports.defaultAdminProductsOptionFields,
    isList: false,
};
exports.listOptionConfig = __assign(__assign({}, exports.retrieveVariantConfig), { defaultLimit: 50, isList: true });
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
    "*type",
    "*collection",
    "*options",
    "*options.values",
    "*tags",
    "*images",
    "*variants",
    "*variants.prices",
    "*variants.options",
    "*sales_channels",
];
exports.retrieveProductQueryConfig = {
    defaults: exports.defaultAdminProductFields,
    isList: false,
};
exports.listProductQueryConfig = __assign(__assign({}, exports.retrieveProductQueryConfig), { defaultLimit: 50, isList: true });
//# sourceMappingURL=query-config.js.map