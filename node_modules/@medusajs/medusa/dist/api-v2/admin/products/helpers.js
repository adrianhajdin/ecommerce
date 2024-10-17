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
exports.refetchBatchVariants = exports.refetchBatchProducts = exports.refetchProduct = exports.remapVariantResponse = exports.remapProductResponse = exports.remapKeysForVariant = exports.remapKeysForProduct = void 0;
var utils_1 = require("@medusajs/utils");
var isPricing = function (fieldName) {
    return fieldName.startsWith("variants.prices") ||
        fieldName.startsWith("*variants.prices") ||
        fieldName.startsWith("prices") ||
        fieldName.startsWith("*prices");
};
// The variant had prices before, but that is not part of the price_set money amounts. Do we remap the request and response or not?
var remapKeysForProduct = function (selectFields) {
    var productFields = selectFields.filter(function (fieldName) { return !isPricing(fieldName); });
    var pricingFields = selectFields
        .filter(function (fieldName) { return isPricing(fieldName); })
        .map(function (fieldName) {
        return fieldName.replace("variants.prices.", "variants.price_set.prices.");
    });
    return __spreadArray(__spreadArray([], __read(productFields), false), __read(pricingFields), false);
};
exports.remapKeysForProduct = remapKeysForProduct;
var remapKeysForVariant = function (selectFields) {
    var variantFields = selectFields.filter(function (fieldName) { return !isPricing(fieldName); });
    var pricingFields = selectFields
        .filter(function (fieldName) { return isPricing(fieldName); })
        .map(function (fieldName) {
        return fieldName.replace("prices.", "price_set.prices.");
    });
    return __spreadArray(__spreadArray([], __read(variantFields), false), __read(pricingFields), false);
};
exports.remapKeysForVariant = remapKeysForVariant;
var remapProductResponse = function (product) {
    var _a;
    return __assign(__assign({}, product), { variants: (_a = product.variants) === null || _a === void 0 ? void 0 : _a.map(exports.remapVariantResponse) });
};
exports.remapProductResponse = remapProductResponse;
var remapVariantResponse = function (variant) {
    var _a, _b;
    if (!variant) {
        return variant;
    }
    return __assign(__assign({}, variant), { prices: (_b = (_a = variant.price_set) === null || _a === void 0 ? void 0 : _a.prices) === null || _b === void 0 ? void 0 : _b.map(function (price) { return ({
            id: price.id,
            amount: price.amount,
            currency_code: price.currency_code,
            min_quantity: price.min_quantity,
            max_quantity: price.max_quantity,
            variant_id: variant.id,
            created_at: price.created_at,
            updated_at: price.updated_at,
        }); }), price_set: undefined });
};
exports.remapVariantResponse = remapVariantResponse;
var refetchProduct = function (productId, scope, fields) { return __awaiter(void 0, void 0, void 0, function () {
    var remoteQuery, queryObject, products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                remoteQuery = scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
                queryObject = (0, utils_1.remoteQueryObjectFromString)({
                    entryPoint: "product",
                    variables: {
                        filters: { id: productId },
                    },
                    fields: (0, exports.remapKeysForProduct)(fields !== null && fields !== void 0 ? fields : []),
                });
                return [4 /*yield*/, remoteQuery(queryObject)];
            case 1:
                products = _a.sent();
                return [2 /*return*/, products[0]];
        }
    });
}); };
exports.refetchProduct = refetchProduct;
var refetchBatchProducts = function (batchResult, scope, fields) { return __awaiter(void 0, void 0, void 0, function () {
    var remoteQuery, created, updated, createdQuery, updatedQuery, _a, createdRes, updatedRes;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                remoteQuery = scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
                created = Promise.resolve([]);
                updated = Promise.resolve([]);
                if (batchResult.created.length) {
                    createdQuery = (0, utils_1.remoteQueryObjectFromString)({
                        entryPoint: "product",
                        variables: {
                            filters: { id: batchResult.created.map(function (p) { return p.id; }) },
                        },
                        fields: (0, exports.remapKeysForProduct)(fields !== null && fields !== void 0 ? fields : []),
                    });
                    created = remoteQuery(createdQuery);
                }
                if (batchResult.updated.length) {
                    updatedQuery = (0, utils_1.remoteQueryObjectFromString)({
                        entryPoint: "product",
                        variables: {
                            filters: { id: batchResult.updated.map(function (p) { return p.id; }) },
                        },
                        fields: (0, exports.remapKeysForProduct)(fields !== null && fields !== void 0 ? fields : []),
                    });
                    updated = remoteQuery(updatedQuery);
                }
                return [4 /*yield*/, (0, utils_1.promiseAll)([created, updated])];
            case 1:
                _a = __read.apply(void 0, [_b.sent(), 2]), createdRes = _a[0], updatedRes = _a[1];
                return [2 /*return*/, {
                        created: createdRes,
                        updated: updatedRes,
                        deleted: batchResult.deleted,
                    }];
        }
    });
}); };
exports.refetchBatchProducts = refetchBatchProducts;
var refetchBatchVariants = function (batchResult, scope, fields) { return __awaiter(void 0, void 0, void 0, function () {
    var remoteQuery, created, updated, createdQuery, updatedQuery, _a, createdRes, updatedRes;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                remoteQuery = scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
                created = Promise.resolve([]);
                updated = Promise.resolve([]);
                if (batchResult.created.length) {
                    createdQuery = (0, utils_1.remoteQueryObjectFromString)({
                        entryPoint: "variant",
                        variables: {
                            filters: { id: batchResult.created.map(function (v) { return v.id; }) },
                        },
                        fields: (0, exports.remapKeysForVariant)(fields !== null && fields !== void 0 ? fields : []),
                    });
                    created = remoteQuery(createdQuery);
                }
                if (batchResult.updated.length) {
                    updatedQuery = (0, utils_1.remoteQueryObjectFromString)({
                        entryPoint: "variant",
                        variables: {
                            filters: { id: batchResult.updated.map(function (v) { return v.id; }) },
                        },
                        fields: (0, exports.remapKeysForVariant)(fields !== null && fields !== void 0 ? fields : []),
                    });
                    updated = remoteQuery(updatedQuery);
                }
                return [4 /*yield*/, (0, utils_1.promiseAll)([created, updated])];
            case 1:
                _a = __read.apply(void 0, [_b.sent(), 2]), createdRes = _a[0], updatedRes = _a[1];
                return [2 /*return*/, {
                        created: createdRes,
                        updated: updatedRes,
                        deleted: batchResult.deleted,
                    }];
        }
    });
}); };
exports.refetchBatchVariants = refetchBatchVariants;
//# sourceMappingURL=helpers.js.map