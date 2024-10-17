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
var utils_1 = require("@medusajs/utils");
var iso8601_duration_1 = require("iso8601-duration");
var lodash_1 = require("lodash");
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var models_1 = require("../models");
var discount_rule_1 = require("../models/discount-rule");
var utils_2 = require("../utils");
var date_helpers_1 = require("../utils/date-helpers");
/**
 * Provides layer to manipulate discounts.
 * @implements {BaseService}
 */
var DiscountService = /** @class */ (function (_super) {
    __extends(DiscountService, _super);
    function DiscountService(_a) {
        var discountRepository = _a.discountRepository, discountRuleRepository = _a.discountRuleRepository, giftCardRepository = _a.giftCardRepository, discountConditionRepository = _a.discountConditionRepository, discountConditionService = _a.discountConditionService, totalsService = _a.totalsService, newTotalsService = _a.newTotalsService, productService = _a.productService, regionService = _a.regionService, customerService = _a.customerService, eventBusService = _a.eventBusService, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.discountRepository_ = discountRepository;
        _this.discountRuleRepository_ = discountRuleRepository;
        _this.giftCardRepository_ = giftCardRepository;
        _this.discountConditionRepository_ = discountConditionRepository;
        _this.discountConditionService_ = discountConditionService;
        _this.totalsService_ = totalsService;
        _this.newTotalsService_ = newTotalsService;
        _this.productService_ = productService;
        _this.regionService_ = regionService;
        _this.customerService_ = customerService;
        _this.eventBus_ = eventBusService;
        _this.featureFlagRouter_ = featureFlagRouter;
        return _this;
    }
    /**
     * Creates a discount rule with provided data given that the data is validated.
     * @param {DiscountRule} discountRule - the discount rule to create
     * @return {Promise} the result of the create operation
     */
    DiscountService.prototype.validateDiscountRule_ = function (discountRule) {
        if (discountRule.type === "percentage" && discountRule.value > 100) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Discount value above 100 is not allowed when type is percentage");
        }
        return discountRule;
    };
    /**
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config object containing query settings
     * @return {Promise} the result of the find operation
     */
    DiscountService.prototype.list = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { relations: [], skip: 0, take: 10 }; }
        return __awaiter(this, void 0, void 0, function () {
            var discountRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        discountRepo = this.activeManager_.withRepository(this.discountRepository_);
                        query = (0, utils_2.buildQuery)(selector, config);
                        return [4 /*yield*/, discountRepo.find(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config object containing query settings
     * @return {Promise} the result of the find operation
     */
    DiscountService.prototype.listAndCount = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = {
            take: 20,
            skip: 0,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var discountRepo, q, query, _a, discounts, count;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        discountRepo = this.activeManager_.withRepository(this.discountRepository_);
                        if ("q" in selector) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_2.buildQuery)(selector, config);
                        if (q) {
                            query.where = query.where;
                            query.where.code = (0, typeorm_1.ILike)("%".concat(q, "%"));
                        }
                        return [4 /*yield*/, discountRepo.findAndCount(query)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), discounts = _a[0], count = _a[1];
                        return [2 /*return*/, [discounts, count]];
                }
            });
        });
    };
    /**
     * Creates a discount with provided data given that the data is validated.
     * Normalizes discount code to uppercase.
     * @param {Discount} discount - the discount data to create
     * @return {Promise} the result of the create operation
     */
    DiscountService.prototype.create = function (discount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var discountRepo, ruleRepo, conditions, ruleToCreate, validatedRule, _a, discountRule, createdDiscountRule, created, result;
                            var _this = this;
                            var _b, _c, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        discountRepo = manager.withRepository(this.discountRepository_);
                                        ruleRepo = manager.withRepository(this.discountRuleRepository_);
                                        conditions = (_b = discount.rule) === null || _b === void 0 ? void 0 : _b.conditions;
                                        ruleToCreate = (0, lodash_1.omit)(discount.rule, ["conditions"]);
                                        validatedRule = this.validateDiscountRule_(ruleToCreate);
                                        if ((discount === null || discount === void 0 ? void 0 : discount.regions) &&
                                            (discount === null || discount === void 0 ? void 0 : discount.regions.length) > 1 &&
                                            ((_c = discount === null || discount === void 0 ? void 0 : discount.rule) === null || _c === void 0 ? void 0 : _c.type) === "fixed") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Fixed discounts can have one region");
                                        }
                                        if (!discount.regions) return [3 /*break*/, 2];
                                        _a = discount;
                                        return [4 /*yield*/, (0, utils_1.promiseAll)(discount.regions.map(function (regionId) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                                return [2 /*return*/, this.regionService_.withTransaction(manager).retrieve(regionId)];
                                            }); }); }))];
                                    case 1:
                                        _a.regions = (_e.sent());
                                        _e.label = 2;
                                    case 2:
                                        if (!((_d = discount.regions) === null || _d === void 0 ? void 0 : _d.length)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Discount must have at least 1 region");
                                        }
                                        discountRule = ruleRepo.create(validatedRule);
                                        return [4 /*yield*/, ruleRepo.save(discountRule)];
                                    case 3:
                                        createdDiscountRule = _e.sent();
                                        created = discountRepo.create(discount);
                                        created.rule = createdDiscountRule;
                                        return [4 /*yield*/, discountRepo.save(created)];
                                    case 4:
                                        result = _e.sent();
                                        if (!(conditions === null || conditions === void 0 ? void 0 : conditions.length)) return [3 /*break*/, 6];
                                        return [4 /*yield*/, (0, utils_1.promiseAll)(conditions.map(function (cond) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.discountConditionService_
                                                                .withTransaction(manager)
                                                                .upsertCondition(__assign({ rule_id: result.rule_id }, cond))];
                                                        case 1:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); }))];
                                    case 5:
                                        _e.sent();
                                        _e.label = 6;
                                    case 6: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(manager)
                                            .emit(DiscountService.Events.CREATED, { id: result.id })];
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
     * Gets a discount by id.
     * @param {string} discountId - id of discount to retrieve
     * @param {Object} config - the config object containing query settings
     * @return {Promise<Discount>} the discount
     */
    DiscountService.prototype.retrieve = function (discountId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var discountRepo, query, discount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(discountId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"discountId\" must be defined");
                        }
                        discountRepo = this.activeManager_.withRepository(this.discountRepository_);
                        query = (0, utils_2.buildQuery)({ id: discountId }, config);
                        return [4 /*yield*/, discountRepo.findOne(query)];
                    case 1:
                        discount = _a.sent();
                        if (!discount) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Discount with id ".concat(discountId, " was not found"));
                        }
                        return [2 /*return*/, discount];
                }
            });
        });
    };
    /**
     * Gets the discount by discount code.
     * @param discountCode - discount code of discount to retrieve
     * @param config - the config object containing query settings
     * @return the discount
     */
    DiscountService.prototype.retrieveByCode = function (discountCode, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var discountRepo, normalizedCode, query, discount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        discountRepo = this.activeManager_.withRepository(this.discountRepository_);
                        normalizedCode = discountCode.toUpperCase().trim();
                        query = (0, utils_2.buildQuery)({ code: normalizedCode }, config);
                        return [4 /*yield*/, discountRepo.findOne(query)];
                    case 1:
                        discount = _a.sent();
                        if (!discount) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Discounts with code ".concat(discountCode, " was not found"));
                        }
                        return [2 /*return*/, discount];
                }
            });
        });
    };
    /**
     * List all the discounts corresponding to the given codes
     * @param discountCodes - discount codes of discounts to retrieve
     * @param config - the config object containing query settings
     * @return the discounts
     */
    DiscountService.prototype.listByCodes = function (discountCodes, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var discountRepo, normalizedCodes, query, discounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        discountRepo = this.activeManager_.withRepository(this.discountRepository_);
                        normalizedCodes = discountCodes.map(function (code) {
                            return code.toUpperCase().trim();
                        });
                        query = (0, utils_2.buildQuery)({ code: (0, typeorm_1.In)(normalizedCodes) }, config);
                        return [4 /*yield*/, discountRepo.find(query)];
                    case 1:
                        discounts = _a.sent();
                        if ((discounts === null || discounts === void 0 ? void 0 : discounts.length) !== discountCodes.length) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Discounts with code [".concat(normalizedCodes.join(", "), "] was not found"));
                        }
                        return [2 /*return*/, discounts];
                }
            });
        });
    };
    /**
     * Updates a discount.
     * @param {string} discountId - discount id of discount to update
     * @param {Discount} update - the data to update the discount with
     * @return {Promise} the result of the update operation
     */
    DiscountService.prototype.update = function (discountId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var discountRepo, ruleRepo, discount, conditions, ruleToUpdate, rule, metadata, regions, rest, _a, ruleUpdate, _b, _c, key;
                            var e_1, _d;
                            var _this = this;
                            var _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        discountRepo = manager.withRepository(this.discountRepository_);
                                        ruleRepo = manager.withRepository(this.discountRuleRepository_);
                                        return [4 /*yield*/, this.retrieve(discountId, {
                                                relations: ["rule"],
                                            })];
                                    case 1:
                                        discount = _f.sent();
                                        conditions = (_e = update === null || update === void 0 ? void 0 : update.rule) === null || _e === void 0 ? void 0 : _e.conditions;
                                        ruleToUpdate = (0, lodash_1.omit)(update.rule, "conditions");
                                        if (!(0, lodash_1.isEmpty)(ruleToUpdate)) {
                                            update.rule = ruleToUpdate;
                                        }
                                        rule = update.rule, metadata = update.metadata, regions = update.regions, rest = __rest(update, ["rule", "metadata", "regions"]);
                                        if (rest.ends_at) {
                                            if (discount.starts_at >= new Date(rest.ends_at)) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "\"ends_at\" must be greater than \"starts_at\"");
                                            }
                                        }
                                        if (regions && (regions === null || regions === void 0 ? void 0 : regions.length) > 1 && discount.rule.type === "fixed") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Fixed discounts can have one region");
                                        }
                                        if (!(conditions === null || conditions === void 0 ? void 0 : conditions.length)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, (0, utils_1.promiseAll)(conditions.map(function (cond) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.discountConditionService_
                                                                .withTransaction(manager)
                                                                .upsertCondition(__assign({ rule_id: discount.rule_id }, cond))];
                                                        case 1:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); }))];
                                    case 2:
                                        _f.sent();
                                        _f.label = 3;
                                    case 3:
                                        if (!regions) return [3 /*break*/, 5];
                                        _a = discount;
                                        return [4 /*yield*/, (0, utils_1.promiseAll)(regions.map(function (regionId) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                                return [2 /*return*/, this.regionService_.retrieve(regionId)];
                                            }); }); }))];
                                    case 4:
                                        _a.regions = _f.sent();
                                        _f.label = 5;
                                    case 5:
                                        if (metadata) {
                                            discount.metadata = (0, utils_2.setMetadata)(discount, metadata);
                                        }
                                        if (rule) {
                                            ruleUpdate = rule;
                                            if (rule.value) {
                                                this.validateDiscountRule_({
                                                    value: rule.value,
                                                    type: discount.rule.type,
                                                });
                                            }
                                            discount.rule = ruleRepo.create(__assign(__assign({}, discount.rule), ruleUpdate));
                                        }
                                        try {
                                            for (_b = __values(Object.keys(rest).filter(function (k) { return typeof rest[k] !== "undefined"; })), _c = _b.next(); !_c.done; _c = _b.next()) {
                                                key = _c.value;
                                                discount[key] = rest[key];
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_c && !_c.done && (_d = _b.return)) _d.call(_b);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        discount.code = discount.code.toUpperCase();
                                        return [4 /*yield*/, discountRepo.save(discount)];
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
     * Creates a dynamic code for a discount id.
     * @param {string} discountId - the id of the discount to create a code for
     * @param {Object} data - the object containing a code to identify the discount by
     * @return {Promise} the newly created dynamic code
     */
    DiscountService.prototype.createDynamicCode = function (discountId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var discountRepo, discount, toCreate, lastValidDate, created;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        discountRepo = manager.withRepository(this.discountRepository_);
                                        return [4 /*yield*/, this.retrieve(discountId)];
                                    case 1:
                                        discount = _a.sent();
                                        if (!discount.is_dynamic) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Discount must be set to dynamic");
                                        }
                                        if (!data.code) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Discount must have a code");
                                        }
                                        toCreate = __assign(__assign({}, data), { rule_id: discount.rule_id, is_dynamic: true, is_disabled: false, code: data.code.toUpperCase(), parent_discount_id: discount.id, usage_limit: discount.usage_limit });
                                        if (discount.valid_duration) {
                                            lastValidDate = new Date();
                                            lastValidDate.setSeconds(lastValidDate.getSeconds() + (0, iso8601_duration_1.toSeconds)((0, iso8601_duration_1.parse)(discount.valid_duration)));
                                            toCreate.ends_at = lastValidDate;
                                        }
                                        created = discountRepo.create(toCreate);
                                        return [4 /*yield*/, discountRepo.save(created)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes a dynamic code for a discount id.
     * @param {string} discountId - the id of the discount to create a code for
     * @param {string} code - the code to identify the discount by
     * @return {Promise} the newly created dynamic code
     */
    DiscountService.prototype.deleteDynamicCode = function (discountId, code) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var discountRepo, discount;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        discountRepo = manager.withRepository(this.discountRepository_);
                                        return [4 /*yield*/, discountRepo.findOne({
                                                where: { parent_discount_id: discountId, code: code },
                                            })];
                                    case 1:
                                        discount = _a.sent();
                                        if (!discount) {
                                            return [2 /*return*/];
                                        }
                                        return [4 /*yield*/, discountRepo.softRemove(discount)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds a region to the discount regions array.
     * @param {string} discountId - id of discount
     * @param {string} regionId - id of region to add
     * @return {Promise} the result of the update operation
     */
    DiscountService.prototype.addRegion = function (discountId, regionId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var discountRepo, discount, exists, region;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        discountRepo = manager.withRepository(this.discountRepository_);
                                        return [4 /*yield*/, this.retrieve(discountId, {
                                                relations: ["regions", "rule"],
                                            })];
                                    case 1:
                                        discount = _b.sent();
                                        exists = discount.regions.find(function (r) { return r.id === regionId; });
                                        // If region is already present, we return early
                                        if (exists) {
                                            return [2 /*return*/, discount];
                                        }
                                        if (((_a = discount.regions) === null || _a === void 0 ? void 0 : _a.length) === 1 && discount.rule.type === "fixed") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Fixed discounts can have one region");
                                        }
                                        return [4 /*yield*/, this.regionService_.retrieve(regionId)];
                                    case 2:
                                        region = _b.sent();
                                        discount.regions = __spreadArray(__spreadArray([], __read(discount.regions), false), [region], false);
                                        return [4 /*yield*/, discountRepo.save(discount)];
                                    case 3: return [2 /*return*/, _b.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes a region from the discount regions array.
     * @param {string} discountId - id of discount
     * @param {string} regionId - id of region to remove
     * @return {Promise} the result of the update operation
     */
    DiscountService.prototype.removeRegion = function (discountId, regionId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var discountRepo, discount, exists;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        discountRepo = manager.withRepository(this.discountRepository_);
                                        return [4 /*yield*/, this.retrieve(discountId, {
                                                relations: ["regions"],
                                            })];
                                    case 1:
                                        discount = _a.sent();
                                        exists = discount.regions.find(function (r) { return r.id === regionId; });
                                        // If region is not present, we return early
                                        if (!exists) {
                                            return [2 /*return*/, discount];
                                        }
                                        discount.regions = discount.regions.filter(function (r) { return r.id !== regionId; });
                                        return [4 /*yield*/, discountRepo.save(discount)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes a discount idempotently
     * @param {string} discountId - id of discount to delete
     * @return {Promise} the result of the delete operation
     */
    DiscountService.prototype.delete = function (discountId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var discountRepo, discount;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        discountRepo = manager.withRepository(this.discountRepository_);
                                        return [4 /*yield*/, discountRepo.findOne({ where: { id: discountId } })];
                                    case 1:
                                        discount = _a.sent();
                                        if (!discount) {
                                            return [2 /*return*/];
                                        }
                                        return [4 /*yield*/, discountRepo.softRemove(discount)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiscountService.prototype.validateDiscountForProduct = function (discountRuleId, productId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var discountConditionRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        discountConditionRepo = manager.withRepository(this.discountConditionRepository_);
                                        // In case of custom line items, we don't have a product id.
                                        // Instead of throwing, we simply invalidate the discount.
                                        if (!productId) {
                                            return [2 /*return*/, false];
                                        }
                                        return [4 /*yield*/, discountConditionRepo.isValidForProduct(discountRuleId, productId)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiscountService.prototype.calculateDiscountForLineItem = function (discountId, lineItem, calculationContextData) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var adjustment, discount, _a, type, value, allocation, calculationContext, fullItemPrice, includesTax, lineItemTotals, discountedItems, totals, subtotal, nominator, totalItemPercentage;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        adjustment = 0;
                                        if (!lineItem.allow_discounts) {
                                            return [2 /*return*/, adjustment];
                                        }
                                        return [4 /*yield*/, this.retrieve(discountId, { relations: ["rule"] })];
                                    case 1:
                                        discount = _b.sent();
                                        _a = discount.rule, type = _a.type, value = _a.value, allocation = _a.allocation;
                                        return [4 /*yield*/, this.totalsService_
                                                .withTransaction(transactionManager)
                                                .getCalculationContext(calculationContextData, {
                                                exclude_shipping: true,
                                            })];
                                    case 2:
                                        calculationContext = _b.sent();
                                        fullItemPrice = lineItem.unit_price * lineItem.quantity;
                                        includesTax = this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && lineItem.includes_tax;
                                        if (!includesTax) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.newTotalsService_
                                                .withTransaction(transactionManager)
                                                .getLineItemTotals([lineItem], {
                                                includeTax: true,
                                                calculationContext: calculationContext,
                                            })];
                                    case 3:
                                        lineItemTotals = _b.sent();
                                        fullItemPrice = lineItemTotals[lineItem.id].subtotal;
                                        _b.label = 4;
                                    case 4:
                                        if (!(type === discount_rule_1.DiscountRuleType.PERCENTAGE)) return [3 /*break*/, 5];
                                        adjustment = Math.round((fullItemPrice / 100) * value);
                                        return [3 /*break*/, 8];
                                    case 5:
                                        if (!(type === discount_rule_1.DiscountRuleType.FIXED &&
                                            allocation === discount_rule_1.AllocationType.TOTAL)) return [3 /*break*/, 7];
                                        discountedItems = calculationContextData.items.filter(function (item) { return item.allow_discounts; });
                                        return [4 /*yield*/, this.newTotalsService_.getLineItemTotals(discountedItems, {
                                                includeTax: includesTax,
                                                calculationContext: calculationContext,
                                            })];
                                    case 6:
                                        totals = _b.sent();
                                        subtotal = Object.values(totals).reduce(function (subtotal, total) {
                                            subtotal += total.subtotal;
                                            return subtotal;
                                        }, 0);
                                        nominator = Math.min(value, subtotal);
                                        totalItemPercentage = fullItemPrice / subtotal;
                                        adjustment = nominator * totalItemPercentage;
                                        return [3 /*break*/, 8];
                                    case 7:
                                        adjustment = value * lineItem.quantity;
                                        _b.label = 8;
                                    case 8: return [2 /*return*/, Math.min(adjustment, fullItemPrice)];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiscountService.prototype.validateDiscountForCartOrThrow = function (cart, discount) {
        return __awaiter(this, void 0, void 0, function () {
            var discounts;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        discounts = Array.isArray(discount) ? discount : [discount];
                        return [4 /*yield*/, this.atomicPhase_(function () { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, (0, utils_1.promiseAll)(discounts.map(function (disc) { return __awaiter(_this, void 0, void 0, function () {
                                                var isValidForRegion, canApplyForCustomer;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (this.hasReachedLimit(disc)) {
                                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Discount ".concat(disc.code, " has been used maximum allowed times"));
                                                            }
                                                            if (this.hasNotStarted(disc)) {
                                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Discount ".concat(disc.code, " is not valid yet"));
                                                            }
                                                            if (this.hasExpired(disc)) {
                                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Discount ".concat(disc.code, " is expired"));
                                                            }
                                                            if (this.isDisabled(disc)) {
                                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "The discount code ".concat(disc.code, " is disabled"));
                                                            }
                                                            if (!cart.customer_id && this.hasCustomersGroupCondition(disc)) {
                                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Discount ".concat(disc.code, " is only valid for specific customer"));
                                                            }
                                                            return [4 /*yield*/, this.isValidForRegion(disc, cart.region_id)];
                                                        case 1:
                                                            isValidForRegion = _a.sent();
                                                            if (!isValidForRegion) {
                                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "The discount is not available in current region");
                                                            }
                                                            if (!cart.customer_id) return [3 /*break*/, 3];
                                                            return [4 /*yield*/, this.canApplyForCustomer(disc.rule.id, cart.customer_id)];
                                                        case 2:
                                                            canApplyForCustomer = _a.sent();
                                                            if (!canApplyForCustomer) {
                                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Discount ".concat(disc.code, " is not valid for customer"));
                                                            }
                                                            _a.label = 3;
                                                        case 3: return [2 /*return*/];
                                                    }
                                                });
                                            }); }))];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiscountService.prototype.hasCustomersGroupCondition = function (discount) {
        return discount.rule.conditions.some(function (cond) { return cond.type === models_1.DiscountConditionType.CUSTOMER_GROUPS; });
    };
    DiscountService.prototype.hasReachedLimit = function (discount) {
        var count = discount.usage_count || 0;
        var limit = discount.usage_limit;
        return !!limit && count >= limit;
    };
    DiscountService.prototype.hasNotStarted = function (discount) {
        return (0, date_helpers_1.isFuture)(discount.starts_at);
    };
    DiscountService.prototype.hasExpired = function (discount) {
        if (!discount.ends_at) {
            return false;
        }
        return (0, date_helpers_1.isPast)(discount.ends_at);
    };
    DiscountService.prototype.isDisabled = function (discount) {
        return discount.is_disabled;
    };
    DiscountService.prototype.isValidForRegion = function (discount, region_id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function () { return __awaiter(_this, void 0, void 0, function () {
                            var regions, parent_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        regions = discount.regions;
                                        if (!discount.parent_discount_id) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.retrieve(discount.parent_discount_id, {
                                                relations: ["rule", "regions"],
                                            })];
                                    case 1:
                                        parent_1 = _a.sent();
                                        regions = parent_1.regions;
                                        _a.label = 2;
                                    case 2: return [2 /*return*/, regions.find(function (_a) {
                                            var id = _a.id;
                                            return id === region_id;
                                        }) !== undefined];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiscountService.prototype.canApplyForCustomer = function (discountRuleId, customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var discountConditionRepo, customer;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        discountConditionRepo = manager.withRepository(this.discountConditionRepository_);
                                        // Instead of throwing on missing customer id, we simply invalidate the discount
                                        if (!customerId) {
                                            return [2 /*return*/, false];
                                        }
                                        return [4 /*yield*/, this.customerService_
                                                .withTransaction(manager)
                                                .retrieve(customerId, {
                                                relations: ["groups"],
                                            })];
                                    case 1:
                                        customer = _a.sent();
                                        return [4 /*yield*/, discountConditionRepo.canApplyForCustomer(discountRuleId, customer.id)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DiscountService.Events = {
        CREATED: "discount.created",
    };
    return DiscountService;
}(interfaces_1.TransactionBaseService));
exports.default = DiscountService;
//# sourceMappingURL=discount.js.map