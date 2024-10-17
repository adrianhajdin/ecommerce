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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
var models_1 = require("../models");
var medusa_core_utils_1 = require("medusa-core-utils");
var utils_1 = require("@medusajs/utils");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var utils_2 = require("../utils");
var interfaces_1 = require("../interfaces");
var ReturnService = /** @class */ (function (_super) {
    __extends(ReturnService, _super);
    function ReturnService(_a) {
        var totalsService = _a.totalsService, lineItemService = _a.lineItemService, returnRepository = _a.returnRepository, returnItemRepository = _a.returnItemRepository, shippingOptionService = _a.shippingOptionService, returnReasonService = _a.returnReasonService, taxProviderService = _a.taxProviderService, fulfillmentProviderService = _a.fulfillmentProviderService, orderService = _a.orderService, productVariantInventoryService = _a.productVariantInventoryService, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.totalsService_ = totalsService;
        _this.returnRepository_ = returnRepository;
        _this.returnItemRepository_ = returnItemRepository;
        _this.lineItemService_ = lineItemService;
        _this.taxProviderService_ = taxProviderService;
        _this.shippingOptionService_ = shippingOptionService;
        _this.fulfillmentProviderService_ = fulfillmentProviderService;
        _this.returnReasonService_ = returnReasonService;
        _this.orderService_ = orderService;
        _this.productVariantInventoryService_ = productVariantInventoryService;
        _this.featureFlagRouter_ = featureFlagRouter;
        return _this;
    }
    /**
     * Retrieves the order line items, given an array of items
     * @param order - the order to get line items from
     * @param items - the items to get
     * @param transformer - a function to apply to each of the items
     *    retrieved from the order, should return a line item. If the transformer
     *    returns an undefined value the line item will be filtered from the
     *    returned array.
     * @return the line items generated by the transformer.
     */
    ReturnService.prototype.getFulfillmentItems = function (order, items, transformer) {
        return __awaiter(this, void 0, void 0, function () {
            var merged, _a, _b, s, _c, _d, c, toReturn;
            var e_1, _e, e_2, _f;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        merged = __spreadArray([], __read(order.items), false);
                        // merge items from order with items from order swaps
                        if (order.swaps && order.swaps.length) {
                            try {
                                for (_a = __values(order.swaps), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    s = _b.value;
                                    merged = __spreadArray(__spreadArray([], __read(merged), false), __read(s.additional_items), false);
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        if (order.claims && order.claims.length) {
                            try {
                                for (_c = __values(order.claims), _d = _c.next(); !_d.done; _d = _c.next()) {
                                    c = _d.value;
                                    merged = __spreadArray(__spreadArray([], __read(merged), false), __read(c.additional_items), false);
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        return [4 /*yield*/, (0, utils_1.promiseAll)(items.map(function (data) { return __awaiter(_this, void 0, void 0, function () {
                                var item;
                                return __generator(this, function (_a) {
                                    item = merged.find(function (i) { return i.id === data.item_id; });
                                    return [2 /*return*/, transformer(item, data.quantity, data)];
                                });
                            }); }))];
                    case 1:
                        toReturn = _g.sent();
                        return [2 /*return*/, toReturn.filter(function (i) { return !!i; })];
                }
            });
        });
    };
    /**
     * @param selector - the query object for find
     * @param config - the config object for find
     * @return the result of the find operation
     */
    ReturnService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, returns;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.listAndCount(selector, config)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), returns = _a[0];
                        return [2 /*return*/, returns];
                }
            });
        });
    };
    /**
     * @param selector - the query object for find
     * @param config - the config object for find
     * @return the result of the find operation
     */
    ReturnService.prototype.listAndCount = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var returnRepo, query;
            return __generator(this, function (_a) {
                returnRepo = this.activeManager_.withRepository(this.returnRepository_);
                query = (0, utils_2.buildQuery)(selector, config);
                return [2 /*return*/, returnRepo.findAndCount(query)];
            });
        });
    };
    /**
     * Cancels a return if possible. Returns can be canceled if it has not been received.
     * @param returnId - the id of the return to cancel.
     * @return the updated Return
     */
    ReturnService.prototype.cancel = function (returnId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var ret, retRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(returnId)];
                                    case 1:
                                        ret = _a.sent();
                                        if (ret.status === models_1.ReturnStatus.RECEIVED) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Can't cancel a return which has been returned");
                                        }
                                        retRepo = manager.withRepository(this.returnRepository_);
                                        ret.status = models_1.ReturnStatus.CANCELED;
                                        return [4 /*yield*/, retRepo.save(ret)];
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
     * Checks that an order has the statuses necessary to complete a return.
     * fulfillment_status cannot be not_fulfilled or returned.
     * payment_status must be captured.
     * @param order - the order to check statuses on
     * @throws when statuses are not sufficient for returns.
     */
    ReturnService.prototype.validateReturnStatuses = function (order) {
        if (order.fulfillment_status === models_1.FulfillmentStatus.NOT_FULFILLED ||
            order.fulfillment_status === models_1.FulfillmentStatus.RETURNED) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Can't return an unfulfilled or already returned order");
        }
        if (order.payment_status !== models_1.PaymentStatus.CAPTURED) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Can't return an order with payment unprocessed");
        }
    };
    /**
     * Checks that a given quantity of a line item can be returned. Fails if the
     * item is undefined or if the returnable quantity of the item is lower, than
     * the quantity that is requested to be returned.
     * @param item - the line item to check has sufficient returnable
     *   quantity.
     * @param quantity - the quantity that is requested to be returned.
     * @param additional - the quantity that is requested to be returned.
     * @return a line item where the quantity is set to the requested
     *   return quantity.
     */
    ReturnService.prototype.validateReturnLineItem = function (item, quantity, additional) {
        if (quantity === void 0) { quantity = 0; }
        if (additional === void 0) { additional = {}; }
        if (!item) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Return contains invalid line item");
        }
        var returnable = item.quantity - item.returned_quantity;
        if (quantity > returnable) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot return more items than have been purchased");
        }
        var toReturn = __assign(__assign({}, item), { quantity: quantity });
        if ("reason_id" in additional) {
            toReturn.reason_id = additional.reason_id;
        }
        if ("note" in additional) {
            toReturn.note = additional.note;
        }
        return toReturn;
    };
    /**
     * Retrieves a return by its id.
     * @param returnId - the id of the return to retrieve
     * @param config - the config object
     * @return the return
     */
    ReturnService.prototype.retrieve = function (returnId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var returnRepository, query, returnObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(returnId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"returnId\" must be defined");
                        }
                        returnRepository = this.activeManager_.withRepository(this.returnRepository_);
                        query = (0, utils_2.buildQuery)({ id: returnId }, config);
                        return [4 /*yield*/, returnRepository.findOne(query)];
                    case 1:
                        returnObj = _a.sent();
                        if (!returnObj) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Return with id: ".concat(returnId, " was not found"));
                        }
                        return [2 /*return*/, returnObj];
                }
            });
        });
    };
    ReturnService.prototype.retrieveBySwap = function (swapId, relations) {
        if (relations === void 0) { relations = []; }
        return __awaiter(this, void 0, void 0, function () {
            var returnRepository, returnObj;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        returnRepository = this.activeManager_.withRepository(this.returnRepository_);
                        return [4 /*yield*/, returnRepository.findOne({
                                where: {
                                    swap_id: swapId,
                                },
                                relations: relations,
                            })];
                    case 1:
                        returnObj = _a.sent();
                        if (!returnObj) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Return with swa_id: ".concat(swapId, " was not found"));
                        }
                        return [2 /*return*/, returnObj];
                }
            });
        });
    };
    ReturnService.prototype.update = function (returnId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var ret, metadata, rest, _a, _b, _c, key, value, retRepo;
                            var e_3, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(returnId)];
                                    case 1:
                                        ret = _e.sent();
                                        if (ret.status === "canceled") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot update a canceled return");
                                        }
                                        metadata = update.metadata, rest = __rest(update, ["metadata"]);
                                        if (metadata) {
                                            ret.metadata = (0, utils_2.setMetadata)(ret, metadata);
                                        }
                                        try {
                                            for (_a = __values(Object.entries(rest)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                                                ret[key] = value;
                                            }
                                        }
                                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_3) throw e_3.error; }
                                        }
                                        retRepo = manager.withRepository(this.returnRepository_);
                                        return [4 /*yield*/, retRepo.save(ret)];
                                    case 2: return [2 /*return*/, _e.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates a return request for an order, with given items, and a shipping
     * method. If no refund amount is provided the refund amount is calculated from
     * the return lines and the shipping cost.
     * @param data - data to use for the return e.g. shipping_method,
     *    items or refund_amount
     * @return the created return
     */
    ReturnService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var returnRepository, orderId, _a, _b, item, line, e_4_1, order, returnLines, toRefund, refundable, method, returnObject, returnReasons, rItemRepo, created, result, shippingMethod, calculationContext, taxLines, includesTax, taxRate, taxAmountIncludedInPrice, shippingPriceWithoutTax_1, shippingTotal;
                            var e_4, _c;
                            var _d, _e, _f, _g, _h;
                            return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        returnRepository = manager.withRepository(this.returnRepository_);
                                        orderId = data.order_id;
                                        if (data.swap_id) {
                                            delete data.order_id;
                                        }
                                        _j.label = 1;
                                    case 1:
                                        _j.trys.push([1, 6, 7, 8]);
                                        _a = __values((_d = data.items) !== null && _d !== void 0 ? _d : []), _b = _a.next();
                                        _j.label = 2;
                                    case 2:
                                        if (!!_b.done) return [3 /*break*/, 5];
                                        item = _b.value;
                                        return [4 /*yield*/, this.lineItemService_
                                                .withTransaction(manager)
                                                .retrieve(item.item_id, {
                                                relations: ["order", "swap", "claim_order"],
                                            })];
                                    case 3:
                                        line = _j.sent();
                                        if (((_e = line.order) === null || _e === void 0 ? void 0 : _e.canceled_at) ||
                                            ((_f = line.swap) === null || _f === void 0 ? void 0 : _f.canceled_at) ||
                                            ((_g = line.claim_order) === null || _g === void 0 ? void 0 : _g.canceled_at)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Cannot create a return for a canceled item.");
                                        }
                                        _j.label = 4;
                                    case 4:
                                        _b = _a.next();
                                        return [3 /*break*/, 2];
                                    case 5: return [3 /*break*/, 8];
                                    case 6:
                                        e_4_1 = _j.sent();
                                        e_4 = { error: e_4_1 };
                                        return [3 /*break*/, 8];
                                    case 7:
                                        try {
                                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                        }
                                        finally { if (e_4) throw e_4.error; }
                                        return [7 /*endfinally*/];
                                    case 8: return [4 /*yield*/, this.orderService_
                                            .withTransaction(manager)
                                            .retrieve(orderId, {
                                            select: ["refunded_total", "total", "refundable_amount"],
                                            relations: [
                                                "swaps",
                                                "swaps.additional_items",
                                                "swaps.additional_items.tax_lines",
                                                "claims",
                                                "claims.additional_items",
                                                "claims.additional_items.tax_lines",
                                                "items",
                                                "items.tax_lines",
                                                "region",
                                                "region.tax_rates",
                                            ],
                                        })];
                                    case 9:
                                        order = _j.sent();
                                        return [4 /*yield*/, this.getFulfillmentItems(order, (_h = data.items) !== null && _h !== void 0 ? _h : [], this.validateReturnLineItem)];
                                    case 10:
                                        returnLines = _j.sent();
                                        toRefund = data.refund_amount;
                                        if (!(0, medusa_core_utils_1.isDefined)(toRefund)) return [3 /*break*/, 11];
                                        refundable = order.refundable_amount;
                                        if (toRefund > refundable) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Cannot refund more than the original payment");
                                        }
                                        return [3 /*break*/, 13];
                                    case 11: return [4 /*yield*/, this.totalsService_.getRefundTotal(order, returnLines)];
                                    case 12:
                                        // Merchant hasn't specified refund amount so we calculate it
                                        toRefund = _j.sent();
                                        _j.label = 13;
                                    case 13:
                                        method = data.shipping_method;
                                        delete data.shipping_method;
                                        returnObject = __assign(__assign({}, data), { status: models_1.ReturnStatus.REQUESTED, refund_amount: Math.floor(toRefund) });
                                        return [4 /*yield*/, this.returnReasonService_
                                                .withTransaction(manager)
                                                .list({ id: __spreadArray([], __read(returnLines.map(function (rl) { return rl.reason_id; })), false) }, { relations: ["return_reason_children"] })];
                                    case 14:
                                        returnReasons = _j.sent();
                                        if (returnReasons.some(function (rr) { var _a; return ((_a = rr.return_reason_children) === null || _a === void 0 ? void 0 : _a.length) > 0; })) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Cannot apply return reason category");
                                        }
                                        rItemRepo = manager.withRepository(this.returnItemRepository_);
                                        returnObject.items = returnLines.map(function (i) {
                                            return rItemRepo.create({
                                                item_id: i.id,
                                                quantity: i.quantity,
                                                requested_quantity: i.quantity,
                                                reason_id: i.reason_id,
                                                note: i.note,
                                                metadata: i.metadata,
                                            });
                                        });
                                        created = returnRepository.create(returnObject);
                                        return [4 /*yield*/, returnRepository.save(created)];
                                    case 15:
                                        result = _j.sent();
                                        if (!(method && method.option_id)) return [3 /*break*/, 20];
                                        return [4 /*yield*/, this.shippingOptionService_
                                                .withTransaction(manager)
                                                .createShippingMethod(method.option_id, {}, {
                                                price: method.price,
                                                return_id: result.id,
                                            })];
                                    case 16:
                                        shippingMethod = _j.sent();
                                        return [4 /*yield*/, this.totalsService_.getCalculationContext(order)];
                                    case 17:
                                        calculationContext = _j.sent();
                                        return [4 /*yield*/, this.taxProviderService_
                                                .withTransaction(manager)
                                                .createShippingTaxLines(shippingMethod, calculationContext)];
                                    case 18:
                                        taxLines = _j.sent();
                                        includesTax = this.featureFlagRouter_.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && shippingMethod.includes_tax;
                                        taxRate = taxLines.reduce(function (acc, curr) {
                                            return acc + curr.rate / 100;
                                        }, 0);
                                        taxAmountIncludedInPrice = !includesTax
                                            ? 0
                                            : Math.round((0, utils_2.calculatePriceTaxAmount)({
                                                price: shippingMethod.price,
                                                taxRate: taxRate,
                                                includesTax: includesTax,
                                            }));
                                        shippingPriceWithoutTax_1 = shippingMethod.price - taxAmountIncludedInPrice;
                                        shippingTotal = shippingPriceWithoutTax_1 +
                                            taxLines.reduce(function (acc, tl) {
                                                return acc + Math.round(shippingPriceWithoutTax_1 * (tl.rate / 100));
                                            }, 0);
                                        if (!(typeof data.refund_amount === "undefined")) return [3 /*break*/, 20];
                                        result.refund_amount = toRefund - shippingTotal;
                                        return [4 /*yield*/, returnRepository.save(result)];
                                    case 19: return [2 /*return*/, _j.sent()];
                                    case 20: return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReturnService.prototype.fulfill = function (returnId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var returnOrder, returnData, items, _a, returnRepo;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(returnId, {
                                            relations: [
                                                "items",
                                                "shipping_method",
                                                "shipping_method.tax_lines",
                                                "shipping_method.shipping_option",
                                                "swap",
                                                "claim_order",
                                            ],
                                        })];
                                    case 1:
                                        returnOrder = _b.sent();
                                        if (returnOrder.status === "canceled") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot fulfill a canceled return");
                                        }
                                        returnData = __assign({}, returnOrder);
                                        return [4 /*yield*/, this.lineItemService_.withTransaction(manager).list({
                                                id: returnOrder.items.map(function (_a) {
                                                    var item_id = _a.item_id;
                                                    return item_id;
                                                }),
                                            }, {
                                                relations: ["tax_lines", "variant.product.profiles"],
                                            })];
                                    case 2:
                                        items = _b.sent();
                                        returnData.items = returnOrder.items.map(function (item) {
                                            var found = items.find(function (i) { return i.id === item.item_id; });
                                            return __assign(__assign({}, item), { item: found });
                                        });
                                        if (returnOrder.shipping_data) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Return has already been fulfilled");
                                        }
                                        if (returnOrder.shipping_method === null) {
                                            return [2 /*return*/, returnOrder];
                                        }
                                        _a = returnOrder;
                                        return [4 /*yield*/, this.fulfillmentProviderService_.createReturn(returnData)];
                                    case 3:
                                        _a.shipping_data =
                                            _b.sent();
                                        returnRepo = manager.withRepository(this.returnRepository_);
                                        return [4 /*yield*/, returnRepo.save(returnOrder)];
                                    case 4: return [2 /*return*/, _b.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Registers a previously requested return as received. This will create a
     * refund to the customer. If the returned items don't match the requested
     * items the return status will be updated to requires_action. This behaviour
     * is useful in situations where a custom refund amount is requested, but the
     * returned items are not matching the requested items. Setting the
     * allowMismatch argument to true, will process the return, ignoring any
     * mismatches.
     * @param returnId - the orderId to return to
     * @param receivedItems - the items received after return.
     * @param refundAmount - the amount to return
     * @param allowMismatch - whether to ignore return/received
     * product mismatch
     * @return the result of the update operation
     */
    ReturnService.prototype.receive = function (returnId, receivedItems, refundAmount, allowMismatch, context) {
        if (allowMismatch === void 0) { allowMismatch = false; }
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var returnRepository, returnObj, orderId, order, returnLines, newLines, returnStatus, isMatching, totalRefundableAmount, now, updateObj, result, lineItemServiceTx, _a, _b, i, lineItem, returnedQuantity, e_5_1, productVarInventoryTx, _loop_1, newLines_1, newLines_1_1, line, e_6_1;
                            var e_5, _c, e_6, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        returnRepository = manager.withRepository(this.returnRepository_);
                                        return [4 /*yield*/, this.retrieve(returnId, {
                                                relations: ["items", "swap", "swap.additional_items"],
                                            })];
                                    case 1:
                                        returnObj = _e.sent();
                                        if (returnObj.status === models_1.ReturnStatus.CANCELED) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot receive a canceled return");
                                        }
                                        orderId = returnObj.order_id;
                                        // check if return is requested on a swap
                                        if (returnObj.swap) {
                                            orderId = returnObj.swap.order_id;
                                        }
                                        return [4 /*yield*/, this.orderService_
                                                .withTransaction(manager)
                                                .retrieve(orderId, {
                                                relations: [
                                                    "items",
                                                    "returns",
                                                    "payments",
                                                    "discounts",
                                                    "discounts.rule",
                                                    "refunds",
                                                    "shipping_methods",
                                                    "shipping_methods.shipping_option",
                                                    "region",
                                                    "swaps",
                                                    "swaps.additional_items",
                                                    "claims",
                                                    "claims.additional_items",
                                                ],
                                            })];
                                    case 2:
                                        order = _e.sent();
                                        if (returnObj.status === models_1.ReturnStatus.RECEIVED) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Return with id ".concat(returnId, " has already been received"));
                                        }
                                        return [4 /*yield*/, this.getFulfillmentItems(order, receivedItems, this.validateReturnLineItem)];
                                    case 3:
                                        returnLines = _e.sent();
                                        newLines = returnLines.map(function (l) {
                                            var existing = returnObj.items.find(function (i) { return l.id === i.item_id; });
                                            if (existing) {
                                                return __assign(__assign({}, existing), { quantity: l.quantity, requested_quantity: existing.quantity, received_quantity: l.quantity, is_requested: l.quantity === existing.quantity });
                                            }
                                            else {
                                                return {
                                                    return_id: returnObj.id,
                                                    item_id: l.id,
                                                    quantity: l.quantity,
                                                    is_requested: false,
                                                    received_quantity: l.quantity,
                                                    metadata: l.metadata || {},
                                                };
                                            }
                                        });
                                        returnStatus = models_1.ReturnStatus.RECEIVED;
                                        isMatching = newLines.every(function (l) { return l.is_requested; });
                                        if (!isMatching && !allowMismatch) {
                                            returnStatus = models_1.ReturnStatus.REQUIRES_ACTION;
                                        }
                                        totalRefundableAmount = refundAmount !== null && refundAmount !== void 0 ? refundAmount : returnObj.refund_amount;
                                        now = new Date();
                                        updateObj = __assign(__assign({}, returnObj), { location_id: context.locationId || returnObj.location_id, status: returnStatus, items: newLines, refund_amount: totalRefundableAmount, received_at: now.toISOString() });
                                        return [4 /*yield*/, returnRepository.save(updateObj)];
                                    case 4:
                                        result = _e.sent();
                                        lineItemServiceTx = this.lineItemService_.withTransaction(manager);
                                        _e.label = 5;
                                    case 5:
                                        _e.trys.push([5, 11, 12, 13]);
                                        _a = __values(returnObj.items), _b = _a.next();
                                        _e.label = 6;
                                    case 6:
                                        if (!!_b.done) return [3 /*break*/, 10];
                                        i = _b.value;
                                        return [4 /*yield*/, lineItemServiceTx.retrieve(i.item_id)];
                                    case 7:
                                        lineItem = _e.sent();
                                        returnedQuantity = (lineItem.returned_quantity || 0) + i.quantity;
                                        return [4 /*yield*/, lineItemServiceTx.update(i.item_id, {
                                                returned_quantity: returnedQuantity,
                                            })];
                                    case 8:
                                        _e.sent();
                                        _e.label = 9;
                                    case 9:
                                        _b = _a.next();
                                        return [3 /*break*/, 6];
                                    case 10: return [3 /*break*/, 13];
                                    case 11:
                                        e_5_1 = _e.sent();
                                        e_5 = { error: e_5_1 };
                                        return [3 /*break*/, 13];
                                    case 12:
                                        try {
                                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                        }
                                        finally { if (e_5) throw e_5.error; }
                                        return [7 /*endfinally*/];
                                    case 13:
                                        productVarInventoryTx = this.productVariantInventoryService_.withTransaction(manager);
                                        _loop_1 = function (line) {
                                            var orderItem;
                                            return __generator(this, function (_f) {
                                                switch (_f.label) {
                                                    case 0:
                                                        orderItem = order.items.find(function (i) { return i.id === line.item_id; });
                                                        if (!(orderItem && orderItem.variant_id)) return [3 /*break*/, 2];
                                                        return [4 /*yield*/, productVarInventoryTx.adjustInventory(orderItem.variant_id, result.location_id, line.received_quantity)];
                                                    case 1:
                                                        _f.sent();
                                                        _f.label = 2;
                                                    case 2: return [2 /*return*/];
                                                }
                                            });
                                        };
                                        _e.label = 14;
                                    case 14:
                                        _e.trys.push([14, 19, 20, 21]);
                                        newLines_1 = __values(newLines), newLines_1_1 = newLines_1.next();
                                        _e.label = 15;
                                    case 15:
                                        if (!!newLines_1_1.done) return [3 /*break*/, 18];
                                        line = newLines_1_1.value;
                                        return [5 /*yield**/, _loop_1(line)];
                                    case 16:
                                        _e.sent();
                                        _e.label = 17;
                                    case 17:
                                        newLines_1_1 = newLines_1.next();
                                        return [3 /*break*/, 15];
                                    case 18: return [3 /*break*/, 21];
                                    case 19:
                                        e_6_1 = _e.sent();
                                        e_6 = { error: e_6_1 };
                                        return [3 /*break*/, 21];
                                    case 20:
                                        try {
                                            if (newLines_1_1 && !newLines_1_1.done && (_d = newLines_1.return)) _d.call(newLines_1);
                                        }
                                        finally { if (e_6) throw e_6.error; }
                                        return [7 /*endfinally*/];
                                    case 21: return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ReturnService;
}(interfaces_1.TransactionBaseService));
exports.default = ReturnService;
//# sourceMappingURL=return.js.map