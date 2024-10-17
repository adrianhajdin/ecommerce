"use strict";
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPriceListPriceIdsForProduct = exports.transformPriceList = exports.fetchPriceList = void 0;
var utils_1 = require("@medusajs/utils");
var fetchPriceList = function (id, scope, fields) { return __awaiter(void 0, void 0, void 0, function () {
    var remoteQuery, queryObject, _a, priceList;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                remoteQuery = scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
                queryObject = (0, utils_1.remoteQueryObjectFromString)({
                    entryPoint: "price_lists",
                    variables: {
                        filters: { id: id },
                    },
                    fields: fields,
                });
                return [4 /*yield*/, remoteQuery(queryObject)];
            case 1:
                _a = __read.apply(void 0, [_b.sent(), 1]), priceList = _a[0];
                if (!(0, utils_1.isPresent)(priceList)) {
                    throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Price list with id: ".concat(id, " was not found"));
                }
                return [2 /*return*/, (0, exports.transformPriceList)(priceList)];
        }
    });
}); };
exports.fetchPriceList = fetchPriceList;
var transformPriceList = function (priceList) {
    priceList.rules = (0, utils_1.buildPriceListRules)(priceList.price_list_rules);
    priceList.prices = (0, utils_1.buildPriceSetPricesForCore)(priceList.prices);
    delete priceList.price_list_rules;
    return priceList;
};
exports.transformPriceList = transformPriceList;
var fetchPriceListPriceIdsForProduct = function (priceListId, productIds, scope) { return __awaiter(void 0, void 0, void 0, function () {
    var remoteQuery, priceSetIds, variants, variants_1, variants_1_1, variant, productPrices;
    var e_1, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                remoteQuery = scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
                priceSetIds = [];
                return [4 /*yield*/, remoteQuery((0, utils_1.remoteQueryObjectFromString)({
                        entryPoint: "variants",
                        variables: { filters: { product_id: productIds } },
                        fields: ["price_set.id"],
                    }))];
            case 1:
                variants = _c.sent();
                try {
                    for (variants_1 = __values(variants), variants_1_1 = variants_1.next(); !variants_1_1.done; variants_1_1 = variants_1.next()) {
                        variant = variants_1_1.value;
                        if ((_b = variant.price_set) === null || _b === void 0 ? void 0 : _b.id) {
                            priceSetIds.push(variant.price_set.id);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (variants_1_1 && !variants_1_1.done && (_a = variants_1.return)) _a.call(variants_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return [4 /*yield*/, remoteQuery((0, utils_1.remoteQueryObjectFromString)({
                        entryPoint: "prices",
                        variables: {
                            filters: { price_set_id: priceSetIds, price_list_id: priceListId },
                        },
                        fields: ["id"],
                    }))];
            case 2:
                productPrices = _c.sent();
                return [2 /*return*/, productPrices.map(function (price) { return price.id; })];
        }
    });
}); };
exports.fetchPriceListPriceIdsForProduct = fetchPriceListPriceIdsForProduct;
//# sourceMappingURL=helpers.js.map