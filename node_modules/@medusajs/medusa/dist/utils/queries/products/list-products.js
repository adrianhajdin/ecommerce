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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAdminProductRemoteQueryObject = exports.listProducts = void 0;
var utils_1 = require("@medusajs/utils");
var get_variants_from_price_list_1 = require("./get-variants-from-price-list");
function listProducts(container, filterableFields, listConfig) {
    return __awaiter(this, void 0, void 0, function () {
        var remoteQuery, featureFlagRouter, productIdsFilter, variantIdsFilter, promises, salesChannelIdFilter, priceListId, variants, priceListService, discountConditionId, variables, query, _a, products, count;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    remoteQuery = container.resolve("remoteQuery");
                    featureFlagRouter = container.resolve("featureFlagRouter");
                    productIdsFilter = new Set();
                    variantIdsFilter = new Set();
                    promises = [];
                    salesChannelIdFilter = filterableFields.sales_channel_id;
                    delete filterableFields.sales_channel_id;
                    priceListId = filterableFields.price_list_id;
                    delete filterableFields.price_list_id;
                    if (!priceListId) return [3 /*break*/, 3];
                    if (!featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key)) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, get_variants_from_price_list_1.getVariantsFromPriceList)(container, priceListId)];
                case 1:
                    variants = _b.sent();
                    variants.forEach(function (pv) { return variantIdsFilter.add(pv.id); });
                    return [3 /*break*/, 3];
                case 2:
                    priceListService = container.resolve("priceListService");
                    promises.push(priceListService
                        .listPriceListsVariantIdsMap(priceListId)
                        .then(function (priceListVariantIdsMap) {
                        priceListVariantIdsMap[priceListId].map(function (variantId) {
                            return variantIdsFilter.add(variantId);
                        });
                    }));
                    _b.label = 3;
                case 3:
                    discountConditionId = filterableFields.discount_condition_id;
                    delete filterableFields.discount_condition_id;
                    if (discountConditionId) {
                        // TODO implement later
                    }
                    return [4 /*yield*/, (0, utils_1.promiseAll)(promises)];
                case 4:
                    _b.sent();
                    if (productIdsFilter.size > 0) {
                        filterableFields.id = Array.from(productIdsFilter);
                    }
                    if (variantIdsFilter.size > 0) {
                        filterableFields.variants = { id: Array.from(variantIdsFilter) };
                    }
                    variables = {
                        filters: filterableFields,
                        order: listConfig.order,
                        skip: listConfig.skip,
                        take: listConfig.take,
                    };
                    query = {
                        product: __assign({ __args: variables }, exports.defaultAdminProductRemoteQueryObject),
                    };
                    if (salesChannelIdFilter) {
                        query.product["sales_channels"]["__args"] = { id: salesChannelIdFilter };
                    }
                    return [4 /*yield*/, remoteQuery(query)];
                case 5:
                    _a = _b.sent(), products = _a.rows, count = _a.metadata.count;
                    products.forEach(function (product) {
                        var _a;
                        product.profile_id = (_a = product.profile) === null || _a === void 0 ? void 0 : _a.id;
                    });
                    return [2 /*return*/, [products, count]];
            }
        });
    });
}
exports.listProducts = listProducts;
exports.defaultAdminProductRemoteQueryObject = {
    fields: [
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
    ],
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
//# sourceMappingURL=list-products.js.map