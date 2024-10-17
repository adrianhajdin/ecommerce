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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var utils_1 = require("../utils");
var CurrencyService = /** @class */ (function (_super) {
    __extends(CurrencyService, _super);
    function CurrencyService(_a) {
        var currencyRepository = _a.currencyRepository, eventBusService = _a.eventBusService, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.currencyRepository_ = currencyRepository;
        _this.eventBusService_ = eventBusService;
        _this.featureFlagRouter_ = featureFlagRouter;
        return _this;
    }
    /**
     * Return the currency
     * @param code - The code of the currency that must be retrieve
     * @return The currency
     */
    CurrencyService.prototype.retrieveByCode = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var currencyRepo, currency;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currencyRepo = this.activeManager_.withRepository(this.currencyRepository_);
                        code = code.toLowerCase();
                        return [4 /*yield*/, currencyRepo.findOne({
                                where: { code: code },
                            })];
                    case 1:
                        currency = _a.sent();
                        if (!currency) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Currency with code: ".concat(code, " was not found"));
                        }
                        return [2 /*return*/, currency];
                }
            });
        });
    };
    /**
     * Lists currencies based on the provided parameters and includes the count of
     * currencies that match the query.
     * @param selector - an object that defines rules to filter currencies
     *   by
     * @param config - object that defines the scope for what should be
     *   returned
     * @return an array containing the currencies as
     *   the first element and the total count of products that matches the query
     *   as the second element.
     */
    CurrencyService.prototype.listAndCount = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 20,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var productRepo, q, query, where;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productRepo = this.activeManager_.withRepository(this.currencyRepository_);
                        if (selector.q) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_1.buildQuery)(selector, config);
                        if (q) {
                            where = query.where;
                            delete where.code;
                            delete where.name;
                            query.where = [
                                __assign(__assign({}, where), { code: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                                __assign(__assign({}, where), { name: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                            ];
                        }
                        return [4 /*yield*/, productRepo.findAndCount(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update a currency
     * @param code - The code of the currency to update
     * @param data - The data that must be updated on the currency
     * @return The updated currency
     */
    CurrencyService.prototype.update = function (code, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var currency, currencyRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieveByCode(code)];
                                    case 1:
                                        currency = _a.sent();
                                        if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
                                            if (typeof data.includes_tax !== "undefined") {
                                                currency.includes_tax = data.includes_tax;
                                            }
                                        }
                                        currencyRepo = transactionManager.withRepository(this.currencyRepository_);
                                        return [4 /*yield*/, currencyRepo.save(currency)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(transactionManager)
                                                .emit(CurrencyService.Events.UPDATED, {
                                                code: code,
                                            })];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/, currency];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CurrencyService.Events = {
        UPDATED: "currency.updated",
    };
    return CurrencyService;
}(interfaces_1.TransactionBaseService));
exports.default = CurrencyService;
//# sourceMappingURL=currency.js.map