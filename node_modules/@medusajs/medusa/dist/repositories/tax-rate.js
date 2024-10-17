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
exports.TaxRateRepository = void 0;
var lodash_1 = require("lodash");
var typeorm_1 = require("typeorm");
var models_1 = require("../models");
var medusa_core_utils_1 = require("medusa-core-utils");
var utils_1 = require("@medusajs/utils");
var database_1 = require("../loaders/database");
var resolveableFields = [
    "product_count",
    "product_type_count",
    "shipping_option_count",
];
exports.TaxRateRepository = database_1.dataSource.getRepository(models_1.TaxRate).extend({
    getFindQueryBuilder: function (findOptions) {
        var e_1, _a;
        var qb = this.createQueryBuilder("tr");
        var cleanOptions = findOptions;
        var resolverFields = [];
        if ((0, medusa_core_utils_1.isDefined)(findOptions.select)) {
            var selectableCols = [];
            var legacySelect = (0, utils_1.objectToStringPath)(findOptions.select, { includeParentPropertyFields: false });
            try {
                for (var legacySelect_1 = __values(legacySelect), legacySelect_1_1 = legacySelect_1.next(); !legacySelect_1_1.done; legacySelect_1_1 = legacySelect_1.next()) {
                    var k = legacySelect_1_1.value;
                    if (!resolveableFields.includes(k)) {
                        selectableCols.push(k);
                    }
                    else {
                        resolverFields.push(k);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (legacySelect_1_1 && !legacySelect_1_1.done && (_a = legacySelect_1.return)) _a.call(legacySelect_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            cleanOptions.select = selectableCols;
        }
        qb.setFindOptions(cleanOptions);
        if (resolverFields.length > 0) {
            this.applyResolutionsToQueryBuilder(qb, resolverFields);
        }
        return qb;
    },
    findWithResolution: function (findOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var qb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = this.getFindQueryBuilder(findOptions);
                        return [4 /*yield*/, qb.getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    findOneWithResolution: function (findOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var qb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = this.getFindQueryBuilder(findOptions);
                        return [4 /*yield*/, qb.getOne()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    findAndCountWithResolution: function (findOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var qb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = this.getFindQueryBuilder(findOptions);
                        return [4 /*yield*/, (0, utils_1.promiseAll)([qb.getMany(), qb.getCount()])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    applyResolutionsToQueryBuilder: function (qb, resolverFields) {
        var e_2, _a;
        try {
            for (var resolverFields_1 = __values(resolverFields), resolverFields_1_1 = resolverFields_1.next(); !resolverFields_1_1.done; resolverFields_1_1 = resolverFields_1.next()) {
                var k = resolverFields_1_1.value;
                switch (k) {
                    case "product_count":
                        qb.loadRelationCountAndMap("".concat(qb.alias, ".product_count"), "".concat(qb.alias, ".products"));
                        break;
                    case "product_type_count":
                        qb.loadRelationCountAndMap("".concat(qb.alias, ".product_type_count"), "".concat(qb.alias, ".product_types"));
                        break;
                    case "shipping_option_count":
                        qb.loadRelationCountAndMap("".concat(qb.alias, ".shipping_option_count"), "".concat(qb.alias, ".shipping_options"));
                        break;
                    default:
                        break;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (resolverFields_1_1 && !resolverFields_1_1.done && (_a = resolverFields_1.return)) _a.call(resolverFields_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return qb;
    },
    removeFromProduct: function (id, productIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .delete()
                            .from(models_1.ProductTaxRate)
                            .where({ rate_id: id, product_id: (0, typeorm_1.In)(productIds) })
                            .execute()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    addToProduct: function (id, productIds, overrideExisting) {
        if (overrideExisting === void 0) { overrideExisting = false; }
        return __awaiter(this, void 0, void 0, function () {
            var toInsert, insertResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toInsert = productIds.map(function (pId) { return ({ rate_id: id, product_id: pId }); });
                        return [4 /*yield*/, this.createQueryBuilder()
                                .insert()
                                .orIgnore(true)
                                .into(models_1.ProductTaxRate)
                                .values(toInsert)
                                .execute()];
                    case 1:
                        insertResult = _a.sent();
                        if (!overrideExisting) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.createQueryBuilder()
                                .delete()
                                .from(models_1.ProductTaxRate)
                                .where({ rate_id: id, product_id: (0, typeorm_1.Not)((0, typeorm_1.In)(productIds)) })
                                .execute()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.manager
                            .createQueryBuilder(models_1.ProductTaxRate, "ptr")
                            .select()
                            .where(insertResult.identifiers)
                            .getMany()];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    removeFromProductType: function (id, productTypeIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .delete()
                            .from(models_1.ProductTypeTaxRate)
                            .where({ rate_id: id, product_type_id: (0, typeorm_1.In)(productTypeIds) })
                            .execute()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    addToProductType: function (id, productTypeIds, overrideExisting) {
        if (overrideExisting === void 0) { overrideExisting = false; }
        return __awaiter(this, void 0, void 0, function () {
            var toInsert, insertResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toInsert = productTypeIds.map(function (pId) { return ({
                            rate_id: id,
                            product_type_id: pId,
                        }); });
                        return [4 /*yield*/, this.createQueryBuilder()
                                .insert()
                                .orIgnore(true)
                                .into(models_1.ProductTypeTaxRate)
                                .values(toInsert)
                                .execute()];
                    case 1:
                        insertResult = _a.sent();
                        if (!overrideExisting) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.createQueryBuilder()
                                .delete()
                                .from(models_1.ProductTypeTaxRate)
                                .where({ rate_id: id, product_type_id: (0, typeorm_1.Not)((0, typeorm_1.In)(productTypeIds)) })
                                .execute()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.manager
                            .createQueryBuilder(models_1.ProductTypeTaxRate, "ptr")
                            .select()
                            .where(insertResult.identifiers)
                            .getMany()];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    removeFromShippingOption: function (id, optionIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .delete()
                            .from(models_1.ShippingTaxRate)
                            .where({ rate_id: id, shipping_option_id: (0, typeorm_1.In)(optionIds) })
                            .execute()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    addToShippingOption: function (id, optionIds, overrideExisting) {
        if (overrideExisting === void 0) { overrideExisting = false; }
        return __awaiter(this, void 0, void 0, function () {
            var toInsert, insertResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toInsert = optionIds.map(function (pId) { return ({
                            rate_id: id,
                            shipping_option_id: pId,
                        }); });
                        return [4 /*yield*/, this.createQueryBuilder()
                                .insert()
                                .orIgnore(true)
                                .into(models_1.ShippingTaxRate)
                                .values(toInsert)
                                .execute()];
                    case 1:
                        insertResult = _a.sent();
                        if (!overrideExisting) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.createQueryBuilder()
                                .delete()
                                .from(models_1.ShippingTaxRate)
                                .where({ rate_id: id, shipping_option_id: (0, typeorm_1.Not)((0, typeorm_1.In)(optionIds)) })
                                .execute()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.manager
                            .createQueryBuilder(models_1.ShippingTaxRate, "str")
                            .select()
                            .where(insertResult.identifiers)
                            .getMany()];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    listByProduct: function (productId, config) {
        return __awaiter(this, void 0, void 0, function () {
            var productRates, typeRates, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productRates = this.createQueryBuilder("txr")
                            .leftJoin(models_1.ProductTaxRate, "ptr", "ptr.rate_id = txr.id")
                            .leftJoin(models_1.Product, "prod", "prod.id = ptr.product_id")
                            .where("prod.id = :productId", { productId: productId });
                        typeRates = this.createQueryBuilder("txr")
                            .leftJoin(models_1.ProductTypeTaxRate, "pttr", "pttr.rate_id = txr.id")
                            .leftJoin(models_1.Product, "prod", "prod.type_id = pttr.product_type_id")
                            .where("prod.id = :productId", { productId: productId });
                        if ((0, medusa_core_utils_1.isDefined)(config.region_id)) {
                            productRates.andWhere("txr.region_id = :regionId", {
                                regionId: config.region_id,
                            });
                            typeRates.andWhere("txr.region_id = :regionId", {
                                regionId: config.region_id,
                            });
                        }
                        return [4 /*yield*/, (0, utils_1.promiseAll)([
                                productRates.getMany(),
                                typeRates.getMany(),
                            ])
                            // Only return unique rates by joining the two arrays from typeRates and
                            // productRates matching based on the id
                        ];
                    case 1:
                        results = _a.sent();
                        // Only return unique rates by joining the two arrays from typeRates and
                        // productRates matching based on the id
                        return [2 /*return*/, lodash_1.unionBy.apply(void 0, __spreadArray(__spreadArray([], __read(results), false), [function (txr) { return txr.id; }], false))];
                }
            });
        });
    },
    listByShippingOption: function (optionId) {
        return __awaiter(this, void 0, void 0, function () {
            var rates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rates = this.createQueryBuilder("txr")
                            .leftJoin(models_1.ShippingTaxRate, "ptr", "ptr.rate_id = txr.id")
                            .where("ptr.shipping_option_id = :optionId", { optionId: optionId });
                        return [4 /*yield*/, rates.getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
});
exports.default = exports.TaxRateRepository;
//# sourceMappingURL=tax-rate.js.map