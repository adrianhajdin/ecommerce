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
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("@medusajs/utils");
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
var utils_2 = require("../utils");
/**
 * Handles Fulfillments
 */
var FulfillmentService = /** @class */ (function (_super) {
    __extends(FulfillmentService, _super);
    function FulfillmentService(_a) {
        var totalsService = _a.totalsService, fulfillmentRepository = _a.fulfillmentRepository, trackingLinkRepository = _a.trackingLinkRepository, shippingProfileService = _a.shippingProfileService, lineItemService = _a.lineItemService, fulfillmentProviderService = _a.fulfillmentProviderService, lineItemRepository = _a.lineItemRepository, productVariantInventoryService = _a.productVariantInventoryService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.lineItemRepository_ = lineItemRepository;
        _this.totalsService_ = totalsService;
        _this.fulfillmentRepository_ = fulfillmentRepository;
        _this.trackingLinkRepository_ = trackingLinkRepository;
        _this.shippingProfileService_ = shippingProfileService;
        _this.lineItemService_ = lineItemService;
        _this.fulfillmentProviderService_ = fulfillmentProviderService;
        _this.productVariantInventoryService_ = productVariantInventoryService;
        return _this;
    }
    FulfillmentService.prototype.partitionItems_ = function (shippingMethods, items) {
        var e_1, _a;
        var partitioned = [];
        if (shippingMethods.length === 1) {
            return [{ items: items, shipping_method: shippingMethods[0] }];
        }
        var _loop_1 = function (method) {
            var temp = {
                shipping_method: method,
                items: [],
            };
            // for each method find the items in the order, that are associated
            // with the profile on the current shipping method
            var methodProfile = method.shipping_option.profile_id;
            temp.items = items.filter(function (_a) {
                var variant = _a.variant;
                return variant.product.profile_id === methodProfile;
            });
            partitioned.push(temp);
        };
        try {
            // partition order items to their dedicated shipping method
            for (var shippingMethods_1 = __values(shippingMethods), shippingMethods_1_1 = shippingMethods_1.next(); !shippingMethods_1_1.done; shippingMethods_1_1 = shippingMethods_1.next()) {
                var method = shippingMethods_1_1.value;
                _loop_1(method);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (shippingMethods_1_1 && !shippingMethods_1_1.done && (_a = shippingMethods_1.return)) _a.call(shippingMethods_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return partitioned;
    };
    /**
     * Retrieves the order line items, given an array of items.
     * @param order - the order to get line items from
     * @param items - the items to get
     * @return the line items generated by the transformer.
     */
    FulfillmentService.prototype.getFulfillmentItems_ = function (order, items) {
        return __awaiter(this, void 0, void 0, function () {
            var toReturn;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, utils_1.promiseAll)(items.map(function (_a) {
                            var item_id = _a.item_id, quantity = _a.quantity;
                            return __awaiter(_this, void 0, void 0, function () {
                                var item;
                                return __generator(this, function (_b) {
                                    item = order.items.find(function (i) { return i.id === item_id; });
                                    return [2 /*return*/, this.validateFulfillmentLineItem_(item, quantity)];
                                });
                            });
                        }))];
                    case 1:
                        toReturn = _a.sent();
                        return [2 /*return*/, toReturn.filter(function (i) { return !!i; })];
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
    FulfillmentService.prototype.validateFulfillmentLineItem_ = function (item, quantity) {
        var lineItemRepo = this.activeManager_.withRepository(this.lineItemRepository_);
        if (!item) {
            // This will in most cases be called by a webhook so to ensure that
            // things go through smoothly in instances where extra items outside
            // of Medusa are added we allow unknown items
            return null;
        }
        if (quantity > item.quantity - item.fulfilled_quantity) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot fulfill more items than have been purchased");
        }
        return lineItemRepo.create(__assign(__assign({}, item), { quantity: quantity }));
    };
    /**
     * Retrieves a fulfillment by its id.
     * @param fulfillmentId - the id of the fulfillment to retrieve
     * @param config - optional values to include with fulfillmentRepository query
     * @return the fulfillment
     */
    FulfillmentService.prototype.retrieve = function (fulfillmentId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var fulfillmentRepository, query, fulfillment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(fulfillmentId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"fulfillmentId\" must be defined");
                        }
                        fulfillmentRepository = this.activeManager_.withRepository(this.fulfillmentRepository_);
                        query = (0, utils_2.buildQuery)({ id: fulfillmentId }, config);
                        return [4 /*yield*/, fulfillmentRepository.findOne(query)];
                    case 1:
                        fulfillment = _a.sent();
                        if (!fulfillment) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Fulfillment with id: ".concat(fulfillmentId, " was not found"));
                        }
                        return [2 /*return*/, fulfillment];
                }
            });
        });
    };
    /**
     * Creates an order fulfillment
     * If items needs to be fulfilled by different provider, we make
     * sure to partition those items, and create fulfillment for
     * those partitions.
     * @param order - order to create fulfillment for
     * @param itemsToFulfill - the items in the order to fulfill
     * @param custom - potential custom values to add
     * @return the created fulfillments
     */
    FulfillmentService.prototype.createFulfillment = function (order, itemsToFulfill, custom) {
        if (custom === void 0) { custom = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var fulfillmentRepository, lineItems, shipping_methods, fulfillments, created;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        fulfillmentRepository = manager.withRepository(this.fulfillmentRepository_);
                                        return [4 /*yield*/, this.getFulfillmentItems_(order, itemsToFulfill)];
                                    case 1:
                                        lineItems = _a.sent();
                                        shipping_methods = order.shipping_methods;
                                        fulfillments = this.partitionItems_(shipping_methods, lineItems);
                                        return [4 /*yield*/, (0, utils_1.promiseAll)(fulfillments.map(function (_a) {
                                                var shipping_method = _a.shipping_method, items = _a.items;
                                                return __awaiter(_this, void 0, void 0, function () {
                                                    var ful, result, _b;
                                                    return __generator(this, function (_c) {
                                                        switch (_c.label) {
                                                            case 0:
                                                                ful = fulfillmentRepository.create(__assign(__assign({}, custom), { provider_id: shipping_method.shipping_option.provider_id, items: items.map(function (i) { return ({ item_id: i.id, quantity: i.quantity }); }), data: {} }));
                                                                return [4 /*yield*/, fulfillmentRepository.save(ful)];
                                                            case 1:
                                                                result = _c.sent();
                                                                _b = result;
                                                                return [4 /*yield*/, this.fulfillmentProviderService_.createFulfillment(shipping_method, items, __assign({}, order), __assign({}, result))];
                                                            case 2:
                                                                _b.data =
                                                                    _c.sent();
                                                                return [2 /*return*/, fulfillmentRepository.save(result)];
                                                        }
                                                    });
                                                });
                                            }))];
                                    case 2:
                                        created = _a.sent();
                                        return [2 /*return*/, created];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Cancels a fulfillment with the fulfillment provider. Will decrement the
     * fulfillment_quantity on the line items associated with the fulfillment.
     * Throws if the fulfillment has already been shipped.
     * @param fulfillmentOrId - the fulfillment object or id.
     * @return the result of the save operation
     *
     */
    FulfillmentService.prototype.cancelFulfillment = function (fulfillmentOrId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var id, fulfillment, lineItemServiceTx, fulfillmentRepo, canceled;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        id = typeof fulfillmentOrId === "string"
                                            ? fulfillmentOrId
                                            : fulfillmentOrId.id;
                                        return [4 /*yield*/, this.retrieve(id, {
                                                relations: ["items", "claim_order", "swap"],
                                            })];
                                    case 1:
                                        fulfillment = _a.sent();
                                        if (fulfillment.shipped_at) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "The fulfillment has already been shipped. Shipped fulfillments cannot be canceled");
                                        }
                                        return [4 /*yield*/, this.fulfillmentProviderService_.cancelFulfillment(fulfillment)];
                                    case 2:
                                        _a.sent();
                                        fulfillment.canceled_at = new Date();
                                        lineItemServiceTx = this.lineItemService_.withTransaction(manager);
                                        return [4 /*yield*/, (0, utils_1.promiseAll)(fulfillment.items.map(function (fItem) { return __awaiter(_this, void 0, void 0, function () {
                                                var item, fulfilledQuantity;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, lineItemServiceTx.retrieve(fItem.item_id)];
                                                        case 1:
                                                            item = _a.sent();
                                                            fulfilledQuantity = item.fulfilled_quantity - fItem.quantity;
                                                            return [4 /*yield*/, lineItemServiceTx.update(item.id, {
                                                                    fulfilled_quantity: fulfilledQuantity,
                                                                })];
                                                        case 2:
                                                            _a.sent();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); }))];
                                    case 3:
                                        _a.sent();
                                        fulfillmentRepo = manager.withRepository(this.fulfillmentRepository_);
                                        return [4 /*yield*/, fulfillmentRepo.save(fulfillment)];
                                    case 4:
                                        canceled = _a.sent();
                                        return [2 /*return*/, canceled];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates a shipment by marking a fulfillment as shipped. Adds
     * tracking links and potentially more metadata.
     * @param fulfillmentId - the fulfillment to ship
     * @param trackingLinks - tracking links for the shipment
     * @param config - potential configuration settings, such as no_notification and metadata
     * @return  the shipped fulfillment
     */
    FulfillmentService.prototype.createShipment = function (fulfillmentId, trackingLinks, config) {
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
                                var fulfillmentRepository, trackingLinkRepo, fulfillment, now;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            fulfillmentRepository = manager.withRepository(this.fulfillmentRepository_);
                                            trackingLinkRepo = manager.withRepository(this.trackingLinkRepository_);
                                            return [4 /*yield*/, this.retrieve(fulfillmentId, {
                                                    relations: ["items"],
                                                })];
                                        case 1:
                                            fulfillment = _a.sent();
                                            if (fulfillment.canceled_at) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Fulfillment has been canceled");
                                            }
                                            now = new Date();
                                            fulfillment.shipped_at = now;
                                            fulfillment.tracking_links = (trackingLinks || []).map(function (tl) {
                                                return trackingLinkRepo.create(tl);
                                            });
                                            if ((0, medusa_core_utils_1.isDefined)(no_notification)) {
                                                fulfillment.no_notification = no_notification;
                                            }
                                            fulfillment.metadata = __assign(__assign({}, fulfillment.metadata), metadata);
                                            return [4 /*yield*/, fulfillmentRepository.save(fulfillment)];
                                        case 2: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return FulfillmentService;
}(interfaces_1.TransactionBaseService));
exports.default = FulfillmentService;
//# sourceMappingURL=fulfillment.js.map