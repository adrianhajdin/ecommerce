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
var utils_1 = require("@medusajs/utils");
var medusa_core_utils_1 = require("medusa-core-utils");
var models_1 = require("../models");
var utils_2 = require("../utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
/**
 * Provides layer to manipulate profiles.
 */
var ShippingOptionService = /** @class */ (function (_super) {
    __extends(ShippingOptionService, _super);
    function ShippingOptionService(_a) {
        var shippingOptionRepository = _a.shippingOptionRepository, shippingOptionRequirementRepository = _a.shippingOptionRequirementRepository, shippingMethodRepository = _a.shippingMethodRepository, fulfillmentProviderService = _a.fulfillmentProviderService, regionService = _a.regionService, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.optionRepository_ = shippingOptionRepository;
        _this.methodRepository_ = shippingMethodRepository;
        _this.requirementRepository_ = shippingOptionRequirementRepository;
        _this.providerService_ = fulfillmentProviderService;
        _this.regionService_ = regionService;
        _this.featureFlagRouter_ = featureFlagRouter;
        return _this;
    }
    /**
     * Validates a requirement
     * @param {ShippingOptionRequirement} requirement - the requirement to validate
     * @param {string} optionId - the id to validate the requirement
     * @return {ShippingOptionRequirement} a validated shipping requirement
     */
    ShippingOptionService.prototype.validateRequirement_ = function (requirement, optionId) {
        if (optionId === void 0) { optionId = undefined; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var reqRepo, existingReq, _a, req, created;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!requirement.type) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "A Shipping Requirement must have a type field");
                                        }
                                        if (requirement.type !== "min_subtotal" &&
                                            requirement.type !== "max_subtotal") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Requirement type must be one of min_subtotal, max_subtotal");
                                        }
                                        reqRepo = manager.withRepository(this.requirementRepository_);
                                        if (!requirement.id) return [3 /*break*/, 2];
                                        return [4 /*yield*/, reqRepo.findOne({
                                                where: { id: requirement.id },
                                            })];
                                    case 1:
                                        _a = _b.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        _a = undefined;
                                        _b.label = 3;
                                    case 3:
                                        existingReq = _a;
                                        if (!existingReq && requirement.id) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Shipping option requirement with id ".concat(requirement.id, " does not exist"));
                                        }
                                        // If no option id is provided, we are currently in the process of creating
                                        // a new shipping option. Therefore, simply return the requirement, such
                                        // that the cascading will take care of the creation of the requirement.
                                        if (!optionId) {
                                            return [2 /*return*/, requirement];
                                        }
                                        if (!existingReq) return [3 /*break*/, 5];
                                        return [4 /*yield*/, reqRepo.save(__assign(__assign({}, existingReq), requirement))];
                                    case 4:
                                        req = _b.sent();
                                        return [3 /*break*/, 7];
                                    case 5:
                                        created = reqRepo.create(__assign(__assign({}, requirement), { shipping_option_id: optionId }));
                                        return [4 /*yield*/, reqRepo.save(created)];
                                    case 6:
                                        req = _b.sent();
                                        _b.label = 7;
                                    case 7: return [2 /*return*/, req];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param {Object} selector - the query object for find
     * @param {object} config - config object
     * @return {Promise} the result of the find operation
     */
    ShippingOptionService.prototype.list = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { skip: 0, take: 50 }; }
        return __awaiter(this, void 0, void 0, function () {
            var optRepo, q, query, where;
            return __generator(this, function (_a) {
                optRepo = this.activeManager_.withRepository(this.optionRepository_);
                if (selector.q) {
                    q = selector.q;
                    delete selector.q;
                }
                query = (0, utils_2.buildQuery)(selector, config);
                if (q) {
                    where = query.where;
                    delete where.name;
                    query.where = [
                        __assign(__assign({}, where), { name: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                    ];
                }
                return [2 /*return*/, optRepo.find(query)];
            });
        });
    };
    /**
     * @param selector - the query object for find
     * @param config - config object
     * @return the result of the find operation
     */
    ShippingOptionService.prototype.listAndCount = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { skip: 0, take: 50 }; }
        return __awaiter(this, void 0, void 0, function () {
            var optRepo, q, query, where;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        optRepo = this.activeManager_.withRepository(this.optionRepository_);
                        if (selector.q) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_2.buildQuery)(selector, config);
                        if (q) {
                            where = query.where;
                            delete where.name;
                            query.where = [
                                __assign(__assign({}, where), { name: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                            ];
                        }
                        return [4 /*yield*/, optRepo.findAndCount(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets a profile by id.
     * Throws in case of DB Error and if profile was not found.
     * @param {string} optionId - the id of the profile to get.
     * @param {object} options - the options to get a profile
     * @return {Promise<Product>} the profile document.
     */
    ShippingOptionService.prototype.retrieve = function (optionId, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var soRepo, query, option;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(optionId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"optionId\" must be defined");
                        }
                        soRepo = this.activeManager_.withRepository(this.optionRepository_);
                        query = (0, utils_2.buildQuery)({ id: optionId }, options);
                        return [4 /*yield*/, soRepo.findOne(query)];
                    case 1:
                        option = _a.sent();
                        if (!option) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Shipping Option with ".concat(optionId, " was not found"));
                        }
                        return [2 /*return*/, option];
                }
            });
        });
    };
    /**
     * Updates a shipping method's associations. Useful when a cart is completed
     * and its methods should be copied to an order/swap entity.
     * @param {string} id - the id of the shipping method to update
     * @param {object} update - the values to update the method with
     * @return {Promise<ShippingMethod>} the resulting shipping method
     */
    ShippingOptionService.prototype.updateShippingMethod = function (id, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var methodRepo, method, _a, _b, key;
                            var e_1, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        methodRepo = manager.withRepository(this.methodRepository_);
                                        return [4 /*yield*/, methodRepo.findOne({ where: { id: id } })];
                                    case 1:
                                        method = _d.sent();
                                        if (!method) {
                                            return [2 /*return*/, undefined];
                                        }
                                        try {
                                            for (_a = __values(Object.keys(update).filter(function (k) { return typeof update[k] !== "undefined"; })), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                key = _b.value;
                                                method[key] = update[key];
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [2 /*return*/, methodRepo.save(method)];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes a given shipping method
     * @param {ShippingMethod | Array<ShippingMethod>} shippingMethods - the shipping method to remove
     * @returns removed shipping methods
     */
    ShippingOptionService.prototype.deleteShippingMethods = function (shippingMethods) {
        return __awaiter(this, void 0, void 0, function () {
            var removeEntities;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeEntities = Array.isArray(shippingMethods)
                            ? shippingMethods
                            : [shippingMethods];
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var methodRepo;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            methodRepo = manager.withRepository(this.methodRepository_);
                                            return [4 /*yield*/, methodRepo.remove(removeEntities)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates a shipping method for a given cart.
     * @param {string} optionId - the id of the option to use for the method.
     * @param {object} data - the optional provider data to use.
     * @param {object} config - the cart to create the shipping method for.
     * @return {ShippingMethod} the resulting shipping method.
     */
    ShippingOptionService.prototype.createShippingMethod = function (optionId, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var option, methodRepo, validatedData, methodPrice, toCreate, method, created;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(optionId, {
                                            relations: ["requirements"],
                                        })];
                                    case 1:
                                        option = _a.sent();
                                        methodRepo = manager.withRepository(this.methodRepository_);
                                        if (!(0, medusa_core_utils_1.isDefined)(config.cart)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.validateCartOption(option, config.cart)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [4 /*yield*/, this.providerService_.validateFulfillmentData(option, data, config.cart || {})];
                                    case 4:
                                        validatedData = _a.sent();
                                        if (!(typeof config.price === "number")) return [3 /*break*/, 5];
                                        methodPrice = config.price;
                                        return [3 /*break*/, 7];
                                    case 5: return [4 /*yield*/, this.getPrice_(option, validatedData, config.cart)];
                                    case 6:
                                        methodPrice = _a.sent();
                                        _a.label = 7;
                                    case 7:
                                        toCreate = {
                                            shipping_option_id: option.id,
                                            data: validatedData,
                                            price: methodPrice,
                                        };
                                        if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
                                            if (typeof option.includes_tax !== "undefined") {
                                                toCreate.includes_tax = option.includes_tax;
                                            }
                                        }
                                        if (config.order) {
                                            toCreate.order_id = config.order.id;
                                        }
                                        if (config.cart) {
                                            toCreate.cart_id = config.cart.id;
                                        }
                                        if (config.cart_id) {
                                            toCreate.cart_id = config.cart_id;
                                        }
                                        if (config.return_id) {
                                            toCreate.return_id = config.return_id;
                                        }
                                        if (config.order_id) {
                                            toCreate.order_id = config.order_id;
                                        }
                                        if (config.claim_order_id) {
                                            toCreate.claim_order_id = config.claim_order_id;
                                        }
                                        method = methodRepo.create(toCreate);
                                        return [4 /*yield*/, methodRepo.save(method)];
                                    case 8:
                                        created = _a.sent();
                                        return [4 /*yield*/, methodRepo.findOne({
                                                where: { id: created.id },
                                                relations: ["shipping_option"],
                                            })];
                                    case 9: return [2 /*return*/, (_a.sent())];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Checks if a given option id is a valid option for a cart. If it is the
     * option is returned with the correct price. Throws when region_ids do not
     * match, or when the shipping option requirements are not satisfied.
     * @param {object} option - the option object to check
     * @param {Cart} cart - the cart object to check against
     * @return {ShippingOption} the validated shipping option
     */
    ShippingOptionService.prototype.validateCartOption = function (option, cart) {
        return __awaiter(this, void 0, void 0, function () {
            var amount, requirementResults, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (option.is_return) {
                            return [2 /*return*/, null];
                        }
                        if (cart.region_id !== option.region_id) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "The shipping option is not available in the cart's region");
                        }
                        amount = option.includes_tax ? (cart.subtotal + cart.item_tax_total) : cart.subtotal;
                        requirementResults = option.requirements.map(function (requirement) {
                            switch (requirement.type) {
                                case "max_subtotal":
                                    return requirement.amount > amount;
                                case "min_subtotal":
                                    return requirement.amount <= amount;
                                default:
                                    return true;
                            }
                        });
                        if (requirementResults.some(function (requirement) { return !requirement; })) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "The Cart does not satisfy the shipping option's requirements");
                        }
                        _a = option;
                        return [4 /*yield*/, this.getPrice_(option, option.data, cart)];
                    case 1:
                        _a.amount = _b.sent();
                        return [2 /*return*/, option];
                }
            });
        });
    };
    ShippingOptionService.prototype.validateAndMutatePrice = function (option, priceInput) {
        return __awaiter(this, void 0, void 0, function () {
            var option_, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        option_ = __assign({}, option);
                        if ((0, medusa_core_utils_1.isDefined)(priceInput.amount)) {
                            option_.amount = priceInput.amount;
                        }
                        if (!(0, medusa_core_utils_1.isDefined)(priceInput.price_type)) return [3 /*break*/, 2];
                        _a = option_;
                        return [4 /*yield*/, this.validatePriceType_(priceInput.price_type, option_)];
                    case 1:
                        _a.price_type = _b.sent();
                        if (priceInput.price_type === models_1.ShippingOptionPriceType.CALCULATED) {
                            option_.amount = null;
                        }
                        _b.label = 2;
                    case 2:
                        if (option_.price_type === models_1.ShippingOptionPriceType.FLAT_RATE &&
                            (option_.amount == null || option_.amount < 0)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Shipping options of type `flat_rate` must have an `amount`");
                        }
                        return [2 /*return*/, option_];
                }
            });
        });
    };
    /**
     * Creates a new shipping option. Used both for outbound and inbound shipping
     * options. The difference is registered by the `is_return` field which
     * defaults to false.
     * @param {ShippingOption} data - the data to create shipping options
     * @return {Promise<ShippingOption>} the result of the create operation
     */
    ShippingOptionService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                        var optionWithValidatedPrice, optionRepo, option, region, isValid, acc, _loop_1, this_1, _a, _b, r, e_2_1, result;
                        var e_2, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0: return [4 /*yield*/, this.validateAndMutatePrice(data, {
                                        price_type: data.price_type,
                                    })];
                                case 1:
                                    optionWithValidatedPrice = _d.sent();
                                    optionRepo = manager.withRepository(this.optionRepository_);
                                    option = optionRepo.create(optionWithValidatedPrice);
                                    return [4 /*yield*/, this.regionService_
                                            .withTransaction(manager)
                                            .retrieve(option.region_id, {
                                            relations: ["fulfillment_providers"],
                                        })];
                                case 2:
                                    region = _d.sent();
                                    if (!region.fulfillment_providers.find(function (_a) {
                                        var id = _a.id;
                                        return id === option.provider_id;
                                    })) {
                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "The fulfillment provider is not available in the provided region");
                                    }
                                    if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
                                        if (typeof data.includes_tax !== "undefined") {
                                            option.includes_tax = data.includes_tax;
                                        }
                                    }
                                    return [4 /*yield*/, this.providerService_.validateOption(option)];
                                case 3:
                                    isValid = _d.sent();
                                    if (!isValid) {
                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "The fulfillment provider cannot validate the shipping option");
                                    }
                                    if (!(0, medusa_core_utils_1.isDefined)(data.requirements)) return [3 /*break*/, 11];
                                    acc = [];
                                    _loop_1 = function (r) {
                                        var validated;
                                        return __generator(this, function (_e) {
                                            switch (_e.label) {
                                                case 0: return [4 /*yield*/, this_1.validateRequirement_(r)];
                                                case 1:
                                                    validated = _e.sent();
                                                    if (acc.find(function (raw) { return raw.type === validated.type; })) {
                                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Only one requirement of each type is allowed");
                                                    }
                                                    if (acc.find(function (raw) {
                                                        return (raw.type === "max_subtotal" &&
                                                            validated.amount > raw.amount) ||
                                                            (raw.type === "min_subtotal" && validated.amount < raw.amount);
                                                    })) {
                                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Max. subtotal must be greater than Min. subtotal");
                                                    }
                                                    acc.push(validated);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    };
                                    this_1 = this;
                                    _d.label = 4;
                                case 4:
                                    _d.trys.push([4, 9, 10, 11]);
                                    _a = __values(data.requirements), _b = _a.next();
                                    _d.label = 5;
                                case 5:
                                    if (!!_b.done) return [3 /*break*/, 8];
                                    r = _b.value;
                                    return [5 /*yield**/, _loop_1(r)];
                                case 6:
                                    _d.sent();
                                    _d.label = 7;
                                case 7:
                                    _b = _a.next();
                                    return [3 /*break*/, 5];
                                case 8: return [3 /*break*/, 11];
                                case 9:
                                    e_2_1 = _d.sent();
                                    e_2 = { error: e_2_1 };
                                    return [3 /*break*/, 11];
                                case 10:
                                    try {
                                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                    return [7 /*endfinally*/];
                                case 11: return [4 /*yield*/, optionRepo.save(option)];
                                case 12:
                                    result = _d.sent();
                                    return [2 /*return*/, result];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Validates a shipping option price
     * @param {ShippingOptionPriceType} priceType - the price to validate
     * @param {ShippingOption} option - the option to validate against
     * @return {Promise<ShippingOptionPriceType>} the validated price
     */
    ShippingOptionService.prototype.validatePriceType_ = function (priceType, option) {
        return __awaiter(this, void 0, void 0, function () {
            var canCalculate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!priceType ||
                            (priceType !== models_1.ShippingOptionPriceType.FLAT_RATE &&
                                priceType !== models_1.ShippingOptionPriceType.CALCULATED)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "The price must be of type flat_rate or calculated");
                        }
                        if (!(priceType === models_1.ShippingOptionPriceType.CALCULATED)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.providerService_.canCalculate({
                                provider_id: option.provider_id,
                                data: option.data,
                            })];
                    case 1:
                        canCalculate = _a.sent();
                        if (!canCalculate) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "The fulfillment provider cannot calculate prices for this option");
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, priceType];
                }
            });
        });
    };
    /**
     * Updates a profile. Metadata updates and product updates should use
     * dedicated methods, e.g. `setMetadata`, etc. The function
     * will throw errors if metadata or product updates are attempted.
     * @param {string} optionId - the id of the option. Must be a string that
     *   can be casted to an ObjectId
     * @param {object} update - an object with the update values.
     * @return {Promise} resolves to the update result.
     */
    ShippingOptionService.prototype.update = function (optionId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                        var option, acc, _loop_2, this_2, _a, _b, r, e_3_1, accReqs_1, toRemove, optionWithValidatedPrice, optionRepo;
                        var e_3, _c;
                        var _this = this;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0: return [4 /*yield*/, this.retrieve(optionId, {
                                        relations: ["requirements"],
                                    })];
                                case 1:
                                    option = _d.sent();
                                    if ((0, medusa_core_utils_1.isDefined)(update.metadata)) {
                                        option.metadata = (0, utils_2.setMetadata)(option, update.metadata);
                                    }
                                    if (update.region_id || update.provider_id || update.data) {
                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Region and Provider cannot be updated after creation");
                                    }
                                    if ((0, medusa_core_utils_1.isDefined)(update.is_return)) {
                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "is_return cannot be changed after creation");
                                    }
                                    if (!(0, medusa_core_utils_1.isDefined)(update.requirements)) return [3 /*break*/, 12];
                                    acc = [];
                                    _loop_2 = function (r) {
                                        var validated;
                                        return __generator(this, function (_e) {
                                            switch (_e.label) {
                                                case 0: return [4 /*yield*/, this_2.validateRequirement_(r, optionId)];
                                                case 1:
                                                    validated = _e.sent();
                                                    if (acc.find(function (raw) { return raw.type === validated.type; })) {
                                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Only one requirement of each type is allowed");
                                                    }
                                                    if (acc.find(function (raw) {
                                                        return (raw.type === "max_subtotal" &&
                                                            validated.amount > raw.amount) ||
                                                            (raw.type === "min_subtotal" && validated.amount < raw.amount);
                                                    })) {
                                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Max. subtotal must be greater than Min. subtotal");
                                                    }
                                                    acc.push(validated);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    };
                                    this_2 = this;
                                    _d.label = 2;
                                case 2:
                                    _d.trys.push([2, 7, 8, 9]);
                                    _a = __values(update.requirements), _b = _a.next();
                                    _d.label = 3;
                                case 3:
                                    if (!!_b.done) return [3 /*break*/, 6];
                                    r = _b.value;
                                    return [5 /*yield**/, _loop_2(r)];
                                case 4:
                                    _d.sent();
                                    _d.label = 5;
                                case 5:
                                    _b = _a.next();
                                    return [3 /*break*/, 3];
                                case 6: return [3 /*break*/, 9];
                                case 7:
                                    e_3_1 = _d.sent();
                                    e_3 = { error: e_3_1 };
                                    return [3 /*break*/, 9];
                                case 8:
                                    try {
                                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                    }
                                    finally { if (e_3) throw e_3.error; }
                                    return [7 /*endfinally*/];
                                case 9:
                                    if (!option.requirements) return [3 /*break*/, 11];
                                    accReqs_1 = acc.map(function (a) { return a.id; });
                                    toRemove = option.requirements.filter(function (r) { return !accReqs_1.includes(r.id); });
                                    return [4 /*yield*/, (0, utils_1.promiseAll)(toRemove.map(function (req) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.removeRequirement(req.id)];
                                                    case 1:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }))];
                                case 10:
                                    _d.sent();
                                    _d.label = 11;
                                case 11:
                                    option.requirements = acc;
                                    _d.label = 12;
                                case 12: return [4 /*yield*/, this.validateAndMutatePrice(option, {
                                        price_type: update.price_type,
                                        amount: update.amount,
                                    })];
                                case 13:
                                    optionWithValidatedPrice = _d.sent();
                                    if ((0, medusa_core_utils_1.isDefined)(update.name)) {
                                        optionWithValidatedPrice.name = update.name;
                                    }
                                    if ((0, medusa_core_utils_1.isDefined)(update.admin_only)) {
                                        optionWithValidatedPrice.admin_only = update.admin_only;
                                    }
                                    if ((0, medusa_core_utils_1.isDefined)(update.profile_id)) {
                                        optionWithValidatedPrice.profile_id = update.profile_id;
                                    }
                                    if (this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key)) {
                                        if (typeof update.includes_tax !== "undefined") {
                                            optionWithValidatedPrice.includes_tax = update.includes_tax;
                                        }
                                    }
                                    optionRepo = manager.withRepository(this.optionRepository_);
                                    return [4 /*yield*/, optionRepo.save(optionWithValidatedPrice)];
                                case 14: return [2 /*return*/, _d.sent()];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Deletes a profile with a given profile id.
     * @param {string} optionId - the id of the profile to delete. Must be
     *   castable as an ObjectId
     * @return {Promise} the result of the delete operation.
     */
    ShippingOptionService.prototype.delete = function (optionId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var option, optionRepo, error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, this.retrieve(optionId)];
                                    case 1:
                                        option = _a.sent();
                                        optionRepo = manager.withRepository(this.optionRepository_);
                                        return [2 /*return*/, optionRepo.softRemove(option)];
                                    case 2:
                                        error_1 = _a.sent();
                                        // Delete is idempotent, but we return a promise to allow then-chaining
                                        return [2 /*return*/];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds a requirement to a shipping option. Only 1 requirement of each type
     * is allowed.
     * @param {string} optionId - the option to add the requirement to.
     * @param {ShippingOptionRequirement} requirement - the requirement for the option.
     * @return {Promise} the result of update
     */
    ShippingOptionService.prototype.addRequirement = function (optionId, requirement) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                        var option, validatedReq, optionRepo;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.retrieve(optionId, {
                                        relations: ["requirements"],
                                    })];
                                case 1:
                                    option = _a.sent();
                                    return [4 /*yield*/, this.validateRequirement_(requirement)];
                                case 2:
                                    validatedReq = _a.sent();
                                    if (option.requirements.find(function (r) { return r.type === validatedReq.type; })) {
                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.DUPLICATE_ERROR, "A requirement with type: ".concat(validatedReq.type, " already exists"));
                                    }
                                    option.requirements.push(validatedReq);
                                    optionRepo = manager.withRepository(this.optionRepository_);
                                    return [2 /*return*/, optionRepo.save(option)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Removes a requirement from a shipping option
     * @param {string} requirementId - the id of the requirement to remove
     * @return {Promise} the result of update
     */
    ShippingOptionService.prototype.removeRequirement = function (requirementId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var reqRepo, requirement;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        reqRepo = manager.withRepository(this.requirementRepository_);
                                        return [4 /*yield*/, reqRepo.findOne({
                                                where: { id: requirementId },
                                            })
                                            // Delete is idempotent, but we return a promise to allow then-chaining
                                        ];
                                    case 1:
                                        requirement = _a.sent();
                                        // Delete is idempotent, but we return a promise to allow then-chaining
                                        if (!requirement) {
                                            return [2 /*return*/, Promise.resolve()];
                                        }
                                        return [4 /*yield*/, reqRepo.softRemove(requirement)];
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
     *
     * @param optionIds ID or IDs of the shipping options to update
     * @param profileId Shipping profile ID to update the shipping options with
     * @returns updated shipping options
     */
    ShippingOptionService.prototype.updateShippingProfile = function (optionIds, profileId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var optionRepo, ids;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        optionRepo = manager.withRepository(this.optionRepository_);
                                        ids = (0, utils_2.isString)(optionIds) ? [optionIds] : optionIds;
                                        return [4 /*yield*/, optionRepo.upsertShippingProfile(ids, profileId)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Returns the amount to be paid for a shipping method. Will ask the
     * fulfillment provider to calculate the price if the shipping option has the
     * price type "calculated".
     * @param {ShippingOption} option - the shipping option to retrieve the price
     *   for.
     * @param {ShippingData} data - the shipping data to retrieve the price.
     * @param {Cart | Order} cart - the context in which the price should be
     *   retrieved.
     * @return {Promise<Number>} the price of the shipping option.
     */
    ShippingOptionService.prototype.getPrice_ = function (option, data, cart) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (option.price_type === "calculated") {
                    return [2 /*return*/, this.providerService_.calculatePrice(option, data, cart)];
                }
                return [2 /*return*/, option.amount];
            });
        });
    };
    return ShippingOptionService;
}(interfaces_1.TransactionBaseService));
exports.default = ShippingOptionService;
//# sourceMappingURL=shipping-option.js.map