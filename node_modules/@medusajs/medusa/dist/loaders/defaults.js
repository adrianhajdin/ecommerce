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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@medusajs/utils");
var interfaces_1 = require("../interfaces");
var countries_1 = require("../utils/countries");
var currencies_1 = require("../utils/currencies");
var sales_channels_1 = __importDefault(require("./feature-flags/sales-channels"));
var silentResolution = function (container, name, logger) {
    try {
        return container.resolve(name);
    }
    catch (err) {
        if (err.name !== "AwilixResolutionError") {
            throw err;
        }
        else {
            var identifier = void 0;
            switch (name) {
                case "paymentProviders":
                    identifier = "payment";
                    break;
                case "notificationProviders":
                    identifier = "notification";
                    break;
                case "fulfillmentProviders":
                    identifier = "fulfillment";
                    break;
                default:
                    identifier = name;
            }
            logger.warn("You don't have any ".concat(identifier, " provider plugins installed. You may want to add one to your project."));
        }
        return;
    }
};
exports.default = (function (_a) {
    var container = _a.container;
    return __awaiter(void 0, void 0, void 0, function () {
        var storeService, currencyRepository, countryRepository, profileService, salesChannelService, logger, featureFlagRouter, entityManager;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    storeService = container.resolve("storeService");
                    currencyRepository = container.resolve("currencyRepository");
                    countryRepository = container.resolve("countryRepository");
                    profileService = container.resolve("shippingProfileService");
                    salesChannelService = container.resolve("salesChannelService");
                    logger = container.resolve("logger");
                    featureFlagRouter = container.resolve("featureFlagRouter");
                    entityManager = container.resolve("manager");
                    return [4 /*yield*/, entityManager.transaction(function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                            var countryRepo, hasCountries, countries_2, countries_2_1, c, query, iso2, iso3, numeric, name_1, display, e_1_1;
                            var e_1, _a;
                            var _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        countryRepo = manager.withRepository(countryRepository);
                                        return [4 /*yield*/, countryRepo.count()];
                                    case 1:
                                        hasCountries = !!(_c.sent());
                                        if (!!hasCountries) return [3 /*break*/, 9];
                                        _c.label = 2;
                                    case 2:
                                        _c.trys.push([2, 7, 8, 9]);
                                        countries_2 = __values(countries_1.countries), countries_2_1 = countries_2.next();
                                        _c.label = 3;
                                    case 3:
                                        if (!!countries_2_1.done) return [3 /*break*/, 6];
                                        c = countries_2_1.value;
                                        query = "INSERT INTO \"country\" (\"iso_2\", \"iso_3\", \"num_code\", \"name\", \"display_name\")\n                       VALUES ($1, $2, $3, $4, $5)";
                                        iso2 = c.alpha2.toLowerCase();
                                        iso3 = c.alpha3.toLowerCase();
                                        numeric = c.numeric;
                                        name_1 = c.name.toUpperCase();
                                        display = c.name;
                                        return [4 /*yield*/, ((_b = manager.queryRunner) === null || _b === void 0 ? void 0 : _b.query(query, [
                                                iso2,
                                                iso3,
                                                numeric,
                                                name_1,
                                                display,
                                            ]))];
                                    case 4:
                                        _c.sent();
                                        _c.label = 5;
                                    case 5:
                                        countries_2_1 = countries_2.next();
                                        return [3 /*break*/, 3];
                                    case 6: return [3 /*break*/, 9];
                                    case 7:
                                        e_1_1 = _c.sent();
                                        e_1 = { error: e_1_1 };
                                        return [3 /*break*/, 9];
                                    case 8:
                                        try {
                                            if (countries_2_1 && !countries_2_1.done && (_a = countries_2.return)) _a.call(countries_2);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                        return [7 /*endfinally*/];
                                    case 9: return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, entityManager.transaction(function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                            var currencyRepo, hasCurrencies, _a, _b, _c, c, query, code, sym, nat, name_2, e_2_1;
                            var e_2, _d;
                            var _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        currencyRepo = manager.withRepository(currencyRepository);
                                        return [4 /*yield*/, currencyRepo.count()];
                                    case 1:
                                        hasCurrencies = !!(_f.sent());
                                        if (!!hasCurrencies) return [3 /*break*/, 9];
                                        _f.label = 2;
                                    case 2:
                                        _f.trys.push([2, 7, 8, 9]);
                                        _a = __values(Object.entries(currencies_1.currencies)), _b = _a.next();
                                        _f.label = 3;
                                    case 3:
                                        if (!!_b.done) return [3 /*break*/, 6];
                                        _c = __read(_b.value, 2), c = _c[1];
                                        query = "INSERT INTO \"currency\" (\"code\", \"symbol\", \"symbol_native\", \"name\")\n                       VALUES ($1, $2, $3, $4)";
                                        code = c.code.toLowerCase();
                                        sym = c.symbol;
                                        nat = c.symbol_native;
                                        name_2 = c.name;
                                        return [4 /*yield*/, ((_e = manager.queryRunner) === null || _e === void 0 ? void 0 : _e.query(query, [code, sym, nat, name_2]))];
                                    case 4:
                                        _f.sent();
                                        _f.label = 5;
                                    case 5:
                                        _b = _a.next();
                                        return [3 /*break*/, 3];
                                    case 6: return [3 /*break*/, 9];
                                    case 7:
                                        e_2_1 = _f.sent();
                                        e_2 = { error: e_2_1 };
                                        return [3 /*break*/, 9];
                                    case 8:
                                        try {
                                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                        return [7 /*endfinally*/];
                                    case 9: return [2 /*return*/];
                                }
                            });
                        }); })];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, entityManager.transaction(function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                            var profileServiceTx, context;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, storeService.withTransaction(manager).create()];
                                    case 1:
                                        _a.sent();
                                        profileServiceTx = profileService.withTransaction(manager);
                                        context = { container: container, manager: manager, logger: logger };
                                        return [4 /*yield*/, (0, utils_1.promiseAll)([
                                                registerPaymentProvider(context),
                                                registerPaymentProcessor(context),
                                                registerNotificationProvider(context),
                                                registerFulfillmentProvider(context),
                                                registerTaxProvider(context),
                                                profileServiceTx.createDefault(),
                                                profileServiceTx.createGiftCardDefault(),
                                                (function () { return __awaiter(void 0, void 0, void 0, function () {
                                                    var isSalesChannelEnabled;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                isSalesChannelEnabled = featureFlagRouter.isFeatureEnabled(sales_channels_1.default.key);
                                                                if (!isSalesChannelEnabled) return [3 /*break*/, 2];
                                                                return [4 /*yield*/, salesChannelService
                                                                        .withTransaction(manager)
                                                                        .createDefault()];
                                                            case 1: return [2 /*return*/, _a.sent()];
                                                            case 2: return [2 /*return*/];
                                                        }
                                                    });
                                                }); })(),
                                            ])];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
});
function registerPaymentProvider(_a) {
    var manager = _a.manager, container = _a.container, logger = _a.logger;
    return __awaiter(this, void 0, void 0, function () {
        var payProviders, payIds, pProviderService;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    payProviders = (silentResolution(container, "paymentProviders", logger) || []).filter(function (provider) { return !(provider instanceof interfaces_1.AbstractPaymentProcessor); });
                    payIds = payProviders.map(function (paymentProvider) {
                        return paymentProvider.getIdentifier();
                    });
                    pProviderService = container.resolve("paymentProviderService");
                    return [4 /*yield*/, pProviderService
                            .withTransaction(manager)
                            .registerInstalledProviders(payIds)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function registerPaymentProcessor(_a) {
    var manager = _a.manager, container = _a.container, logger = _a.logger;
    return __awaiter(this, void 0, void 0, function () {
        var payProviders, payIds, pProviderService;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    payProviders = (silentResolution(container, "paymentProviders", logger) || []).filter(function (provider) { return provider instanceof interfaces_1.AbstractPaymentProcessor; });
                    payIds = [];
                    payProviders.map(function (paymentProvider) {
                        payIds.push(paymentProvider.getIdentifier());
                    });
                    pProviderService = container.resolve("paymentProviderService");
                    return [4 /*yield*/, pProviderService
                            .withTransaction(manager)
                            .registerInstalledProviders(payIds)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function registerNotificationProvider(_a) {
    var manager = _a.manager, container = _a.container, logger = _a.logger;
    return __awaiter(this, void 0, void 0, function () {
        var notiProviders, notiIds, nProviderService;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    notiProviders = silentResolution(container, "notificationProviders", logger) || [];
                    notiIds = notiProviders.map(function (p) { return p.getIdentifier(); });
                    nProviderService = container.resolve("notificationService");
                    return [4 /*yield*/, nProviderService
                            .withTransaction(manager)
                            .registerInstalledProviders(notiIds)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function registerFulfillmentProvider(_a) {
    var manager = _a.manager, container = _a.container, logger = _a.logger;
    return __awaiter(this, void 0, void 0, function () {
        var fulfilProviders, fulfilIds, fProviderService;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    fulfilProviders = silentResolution(container, "fulfillmentProviders", logger) || [];
                    fulfilIds = fulfilProviders.map(function (p) { return p.getIdentifier(); });
                    fProviderService = container.resolve("fulfillmentProviderService");
                    return [4 /*yield*/, fProviderService
                            .withTransaction(manager)
                            .registerInstalledProviders(fulfilIds)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function registerTaxProvider(_a) {
    var manager = _a.manager, container = _a.container, logger = _a.logger;
    return __awaiter(this, void 0, void 0, function () {
        var taxProviders, taxIds, tProviderService;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    taxProviders = silentResolution(container, "taxProviders", logger) ||
                        [];
                    taxIds = taxProviders.map(function (p) { return p.getIdentifier(); });
                    tProviderService = container.resolve("taxProviderService");
                    return [4 /*yield*/, tProviderService
                            .withTransaction(manager)
                            .registerInstalledProviders(taxIds)];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=defaults.js.map