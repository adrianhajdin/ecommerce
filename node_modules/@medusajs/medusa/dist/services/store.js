"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var currencies_1 = require("../utils/currencies");
var utils_2 = require("@medusajs/utils");
/**
 * Provides layer to manipulate store settings.
 */
var StoreService = /** @class */ (function (_super) {
    __extends(StoreService, _super);
    function StoreService(_a) {
        var storeRepository = _a.storeRepository, currencyRepository = _a.currencyRepository, eventBusService = _a.eventBusService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.storeRepository_ = storeRepository;
        _this.currencyRepository_ = currencyRepository;
        _this.eventBus_ = eventBusService;
        return _this;
    }
    /**
     * Creates a store if it doesn't already exist.
     * @return The store.
     */
    StoreService.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var storeRepository, currencyRepository, store, newStore, usd;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        storeRepository = transactionManager.withRepository(this.storeRepository_);
                                        currencyRepository = transactionManager.withRepository(this.currencyRepository_);
                                        return [4 /*yield*/, this.retrieve().catch(function () { return void 0; })];
                                    case 1:
                                        store = _a.sent();
                                        if (store) {
                                            return [2 /*return*/, store];
                                        }
                                        newStore = storeRepository.create();
                                        return [4 /*yield*/, currencyRepository.findOne({
                                                where: {
                                                    code: "usd",
                                                },
                                            })];
                                    case 2:
                                        usd = _a.sent();
                                        if (usd) {
                                            newStore.currencies = [usd];
                                        }
                                        return [4 /*yield*/, storeRepository.save(newStore)];
                                    case 3:
                                        store = _a.sent();
                                        return [2 /*return*/, store];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieve the store settings. There is always a maximum of one store.
     * @param config The config object from which the query will be built
     * @return the store
     */
    StoreService.prototype.retrieve = function (config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var storeRepo, query, stores;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storeRepo = this.activeManager_.withRepository(this.storeRepository_);
                        query = (0, utils_1.buildQuery)({
                            id: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()),
                        }, config);
                        return [4 /*yield*/, storeRepo.find(query)];
                    case 1:
                        stores = _a.sent();
                        if (!stores.length) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Store does not exist");
                        }
                        return [2 /*return*/, stores[0]];
                }
            });
        });
    };
    StoreService.prototype.getDefaultCurrency_ = function (code) {
        var currencyObject = currencies_1.currencies[code.toUpperCase()];
        return {
            code: currencyObject.code.toLowerCase(),
            symbol: currencyObject.symbol,
            symbol_native: currencyObject.symbol_native,
            name: currencyObject.name,
        };
    };
    /**
     * Updates a store
     * @param data - an object with the update values.
     * @return resolves to the update result.
     */
    StoreService.prototype.update = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var storeRepository, currencyRepository, metadata, default_currency_code, storeCurrencies, rest, store, defaultCurr_1, hasDefCurrency, _a, hasDefCurrency, curr, _b, _c, _d, key, value;
                            var e_1, _e;
                            var _this = this;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        storeRepository = transactionManager.withRepository(this.storeRepository_);
                                        currencyRepository = transactionManager.withRepository(this.currencyRepository_);
                                        metadata = data.metadata, default_currency_code = data.default_currency_code, storeCurrencies = data.currencies, rest = __rest(data, ["metadata", "default_currency_code", "currencies"]);
                                        return [4 /*yield*/, this.retrieve({ relations: ["currencies"] })];
                                    case 1:
                                        store = _f.sent();
                                        if (metadata) {
                                            store.metadata = (0, utils_1.setMetadata)(store, metadata);
                                        }
                                        if (!storeCurrencies) return [3 /*break*/, 3];
                                        defaultCurr_1 = default_currency_code !== null && default_currency_code !== void 0 ? default_currency_code : store.default_currency_code;
                                        hasDefCurrency = storeCurrencies.find(function (c) { return c.toLowerCase() === defaultCurr_1.toLowerCase(); });
                                        // throw if we are trying to remove a currency from store currently used as default
                                        if (!hasDefCurrency) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "You are not allowed to remove default currency from store currencies without replacing it as well");
                                        }
                                        _a = store;
                                        return [4 /*yield*/, (0, utils_2.promiseAll)(storeCurrencies.map(function (curr) { return __awaiter(_this, void 0, void 0, function () {
                                                var currency;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, currencyRepository.findOne({
                                                                where: { code: curr.toLowerCase() },
                                                            })];
                                                        case 1:
                                                            currency = _a.sent();
                                                            if (!currency) {
                                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Currency with code ".concat(curr, " does not exist"));
                                                            }
                                                            return [2 /*return*/, currency];
                                                    }
                                                });
                                            }); }))];
                                    case 2:
                                        _a.currencies = _f.sent();
                                        _f.label = 3;
                                    case 3:
                                        if (!default_currency_code) return [3 /*break*/, 5];
                                        hasDefCurrency = store.currencies.find(function (c) { return c.code.toLowerCase() === default_currency_code.toLowerCase(); });
                                        if (!hasDefCurrency) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Store does not have currency: ".concat(default_currency_code));
                                        }
                                        return [4 /*yield*/, currencyRepository.findOne({
                                                where: {
                                                    code: default_currency_code.toLowerCase(),
                                                },
                                            })];
                                    case 4:
                                        curr = (_f.sent());
                                        store.default_currency = curr;
                                        store.default_currency_code = curr.code;
                                        _f.label = 5;
                                    case 5:
                                        try {
                                            for (_b = __values(Object.entries(rest)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                                _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                                                store[key] = value;
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_c && !_c.done && (_e = _b.return)) _e.call(_b);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [4 /*yield*/, storeRepository.save(store)];
                                    case 6: return [2 /*return*/, _f.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Add a currency to the store
     * @param code - 3 character ISO currency code
     * @return result after update
     */
    StoreService.prototype.addCurrency = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var storeRepo, currencyRepository, curr, store, doesStoreInclCurrency;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        storeRepo = transactionManager.withRepository(this.storeRepository_);
                                        currencyRepository = transactionManager.withRepository(this.currencyRepository_);
                                        return [4 /*yield*/, currencyRepository.findOne({
                                                where: { code: code.toLowerCase() },
                                            })];
                                    case 1:
                                        curr = _a.sent();
                                        if (!curr) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Currency ".concat(code, " not found"));
                                        }
                                        return [4 /*yield*/, this.retrieve({ relations: ["currencies"] })];
                                    case 2:
                                        store = _a.sent();
                                        doesStoreInclCurrency = store.currencies
                                            .map(function (c) { return c.code.toLowerCase(); })
                                            .includes(curr.code.toLowerCase());
                                        if (doesStoreInclCurrency) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.DUPLICATE_ERROR, "Currency already added");
                                        }
                                        store.currencies = __spreadArray(__spreadArray([], __read(store.currencies), false), [curr], false);
                                        return [4 /*yield*/, storeRepo.save(store)];
                                    case 3: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes a currency from the store
     * @param code - 3 character ISO currency code
     * @return result after update
     */
    StoreService.prototype.removeCurrency = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var storeRepo, store, doesCurrencyExists;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        storeRepo = transactionManager.withRepository(this.storeRepository_);
                                        return [4 /*yield*/, this.retrieve({ relations: ["currencies"] })];
                                    case 1:
                                        store = _a.sent();
                                        doesCurrencyExists = store.currencies.some(function (c) { return c.code === code.toLowerCase(); });
                                        if (!doesCurrencyExists) {
                                            return [2 /*return*/, store];
                                        }
                                        store.currencies = store.currencies.filter(function (c) { return c.code !== code; });
                                        return [4 /*yield*/, storeRepo.save(store)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return StoreService;
}(interfaces_1.TransactionBaseService));
exports.default = StoreService;
//# sourceMappingURL=store.js.map