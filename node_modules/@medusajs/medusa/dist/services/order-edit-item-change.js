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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var utils_2 = require("@medusajs/utils");
var OrderEditItemChangeService = /** @class */ (function (_super) {
    __extends(OrderEditItemChangeService, _super);
    function OrderEditItemChangeService(_a) {
        var orderItemChangeRepository = _a.orderItemChangeRepository, eventBusService = _a.eventBusService, lineItemService = _a.lineItemService, taxProviderService = _a.taxProviderService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.orderItemChangeRepository_ = orderItemChangeRepository;
        _this.eventBus_ = eventBusService;
        _this.lineItemService_ = lineItemService;
        _this.taxProviderService_ = taxProviderService;
        return _this;
    }
    OrderEditItemChangeService.prototype.retrieve = function (id, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var orderItemChangeRepo, query, itemChange;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderItemChangeRepo = this.activeManager_.withRepository(this.orderItemChangeRepository_);
                        query = (0, utils_1.buildQuery)({ id: id }, config);
                        return [4 /*yield*/, orderItemChangeRepo.findOne(query)];
                    case 1:
                        itemChange = _a.sent();
                        if (!itemChange) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Order edit item change ".concat(id, " was not found"));
                        }
                        return [2 /*return*/, itemChange];
                }
            });
        });
    };
    OrderEditItemChangeService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var orderItemChangeRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderItemChangeRepo = this.activeManager_.withRepository(this.orderItemChangeRepository_);
                        query = (0, utils_1.buildQuery)(selector, config);
                        return [4 /*yield*/, orderItemChangeRepo.find(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderEditItemChangeService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var orderItemChangeRepo, changeEntity, change;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        orderItemChangeRepo = manager.withRepository(this.orderItemChangeRepository_);
                                        changeEntity = orderItemChangeRepo.create(data);
                                        return [4 /*yield*/, orderItemChangeRepo.save(changeEntity)];
                                    case 1:
                                        change = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(OrderEditItemChangeService.Events.CREATED, { id: change.id })];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/, change];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    OrderEditItemChangeService.prototype.delete = function (itemChangeIds) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemChangeIds = Array.isArray(itemChangeIds)
                            ? itemChangeIds
                            : [itemChangeIds];
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var orderItemChangeRepo, changes, lineItemIdsToRemove, lineItemServiceTx;
                                var _this = this;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            orderItemChangeRepo = manager.withRepository(this.orderItemChangeRepository_);
                                            return [4 /*yield*/, orderItemChangeRepo.find({
                                                    where: {
                                                        id: (0, typeorm_1.In)(itemChangeIds),
                                                    },
                                                })];
                                        case 1:
                                            changes = _a.sent();
                                            lineItemIdsToRemove = changes
                                                .map(function (change) {
                                                return change.line_item_id;
                                            })
                                                .filter(Boolean);
                                            return [4 /*yield*/, orderItemChangeRepo.delete({ id: (0, typeorm_1.In)(itemChangeIds) })];
                                        case 2:
                                            _a.sent();
                                            lineItemServiceTx = this.lineItemService_.withTransaction(manager);
                                            return [4 /*yield*/, (0, utils_2.promiseAll)(__spreadArray(__spreadArray([], __read(lineItemIdsToRemove.map(function (id) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, lineItemServiceTx.delete(id)];
                                                        case 1: return [2 /*return*/, _a.sent()];
                                                    }
                                                }); }); })), false), [
                                                    this.taxProviderService_
                                                        .withTransaction(manager)
                                                        .clearLineItemsTaxLines(lineItemIdsToRemove),
                                                ], false))];
                                        case 3:
                                            _a.sent();
                                            return [4 /*yield*/, this.eventBus_
                                                    .withTransaction(manager)
                                                    .emit(OrderEditItemChangeService.Events.DELETED, { ids: itemChangeIds })];
                                        case 4:
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
    OrderEditItemChangeService.Events = {
        CREATED: "order-edit-item-change.CREATED",
        DELETED: "order-edit-item-change.DELETED",
    };
    return OrderEditItemChangeService;
}(interfaces_1.TransactionBaseService));
exports.default = OrderEditItemChangeService;
//# sourceMappingURL=order-edit-item-change.js.map