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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
var models_1 = require("../models");
var utils_1 = require("../utils");
var utils_2 = require("@medusajs/utils");
var ClaimService = /** @class */ (function (_super) {
    __extends(ClaimService, _super);
    function ClaimService(_a) {
        var addressRepository = _a.addressRepository, claimRepository = _a.claimRepository, shippingMethodRepository = _a.shippingMethodRepository, lineItemRepository = _a.lineItemRepository, claimItemService = _a.claimItemService, eventBusService = _a.eventBusService, fulfillmentProviderService = _a.fulfillmentProviderService, fulfillmentService = _a.fulfillmentService, productVariantInventoryService = _a.productVariantInventoryService, lineItemService = _a.lineItemService, paymentProviderService = _a.paymentProviderService, regionService = _a.regionService, returnService = _a.returnService, shippingOptionService = _a.shippingOptionService, taxProviderService = _a.taxProviderService, totalsService = _a.totalsService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.addressRepository_ = addressRepository;
        _this.claimRepository_ = claimRepository;
        _this.shippingMethodRepository_ = shippingMethodRepository;
        _this.lineItemRepository_ = lineItemRepository;
        _this.claimItemService_ = claimItemService;
        _this.eventBus_ = eventBusService;
        _this.fulfillmentProviderService_ = fulfillmentProviderService;
        _this.fulfillmentService_ = fulfillmentService;
        _this.productVariantInventoryService_ = productVariantInventoryService;
        _this.lineItemService_ = lineItemService;
        _this.paymentProviderService_ = paymentProviderService;
        _this.regionService_ = regionService;
        _this.returnService_ = returnService;
        _this.shippingOptionService_ = shippingOptionService;
        _this.taxProviderService_ = taxProviderService;
        _this.totalsService_ = totalsService;
        return _this;
    }
    ClaimService.prototype.update = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var claimRepo, claim, claim_items, shipping_methods, metadata, no_notification, shippingOptionServiceTx, _a, _b, m, e_1_1, shipping_methods_1, shipping_methods_1_1, method, e_2_1, claimItemServiceTx, claim_items_1, claim_items_1_1, i, e_3_1;
                            var e_1, _c, e_2, _d, e_3, _e;
                            var _f;
                            return __generator(this, function (_g) {
                                switch (_g.label) {
                                    case 0:
                                        claimRepo = transactionManager.withRepository(this.claimRepository_);
                                        return [4 /*yield*/, this.retrieve(id, {
                                                relations: ["shipping_methods"],
                                            })];
                                    case 1:
                                        claim = _g.sent();
                                        if (claim.canceled_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Canceled claim cannot be updated");
                                        }
                                        claim_items = data.claim_items, shipping_methods = data.shipping_methods, metadata = data.metadata, no_notification = data.no_notification;
                                        if (!metadata) return [3 /*break*/, 3];
                                        claim.metadata = (0, utils_1.setMetadata)(claim, metadata);
                                        return [4 /*yield*/, claimRepo.save(claim)];
                                    case 2:
                                        _g.sent();
                                        _g.label = 3;
                                    case 3:
                                        if (!shipping_methods) return [3 /*break*/, 20];
                                        shippingOptionServiceTx = this.shippingOptionService_.withTransaction(transactionManager);
                                        _g.label = 4;
                                    case 4:
                                        _g.trys.push([4, 9, 10, 11]);
                                        _a = __values(claim.shipping_methods), _b = _a.next();
                                        _g.label = 5;
                                    case 5:
                                        if (!!_b.done) return [3 /*break*/, 8];
                                        m = _b.value;
                                        return [4 /*yield*/, shippingOptionServiceTx.updateShippingMethod(m.id, {
                                                claim_order_id: null,
                                            })];
                                    case 6:
                                        _g.sent();
                                        _g.label = 7;
                                    case 7:
                                        _b = _a.next();
                                        return [3 /*break*/, 5];
                                    case 8: return [3 /*break*/, 11];
                                    case 9:
                                        e_1_1 = _g.sent();
                                        e_1 = { error: e_1_1 };
                                        return [3 /*break*/, 11];
                                    case 10:
                                        try {
                                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                        return [7 /*endfinally*/];
                                    case 11:
                                        _g.trys.push([11, 18, 19, 20]);
                                        shipping_methods_1 = __values(shipping_methods), shipping_methods_1_1 = shipping_methods_1.next();
                                        _g.label = 12;
                                    case 12:
                                        if (!!shipping_methods_1_1.done) return [3 /*break*/, 17];
                                        method = shipping_methods_1_1.value;
                                        if (!method.id) return [3 /*break*/, 14];
                                        return [4 /*yield*/, shippingOptionServiceTx.updateShippingMethod(method.id, {
                                                claim_order_id: claim.id,
                                            })];
                                    case 13:
                                        _g.sent();
                                        return [3 /*break*/, 16];
                                    case 14: return [4 /*yield*/, shippingOptionServiceTx.createShippingMethod(method.option_id, (_f = method.data) !== null && _f !== void 0 ? _f : {}, {
                                            claim_order_id: claim.id,
                                            price: method.price,
                                        })];
                                    case 15:
                                        _g.sent();
                                        _g.label = 16;
                                    case 16:
                                        shipping_methods_1_1 = shipping_methods_1.next();
                                        return [3 /*break*/, 12];
                                    case 17: return [3 /*break*/, 20];
                                    case 18:
                                        e_2_1 = _g.sent();
                                        e_2 = { error: e_2_1 };
                                        return [3 /*break*/, 20];
                                    case 19:
                                        try {
                                            if (shipping_methods_1_1 && !shipping_methods_1_1.done && (_d = shipping_methods_1.return)) _d.call(shipping_methods_1);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                        return [7 /*endfinally*/];
                                    case 20:
                                        if (!(no_notification !== undefined)) return [3 /*break*/, 22];
                                        claim.no_notification = no_notification;
                                        return [4 /*yield*/, claimRepo.save(claim)];
                                    case 21:
                                        _g.sent();
                                        _g.label = 22;
                                    case 22:
                                        if (!claim_items) return [3 /*break*/, 30];
                                        claimItemServiceTx = this.claimItemService_.withTransaction(transactionManager);
                                        _g.label = 23;
                                    case 23:
                                        _g.trys.push([23, 28, 29, 30]);
                                        claim_items_1 = __values(claim_items), claim_items_1_1 = claim_items_1.next();
                                        _g.label = 24;
                                    case 24:
                                        if (!!claim_items_1_1.done) return [3 /*break*/, 27];
                                        i = claim_items_1_1.value;
                                        if (!i.id) return [3 /*break*/, 26];
                                        return [4 /*yield*/, claimItemServiceTx.update(i.id, i)];
                                    case 25:
                                        _g.sent();
                                        _g.label = 26;
                                    case 26:
                                        claim_items_1_1 = claim_items_1.next();
                                        return [3 /*break*/, 24];
                                    case 27: return [3 /*break*/, 30];
                                    case 28:
                                        e_3_1 = _g.sent();
                                        e_3 = { error: e_3_1 };
                                        return [3 /*break*/, 30];
                                    case 29:
                                        try {
                                            if (claim_items_1_1 && !claim_items_1_1.done && (_e = claim_items_1.return)) _e.call(claim_items_1);
                                        }
                                        finally { if (e_3) throw e_3.error; }
                                        return [7 /*endfinally*/];
                                    case 30: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(transactionManager)
                                            .emit(ClaimService.Events.UPDATED, {
                                            id: claim.id,
                                            no_notification: claim.no_notification,
                                        })];
                                    case 31:
                                        _g.sent();
                                        return [2 /*return*/, claim];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ClaimService.prototype.validateCreateClaimInput = function (data) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var lineItemServiceTx, type, claim_items, additional_items, refund_amount, claimLineItems, claimLineItems_1, claimLineItems_1_1, line;
            var e_4, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        lineItemServiceTx = this.lineItemService_.withTransaction(this.manager_);
                        type = data.type, claim_items = data.claim_items, additional_items = data.additional_items, refund_amount = data.refund_amount;
                        if (type !== models_1.ClaimType.REFUND && type !== models_1.ClaimType.REPLACE) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Claim type must be one of \"refund\" or \"replace\".");
                        }
                        if (type === models_1.ClaimType.REPLACE && !(additional_items === null || additional_items === void 0 ? void 0 : additional_items.length)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Claims with type \"replace\" must have at least one additional item.");
                        }
                        if (!(claim_items === null || claim_items === void 0 ? void 0 : claim_items.length)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Claims must have at least one claim item.");
                        }
                        if (refund_amount && type !== models_1.ClaimType.REFUND) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Claim has type \"".concat(type, "\" but must be type \"refund\" to have a refund_amount."));
                        }
                        return [4 /*yield*/, lineItemServiceTx.list({ id: claim_items.map(function (c) { return c.item_id; }) }, { relations: ["order", "swap", "claim_order", "tax_lines"] })];
                    case 1:
                        claimLineItems = _e.sent();
                        try {
                            for (claimLineItems_1 = __values(claimLineItems), claimLineItems_1_1 = claimLineItems_1.next(); !claimLineItems_1_1.done; claimLineItems_1_1 = claimLineItems_1.next()) {
                                line = claimLineItems_1_1.value;
                                if (((_a = line.order) === null || _a === void 0 ? void 0 : _a.canceled_at) ||
                                    ((_b = line.swap) === null || _b === void 0 ? void 0 : _b.canceled_at) ||
                                    ((_c = line.claim_order) === null || _c === void 0 ? void 0 : _c.canceled_at)) {
                                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Cannot create a claim on a canceled item.");
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (claimLineItems_1_1 && !claimLineItems_1_1.done && (_d = claimLineItems_1.return)) _d.call(claimLineItems_1);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Finds claim line items on an order and calculates the refund amount.
     * There are three places too look:
     * - Order items
     * - Swap items
     * - Claim items (from previous claims)
     * Note, it will attempt to return early from each of these places to avoid having to iterate over all items every time.
     * @param order - the order to find claim lines on
     * @param claimItems - the claim items to match against
     * @return the refund amount
     */
    ClaimService.prototype.getRefundTotalForClaimLinesOnOrder = function (order, claimItems) {
        return __awaiter(this, void 0, void 0, function () {
            var claimLines, refunds, claimLines_1, claimLines_1_1, item, refund, e_5_1;
            var e_5, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        claimLines = claimItems
                            .map(function (ci) {
                            var e_6, _a, e_7, _b;
                            var _c, _d;
                            var predicate = function (it) {
                                return it.shipped_quantity > 0 &&
                                    ci.quantity <= it.shipped_quantity &&
                                    it.id === ci.item_id;
                            };
                            var claimLine = order.items.find(predicate);
                            if (claimLine) {
                                return __assign(__assign({}, claimLine), { quantity: ci.quantity });
                            }
                            if ((_c = order.swaps) === null || _c === void 0 ? void 0 : _c.length) {
                                try {
                                    for (var _e = __values(order.swaps), _f = _e.next(); !_f.done; _f = _e.next()) {
                                        var swap = _f.value;
                                        var claimLine_1 = swap.additional_items.find(predicate);
                                        if (claimLine_1) {
                                            return __assign(__assign({}, claimLine_1), { quantity: ci.quantity });
                                        }
                                    }
                                }
                                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                                finally {
                                    try {
                                        if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                                    }
                                    finally { if (e_6) throw e_6.error; }
                                }
                            }
                            if ((_d = order.claims) === null || _d === void 0 ? void 0 : _d.length) {
                                try {
                                    for (var _g = __values(order.claims), _h = _g.next(); !_h.done; _h = _g.next()) {
                                        var claim = _h.value;
                                        var claimLine_2 = claim.additional_items.find(predicate);
                                        if (claimLine_2) {
                                            return __assign(__assign({}, claimLine_2), { quantity: ci.quantity });
                                        }
                                    }
                                }
                                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                                finally {
                                    try {
                                        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                                    }
                                    finally { if (e_7) throw e_7.error; }
                                }
                            }
                            return null;
                        })
                            .filter(Boolean);
                        refunds = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        claimLines_1 = __values(claimLines), claimLines_1_1 = claimLines_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!claimLines_1_1.done) return [3 /*break*/, 5];
                        item = claimLines_1_1.value;
                        return [4 /*yield*/, this.totalsService_.getLineItemRefund(order, item)];
                    case 3:
                        refund = _b.sent();
                        refunds.push(refund);
                        _b.label = 4;
                    case 4:
                        claimLines_1_1 = claimLines_1.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_5_1 = _b.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (claimLines_1_1 && !claimLines_1_1.done && (_a = claimLines_1.return)) _a.call(claimLines_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, Math.round(refunds.reduce(function (acc, next) { return acc + next; }, 0))];
                }
            });
        });
    };
    /**
     * Creates a Claim on an Order. Claims consists of items that are claimed and
     * optionally items to be sent as replacement for the claimed items. The
     * shipping address that the new items will be shipped to
     * @param data - the object containing all data required to create a claim
     * @return created claim
     */
    ClaimService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var claimRepo, type, claim_items, order, return_shipping, additional_items, shipping_methods, refund_amount, shipping_address, shipping_address_id, no_notification, return_location_id, rest, addressId, addressRepo, created_1, saved, toRefund, lineItemServiceTx, newItems, evaluatedNoNotification, created, result, calcContext, lineItems, shippingOptionServiceTx, shipping_methods_2, shipping_methods_2_1, method, e_8_1, claimItemServiceTx, claim_items_2, claim_items_2_1, ci, e_9_1;
                            var e_8, _a, e_9, _b;
                            var _this = this;
                            var _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        claimRepo = transactionManager.withRepository(this.claimRepository_);
                                        type = data.type, claim_items = data.claim_items, order = data.order, return_shipping = data.return_shipping, additional_items = data.additional_items, shipping_methods = data.shipping_methods, refund_amount = data.refund_amount, shipping_address = data.shipping_address, shipping_address_id = data.shipping_address_id, no_notification = data.no_notification, return_location_id = data.return_location_id, rest = __rest(data, ["type", "claim_items", "order", "return_shipping", "additional_items", "shipping_methods", "refund_amount", "shipping_address", "shipping_address_id", "no_notification", "return_location_id"]);
                                        return [4 /*yield*/, this.validateCreateClaimInput(data)];
                                    case 1:
                                        _d.sent();
                                        addressId = shipping_address_id || order.shipping_address_id;
                                        if (!shipping_address) return [3 /*break*/, 3];
                                        addressRepo = transactionManager.withRepository(this.addressRepository_);
                                        created_1 = addressRepo.create(shipping_address);
                                        return [4 /*yield*/, addressRepo.save(created_1)];
                                    case 2:
                                        saved = _d.sent();
                                        addressId = saved.id;
                                        _d.label = 3;
                                    case 3:
                                        toRefund = refund_amount;
                                        if (!(type === models_1.ClaimType.REFUND && typeof refund_amount === "undefined")) return [3 /*break*/, 5];
                                        return [4 /*yield*/, this.getRefundTotalForClaimLinesOnOrder(order, claim_items)];
                                    case 4:
                                        // In case no refund amount is passed, we calculate it based on the claim items on the order
                                        toRefund = _d.sent();
                                        _d.label = 5;
                                    case 5:
                                        lineItemServiceTx = this.lineItemService_.withTransaction(transactionManager);
                                        newItems = [];
                                        if (!(0, medusa_core_utils_1.isDefined)(additional_items)) return [3 /*break*/, 8];
                                        return [4 /*yield*/, (0, utils_2.promiseAll)(additional_items.map(function (i) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    return [2 /*return*/, lineItemServiceTx.generate(i.variant_id, order.region_id, i.quantity)];
                                                });
                                            }); }))];
                                    case 6:
                                        newItems = _d.sent();
                                        return [4 /*yield*/, (0, utils_2.promiseAll)(newItems.map(function (newItem) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!newItem.variant_id) return [3 /*break*/, 2];
                                                            return [4 /*yield*/, this.productVariantInventoryService_.reserveQuantity(newItem.variant_id, newItem.quantity, {
                                                                    lineItemId: newItem.id,
                                                                    salesChannelId: order.sales_channel_id,
                                                                })];
                                                        case 1:
                                                            _a.sent();
                                                            _a.label = 2;
                                                        case 2: return [2 /*return*/];
                                                    }
                                                });
                                            }); }))];
                                    case 7:
                                        _d.sent();
                                        _d.label = 8;
                                    case 8:
                                        evaluatedNoNotification = no_notification !== undefined
                                            ? no_notification
                                            : order.no_notification;
                                        created = claimRepo.create(__assign({ shipping_address_id: addressId, payment_status: type === models_1.ClaimType.REFUND ? "not_refunded" : "na", refund_amount: toRefund, type: type, additional_items: newItems, order_id: order.id, no_notification: evaluatedNoNotification }, rest));
                                        return [4 /*yield*/, claimRepo.save(created)];
                                    case 9:
                                        result = _d.sent();
                                        if (!(result.additional_items && result.additional_items.length)) return [3 /*break*/, 13];
                                        return [4 /*yield*/, this.totalsService_.getCalculationContext(order)];
                                    case 10:
                                        calcContext = _d.sent();
                                        return [4 /*yield*/, lineItemServiceTx.list({
                                                id: result.additional_items.map(function (i) { return i.id; }),
                                            }, {
                                                relations: ["variant.product.profiles"],
                                            })];
                                    case 11:
                                        lineItems = _d.sent();
                                        return [4 /*yield*/, this.taxProviderService_
                                                .withTransaction(transactionManager)
                                                .createTaxLines(lineItems, calcContext)];
                                    case 12:
                                        _d.sent();
                                        _d.label = 13;
                                    case 13:
                                        if (!shipping_methods) return [3 /*break*/, 23];
                                        shippingOptionServiceTx = this.shippingOptionService_.withTransaction(transactionManager);
                                        _d.label = 14;
                                    case 14:
                                        _d.trys.push([14, 21, 22, 23]);
                                        shipping_methods_2 = __values(shipping_methods), shipping_methods_2_1 = shipping_methods_2.next();
                                        _d.label = 15;
                                    case 15:
                                        if (!!shipping_methods_2_1.done) return [3 /*break*/, 20];
                                        method = shipping_methods_2_1.value;
                                        if (!method.id) return [3 /*break*/, 17];
                                        return [4 /*yield*/, shippingOptionServiceTx.updateShippingMethod(method.id, {
                                                claim_order_id: result.id,
                                            })];
                                    case 16:
                                        _d.sent();
                                        return [3 /*break*/, 19];
                                    case 17: return [4 /*yield*/, shippingOptionServiceTx.createShippingMethod(method.option_id, (_c = method.data) !== null && _c !== void 0 ? _c : {}, {
                                            claim_order_id: result.id,
                                            price: method.price,
                                        })];
                                    case 18:
                                        _d.sent();
                                        _d.label = 19;
                                    case 19:
                                        shipping_methods_2_1 = shipping_methods_2.next();
                                        return [3 /*break*/, 15];
                                    case 20: return [3 /*break*/, 23];
                                    case 21:
                                        e_8_1 = _d.sent();
                                        e_8 = { error: e_8_1 };
                                        return [3 /*break*/, 23];
                                    case 22:
                                        try {
                                            if (shipping_methods_2_1 && !shipping_methods_2_1.done && (_a = shipping_methods_2.return)) _a.call(shipping_methods_2);
                                        }
                                        finally { if (e_8) throw e_8.error; }
                                        return [7 /*endfinally*/];
                                    case 23:
                                        claimItemServiceTx = this.claimItemService_.withTransaction(transactionManager);
                                        _d.label = 24;
                                    case 24:
                                        _d.trys.push([24, 29, 30, 31]);
                                        claim_items_2 = __values(claim_items), claim_items_2_1 = claim_items_2.next();
                                        _d.label = 25;
                                    case 25:
                                        if (!!claim_items_2_1.done) return [3 /*break*/, 28];
                                        ci = claim_items_2_1.value;
                                        return [4 /*yield*/, claimItemServiceTx.create(__assign(__assign({}, ci), { claim_order_id: result.id }))];
                                    case 26:
                                        _d.sent();
                                        _d.label = 27;
                                    case 27:
                                        claim_items_2_1 = claim_items_2.next();
                                        return [3 /*break*/, 25];
                                    case 28: return [3 /*break*/, 31];
                                    case 29:
                                        e_9_1 = _d.sent();
                                        e_9 = { error: e_9_1 };
                                        return [3 /*break*/, 31];
                                    case 30:
                                        try {
                                            if (claim_items_2_1 && !claim_items_2_1.done && (_b = claim_items_2.return)) _b.call(claim_items_2);
                                        }
                                        finally { if (e_9) throw e_9.error; }
                                        return [7 /*endfinally*/];
                                    case 31:
                                        if (!return_shipping) return [3 /*break*/, 33];
                                        return [4 /*yield*/, this.returnService_.withTransaction(transactionManager).create({
                                                refund_amount: toRefund,
                                                order_id: order.id,
                                                claim_order_id: result.id,
                                                items: claim_items.map(function (ci) {
                                                    return ({
                                                        item_id: ci.item_id,
                                                        quantity: ci.quantity,
                                                        metadata: ci.metadata,
                                                    });
                                                }),
                                                shipping_method: return_shipping,
                                                no_notification: evaluatedNoNotification,
                                                location_id: return_location_id,
                                            })];
                                    case 32:
                                        _d.sent();
                                        _d.label = 33;
                                    case 33: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(transactionManager)
                                            .emit(ClaimService.Events.CREATED, {
                                            id: result.id,
                                            no_notification: result.no_notification,
                                        })];
                                    case 34:
                                        _d.sent();
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
     * @param id - the object containing all data required to create a claim
     * @param config - config object
     * @param config.metadata - config metadata
     * @param config.no_notification - config no notification
     * @return created claim
     */
    ClaimService.prototype.createFulfillment = function (id, config) {
        if (config === void 0) { config = {
            metadata: {},
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var metadata, no_notification;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        metadata = config.metadata, no_notification = config.no_notification;
                        return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var claim, order, evaluatedNoNotification, fulfillments, successfullyFulfilledItems, fulfillments_1, fulfillments_1_1, fulfillment, _loop_1, this_1, _a, _b, item, e_10_1, claimRepo, claimOrder, eventsToEmit;
                                var e_11, _c, e_10, _d;
                                var _e;
                                return __generator(this, function (_f) {
                                    switch (_f.label) {
                                        case 0: return [4 /*yield*/, this.retrieve(id, {
                                                relations: [
                                                    "additional_items.tax_lines",
                                                    "additional_items.variant.product.profiles",
                                                    "shipping_methods",
                                                    "shipping_methods.shipping_option",
                                                    "shipping_methods.tax_lines",
                                                    "shipping_address",
                                                    "order",
                                                    "order.billing_address",
                                                    "order.discounts",
                                                    "order.discounts.rule",
                                                    "order.payments",
                                                ],
                                            })];
                                        case 1:
                                            claim = _f.sent();
                                            if (claim.canceled_at) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Canceled claim cannot be fulfilled");
                                            }
                                            order = claim.order;
                                            if (claim.fulfillment_status !== "not_fulfilled" &&
                                                claim.fulfillment_status !== "canceled") {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "The claim has already been fulfilled.");
                                            }
                                            if (claim.type !== "replace") {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Claims with the type \"".concat(claim.type, "\" can not be fulfilled."));
                                            }
                                            if (!((_e = claim.shipping_methods) === null || _e === void 0 ? void 0 : _e.length)) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot fulfill a claim without a shipping method.");
                                            }
                                            evaluatedNoNotification = no_notification !== undefined
                                                ? no_notification
                                                : claim.no_notification;
                                            return [4 /*yield*/, this.fulfillmentService_
                                                    .withTransaction(transactionManager)
                                                    .createFulfillment(__assign(__assign({}, claim), { email: order.email, payments: order.payments, discounts: order.discounts, currency_code: order.currency_code, tax_rate: order.tax_rate, region_id: order.region_id, display_id: order.display_id, billing_address: order.billing_address, items: claim.additional_items, shipping_methods: claim.shipping_methods, is_claim: true, no_notification: evaluatedNoNotification }), claim.additional_items.map(function (i) { return ({
                                                    item_id: i.id,
                                                    quantity: i.quantity,
                                                }); }), { claim_order_id: id, metadata: metadata, location_id: config.location_id })];
                                        case 2:
                                            fulfillments = _f.sent();
                                            successfullyFulfilledItems = [];
                                            try {
                                                for (fulfillments_1 = __values(fulfillments), fulfillments_1_1 = fulfillments_1.next(); !fulfillments_1_1.done; fulfillments_1_1 = fulfillments_1.next()) {
                                                    fulfillment = fulfillments_1_1.value;
                                                    successfullyFulfilledItems = successfullyFulfilledItems.concat(fulfillment.items);
                                                }
                                            }
                                            catch (e_11_1) { e_11 = { error: e_11_1 }; }
                                            finally {
                                                try {
                                                    if (fulfillments_1_1 && !fulfillments_1_1.done && (_c = fulfillments_1.return)) _c.call(fulfillments_1);
                                                }
                                                finally { if (e_11) throw e_11.error; }
                                            }
                                            claim.fulfillment_status = models_1.ClaimFulfillmentStatus.FULFILLED;
                                            _loop_1 = function (item) {
                                                var fulfillmentItem, fulfilledQuantity;
                                                return __generator(this, function (_g) {
                                                    switch (_g.label) {
                                                        case 0:
                                                            fulfillmentItem = successfullyFulfilledItems.find(function (successfullyFulfilledItem) {
                                                                return successfullyFulfilledItem.item_id === item.id;
                                                            });
                                                            if (!fulfillmentItem) return [3 /*break*/, 2];
                                                            fulfilledQuantity = (item.fulfilled_quantity || 0) + fulfillmentItem.quantity;
                                                            // Update the fulfilled quantity
                                                            return [4 /*yield*/, this_1.lineItemService_
                                                                    .withTransaction(transactionManager)
                                                                    .update(item.id, {
                                                                    fulfilled_quantity: fulfilledQuantity,
                                                                })];
                                                        case 1:
                                                            // Update the fulfilled quantity
                                                            _g.sent();
                                                            if (item.quantity !== fulfilledQuantity) {
                                                                claim.fulfillment_status = models_1.ClaimFulfillmentStatus.REQUIRES_ACTION;
                                                            }
                                                            return [3 /*break*/, 3];
                                                        case 2:
                                                            if (item.quantity !== item.fulfilled_quantity) {
                                                                claim.fulfillment_status = models_1.ClaimFulfillmentStatus.REQUIRES_ACTION;
                                                            }
                                                            _g.label = 3;
                                                        case 3: return [2 /*return*/];
                                                    }
                                                });
                                            };
                                            this_1 = this;
                                            _f.label = 3;
                                        case 3:
                                            _f.trys.push([3, 8, 9, 10]);
                                            _a = __values(claim.additional_items), _b = _a.next();
                                            _f.label = 4;
                                        case 4:
                                            if (!!_b.done) return [3 /*break*/, 7];
                                            item = _b.value;
                                            return [5 /*yield**/, _loop_1(item)];
                                        case 5:
                                            _f.sent();
                                            _f.label = 6;
                                        case 6:
                                            _b = _a.next();
                                            return [3 /*break*/, 4];
                                        case 7: return [3 /*break*/, 10];
                                        case 8:
                                            e_10_1 = _f.sent();
                                            e_10 = { error: e_10_1 };
                                            return [3 /*break*/, 10];
                                        case 9:
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_10) throw e_10.error; }
                                            return [7 /*endfinally*/];
                                        case 10:
                                            claimRepo = transactionManager.withRepository(this.claimRepository_);
                                            return [4 /*yield*/, claimRepo.save(claim)];
                                        case 11:
                                            claimOrder = _f.sent();
                                            eventsToEmit = fulfillments.map(function (fulfillment) { return ({
                                                eventName: ClaimService.Events.FULFILLMENT_CREATED,
                                                data: {
                                                    id: id,
                                                    fulfillment_id: fulfillment.id,
                                                    no_notification: claim.no_notification,
                                                },
                                            }); });
                                            return [4 /*yield*/, this.eventBus_
                                                    .withTransaction(transactionManager)
                                                    .emit(eventsToEmit)];
                                        case 12:
                                            _f.sent();
                                            return [2 /*return*/, claimOrder];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ClaimService.prototype.cancelFulfillment = function (fulfillmentId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var canceled, claim, claimRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.fulfillmentService_
                                            .withTransaction(transactionManager)
                                            .cancelFulfillment(fulfillmentId)];
                                    case 1:
                                        canceled = _a.sent();
                                        if (!canceled.claim_order_id) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Fufillment not related to a claim");
                                        }
                                        return [4 /*yield*/, this.retrieve(canceled.claim_order_id)];
                                    case 2:
                                        claim = _a.sent();
                                        claim.fulfillment_status = models_1.ClaimFulfillmentStatus.CANCELED;
                                        claimRepo = transactionManager.withRepository(this.claimRepository_);
                                        return [2 /*return*/, claimRepo.save(claim)];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ClaimService.prototype.processRefund = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var claim, claimRepo, claimOrder;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(id, {
                                            relations: ["order", "order.payments"],
                                        })];
                                    case 1:
                                        claim = _a.sent();
                                        if (claim.canceled_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Canceled claim cannot be processed");
                                        }
                                        if (claim.type !== "refund") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Claim must have type \"refund\" to create a refund.");
                                        }
                                        if (!claim.refund_amount) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(transactionManager)
                                                .refundPayment(claim.order.payments, claim.refund_amount, "claim")];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3:
                                        claim.payment_status = models_1.ClaimPaymentStatus.REFUNDED;
                                        claimRepo = transactionManager.withRepository(this.claimRepository_);
                                        return [4 /*yield*/, claimRepo.save(claim)];
                                    case 4:
                                        claimOrder = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(ClaimService.Events.REFUND_PROCESSED, {
                                                id: id,
                                                no_notification: claimOrder.no_notification,
                                            })];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, claimOrder];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ClaimService.prototype.createShipment = function (id, fulfillmentId, trackingLinks, config) {
        if (trackingLinks === void 0) { trackingLinks = []; }
        if (config === void 0) { config = {
            metadata: {},
            no_notification: undefined,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var metadata, no_notification;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        metadata = config.metadata, no_notification = config.no_notification;
                        return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var claim, evaluatedNoNotification, shipment, lineItemServiceTx, _loop_2, _a, _b, additionalItem, e_12_1, claimRepo, claimOrder;
                                var e_12, _c;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0: return [4 /*yield*/, this.retrieve(id, {
                                                relations: ["additional_items"],
                                            })];
                                        case 1:
                                            claim = _d.sent();
                                            if (claim.canceled_at) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Canceled claim cannot be fulfilled as shipped");
                                            }
                                            evaluatedNoNotification = no_notification !== undefined
                                                ? no_notification
                                                : claim.no_notification;
                                            return [4 /*yield*/, this.fulfillmentService_
                                                    .withTransaction(transactionManager)
                                                    .createShipment(fulfillmentId, trackingLinks, {
                                                    metadata: metadata,
                                                    no_notification: evaluatedNoNotification,
                                                })];
                                        case 2:
                                            shipment = _d.sent();
                                            claim.fulfillment_status = models_1.ClaimFulfillmentStatus.SHIPPED;
                                            lineItemServiceTx = this.lineItemService_.withTransaction(transactionManager);
                                            _loop_2 = function (additionalItem) {
                                                var shipped, shippedQty;
                                                return __generator(this, function (_e) {
                                                    switch (_e.label) {
                                                        case 0:
                                                            shipped = shipment.items.find(function (si) { return si.item_id === additionalItem.id; });
                                                            if (!shipped) return [3 /*break*/, 2];
                                                            shippedQty = (additionalItem.shipped_quantity || 0) + shipped.quantity;
                                                            return [4 /*yield*/, lineItemServiceTx.update(additionalItem.id, {
                                                                    shipped_quantity: shippedQty,
                                                                })];
                                                        case 1:
                                                            _e.sent();
                                                            if (shippedQty !== additionalItem.quantity) {
                                                                claim.fulfillment_status =
                                                                    models_1.ClaimFulfillmentStatus.PARTIALLY_SHIPPED;
                                                            }
                                                            return [3 /*break*/, 3];
                                                        case 2:
                                                            if (additionalItem.shipped_quantity !== additionalItem.quantity) {
                                                                claim.fulfillment_status = models_1.ClaimFulfillmentStatus.PARTIALLY_SHIPPED;
                                                            }
                                                            _e.label = 3;
                                                        case 3: return [2 /*return*/];
                                                    }
                                                });
                                            };
                                            _d.label = 3;
                                        case 3:
                                            _d.trys.push([3, 8, 9, 10]);
                                            _a = __values(claim.additional_items), _b = _a.next();
                                            _d.label = 4;
                                        case 4:
                                            if (!!_b.done) return [3 /*break*/, 7];
                                            additionalItem = _b.value;
                                            return [5 /*yield**/, _loop_2(additionalItem)];
                                        case 5:
                                            _d.sent();
                                            _d.label = 6;
                                        case 6:
                                            _b = _a.next();
                                            return [3 /*break*/, 4];
                                        case 7: return [3 /*break*/, 10];
                                        case 8:
                                            e_12_1 = _d.sent();
                                            e_12 = { error: e_12_1 };
                                            return [3 /*break*/, 10];
                                        case 9:
                                            try {
                                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                            }
                                            finally { if (e_12) throw e_12.error; }
                                            return [7 /*endfinally*/];
                                        case 10:
                                            claimRepo = transactionManager.withRepository(this.claimRepository_);
                                            return [4 /*yield*/, claimRepo.save(claim)];
                                        case 11:
                                            claimOrder = _d.sent();
                                            return [4 /*yield*/, this.eventBus_
                                                    .withTransaction(transactionManager)
                                                    .emit(ClaimService.Events.SHIPMENT_CREATED, {
                                                    id: id,
                                                    fulfillment_id: shipment.id,
                                                    no_notification: evaluatedNoNotification,
                                                })];
                                        case 12:
                                            _d.sent();
                                            return [2 /*return*/, claimOrder];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ClaimService.prototype.cancel = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var claim, _a, _b, f, claimRepo, claimOrder;
                            var e_13, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(id, {
                                            relations: ["return_order", "fulfillments", "order", "order.refunds"],
                                        })];
                                    case 1:
                                        claim = _d.sent();
                                        if (claim.refund_amount) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Claim with a refund cannot be canceled");
                                        }
                                        if (claim.fulfillments) {
                                            try {
                                                for (_a = __values(claim.fulfillments), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                    f = _b.value;
                                                    if (!f.canceled_at) {
                                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "All fulfillments must be canceled before the claim can be canceled");
                                                    }
                                                }
                                            }
                                            catch (e_13_1) { e_13 = { error: e_13_1 }; }
                                            finally {
                                                try {
                                                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                                }
                                                finally { if (e_13) throw e_13.error; }
                                            }
                                        }
                                        if (claim.return_order && claim.return_order.status !== "canceled") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Return must be canceled before the claim can be canceled");
                                        }
                                        claim.fulfillment_status = models_1.ClaimFulfillmentStatus.CANCELED;
                                        claim.canceled_at = new Date();
                                        claimRepo = transactionManager.withRepository(this.claimRepository_);
                                        return [4 /*yield*/, claimRepo.save(claim)];
                                    case 2:
                                        claimOrder = _d.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(ClaimService.Events.CANCELED, {
                                                id: claimOrder.id,
                                                no_notification: claimOrder.no_notification,
                                            })];
                                    case 3:
                                        _d.sent();
                                        return [2 /*return*/, claimOrder];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param selector - the query object for find
     * @param config - the config object containing query settings
     * @return the result of the find operation
     */
    ClaimService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var claimRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        claimRepo = this.activeManager_.withRepository(this.claimRepository_);
                        query = (0, utils_1.buildQuery)(selector, config);
                        return [4 /*yield*/, claimRepo.find(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets an order by id.
     * @param claimId - id of the claim order to retrieve
     * @param config - the config object containing query settings
     * @return the order document
     */
    ClaimService.prototype.retrieve = function (claimId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var claimRepo, query, claim;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(claimId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"claimId\" must be defined");
                        }
                        claimRepo = this.activeManager_.withRepository(this.claimRepository_);
                        query = (0, utils_1.buildQuery)({ id: claimId }, config);
                        return [4 /*yield*/, claimRepo.findOne(query)];
                    case 1:
                        claim = _a.sent();
                        if (!claim) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Claim with ".concat(claimId, " was not found"));
                        }
                        return [2 /*return*/, claim];
                }
            });
        });
    };
    ClaimService.Events = {
        CREATED: "claim.created",
        UPDATED: "claim.updated",
        CANCELED: "claim.canceled",
        FULFILLMENT_CREATED: "claim.fulfillment_created",
        SHIPMENT_CREATED: "claim.shipment_created",
        REFUND_PROCESSED: "claim.refund_processed",
    };
    return ClaimService;
}(interfaces_1.TransactionBaseService));
exports.default = ClaimService;
//# sourceMappingURL=claim.js.map