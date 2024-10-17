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
exports.listProductQueryConfig = exports.retrieveProductQueryConfig = exports.defaultStoreProductFields = void 0;
exports.defaultStoreProductFields = [
    "id",
    "title",
    "subtitle",
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
    "*type",
    "*collection",
    "*options",
    "*options.values",
    "*tags",
    "*images",
    "*variants",
    "*variants.options",
];
exports.retrieveProductQueryConfig = {
    defaults: exports.defaultStoreProductFields,
    isList: false,
};
exports.listProductQueryConfig = __assign(__assign({}, exports.retrieveProductQueryConfig), { defaultLimit: 50, isList: true });
//# sourceMappingURL=query-config.js.map