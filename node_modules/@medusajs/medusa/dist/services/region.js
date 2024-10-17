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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var utils_1 = require("../utils");
var utils_2 = require("@medusajs/utils");
var interfaces_1 = require("../interfaces");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var countries_1 = require("../utils/countries");
/**
 * Provides layer to manipulate regions.
 */
var RegionService = /** @class */ (function (_super) {
    __extends(RegionService, _super);
    function RegionService(_a) {
        var regionRepository = _a.regionRepository, countryRepository = _a.countryRepository, storeService = _a.storeService, eventBusService = _a.eventBusService, currencyRepository = _a.currencyRepository, paymentProviderRepository = _a.paymentProviderRepository, fulfillmentProviderRepository = _a.fulfillmentProviderRepository, taxProviderRepository = _a.taxProviderRepository, paymentProviderService = _a.paymentProviderService, fulfillmentProviderService = _a.fulfillmentProviderService, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.regionRepository_ = regionRepository;
        _this.countryRepository_ = countryRepository;
        _this.storeService_ = storeService;
        _this.eventBus_ = eventBusService;
        _this.currencyRepository_ = currencyRepository;
        _this.paymentProviderRepository_ = paymentProviderRepository;
        _this.fulfillmentProviderRepository_ = fulfillmentProviderRepository;
        _this.paymentProviderService_ = paymentProviderService;
        _this.taxProviderRepository_ = taxProviderRepository;
        _this.fulfillmentProviderService_ = fulfillmentProviderService;
        _this.featureFlagRouter_ = featureFlagRouter;
        return _this;
    }
    /**
     * Creates a region.
     *
     * @param data - the unvalidated region
     * @return the newly created region
     */
    RegionService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var regionRepository, currencyRepository, regionObject, metadata, currency_code, includes_tax, toValidate, validated, currency, _a, _b, _c, key, value, created, result;
                            var e_1, _d;
                            var _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        regionRepository = manager.withRepository(this.regionRepository_);
                                        currencyRepository = manager.withRepository(this.currencyRepository_);
                                        regionObject = __assign({}, data);
                                        metadata = data.metadata, currency_code = data.currency_code, includes_tax = data.includes_tax, toValidate = __rest(data, ["metadata", "currency_code", "includes_tax"]);
                                        return [4 /*yield*/, this.validateFields(toValidate)];
                                    case 1:
                                        validated = _f.sent();
                                        if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
                                            if (typeof includes_tax !== "undefined") {
                                                regionObject.includes_tax = includes_tax;
                                            }
                                        }
                                        if (!currency_code) return [3 /*break*/, 4];
                                        // will throw if currency is not added to store currencies
                                        return [4 /*yield*/, this.validateCurrency(currency_code)];
                                    case 2:
                                        // will throw if currency is not added to store currencies
                                        _f.sent();
                                        return [4 /*yield*/, currencyRepository.findOne({
                                                where: { code: currency_code.toLowerCase() },
                                            })];
                                    case 3:
                                        currency = _f.sent();
                                        if (!currency) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Could not find currency with code ".concat(currency_code));
                                        }
                                        regionObject.currency = currency;
                                        regionObject.currency_code = currency_code.toLowerCase();
                                        _f.label = 4;
                                    case 4:
                                        if (metadata) {
                                            regionObject.metadata = (0, utils_1.setMetadata)({ metadata: (_e = regionObject.metadata) !== null && _e !== void 0 ? _e : null }, metadata);
                                        }
                                        try {
                                            for (_a = __values(Object.entries(validated)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                                                regionObject[key] = value;
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        created = regionRepository.create(regionObject);
                                        return [4 /*yield*/, regionRepository.save(created)];
                                    case 5:
                                        result = _f.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(RegionService.Events.CREATED, {
                                                id: result.id,
                                            })];
                                    case 6:
                                        _f.sent();
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a region
     *
     * @param regionId - the region to update
     * @param update - the data to update the region with
     * @return the result of the update operation
     */
    RegionService.prototype.update = function (regionId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var regionRepository, currencyRepository, region, metadata, currency_code, includes_tax, toValidate, validated, currency, _a, _b, _c, key, value, result;
                            var e_2, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        regionRepository = manager.withRepository(this.regionRepository_);
                                        currencyRepository = manager.withRepository(this.currencyRepository_);
                                        return [4 /*yield*/, this.retrieve(regionId)];
                                    case 1:
                                        region = _e.sent();
                                        metadata = update.metadata, currency_code = update.currency_code, includes_tax = update.includes_tax, toValidate = __rest(update, ["metadata", "currency_code", "includes_tax"]);
                                        return [4 /*yield*/, this.validateFields(toValidate, region.id)];
                                    case 2:
                                        validated = _e.sent();
                                        if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
                                            if (typeof includes_tax !== "undefined") {
                                                region.includes_tax = includes_tax;
                                            }
                                        }
                                        if (!currency_code) return [3 /*break*/, 5];
                                        // will throw if currency is not added to store currencies
                                        return [4 /*yield*/, this.validateCurrency(currency_code)];
                                    case 3:
                                        // will throw if currency is not added to store currencies
                                        _e.sent();
                                        return [4 /*yield*/, currencyRepository.findOne({
                                                where: { code: currency_code.toLowerCase() },
                                            })];
                                    case 4:
                                        currency = _e.sent();
                                        if (!currency) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Could not find currency with code ".concat(currency_code));
                                        }
                                        region.currency_code = currency_code.toLowerCase();
                                        _e.label = 5;
                                    case 5:
                                        if (metadata) {
                                            region.metadata = (0, utils_1.setMetadata)(region, metadata);
                                        }
                                        try {
                                            for (_a = __values(Object.entries(validated)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                                                region[key] = value;
                                            }
                                        }
                                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_2) throw e_2.error; }
                                        }
                                        return [4 /*yield*/, regionRepository.save(region)];
                                    case 6:
                                        result = _e.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(RegionService.Events.UPDATED, {
                                                id: result.id,
                                                fields: Object.keys(update),
                                            })];
                                    case 7:
                                        _e.sent();
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Validates fields for creation and updates. If the region already exists
     * the id can be passed to check that country updates are allowed.
     *
     * @param regionData - the region data to validate
     * @param id - optional id of the region to check against
     * @return the validated region data
     */
    RegionService.prototype.validateFields = function (regionData, id) {
        return __awaiter(this, void 0, void 0, function () {
            var ppRepository, fpRepository, tpRepository, region, _a, tp, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        ppRepository = this.activeManager_.withRepository(this.paymentProviderRepository_);
                        fpRepository = this.activeManager_.withRepository(this.fulfillmentProviderRepository_);
                        tpRepository = this.activeManager_.withRepository(this.taxProviderRepository_);
                        region = __assign({}, regionData);
                        if (region.tax_rate) {
                            this.validateTaxRate(region.tax_rate);
                        }
                        if (!regionData.countries) return [3 /*break*/, 2];
                        _a = region;
                        return [4 /*yield*/, (0, utils_2.promiseAll)(regionData.countries.map(function (countryCode) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.validateCountry(countryCode, id)];
                            }); }); })).catch(function (err) {
                                throw err;
                            })];
                    case 1:
                        _a.countries = _d.sent();
                        _d.label = 2;
                    case 2:
                        if (!regionData.tax_provider_id) return [3 /*break*/, 4];
                        return [4 /*yield*/, tpRepository.findOne({
                                where: { id: regionData.tax_provider_id },
                            })];
                    case 3:
                        tp = _d.sent();
                        if (!tp) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Tax provider not found");
                        }
                        _d.label = 4;
                    case 4:
                        if (!regionData.payment_providers) return [3 /*break*/, 6];
                        _b = region;
                        return [4 /*yield*/, (0, utils_2.promiseAll)(regionData.payment_providers.map(function (pId) { return __awaiter(_this, void 0, void 0, function () {
                                var pp;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, ppRepository.findOne({ where: { id: pId } })];
                                        case 1:
                                            pp = _a.sent();
                                            if (!pp) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Payment provider not found");
                                            }
                                            return [2 /*return*/, pp];
                                    }
                                });
                            }); }))];
                    case 5:
                        _b.payment_providers = _d.sent();
                        _d.label = 6;
                    case 6:
                        if (!regionData.fulfillment_providers) return [3 /*break*/, 8];
                        _c = region;
                        return [4 /*yield*/, (0, utils_2.promiseAll)(regionData.fulfillment_providers.map(function (fId) { return __awaiter(_this, void 0, void 0, function () {
                                var fp;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, fpRepository.findOne({ where: { id: fId } })];
                                        case 1:
                                            fp = _a.sent();
                                            if (!fp) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Fulfillment provider not found");
                                            }
                                            return [2 /*return*/, fp];
                                    }
                                });
                            }); }))];
                    case 7:
                        _c.fulfillment_providers = _d.sent();
                        _d.label = 8;
                    case 8: return [2 /*return*/, region];
                }
            });
        });
    };
    /**
     * Validates a tax rate. Will throw if the tax rate is not between 0 and 1.
     *
     * @param taxRate - a number representing the tax rate of the region
     * @throws if the tax rate isn't number between 0-100
     * @return void
     */
    RegionService.prototype.validateTaxRate = function (taxRate) {
        if (taxRate > 100 || taxRate < 0) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "The tax_rate must be between 0 and 1");
        }
    };
    /**
     * Validates a currency code. Will throw if the currency code doesn't exist.
     *
     * @param currencyCode - an ISO currency code
     * @throws if the provided currency code is invalid
     * @return void
     */
    RegionService.prototype.validateCurrency = function (currencyCode) {
        return __awaiter(this, void 0, void 0, function () {
            var store, storeCurrencies;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storeService_
                            .withTransaction(this.transactionManager_)
                            .retrieve({ relations: ["currencies"] })];
                    case 1:
                        store = _a.sent();
                        storeCurrencies = store.currencies.map(function (curr) { return curr.code; });
                        if (!storeCurrencies.includes(currencyCode.toLowerCase())) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Invalid currency code");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Validates a country code. Will normalize the code before checking for
     * existence.
     *
     * @param code - a 2 digit alphanumeric ISO country code
     * @param regionId - the id of the current region to check against
     * @return the validated Country
     */
    RegionService.prototype.validateCountry = function (code, regionId) {
        return __awaiter(this, void 0, void 0, function () {
            var countryRepository, countryCode, isCountryExists, country;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        countryRepository = this.activeManager_.withRepository(this.countryRepository_);
                        countryCode = code.toUpperCase();
                        isCountryExists = countries_1.countries.some(function (country) { return country.alpha2 === countryCode; });
                        if (!isCountryExists) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Invalid country code");
                        }
                        return [4 /*yield*/, countryRepository.findOne({
                                where: {
                                    iso_2: code.toLowerCase(),
                                },
                            })];
                    case 1:
                        country = _a.sent();
                        if (!country) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Country with code ".concat(code, " not found"));
                        }
                        if (country.region_id && country.region_id !== regionId) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.DUPLICATE_ERROR, "".concat(country.display_name, " already exists in region ").concat(country.region_id));
                        }
                        return [2 /*return*/, country];
                }
            });
        });
    };
    /**
     * Retrieve a region by country code.
     *
     * @param code - a 2 digit alphanumeric ISO country code
     * @param config - region find config
     * @return a Region with country code
     */
    RegionService.prototype.retrieveByCountryCode = function (code, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var countryRepository, query, country;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        countryRepository = this.activeManager_.withRepository(this.countryRepository_);
                        query = (0, utils_1.buildQuery)({ iso_2: code.toLowerCase() }, {});
                        return [4 /*yield*/, countryRepository.findOne(query)];
                    case 1:
                        country = _a.sent();
                        if (!country) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Country with code ".concat(code, " not found"));
                        }
                        if (!country.region_id) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Country does not belong to a region");
                        }
                        return [4 /*yield*/, this.retrieve(country.region_id, config)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves a region by name.
     *
     * @param name - the name of the region to retrieve
     * @return region with the matching name
     */
    RegionService.prototype.retrieveByName = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, region;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.list({ name: name }, { take: 1 })];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), region = _a[0];
                        if (!region) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Region \"".concat(name, "\" was not found"));
                        }
                        return [2 /*return*/, region];
                }
            });
        });
    };
    /**
     * Retrieves a region by its id.
     *
     * @param regionId - the id of the region to retrieve
     * @param config - configuration settings
     * @return the region
     */
    RegionService.prototype.retrieve = function (regionId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var regionRepository, query, region;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(regionId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"regionId\" must be defined");
                        }
                        regionRepository = this.activeManager_.withRepository(this.regionRepository_);
                        query = (0, utils_1.buildQuery)({ id: regionId }, config);
                        return [4 /*yield*/, regionRepository.findOne(query)];
                    case 1:
                        region = _a.sent();
                        if (!region) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Region with ".concat(regionId, " was not found"));
                        }
                        return [2 /*return*/, region];
                }
            });
        });
    };
    /**
     * Lists all regions based on a query
     *
     * @param {object} selector - query object for find
     * @param {object} config - configuration settings
     * @return {Promise} result of the find operation
     */
    RegionService.prototype.list = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = {
            relations: [],
            skip: 0,
            take: 10,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, regions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.listAndCount(selector, config)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), regions = _a[0];
                        return [2 /*return*/, regions];
                }
            });
        });
    };
    /**
     * Lists all regions based on a query and returns them along with count
     *
     * @param {object} selector - query object for find
     * @param {object} config - configuration settings
     * @return {Promise} result of the find operation
     */
    RegionService.prototype.listAndCount = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = {
            relations: [],
            skip: 0,
            take: 10,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var regionRepo, q, query, where;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        regionRepo = this.activeManager_.withRepository(this.regionRepository_);
                        if (selector.q) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_1.buildQuery)(selector, config);
                        if (q) {
                            where = query.where;
                            delete where.name;
                            query.where = [
                                __assign(__assign({}, where), { name: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                            ];
                        }
                        return [4 /*yield*/, regionRepo.findAndCount(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes a region.
     *
     * @param regionId - the region to delete
     * @return the result of the delete operation
     */
    RegionService.prototype.delete = function (regionId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var regionRepo, countryRepo, region;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        regionRepo = manager.withRepository(this.regionRepository_);
                                        countryRepo = manager.withRepository(this.countryRepository_);
                                        return [4 /*yield*/, this.retrieve(regionId, { relations: ["countries"] })];
                                    case 1:
                                        region = _a.sent();
                                        if (!region) {
                                            return [2 /*return*/, Promise.resolve()];
                                        }
                                        return [4 /*yield*/, regionRepo.softRemove(region)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, countryRepo.update({ region_id: region.id }, { region_id: null })];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(RegionService.Events.DELETED, {
                                                id: regionId,
                                            })];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/, Promise.resolve()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds a country to the region.
     *
     * @param regionId - the region to add a country to
     * @param code - a 2 digit alphanumeric ISO country code.
     * @return the updated Region
     */
    RegionService.prototype.addCountry = function (regionId, code) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var regionRepo, country, region, updated;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        regionRepo = manager.withRepository(this.regionRepository_);
                                        return [4 /*yield*/, this.validateCountry(code, regionId)];
                                    case 1:
                                        country = _a.sent();
                                        return [4 /*yield*/, this.retrieve(regionId, { relations: ["countries"] })
                                            // Check if region already has country
                                        ];
                                    case 2:
                                        region = _a.sent();
                                        // Check if region already has country
                                        if (region.countries &&
                                            region.countries.map(function (c) { return c.iso_2; }).includes(country.iso_2)) {
                                            return [2 /*return*/, region];
                                        }
                                        region.countries = __spreadArray(__spreadArray([], __read((region.countries || [])), false), [country], false);
                                        return [4 /*yield*/, regionRepo.save(region)];
                                    case 3:
                                        updated = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(RegionService.Events.UPDATED, {
                                                id: updated.id,
                                                fields: ["countries"],
                                            })];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/, updated];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes a country from a Region.
     *
     * @param regionId - the region to remove from
     * @param code - a 2 digit alphanumeric ISO country code to remove
     * @return the updated Region
     */
    RegionService.prototype.removeCountry = function (regionId, code) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var regionRepo, region, updated;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        regionRepo = manager.withRepository(this.regionRepository_);
                                        return [4 /*yield*/, this.retrieve(regionId, { relations: ["countries"] })
                                            // Check if region contains country. If not, we simpy resolve
                                        ];
                                    case 1:
                                        region = _a.sent();
                                        // Check if region contains country. If not, we simpy resolve
                                        if (region.countries &&
                                            !region.countries.map(function (c) { return c.iso_2; }).includes(code)) {
                                            return [2 /*return*/, region];
                                        }
                                        region.countries = region.countries.filter(function (country) { return country.iso_2 !== code; });
                                        return [4 /*yield*/, regionRepo.save(region)];
                                    case 2:
                                        updated = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(RegionService.Events.UPDATED, {
                                                id: updated.id,
                                                fields: ["countries"],
                                            })];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/, updated];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds a payment provider that is available in the region. Fails if the
     * provider doesn't exist.
     *
     * @param regionId - the region to add the provider to
     * @param providerId - the provider to add to the region
     * @return the updated Region
     */
    RegionService.prototype.addPaymentProvider = function (regionId, providerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var regionRepo, ppRepo, region, pp, updated;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        regionRepo = manager.withRepository(this.regionRepository_);
                                        ppRepo = manager.withRepository(this.paymentProviderRepository_);
                                        return [4 /*yield*/, this.retrieve(regionId, {
                                                relations: ["payment_providers"],
                                            })
                                            // Check if region already has payment provider
                                        ];
                                    case 1:
                                        region = _a.sent();
                                        // Check if region already has payment provider
                                        if (region.payment_providers.find(function (_a) {
                                            var id = _a.id;
                                            return id === providerId;
                                        })) {
                                            return [2 /*return*/, region];
                                        }
                                        return [4 /*yield*/, ppRepo.findOne({ where: { id: providerId } })];
                                    case 2:
                                        pp = _a.sent();
                                        if (!pp) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Payment provider ".concat(providerId, " was not found"));
                                        }
                                        region.payment_providers = __spreadArray(__spreadArray([], __read(region.payment_providers), false), [pp], false);
                                        return [4 /*yield*/, regionRepo.save(region)];
                                    case 3:
                                        updated = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(RegionService.Events.UPDATED, {
                                                id: updated.id,
                                                fields: ["payment_providers"],
                                            })];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/, updated];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds a fulfillment provider that is available in the region. Fails if the
     * provider doesn't exist.
     *
     * @param regionId - the region to add the provider to
     * @param providerId - the provider to add to the region
     * @return the updated Region
     */
    RegionService.prototype.addFulfillmentProvider = function (regionId, providerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var regionRepo, fpRepo, region, fp, updated;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        regionRepo = manager.withRepository(this.regionRepository_);
                                        fpRepo = manager.withRepository(this.fulfillmentProviderRepository_);
                                        return [4 /*yield*/, this.retrieve(regionId, {
                                                relations: ["fulfillment_providers"],
                                            })
                                            // Check if region already has payment provider
                                        ];
                                    case 1:
                                        region = _a.sent();
                                        // Check if region already has payment provider
                                        if (region.fulfillment_providers.find(function (_a) {
                                            var id = _a.id;
                                            return id === providerId;
                                        })) {
                                            return [2 /*return*/, Promise.resolve(region)];
                                        }
                                        return [4 /*yield*/, fpRepo.findOne({ where: { id: providerId } })];
                                    case 2:
                                        fp = _a.sent();
                                        if (!fp) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Fulfillment provider ".concat(providerId, " was not found"));
                                        }
                                        region.fulfillment_providers = __spreadArray(__spreadArray([], __read(region.fulfillment_providers), false), [fp], false);
                                        return [4 /*yield*/, regionRepo.save(region)];
                                    case 3:
                                        updated = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(RegionService.Events.UPDATED, {
                                                id: updated.id,
                                                fields: ["fulfillment_providers"],
                                            })];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/, updated];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes a payment provider from a region. Is idempotent.
     *
     * @param regionId - the region to remove the provider from
     * @param providerId - the provider to remove from the region
     * @return the updated Region
     */
    RegionService.prototype.removePaymentProvider = function (regionId, providerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var regionRepo, region, updated;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        regionRepo = manager.withRepository(this.regionRepository_);
                                        return [4 /*yield*/, this.retrieve(regionId, {
                                                relations: ["payment_providers"],
                                            })
                                            // Check if region already has payment provider
                                        ];
                                    case 1:
                                        region = _a.sent();
                                        // Check if region already has payment provider
                                        if (!region.payment_providers.find(function (_a) {
                                            var id = _a.id;
                                            return id === providerId;
                                        })) {
                                            return [2 /*return*/, Promise.resolve(region)];
                                        }
                                        region.payment_providers = region.payment_providers.filter(function (_a) {
                                            var id = _a.id;
                                            return id !== providerId;
                                        });
                                        return [4 /*yield*/, regionRepo.save(region)];
                                    case 2:
                                        updated = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(RegionService.Events.UPDATED, {
                                                id: updated.id,
                                                fields: ["payment_providers"],
                                            })];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/, updated];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes a fulfillment provider from a region. Is idempotent.
     *
     * @param regionId - the region to remove the provider from
     * @param providerId - the provider to remove from the region
     * @return the updated Region
     */
    RegionService.prototype.removeFulfillmentProvider = function (regionId, providerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var regionRepo, region, updated;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        regionRepo = manager.withRepository(this.regionRepository_);
                                        return [4 /*yield*/, this.retrieve(regionId, {
                                                relations: ["fulfillment_providers"],
                                            })
                                            // Check if region already has payment provider
                                        ];
                                    case 1:
                                        region = _a.sent();
                                        // Check if region already has payment provider
                                        if (!region.fulfillment_providers.find(function (_a) {
                                            var id = _a.id;
                                            return id === providerId;
                                        })) {
                                            return [2 /*return*/, Promise.resolve(region)];
                                        }
                                        region.fulfillment_providers = region.fulfillment_providers.filter(function (_a) {
                                            var id = _a.id;
                                            return id !== providerId;
                                        });
                                        return [4 /*yield*/, regionRepo.save(region)];
                                    case 2:
                                        updated = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(RegionService.Events.UPDATED, {
                                                id: updated.id,
                                                fields: ["fulfillment_providers"],
                                            })];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/, updated];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RegionService.Events = {
        UPDATED: "region.updated",
        CREATED: "region.created",
        DELETED: "region.deleted",
    };
    return RegionService;
}(interfaces_1.TransactionBaseService));
exports.default = RegionService;
//# sourceMappingURL=region.js.map