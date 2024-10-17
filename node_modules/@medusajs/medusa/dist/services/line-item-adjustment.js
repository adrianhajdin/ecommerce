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
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@medusajs/utils");
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var models_1 = require("../models");
var utils_2 = require("../utils");
/**
 * Provides layer to manipulate line item adjustments.
 */
var LineItemAdjustmentService = /** @class */ (function (_super) {
    __extends(LineItemAdjustmentService, _super);
    function LineItemAdjustmentService(_a) {
        var lineItemAdjustmentRepository = _a.lineItemAdjustmentRepository, discountService = _a.discountService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.lineItemAdjustmentRepo_ = lineItemAdjustmentRepository;
        _this.discountService = discountService;
        return _this;
    }
    /**
     * Retrieves a line item adjustment by id.
     * @param lineItemAdjustmentId - the id of the line item adjustment to retrieve
     * @param config - the config to retrieve the line item adjustment by
     * @return the line item adjustment.
     */
    LineItemAdjustmentService.prototype.retrieve = function (lineItemAdjustmentId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var lineItemAdjustmentRepo, query, lineItemAdjustment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(lineItemAdjustmentId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"lineItemAdjustmentId\" must be defined");
                        }
                        lineItemAdjustmentRepo = this.activeManager_.withRepository(this.lineItemAdjustmentRepo_);
                        query = (0, utils_2.buildQuery)({ id: lineItemAdjustmentId }, config);
                        return [4 /*yield*/, lineItemAdjustmentRepo.findOne(query)];
                    case 1:
                        lineItemAdjustment = _a.sent();
                        if (!lineItemAdjustment) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Line item adjustment with id: ".concat(lineItemAdjustmentId, " was not found"));
                        }
                        return [2 /*return*/, lineItemAdjustment];
                }
            });
        });
    };
    /**
     * Creates a line item adjustment
     * @param data - the line item adjustment to create
     * @return line item adjustment
     */
    LineItemAdjustmentService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var lineItemAdjustmentRepo, lineItemAdjustment;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        lineItemAdjustmentRepo = manager.withRepository(this.lineItemAdjustmentRepo_);
                                        lineItemAdjustment = lineItemAdjustmentRepo.create(data);
                                        return [4 /*yield*/, lineItemAdjustmentRepo.save(lineItemAdjustment)];
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
     * Creates a line item adjustment
     * @param id - the line item adjustment id to update
     * @param data - the line item adjustment to create
     * @return line item adjustment
     */
    LineItemAdjustmentService.prototype.update = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var lineItemAdjustmentRepo, lineItemAdjustment, metadata, rest, _a, _b, _c, key, value, result;
                            var e_1, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        lineItemAdjustmentRepo = manager.withRepository(this.lineItemAdjustmentRepo_);
                                        return [4 /*yield*/, this.retrieve(id)];
                                    case 1:
                                        lineItemAdjustment = _e.sent();
                                        metadata = data.metadata, rest = __rest(data, ["metadata"]);
                                        if (metadata) {
                                            lineItemAdjustment.metadata = (0, utils_2.setMetadata)(lineItemAdjustment, metadata);
                                        }
                                        try {
                                            for (_a = __values(Object.entries(rest)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                                                lineItemAdjustment[key] = value;
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [4 /*yield*/, lineItemAdjustmentRepo.save(lineItemAdjustment)];
                                    case 2:
                                        result = _e.sent();
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
     * Lists line item adjustments
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    LineItemAdjustmentService.prototype.list = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { skip: 0, take: 20 }; }
        return __awaiter(this, void 0, void 0, function () {
            var lineItemAdjustmentRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lineItemAdjustmentRepo = this.activeManager_.withRepository(this.lineItemAdjustmentRepo_);
                        query = (0, utils_2.buildQuery)(selector, config);
                        return [4 /*yield*/, lineItemAdjustmentRepo.find(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes line item adjustments matching a selector
     * @param selectorOrIds - the query object for find or the line item adjustment id
     * @return the result of the delete operation
     */
    LineItemAdjustmentService.prototype.delete = function (selectorOrIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                        var lineItemAdjustmentRepo, ids, query, lineItemAdjustments;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    lineItemAdjustmentRepo = manager.withRepository(this.lineItemAdjustmentRepo_);
                                    if (!(typeof selectorOrIds === "string" || Array.isArray(selectorOrIds))) return [3 /*break*/, 2];
                                    ids = typeof selectorOrIds === "string" ? [selectorOrIds] : selectorOrIds;
                                    return [4 /*yield*/, lineItemAdjustmentRepo.delete({ id: (0, typeorm_1.In)(ids) })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                                case 2:
                                    query = (0, utils_2.buildQuery)(selectorOrIds);
                                    return [4 /*yield*/, lineItemAdjustmentRepo.find(query)];
                                case 3:
                                    lineItemAdjustments = _a.sent();
                                    return [4 /*yield*/, lineItemAdjustmentRepo.remove(lineItemAdjustments)];
                                case 4:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Creates adjustment for a line item
     * @param calculationContextData - the calculationContextData object holding discounts
     * @param generatedLineItem - the line item for which a line item adjustment might be created
     * @param context - the line item for which a line item adjustment might be created
     * @return a line item adjustment or undefined if no adjustment was created
     */
    LineItemAdjustmentService.prototype.generateAdjustments = function (calculationContextData, generatedLineItem, context) {
        return __awaiter(this, void 0, void 0, function () {
            var lineItem;
            var _this = this;
            return __generator(this, function (_a) {
                lineItem = __assign({}, generatedLineItem);
                return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                        var _a, discount, discountServiceTx, lineItemProduct, isValid, amount;
                        var _b, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    // if lineItem should not be discounted
                                    // or lineItem is a return line item
                                    // or the cart does not have any discounts
                                    // then do nothing
                                    if (!lineItem.allow_discounts ||
                                        lineItem.is_return ||
                                        !((_b = calculationContextData === null || calculationContextData === void 0 ? void 0 : calculationContextData.discounts) === null || _b === void 0 ? void 0 : _b.length)) {
                                        return [2 /*return*/, []];
                                    }
                                    _a = __read(calculationContextData.discounts.filter(function (d) { return d.rule.type !== models_1.DiscountRuleType.FREE_SHIPPING; }), 1), discount = _a[0];
                                    // if no discount is applied to the cart then return
                                    if (!discount) {
                                        return [2 /*return*/, []];
                                    }
                                    discountServiceTx = this.discountService.withTransaction(manager);
                                    lineItemProduct = context.variant.product_id;
                                    return [4 /*yield*/, discountServiceTx.validateDiscountForProduct(discount.rule_id, lineItemProduct)
                                        // if discount is not valid for line item, then do nothing
                                    ];
                                case 1:
                                    isValid = _d.sent();
                                    // if discount is not valid for line item, then do nothing
                                    if (!isValid) {
                                        return [2 /*return*/, []];
                                    }
                                    // In case of a generated line item the id is not available, it is mocked instead to be used for totals calculations
                                    lineItem.id = (_c = lineItem.id) !== null && _c !== void 0 ? _c : new Date().getTime();
                                    return [4 /*yield*/, discountServiceTx.calculateDiscountForLineItem(discount.id, lineItem, calculationContextData)
                                        // if discounted amount is 0, then do nothing
                                    ];
                                case 2:
                                    amount = _d.sent();
                                    // if discounted amount is 0, then do nothing
                                    if (amount === 0) {
                                        return [2 /*return*/, []];
                                    }
                                    return [2 /*return*/, [
                                            {
                                                amount: amount,
                                                discount_id: discount.id,
                                                description: "discount",
                                            },
                                        ]];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Creates adjustment for a line item
     * @param cart - the cart object holding discounts
     * @param lineItem - the line item for which a line item adjustment might be created
     * @return a line item adjustment or undefined if no adjustment was created
     */
    LineItemAdjustmentService.prototype.createAdjustmentForLineItem = function (cart, lineItem) {
        return __awaiter(this, void 0, void 0, function () {
            var adjustments, createdAdjustments, adjustments_1, adjustments_1_1, adjustment, created, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.generateAdjustments(cart, lineItem, {
                            variant: lineItem.variant,
                        })];
                    case 1:
                        adjustments = _b.sent();
                        createdAdjustments = [];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        adjustments_1 = __values(adjustments), adjustments_1_1 = adjustments_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!adjustments_1_1.done) return [3 /*break*/, 6];
                        adjustment = adjustments_1_1.value;
                        return [4 /*yield*/, this.create(__assign({ item_id: lineItem.id }, adjustment))];
                    case 4:
                        created = _b.sent();
                        createdAdjustments.push(created);
                        _b.label = 5;
                    case 5:
                        adjustments_1_1 = adjustments_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (adjustments_1_1 && !adjustments_1_1.done && (_a = adjustments_1.return)) _a.call(adjustments_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, createdAdjustments];
                }
            });
        });
    };
    /**
     * Creates adjustment for a line item
     * @param cart - the cart object holding discounts
     * @param lineItem - the line item for which a line item adjustment might be created
     * @return if a lineItem was given, returns a line item adjustment or undefined if no adjustment was created
     * otherwise returns an array of line item adjustments for each line item in the cart
     */
    LineItemAdjustmentService.prototype.createAdjustments = function (cart, lineItem) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!lineItem) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createAdjustmentForLineItem(cart, lineItem)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (!cart.items) {
                            return [2 /*return*/, []];
                        }
                        return [4 /*yield*/, (0, utils_1.promiseAll)(cart.items.map(function (li) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, this.createAdjustmentForLineItem(cart, li)];
                            }); }); }))];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return LineItemAdjustmentService;
}(interfaces_1.TransactionBaseService));
exports.default = LineItemAdjustmentService;
//# sourceMappingURL=line-item-adjustment.js.map