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
var interfaces_1 = require("../interfaces");
var order_1 = require("../services/order");
var utils_1 = require("@medusajs/utils");
var medusa_core_utils_1 = require("medusa-core-utils");
var CartCompletionStrategy = /** @class */ (function (_super) {
    __extends(CartCompletionStrategy, _super);
    function CartCompletionStrategy(_a) {
        var productVariantInventoryService = _a.productVariantInventoryService, paymentProviderService = _a.paymentProviderService, idempotencyKeyService = _a.idempotencyKeyService, cartService = _a.cartService, orderService = _a.orderService, swapService = _a.swapService, inventoryService = _a.inventoryService, eventBusService = _a.eventBusService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.paymentProviderService_ = paymentProviderService;
        _this.productVariantInventoryService_ = productVariantInventoryService;
        _this.idempotencyKeyService_ = idempotencyKeyService;
        _this.cartService_ = cartService;
        _this.orderService_ = orderService;
        _this.swapService_ = swapService;
        _this.inventoryService_ = inventoryService;
        _this.eventBusService_ = eventBusService;
        return _this;
    }
    CartCompletionStrategy.prototype.complete = function (id, ikey, context) {
        return __awaiter(this, void 0, void 0, function () {
            var idempotencyKey, inProgress, err, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        idempotencyKey = ikey;
                        inProgress = true;
                        err = false;
                        _b.label = 1;
                    case 1:
                        if (!inProgress) return [3 /*break*/, 12];
                        _a = idempotencyKey.recovery_point;
                        switch (_a) {
                            case "started": return [3 /*break*/, 2];
                            case "tax_lines_created": return [3 /*break*/, 4];
                            case "payment_authorized": return [3 /*break*/, 6];
                            case "finished": return [3 /*break*/, 8];
                        }
                        return [3 /*break*/, 9];
                    case 2: return [4 /*yield*/, this.activeManager_
                            .transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.idempotencyKeyService_
                                            .withTransaction(transactionManager)
                                            .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.handleCreateTaxLines(id, { manager: manager })];
                                                case 1: return [2 /*return*/, _a.sent()];
                                            }
                                        }); }); })];
                                    case 1:
                                        idempotencyKey = _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })
                            .catch(function (e) {
                            inProgress = false;
                            err = e;
                        })];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 4: return [4 /*yield*/, this.activeManager_
                            .transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.idempotencyKeyService_
                                            .withTransaction(transactionManager)
                                            .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.handleTaxLineCreated(id, idempotencyKey, {
                                                            context: context,
                                                            manager: manager,
                                                        })];
                                                    case 1: return [2 /*return*/, _a.sent()];
                                                }
                                            });
                                        }); })];
                                    case 1:
                                        idempotencyKey = _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })
                            .catch(function (e) {
                            inProgress = false;
                            err = e;
                        })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 6: return [4 /*yield*/, this.activeManager_
                            .transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.idempotencyKeyService_
                                            .withTransaction(transactionManager)
                                            .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.handlePaymentAuthorized(id, { manager: manager })];
                                                case 1: return [2 /*return*/, _a.sent()];
                                            }
                                        }); }); })];
                                    case 1:
                                        idempotencyKey = _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })
                            .catch(function (e) {
                            inProgress = false;
                            err = e;
                        })];
                    case 7:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 8:
                        {
                            inProgress = false;
                            return [3 /*break*/, 11];
                        }
                        _b.label = 9;
                    case 9: return [4 /*yield*/, this.activeManager_.transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.idempotencyKeyService_
                                            .withTransaction(transactionManager)
                                            .update(idempotencyKey.idempotency_key, {
                                            recovery_point: "finished",
                                            response_code: 500,
                                            response_body: { message: "Unknown recovery point" },
                                        })];
                                    case 1:
                                        idempotencyKey = _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 10:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 11: return [3 /*break*/, 1];
                    case 12:
                        if (!err) return [3 /*break*/, 15];
                        if (!(idempotencyKey.recovery_point !== "started")) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.activeManager_.transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                                var error_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 4]);
                                            return [4 /*yield*/, this.orderService_
                                                    .withTransaction(transactionManager)
                                                    .retrieveByCartId(id)];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 4];
                                        case 2:
                                            error_1 = _a.sent();
                                            return [4 /*yield*/, this.cartService_
                                                    .withTransaction(transactionManager)
                                                    .deleteTaxLines(id)];
                                        case 3:
                                            _a.sent();
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 13:
                        _b.sent();
                        _b.label = 14;
                    case 14: throw err;
                    case 15: return [2 /*return*/, {
                            response_body: idempotencyKey.response_body,
                            response_code: idempotencyKey.response_code,
                        }];
                }
            });
        });
    };
    CartCompletionStrategy.prototype.handleCreateTaxLines = function (id, _a) {
        var _b;
        var manager = _a.manager;
        return __awaiter(this, void 0, void 0, function () {
            var cart, swapId, swapServiceTx, swap, order;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.cartService_.withTransaction(manager).retrieve(id, {
                            relations: [
                                "customer",
                                "discounts",
                                "discounts.rule",
                                "gift_cards",
                                "items.variant.product.profiles",
                                "items.adjustments",
                                "region",
                                "region.tax_rates",
                                "shipping_address",
                                "shipping_methods",
                                "shipping_methods.shipping_option",
                            ],
                        })];
                    case 1:
                        cart = _c.sent();
                        if (!cart.completed_at) return [3 /*break*/, 5];
                        if (!(cart.type === "swap")) return [3 /*break*/, 3];
                        swapId = (_b = cart.metadata) === null || _b === void 0 ? void 0 : _b.swap_id;
                        swapServiceTx = this.swapService_.withTransaction(manager);
                        return [4 /*yield*/, swapServiceTx.retrieve(swapId, {
                                relations: ["shipping_address"],
                            })];
                    case 2:
                        swap = _c.sent();
                        return [2 /*return*/, {
                                response_code: 200,
                                response_body: { data: swap, type: "swap" },
                            }];
                    case 3: return [4 /*yield*/, this.orderService_
                            .withTransaction(manager)
                            .retrieveByCartIdWithTotals(id, {
                            relations: ["shipping_address", "items", "payments"],
                        })];
                    case 4:
                        order = _c.sent();
                        return [2 /*return*/, {
                                response_code: 200,
                                response_body: { data: order, type: "order" },
                            }];
                    case 5: return [4 /*yield*/, this.cartService_.withTransaction(manager).createTaxLines(cart)];
                    case 6:
                        _c.sent();
                        return [2 /*return*/, {
                                recovery_point: "tax_lines_created",
                            }];
                }
            });
        });
    };
    CartCompletionStrategy.prototype.handleTaxLineCreated = function (id, idempotencyKey, _a) {
        var context = _a.context, manager = _a.manager;
        return __awaiter(this, void 0, void 0, function () {
            var res, txCartService, cart;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.handleCreateTaxLines(id, { manager: manager })];
                    case 1:
                        res = _b.sent();
                        if (res.response_code) {
                            return [2 /*return*/, res];
                        }
                        txCartService = this.cartService_.withTransaction(manager);
                        return [4 /*yield*/, txCartService.authorizePayment(id, __assign(__assign({}, context), { idempotency_key: idempotencyKey }))];
                    case 2:
                        cart = _b.sent();
                        if (!cart.payment_session) return [3 /*break*/, 4];
                        if (!(cart.payment_session.status === "requires_more" ||
                            cart.payment_session.status === "pending")) return [3 /*break*/, 4];
                        return [4 /*yield*/, txCartService.deleteTaxLines(id)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, {
                                response_code: 200,
                                response_body: {
                                    data: cart,
                                    payment_status: cart.payment_session.status,
                                    type: "cart",
                                },
                            }];
                    case 4: return [2 /*return*/, {
                            recovery_point: "payment_authorized",
                        }];
                }
            });
        });
    };
    CartCompletionStrategy.prototype.removeReservations = function (reservations) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.inventoryService_) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, utils_1.promiseAll)(reservations.map(function (_a) {
                                var _b = __read(_a, 1), reservations = _b[0];
                                return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_c) {
                                        if (reservations) {
                                            return [2 /*return*/, reservations.map(function (reservation) { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, this.inventoryService_.deleteReservationItem(reservation.id)];
                                                            case 1: return [2 /*return*/, _a.sent()];
                                                        }
                                                    });
                                                }); })];
                                        }
                                        return [2 /*return*/, Promise.resolve()];
                                    });
                                });
                            }))];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    CartCompletionStrategy.prototype.handlePaymentAuthorized = function (id, _a) {
        var _b;
        var manager = _a.manager;
        return __awaiter(this, void 0, void 0, function () {
            var res, orderServiceTx, swapServiceTx, cartServiceTx, cart, allowBackorder, swap, reservations, productVariantInventoryServiceTx_1, errors, error, swapId, swap, error_2, order, error_3;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.handleCreateTaxLines(id, { manager: manager })];
                    case 1:
                        res = _c.sent();
                        if (res.response_code) {
                            return [2 /*return*/, res];
                        }
                        orderServiceTx = this.orderService_.withTransaction(manager);
                        swapServiceTx = this.swapService_.withTransaction(manager);
                        cartServiceTx = this.cartService_.withTransaction(manager);
                        return [4 /*yield*/, cartServiceTx.retrieveWithTotals(id, {
                                relations: [
                                    "region",
                                    "payment",
                                    "payment_sessions",
                                    "items.variant.product.profiles",
                                ],
                            })];
                    case 2:
                        cart = _c.sent();
                        allowBackorder = false;
                        if (!(cart.type === "swap")) return [3 /*break*/, 4];
                        return [4 /*yield*/, swapServiceTx.retrieveByCartId(id)];
                    case 3:
                        swap = _c.sent();
                        allowBackorder = swap.allow_backorder;
                        _c.label = 4;
                    case 4:
                        reservations = [];
                        if (!!allowBackorder) return [3 /*break*/, 14];
                        productVariantInventoryServiceTx_1 = this.productVariantInventoryService_.withTransaction(manager);
                        return [4 /*yield*/, (0, utils_1.promiseAll)(cart.items.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                                var inventoryConfirmed, error_4;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!item.variant_id) return [3 /*break*/, 5];
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 4, , 5]);
                                            return [4 /*yield*/, productVariantInventoryServiceTx_1.confirmInventory(item.variant_id, item.quantity, { salesChannelId: cart.sales_channel_id })];
                                        case 2:
                                            inventoryConfirmed = _a.sent();
                                            if (!inventoryConfirmed) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Variant with id: ".concat(item.variant_id, " does not have the required inventory"), medusa_core_utils_1.MedusaError.Codes.INSUFFICIENT_INVENTORY);
                                            }
                                            return [4 /*yield*/, productVariantInventoryServiceTx_1.reserveQuantity(item.variant_id, item.quantity, {
                                                    lineItemId: item.id,
                                                    salesChannelId: cart.sales_channel_id,
                                                })];
                                        case 3: return [2 /*return*/, [
                                                _a.sent(),
                                                undefined
                                            ]];
                                        case 4:
                                            error_4 = _a.sent();
                                            return [2 /*return*/, [undefined, error_4]];
                                        case 5: return [2 /*return*/, [undefined, undefined]];
                                    }
                                });
                            }); }))];
                    case 5:
                        reservations = _c.sent();
                        if (!reservations.some(function (_a) {
                            var _b = __read(_a, 2), _ = _b[0], error = _b[1];
                            return error;
                        })) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.removeReservations(reservations)];
                    case 6:
                        _c.sent();
                        errors = reservations.reduce(function (acc, _a) {
                            var _b = __read(_a, 2), _ = _b[0], error = _b[1];
                            if (error) {
                                acc.push(error);
                            }
                            return acc;
                        }, []);
                        error = errors[0];
                        if (!errors.some(function (error) { return error.code === medusa_core_utils_1.MedusaError.Codes.INSUFFICIENT_INVENTORY; })) return [3 /*break*/, 10];
                        if (!cart.payment) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.paymentProviderService_
                                .withTransaction(manager)
                                .cancelPayment(cart.payment)];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8: return [4 /*yield*/, cartServiceTx.update(cart.id, {
                            payment_authorized_at: null,
                        })];
                    case 9:
                        _c.sent();
                        return [2 /*return*/, {
                                response_code: 409,
                                response_body: {
                                    errors: errors.map(function (error) {
                                        return {
                                            message: error.message,
                                            type: error.type,
                                            code: error.code,
                                        };
                                    }),
                                },
                            }];
                    case 10: throw error;
                    case 11: return [3 /*break*/, 14];
                    case 12:
                        if (!this.inventoryService_) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.eventBusService_.emit("reservation-items.bulk-created", {
                                ids: reservations
                                    .filter(function (_a) {
                                    var _b = __read(_a, 1), reservation = _b[0];
                                    return !!reservation;
                                })
                                    .flatMap(function (_a) {
                                    var _b = __read(_a, 1), reservationItemArr = _b[0];
                                    return reservationItemArr.map(function (item) { return item.id; });
                                }),
                            })];
                    case 13:
                        _c.sent();
                        _c.label = 14;
                    case 14:
                        if (!(cart.type === "swap")) return [3 /*break*/, 20];
                        _c.label = 15;
                    case 15:
                        _c.trys.push([15, 18, , 20]);
                        swapId = (_b = cart.metadata) === null || _b === void 0 ? void 0 : _b.swap_id;
                        return [4 /*yield*/, swapServiceTx.registerCartCompletion(swapId)];
                    case 16:
                        swap = _c.sent();
                        return [4 /*yield*/, swapServiceTx.retrieve(swap.id, {
                                relations: ["shipping_address"],
                            })];
                    case 17:
                        swap = _c.sent();
                        return [2 /*return*/, {
                                response_code: 200,
                                response_body: { data: swap, type: "swap" },
                            }];
                    case 18:
                        error_2 = _c.sent();
                        return [4 /*yield*/, this.removeReservations(reservations)];
                    case 19:
                        _c.sent();
                        if (error_2 && error_2.code === medusa_core_utils_1.MedusaError.Codes.INSUFFICIENT_INVENTORY) {
                            return [2 /*return*/, {
                                    response_code: 409,
                                    response_body: {
                                        message: error_2.message,
                                        type: error_2.type,
                                        code: error_2.code,
                                    },
                                }];
                        }
                        else {
                            throw error_2;
                        }
                        return [3 /*break*/, 20];
                    case 20:
                        if (!cart.payment && cart.total > 0) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Cart payment not authorized");
                        }
                        _c.label = 21;
                    case 21:
                        _c.trys.push([21, 23, , 28]);
                        return [4 /*yield*/, orderServiceTx.createFromCart(cart)];
                    case 22:
                        order = _c.sent();
                        return [3 /*break*/, 28];
                    case 23:
                        error_3 = _c.sent();
                        return [4 /*yield*/, this.removeReservations(reservations)];
                    case 24:
                        _c.sent();
                        if (!(error_3 && error_3.message === order_1.ORDER_CART_ALREADY_EXISTS_ERROR)) return [3 /*break*/, 26];
                        return [4 /*yield*/, orderServiceTx.retrieveByCartIdWithTotals(id, {
                                relations: ["shipping_address", "items", "payments"],
                            })];
                    case 25:
                        order = _c.sent();
                        return [2 /*return*/, {
                                response_code: 200,
                                response_body: { data: order, type: "order" },
                            }];
                    case 26:
                        if (error_3 &&
                            error_3.code === medusa_core_utils_1.MedusaError.Codes.INSUFFICIENT_INVENTORY) {
                            return [2 /*return*/, {
                                    response_code: 409,
                                    response_body: {
                                        message: error_3.message,
                                        type: error_3.type,
                                        code: error_3.code,
                                    },
                                }];
                        }
                        else {
                            throw error_3;
                        }
                        _c.label = 27;
                    case 27: return [3 /*break*/, 28];
                    case 28: return [4 /*yield*/, orderServiceTx.retrieveWithTotals(order.id, {
                            relations: ["shipping_address", "items", "payments"],
                        })];
                    case 29:
                        order = _c.sent();
                        return [2 /*return*/, {
                                response_code: 200,
                                response_body: { data: order, type: "order" },
                            }];
                }
            });
        });
    };
    return CartCompletionStrategy;
}(interfaces_1.AbstractCartCompletionStrategy));
exports.default = CartCompletionStrategy;
//# sourceMappingURL=cart-completion.js.map