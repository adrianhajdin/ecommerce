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
exports.ORDER_CART_ALREADY_EXISTS_ERROR = void 0;
var utils_1 = require("@medusajs/utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var sales_channels_1 = __importDefault(require("../loaders/feature-flags/sales-channels"));
var models_1 = require("../models");
var utils_2 = require("../utils");
exports.ORDER_CART_ALREADY_EXISTS_ERROR = "Order from cart already exists";
var OrderService = /** @class */ (function (_super) {
    __extends(OrderService, _super);
    function OrderService(_a) {
        var orderRepository = _a.orderRepository, customerService = _a.customerService, paymentProviderService = _a.paymentProviderService, shippingOptionService = _a.shippingOptionService, shippingProfileService = _a.shippingProfileService, discountService = _a.discountService, fulfillmentProviderService = _a.fulfillmentProviderService, fulfillmentService = _a.fulfillmentService, lineItemService = _a.lineItemService, totalsService = _a.totalsService, newTotalsService = _a.newTotalsService, taxProviderService = _a.taxProviderService, regionService = _a.regionService, cartService = _a.cartService, remoteLink = _a.remoteLink, addressRepository = _a.addressRepository, giftCardService = _a.giftCardService, draftOrderService = _a.draftOrderService, eventBusService = _a.eventBusService, featureFlagRouter = _a.featureFlagRouter, productVariantInventoryService = _a.productVariantInventoryService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.orderRepository_ = orderRepository;
        _this.customerService_ = customerService;
        _this.paymentProviderService_ = paymentProviderService;
        _this.shippingProfileService_ = shippingProfileService;
        _this.fulfillmentProviderService_ = fulfillmentProviderService;
        _this.lineItemService_ = lineItemService;
        _this.totalsService_ = totalsService;
        _this.newTotalsService_ = newTotalsService;
        _this.taxProviderService_ = taxProviderService;
        _this.regionService_ = regionService;
        _this.fulfillmentService_ = fulfillmentService;
        _this.discountService_ = discountService;
        _this.giftCardService_ = giftCardService;
        _this.eventBus_ = eventBusService;
        _this.shippingOptionService_ = shippingOptionService;
        _this.cartService_ = cartService;
        _this.addressRepository_ = addressRepository;
        _this.draftOrderService_ = draftOrderService;
        _this.featureFlagRouter_ = featureFlagRouter;
        _this.productVariantInventoryService_ = productVariantInventoryService;
        _this.remoteLink_ = remoteLink;
        return _this;
    }
    /**
     * @param selector the query object for find
     * @param config the config to be used for find
     * @return the result of the find operation
     */
    OrderService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, orders;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.listAndCount(selector, config)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), orders = _a[0];
                        return [2 /*return*/, orders];
                }
            });
        });
    };
    /**
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config to be used for find
     * @return {Promise} the result of the find operation
     */
    OrderService.prototype.listAndCount = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var orderRepo, q, query, where, innerJoinLikeConstraints, _a, select, relations, totalsToSelect, rels, raw, count, orders;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        orderRepo = this.activeManager_.withRepository(this.orderRepository_);
                        if (selector.q) {
                            q = selector.q;
                            delete selector.q;
                            config.relations = config.relations
                                ? Array.from(new Set(__spreadArray(__spreadArray([], __read(config.relations), false), ["shipping_address", "customer"], false)))
                                : ["shipping_address", "customer"];
                        }
                        query = (0, utils_2.buildQuery)(selector, config);
                        if (q) {
                            where = query.where;
                            delete where.display_id;
                            delete where.email;
                            innerJoinLikeConstraints = {
                                customer: {
                                    id: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()),
                                },
                                shipping_address: {
                                    id: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()),
                                },
                            };
                            query.where = [
                                __assign(__assign(__assign({}, query.where), innerJoinLikeConstraints), { shipping_address: __assign(__assign({}, innerJoinLikeConstraints.shipping_address), { id: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()), first_name: (0, typeorm_1.ILike)("%".concat(q, "%")) }) }),
                                __assign(__assign(__assign({}, query.where), innerJoinLikeConstraints), { email: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                                __assign(__assign(__assign({}, query.where), innerJoinLikeConstraints), { display_id: (0, typeorm_1.Raw)(function (alias) { return "CAST(".concat(alias, " as varchar) ILike :q"); }, {
                                        q: "%".concat(q, "%"),
                                    }) }),
                                __assign(__assign(__assign({}, query.where), innerJoinLikeConstraints), { customer: __assign(__assign({}, innerJoinLikeConstraints.customer), { first_name: (0, typeorm_1.ILike)("%".concat(q, "%")) }) }),
                                __assign(__assign(__assign({}, query.where), innerJoinLikeConstraints), { customer: __assign(__assign({}, innerJoinLikeConstraints.customer), { last_name: (0, typeorm_1.ILike)("%".concat(q, "%")) }) }),
                                __assign(__assign(__assign({}, query.where), innerJoinLikeConstraints), { customer: __assign(__assign({}, innerJoinLikeConstraints.customer), { phone: (0, typeorm_1.ILike)("%".concat(q, "%")) }) }),
                            ];
                        }
                        _a = this.transformQueryForTotals(config), select = _a.select, relations = _a.relations, totalsToSelect = _a.totalsToSelect;
                        query.select = (0, utils_1.buildSelects)(select || []);
                        rels = (0, utils_1.buildRelations)(this.getTotalsRelations({ relations: relations }));
                        delete query.relations;
                        return [4 /*yield*/, orderRepo.findWithRelations(rels, query)];
                    case 1:
                        raw = _b.sent();
                        return [4 /*yield*/, orderRepo.count(query)];
                    case 2:
                        count = _b.sent();
                        return [4 /*yield*/, (0, utils_1.promiseAll)(raw.map(function (r) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.decorateTotals(r, totalsToSelect)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); }))];
                    case 3:
                        orders = _b.sent();
                        return [2 /*return*/, [orders, count]];
                }
            });
        });
    };
    OrderService.prototype.transformQueryForTotals = function (config) {
        var select = config.select, relations = config.relations;
        if (!select) {
            return {
                select: select,
                relations: relations,
                totalsToSelect: [],
            };
        }
        var totalFields = [
            "subtotal",
            "tax_total",
            "shipping_total",
            "discount_total",
            "gift_card_total",
            "total",
            "paid_total",
            "refunded_total",
            "refundable_amount",
            "items.refundable",
            "swaps.additional_items.refundable",
            "claims.additional_items.refundable",
        ];
        var totalsToSelect = select.filter(function (v) { return totalFields.includes(v); });
        if (totalsToSelect.length > 0) {
            var relationSet = new Set(relations);
            relationSet.add("items.tax_lines");
            relationSet.add("items.adjustments");
            relationSet.add("items.variant.product.profiles");
            relationSet.add("swaps");
            relationSet.add("swaps.additional_items");
            relationSet.add("swaps.additional_items.tax_lines");
            relationSet.add("swaps.additional_items.adjustments");
            relationSet.add("claims");
            relationSet.add("claims.additional_items");
            relationSet.add("claims.additional_items.tax_lines");
            relationSet.add("claims.additional_items.adjustments");
            relationSet.add("discounts");
            relationSet.add("discounts.rule");
            relationSet.add("gift_cards");
            relationSet.add("gift_card_transactions");
            relationSet.add("gift_card_transactions.gift_card");
            relationSet.add("refunds");
            relationSet.add("shipping_methods");
            relationSet.add("shipping_methods.tax_lines");
            relationSet.add("region");
            relations = __spreadArray([], __read(relationSet), false);
            select = select.filter(function (v) { return !totalFields.includes(v); });
        }
        var toSelect = __spreadArray([], __read(select), false);
        if (toSelect.length > 0 && toSelect.indexOf("tax_rate") === -1) {
            toSelect.push("tax_rate");
        }
        return {
            relations: relations,
            select: toSelect.length ? toSelect : undefined,
            totalsToSelect: totalsToSelect,
        };
    };
    /**
     * Gets an order by id.
     * @param orderId - id or selector of order to retrieve
     * @param config - config of order to retrieve
     * @return the order document
     */
    OrderService.prototype.retrieve = function (orderId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var totalsToSelect, orderRepo, query, queryRelations, raw;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, utils_1.isDefined)(orderId)) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "\"orderId\" must be defined");
                        }
                        totalsToSelect = this.transformQueryForTotals(config).totalsToSelect;
                        if (!(totalsToSelect === null || totalsToSelect === void 0 ? void 0 : totalsToSelect.length)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.retrieveLegacy(orderId, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        orderRepo = this.activeManager_.withRepository(this.orderRepository_);
                        query = (0, utils_2.buildQuery)({ id: orderId }, config);
                        if (!(config.select || []).length) {
                            query.select = undefined;
                        }
                        queryRelations = __assign({}, query.relations);
                        delete query.relations;
                        return [4 /*yield*/, orderRepo.findOneWithRelations(queryRelations, query)];
                    case 3:
                        raw = _a.sent();
                        if (!raw) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Order with id ".concat(orderId, " was not found"));
                        }
                        return [2 /*return*/, raw];
                }
            });
        });
    };
    OrderService.prototype.retrieveLegacy = function (orderIdOrSelector, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var orderRepo, _a, select, relations, totalsToSelect, selector, query, rels, raw, selectorConstraints;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        orderRepo = this.activeManager_.withRepository(this.orderRepository_);
                        _a = this.transformQueryForTotals(config), select = _a.select, relations = _a.relations, totalsToSelect = _a.totalsToSelect;
                        selector = (0, utils_2.isString)(orderIdOrSelector)
                            ? { id: orderIdOrSelector }
                            : orderIdOrSelector;
                        query = (0, utils_2.buildQuery)(selector, config);
                        if (relations && relations.length > 0) {
                            query.relations = (0, utils_1.buildRelations)(relations);
                        }
                        query.select = (select === null || select === void 0 ? void 0 : select.length) ? (0, utils_1.buildSelects)(select) : undefined;
                        rels = query.relations;
                        delete query.relations;
                        return [4 /*yield*/, orderRepo.findOneWithRelations(rels, query)];
                    case 1:
                        raw = _b.sent();
                        if (!raw) {
                            selectorConstraints = (0, utils_1.selectorConstraintsToString)(selector);
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Order with ".concat(selectorConstraints, " was not found"));
                        }
                        return [4 /*yield*/, this.decorateTotals(raw, totalsToSelect)];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    OrderService.prototype.retrieveWithTotals = function (orderId, options, context) {
        if (options === void 0) { options = {}; }
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var relations, order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        relations = this.getTotalsRelations(options);
                        return [4 /*yield*/, this.retrieve(orderId, __assign(__assign({}, options), { relations: relations }))];
                    case 1:
                        order = _a.sent();
                        return [4 /*yield*/, this.decorateTotals(order, context)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets an order by cart id.
     * @param cartId - cart id to find order
     * @param config - the config to be used to find order
     * @return the order document
     */
    OrderService.prototype.retrieveByCartId = function (cartId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var orderRepo, query, queryRelations, raw;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, utils_1.isDefined)(cartId)) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "\"cartId\" must be defined");
                        }
                        orderRepo = this.activeManager_.withRepository(this.orderRepository_);
                        query = (0, utils_2.buildQuery)({ cart_id: cartId }, config);
                        if (!(config.select || []).length) {
                            query.select = undefined;
                        }
                        queryRelations = __assign({}, query.relations);
                        delete query.relations;
                        return [4 /*yield*/, orderRepo.findOneWithRelations(queryRelations, query)];
                    case 1:
                        raw = _a.sent();
                        if (!raw) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Order with cart id ".concat(cartId, " was not found"));
                        }
                        return [2 /*return*/, raw];
                }
            });
        });
    };
    OrderService.prototype.retrieveByCartIdWithTotals = function (cartId, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var relations, order;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        relations = this.getTotalsRelations(options);
                        return [4 /*yield*/, this.retrieveByCartId(cartId, __assign(__assign({}, options), { relations: relations }))];
                    case 1:
                        order = _a.sent();
                        return [4 /*yield*/, this.decorateTotals(order, {})];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets an order by id.
     * @param externalId - id of order to retrieve
     * @param config - query config to get order by
     * @return the order document
     */
    OrderService.prototype.retrieveByExternalId = function (externalId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var orderRepo, _a, select, relations, totalsToSelect, selector, queryRelations, querySelect, query, rels, raw;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        orderRepo = this.activeManager_.withRepository(this.orderRepository_);
                        _a = this.transformQueryForTotals(config), select = _a.select, relations = _a.relations, totalsToSelect = _a.totalsToSelect;
                        selector = {
                            where: { external_id: externalId },
                        };
                        if (relations && relations.length > 0) {
                            queryRelations = relations;
                        }
                        queryRelations = this.getTotalsRelations({ relations: queryRelations });
                        querySelect = (select === null || select === void 0 ? void 0 : select.length) ? select : undefined;
                        query = (0, utils_2.buildQuery)(selector, {
                            select: querySelect,
                            relations: queryRelations,
                        });
                        rels = __assign({}, query.relations);
                        delete query.relations;
                        return [4 /*yield*/, orderRepo.findOneWithRelations(rels, query)];
                    case 1:
                        raw = _b.sent();
                        if (!raw) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Order with external id ".concat(externalId, " was not found"));
                        }
                        return [4 /*yield*/, this.decorateTotals(raw, totalsToSelect)];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /**
     * @param orderId - id of the order to complete
     * @return the result of the find operation
     */
    OrderService.prototype.completeOrder = function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var order, orderRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(orderId)];
                                    case 1:
                                        order = _a.sent();
                                        if (order.status === "canceled") {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "A canceled order cannot be completed");
                                        }
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(OrderService.Events.COMPLETED, {
                                                id: orderId,
                                                no_notification: order.no_notification,
                                            })];
                                    case 2:
                                        _a.sent();
                                        order.status = models_1.OrderStatus.COMPLETED;
                                        orderRepo = manager.withRepository(this.orderRepository_);
                                        return [2 /*return*/, orderRepo.save(order)];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates an order from a cart
     * @return resolves to the creation result.
     * @param cartOrId
     */
    OrderService.prototype.createFromCart = function (cartOrId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var cartServiceTx, exists, cart, _a, payment, region, total, paymentStatus, orderRepo, shippingMethods, toCreate, draft, rawOrder, order, giftCardableAmountBalance, giftCardService, orderedGiftCards, orderedGiftCards_1, orderedGiftCards_1_1, giftCard, newGiftCardBalance, giftCardBalanceUsed, e_1_1, shippingOptionServiceTx, lineItemServiceTx;
                            var e_1, _b;
                            var _this = this;
                            var _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        cartServiceTx = this.cartService_.withTransaction(manager);
                                        return [4 /*yield*/, this.retrieveByCartId((0, utils_2.isString)(cartOrId) ? cartOrId : cartOrId === null || cartOrId === void 0 ? void 0 : cartOrId.id, {
                                                select: ["id"],
                                            }).catch(function () { return void 0; })];
                                    case 1:
                                        exists = !!(_d.sent());
                                        if (exists) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.DUPLICATE_ERROR, exports.ORDER_CART_ALREADY_EXISTS_ERROR);
                                        }
                                        if (!(0, utils_2.isString)(cartOrId)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, cartServiceTx.retrieveWithTotals(cartOrId, {
                                                relations: ["region", "payment", "items"],
                                            })];
                                    case 2:
                                        _a = _d.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        _a = cartOrId;
                                        _d.label = 4;
                                    case 4:
                                        cart = _a;
                                        if (cart.items.length === 0) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Cannot create order from empty cart");
                                        }
                                        if (!cart.customer_id) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Cannot create an order from the cart without a customer");
                                        }
                                        payment = cart.payment, region = cart.region, total = cart.total;
                                        if (!(total !== 0)) return [3 /*break*/, 6];
                                        if (!payment) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_ARGUMENT, "Cart does not contain a payment method");
                                        }
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(manager)
                                                .getStatus(payment)];
                                    case 5:
                                        paymentStatus = _d.sent();
                                        if (paymentStatus !== "authorized") {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_ARGUMENT, "Payment method is not authorized");
                                        }
                                        _d.label = 6;
                                    case 6:
                                        orderRepo = manager.withRepository(this.orderRepository_);
                                        shippingMethods = cart.shipping_methods.map(function (method) {
                                            ;
                                            method.tax_lines = undefined;
                                            return method;
                                        });
                                        toCreate = {
                                            payment_status: "awaiting",
                                            discounts: cart.discounts,
                                            gift_cards: cart.gift_cards,
                                            shipping_methods: shippingMethods,
                                            shipping_address_id: cart.shipping_address_id,
                                            billing_address_id: cart.billing_address_id,
                                            region_id: cart.region_id,
                                            email: cart.email,
                                            customer_id: cart.customer_id,
                                            cart_id: cart.id,
                                            currency_code: region.currency_code,
                                            metadata: cart.metadata || {},
                                        };
                                        if (cart.sales_channel_id &&
                                            this.featureFlagRouter_.isFeatureEnabled(sales_channels_1.default.key) &&
                                            !this.featureFlagRouter_.isFeatureEnabled(utils_1.MedusaV2Flag.key)) {
                                            toCreate.sales_channel_id = cart.sales_channel_id;
                                        }
                                        if (!(cart.type === "draft_order")) return [3 /*break*/, 8];
                                        return [4 /*yield*/, this.draftOrderService_
                                                .withTransaction(manager)
                                                .retrieveByCartId(cart.id)];
                                    case 7:
                                        draft = _d.sent();
                                        toCreate.draft_order_id = draft.id;
                                        toCreate.no_notification = draft.no_notification_order;
                                        _d.label = 8;
                                    case 8:
                                        rawOrder = orderRepo.create(toCreate);
                                        return [4 /*yield*/, orderRepo.save(rawOrder)];
                                    case 9:
                                        order = _d.sent();
                                        if (!this.featureFlagRouter_.isFeatureEnabled([
                                            sales_channels_1.default.key,
                                            utils_1.MedusaV2Flag.key,
                                        ])) return [3 /*break*/, 11];
                                        return [4 /*yield*/, this.remoteLink_.create({
                                                orderService: {
                                                    order_id: order.id,
                                                },
                                                salesChannelService: {
                                                    sales_channel_id: cart.sales_channel_id,
                                                },
                                            })];
                                    case 10:
                                        _d.sent();
                                        _d.label = 11;
                                    case 11:
                                        if (!(total !== 0 && payment)) return [3 /*break*/, 13];
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(manager)
                                                .updatePayment(payment.id, {
                                                order_id: order.id,
                                            })];
                                    case 12:
                                        _d.sent();
                                        _d.label = 13;
                                    case 13:
                                        if (!(0, utils_1.isDefined)(cart.subtotal) || !(0, utils_1.isDefined)(cart.discount_total)) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, "Unable to compute gift cardable amount during order creation from cart. The cart is missing the subtotal and/or discount_total");
                                        }
                                        giftCardableAmountBalance = (_c = cart.gift_card_total) !== null && _c !== void 0 ? _c : 0;
                                        giftCardService = this.giftCardService_.withTransaction(manager);
                                        orderedGiftCards = cart.gift_cards.sort(function (a, b) {
                                            var _a, _b;
                                            var aEnd = (_a = a.ends_at) !== null && _a !== void 0 ? _a : new Date(2100, 1, 1);
                                            var bEnd = (_b = b.ends_at) !== null && _b !== void 0 ? _b : new Date(2100, 1, 1);
                                            return aEnd.getTime() - bEnd.getTime() || a.balance - b.balance;
                                        });
                                        _d.label = 14;
                                    case 14:
                                        _d.trys.push([14, 20, 21, 22]);
                                        orderedGiftCards_1 = __values(orderedGiftCards), orderedGiftCards_1_1 = orderedGiftCards_1.next();
                                        _d.label = 15;
                                    case 15:
                                        if (!!orderedGiftCards_1_1.done) return [3 /*break*/, 19];
                                        giftCard = orderedGiftCards_1_1.value;
                                        newGiftCardBalance = Math.max(0, giftCard.balance - giftCardableAmountBalance);
                                        giftCardBalanceUsed = giftCard.balance - newGiftCardBalance;
                                        return [4 /*yield*/, giftCardService.update(giftCard.id, {
                                                balance: newGiftCardBalance,
                                                is_disabled: newGiftCardBalance === 0,
                                            })];
                                    case 16:
                                        _d.sent();
                                        return [4 /*yield*/, giftCardService.createTransaction({
                                                gift_card_id: giftCard.id,
                                                order_id: order.id,
                                                amount: giftCardBalanceUsed,
                                                is_taxable: !!giftCard.tax_rate,
                                                tax_rate: giftCard.tax_rate,
                                            })];
                                    case 17:
                                        _d.sent();
                                        giftCardableAmountBalance =
                                            giftCardableAmountBalance - giftCardBalanceUsed;
                                        if (giftCardableAmountBalance == 0) {
                                            return [3 /*break*/, 19];
                                        }
                                        _d.label = 18;
                                    case 18:
                                        orderedGiftCards_1_1 = orderedGiftCards_1.next();
                                        return [3 /*break*/, 15];
                                    case 19: return [3 /*break*/, 22];
                                    case 20:
                                        e_1_1 = _d.sent();
                                        e_1 = { error: e_1_1 };
                                        return [3 /*break*/, 22];
                                    case 21:
                                        try {
                                            if (orderedGiftCards_1_1 && !orderedGiftCards_1_1.done && (_b = orderedGiftCards_1.return)) _b.call(orderedGiftCards_1);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                        return [7 /*endfinally*/];
                                    case 22:
                                        shippingOptionServiceTx = this.shippingOptionService_.withTransaction(manager);
                                        lineItemServiceTx = this.lineItemService_.withTransaction(manager);
                                        return [4 /*yield*/, (0, utils_1.promiseAll)([
                                                cart.items.map(function (lineItem) {
                                                    var toReturn = [
                                                        lineItemServiceTx.update(lineItem.id, { order_id: order.id }),
                                                    ];
                                                    if (lineItem.is_giftcard) {
                                                        toReturn.push.apply(toReturn, __spreadArray([], __read(_this.createGiftCardsFromLineItem_(order, lineItem, manager)), false));
                                                    }
                                                    return toReturn;
                                                }),
                                                cart.shipping_methods.map(function (method) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        // TODO: Due to cascade insert we have to remove the tax_lines that have been added by the cart decorate totals.
                                                        // Is the cascade insert really used? Also, is it really necessary to pass the entire entities when creating or updating?
                                                        // We normally should only pass what is needed?
                                                        ;
                                                        method.tax_lines = undefined;
                                                        return [2 /*return*/, shippingOptionServiceTx.updateShippingMethod(method.id, {
                                                                order_id: order.id,
                                                            })];
                                                    });
                                                }); }),
                                            ].flat(Infinity))];
                                    case 23:
                                        _d.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(OrderService.Events.PLACED, {
                                                id: order.id,
                                                no_notification: order.no_notification,
                                            })];
                                    case 24:
                                        _d.sent();
                                        return [4 /*yield*/, cartServiceTx.update(cart.id, { completed_at: new Date() })];
                                    case 25:
                                        _d.sent();
                                        return [2 /*return*/, order];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderService.prototype.createGiftCardsFromLineItem_ = function (order, lineItem, manager) {
        var createGiftCardPromises = [];
        // LineItem type doesn't promise either the subtotal or quantity. Adding a check here provides
        // additional type safety/strictness
        if (!lineItem.subtotal || !lineItem.quantity) {
            return createGiftCardPromises;
        }
        // Subtotal is the pure value of the product/variant excluding tax, discounts, etc.
        // We divide here by quantity to get the value of the product/variant as a lineItem
        // contains quantity. The subtotal is multiplicative of pure price per product and quantity
        var taxExclusivePrice = lineItem.subtotal / lineItem.quantity;
        // The tax_lines contains all the taxes that is applicable on the purchase of the gift card
        // On utilizing the gift card, the same set of taxRate will apply to gift card
        // We calculate the summation of all taxes and add that as a snapshot in the giftcard.tax_rate column
        var giftCardTaxRate = lineItem.tax_lines.reduce(function (sum, taxLine) { return sum + taxLine.rate; }, 0);
        var giftCardTxnService = this.giftCardService_.withTransaction(manager);
        for (var qty = 0; qty < lineItem.quantity; qty++) {
            var createGiftCardPromise = giftCardTxnService.create({
                region_id: order.region_id,
                order_id: order.id,
                value: taxExclusivePrice,
                balance: taxExclusivePrice,
                metadata: lineItem.metadata,
                tax_rate: giftCardTaxRate || null,
            });
            createGiftCardPromises.push(createGiftCardPromise);
        }
        return createGiftCardPromises;
    };
    /**
     * Adds a shipment to the order to indicate that an order has left the
     * warehouse. Will ask the fulfillment provider for any documents that may
     * have been created in regards to the shipment.
     * @param orderId - the id of the order that has been shipped
     * @param fulfillmentId - the fulfillment that has now been shipped
     * @param trackingLinks - array of tracking numbers associated with the shipment
     * @param config - the config of the order that has been shipped
     * @return the resulting order following the update.
     */
    OrderService.prototype.createShipment = function (orderId, fulfillmentId, trackingLinks, config) {
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
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var order, shipment, evaluatedNoNotification, shipmentRes, lineItemServiceTx, _loop_1, _a, _b, item, e_2_1, orderRepo, result;
                                var e_2, _c;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0: return [4 /*yield*/, this.retrieve(orderId, { relations: ["items"] })];
                                        case 1:
                                            order = _d.sent();
                                            return [4 /*yield*/, this.fulfillmentService_
                                                    .withTransaction(manager)
                                                    .retrieve(fulfillmentId)];
                                        case 2:
                                            shipment = _d.sent();
                                            if (order.status === "canceled") {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "A canceled order cannot be fulfilled as shipped");
                                            }
                                            if (!shipment || shipment.order_id !== orderId) {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Could not find fulfillment");
                                            }
                                            evaluatedNoNotification = no_notification !== undefined
                                                ? no_notification
                                                : shipment.no_notification;
                                            return [4 /*yield*/, this.fulfillmentService_
                                                    .withTransaction(manager)
                                                    .createShipment(fulfillmentId, trackingLinks, {
                                                    metadata: metadata,
                                                    no_notification: evaluatedNoNotification,
                                                })];
                                        case 3:
                                            shipmentRes = _d.sent();
                                            lineItemServiceTx = this.lineItemService_.withTransaction(manager);
                                            order.fulfillment_status = models_1.FulfillmentStatus.SHIPPED;
                                            _loop_1 = function (item) {
                                                var shipped, shippedQty;
                                                return __generator(this, function (_e) {
                                                    switch (_e.label) {
                                                        case 0:
                                                            shipped = shipmentRes.items.find(function (si) { return si.item_id === item.id; });
                                                            if (!shipped) return [3 /*break*/, 2];
                                                            shippedQty = (item.shipped_quantity || 0) + shipped.quantity;
                                                            if (shippedQty !== item.quantity) {
                                                                order.fulfillment_status = models_1.FulfillmentStatus.PARTIALLY_SHIPPED;
                                                            }
                                                            return [4 /*yield*/, lineItemServiceTx.update(item.id, {
                                                                    shipped_quantity: shippedQty,
                                                                })];
                                                        case 1:
                                                            _e.sent();
                                                            return [3 /*break*/, 3];
                                                        case 2:
                                                            if (item.shipped_quantity !== item.quantity) {
                                                                order.fulfillment_status = models_1.FulfillmentStatus.PARTIALLY_SHIPPED;
                                                            }
                                                            _e.label = 3;
                                                        case 3: return [2 /*return*/];
                                                    }
                                                });
                                            };
                                            _d.label = 4;
                                        case 4:
                                            _d.trys.push([4, 9, 10, 11]);
                                            _a = __values(order.items), _b = _a.next();
                                            _d.label = 5;
                                        case 5:
                                            if (!!_b.done) return [3 /*break*/, 8];
                                            item = _b.value;
                                            return [5 /*yield**/, _loop_1(item)];
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
                                        case 11:
                                            orderRepo = manager.withRepository(this.orderRepository_);
                                            return [4 /*yield*/, orderRepo.save(order)];
                                        case 12:
                                            result = _d.sent();
                                            return [4 /*yield*/, this.eventBus_
                                                    .withTransaction(manager)
                                                    .emit(OrderService.Events.SHIPMENT_CREATED, {
                                                    id: orderId,
                                                    fulfillment_id: shipmentRes.id,
                                                    no_notification: evaluatedNoNotification,
                                                })];
                                        case 13:
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
     * Updates the order's billing address.
     * @param order - the order to update
     * @param address - the value to set the billing address to
     * @return the result of the update operation
     */
    OrderService.prototype.updateBillingAddress = function (order, address) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function () {
            var addrRepo, region, addr;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        addrRepo = this.activeManager_.withRepository(this.addressRepository_);
                        address.country_code = (_b = (_a = address.country_code) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : null;
                        return [4 /*yield*/, this.regionService_
                                .withTransaction(this.activeManager_)
                                .retrieve(order.region_id, {
                                relations: ["countries"],
                            })];
                    case 1:
                        region = _e.sent();
                        if (!region.countries.find(function (_a) {
                            var iso_2 = _a.iso_2;
                            return address.country_code === iso_2;
                        })) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Shipping country must be in the order region");
                        }
                        address.country_code = (_d = (_c = address.country_code) === null || _c === void 0 ? void 0 : _c.toLowerCase()) !== null && _d !== void 0 ? _d : null;
                        if (!order.billing_address_id) return [3 /*break*/, 4];
                        return [4 /*yield*/, addrRepo.findOne({
                                where: { id: order.billing_address_id },
                            })];
                    case 2:
                        addr = _e.sent();
                        if (address.metadata) {
                            address.metadata = (0, utils_2.setMetadata)(addr, address.metadata);
                        }
                        return [4 /*yield*/, addrRepo.save(__assign(__assign({}, addr), address))];
                    case 3:
                        _e.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        if (address.metadata) {
                            address.metadata = (0, utils_2.setMetadata)(null, address.metadata);
                        }
                        order.billing_address = addrRepo.create(__assign({}, address));
                        _e.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Updates the order's shipping address.
     * @param order - the order to update
     * @param address - the value to set the shipping address to
     * @return the result of the update operation
     */
    OrderService.prototype.updateShippingAddress = function (order, address) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var addrRepo, region, addr;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        addrRepo = this.activeManager_.withRepository(this.addressRepository_);
                        address.country_code = (_b = (_a = address.country_code) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : null;
                        return [4 /*yield*/, this.regionService_
                                .withTransaction(this.activeManager_)
                                .retrieve(order.region_id, {
                                relations: ["countries"],
                            })];
                    case 1:
                        region = _c.sent();
                        if (!region.countries.find(function (_a) {
                            var iso_2 = _a.iso_2;
                            return address.country_code === iso_2;
                        })) {
                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Shipping country must be in the order region");
                        }
                        if (!order.shipping_address_id) return [3 /*break*/, 4];
                        return [4 /*yield*/, addrRepo.findOne({
                                where: { id: order.shipping_address_id },
                            })];
                    case 2:
                        addr = _c.sent();
                        return [4 /*yield*/, addrRepo.save(__assign(__assign({}, addr), address))];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        order.shipping_address = addrRepo.create(__assign({}, address));
                        _c.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    OrderService.prototype.addShippingMethod = function (orderId, optionId, data, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var order, shipping_methods, newMethod, shippingOptionServiceTx, methods, shipping_methods_1, shipping_methods_1_1, sm, e_3_1, result;
                            var e_3, _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.retrieveWithTotals(orderId, {
                                            relations: [
                                                "shipping_methods",
                                                "shipping_methods.shipping_option",
                                                "items.variant.product.profiles",
                                            ],
                                        })];
                                    case 1:
                                        order = _b.sent();
                                        shipping_methods = order.shipping_methods;
                                        if (order.status === "canceled") {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "A shipping method cannot be added to a canceled order");
                                        }
                                        return [4 /*yield*/, this.shippingOptionService_
                                                .withTransaction(manager)
                                                .createShippingMethod(optionId, data !== null && data !== void 0 ? data : {}, __assign({ order: order }, config))];
                                    case 2:
                                        newMethod = _b.sent();
                                        shippingOptionServiceTx = this.shippingOptionService_.withTransaction(manager);
                                        methods = [newMethod];
                                        if (!shipping_methods.length) return [3 /*break*/, 11];
                                        _b.label = 3;
                                    case 3:
                                        _b.trys.push([3, 9, 10, 11]);
                                        shipping_methods_1 = __values(shipping_methods), shipping_methods_1_1 = shipping_methods_1.next();
                                        _b.label = 4;
                                    case 4:
                                        if (!!shipping_methods_1_1.done) return [3 /*break*/, 8];
                                        sm = shipping_methods_1_1.value;
                                        if (!(sm.shipping_option.profile_id ===
                                            newMethod.shipping_option.profile_id)) return [3 /*break*/, 6];
                                        return [4 /*yield*/, shippingOptionServiceTx.deleteShippingMethods(sm)];
                                    case 5:
                                        _b.sent();
                                        return [3 /*break*/, 7];
                                    case 6:
                                        methods.push(sm);
                                        _b.label = 7;
                                    case 7:
                                        shipping_methods_1_1 = shipping_methods_1.next();
                                        return [3 /*break*/, 4];
                                    case 8: return [3 /*break*/, 11];
                                    case 9:
                                        e_3_1 = _b.sent();
                                        e_3 = { error: e_3_1 };
                                        return [3 /*break*/, 11];
                                    case 10:
                                        try {
                                            if (shipping_methods_1_1 && !shipping_methods_1_1.done && (_a = shipping_methods_1.return)) _a.call(shipping_methods_1);
                                        }
                                        finally { if (e_3) throw e_3.error; }
                                        return [7 /*endfinally*/];
                                    case 11: return [4 /*yield*/, this.retrieve(orderId)];
                                    case 12:
                                        result = _b.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(OrderService.Events.UPDATED, { id: result.id })];
                                    case 13:
                                        _b.sent();
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
     * Updates an order. Metadata updates should
     * use dedicated method, e.g. `setMetadata` etc. The function
     * will throw errors if metadata updates are attempted.
     * @param orderId - the id of the order. Must be a string that
     *   can be casted to an ObjectId
     * @param update - an object with the update values.
     * @return resolves to the update result.
     */
    OrderService.prototype.update = function (orderId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var order, metadata, shipping_address, billing_address, no_notification, items, rest, lineItemServiceTx, _a, _b, item, e_4_1, _c, _d, _e, key, value, orderRepo, result;
                            var e_4, _f, e_5, _g;
                            return __generator(this, function (_h) {
                                switch (_h.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(orderId)];
                                    case 1:
                                        order = _h.sent();
                                        if (order.status === "canceled") {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "A canceled order cannot be updated");
                                        }
                                        if ((update.payment || update.items) &&
                                            (order.fulfillment_status !== "not_fulfilled" ||
                                                order.payment_status !== "awaiting" ||
                                                order.status !== "pending")) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Can't update shipping, billing, items and payment method when order is processed");
                                        }
                                        if (update.status || update.fulfillment_status || update.payment_status) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Can't update order statuses. This will happen automatically. Use metadata in order for additional statuses");
                                        }
                                        metadata = update.metadata, shipping_address = update.shipping_address, billing_address = update.billing_address, no_notification = update.no_notification, items = update.items, rest = __rest(update, ["metadata", "shipping_address", "billing_address", "no_notification", "items"]);
                                        if (update.metadata) {
                                            order.metadata = (0, utils_2.setMetadata)(order, metadata !== null && metadata !== void 0 ? metadata : {});
                                        }
                                        if (!update.shipping_address) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.updateShippingAddress(order, shipping_address)];
                                    case 2:
                                        _h.sent();
                                        _h.label = 3;
                                    case 3:
                                        if (!update.billing_address) return [3 /*break*/, 5];
                                        return [4 /*yield*/, this.updateBillingAddress(order, billing_address)];
                                    case 4:
                                        _h.sent();
                                        _h.label = 5;
                                    case 5:
                                        if (update.no_notification) {
                                            order.no_notification = no_notification !== null && no_notification !== void 0 ? no_notification : false;
                                        }
                                        lineItemServiceTx = this.lineItemService_.withTransaction(manager);
                                        if (!update.items) return [3 /*break*/, 13];
                                        _h.label = 6;
                                    case 6:
                                        _h.trys.push([6, 11, 12, 13]);
                                        _a = __values(items), _b = _a.next();
                                        _h.label = 7;
                                    case 7:
                                        if (!!_b.done) return [3 /*break*/, 10];
                                        item = _b.value;
                                        return [4 /*yield*/, lineItemServiceTx.create(__assign(__assign({}, item), { order_id: orderId }))];
                                    case 8:
                                        _h.sent();
                                        _h.label = 9;
                                    case 9:
                                        _b = _a.next();
                                        return [3 /*break*/, 7];
                                    case 10: return [3 /*break*/, 13];
                                    case 11:
                                        e_4_1 = _h.sent();
                                        e_4 = { error: e_4_1 };
                                        return [3 /*break*/, 13];
                                    case 12:
                                        try {
                                            if (_b && !_b.done && (_f = _a.return)) _f.call(_a);
                                        }
                                        finally { if (e_4) throw e_4.error; }
                                        return [7 /*endfinally*/];
                                    case 13:
                                        try {
                                            for (_c = __values(Object.entries(rest)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                                _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                                                order[key] = value;
                                            }
                                        }
                                        catch (e_5_1) { e_5 = { error: e_5_1 }; }
                                        finally {
                                            try {
                                                if (_d && !_d.done && (_g = _c.return)) _g.call(_c);
                                            }
                                            finally { if (e_5) throw e_5.error; }
                                        }
                                        orderRepo = manager.withRepository(this.orderRepository_);
                                        return [4 /*yield*/, orderRepo.save(order)];
                                    case 14:
                                        result = _h.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(OrderService.Events.UPDATED, {
                                                id: orderId,
                                                no_notification: order.no_notification,
                                            })];
                                    case 15:
                                        _h.sent();
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
     * Cancels an order.
     * Throws if fulfillment process has been initiated.
     * Throws if payment process has been initiated.
     * @param orderId - id of order to cancel.
     * @return result of the update operation.
     */
    OrderService.prototype.cancel = function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var order, throwErrorIf, notCanceled, inventoryServiceTx, paymentProviderServiceTx, _a, _b, p, e_6_1, orderRepo, result;
                            var e_6, _c;
                            var _this = this;
                            var _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(orderId, {
                                            relations: [
                                                "refunds",
                                                "fulfillments",
                                                "payments",
                                                "returns",
                                                "claims",
                                                "swaps",
                                                "items",
                                            ],
                                        })];
                                    case 1:
                                        order = _e.sent();
                                        if (((_d = order.refunds) === null || _d === void 0 ? void 0 : _d.length) > 0) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Order with refund(s) cannot be canceled");
                                        }
                                        throwErrorIf = function (arr, pred, type) {
                                            if (arr === null || arr === void 0 ? void 0 : arr.filter(pred).length) {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "All ".concat(type, " must be canceled before canceling an order"));
                                            }
                                        };
                                        notCanceled = function (o) { return !o.canceled_at; };
                                        throwErrorIf(order.fulfillments, notCanceled, "fulfillments");
                                        throwErrorIf(order.returns, function (r) { return r.status !== "canceled"; }, "returns");
                                        throwErrorIf(order.swaps, notCanceled, "swaps");
                                        throwErrorIf(order.claims, notCanceled, "claims");
                                        inventoryServiceTx = this.productVariantInventoryService_.withTransaction(manager);
                                        return [4 /*yield*/, (0, utils_1.promiseAll)(order.items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!item.variant_id) return [3 /*break*/, 2];
                                                            return [4 /*yield*/, inventoryServiceTx.deleteReservationsByLineItem(item.id, item.variant_id, item.quantity)];
                                                        case 1: return [2 /*return*/, _a.sent()];
                                                        case 2: return [2 /*return*/];
                                                    }
                                                });
                                            }); }))];
                                    case 2:
                                        _e.sent();
                                        paymentProviderServiceTx = this.paymentProviderService_.withTransaction(manager);
                                        _e.label = 3;
                                    case 3:
                                        _e.trys.push([3, 8, 9, 10]);
                                        _a = __values(order.payments), _b = _a.next();
                                        _e.label = 4;
                                    case 4:
                                        if (!!_b.done) return [3 /*break*/, 7];
                                        p = _b.value;
                                        return [4 /*yield*/, paymentProviderServiceTx.cancelPayment(p)];
                                    case 5:
                                        _e.sent();
                                        _e.label = 6;
                                    case 6:
                                        _b = _a.next();
                                        return [3 /*break*/, 4];
                                    case 7: return [3 /*break*/, 10];
                                    case 8:
                                        e_6_1 = _e.sent();
                                        e_6 = { error: e_6_1 };
                                        return [3 /*break*/, 10];
                                    case 9:
                                        try {
                                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                        }
                                        finally { if (e_6) throw e_6.error; }
                                        return [7 /*endfinally*/];
                                    case 10:
                                        order.status = models_1.OrderStatus.CANCELED;
                                        order.fulfillment_status = models_1.FulfillmentStatus.CANCELED;
                                        order.payment_status = models_1.PaymentStatus.CANCELED;
                                        order.canceled_at = new Date();
                                        orderRepo = manager.withRepository(this.orderRepository_);
                                        return [4 /*yield*/, orderRepo.save(order)];
                                    case 11:
                                        result = _e.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(OrderService.Events.CANCELED, {
                                                id: order.id,
                                                no_notification: order.no_notification,
                                            })];
                                    case 12:
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
     * Captures payment for an order.
     * @param orderId - id of order to capture payment for.
     * @return result of the update operation.
     */
    OrderService.prototype.capturePayment = function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var orderRepo, order, paymentProviderServiceTx, payments, _loop_2, _a, _b, p, e_7_1, result;
                            var e_7, _c;
                            var _this = this;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        orderRepo = manager.withRepository(this.orderRepository_);
                                        return [4 /*yield*/, this.retrieve(orderId, { relations: ["payments"] })];
                                    case 1:
                                        order = _d.sent();
                                        if (order.status === "canceled") {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "A canceled order cannot capture payment");
                                        }
                                        paymentProviderServiceTx = this.paymentProviderService_.withTransaction(manager);
                                        payments = [];
                                        _loop_2 = function (p) {
                                            var result_1;
                                            return __generator(this, function (_e) {
                                                switch (_e.label) {
                                                    case 0:
                                                        if (!(p.captured_at === null)) return [3 /*break*/, 2];
                                                        return [4 /*yield*/, paymentProviderServiceTx
                                                                .capturePayment(p)
                                                                .catch(function (err) { return __awaiter(_this, void 0, void 0, function () {
                                                                return __generator(this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0: return [4 /*yield*/, this.eventBus_
                                                                                .withTransaction(manager)
                                                                                .emit(OrderService.Events.PAYMENT_CAPTURE_FAILED, {
                                                                                id: orderId,
                                                                                payment_id: p.id,
                                                                                error: err,
                                                                                no_notification: order.no_notification,
                                                                            })];
                                                                        case 1:
                                                                            _a.sent();
                                                                            return [2 /*return*/];
                                                                    }
                                                                });
                                                            }); })];
                                                    case 1:
                                                        result_1 = _e.sent();
                                                        if (result_1) {
                                                            payments.push(result_1);
                                                        }
                                                        else {
                                                            payments.push(p);
                                                        }
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        payments.push(p);
                                                        _e.label = 3;
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        };
                                        _d.label = 2;
                                    case 2:
                                        _d.trys.push([2, 7, 8, 9]);
                                        _a = __values(order.payments), _b = _a.next();
                                        _d.label = 3;
                                    case 3:
                                        if (!!_b.done) return [3 /*break*/, 6];
                                        p = _b.value;
                                        return [5 /*yield**/, _loop_2(p)];
                                    case 4:
                                        _d.sent();
                                        _d.label = 5;
                                    case 5:
                                        _b = _a.next();
                                        return [3 /*break*/, 3];
                                    case 6: return [3 /*break*/, 9];
                                    case 7:
                                        e_7_1 = _d.sent();
                                        e_7 = { error: e_7_1 };
                                        return [3 /*break*/, 9];
                                    case 8:
                                        try {
                                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                        }
                                        finally { if (e_7) throw e_7.error; }
                                        return [7 /*endfinally*/];
                                    case 9:
                                        order.payments = payments;
                                        order.payment_status = payments.every(function (p) { return p.captured_at !== null; })
                                            ? models_1.PaymentStatus.CAPTURED
                                            : models_1.PaymentStatus.REQUIRES_ACTION;
                                        return [4 /*yield*/, orderRepo.save(order)];
                                    case 10:
                                        result = _d.sent();
                                        if (!(order.payment_status === models_1.PaymentStatus.CAPTURED)) return [3 /*break*/, 12];
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(OrderService.Events.PAYMENT_CAPTURED, {
                                                id: result.id,
                                                no_notification: order.no_notification,
                                            })];
                                    case 11:
                                        _d.sent();
                                        _d.label = 12;
                                    case 12: return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Checks that a given quantity of a line item can be fulfilled. Fails if the
     * fulfillable quantity is lower than the requested fulfillment quantity.
     * Fulfillable quantity is calculated by subtracting the already fulfilled
     * quantity from the quantity that was originally purchased.
     * @param item - the line item to check has sufficient fulfillable
     *   quantity.
     * @param quantity - the quantity that is requested to be fulfilled.
     * @return a line item that has the requested fulfillment quantity
     *   set.
     */
    OrderService.prototype.validateFulfillmentLineItem = function (item, quantity) {
        if (!item) {
            // This will in most cases be called by a webhook so to ensure that
            // things go through smoothly in instances where extra items outside
            // of Medusa are added we allow unknown items
            return null;
        }
        if (quantity > item.quantity - item.fulfilled_quantity) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot fulfill more items than have been purchased");
        }
        return __assign(__assign({}, item), { quantity: quantity });
    };
    /**
     * Creates fulfillments for an order.
     * In a situation where the order has more than one shipping method,
     * we need to partition the order items, such that they can be sent
     * to their respective fulfillment provider.
     * @param orderId - id of order to fulfil.
     * @param itemsToFulfill - items to fulfil.
     * @param config - the config to fulfil.
     * @return result of the update operation.
     */
    OrderService.prototype.createFulfillment = function (orderId, itemsToFulfill, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var metadata, no_notification, location_id;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        metadata = config.metadata, no_notification = config.no_notification, location_id = config.location_id;
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var order, fulfillments, successfullyFulfilled, fulfillments_1, fulfillments_1_1, f, _loop_3, this_1, _a, _b, item, e_8_1, orderRepo, result, evaluatedNoNotification, eventsToEmit;
                                var e_9, _c, e_8, _d;
                                var _e;
                                return __generator(this, function (_f) {
                                    switch (_f.label) {
                                        case 0: return [4 /*yield*/, this.retrieve(orderId, {
                                                select: [
                                                    "subtotal",
                                                    "shipping_total",
                                                    "discount_total",
                                                    "tax_total",
                                                    "gift_card_total",
                                                    "total",
                                                ],
                                                relations: [
                                                    "discounts",
                                                    "discounts.rule",
                                                    "region",
                                                    "fulfillments",
                                                    "shipping_address",
                                                    "billing_address",
                                                    "shipping_methods",
                                                    "shipping_methods.shipping_option",
                                                    "items.adjustments",
                                                    "items.variant.product.profiles",
                                                    "payments",
                                                ],
                                            })];
                                        case 1:
                                            order = _f.sent();
                                            if (order.status === models_1.OrderStatus.CANCELED) {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "A canceled order cannot be fulfilled");
                                            }
                                            if (!((_e = order.shipping_methods) === null || _e === void 0 ? void 0 : _e.length)) {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot fulfill an order that lacks shipping methods");
                                            }
                                            return [4 /*yield*/, this.fulfillmentService_
                                                    .withTransaction(manager)
                                                    .createFulfillment(order, itemsToFulfill, {
                                                    metadata: metadata !== null && metadata !== void 0 ? metadata : {},
                                                    no_notification: no_notification,
                                                    order_id: orderId,
                                                    location_id: location_id,
                                                })];
                                        case 2:
                                            fulfillments = _f.sent();
                                            successfullyFulfilled = [];
                                            try {
                                                for (fulfillments_1 = __values(fulfillments), fulfillments_1_1 = fulfillments_1.next(); !fulfillments_1_1.done; fulfillments_1_1 = fulfillments_1.next()) {
                                                    f = fulfillments_1_1.value;
                                                    successfullyFulfilled = __spreadArray(__spreadArray([], __read(successfullyFulfilled), false), __read(f.items), false);
                                                }
                                            }
                                            catch (e_9_1) { e_9 = { error: e_9_1 }; }
                                            finally {
                                                try {
                                                    if (fulfillments_1_1 && !fulfillments_1_1.done && (_c = fulfillments_1.return)) _c.call(fulfillments_1);
                                                }
                                                finally { if (e_9) throw e_9.error; }
                                            }
                                            order.fulfillment_status = models_1.FulfillmentStatus.FULFILLED;
                                            _loop_3 = function (item) {
                                                var fulfillmentItem, fulfilledQuantity;
                                                return __generator(this, function (_g) {
                                                    switch (_g.label) {
                                                        case 0:
                                                            fulfillmentItem = successfullyFulfilled.find(function (f) { return item.id === f.item_id; });
                                                            if (!fulfillmentItem) return [3 /*break*/, 2];
                                                            fulfilledQuantity = (item.fulfilled_quantity || 0) + fulfillmentItem.quantity;
                                                            // Update the fulfilled quantity
                                                            return [4 /*yield*/, this_1.lineItemService_.withTransaction(manager).update(item.id, {
                                                                    fulfilled_quantity: fulfilledQuantity,
                                                                })];
                                                        case 1:
                                                            // Update the fulfilled quantity
                                                            _g.sent();
                                                            if (item.quantity !== fulfilledQuantity) {
                                                                order.fulfillment_status = models_1.FulfillmentStatus.PARTIALLY_FULFILLED;
                                                            }
                                                            return [3 /*break*/, 3];
                                                        case 2:
                                                            if (item.quantity !== item.fulfilled_quantity) {
                                                                order.fulfillment_status = models_1.FulfillmentStatus.PARTIALLY_FULFILLED;
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
                                            _a = __values(order.items), _b = _a.next();
                                            _f.label = 4;
                                        case 4:
                                            if (!!_b.done) return [3 /*break*/, 7];
                                            item = _b.value;
                                            return [5 /*yield**/, _loop_3(item)];
                                        case 5:
                                            _f.sent();
                                            _f.label = 6;
                                        case 6:
                                            _b = _a.next();
                                            return [3 /*break*/, 4];
                                        case 7: return [3 /*break*/, 10];
                                        case 8:
                                            e_8_1 = _f.sent();
                                            e_8 = { error: e_8_1 };
                                            return [3 /*break*/, 10];
                                        case 9:
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_8) throw e_8.error; }
                                            return [7 /*endfinally*/];
                                        case 10:
                                            orderRepo = manager.withRepository(this.orderRepository_);
                                            order.fulfillments = __spreadArray(__spreadArray([], __read(order.fulfillments), false), __read(fulfillments), false);
                                            return [4 /*yield*/, orderRepo.save(order)];
                                        case 11:
                                            result = _f.sent();
                                            evaluatedNoNotification = no_notification !== undefined ? no_notification : order.no_notification;
                                            eventsToEmit = fulfillments.map(function (fulfillment) { return ({
                                                eventName: OrderService.Events.FULFILLMENT_CREATED,
                                                data: {
                                                    id: orderId,
                                                    fulfillment_id: fulfillment.id,
                                                    no_notification: evaluatedNoNotification,
                                                },
                                            }); });
                                            return [4 /*yield*/, this.eventBus_.withTransaction(manager).emit(eventsToEmit)];
                                        case 12:
                                            _f.sent();
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
     * Cancels a fulfillment (if related to an order)
     * @param fulfillmentId - the ID of the fulfillment to cancel
     * @return updated order
     */
    OrderService.prototype.cancelFulfillment = function (fulfillmentId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var canceled, order, orderRepo, updated;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.fulfillmentService_
                                            .withTransaction(manager)
                                            .cancelFulfillment(fulfillmentId)];
                                    case 1:
                                        canceled = _a.sent();
                                        if (!canceled.order_id) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Fufillment not related to an order");
                                        }
                                        return [4 /*yield*/, this.retrieve(canceled.order_id)];
                                    case 2:
                                        order = _a.sent();
                                        order.fulfillment_status = models_1.FulfillmentStatus.CANCELED;
                                        orderRepo = manager.withRepository(this.orderRepository_);
                                        return [4 /*yield*/, orderRepo.save(order)];
                                    case 3:
                                        updated = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(OrderService.Events.FULFILLMENT_CANCELED, {
                                                id: order.id,
                                                fulfillment_id: canceled.id,
                                                no_notification: canceled.no_notification,
                                            })];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/, updated];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves the order line items, given an array of items.
     * @param order - the order to get line items from
     * @param items - the items to get
     * @param transformer - a function to apply to each of the items
     *    retrieved from the order, should return a line item. If the transformer
     *    returns an undefined value the line item will be filtered from the
     *    returned array.
     * @return the line items generated by the transformer.
     */
    OrderService.prototype.getFulfillmentItems = function (order, items, transformer) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, utils_1.promiseAll)(items.map(function (_a) {
                            var item_id = _a.item_id, quantity = _a.quantity;
                            return __awaiter(_this, void 0, void 0, function () {
                                var item;
                                return __generator(this, function (_b) {
                                    item = order.items.find(function (i) { return i.id === item_id; });
                                    return [2 /*return*/, transformer(item, quantity)];
                                });
                            });
                        }))];
                    case 1: return [2 /*return*/, (_a.sent()).filter(function (i) { return !!i; })];
                }
            });
        });
    };
    /**
     * Archives an order. It only alloved, if the order has been fulfilled
     * and payment has been captured.
     * @param orderId - the order to archive
     * @return the result of the update operation
     */
    OrderService.prototype.archive = function (orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var order, orderRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(orderId)];
                                    case 1:
                                        order = _a.sent();
                                        if (order.status !== ("completed" || "refunded")) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Can't archive an unprocessed order");
                                        }
                                        order.status = models_1.OrderStatus.ARCHIVED;
                                        orderRepo = manager.withRepository(this.orderRepository_);
                                        return [4 /*yield*/, orderRepo.save(order)];
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
     * Refunds a given amount back to the customer.
     * @param orderId - id of the order to refund.
     * @param refundAmount - the amount to refund.
     * @param reason - the reason to refund.
     * @param note - note for refund.
     * @param config - the config for refund.
     * @return the result of the refund operation.
     */
    OrderService.prototype.createRefund = function (orderId, refundAmount, reason, note, config) {
        if (config === void 0) { config = {
            no_notification: undefined,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var no_notification;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        no_notification = config.no_notification;
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var orderRepo, order, refund, result, evaluatedNoNotification;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            orderRepo = manager.withRepository(this.orderRepository_);
                                            return [4 /*yield*/, this.retrieve(orderId, {
                                                    select: ["refundable_amount", "total", "refunded_total"],
                                                    relations: ["payments"],
                                                })];
                                        case 1:
                                            order = _a.sent();
                                            if (order.status === "canceled") {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "A canceled order cannot be refunded");
                                            }
                                            if (refundAmount > order.refundable_amount) {
                                                throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot refund more than the original order amount");
                                            }
                                            return [4 /*yield*/, this.paymentProviderService_
                                                    .withTransaction(manager)
                                                    .refundPayment(order.payments, refundAmount, reason, note)];
                                        case 2:
                                            refund = _a.sent();
                                            return [4 /*yield*/, this.retrieveWithTotals(orderId, {
                                                    relations: ["payments"],
                                                })];
                                        case 3:
                                            result = _a.sent();
                                            if (!(result.refunded_total > 0 && result.refundable_amount > 0)) return [3 /*break*/, 5];
                                            result.payment_status = models_1.PaymentStatus.PARTIALLY_REFUNDED;
                                            return [4 /*yield*/, orderRepo.save(result)];
                                        case 4:
                                            result = _a.sent();
                                            _a.label = 5;
                                        case 5:
                                            if (!(result.paid_total > 0 &&
                                                result.refunded_total === result.paid_total)) return [3 /*break*/, 7];
                                            result.payment_status = models_1.PaymentStatus.REFUNDED;
                                            return [4 /*yield*/, orderRepo.save(result)];
                                        case 6:
                                            result = _a.sent();
                                            _a.label = 7;
                                        case 7:
                                            evaluatedNoNotification = no_notification !== undefined ? no_notification : order.no_notification;
                                            return [4 /*yield*/, this.eventBus_
                                                    .withTransaction(manager)
                                                    .emit(OrderService.Events.REFUND_CREATED, {
                                                    id: result.id,
                                                    refund_id: refund.id,
                                                    no_notification: evaluatedNoNotification,
                                                })];
                                        case 8:
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
    OrderService.prototype.decorateTotalsLegacy = function (order, totalsFields) {
        if (totalsFields === void 0) { totalsFields = []; }
        return __awaiter(this, void 0, void 0, function () {
            var calculationContext_1, _a, totalsFields_1, totalsFields_1_1, totalField, _b, _c, giftCardBreakdown, _d, _e, _f, _g, paid_total, refunded_total, items, _h, _j, item, _k, _l, _m, e_10_1, _o, _p, s, items, _q, _r, item, _s, _t, _u, e_11_1, e_12_1, _v, _w, c, items, _x, _y, item, _z, _0, _1, e_13_1, e_14_1, e_15_1;
            var e_15, _2, e_10, _3, _4, e_12, _5, e_11, _6, _7, e_14, _8, e_13, _9, _10;
            var _this = this;
            return __generator(this, function (_11) {
                switch (_11.label) {
                    case 0:
                        if (!totalsFields.some(function (field) { return ["subtotal", "total"].includes(field); })) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.totalsService_.getCalculationContext(order, {
                                exclude_shipping: true,
                            })];
                    case 1:
                        calculationContext_1 = _11.sent();
                        _a = order;
                        return [4 /*yield*/, (0, utils_1.promiseAll)((order.items || []).map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var itemTotals;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.totalsService_.getLineItemTotals(item, order, {
                                                include_tax: true,
                                                calculation_context: calculationContext_1,
                                            })];
                                        case 1:
                                            itemTotals = _a.sent();
                                            return [2 /*return*/, Object.assign(item, itemTotals)];
                                    }
                                });
                            }); }))];
                    case 2:
                        _a.items = _11.sent();
                        _11.label = 3;
                    case 3:
                        _11.trys.push([3, 62, 63, 64]);
                        totalsFields_1 = __values(totalsFields), totalsFields_1_1 = totalsFields_1.next();
                        _11.label = 4;
                    case 4:
                        if (!!totalsFields_1_1.done) return [3 /*break*/, 61];
                        totalField = totalsFields_1_1.value;
                        _b = totalField;
                        switch (_b) {
                            case "shipping_total": return [3 /*break*/, 5];
                            case "gift_card_total": return [3 /*break*/, 7];
                            case "discount_total": return [3 /*break*/, 9];
                            case "tax_total": return [3 /*break*/, 11];
                            case "subtotal": return [3 /*break*/, 13];
                            case "total": return [3 /*break*/, 15];
                            case "refunded_total": return [3 /*break*/, 17];
                            case "paid_total": return [3 /*break*/, 18];
                            case "refundable_amount": return [3 /*break*/, 19];
                            case "items.refundable": return [3 /*break*/, 20];
                            case "swaps.additional_items.refundable": return [3 /*break*/, 29];
                            case "claims.additional_items.refundable": return [3 /*break*/, 44];
                        }
                        return [3 /*break*/, 59];
                    case 5:
                        _c = order;
                        return [4 /*yield*/, this.totalsService_.getShippingTotal(order)];
                    case 6:
                        _c.shipping_total = _11.sent();
                        return [3 /*break*/, 60];
                    case 7: return [4 /*yield*/, this.totalsService_.getGiftCardTotal(order)];
                    case 8:
                        giftCardBreakdown = _11.sent();
                        order.gift_card_total = giftCardBreakdown.total;
                        order.gift_card_tax_total = giftCardBreakdown.tax_total;
                        return [3 /*break*/, 60];
                    case 9:
                        _d = order;
                        return [4 /*yield*/, this.totalsService_.getDiscountTotal(order)];
                    case 10:
                        _d.discount_total = _11.sent();
                        return [3 /*break*/, 60];
                    case 11:
                        _e = order;
                        return [4 /*yield*/, this.totalsService_.getTaxTotal(order)];
                    case 12:
                        _e.tax_total = _11.sent();
                        return [3 /*break*/, 60];
                    case 13:
                        _f = order;
                        return [4 /*yield*/, this.totalsService_.getSubtotal(order)];
                    case 14:
                        _f.subtotal = _11.sent();
                        return [3 /*break*/, 60];
                    case 15:
                        _g = order;
                        return [4 /*yield*/, this.totalsService_
                                .withTransaction(this.activeManager_)
                                .getTotal(order)];
                    case 16:
                        _g.total = _11.sent();
                        return [3 /*break*/, 60];
                    case 17:
                        {
                            order.refunded_total = this.totalsService_.getRefundedTotal(order);
                            return [3 /*break*/, 60];
                        }
                        _11.label = 18;
                    case 18:
                        {
                            order.paid_total = this.totalsService_.getPaidTotal(order);
                            return [3 /*break*/, 60];
                        }
                        _11.label = 19;
                    case 19:
                        {
                            paid_total = this.totalsService_.getPaidTotal(order);
                            refunded_total = this.totalsService_.getRefundedTotal(order);
                            order.refundable_amount = paid_total - refunded_total;
                            return [3 /*break*/, 60];
                        }
                        _11.label = 20;
                    case 20:
                        items = [];
                        _11.label = 21;
                    case 21:
                        _11.trys.push([21, 26, 27, 28]);
                        _h = (e_10 = void 0, __values(order.items)), _j = _h.next();
                        _11.label = 22;
                    case 22:
                        if (!!_j.done) return [3 /*break*/, 25];
                        item = _j.value;
                        _l = (_k = items).push;
                        _m = [__assign({}, item)];
                        _4 = {};
                        return [4 /*yield*/, this.totalsService_.getLineItemRefund(order, __assign(__assign({}, item), { quantity: item.quantity - (item.returned_quantity || 0) }))];
                    case 23:
                        _l.apply(_k, [__assign.apply(void 0, _m.concat([(_4.refundable = _11.sent(), _4)]))]);
                        _11.label = 24;
                    case 24:
                        _j = _h.next();
                        return [3 /*break*/, 22];
                    case 25: return [3 /*break*/, 28];
                    case 26:
                        e_10_1 = _11.sent();
                        e_10 = { error: e_10_1 };
                        return [3 /*break*/, 28];
                    case 27:
                        try {
                            if (_j && !_j.done && (_3 = _h.return)) _3.call(_h);
                        }
                        finally { if (e_10) throw e_10.error; }
                        return [7 /*endfinally*/];
                    case 28:
                        order.items = items;
                        return [3 /*break*/, 60];
                    case 29:
                        _11.trys.push([29, 41, 42, 43]);
                        _o = (e_12 = void 0, __values(order.swaps)), _p = _o.next();
                        _11.label = 30;
                    case 30:
                        if (!!_p.done) return [3 /*break*/, 40];
                        s = _p.value;
                        items = [];
                        _11.label = 31;
                    case 31:
                        _11.trys.push([31, 36, 37, 38]);
                        _q = (e_11 = void 0, __values(s.additional_items)), _r = _q.next();
                        _11.label = 32;
                    case 32:
                        if (!!_r.done) return [3 /*break*/, 35];
                        item = _r.value;
                        _t = (_s = items).push;
                        _u = [__assign({}, item)];
                        _7 = {};
                        return [4 /*yield*/, this.totalsService_.getLineItemRefund(order, __assign(__assign({}, item), { quantity: item.quantity - (item.returned_quantity || 0) }))];
                    case 33:
                        _t.apply(_s, [__assign.apply(void 0, _u.concat([(_7.refundable = _11.sent(), _7)]))]);
                        _11.label = 34;
                    case 34:
                        _r = _q.next();
                        return [3 /*break*/, 32];
                    case 35: return [3 /*break*/, 38];
                    case 36:
                        e_11_1 = _11.sent();
                        e_11 = { error: e_11_1 };
                        return [3 /*break*/, 38];
                    case 37:
                        try {
                            if (_r && !_r.done && (_6 = _q.return)) _6.call(_q);
                        }
                        finally { if (e_11) throw e_11.error; }
                        return [7 /*endfinally*/];
                    case 38:
                        s.additional_items = items;
                        _11.label = 39;
                    case 39:
                        _p = _o.next();
                        return [3 /*break*/, 30];
                    case 40: return [3 /*break*/, 43];
                    case 41:
                        e_12_1 = _11.sent();
                        e_12 = { error: e_12_1 };
                        return [3 /*break*/, 43];
                    case 42:
                        try {
                            if (_p && !_p.done && (_5 = _o.return)) _5.call(_o);
                        }
                        finally { if (e_12) throw e_12.error; }
                        return [7 /*endfinally*/];
                    case 43: return [3 /*break*/, 60];
                    case 44:
                        _11.trys.push([44, 56, 57, 58]);
                        _v = (e_14 = void 0, __values(order.claims)), _w = _v.next();
                        _11.label = 45;
                    case 45:
                        if (!!_w.done) return [3 /*break*/, 55];
                        c = _w.value;
                        items = [];
                        _11.label = 46;
                    case 46:
                        _11.trys.push([46, 51, 52, 53]);
                        _x = (e_13 = void 0, __values(c.additional_items)), _y = _x.next();
                        _11.label = 47;
                    case 47:
                        if (!!_y.done) return [3 /*break*/, 50];
                        item = _y.value;
                        _0 = (_z = items).push;
                        _1 = [__assign({}, item)];
                        _10 = {};
                        return [4 /*yield*/, this.totalsService_.getLineItemRefund(order, __assign(__assign({}, item), { quantity: item.quantity - (item.returned_quantity || 0) }))];
                    case 48:
                        _0.apply(_z, [__assign.apply(void 0, _1.concat([(_10.refundable = _11.sent(), _10)]))]);
                        _11.label = 49;
                    case 49:
                        _y = _x.next();
                        return [3 /*break*/, 47];
                    case 50: return [3 /*break*/, 53];
                    case 51:
                        e_13_1 = _11.sent();
                        e_13 = { error: e_13_1 };
                        return [3 /*break*/, 53];
                    case 52:
                        try {
                            if (_y && !_y.done && (_9 = _x.return)) _9.call(_x);
                        }
                        finally { if (e_13) throw e_13.error; }
                        return [7 /*endfinally*/];
                    case 53:
                        c.additional_items = items;
                        _11.label = 54;
                    case 54:
                        _w = _v.next();
                        return [3 /*break*/, 45];
                    case 55: return [3 /*break*/, 58];
                    case 56:
                        e_14_1 = _11.sent();
                        e_14 = { error: e_14_1 };
                        return [3 /*break*/, 58];
                    case 57:
                        try {
                            if (_w && !_w.done && (_8 = _v.return)) _8.call(_v);
                        }
                        finally { if (e_14) throw e_14.error; }
                        return [7 /*endfinally*/];
                    case 58: return [3 /*break*/, 60];
                    case 59:
                        {
                            return [3 /*break*/, 60];
                        }
                        _11.label = 60;
                    case 60:
                        totalsFields_1_1 = totalsFields_1.next();
                        return [3 /*break*/, 4];
                    case 61: return [3 /*break*/, 64];
                    case 62:
                        e_15_1 = _11.sent();
                        e_15 = { error: e_15_1 };
                        return [3 /*break*/, 64];
                    case 63:
                        try {
                            if (totalsFields_1_1 && !totalsFields_1_1.done && (_2 = totalsFields_1.return)) _2.call(totalsFields_1);
                        }
                        finally { if (e_15) throw e_15.error; }
                        return [7 /*endfinally*/];
                    case 64: return [2 /*return*/, order];
                }
            });
        });
    };
    /**
     * Calculate and attach the different total fields on the object
     * @param order
     * @param totalsFieldsOrContext
     */
    OrderService.prototype.decorateTotals = function (order, totalsFieldsOrContext) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        return __awaiter(this, void 0, void 0, function () {
            var newTotalsServiceTx, calculationContext, returnable_items, returnableItems, isReturnableItem, allItems, orderShippingMethods, itemsTotals, shippingTotals, item_tax_total, shipping_tax_total, giftCardableAmount, giftCardTotal, _p, _q, swap, _r, _s, claim;
            var e_16, _t, e_17, _u;
            return __generator(this, function (_v) {
                switch (_v.label) {
                    case 0:
                        if (!Array.isArray(totalsFieldsOrContext)) return [3 /*break*/, 3];
                        if (!totalsFieldsOrContext.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.decorateTotalsLegacy(order, totalsFieldsOrContext)];
                    case 1: return [2 /*return*/, _v.sent()];
                    case 2:
                        totalsFieldsOrContext = {};
                        _v.label = 3;
                    case 3:
                        newTotalsServiceTx = this.newTotalsService_.withTransaction(this.activeManager_);
                        return [4 /*yield*/, this.totalsService_.getCalculationContext(order)];
                    case 4:
                        calculationContext = _v.sent();
                        returnable_items = ((_a = totalsFieldsOrContext === null || totalsFieldsOrContext === void 0 ? void 0 : totalsFieldsOrContext.includes) !== null && _a !== void 0 ? _a : {}).returnable_items;
                        returnableItems = (0, utils_1.isDefined)(returnable_items)
                            ? []
                            : undefined;
                        isReturnableItem = function (item) {
                            var _a, _b;
                            return returnable_items &&
                                ((_a = item.returned_quantity) !== null && _a !== void 0 ? _a : 0) < ((_b = item.shipped_quantity) !== null && _b !== void 0 ? _b : 0);
                        };
                        allItems = __spreadArray([], __read(((_b = order.items) !== null && _b !== void 0 ? _b : [])), false);
                        if (returnable_items) {
                            // All items must receive their totals and if some of them are returnable
                            // They will be pushed to `returnable_items` at a later point
                            allItems.push.apply(allItems, __spreadArray(__spreadArray([], __read(((_d = (_c = order.swaps) === null || _c === void 0 ? void 0 : _c.map(function (s) { var _a; return (_a = s.additional_items) !== null && _a !== void 0 ? _a : []; }).flat()) !== null && _d !== void 0 ? _d : [])), false), __read(((_f = (_e = order.claims) === null || _e === void 0 ? void 0 : _e.map(function (c) { var _a; return (_a = c.additional_items) !== null && _a !== void 0 ? _a : []; }).flat()) !== null && _f !== void 0 ? _f : [])), false));
                        }
                        orderShippingMethods = __spreadArray([], __read(((_g = order.shipping_methods) !== null && _g !== void 0 ? _g : [])), false);
                        return [4 /*yield*/, newTotalsServiceTx.getLineItemTotals(allItems, {
                                taxRate: order.tax_rate,
                                includeTax: true,
                                calculationContext: calculationContext,
                            })];
                    case 5:
                        itemsTotals = _v.sent();
                        return [4 /*yield*/, newTotalsServiceTx.getShippingMethodTotals(orderShippingMethods, {
                                taxRate: order.tax_rate,
                                discounts: order.discounts,
                                includeTax: true,
                                calculationContext: calculationContext,
                            })];
                    case 6:
                        shippingTotals = _v.sent();
                        order.subtotal = 0;
                        order.discount_total = 0;
                        order.shipping_total = 0;
                        order.refunded_total =
                            Math.round((_h = order.refunds) === null || _h === void 0 ? void 0 : _h.reduce(function (acc, next) { return acc + next.amount; }, 0)) ||
                                0;
                        order.paid_total =
                            ((_j = order.payments) === null || _j === void 0 ? void 0 : _j.reduce(function (acc, next) { return (acc += next.amount); }, 0)) || 0;
                        order.refundable_amount = order.paid_total - order.refunded_total || 0;
                        item_tax_total = 0;
                        shipping_tax_total = 0;
                        order.items = (order.items || []).map(function (item) {
                            var _a, _b, _c, _d;
                            item.quantity = item.quantity - (item.returned_quantity || 0);
                            var refundable = newTotalsServiceTx.getLineItemRefund(item, {
                                calculationContext: calculationContext,
                                taxRate: order.tax_rate,
                            });
                            Object.assign(item, (_a = itemsTotals[item.id]) !== null && _a !== void 0 ? _a : {}, { refundable: refundable });
                            order.subtotal += (_b = item.subtotal) !== null && _b !== void 0 ? _b : 0;
                            order.discount_total += (_c = item.raw_discount_total) !== null && _c !== void 0 ? _c : 0;
                            item_tax_total += (_d = item.tax_total) !== null && _d !== void 0 ? _d : 0;
                            if (isReturnableItem(item)) {
                                returnableItems === null || returnableItems === void 0 ? void 0 : returnableItems.push(item);
                            }
                            return item;
                        });
                        order.shipping_methods = (order.shipping_methods || []).map(function (shippingMethod) {
                            var _a, _b, _c;
                            var methodWithTotals = Object.assign(shippingMethod, (_a = shippingTotals[shippingMethod.id]) !== null && _a !== void 0 ? _a : {});
                            order.shipping_total += (_b = methodWithTotals.subtotal) !== null && _b !== void 0 ? _b : 0;
                            shipping_tax_total += (_c = methodWithTotals.tax_total) !== null && _c !== void 0 ? _c : 0;
                            return methodWithTotals;
                        });
                        order.item_tax_total = item_tax_total;
                        order.shipping_tax_total = shipping_tax_total;
                        order.tax_total = item_tax_total + shipping_tax_total;
                        giftCardableAmount = this.newTotalsService_.getGiftCardableAmount({
                            gift_cards_taxable: (_k = order.region) === null || _k === void 0 ? void 0 : _k.gift_cards_taxable,
                            subtotal: order.subtotal,
                            discount_total: order.discount_total,
                            shipping_total: order.shipping_total,
                            tax_total: order.tax_total,
                        });
                        return [4 /*yield*/, this.newTotalsService_.getGiftCardTotals(giftCardableAmount, {
                                region: order.region,
                                giftCards: order.gift_cards,
                                giftCardTransactions: (_l = order.gift_card_transactions) !== null && _l !== void 0 ? _l : [],
                            })];
                    case 7:
                        giftCardTotal = _v.sent();
                        order.gift_card_total = giftCardTotal.total || 0;
                        order.gift_card_tax_total = giftCardTotal.tax_total || 0;
                        order.tax_total -= order.gift_card_tax_total;
                        try {
                            for (_p = __values((_m = order.swaps) !== null && _m !== void 0 ? _m : []), _q = _p.next(); !_q.done; _q = _p.next()) {
                                swap = _q.value;
                                swap.additional_items = swap.additional_items.map(function (item) {
                                    var _a;
                                    item.quantity = item.quantity - (item.returned_quantity || 0);
                                    var refundable = newTotalsServiceTx.getLineItemRefund(item, {
                                        calculationContext: calculationContext,
                                        taxRate: order.tax_rate,
                                    });
                                    Object.assign(item, (_a = itemsTotals[item.id]) !== null && _a !== void 0 ? _a : {}, { refundable: refundable });
                                    if (isReturnableItem(item)) {
                                        returnableItems === null || returnableItems === void 0 ? void 0 : returnableItems.push(item);
                                    }
                                    return item;
                                });
                            }
                        }
                        catch (e_16_1) { e_16 = { error: e_16_1 }; }
                        finally {
                            try {
                                if (_q && !_q.done && (_t = _p.return)) _t.call(_p);
                            }
                            finally { if (e_16) throw e_16.error; }
                        }
                        try {
                            for (_r = __values((_o = order.claims) !== null && _o !== void 0 ? _o : []), _s = _r.next(); !_s.done; _s = _r.next()) {
                                claim = _s.value;
                                claim.additional_items = claim.additional_items.map(function (item) {
                                    var _a;
                                    item.quantity = item.quantity - (item.returned_quantity || 0);
                                    var refundable = newTotalsServiceTx.getLineItemRefund(item, {
                                        calculationContext: calculationContext,
                                        taxRate: order.tax_rate,
                                    });
                                    Object.assign(item, (_a = itemsTotals[item.id]) !== null && _a !== void 0 ? _a : {}, { refundable: refundable });
                                    if (isReturnableItem(item)) {
                                        returnableItems === null || returnableItems === void 0 ? void 0 : returnableItems.push(item);
                                    }
                                    return item;
                                });
                            }
                        }
                        catch (e_17_1) { e_17 = { error: e_17_1 }; }
                        finally {
                            try {
                                if (_s && !_s.done && (_u = _r.return)) _u.call(_r);
                            }
                            finally { if (e_17) throw e_17.error; }
                        }
                        order.raw_discount_total = order.discount_total;
                        order.discount_total = Math.round(order.discount_total);
                        order.total =
                            order.subtotal +
                                order.shipping_total +
                                order.tax_total -
                                (order.gift_card_total + order.discount_total);
                        order.returnable_items = returnableItems;
                        return [2 /*return*/, order];
                }
            });
        });
    };
    /**
     * Handles receiving a return. This will create a
     * refund to the customer. If the returned items don't match the requested
     * items the return status will be updated to requires_action. This behaviour
     * is useful in situations where a custom refund amount is requested, but the
     * returned items are not matching the requested items. Setting the
     * allowMismatch argument to true, will process the return, ignoring any
     * mismatches.
     * @param orderId - the order to return.
     * @param receivedReturn - the received return
     * @param customRefundAmount - the custom refund amount return
     * @return the result of the update operation
     */
    OrderService.prototype.registerReturnReceived = function (orderId, receivedReturn, customRefundAmount) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var order, refundAmount, orderRepo, result_2, isFullReturn, _a, _b, i, refund, result;
                            var e_18, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(orderId, {
                                            select: ["total", "refunded_total", "refundable_amount"],
                                            relations: ["items", "returns", "payments"],
                                        })];
                                    case 1:
                                        order = _d.sent();
                                        if (order.status === "canceled") {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "A canceled order cannot be registered as received");
                                        }
                                        if (!receivedReturn || receivedReturn.order_id !== orderId) {
                                            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Received return does not exist");
                                        }
                                        refundAmount = customRefundAmount !== null && customRefundAmount !== void 0 ? customRefundAmount : receivedReturn.refund_amount;
                                        orderRepo = manager.withRepository(this.orderRepository_);
                                        if (!(refundAmount > order.refundable_amount)) return [3 /*break*/, 4];
                                        order.fulfillment_status = models_1.FulfillmentStatus.REQUIRES_ACTION;
                                        return [4 /*yield*/, orderRepo.save(order)];
                                    case 2:
                                        result_2 = _d.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(OrderService.Events.RETURN_ACTION_REQUIRED, {
                                                id: result_2.id,
                                                return_id: receivedReturn.id,
                                                no_notification: receivedReturn.no_notification,
                                            })];
                                    case 3:
                                        _d.sent();
                                        return [2 /*return*/, result_2];
                                    case 4:
                                        isFullReturn = true;
                                        try {
                                            for (_a = __values(order.items), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                i = _b.value;
                                                if (i.returned_quantity !== i.quantity) {
                                                    isFullReturn = false;
                                                }
                                            }
                                        }
                                        catch (e_18_1) { e_18 = { error: e_18_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                            }
                                            finally { if (e_18) throw e_18.error; }
                                        }
                                        if (!(refundAmount > 0)) return [3 /*break*/, 6];
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(manager)
                                                .refundPayment(order.payments, refundAmount, "return")];
                                    case 5:
                                        refund = _d.sent();
                                        order.refunds = __spreadArray(__spreadArray([], __read((order.refunds || [])), false), [refund], false);
                                        _d.label = 6;
                                    case 6:
                                        if (isFullReturn) {
                                            order.fulfillment_status = models_1.FulfillmentStatus.RETURNED;
                                        }
                                        else {
                                            order.fulfillment_status = models_1.FulfillmentStatus.PARTIALLY_RETURNED;
                                        }
                                        return [4 /*yield*/, orderRepo.save(order)];
                                    case 7:
                                        result = _d.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(OrderService.Events.ITEMS_RETURNED, {
                                                id: order.id,
                                                return_id: receivedReturn.id,
                                                no_notification: receivedReturn.no_notification,
                                            })];
                                    case 8:
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
    OrderService.prototype.getTotalsRelations = function (config) {
        var relationSet = new Set(config.relations);
        relationSet.add("items");
        relationSet.add("items.tax_lines");
        relationSet.add("items.adjustments");
        relationSet.add("items.variant");
        relationSet.add("swaps");
        relationSet.add("swaps.additional_items");
        relationSet.add("swaps.additional_items.tax_lines");
        relationSet.add("swaps.additional_items.adjustments");
        relationSet.add("claims");
        relationSet.add("claims.additional_items");
        relationSet.add("claims.additional_items.tax_lines");
        relationSet.add("claims.additional_items.adjustments");
        relationSet.add("discounts");
        relationSet.add("discounts.rule");
        relationSet.add("gift_cards");
        relationSet.add("gift_card_transactions");
        relationSet.add("refunds");
        relationSet.add("shipping_methods");
        relationSet.add("shipping_methods.tax_lines");
        relationSet.add("region");
        relationSet.add("payments");
        return Array.from(relationSet.values());
    };
    OrderService.Events = {
        GIFT_CARD_CREATED: "order.gift_card_created",
        PAYMENT_CAPTURED: "order.payment_captured",
        PAYMENT_CAPTURE_FAILED: "order.payment_capture_failed",
        SHIPMENT_CREATED: "order.shipment_created",
        FULFILLMENT_CREATED: "order.fulfillment_created",
        FULFILLMENT_CANCELED: "order.fulfillment_canceled",
        RETURN_REQUESTED: "order.return_requested",
        ITEMS_RETURNED: "order.items_returned",
        RETURN_ACTION_REQUIRED: "order.return_action_required",
        REFUND_CREATED: "order.refund_created",
        REFUND_FAILED: "order.refund_failed",
        SWAP_CREATED: "order.swap_created",
        PLACED: "order.placed",
        UPDATED: "order.updated",
        CANCELED: "order.canceled",
        COMPLETED: "order.completed",
    };
    return OrderService;
}(interfaces_1.TransactionBaseService));
exports.default = OrderService;
//# sourceMappingURL=order.js.map