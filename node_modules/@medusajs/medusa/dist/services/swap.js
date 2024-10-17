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
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var index_1 = require("./index");
var typeorm_1 = require("typeorm");
var medusa_core_utils_1 = require("medusa-core-utils");
var utils_1 = require("../utils");
var interfaces_1 = require("../interfaces");
var utils_2 = require("@medusajs/utils");
/**
 * Handles swaps
 */
var SwapService = /** @class */ (function (_super) {
    __extends(SwapService, _super);
    function SwapService(_a) {
        var swapRepository = _a.swapRepository, eventBusService = _a.eventBusService, cartService = _a.cartService, totalsService = _a.totalsService, returnService = _a.returnService, lineItemService = _a.lineItemService, paymentProviderService = _a.paymentProviderService, shippingOptionService = _a.shippingOptionService, fulfillmentService = _a.fulfillmentService, orderService = _a.orderService, productVariantInventoryService = _a.productVariantInventoryService, customShippingOptionService = _a.customShippingOptionService, lineItemAdjustmentService = _a.lineItemAdjustmentService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.swapRepository_ = swapRepository;
        _this.totalsService_ = totalsService;
        _this.lineItemService_ = lineItemService;
        _this.returnService_ = returnService;
        _this.paymentProviderService_ = paymentProviderService;
        _this.cartService_ = cartService;
        _this.fulfillmentService_ = fulfillmentService;
        _this.orderService_ = orderService;
        _this.shippingOptionService_ = shippingOptionService;
        _this.productVariantInventoryService_ = productVariantInventoryService;
        _this.eventBus_ = eventBusService;
        _this.customShippingOptionService_ = customShippingOptionService;
        _this.lineItemAdjustmentService_ = lineItemAdjustmentService;
        return _this;
    }
    /**
     * Transform find config object for retrieval.
     *
     * @param config parsed swap find config
     * @return transformed find swap config
     */
    SwapService.prototype.transformQueryForCart = function (config) {
        var select = config.select, relations = config.relations;
        var cartSelects;
        var cartRelations;
        if ((0, medusa_core_utils_1.isDefined)(relations) && relations.includes("cart")) {
            var _a = __read(relations.reduce(function (acc, next) {
                if (next === "cart") {
                    return acc;
                }
                if (next.startsWith("cart.")) {
                    var _a = __read(next.split(".")), rel = _a.slice(1);
                    acc[1].push(rel.join("."));
                }
                else {
                    acc[0].push(next);
                }
                return acc;
            }, [[], []]), 2), swapRelations = _a[0], cartRels = _a[1];
            relations = swapRelations;
            cartRelations = cartRels;
            var foundCartId_1 = false;
            if ((0, medusa_core_utils_1.isDefined)(select)) {
                var _b = __read(select.reduce(function (acc, next) {
                    if (next.startsWith("cart.")) {
                        var _a = __read(next.split(".")), rel = _a.slice(1);
                        acc[1].push(rel.join("."));
                    }
                    else {
                        if (next === "cart_id") {
                            foundCartId_1 = true;
                        }
                        acc[0].push(next);
                    }
                    return acc;
                }, [[], []]), 2), swapSelects = _b[0], cartSels = _b[1];
                select = foundCartId_1 ? swapSelects : __spreadArray(__spreadArray([], __read(swapSelects), false), ["cart_id"], false);
                cartSelects = cartSels;
            }
        }
        return __assign(__assign({}, config), { relations: relations, select: select, cartSelects: cartSelects, cartRelations: cartRelations });
    };
    /**
     * Retrieves a swap with the given id.
     *
     * @param swapId - the id of the swap to retrieve
     * @param config - the configuration to retrieve the swap
     * @return the swap
     */
    SwapService.prototype.retrieve = function (swapId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var swapRepo, _a, cartSelects, cartRelations, newConfig, query, swap, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(swapId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"swapId\" must be defined");
                        }
                        swapRepo = this.activeManager_.withRepository(this.swapRepository_);
                        _a = this.transformQueryForCart(config), cartSelects = _a.cartSelects, cartRelations = _a.cartRelations, newConfig = __rest(_a, ["cartSelects", "cartRelations"]);
                        query = (0, utils_1.buildQuery)({ id: swapId }, newConfig);
                        return [4 /*yield*/, swapRepo.findOne(query)];
                    case 1:
                        swap = _c.sent();
                        if (!swap) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Swap was not found");
                        }
                        if (!(cartRelations || cartSelects)) return [3 /*break*/, 3];
                        _b = swap;
                        return [4 /*yield*/, this.cartService_
                                .withTransaction(this.activeManager_)
                                .retrieve(swap.cart_id, {
                                select: cartSelects,
                                relations: cartRelations,
                            })];
                    case 2:
                        _b.cart = _c.sent();
                        _c.label = 3;
                    case 3: return [2 /*return*/, swap];
                }
            });
        });
    };
    /**
     * Retrieves a swap based on its associated cart id
     *
     * @param cartId - the cart id that the swap's cart has
     * @param relations - the relations to retrieve swap
     * @return the swap
     */
    SwapService.prototype.retrieveByCartId = function (cartId, relations) {
        if (relations === void 0) { relations = []; }
        return __awaiter(this, void 0, void 0, function () {
            var swapRepo, swap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        swapRepo = this.activeManager_.withRepository(this.swapRepository_);
                        return [4 /*yield*/, swapRepo.findOne({
                                where: {
                                    cart_id: cartId,
                                },
                                relations: relations,
                            })];
                    case 1:
                        swap = _a.sent();
                        if (!swap) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Swap was not found");
                        }
                        return [2 /*return*/, swap];
                }
            });
        });
    };
    /**
     * List swaps.
     *
     * @param selector - the query object for find
     * @param config - the configuration used to find the objects. contains relations, skip, and take.
     * @return the result of the find operation
     */
    SwapService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, swaps;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.listAndCount(selector, config)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), swaps = _a[0];
                        return [2 /*return*/, swaps];
                }
            });
        });
    };
    /**
     * List swaps.
     *
     * @param selector - the query object for find
     * @param config - the configuration used to find the objects. contains relations, skip, and take.
     * @return the result of the find operation
     */
    SwapService.prototype.listAndCount = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var swapRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        swapRepo = this.activeManager_.withRepository(this.swapRepository_);
                        query = (0, utils_1.buildQuery)(selector, config);
                        query.relationLoadStrategy = "query";
                        return [4 /*yield*/, swapRepo.findAndCount(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates a swap from an order, with given return items, additional items
     * and an optional return shipping method.
     *
     * @param order - the order to base the swap off
     * @param returnItems - the items to return in the swap
     * @param additionalItems - the items to send to the customer
     * @param returnShipping - an optional shipping method for returning the returnItems
     * @param custom - contains relevant custom information. This object may
     *  include no_notification which will disable sending notification when creating
     *  swap. If set, it overrules the attribute inherited from the order
     * @return the newly created swap
     */
    SwapService.prototype.create = function (order, returnItems, additionalItems, returnShipping, custom) {
        if (custom === void 0) { custom = { no_notification: undefined }; }
        return __awaiter(this, void 0, void 0, function () {
            var no_notification, rest;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        no_notification = custom.no_notification, rest = __rest(custom, ["no_notification"]);
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var areReturnItemsValid, newItems, evaluatedNoNotification, swapRepo, created, result;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (order.payment_status !== models_1.PaymentStatus.CAPTURED) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot swap an order that has not been captured");
                                            }
                                            if (order.fulfillment_status === models_1.FulfillmentStatus.NOT_FULFILLED) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot swap an order that has not been fulfilled");
                                            }
                                            return [4 /*yield*/, this.areReturnItemsValid(returnItems)];
                                        case 1:
                                            areReturnItemsValid = _a.sent();
                                            if (!areReturnItemsValid) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Cannot create a swap on a canceled item.");
                                            }
                                            newItems = [];
                                            if (!additionalItems) return [3 /*break*/, 3];
                                            return [4 /*yield*/, (0, utils_2.promiseAll)(additionalItems.map(function (_a) {
                                                    var variant_id = _a.variant_id, quantity = _a.quantity;
                                                    return __awaiter(_this, void 0, void 0, function () {
                                                        return __generator(this, function (_b) {
                                                            if (variant_id === null) {
                                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "You must include a variant when creating additional items on a swap");
                                                            }
                                                            return [2 /*return*/, this.lineItemService_.withTransaction(manager).generate({ variantId: variant_id, quantity: quantity }, {
                                                                    region_id: order.region_id,
                                                                    cart: order.cart,
                                                                })];
                                                        });
                                                    });
                                                }))];
                                        case 2:
                                            newItems = _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            evaluatedNoNotification = no_notification !== undefined ? no_notification : order.no_notification;
                                            swapRepo = manager.withRepository(this.swapRepository_);
                                            created = swapRepo.create(__assign(__assign({}, rest), { fulfillment_status: models_1.SwapFulfillmentStatus.NOT_FULFILLED, payment_status: models_1.SwapPaymentStatus.NOT_PAID, order_id: order.id, additional_items: newItems, no_notification: evaluatedNoNotification }));
                                            return [4 /*yield*/, swapRepo.save(created)];
                                        case 4:
                                            result = _a.sent();
                                            return [4 /*yield*/, this.returnService_.withTransaction(manager).create({
                                                    swap_id: result.id,
                                                    order_id: order.id,
                                                    items: returnItems,
                                                    shipping_method: returnShipping,
                                                    no_notification: evaluatedNoNotification,
                                                    location_id: custom.location_id,
                                                })];
                                        case 5:
                                            _a.sent();
                                            return [4 /*yield*/, this.eventBus_
                                                    .withTransaction(manager)
                                                    .emit(SwapService.Events.CREATED, {
                                                    id: result.id,
                                                    no_notification: evaluatedNoNotification,
                                                })];
                                        case 6:
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
     * Process difference for the requested swap.
     *
     * @param swapId id of a swap being processed
     * @return processed swap
     */
    SwapService.prototype.processDifference = function (swapId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var swap, swapRepo, err_1, result_1, result_2, result_3, err_2, result_4, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(swapId, {
                                            relations: ["payment", "order", "order.payments"],
                                        })];
                                    case 1:
                                        swap = _a.sent();
                                        if (swap.canceled_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Canceled swap cannot be processed");
                                        }
                                        if (!swap.confirmed_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot process a swap that hasn't been confirmed by the customer");
                                        }
                                        swapRepo = manager.withRepository(this.swapRepository_);
                                        if (!(swap.difference_due < 0)) return [3 /*break*/, 10];
                                        if (swap.payment_status === "difference_refunded") {
                                            return [2 /*return*/, swap];
                                        }
                                        _a.label = 2;
                                    case 2:
                                        _a.trys.push([2, 4, , 7]);
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(manager)
                                                .refundPayment(swap.order.payments, -1 * swap.difference_due, "swap")];
                                    case 3:
                                        _a.sent();
                                        return [3 /*break*/, 7];
                                    case 4:
                                        err_1 = _a.sent();
                                        swap.payment_status = models_1.SwapPaymentStatus.REQUIRES_ACTION;
                                        return [4 /*yield*/, swapRepo.save(swap)];
                                    case 5:
                                        result_1 = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(SwapService.Events.PROCESS_REFUND_FAILED, {
                                                id: result_1.id,
                                                no_notification: swap.no_notification,
                                            })];
                                    case 6:
                                        _a.sent();
                                        return [2 /*return*/, result_1];
                                    case 7:
                                        swap.payment_status = models_1.SwapPaymentStatus.DIFFERENCE_REFUNDED;
                                        return [4 /*yield*/, swapRepo.save(swap)];
                                    case 8:
                                        result_2 = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(SwapService.Events.REFUND_PROCESSED, {
                                                id: result_2.id,
                                                no_notification: swap.no_notification,
                                            })];
                                    case 9:
                                        _a.sent();
                                        return [2 /*return*/, result_2];
                                    case 10:
                                        if (!(swap.difference_due === 0)) return [3 /*break*/, 13];
                                        if (swap.payment_status === models_1.SwapPaymentStatus.DIFFERENCE_REFUNDED) {
                                            return [2 /*return*/, swap];
                                        }
                                        swap.payment_status = models_1.SwapPaymentStatus.DIFFERENCE_REFUNDED;
                                        return [4 /*yield*/, swapRepo.save(swap)];
                                    case 11:
                                        result_3 = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(SwapService.Events.REFUND_PROCESSED, {
                                                id: result_3.id,
                                                no_notification: swap.no_notification,
                                            })];
                                    case 12:
                                        _a.sent();
                                        return [2 /*return*/, result_3];
                                    case 13:
                                        _a.trys.push([13, 15, , 18]);
                                        if (swap.payment_status === models_1.SwapPaymentStatus.CAPTURED) {
                                            return [2 /*return*/, swap];
                                        }
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(manager)
                                                .capturePayment(swap.payment)];
                                    case 14:
                                        _a.sent();
                                        return [3 /*break*/, 18];
                                    case 15:
                                        err_2 = _a.sent();
                                        swap.payment_status = models_1.SwapPaymentStatus.REQUIRES_ACTION;
                                        return [4 /*yield*/, swapRepo.save(swap)];
                                    case 16:
                                        result_4 = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(SwapService.Events.PAYMENT_CAPTURE_FAILED, {
                                                id: swap.id,
                                                no_notification: swap.no_notification,
                                            })];
                                    case 17:
                                        _a.sent();
                                        return [2 /*return*/, result_4];
                                    case 18:
                                        swap.payment_status = models_1.SwapPaymentStatus.CAPTURED;
                                        return [4 /*yield*/, swapRepo.save(swap)];
                                    case 19:
                                        result = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(SwapService.Events.PAYMENT_CAPTURED, {
                                                id: result.id,
                                                no_notification: swap.no_notification,
                                            })];
                                    case 20:
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
     * Update the swap record.
     *
     * @param swapId id of a swap to update
     * @param update new data
     * @return updated swap record
     */
    SwapService.prototype.update = function (swapId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var swap, swapRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(swapId)];
                                    case 1:
                                        swap = _a.sent();
                                        if ("metadata" in update) {
                                            swap.metadata = (0, utils_1.setMetadata)(swap, update.metadata);
                                        }
                                        if ("no_notification" in update) {
                                            swap.no_notification = update.no_notification;
                                        }
                                        if ("shipping_address" in update) {
                                            // TODO: Check this - calling method that doesn't exist
                                            // also it seems that update swap isn't call anywhere
                                            // await this.updateShippingAddress_(swap, update.shipping_address)
                                        }
                                        swapRepo = manager.withRepository(this.swapRepository_);
                                        return [4 /*yield*/, swapRepo.save(swap)];
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
     * Creates a cart from the given swap. The cart can be used to pay
     * for differences associated with the swap. The swap represented by the
     * swapId must belong to the order. Fails if there is already a cart on the
     * swap.
     *
     * @param swapId - the id of the swap to create the cart from
     * @param customShippingOptions - the shipping options
     * @return the swap with its cart_id prop set to the id of the new cart.
     */
    SwapService.prototype.createCart = function (swapId, customShippingOptions, context) {
        if (customShippingOptions === void 0) { customShippingOptions = []; }
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var swapRepo, swap, order, discounts, cart, customShippingOptionServiceTx, customShippingOptions_1, customShippingOptions_1_1, customShippingOption, e_1_1, lineItemServiceTx, lineItemAdjustmentServiceTx;
                            var e_1, _a;
                            var _this = this;
                            var _b, _c, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        swapRepo = manager.withRepository(this.swapRepository_);
                                        return [4 /*yield*/, this.retrieve(swapId, {
                                                relations: [
                                                    "order.items.variant.product.profiles",
                                                    "order.swaps",
                                                    "order.swaps.additional_items",
                                                    "order.discounts",
                                                    "order.discounts.rule",
                                                    "order.claims",
                                                    "order.claims.additional_items",
                                                    "additional_items",
                                                    "additional_items.variant",
                                                    "return_order",
                                                    "return_order.items",
                                                    "return_order.shipping_method",
                                                    "return_order.shipping_method.shipping_option",
                                                    "return_order.shipping_method.tax_lines",
                                                ],
                                            })];
                                    case 1:
                                        swap = _e.sent();
                                        if (swap.canceled_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Canceled swap cannot be used to create a cart");
                                        }
                                        if (swap.cart_id) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.DUPLICATE_ERROR, "A cart has already been created for the swap");
                                        }
                                        order = swap.order;
                                        discounts = ((_b = order === null || order === void 0 ? void 0 : order.discounts) === null || _b === void 0 ? void 0 : _b.filter(function (_a) {
                                            var rule = _a.rule;
                                            return rule.type !== "free_shipping";
                                        })) ||
                                            undefined;
                                        return [4 /*yield*/, this.cartService_.withTransaction(manager).create({
                                                discounts: discounts,
                                                email: order.email,
                                                billing_address_id: order.billing_address_id,
                                                shipping_address_id: order.shipping_address_id,
                                                region_id: order.region_id,
                                                customer_id: order.customer_id,
                                                sales_channel_id: (_d = (_c = context.sales_channel_id) !== null && _c !== void 0 ? _c : order.sales_channel_id) !== null && _d !== void 0 ? _d : undefined,
                                                type: models_1.CartType.SWAP,
                                                metadata: {
                                                    swap_id: swap.id,
                                                    parent_order_id: order.id,
                                                },
                                            })];
                                    case 2:
                                        cart = _e.sent();
                                        customShippingOptionServiceTx = this.customShippingOptionService_.withTransaction(manager);
                                        _e.label = 3;
                                    case 3:
                                        _e.trys.push([3, 8, 9, 10]);
                                        customShippingOptions_1 = __values(customShippingOptions), customShippingOptions_1_1 = customShippingOptions_1.next();
                                        _e.label = 4;
                                    case 4:
                                        if (!!customShippingOptions_1_1.done) return [3 /*break*/, 7];
                                        customShippingOption = customShippingOptions_1_1.value;
                                        return [4 /*yield*/, customShippingOptionServiceTx.create({
                                                cart_id: cart.id,
                                                shipping_option_id: customShippingOption.option_id,
                                                price: customShippingOption.price,
                                            })];
                                    case 5:
                                        _e.sent();
                                        _e.label = 6;
                                    case 6:
                                        customShippingOptions_1_1 = customShippingOptions_1.next();
                                        return [3 /*break*/, 4];
                                    case 7: return [3 /*break*/, 10];
                                    case 8:
                                        e_1_1 = _e.sent();
                                        e_1 = { error: e_1_1 };
                                        return [3 /*break*/, 10];
                                    case 9:
                                        try {
                                            if (customShippingOptions_1_1 && !customShippingOptions_1_1.done && (_a = customShippingOptions_1.return)) _a.call(customShippingOptions_1);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                        return [7 /*endfinally*/];
                                    case 10:
                                        lineItemServiceTx = this.lineItemService_.withTransaction(manager);
                                        lineItemAdjustmentServiceTx = this.lineItemAdjustmentService_.withTransaction(manager);
                                        return [4 /*yield*/, (0, utils_2.promiseAll)(swap.additional_items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, lineItemServiceTx.update(item.id, {
                                                                cart_id: cart.id,
                                                            })];
                                                        case 1: return [2 /*return*/, _a.sent()];
                                                    }
                                                });
                                            }); }))];
                                    case 11:
                                        _e.sent();
                                        return [4 /*yield*/, this.cartService_
                                                .withTransaction(manager)
                                                .retrieve(cart.id, {
                                                relations: [
                                                    "items",
                                                    "items.variant",
                                                    "region",
                                                    "discounts",
                                                    "discounts.rule",
                                                ],
                                            })];
                                    case 12:
                                        cart = _e.sent();
                                        return [4 /*yield*/, (0, utils_2.promiseAll)(cart.items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: 
                                                        // we generate adjustments in case the cart has any discounts that should be applied to the additional items
                                                        return [4 /*yield*/, lineItemAdjustmentServiceTx.createAdjustmentForLineItem(cart, item)];
                                                        case 1:
                                                            // we generate adjustments in case the cart has any discounts that should be applied to the additional items
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); }))
                                            // If the swap has a return shipping method the price has to be added to
                                            // the cart.
                                        ];
                                    case 13:
                                        _e.sent();
                                        if (!(swap.return_order && swap.return_order.shipping_method)) return [3 /*break*/, 15];
                                        return [4 /*yield*/, this.lineItemService_.withTransaction(manager).create({
                                                cart_id: cart.id,
                                                title: "Return shipping",
                                                quantity: 1,
                                                has_shipping: true,
                                                allow_discounts: false,
                                                unit_price: swap.return_order.shipping_method.price,
                                                is_return: true,
                                                tax_lines: swap.return_order.shipping_method.tax_lines.map(function (tl) {
                                                    return lineItemServiceTx.createTaxLine({
                                                        name: tl.name,
                                                        code: tl.code,
                                                        rate: tl.rate,
                                                        metadata: tl.metadata,
                                                    });
                                                }),
                                            })];
                                    case 14:
                                        _e.sent();
                                        _e.label = 15;
                                    case 15: return [4 /*yield*/, this.lineItemService_
                                            .withTransaction(manager)
                                            .createReturnLines(swap.return_order.id, cart.id)];
                                    case 16:
                                        _e.sent();
                                        swap.cart_id = cart.id;
                                        return [4 /*yield*/, swapRepo.save(swap)];
                                    case 17: return [2 /*return*/, _e.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Register a cart completion
     *
     * @param swapId - The id of the swap
     * @return swap related to the cart
     */
    SwapService.prototype.registerCartCompletion = function (swapId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var swap, cart, payment, items, total, paymentStatus, swapRepo, result, shippingOptionServiceTx, _a, _b, method, e_2_1;
                            var e_2, _c;
                            var _this = this;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(swapId, {
                                            select: [
                                                "id",
                                                "order_id",
                                                "no_notification",
                                                "allow_backorder",
                                                "canceled_at",
                                                "confirmed_at",
                                                "cart_id",
                                            ],
                                        })
                                        // If we already registered the cart completion we just return
                                    ];
                                    case 1:
                                        swap = _d.sent();
                                        // If we already registered the cart completion we just return
                                        if (swap.confirmed_at) {
                                            return [2 /*return*/, swap];
                                        }
                                        if (swap.canceled_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cart related to canceled swap cannot be completed");
                                        }
                                        return [4 /*yield*/, this.cartService_
                                                .withTransaction(manager)
                                                .retrieveWithTotals(swap.cart_id, {
                                                relations: ["payment"],
                                            })];
                                    case 2:
                                        cart = _d.sent();
                                        payment = cart.payment;
                                        items = cart.items;
                                        total = cart.total;
                                        if (!(total > 0)) return [3 /*break*/, 6];
                                        if (!payment) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_ARGUMENT, "Cart does not contain a payment");
                                        }
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(manager)
                                                .getStatus(payment)
                                            // If payment status is not authorized, we throw
                                        ];
                                    case 3:
                                        paymentStatus = _d.sent();
                                        // If payment status is not authorized, we throw
                                        if (paymentStatus !== models_1.PaymentSessionStatus.AUTHORIZED &&
                                            // @ts-ignore TODO: check why this is not in the enum
                                            paymentStatus !== "succeeded") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_ARGUMENT, "Payment method is not authorized");
                                        }
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(manager)
                                                .updatePayment(payment.id, {
                                                swap_id: swapId,
                                                order_id: swap.order_id,
                                            })];
                                    case 4:
                                        _d.sent();
                                        return [4 /*yield*/, (0, utils_2.promiseAll)(items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!item.variant_id) return [3 /*break*/, 2];
                                                            return [4 /*yield*/, this.productVariantInventoryService_.reserveQuantity(item.variant_id, item.quantity, {
                                                                    lineItemId: item.id,
                                                                    salesChannelId: cart.sales_channel_id,
                                                                })];
                                                        case 1:
                                                            _a.sent();
                                                            _a.label = 2;
                                                        case 2: return [2 /*return*/];
                                                    }
                                                });
                                            }); }))];
                                    case 5:
                                        _d.sent();
                                        _d.label = 6;
                                    case 6:
                                        swap.difference_due = total;
                                        swap.shipping_address_id = cart.shipping_address_id;
                                        // TODO: Due to cascade insert we have to remove the tax_lines that have been added by the cart decorate totals.
                                        // Is the cascade insert really used? Also, is it really necessary to pass the entire entities when creating or updating?
                                        // We normally should only pass what is needed?
                                        swap.shipping_methods = cart.shipping_methods.map(function (method) {
                                            ;
                                            method.tax_lines = undefined;
                                            return method;
                                        });
                                        swap.confirmed_at = new Date();
                                        swap.payment_status =
                                            total === 0 ? models_1.SwapPaymentStatus.CONFIRMED : models_1.SwapPaymentStatus.AWAITING;
                                        swapRepo = manager.withRepository(this.swapRepository_);
                                        return [4 /*yield*/, swapRepo.save(swap)];
                                    case 7:
                                        result = _d.sent();
                                        shippingOptionServiceTx = this.shippingOptionService_.withTransaction(manager);
                                        _d.label = 8;
                                    case 8:
                                        _d.trys.push([8, 13, 14, 15]);
                                        _a = __values(cart.shipping_methods), _b = _a.next();
                                        _d.label = 9;
                                    case 9:
                                        if (!!_b.done) return [3 /*break*/, 12];
                                        method = _b.value;
                                        return [4 /*yield*/, shippingOptionServiceTx.updateShippingMethod(method.id, {
                                                swap_id: result.id,
                                            })];
                                    case 10:
                                        _d.sent();
                                        _d.label = 11;
                                    case 11:
                                        _b = _a.next();
                                        return [3 /*break*/, 9];
                                    case 12: return [3 /*break*/, 15];
                                    case 13:
                                        e_2_1 = _d.sent();
                                        e_2 = { error: e_2_1 };
                                        return [3 /*break*/, 15];
                                    case 14:
                                        try {
                                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                        return [7 /*endfinally*/];
                                    case 15: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(manager)
                                            .emit(SwapService.Events.PAYMENT_COMPLETED, {
                                            id: swap.id,
                                            no_notification: swap.no_notification,
                                        })];
                                    case 16:
                                        _d.sent();
                                        return [4 /*yield*/, this.cartService_
                                                .withTransaction(manager)
                                                .update(cart.id, { completed_at: new Date() })];
                                    case 17:
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
     * Cancels a given swap if possible. A swap can only be canceled if all
     * related returns, fulfillments, and payments have been canceled. If a swap
     * is associated with a refund, it cannot be canceled.
     *
     * @param swapId - the id of the swap to cancel.
     * @return the canceled swap.
     */
    SwapService.prototype.cancel = function (swapId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var swapRepo, swap, _a, _b, f;
                            var e_3, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        swapRepo = manager.withRepository(this.swapRepository_);
                                        return [4 /*yield*/, this.retrieve(swapId, {
                                                relations: ["payment", "fulfillments", "return_order"],
                                            })];
                                    case 1:
                                        swap = _d.sent();
                                        if (swap.payment_status === models_1.SwapPaymentStatus.DIFFERENCE_REFUNDED ||
                                            swap.payment_status === models_1.SwapPaymentStatus.PARTIALLY_REFUNDED ||
                                            swap.payment_status === models_1.SwapPaymentStatus.REFUNDED) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Swap with a refund cannot be canceled");
                                        }
                                        if (swap.fulfillments) {
                                            try {
                                                for (_a = __values(swap.fulfillments), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                    f = _b.value;
                                                    if (!f.canceled_at) {
                                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "All fulfillments must be canceled before the swap can be canceled");
                                                    }
                                                }
                                            }
                                            catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                            finally {
                                                try {
                                                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                                }
                                                finally { if (e_3) throw e_3.error; }
                                            }
                                        }
                                        if (swap.return_order &&
                                            swap.return_order.status !== models_1.ReturnStatus.CANCELED) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Return must be canceled before the swap can be canceled");
                                        }
                                        swap.payment_status = models_1.SwapPaymentStatus.CANCELED;
                                        swap.fulfillment_status = models_1.SwapFulfillmentStatus.CANCELED;
                                        swap.canceled_at = new Date();
                                        if (!swap.payment) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(manager)
                                                .cancelPayment(swap.payment)];
                                    case 2:
                                        _d.sent();
                                        _d.label = 3;
                                    case 3: return [4 /*yield*/, swapRepo.save(swap)];
                                    case 4: return [2 /*return*/, _d.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Fulfills the additional items associated with the swap. Will call the
     * fulfillment providers associated with the shipping methods.
     *
     * @param {string} swapId - the id of the swap to fulfill,
     * @param {object} config - optional configurations, includes optional metadata to attach to the shipment, and a no_notification flag.
     * @return {Promise<Swap>} the updated swap with new status and fulfillments.
     */
    SwapService.prototype.createFulfillment = function (swapId, config) {
        if (config === void 0) { config = {
            metadata: {},
            no_notification: undefined,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var metadata, no_notification, swapRepo, swap, order, evaluatedNoNotification, _a, successfullyFulfilled, _b, _c, f, lineItemServiceTx, _loop_1, _d, _e, item, e_4_1, result;
                            var e_5, _f, e_4, _g;
                            var _h;
                            return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        metadata = config.metadata, no_notification = config.no_notification;
                                        swapRepo = manager.withRepository(this.swapRepository_);
                                        return [4 /*yield*/, this.retrieve(swapId, {
                                                relations: [
                                                    "payment",
                                                    "shipping_address",
                                                    "additional_items.tax_lines",
                                                    "additional_items.variant.product.profiles",
                                                    "shipping_methods",
                                                    "shipping_methods.shipping_option",
                                                    "shipping_methods.tax_lines",
                                                    "order",
                                                    "order.region",
                                                    "order.billing_address",
                                                    "order.discounts",
                                                    "order.discounts.rule",
                                                    "order.payments",
                                                ],
                                            })];
                                    case 1:
                                        swap = _j.sent();
                                        order = swap.order;
                                        if (swap.canceled_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Canceled swap cannot be fulfilled");
                                        }
                                        if (swap.fulfillment_status !== "not_fulfilled" &&
                                            swap.fulfillment_status !== "canceled") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "The swap was already fulfilled");
                                        }
                                        if (!((_h = swap.shipping_methods) === null || _h === void 0 ? void 0 : _h.length)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot fulfill an swap that doesn't have shipping methods");
                                        }
                                        evaluatedNoNotification = no_notification !== undefined ? no_notification : swap.no_notification;
                                        _a = swap;
                                        return [4 /*yield*/, this.fulfillmentService_
                                                .withTransaction(manager)
                                                .createFulfillment(__assign(__assign({}, swap), { payments: swap.payment ? [swap.payment] : order.payments, email: order.email, discounts: order.discounts, currency_code: order.currency_code, tax_rate: order.tax_rate, region_id: order.region_id, region: order.region, display_id: order.display_id, billing_address: order.billing_address, items: swap.additional_items, shipping_methods: swap.shipping_methods, is_swap: true, no_notification: evaluatedNoNotification }), swap.additional_items.map(function (i) { return ({
                                                item_id: i.id,
                                                quantity: i.quantity,
                                            }); }), { swap_id: swapId, metadata: metadata, location_id: config.location_id })];
                                    case 2:
                                        _a.fulfillments = _j.sent();
                                        successfullyFulfilled = [];
                                        try {
                                            for (_b = __values(swap.fulfillments), _c = _b.next(); !_c.done; _c = _b.next()) {
                                                f = _c.value;
                                                successfullyFulfilled = successfullyFulfilled.concat(f.items);
                                            }
                                        }
                                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                                        finally {
                                            try {
                                                if (_c && !_c.done && (_f = _b.return)) _f.call(_b);
                                            }
                                            finally { if (e_5) throw e_5.error; }
                                        }
                                        swap.fulfillment_status = models_1.SwapFulfillmentStatus.FULFILLED;
                                        lineItemServiceTx = this.lineItemService_.withTransaction(manager);
                                        _loop_1 = function (item) {
                                            var fulfillmentItem, fulfilledQuantity;
                                            return __generator(this, function (_k) {
                                                switch (_k.label) {
                                                    case 0:
                                                        fulfillmentItem = successfullyFulfilled.find(function (f) { return item.id === f.item_id; });
                                                        if (!fulfillmentItem) return [3 /*break*/, 2];
                                                        fulfilledQuantity = (item.fulfilled_quantity || 0) + fulfillmentItem.quantity;
                                                        // Update the fulfilled quantity
                                                        return [4 /*yield*/, lineItemServiceTx.update(item.id, {
                                                                fulfilled_quantity: fulfilledQuantity,
                                                            })];
                                                    case 1:
                                                        // Update the fulfilled quantity
                                                        _k.sent();
                                                        if (item.quantity !== fulfilledQuantity) {
                                                            swap.fulfillment_status = models_1.SwapFulfillmentStatus.REQUIRES_ACTION;
                                                        }
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        if (item.quantity !== item.fulfilled_quantity) {
                                                            swap.fulfillment_status = models_1.SwapFulfillmentStatus.REQUIRES_ACTION;
                                                        }
                                                        _k.label = 3;
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        };
                                        _j.label = 3;
                                    case 3:
                                        _j.trys.push([3, 8, 9, 10]);
                                        _d = __values(swap.additional_items), _e = _d.next();
                                        _j.label = 4;
                                    case 4:
                                        if (!!_e.done) return [3 /*break*/, 7];
                                        item = _e.value;
                                        return [5 /*yield**/, _loop_1(item)];
                                    case 5:
                                        _j.sent();
                                        _j.label = 6;
                                    case 6:
                                        _e = _d.next();
                                        return [3 /*break*/, 4];
                                    case 7: return [3 /*break*/, 10];
                                    case 8:
                                        e_4_1 = _j.sent();
                                        e_4 = { error: e_4_1 };
                                        return [3 /*break*/, 10];
                                    case 9:
                                        try {
                                            if (_e && !_e.done && (_g = _d.return)) _g.call(_d);
                                        }
                                        finally { if (e_4) throw e_4.error; }
                                        return [7 /*endfinally*/];
                                    case 10: return [4 /*yield*/, swapRepo.save(swap)];
                                    case 11:
                                        result = _j.sent();
                                        return [4 /*yield*/, this.eventBus_.withTransaction(manager).emit(SwapService.Events.FULFILLMENT_CREATED, {
                                                id: swapId,
                                                fulfillment_id: result.id,
                                                no_notification: evaluatedNoNotification,
                                            })];
                                    case 12:
                                        _j.sent();
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
     * Cancels a fulfillment (if related to a swap)
     *
     * @param fulfillmentId - the ID of the fulfillment to cancel
     * @return updated swap
     */
    SwapService.prototype.cancelFulfillment = function (fulfillmentId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var swapRepo, canceled, swap;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        swapRepo = manager.withRepository(this.swapRepository_);
                                        return [4 /*yield*/, this.fulfillmentService_
                                                .withTransaction(manager)
                                                .cancelFulfillment(fulfillmentId)];
                                    case 1:
                                        canceled = _a.sent();
                                        if (!canceled.swap_id) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Fufillment not related to a swap");
                                        }
                                        return [4 /*yield*/, this.retrieve(canceled.swap_id)];
                                    case 2:
                                        swap = _a.sent();
                                        swap.fulfillment_status = models_1.SwapFulfillmentStatus.CANCELED;
                                        return [4 /*yield*/, swapRepo.save(swap)];
                                    case 3: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Marks a fulfillment as shipped and attaches tracking numbers.
     *
     * @param swapId - the id of the swap that has been shipped.
     * @param fulfillmentId - the id of the specific fulfillment that has been shipped
     * @param trackingLinks - the tracking numbers associated with the shipment
     * @param config - optional configurations, includes optional metadata to attach to the shipment, and a noNotification flag.
     * @return the updated swap with new fulfillments and status.
     */
    SwapService.prototype.createShipment = function (swapId, fulfillmentId, trackingLinks, config) {
        if (config === void 0) { config = {
            metadata: {},
            no_notification: undefined,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var metadata, no_notification, swapRepo, swap, evaluatedNoNotification, shipment, lineItemServiceTx, _loop_2, _a, _b, i, e_6_1, result;
                            var e_6, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        metadata = config.metadata, no_notification = config.no_notification;
                                        swapRepo = manager.withRepository(this.swapRepository_);
                                        return [4 /*yield*/, this.retrieve(swapId, {
                                                relations: ["additional_items"],
                                            })];
                                    case 1:
                                        swap = _d.sent();
                                        if (swap.canceled_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Canceled swap cannot be fulfilled as shipped");
                                        }
                                        evaluatedNoNotification = no_notification !== undefined ? no_notification : swap.no_notification;
                                        return [4 /*yield*/, this.fulfillmentService_
                                                .withTransaction(manager)
                                                .createShipment(fulfillmentId, trackingLinks, {
                                                metadata: metadata,
                                                no_notification: evaluatedNoNotification,
                                            })];
                                    case 2:
                                        shipment = _d.sent();
                                        swap.fulfillment_status = models_1.SwapFulfillmentStatus.SHIPPED;
                                        lineItemServiceTx = this.lineItemService_.withTransaction(manager);
                                        _loop_2 = function (i) {
                                            var shipped, shippedQty;
                                            return __generator(this, function (_e) {
                                                switch (_e.label) {
                                                    case 0:
                                                        shipped = shipment.items.find(function (si) { return si.item_id === i.id; });
                                                        if (!shipped) return [3 /*break*/, 2];
                                                        shippedQty = (i.shipped_quantity || 0) + shipped.quantity;
                                                        return [4 /*yield*/, lineItemServiceTx.update(i.id, {
                                                                shipped_quantity: shippedQty,
                                                            })];
                                                    case 1:
                                                        _e.sent();
                                                        if (shippedQty !== i.quantity) {
                                                            swap.fulfillment_status = models_1.SwapFulfillmentStatus.PARTIALLY_SHIPPED;
                                                        }
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        if (i.shipped_quantity !== i.quantity) {
                                                            swap.fulfillment_status = models_1.SwapFulfillmentStatus.PARTIALLY_SHIPPED;
                                                        }
                                                        _e.label = 3;
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        };
                                        _d.label = 3;
                                    case 3:
                                        _d.trys.push([3, 8, 9, 10]);
                                        _a = __values(swap.additional_items), _b = _a.next();
                                        _d.label = 4;
                                    case 4:
                                        if (!!_b.done) return [3 /*break*/, 7];
                                        i = _b.value;
                                        return [5 /*yield**/, _loop_2(i)];
                                    case 5:
                                        _d.sent();
                                        _d.label = 6;
                                    case 6:
                                        _b = _a.next();
                                        return [3 /*break*/, 4];
                                    case 7: return [3 /*break*/, 10];
                                    case 8:
                                        e_6_1 = _d.sent();
                                        e_6 = { error: e_6_1 };
                                        return [3 /*break*/, 10];
                                    case 9:
                                        try {
                                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                        }
                                        finally { if (e_6) throw e_6.error; }
                                        return [7 /*endfinally*/];
                                    case 10: return [4 /*yield*/, swapRepo.save(swap)];
                                    case 11:
                                        result = _d.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(SwapService.Events.SHIPMENT_CREATED, {
                                                id: swapId,
                                                fulfillment_id: shipment.id,
                                                no_notification: swap.no_notification,
                                            })];
                                    case 12:
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
     * Dedicated method to delete metadata for a swap.
     *
     * @param swapId - the order to delete metadata from.
     * @param key - key for metadata field
     * @return resolves to the updated result.
     */
    SwapService.prototype.deleteMetadata = function (swapId, key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var validatedId, swapRepo, swap, updated, updatedSwap;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        validatedId = (0, utils_1.validateId)(swapId);
                                        swapRepo = transactionManager.withRepository(this.swapRepository_);
                                        return [4 /*yield*/, swapRepo.findOne({ where: { id: validatedId } })];
                                    case 1:
                                        swap = _a.sent();
                                        if (!swap) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Swap with id: ".concat(validatedId, " was not found"));
                                        }
                                        updated = swap.metadata || {};
                                        delete updated[key];
                                        swap.metadata = updated;
                                        return [4 /*yield*/, swapRepo.save(swap)];
                                    case 2:
                                        updatedSwap = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(index_1.CartService.Events.UPDATED, updatedSwap)];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/, updatedSwap];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Registers the swap return items as received so that they cannot be used
     * as a part of other swaps/returns.
     *
     * @param id - the id of the order with the swap.
     * @return the resulting order
     */
    SwapService.prototype.registerReceived = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var swap, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(id, {
                                            relations: ["return_order", "return_order.items"],
                                        })];
                                    case 1:
                                        swap = _a.sent();
                                        if (swap.canceled_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Canceled swap cannot be registered as received");
                                        }
                                        if (swap.return_order.status !== "received") {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Swap is not received");
                                        }
                                        return [4 /*yield*/, this.retrieve(id)];
                                    case 2:
                                        result = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(SwapService.Events.RECEIVED, {
                                                id: id,
                                                order_id: result.order_id,
                                                no_notification: swap.no_notification,
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
    SwapService.prototype.areReturnItemsValid = function (returnItems) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var manager, returnItemsEntities, hasCanceledItem;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        manager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        return [4 /*yield*/, this.lineItemService_
                                .withTransaction(manager)
                                .list({
                                id: (0, typeorm_1.In)(returnItems.map(function (r) { return r.item_id; })),
                            }, {
                                relations: ["order", "swap", "claim_order"],
                            })];
                    case 1:
                        returnItemsEntities = _b.sent();
                        hasCanceledItem = returnItemsEntities.some(function (item) {
                            var _a, _b, _c;
                            return (((_a = item.order) === null || _a === void 0 ? void 0 : _a.canceled_at) ||
                                ((_b = item.swap) === null || _b === void 0 ? void 0 : _b.canceled_at) ||
                                ((_c = item.claim_order) === null || _c === void 0 ? void 0 : _c.canceled_at));
                        });
                        return [2 /*return*/, !hasCanceledItem];
                }
            });
        });
    };
    SwapService.Events = {
        CREATED: "swap.created",
        RECEIVED: "swap.received",
        SHIPMENT_CREATED: "swap.shipment_created",
        PAYMENT_COMPLETED: "swap.payment_completed",
        PAYMENT_CAPTURED: "swap.payment_captured",
        PAYMENT_CAPTURE_FAILED: "swap.payment_capture_failed",
        PROCESS_REFUND_FAILED: "swap.process_refund_failed",
        REFUND_PROCESSED: "swap.refund_processed",
        FULFILLMENT_CREATED: "swap.fulfillment_created",
    };
    return SwapService;
}(interfaces_1.TransactionBaseService));
exports.default = SwapService;
//# sourceMappingURL=swap.js.map