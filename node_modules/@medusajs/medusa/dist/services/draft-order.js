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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var models_1 = require("../models");
var utils_1 = require("../utils");
var utils_2 = require("@medusajs/utils");
/**
 * Handles draft orders
 * @implements {BaseService}
 */
var DraftOrderService = /** @class */ (function (_super) {
    __extends(DraftOrderService, _super);
    function DraftOrderService(_a) {
        var draftOrderRepository = _a.draftOrderRepository, paymentRepository = _a.paymentRepository, orderRepository = _a.orderRepository, eventBusService = _a.eventBusService, cartService = _a.cartService, lineItemService = _a.lineItemService, productVariantService = _a.productVariantService, shippingOptionService = _a.shippingOptionService, customShippingOptionService = _a.customShippingOptionService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.draftOrderRepository_ = draftOrderRepository;
        _this.paymentRepository_ = paymentRepository;
        _this.orderRepository_ = orderRepository;
        _this.lineItemService_ = lineItemService;
        _this.cartService_ = cartService;
        _this.productVariantService_ = productVariantService;
        _this.shippingOptionService_ = shippingOptionService;
        _this.customShippingOptionService_ = customShippingOptionService;
        _this.eventBus_ = eventBusService;
        return _this;
    }
    /**
     * Retrieves a draft order with the given id.
     * @param draftOrderId - id of the draft order to retrieve
     * @param config - query object for findOne
     * @return the draft order
     */
    DraftOrderService.prototype.retrieve = function (draftOrderId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var draftOrderRepo, query, draftOrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, utils_2.isDefined)(draftOrderId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"draftOrderId\" must be defined");
                        }
                        draftOrderRepo = this.activeManager_.withRepository(this.draftOrderRepository_);
                        query = (0, utils_1.buildQuery)({ id: draftOrderId }, config);
                        return [4 /*yield*/, draftOrderRepo.findOne(query)];
                    case 1:
                        draftOrder = _a.sent();
                        if (!draftOrder) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Draft order with ".concat(draftOrderId, " was not found"));
                        }
                        return [2 /*return*/, draftOrder];
                }
            });
        });
    };
    /**
     * Retrieves a draft order based on its associated cart id
     * @param cartId - cart id that the draft orders's cart has
     * @param config - query object for findOne
     * @return the draft order
     */
    DraftOrderService.prototype.retrieveByCartId = function (cartId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var draftOrderRepo, query, draftOrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        draftOrderRepo = this.activeManager_.withRepository(this.draftOrderRepository_);
                        query = (0, utils_1.buildQuery)({ cart_id: cartId }, config);
                        return [4 /*yield*/, draftOrderRepo.findOne(query)];
                    case 1:
                        draftOrder = _a.sent();
                        if (!draftOrder) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Draft order was not found");
                        }
                        return [2 /*return*/, draftOrder];
                }
            });
        });
    };
    /**
     * Deletes draft order idempotently.
     * @param {string} draftOrderId - id of draft order to delete
     * @return {Promise<DraftOrder | undefined>} empty promise
     */
    DraftOrderService.prototype.delete = function (draftOrderId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var draftOrderRepo, draftOrder;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        draftOrderRepo = transactionManager.withRepository(this.draftOrderRepository_);
                                        return [4 /*yield*/, draftOrderRepo.findOne({
                                                where: { id: draftOrderId },
                                            })];
                                    case 1:
                                        draftOrder = _a.sent();
                                        if (!draftOrder) {
                                            return [2 /*return*/];
                                        }
                                        return [4 /*yield*/, draftOrderRepo.remove(draftOrder)];
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
     * Lists draft orders alongside the count
     * @param selector - query selector to filter draft orders
     * @param config - query config
     * @return draft orders
     */
    DraftOrderService.prototype.listAndCount = function (selector, config) {
        var _a, _b, _c;
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var draftOrderRepository, q, restSelector, query, innerJoinLikeConstraint;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        draftOrderRepository = this.activeManager_.withRepository(this.draftOrderRepository_);
                        q = selector.q, restSelector = __rest(selector, ["q"]);
                        query = (0, utils_1.buildQuery)(restSelector, config);
                        if (q) {
                            query.where = query.where;
                            (_a = query.where) === null || _a === void 0 ? true : delete _a.display_id;
                            query.relations = (_b = query.relations) !== null && _b !== void 0 ? _b : {};
                            query.relations.cart = (_c = query.relations.cart) !== null && _c !== void 0 ? _c : true;
                            innerJoinLikeConstraint = {
                                cart: {
                                    id: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()),
                                },
                            };
                            query.where = query.where;
                            query.where = [
                                __assign(__assign(__assign({}, query.where), innerJoinLikeConstraint), { cart: __assign(__assign({}, innerJoinLikeConstraint.cart), { id: (0, typeorm_1.Not)((0, typeorm_1.IsNull)()), email: (0, typeorm_1.ILike)("%".concat(q, "%")) }) }),
                                __assign(__assign(__assign({}, query.where), innerJoinLikeConstraint), { display_id: (0, typeorm_1.Raw)(function (alias) { return "CAST(".concat(alias, " as varchar) ILike :q"); }, {
                                        q: "%".concat(q, "%"),
                                    }) }),
                            ];
                        }
                        return [4 /*yield*/, draftOrderRepository.findAndCount(query)];
                    case 1: return [2 /*return*/, _d.sent()];
                }
            });
        });
    };
    /**
     * Lists draft orders
     * @param selector - query object for find
     * @param config - configurable attributes for find
     * @return list of draft orders
     */
    DraftOrderService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var draftOrderRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        draftOrderRepo = this.activeManager_.withRepository(this.draftOrderRepository_);
                        query = (0, utils_1.buildQuery)(selector, config);
                        return [4 /*yield*/, draftOrderRepo.find(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates a draft order.
     * @param data - data to create draft order from
     * @return the created draft order
     */
    DraftOrderService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var draftOrderRepo, shipping_methods, no_notification_order, items, idempotency_key, discounts, rawCart, cartServiceTx, createdCart, draftOrder, result, lineItemServiceTx, itemsToGenerate, itemsToCreate, promises, generatedLines, toCreate, shippingMethodToCreate;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        draftOrderRepo = transactionManager.withRepository(this.draftOrderRepository_);
                                        if (!data.region_id) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "region_id is required to create a draft order");
                                        }
                                        shipping_methods = data.shipping_methods, no_notification_order = data.no_notification_order, items = data.items, idempotency_key = data.idempotency_key, discounts = data.discounts, rawCart = __rest(data, ["shipping_methods", "no_notification_order", "items", "idempotency_key", "discounts"]);
                                        cartServiceTx = this.cartService_.withTransaction(transactionManager);
                                        return [4 /*yield*/, cartServiceTx.create(__assign({ type: models_1.CartType.DRAFT_ORDER }, rawCart))];
                                    case 1:
                                        createdCart = _a.sent();
                                        draftOrder = draftOrderRepo.create({
                                            cart_id: createdCart.id,
                                            no_notification_order: no_notification_order,
                                            idempotency_key: idempotency_key,
                                        });
                                        return [4 /*yield*/, draftOrderRepo.save(draftOrder)];
                                    case 2:
                                        result = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(DraftOrderService.Events.CREATED, {
                                                id: result.id,
                                            })];
                                    case 3:
                                        _a.sent();
                                        lineItemServiceTx = this.lineItemService_.withTransaction(transactionManager);
                                        itemsToGenerate = [];
                                        itemsToCreate = [];
                                        (items !== null && items !== void 0 ? items : []).forEach(function (item) {
                                            if (item.variant_id) {
                                                itemsToGenerate.push({
                                                    variantId: item.variant_id,
                                                    quantity: item.quantity,
                                                    metadata: item.metadata,
                                                    unit_price: item.unit_price,
                                                });
                                                return;
                                            }
                                            var price;
                                            if (!(0, utils_2.isDefined)(item.unit_price) || item.unit_price < 0) {
                                                price = 0;
                                            }
                                            else {
                                                price = item.unit_price;
                                            }
                                            itemsToCreate.push({
                                                cart_id: createdCart.id,
                                                has_shipping: true,
                                                title: item.title || "Custom item",
                                                allow_discounts: false,
                                                unit_price: price,
                                                quantity: item.quantity,
                                                metadata: item.metadata,
                                            });
                                        });
                                        promises = [];
                                        if (!itemsToGenerate.length) return [3 /*break*/, 5];
                                        return [4 /*yield*/, lineItemServiceTx.generate(itemsToGenerate, {
                                                region_id: data.region_id,
                                            })];
                                    case 4:
                                        generatedLines = _a.sent();
                                        toCreate = generatedLines.map(function (line) { return (__assign(__assign({}, line), { cart_id: createdCart.id })); });
                                        promises.push(lineItemServiceTx.create(toCreate));
                                        _a.label = 5;
                                    case 5:
                                        // custom line items can be added to a draft order
                                        if (itemsToCreate.length) {
                                            promises.push(lineItemServiceTx.create(itemsToCreate));
                                        }
                                        shippingMethodToCreate = [];
                                        shipping_methods.forEach(function (method) {
                                            if ((0, utils_2.isDefined)(method.price)) {
                                                shippingMethodToCreate.push({
                                                    shipping_option_id: method.option_id,
                                                    cart_id: createdCart.id,
                                                    price: method.price,
                                                });
                                                return;
                                            }
                                        });
                                        if (!shippingMethodToCreate.length) return [3 /*break*/, 7];
                                        return [4 /*yield*/, this.customShippingOptionService_
                                                .withTransaction(transactionManager)
                                                .create(shippingMethodToCreate)];
                                    case 6:
                                        _a.sent();
                                        _a.label = 7;
                                    case 7: return [4 /*yield*/, cartServiceTx.retrieveWithTotals(createdCart.id, {
                                            relations: [
                                                "shipping_methods",
                                                "shipping_methods.shipping_option",
                                                "items.variant.product.profiles",
                                                "payment_sessions",
                                            ],
                                        })];
                                    case 8:
                                        createdCart = _a.sent();
                                        shipping_methods.forEach(function (method) {
                                            promises.push(cartServiceTx.addShippingMethod(createdCart, method.option_id, method.data));
                                        });
                                        return [4 /*yield*/, (0, utils_2.promiseAll)(promises)];
                                    case 9:
                                        _a.sent();
                                        if (!(discounts === null || discounts === void 0 ? void 0 : discounts.length)) return [3 /*break*/, 11];
                                        return [4 /*yield*/, cartServiceTx.update(createdCart.id, { discounts: discounts })];
                                    case 10:
                                        _a.sent();
                                        _a.label = 11;
                                    case 11: return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Registers a draft order as completed, when an order has been completed.
     * @param draftOrderId - id of draft order to complete
     * @param orderId - id of order completed from draft order cart
     * @return the created order
     */
    DraftOrderService.prototype.registerCartCompletion = function (draftOrderId, orderId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var draftOrderRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        draftOrderRepo = transactionManager.withRepository(this.draftOrderRepository_);
                                        return [4 /*yield*/, draftOrderRepo.update({
                                                id: draftOrderId,
                                            }, {
                                                status: models_1.DraftOrderStatus.COMPLETED,
                                                completed_at: new Date(),
                                                order_id: orderId,
                                            })];
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
     * Updates a draft order with the given data
     * @param id - id of the draft order
     * @param data - values to update the order with
     * @return the updated draft order
     */
    DraftOrderService.prototype.update = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var draftOrderRepo, draftOrder, touched;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        draftOrderRepo = transactionManager.withRepository(this.draftOrderRepository_);
                                        return [4 /*yield*/, this.retrieve(id)];
                                    case 1:
                                        draftOrder = _a.sent();
                                        if (draftOrder.status === models_1.DraftOrderStatus.COMPLETED) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Can't update a draft order which is complete");
                                        }
                                        touched = false;
                                        if (data.no_notification_order !== undefined) {
                                            touched = true;
                                            draftOrder.no_notification_order = data.no_notification_order;
                                        }
                                        if (!touched) return [3 /*break*/, 4];
                                        return [4 /*yield*/, draftOrderRepo.save(draftOrder)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(DraftOrderService.Events.UPDATED, {
                                                id: draftOrder.id,
                                            })];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/, draftOrder];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DraftOrderService.Events = {
        CREATED: "draft_order.created",
        UPDATED: "draft_order.updated",
    };
    return DraftOrderService;
}(interfaces_1.TransactionBaseService));
exports.default = DraftOrderService;
//# sourceMappingURL=draft-order.js.map