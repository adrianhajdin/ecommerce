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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var randomatic_1 = __importDefault(require("randomatic"));
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var utils_2 = require("@medusajs/utils");
/**
 * Provides layer to manipulate gift cards.
 */
var GiftCardService = /** @class */ (function (_super) {
    __extends(GiftCardService, _super);
    function GiftCardService(_a) {
        var giftCardRepository = _a.giftCardRepository, giftCardTransactionRepository = _a.giftCardTransactionRepository, regionService = _a.regionService, eventBusService = _a.eventBusService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.giftCardRepository_ = giftCardRepository;
        _this.giftCardTransactionRepo_ = giftCardTransactionRepository;
        _this.regionService_ = regionService;
        _this.eventBus_ = eventBusService;
        return _this;
    }
    /**
     * Generates a 16 character gift card code
     * @return the generated gift card code
     */
    GiftCardService.generateCode = function () {
        var code = [
            (0, randomatic_1.default)("A0", 4),
            (0, randomatic_1.default)("A0", 4),
            (0, randomatic_1.default)("A0", 4),
            (0, randomatic_1.default)("A0", 4),
        ].join("-");
        return code;
    };
    /**
     * @param selector - the query object for find
     * @param config - the configuration used to find the objects. contains relations, skip, and take.
     * @return the result of the find operation
     */
    GiftCardService.prototype.listAndCount = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { relations: [], skip: 0, take: 10 }; }
        return __awaiter(this, void 0, void 0, function () {
            var giftCardRepo, q, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        giftCardRepo = this.activeManager_.withRepository(this.giftCardRepository_);
                        if ((0, medusa_core_utils_1.isDefined)(selector.q)) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_1.buildQuery)(selector, config);
                        return [4 /*yield*/, giftCardRepo.listGiftCardsAndCount(query, q)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param selector - the query object for find
     * @param config - the configuration used to find the objects. contains relations, skip, and take.
     * @return the result of the find operation
     */
    GiftCardService.prototype.list = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { relations: [], skip: 0, take: 10 }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, cards;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.listAndCount(selector, config)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), cards = _a[0];
                        return [2 /*return*/, cards];
                }
            });
        });
    };
    GiftCardService.prototype.createTransaction = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var gctRepo, created, saved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gctRepo = this.activeManager_.withRepository(this.giftCardTransactionRepo_);
                        created = gctRepo.create(data);
                        return [4 /*yield*/, gctRepo.save(created)];
                    case 1:
                        saved = _a.sent();
                        return [2 /*return*/, saved.id];
                }
            });
        });
    };
    /**
     * Creates a gift card with provided data given that the data is validated.
     * @param giftCard - the gift card data to create
     * @return the result of the create operation
     */
    GiftCardService.prototype.create = function (giftCard) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var giftCardRepo, region, code, taxRate, toCreate, created, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        giftCardRepo = manager.withRepository(this.giftCardRepository_);
                                        return [4 /*yield*/, this.regionService_
                                                .withTransaction(manager)
                                                .retrieve(giftCard.region_id)];
                                    case 1:
                                        region = _a.sent();
                                        code = GiftCardService.generateCode();
                                        taxRate = GiftCardService.resolveTaxRate(giftCard.tax_rate || null, region);
                                        toCreate = __assign(__assign({ code: code }, giftCard), { region_id: region.id, tax_rate: taxRate });
                                        created = giftCardRepo.create(toCreate);
                                        return [4 /*yield*/, giftCardRepo.save(created)];
                                    case 2:
                                        result = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(GiftCardService.Events.CREATED, {
                                                id: result.id,
                                            })];
                                    case 3:
                                        _a.sent();
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
     * The tax_rate of the giftcard can depend on whether regions tax gift cards, an input
     * provided by the user or the tax rate. Based on these conditions, tax_rate changes.
     * @return the tax rate for the gift card
     */
    GiftCardService.resolveTaxRate = function (giftCardTaxRate, region) {
        // A gift card is always associated with a region. If the region doesn't tax gift cards,
        // return null
        if (!region.gift_cards_taxable) {
            return null;
        }
        // If a tax rate has been provided as an input from an external input, use that
        // This would handle cases where gift cards are created as a part of an order where taxes better defined
        // or to handle usecases outside of the opinions of the core.
        if (giftCardTaxRate) {
            return giftCardTaxRate;
        }
        // Outside the context of the taxRate input, it picks up the tax rate directly from the region
        return region.tax_rate || null;
    };
    GiftCardService.prototype.retrieve_ = function (selector, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var giftCardRepo, query, giftCard, selectorConstraints;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        giftCardRepo = this.activeManager_.withRepository(this.giftCardRepository_);
                        query = (0, utils_1.buildQuery)(selector, config);
                        query.relationLoadStrategy = "query";
                        return [4 /*yield*/, giftCardRepo.findOne(query)];
                    case 1:
                        giftCard = _a.sent();
                        if (!giftCard) {
                            selectorConstraints = (0, utils_2.selectorConstraintsToString)(selector);
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Gift card with ".concat(selectorConstraints, " was not found"));
                        }
                        return [2 /*return*/, giftCard];
                }
            });
        });
    };
    /**
     * Gets a gift card by id.
     * @param giftCardId - id of gift card to retrieve
     * @param config - optional values to include with gift card query
     * @return the gift card
     */
    GiftCardService.prototype.retrieve = function (giftCardId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(giftCardId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"giftCardId\" must be defined");
                        }
                        return [4 /*yield*/, this.retrieve_({ id: giftCardId }, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GiftCardService.prototype.retrieveByCode = function (code, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(code)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"code\" must be defined");
                        }
                        return [4 /*yield*/, this.retrieve_({ code: code }, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a giftCard.
     * @param giftCardId - giftCard id of giftCard to update
     * @param update - the data to update the giftCard with
     * @return the result of the update operation
     */
    GiftCardService.prototype.update = function (giftCardId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var giftCardRepo, giftCard, region_id, metadata, balance, rest, region, _a, _b, _c, key, value;
                            var e_1, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        giftCardRepo = manager.withRepository(this.giftCardRepository_);
                                        return [4 /*yield*/, this.retrieve(giftCardId)];
                                    case 1:
                                        giftCard = _e.sent();
                                        region_id = update.region_id, metadata = update.metadata, balance = update.balance, rest = __rest(update, ["region_id", "metadata", "balance"]);
                                        if (!(region_id && region_id !== giftCard.region_id)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.regionService_
                                                .withTransaction(manager)
                                                .retrieve(region_id)];
                                    case 2:
                                        region = _e.sent();
                                        giftCard.region_id = region.id;
                                        _e.label = 3;
                                    case 3:
                                        if (metadata) {
                                            giftCard.metadata = (0, utils_1.setMetadata)(giftCard, metadata);
                                        }
                                        if ((0, medusa_core_utils_1.isDefined)(balance)) {
                                            if (balance < 0 || giftCard.value < balance) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_ARGUMENT, "new balance is invalid");
                                            }
                                            giftCard.balance = balance;
                                        }
                                        try {
                                            for (_a = __values(Object.entries(rest)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                                                giftCard[key] = value;
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [4 /*yield*/, giftCardRepo.save(giftCard)];
                                    case 4: return [2 /*return*/, _e.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes a gift card idempotently
     * @param giftCardId - id of gift card to delete
     * @return the result of the delete operation
     */
    GiftCardService.prototype.delete = function (giftCardId) {
        return __awaiter(this, void 0, void 0, function () {
            var giftCardRepo, giftCard;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        giftCardRepo = this.activeManager_.withRepository(this.giftCardRepository_);
                        return [4 /*yield*/, giftCardRepo.findOne({ where: { id: giftCardId } })];
                    case 1:
                        giftCard = _a.sent();
                        if (!giftCard) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, giftCardRepo.softRemove(giftCard)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GiftCardService.Events = {
        CREATED: "gift_card.created",
    };
    return GiftCardService;
}(interfaces_1.TransactionBaseService));
exports.default = GiftCardService;
//# sourceMappingURL=gift-card.js.map