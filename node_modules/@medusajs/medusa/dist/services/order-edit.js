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
var typeorm_1 = require("typeorm");
var medusa_core_utils_1 = require("medusa-core-utils");
var utils_1 = require("../utils");
var interfaces_1 = require("../interfaces");
var utils_2 = require("@medusajs/utils");
var OrderEditService = /** @class */ (function (_super) {
    __extends(OrderEditService, _super);
    function OrderEditService(_a) {
        var orderEditRepository = _a.orderEditRepository, orderService = _a.orderService, lineItemService = _a.lineItemService, eventBusService = _a.eventBusService, totalsService = _a.totalsService, newTotalsService = _a.newTotalsService, orderEditItemChangeService = _a.orderEditItemChangeService, lineItemAdjustmentService = _a.lineItemAdjustmentService, taxProviderService = _a.taxProviderService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.orderEditRepository_ = orderEditRepository;
        _this.orderService_ = orderService;
        _this.lineItemService_ = lineItemService;
        _this.eventBusService_ = eventBusService;
        _this.totalsService_ = totalsService;
        _this.newTotalsService_ = newTotalsService;
        _this.orderEditItemChangeService_ = orderEditItemChangeService;
        _this.lineItemAdjustmentService_ = lineItemAdjustmentService;
        _this.taxProviderService_ = taxProviderService;
        return _this;
    }
    Object.defineProperty(OrderEditService.prototype, "inventoryService_", {
        get: function () {
            return this.__container__.inventoryService;
        },
        enumerable: false,
        configurable: true
    });
    OrderEditService.prototype.retrieve = function (orderEditId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var orderEditRepository, query, orderEdit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(orderEditId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"orderEditId\" must be defined");
                        }
                        orderEditRepository = this.activeManager_.withRepository(this.orderEditRepository_);
                        query = (0, utils_1.buildQuery)({ id: orderEditId }, config);
                        return [4 /*yield*/, orderEditRepository.findOne(query)];
                    case 1:
                        orderEdit = _a.sent();
                        if (!orderEdit) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Order edit with id ".concat(orderEditId, " was not found"));
                        }
                        return [2 /*return*/, orderEdit];
                }
            });
        });
    };
    OrderEditService.prototype.listAndCount = function (selector, config) {
        return __awaiter(this, void 0, void 0, function () {
            var orderEditRepository, q, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderEditRepository = this.activeManager_.withRepository(this.orderEditRepository_);
                        if ((0, utils_1.isString)(selector.q)) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_1.buildQuery)(selector, config);
                        query.where = query.where;
                        if (q) {
                            query.where.internal_note = (0, typeorm_1.ILike)("%".concat(q, "%"));
                        }
                        return [4 /*yield*/, orderEditRepository.findAndCount(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderEditService.prototype.list = function (selector, config) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, orderEdits;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.listAndCount(selector, config)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), orderEdits = _a[0];
                        return [2 /*return*/, orderEdits];
                }
            });
        });
    };
    OrderEditService.prototype.create = function (data, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var activeOrderEdit, orderEditRepository, orderEditToCreate, orderEdit, lineItemServiceTx, orderLineItems, lineItemIds;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieveActive(data.order_id)];
                                    case 1:
                                        activeOrderEdit = _a.sent();
                                        if (activeOrderEdit) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "An active order edit already exists for the order ".concat(data.order_id));
                                        }
                                        orderEditRepository = transactionManager.withRepository(this.orderEditRepository_);
                                        orderEditToCreate = orderEditRepository.create({
                                            order_id: data.order_id,
                                            internal_note: data.internal_note,
                                            created_by: context.createdBy,
                                        });
                                        return [4 /*yield*/, orderEditRepository.save(orderEditToCreate)];
                                    case 2:
                                        orderEdit = _a.sent();
                                        lineItemServiceTx = this.lineItemService_.withTransaction(transactionManager);
                                        return [4 /*yield*/, lineItemServiceTx.list({
                                                order_id: data.order_id,
                                            }, {
                                                select: ["id"],
                                            })];
                                    case 3:
                                        orderLineItems = _a.sent();
                                        lineItemIds = orderLineItems.map(function (_a) {
                                            var id = _a.id;
                                            return id;
                                        });
                                        return [4 /*yield*/, lineItemServiceTx.cloneTo(lineItemIds, {
                                                order_edit_id: orderEdit.id,
                                            })];
                                    case 4:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(transactionManager)
                                                .emit(OrderEditService.Events.CREATED, { id: orderEdit.id })];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, orderEdit];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderEditService.prototype.update = function (orderEditId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var orderEditRepo, orderEdit, _a, _b, key, result;
                            var e_1, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        orderEditRepo = manager.withRepository(this.orderEditRepository_);
                                        return [4 /*yield*/, this.retrieve(orderEditId)];
                                    case 1:
                                        orderEdit = _d.sent();
                                        try {
                                            for (_a = __values(Object.keys(data)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                key = _b.value;
                                                if ((0, medusa_core_utils_1.isDefined)(data[key])) {
                                                    orderEdit[key] = data[key];
                                                }
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [4 /*yield*/, orderEditRepo.save(orderEdit)];
                                    case 2:
                                        result = _d.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(OrderEditService.Events.UPDATED, {
                                                id: result.id,
                                            })];
                                    case 3:
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
    OrderEditService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var orderEditRepo, edit;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        orderEditRepo = manager.withRepository(this.orderEditRepository_);
                                        return [4 /*yield*/, this.retrieve(id).catch(function () { return void 0; })];
                                    case 1:
                                        edit = _a.sent();
                                        if (!edit) {
                                            return [2 /*return*/];
                                        }
                                        if (edit.status !== models_1.OrderEditStatus.CREATED) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot delete order edit with status ".concat(edit.status));
                                        }
                                        return [4 /*yield*/, this.deleteClonedItems(id)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, orderEditRepo.remove(edit)];
                                    case 3:
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
    OrderEditService.prototype.decline = function (orderEditId, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var orderEditRepo, declinedBy, declinedReason, orderEdit, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        orderEditRepo = manager.withRepository(this.orderEditRepository_);
                                        declinedBy = context.declinedBy, declinedReason = context.declinedReason;
                                        return [4 /*yield*/, this.retrieve(orderEditId)];
                                    case 1:
                                        orderEdit = _a.sent();
                                        if (orderEdit.status === models_1.OrderEditStatus.DECLINED) {
                                            return [2 /*return*/, orderEdit];
                                        }
                                        if (orderEdit.status !== models_1.OrderEditStatus.REQUESTED) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot decline an order edit with status ".concat(orderEdit.status, "."));
                                        }
                                        orderEdit.declined_at = new Date();
                                        orderEdit.declined_by = declinedBy;
                                        orderEdit.declined_reason = declinedReason;
                                        return [4 /*yield*/, orderEditRepo.save(orderEdit)];
                                    case 2:
                                        result = _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(OrderEditService.Events.DECLINED, {
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
     * Create or update order edit item change line item and apply the quantity
     * - If the item change already exists then update the quantity of the line item as well as the line adjustments
     * - If the item change does not exist then create the item change of type update and apply the quantity as well as update the line adjustments
     * @param orderEditId
     * @param itemId
     * @param data
     */
    OrderEditService.prototype.updateLineItem = function (orderEditId, itemId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var orderEdit, isOrderEditActive, lineItemServiceTx, lineItem, orderEditItemChangeServiceTx, change;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(orderEditId, {
                                            select: [
                                                "id",
                                                "order_id",
                                                "created_at",
                                                "requested_at",
                                                "confirmed_at",
                                                "declined_at",
                                                "canceled_at",
                                            ],
                                        })];
                                    case 1:
                                        orderEdit = _a.sent();
                                        isOrderEditActive = OrderEditService.isOrderEditActive(orderEdit);
                                        if (!isOrderEditActive) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Can not update an item on the order edit ".concat(orderEditId, " with the status ").concat(orderEdit.status));
                                        }
                                        lineItemServiceTx = this.lineItemService_.withTransaction(manager);
                                        return [4 /*yield*/, lineItemServiceTx.retrieve(itemId, {
                                                select: ["id", "order_edit_id", "original_item_id"],
                                            })];
                                    case 2:
                                        lineItem = _a.sent();
                                        if (lineItem.order_edit_id !== orderEditId) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Invalid line item id ".concat(itemId, " it does not belong to the same order edit ").concat(orderEdit.order_id, "."));
                                        }
                                        orderEditItemChangeServiceTx = this.orderEditItemChangeService_.withTransaction(manager);
                                        return [4 /*yield*/, orderEditItemChangeServiceTx.list({ line_item_id: itemId }, {
                                                select: ["line_item_id", "original_line_item_id"],
                                            })];
                                    case 3:
                                        change = (_a.sent()).pop();
                                        if (!!change) return [3 /*break*/, 5];
                                        return [4 /*yield*/, orderEditItemChangeServiceTx.create({
                                                type: models_1.OrderEditItemChangeType.ITEM_UPDATE,
                                                order_edit_id: orderEditId,
                                                original_line_item_id: lineItem.original_item_id,
                                                line_item_id: itemId,
                                            })];
                                    case 4:
                                        change = _a.sent();
                                        _a.label = 5;
                                    case 5: return [4 /*yield*/, lineItemServiceTx.update(change.line_item_id, {
                                            quantity: data.quantity,
                                        })];
                                    case 6:
                                        _a.sent();
                                        return [4 /*yield*/, this.refreshAdjustments(orderEditId, {
                                                preserveCustomAdjustments: true,
                                            })];
                                    case 7:
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
    OrderEditService.prototype.removeLineItem = function (orderEditId, lineItemId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var orderEdit, isOrderEditActive, lineItem;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(orderEditId, {
                                            select: [
                                                "id",
                                                "created_at",
                                                "requested_at",
                                                "confirmed_at",
                                                "declined_at",
                                                "canceled_at",
                                            ],
                                        })];
                                    case 1:
                                        orderEdit = _a.sent();
                                        isOrderEditActive = OrderEditService.isOrderEditActive(orderEdit);
                                        if (!isOrderEditActive) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Can not update an item on the order edit ".concat(orderEditId, " with the status ").concat(orderEdit.status));
                                        }
                                        return [4 /*yield*/, this.lineItemService_
                                                .withTransaction(manager)
                                                .retrieve(lineItemId, {
                                                select: ["id", "order_edit_id", "original_item_id"],
                                            })
                                                .catch(function () { return void 0; })];
                                    case 2:
                                        lineItem = _a.sent();
                                        if (!lineItem) {
                                            return [2 /*return*/];
                                        }
                                        if (lineItem.order_edit_id !== orderEditId ||
                                            !lineItem.original_item_id) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Invalid line item id ".concat(lineItemId, " it does not belong to the same order edit ").concat(orderEdit.order_id, "."));
                                        }
                                        return [4 /*yield*/, this.lineItemService_
                                                .withTransaction(manager)
                                                .deleteWithTaxLines(lineItem.id)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, this.refreshAdjustments(orderEditId)];
                                    case 4:
                                        _a.sent();
                                        return [4 /*yield*/, this.orderEditItemChangeService_.withTransaction(manager).create({
                                                original_line_item_id: lineItem.original_item_id,
                                                type: models_1.OrderEditItemChangeType.ITEM_REMOVE,
                                                order_edit_id: orderEdit.id,
                                            })];
                                    case 5:
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
    OrderEditService.prototype.refreshAdjustments = function (orderEditId, config) {
        if (config === void 0) { config = { preserveCustomAdjustments: false }; }
        return __awaiter(this, void 0, void 0, function () {
            var lineItemAdjustmentServiceTx, orderEdit, clonedItemAdjustmentIds, localCart;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lineItemAdjustmentServiceTx = this.lineItemAdjustmentService_.withTransaction(this.activeManager_);
                        return [4 /*yield*/, this.retrieve(orderEditId, {
                                relations: [
                                    "items",
                                    "items.variant",
                                    "items.adjustments",
                                    "items.tax_lines",
                                    "order",
                                    "order.customer",
                                    "order.discounts",
                                    "order.discounts.rule",
                                    "order.gift_cards",
                                    "order.region",
                                    "order.shipping_address",
                                    "order.shipping_methods",
                                ],
                            })];
                    case 1:
                        orderEdit = _a.sent();
                        clonedItemAdjustmentIds = [];
                        orderEdit.items.forEach(function (item) {
                            var _a;
                            if ((_a = item.adjustments) === null || _a === void 0 ? void 0 : _a.length) {
                                item.adjustments.forEach(function (adjustment) {
                                    var preserveAdjustment = config.preserveCustomAdjustments
                                        ? !!adjustment.discount_id
                                        : true;
                                    if (preserveAdjustment) {
                                        clonedItemAdjustmentIds.push(adjustment.id);
                                    }
                                });
                            }
                        });
                        return [4 /*yield*/, lineItemAdjustmentServiceTx.delete(clonedItemAdjustmentIds)];
                    case 2:
                        _a.sent();
                        localCart = __assign(__assign({}, orderEdit.order), { object: "cart", items: orderEdit.items });
                        return [4 /*yield*/, lineItemAdjustmentServiceTx.createAdjustments(localCart)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderEditService.prototype.decorateTotals = function (orderEdit) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, order_id, items, orderServiceTx, order, computedOrder, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.retrieve(orderEdit.id, {
                            select: ["id", "order_id", "items"],
                            relations: [
                                "items",
                                "items.tax_lines",
                                "items.adjustments",
                                "items.variant",
                            ],
                        })];
                    case 1:
                        _a = _d.sent(), order_id = _a.order_id, items = _a.items;
                        orderServiceTx = this.orderService_.withTransaction(this.activeManager_);
                        return [4 /*yield*/, orderServiceTx.retrieve(order_id, {
                                relations: [
                                    "discounts",
                                    "discounts.rule",
                                    "gift_cards",
                                    "region",
                                    "items",
                                    "items.tax_lines",
                                    "items.adjustments",
                                    "items.variant",
                                    "region.tax_rates",
                                    "shipping_methods",
                                    "shipping_methods.shipping_option",
                                    "shipping_methods.tax_lines",
                                ],
                            })];
                    case 2:
                        order = _d.sent();
                        computedOrder = __assign(__assign({}, order), { items: items });
                        _b = utils_2.promiseAll;
                        return [4 /*yield*/, orderServiceTx.decorateTotals(computedOrder)];
                    case 3:
                        _c = [
                            _d.sent()
                        ];
                        return [4 /*yield*/, orderServiceTx.decorateTotals(order)];
                    case 4: return [4 /*yield*/, _b.apply(void 0, [_c.concat([
                                _d.sent()
                            ])])];
                    case 5:
                        _d.sent();
                        orderEdit.items = computedOrder.items;
                        orderEdit.discount_total = computedOrder.discount_total;
                        orderEdit.gift_card_total = computedOrder.gift_card_total;
                        orderEdit.gift_card_tax_total = computedOrder.gift_card_tax_total;
                        orderEdit.shipping_total = computedOrder.shipping_total;
                        orderEdit.subtotal = computedOrder.subtotal;
                        orderEdit.tax_total = computedOrder.tax_total;
                        orderEdit.total = computedOrder.total;
                        orderEdit.difference_due = computedOrder.total - order.total;
                        return [2 /*return*/, orderEdit];
                }
            });
        });
    };
    OrderEditService.prototype.addLineItem = function (orderEditId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var lineItemServiceTx, orderEdit, regionId, lineItemData, lineItem, localCart, calcContext;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        lineItemServiceTx = this.lineItemService_.withTransaction(manager);
                                        return [4 /*yield*/, this.retrieve(orderEditId, {
                                                relations: ["order", "order.region"],
                                            })];
                                    case 1:
                                        orderEdit = _a.sent();
                                        if (!OrderEditService.isOrderEditActive(orderEdit)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Can not add an item to the edit with status ".concat(orderEdit.status));
                                        }
                                        regionId = orderEdit.order.region_id;
                                        return [4 /*yield*/, lineItemServiceTx.generate(data.variant_id, regionId, data.quantity, {
                                                customer_id: orderEdit.order.customer_id,
                                                metadata: data.metadata,
                                                order_edit_id: orderEditId,
                                            })];
                                    case 2:
                                        lineItemData = _a.sent();
                                        return [4 /*yield*/, lineItemServiceTx.create(lineItemData)];
                                    case 3:
                                        lineItem = _a.sent();
                                        return [4 /*yield*/, lineItemServiceTx.retrieve(lineItem.id, {
                                                relations: ["variant.product.profiles"],
                                            })];
                                    case 4:
                                        lineItem = _a.sent();
                                        return [4 /*yield*/, this.refreshAdjustments(orderEditId)
                                            /**
                                             * Generate a change record
                                             */
                                        ];
                                    case 5:
                                        _a.sent();
                                        /**
                                         * Generate a change record
                                         */
                                        return [4 /*yield*/, this.orderEditItemChangeService_.withTransaction(manager).create({
                                                type: models_1.OrderEditItemChangeType.ITEM_ADD,
                                                line_item_id: lineItem.id,
                                                order_edit_id: orderEditId,
                                            })
                                            /**
                                             * Compute tax lines
                                             */
                                        ];
                                    case 6:
                                        /**
                                         * Generate a change record
                                         */
                                        _a.sent();
                                        localCart = __assign(__assign({}, orderEdit.order), { object: "cart", items: [lineItem] });
                                        return [4 /*yield*/, this.totalsService_
                                                .withTransaction(manager)
                                                .getCalculationContext(localCart, {
                                                exclude_shipping: true,
                                            })];
                                    case 7:
                                        calcContext = _a.sent();
                                        return [4 /*yield*/, this.taxProviderService_
                                                .withTransaction(manager)
                                                .createTaxLines([lineItem], calcContext)];
                                    case 8:
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
    OrderEditService.prototype.deleteItemChange = function (orderEditId, itemChangeId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var itemChange, orderEdit;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.orderEditItemChangeService_.retrieve(itemChangeId, { select: ["id", "order_edit_id"] })];
                                    case 1:
                                        itemChange = _a.sent();
                                        return [4 /*yield*/, this.retrieve(orderEditId, {
                                                select: ["id", "confirmed_at", "canceled_at"],
                                            })];
                                    case 2:
                                        orderEdit = _a.sent();
                                        if (orderEdit.id !== itemChange.order_edit_id) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "The item change you are trying to delete doesn't belong to the OrderEdit with id: ".concat(orderEditId, "."));
                                        }
                                        if (orderEdit.confirmed_at !== null || orderEdit.canceled_at !== null) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot delete and item change from a ".concat(orderEdit.status, " order edit"));
                                        }
                                        return [4 /*yield*/, this.orderEditItemChangeService_.delete(itemChangeId)];
                                    case 3: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderEditService.prototype.requestConfirmation = function (orderEditId, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var orderEditRepo, orderEdit;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        orderEditRepo = manager.withRepository(this.orderEditRepository_);
                                        return [4 /*yield*/, this.retrieve(orderEditId, {
                                                relations: [
                                                    "changes",
                                                    "changes.original_line_item",
                                                    "changes.original_line_item.variant",
                                                ],
                                                select: ["id", "order_id", "requested_at"],
                                            })];
                                    case 1:
                                        orderEdit = _b.sent();
                                        if (!((_a = orderEdit.changes) === null || _a === void 0 ? void 0 : _a.length)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Cannot request a confirmation on an edit with no changes");
                                        }
                                        if (orderEdit.requested_at) {
                                            return [2 /*return*/, orderEdit];
                                        }
                                        orderEdit.requested_at = new Date();
                                        orderEdit.requested_by = context.requestedBy;
                                        return [4 /*yield*/, orderEditRepo.save(orderEdit)];
                                    case 2:
                                        orderEdit = _b.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(OrderEditService.Events.REQUESTED, { id: orderEditId })];
                                    case 3:
                                        _b.sent();
                                        return [2 /*return*/, orderEdit];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderEditService.prototype.cancel = function (orderEditId, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var orderEditRepository, orderEdit, saved;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        orderEditRepository = manager.withRepository(this.orderEditRepository_);
                                        return [4 /*yield*/, this.retrieve(orderEditId)];
                                    case 1:
                                        orderEdit = _a.sent();
                                        if (orderEdit.status === models_1.OrderEditStatus.CANCELED) {
                                            return [2 /*return*/, orderEdit];
                                        }
                                        if ([models_1.OrderEditStatus.CONFIRMED, models_1.OrderEditStatus.DECLINED].includes(orderEdit.status)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot cancel order edit with status ".concat(orderEdit.status));
                                        }
                                        orderEdit.canceled_at = new Date();
                                        orderEdit.canceled_by = context.canceledBy;
                                        return [4 /*yield*/, orderEditRepository.save(orderEdit)];
                                    case 2:
                                        saved = _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(OrderEditService.Events.CANCELED, { id: orderEditId })];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/, saved];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderEditService.prototype.confirm = function (orderEditId, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var orderEditRepository, orderEdit, lineItemServiceTx, _a, originalOrderLineItems, itemsIds;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        orderEditRepository = manager.withRepository(this.orderEditRepository_);
                                        return [4 /*yield*/, this.retrieve(orderEditId)];
                                    case 1:
                                        orderEdit = _b.sent();
                                        if ([models_1.OrderEditStatus.CANCELED, models_1.OrderEditStatus.DECLINED].includes(orderEdit.status)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot confirm an order edit with status ".concat(orderEdit.status));
                                        }
                                        if (orderEdit.status === models_1.OrderEditStatus.CONFIRMED) {
                                            return [2 /*return*/, orderEdit];
                                        }
                                        lineItemServiceTx = this.lineItemService_.withTransaction(manager);
                                        return [4 /*yield*/, (0, utils_2.promiseAll)([
                                                lineItemServiceTx.update([
                                                    { order_id: orderEdit.order_id, order_edit_id: (0, typeorm_1.Not)(orderEditId) },
                                                    { order_id: orderEdit.order_id, order_edit_id: (0, typeorm_1.IsNull)() },
                                                ], { order_id: null }),
                                                lineItemServiceTx.update({ order_edit_id: orderEditId }, { order_id: orderEdit.order_id }),
                                            ])];
                                    case 2:
                                        _a = __read.apply(void 0, [_b.sent(), 1]), originalOrderLineItems = _a[0];
                                        orderEdit.confirmed_at = new Date();
                                        orderEdit.confirmed_by = context.confirmedBy;
                                        return [4 /*yield*/, orderEditRepository.save(orderEdit)];
                                    case 3:
                                        orderEdit = _b.sent();
                                        if (!this.inventoryService_) return [3 /*break*/, 5];
                                        itemsIds = originalOrderLineItems.map(function (i) { return i.id; });
                                        return [4 /*yield*/, this.inventoryService_.deleteReservationItemsByLineItem(itemsIds, {
                                                transactionManager: manager,
                                            })];
                                    case 4:
                                        _b.sent();
                                        _b.label = 5;
                                    case 5: return [4 /*yield*/, this.eventBusService_
                                            .withTransaction(manager)
                                            .emit(OrderEditService.Events.CONFIRMED, { id: orderEditId })];
                                    case 6:
                                        _b.sent();
                                        return [2 /*return*/, orderEdit];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderEditService.prototype.retrieveActive = function (orderId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var orderEditRepository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderEditRepository = this.activeManager_.withRepository(this.orderEditRepository_);
                        query = (0, utils_1.buildQuery)({
                            order_id: orderId,
                            confirmed_at: (0, typeorm_1.IsNull)(),
                            canceled_at: (0, typeorm_1.IsNull)(),
                            declined_at: (0, typeorm_1.IsNull)(),
                        }, config);
                        return [4 /*yield*/, orderEditRepository.findOne(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderEditService.prototype.deleteClonedItems = function (orderEditId) {
        return __awaiter(this, void 0, void 0, function () {
            var lineItemServiceTx, lineItemAdjustmentServiceTx, taxProviderServiceTs, clonedLineItems, clonedItemIds, orderEdit;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lineItemServiceTx = this.lineItemService_.withTransaction(this.activeManager_);
                        lineItemAdjustmentServiceTx = this.lineItemAdjustmentService_.withTransaction(this.activeManager_);
                        taxProviderServiceTs = this.taxProviderService_.withTransaction(this.activeManager_);
                        return [4 /*yield*/, lineItemServiceTx.list({
                                order_edit_id: orderEditId,
                            }, {
                                select: ["id", "tax_lines", "adjustments"],
                                relations: ["tax_lines", "adjustments"],
                            })];
                    case 1:
                        clonedLineItems = _a.sent();
                        clonedItemIds = clonedLineItems.map(function (item) { return item.id; });
                        return [4 /*yield*/, this.retrieve(orderEditId, {
                                select: ["id", "changes"],
                                relations: [
                                    "changes",
                                    "changes.original_line_item",
                                    "changes.original_line_item.variant",
                                ],
                            })];
                    case 2:
                        orderEdit = _a.sent();
                        return [4 /*yield*/, this.orderEditItemChangeService_.delete(orderEdit.changes.map(function (change) { return change.id; }))];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, (0, utils_2.promiseAll)([
                                taxProviderServiceTs.clearLineItemsTaxLines(clonedItemIds),
                                clonedItemIds.map(function (id) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, lineItemAdjustmentServiceTx.delete({
                                                    item_id: id,
                                                })];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    });
                                }); }),
                            ].flat())];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, (0, utils_2.promiseAll)(clonedItemIds.map(function (id) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, lineItemServiceTx.delete(id)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }))];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderEditService.isOrderEditActive = function (orderEdit) {
        return !(orderEdit.status === models_1.OrderEditStatus.CONFIRMED ||
            orderEdit.status === models_1.OrderEditStatus.CANCELED ||
            orderEdit.status === models_1.OrderEditStatus.DECLINED);
    };
    OrderEditService.Events = {
        CREATED: "order-edit.created",
        UPDATED: "order-edit.updated",
        DECLINED: "order-edit.declined",
        REQUESTED: "order-edit.requested",
        CANCELED: "order-edit.canceled",
        CONFIRMED: "order-edit.confirmed",
    };
    return OrderEditService;
}(interfaces_1.TransactionBaseService));
exports.default = OrderEditService;
//# sourceMappingURL=order-edit.js.map