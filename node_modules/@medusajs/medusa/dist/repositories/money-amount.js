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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyAmountRepository = void 0;
var typeorm_1 = require("typeorm");
var models_1 = require("../models");
var database_1 = require("../loaders/database");
var lodash_1 = require("lodash");
var utils_1 = require("../utils");
var partition_1 = __importDefault(require("lodash/partition"));
var ulid_1 = require("ulid");
var utils_2 = require("@medusajs/utils");
exports.MoneyAmountRepository = database_1.dataSource
    .getRepository(models_1.MoneyAmount)
    .extend({
    insertBulk: function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var queryBuilder, rawMoneyAmounts, created, variantMoneyAmounts;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryBuilder = this.createQueryBuilder()
                            .insert()
                            .into(models_1.MoneyAmount)
                            .values(data);
                        if (!!queryBuilder.connection.driver.isReturningSqlSupported("insert")) return [3 /*break*/, 2];
                        return [4 /*yield*/, queryBuilder.execute()];
                    case 1:
                        rawMoneyAmounts = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, queryBuilder.returning("*").execute()];
                    case 3:
                        rawMoneyAmounts = _a.sent();
                        _a.label = 4;
                    case 4:
                        created = rawMoneyAmounts.generatedMaps.map(function (d) {
                            return _this.create(d);
                        });
                        variantMoneyAmounts = this.manager.create(models_1.ProductVariantMoneyAmount, data
                            .filter(function (d) { return !!d.variant; })
                            .map(function (d) { return ({
                            variant_id: d.variant.id,
                            money_amount_id: d.id,
                        }); }));
                        return [4 /*yield*/, this.manager.save(variantMoneyAmounts)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, created];
                }
            });
        });
    },
    /**
     * Will be removed in a future release.
     * Use `deleteVariantPricesNotIn` instead.
     * @deprecated
     */
    findVariantPricesNotIn: function (variantId, prices) {
        return __awaiter(this, void 0, void 0, function () {
            var pricesNotInPricesPayload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .leftJoinAndSelect("product_variant_money_amount", "pvma", "pvma.money_amount_id = ma.id")
                            .where("pvma.variant_id = :variant_id", {
                            variant_id: variantId,
                        })
                            .andWhere({
                            price_list_id: (0, typeorm_1.IsNull)(),
                        })
                            .andWhere(new typeorm_1.Brackets(function (qb) {
                            qb.where({
                                currency_code: (0, typeorm_1.Not)((0, typeorm_1.In)(prices.map(function (p) { return p.currency_code; }))),
                            }).orWhere({ region_id: (0, typeorm_1.Not)((0, typeorm_1.In)(prices.map(function (p) { return p.region_id; }))) });
                        }))
                            .getMany()];
                    case 1:
                        pricesNotInPricesPayload = _a.sent();
                        return [2 /*return*/, pricesNotInPricesPayload];
                }
            });
        });
    },
    deleteVariantPricesNotIn: function (variantIdOrData, prices) {
        return __awaiter(this, void 0, void 0, function () {
            var data, maDeleteQueryBuilder, mavDeleteQueryBuilder, _loop_1, this_1, data_1, data_1_1, data_, e_1_1, deleteAmounts;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        data = (0, utils_1.isString)(variantIdOrData)
                            ? [
                                {
                                    variantId: variantIdOrData,
                                    prices: prices,
                                },
                            ]
                            : variantIdOrData;
                        maDeleteQueryBuilder = this.createQueryBuilder("ma");
                        mavDeleteQueryBuilder = this.createQueryBuilder()
                            .delete()
                            .from("product_variant_money_amount");
                        _loop_1 = function (data_) {
                            var maIdsForVariant, where, orWhere, _c, _d, price;
                            var e_2, _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0: return [4 /*yield*/, this_1.createQueryBuilder("ma")
                                            .leftJoin("product_variant_money_amount", "pvma", "pvma.money_amount_id = ma.id")
                                            .addSelect("pvma.variant_id", "variant_id")
                                            .addSelect("pvma.money_amount_id", "money_amount_id")
                                            .where("pvma.variant_id = :variant_id", {
                                            variant_id: data_.variantId,
                                        })
                                            .getMany()];
                                    case 1:
                                        maIdsForVariant = _f.sent();
                                        where = {
                                            id: (0, typeorm_1.In)(maIdsForVariant.map(function (ma) { return ma.id; })),
                                            price_list_id: (0, typeorm_1.IsNull)(),
                                        };
                                        orWhere = [];
                                        try {
                                            for (_c = (e_2 = void 0, __values(data_.prices)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                                price = _d.value;
                                                if (price.currency_code) {
                                                    orWhere.push({
                                                        currency_code: (0, typeorm_1.Not)(price.currency_code),
                                                    }, {
                                                        region_id: price.region_id
                                                            ? (0, typeorm_1.Not)(price.region_id)
                                                            : (0, typeorm_1.Not)((0, typeorm_1.IsNull)()),
                                                        currency_code: price.currency_code,
                                                    });
                                                }
                                                if (price.region_id) {
                                                    orWhere.push({
                                                        region_id: (0, typeorm_1.Not)(price.region_id),
                                                    });
                                                }
                                            }
                                        }
                                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                        finally {
                                            try {
                                                if (_d && !_d.done && (_e = _c.return)) _e.call(_c);
                                            }
                                            finally { if (e_2) throw e_2.error; }
                                        }
                                        maDeleteQueryBuilder.orWhere(new typeorm_1.Brackets(function (localQueryBuild) {
                                            localQueryBuild.where(where).andWhere(orWhere);
                                        }));
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        data_1 = __values(data), data_1_1 = data_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!data_1_1.done) return [3 /*break*/, 5];
                        data_ = data_1_1.value;
                        return [5 /*yield**/, _loop_1(data_)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        data_1_1 = data_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [4 /*yield*/, maDeleteQueryBuilder.getMany()];
                    case 9:
                        deleteAmounts = _b.sent();
                        if (!deleteAmounts.length) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, utils_2.promiseAll)([
                                this.delete(deleteAmounts.map(function (mav) { return mav.id; })),
                                mavDeleteQueryBuilder
                                    .where(deleteAmounts.map(function (mav) { return ({
                                    money_amount_id: mav.id,
                                }); }))
                                    .execute(),
                            ])];
                    case 10:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    upsertVariantCurrencyPrice: function (variantId, price) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var moneyAmount, created, createdAmount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .leftJoinAndSelect("product_variant_money_amount", "pvma", "pvma.money_amount_id = ma.id")
                            .where("pvma.variant_id = :variantId", { variantId: variantId })
                            .andWhere("ma.currency_code = :currencyCode", {
                            currencyCode: price.currency_code,
                        })
                            .andWhere("ma.region_id IS NULL")
                            .andWhere("ma.price_list_id IS NULL")
                            .getOne()];
                    case 1:
                        moneyAmount = _b.sent();
                        created = !moneyAmount;
                        if (!moneyAmount) {
                            moneyAmount = this.create(__assign(__assign({}, price), { currency_code: (_a = price.currency_code) === null || _a === void 0 ? void 0 : _a.toLowerCase(), variant: { id: variantId } }));
                        }
                        else {
                            moneyAmount.amount = price.amount;
                        }
                        return [4 /*yield*/, this.save(moneyAmount)];
                    case 2:
                        createdAmount = _b.sent();
                        if (!created) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.createProductVariantMoneyAmounts([
                                {
                                    variant_id: variantId,
                                    money_amount_id: createdAmount.id,
                                },
                            ])];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, createdAmount];
                }
            });
        });
    },
    addPriceListPrices: function (priceListId, prices, overrideExisting) {
        if (overrideExisting === void 0) { overrideExisting = false; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, toInsert, joinTableValues, insertResult, raw;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = __read(prices.reduce(function (acc, price) {
                            var _a = __read(acc, 2), prices = _a[0], joinTableValues = _a[1];
                            var id = "ma_".concat((0, ulid_1.ulid)());
                            var variant = _this.create(__assign(__assign({}, price), { id: id, price_list_id: priceListId }));
                            var joinTableValue = _this.manager.create(models_1.ProductVariantMoneyAmount, {
                                variant_id: price.variant_id,
                                money_amount_id: id,
                            });
                            return [
                                __spreadArray(__spreadArray([], __read(prices), false), [variant], false),
                                __spreadArray(__spreadArray([], __read(joinTableValues), false), [joinTableValue], false),
                            ];
                        }, [[], []]), 2), toInsert = _a[0], joinTableValues = _a[1];
                        return [4 /*yield*/, this.createQueryBuilder()
                                .insert()
                                .orIgnore(true)
                                .into(models_1.MoneyAmount)
                                .values(toInsert)
                                .returning("*")
                                .execute()];
                    case 1:
                        insertResult = _b.sent();
                        if (!overrideExisting) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.createQueryBuilder()
                                .delete()
                                .from(models_1.MoneyAmount)
                                .where({
                                price_list_id: priceListId,
                                id: (0, typeorm_1.Not)((0, typeorm_1.In)(insertResult.identifiers.map(function (ma) { return ma.id; }))),
                            })
                                .returning("id")
                                .execute()];
                    case 2:
                        raw = (_b.sent()).raw;
                        return [4 /*yield*/, this.createQueryBuilder()
                                .delete()
                                .from("product_variant_money_amount")
                                .where({
                                money_amount_id: (0, typeorm_1.In)(raw.map(function (deletedMa) { return deletedMa.id; })),
                            })
                                .execute()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [4 /*yield*/, this.manager.save(joinTableValues)];
                    case 5:
                        _b.sent();
                        return [4 /*yield*/, this.manager
                                .createQueryBuilder(models_1.MoneyAmount, "ma")
                                .select()
                                .where(insertResult.identifiers)
                                .getMany()];
                    case 6: return [2 /*return*/, _b.sent()];
                }
            });
        });
    },
    deletePriceListPrices: function (priceListId, moneyAmountIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .delete()
                            .from(models_1.MoneyAmount)
                            .where({ price_list_id: priceListId, id: (0, typeorm_1.In)(moneyAmountIds) })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    findManyForVariantInPriceList: function (variant_id, price_list_id, requiresPriceList) {
        if (requiresPriceList === void 0) { requiresPriceList = false; }
        return __awaiter(this, void 0, void 0, function () {
            var qb, getAndWhere;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = this.createQueryBuilder("ma")
                            .leftJoinAndSelect("ma.price_list", "price_list")
                            .leftJoin("product_variant_money_amount", "pvma", "pvma.money_amount_id = ma.id")
                            .where("pvma.variant_id = :variant_id", { variant_id: variant_id });
                        getAndWhere = function (subQb) {
                            var andWhere = subQb.where("ma.price_list_id = :price_list_id", {
                                price_list_id: price_list_id,
                            });
                            if (!requiresPriceList) {
                                andWhere.orWhere("ma.price_list_id IS NULL");
                            }
                            return andWhere;
                        };
                        qb.andWhere(new typeorm_1.Brackets(getAndWhere));
                        return [4 /*yield*/, qb.getManyAndCount()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    /**
     * @deprecated in favor of {@link findManyForVariantsInRegion}
     * @param variant_id
     * @param region_id
     * @param currency_code
     * @param customer_id
     * @param include_discount_prices
     * @param include_tax_inclusive_pricing
     */
    findManyForVariantInRegion: function (variant_id, region_id, currency_code, customer_id, include_discount_prices, include_tax_inclusive_pricing) {
        if (include_tax_inclusive_pricing === void 0) { include_tax_inclusive_pricing = false; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findManyForVariantsInRegion(variant_id, region_id, currency_code, customer_id, include_discount_prices, include_tax_inclusive_pricing)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, [result[0][variant_id], result[1]]];
                }
            });
        });
    },
    findCurrencyMoneyAmounts: function (where) {
        return __awaiter(this, void 0, void 0, function () {
            var qb, rawAndEntities;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = this.createQueryBuilder("ma")
                            .leftJoin("product_variant_money_amount", "pvma", "pvma.money_amount_id = ma.id")
                            .addSelect("pvma.variant_id", "variant_id");
                        where.forEach(function (variantCurrency, i) {
                            var _a;
                            return qb.orWhere("(pvma.variant_id = :variant_id_".concat(i, " AND ma.currency_code = :currency_code_").concat(i, " AND ma.region_id IS NULL AND ma.price_list_id IS NULL)"), (_a = {},
                                _a["variant_id_".concat(i)] = variantCurrency.variant_id,
                                _a["currency_code_".concat(i)] = variantCurrency.currency_code,
                                _a));
                        });
                        return [4 /*yield*/, qb.getRawAndEntities()];
                    case 1:
                        rawAndEntities = _a.sent();
                        return [2 /*return*/, rawAndEntities.entities.map(function (e, i) {
                                return __assign(__assign({}, e), { variant_id: rawAndEntities.raw[i].variant_id });
                            })];
                }
            });
        });
    },
    findRegionMoneyAmounts: function (where) {
        return __awaiter(this, void 0, void 0, function () {
            var qb, rawAndEntities;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = this.createQueryBuilder("ma")
                            .leftJoin("product_variant_money_amount", "pvma", "pvma.money_amount_id = ma.id")
                            .addSelect("pvma.variant_id", "variant_id");
                        where.forEach(function (w, i) {
                            var _a;
                            return qb.orWhere("(pvma.variant_id = :variant_id_".concat(i, " AND ma.region_id = :region_id_").concat(i, " AND ma.price_list_id IS NULL)"), (_a = {},
                                _a["variant_id_".concat(i)] = w.variant_id,
                                _a["region_id_".concat(i)] = w.region_id,
                                _a));
                        });
                        return [4 /*yield*/, qb.getRawAndEntities()];
                    case 1:
                        rawAndEntities = _a.sent();
                        return [2 /*return*/, rawAndEntities.entities.map(function (e, i) {
                                return __assign(__assign({}, e), { variant_id: rawAndEntities.raw[i].variant_id });
                            })];
                }
            });
        });
    },
    findManyForVariantsInRegion: function (variant_ids, region_id, currency_code, customer_id, include_discount_prices, include_tax_inclusive_pricing) {
        if (include_tax_inclusive_pricing === void 0) { include_tax_inclusive_pricing = false; }
        return __awaiter(this, void 0, void 0, function () {
            var date, qb, count, res, entities, raw, prices, groupedPrices;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        variant_ids = Array.isArray(variant_ids) ? variant_ids : [variant_ids];
                        if (!variant_ids.length) {
                            return [2 /*return*/, [{}, 0]];
                        }
                        date = new Date();
                        qb = this.createQueryBuilder("ma")
                            .leftJoinAndSelect("ma.price_list", "price_list")
                            .leftJoinAndSelect("product_variant_money_amount", "pvma", "pvma.money_amount_id = ma.id")
                            .addSelect("pvma.variant_id", "variant_id")
                            .andWhere("pvma.variant_id IN (:...variantIds)", {
                            variantIds: variant_ids,
                        })
                            .andWhere("(ma.price_list_id is null or price_list.status = 'active')")
                            .andWhere("(price_list.ends_at is null OR price_list.ends_at > :date)", {
                            date: date.toUTCString(),
                        })
                            .andWhere("(price_list.starts_at is null OR price_list.starts_at < :date)", {
                            date: date.toUTCString(),
                        });
                        if (include_tax_inclusive_pricing) {
                            qb.leftJoin("ma.currency", "currency")
                                .leftJoin("ma.region", "region")
                                .addSelect(["currency.includes_tax", "region.includes_tax"]);
                        }
                        if (region_id || currency_code) {
                            qb.andWhere(new typeorm_1.Brackets(function (qb) {
                                if (region_id && !currency_code) {
                                    qb.where({ region_id: region_id });
                                }
                                if (!region_id && currency_code) {
                                    qb.where({ currency_code: currency_code });
                                }
                                if (currency_code && region_id) {
                                    qb.where({ region_id: region_id }).orWhere({
                                        currency_code: currency_code,
                                    });
                                }
                            }));
                        }
                        else if (!customer_id && !include_discount_prices) {
                            qb.andWhere("price_list.id IS null");
                        }
                        if (customer_id) {
                            qb.leftJoin("price_list.customer_groups", "cgroup")
                                .leftJoin("customer_group_customers", "cgc", "cgc.customer_group_id = cgroup.id")
                                .andWhere("(cgroup.id is null OR cgc.customer_id = :customer_id)", {
                                customer_id: customer_id,
                            });
                        }
                        else {
                            qb.leftJoin("price_list.customer_groups", "cgroup").andWhere("cgroup.id is null");
                        }
                        return [4 /*yield*/, qb.getCount()];
                    case 1:
                        count = _a.sent();
                        return [4 /*yield*/, qb.getRawAndEntities()];
                    case 2:
                        res = _a.sent();
                        entities = res.entities, raw = res.raw;
                        prices = entities.map(function (p, i) {
                            p["variant_id"] = raw[i]["variant_id"];
                            return p;
                        });
                        groupedPrices = (0, lodash_1.groupBy)(prices, "variant_id");
                        return [2 /*return*/, [groupedPrices, count]];
                }
            });
        });
    },
    updatePriceListPrices: function (priceListId, updates) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, existingPrices, newPrices, _b, newPriceEntities, joinTableValues, _c, prices, _d, _e;
            var _this = this;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _a = __read((0, partition_1.default)(updates, function (update) { return update.id; }), 2), existingPrices = _a[0], newPrices = _a[1];
                        _b = __read(newPrices.reduce(function (acc, price) {
                            var _a = __read(acc, 2), prices = _a[0], joinTableValues = _a[1];
                            var id = "ma_".concat((0, ulid_1.ulid)());
                            var variantPrice = _this.create(__assign(__assign({}, price), { id: id, price_list_id: priceListId }));
                            var joinTableValue = _this.manager.create(models_1.ProductVariantMoneyAmount, {
                                variant_id: price.variant_id,
                                money_amount_id: id,
                            });
                            prices.push(variantPrice);
                            joinTableValues.push(joinTableValue);
                            return [prices, joinTableValues];
                        }, [[], []]), 2), newPriceEntities = _b[0], joinTableValues = _b[1];
                        _d = utils_2.promiseAll;
                        _e = [this.save(__spreadArray(__spreadArray([], __read(existingPrices), false), __read(newPriceEntities), false))];
                        return [4 /*yield*/, this.manager.save(joinTableValues)];
                    case 1: return [4 /*yield*/, _d.apply(void 0, [_e.concat([
                                _f.sent()
                            ])])];
                    case 2:
                        _c = __read.apply(void 0, [_f.sent(), 1]), prices = _c[0];
                        return [2 /*return*/, prices];
                }
            });
        });
    },
    getPricesForVariantInRegion: function (variantId, regionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.createQueryBuilder()
                        .leftJoinAndSelect("product_variant_money_amount", "pvma", "pvma.money_amount_id = ma.id")
                        .where("pvma.variant_id = :variantId", { variantId: variantId })
                        .where("ma.region_id = :regionId", { regionId: regionId })
                        .getMany()];
            });
        });
    },
    createProductVariantMoneyAmounts: function (toCreate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .insert()
                            .into("product_variant_money_amount")
                            .values(toCreate)
                            .execute()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
});
exports.default = exports.MoneyAmountRepository;
//# sourceMappingURL=money-amount.js.map