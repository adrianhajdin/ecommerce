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
var utils_1 = require("@medusajs/utils");
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
/**
 * Helps retrieve fulfillment providers
 */
var FulfillmentProviderService = /** @class */ (function (_super) {
    __extends(FulfillmentProviderService, _super);
    function FulfillmentProviderService(container) {
        var _this = _super.call(this, container) || this;
        var fulfillmentProviderRepository = container.fulfillmentProviderRepository;
        _this.container_ = container;
        _this.fulfillmentProviderRepository_ = fulfillmentProviderRepository;
        return _this;
    }
    FulfillmentProviderService.prototype.registerInstalledProviders = function (providers) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var fulfillmentProviderRepo, providers_1, providers_1_1, p, n, e_1_1;
                            var e_1, _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        fulfillmentProviderRepo = manager.withRepository(this.fulfillmentProviderRepository_);
                                        return [4 /*yield*/, fulfillmentProviderRepo.update({}, { is_installed: false })];
                                    case 1:
                                        _b.sent();
                                        _b.label = 2;
                                    case 2:
                                        _b.trys.push([2, 7, 8, 9]);
                                        providers_1 = __values(providers), providers_1_1 = providers_1.next();
                                        _b.label = 3;
                                    case 3:
                                        if (!!providers_1_1.done) return [3 /*break*/, 6];
                                        p = providers_1_1.value;
                                        n = fulfillmentProviderRepo.create({ id: p, is_installed: true });
                                        return [4 /*yield*/, fulfillmentProviderRepo.save(n)];
                                    case 4:
                                        _b.sent();
                                        _b.label = 5;
                                    case 5:
                                        providers_1_1 = providers_1.next();
                                        return [3 /*break*/, 3];
                                    case 6: return [3 /*break*/, 9];
                                    case 7:
                                        e_1_1 = _b.sent();
                                        e_1 = { error: e_1_1 };
                                        return [3 /*break*/, 9];
                                    case 8:
                                        try {
                                            if (providers_1_1 && !providers_1_1.done && (_a = providers_1.return)) _a.call(providers_1);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                        return [7 /*endfinally*/];
                                    case 9: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FulfillmentProviderService.prototype.list = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fpRepo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fpRepo = this.activeManager_.withRepository(this.fulfillmentProviderRepository_);
                        return [4 /*yield*/, fpRepo.find({})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    FulfillmentProviderService.prototype.listFulfillmentOptions = function (providerIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, utils_1.promiseAll)(providerIds.map(function (p) { return __awaiter(_this, void 0, void 0, function () {
                            var provider;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        provider = this.retrieveProvider(p);
                                        _a = {
                                            provider_id: p
                                        };
                                        return [4 /*yield*/, provider.getFulfillmentOptions()];
                                    case 1: return [2 /*return*/, (_a.options = (_b.sent()),
                                            _a)];
                                }
                            });
                        }); }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param providerId - the provider id
     * @return the payment fulfillment provider
     */
    FulfillmentProviderService.prototype.retrieveProvider = function (providerId) {
        try {
            return this.container_["fp_".concat(providerId)];
        }
        catch (err) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Could not find a fulfillment provider with id: ".concat(providerId));
        }
    };
    FulfillmentProviderService.prototype.createFulfillment = function (method, items, order, fulfillment) {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                provider = this.retrieveProvider(method.shipping_option.provider_id);
                return [2 /*return*/, provider.createFulfillment(method.data, items, order, fulfillment)];
            });
        });
    };
    FulfillmentProviderService.prototype.canCalculate = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                provider = this.retrieveProvider(option.provider_id);
                return [2 /*return*/, provider.canCalculate(option.data)];
            });
        });
    };
    FulfillmentProviderService.prototype.validateFulfillmentData = function (option, data, cart) {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                provider = this.retrieveProvider(option.provider_id);
                return [2 /*return*/, provider.validateFulfillmentData(option.data, data, cart)];
            });
        });
    };
    FulfillmentProviderService.prototype.cancelFulfillment = function (fulfillment) {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                provider = this.retrieveProvider(fulfillment.provider_id);
                return [2 /*return*/, provider.cancelFulfillment(fulfillment.data)];
            });
        });
    };
    FulfillmentProviderService.prototype.calculatePrice = function (option, data, cart) {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        provider = this.retrieveProvider(option.provider_id);
                        return [4 /*yield*/, provider.calculatePrice(option.data, data, cart)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    FulfillmentProviderService.prototype.validateOption = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                provider = this.retrieveProvider(option.provider_id);
                return [2 /*return*/, provider.validateOption(option.data)];
            });
        });
    };
    FulfillmentProviderService.prototype.createReturn = function (returnOrder) {
        return __awaiter(this, void 0, void 0, function () {
            var option, provider;
            return __generator(this, function (_a) {
                option = returnOrder.shipping_method.shipping_option;
                provider = this.retrieveProvider(option.provider_id);
                return [2 /*return*/, provider.createReturn(returnOrder)];
            });
        });
    };
    /**
     * Fetches documents from the fulfillment provider
     * @param providerId - the id of the provider
     * @param fulfillmentData - the data relating to the fulfillment
     * @param documentType - the typ of
     * @returns document to fetch
     */
    // TODO: consider removal in favor of "getReturnDocuments" and "getShipmentDocuments"
    FulfillmentProviderService.prototype.retrieveDocuments = function (providerId, fulfillmentData, documentType) {
        return __awaiter(this, void 0, void 0, function () {
            var provider;
            return __generator(this, function (_a) {
                provider = this.retrieveProvider(providerId);
                return [2 /*return*/, provider.retrieveDocuments(fulfillmentData, documentType)];
            });
        });
    };
    return FulfillmentProviderService;
}(interfaces_1.TransactionBaseService));
exports.default = FulfillmentProviderService;
//# sourceMappingURL=fulfillment-provider.js.map