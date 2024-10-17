"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setVariantAvailability = exports.setPaymentSessions = exports.addOrUpdateLineItem = exports.CreateLineItemSteps = void 0;
var sales_channels_1 = __importDefault(require("../../../../../../loaders/feature-flags/sales-channels"));
var feature_flags_1 = require("../../../../../../loaders/feature-flags");
exports.CreateLineItemSteps = {
    STARTED: "started",
    SET_PAYMENT_SESSIONS: "set-payment-sessions",
    FINISHED: "finished",
};
function addOrUpdateLineItem(_a) {
    var cartId = _a.cartId, container = _a.container, manager = _a.manager, data = _a.data;
    return __awaiter(this, void 0, void 0, function () {
        var cartService, lineItemService, cart, line;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    cartService = container.resolve("cartService");
                    lineItemService = container.resolve("lineItemService");
                    return [4 /*yield*/, cartService.retrieve(cartId, {
                            select: ["id", "region_id", "customer_id"],
                        })];
                case 1:
                    cart = _b.sent();
                    return [4 /*yield*/, lineItemService
                            .withTransaction(manager)
                            .generate(data.variant_id, cart.region_id, data.quantity, {
                            customer_id: data.customer_id || cart.customer_id,
                            metadata: data.metadata,
                        })];
                case 2:
                    line = _b.sent();
                    return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var txCartService;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        txCartService = cartService.withTransaction(transactionManager);
                                        return [4 /*yield*/, txCartService.addOrUpdateLineItems(cart.id, line, {
                                                validateSalesChannels: feature_flags_1.featureFlagRouter.isFeatureEnabled("sales_channels"),
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.addOrUpdateLineItem = addOrUpdateLineItem;
function setPaymentSessions(_a) {
    var _b;
    var cart = _a.cart, container = _a.container, manager = _a.manager;
    return __awaiter(this, void 0, void 0, function () {
        var cartService, txCartService;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    cartService = container.resolve("cartService");
                    txCartService = cartService.withTransaction(manager);
                    if (!((_b = cart.payment_sessions) === null || _b === void 0 ? void 0 : _b.length)) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, txCartService.setPaymentSessions(cart)];
                case 1: return [2 /*return*/, _c.sent()];
            }
        });
    });
}
exports.setPaymentSessions = setPaymentSessions;
function setVariantAvailability(_a) {
    var _b;
    var cart = _a.cart, container = _a.container, manager = _a.manager;
    return __awaiter(this, void 0, void 0, function () {
        var productVariantInventoryService, shouldSetAvailability;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    productVariantInventoryService = container.resolve("productVariantInventoryService");
                    shouldSetAvailability = ((_b = cart.items) === null || _b === void 0 ? void 0 : _b.some(function (item) { return !!item.variant; })) &&
                        feature_flags_1.featureFlagRouter.isFeatureEnabled(sales_channels_1.default.key);
                    if (!shouldSetAvailability) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, productVariantInventoryService
                            .withTransaction(manager)
                            .setVariantAvailability(cart.items.map(function (i) { return i.variant; }), cart.sales_channel_id)];
                case 1: return [2 /*return*/, _c.sent()];
            }
        });
    });
}
exports.setVariantAvailability = setVariantAvailability;
//# sourceMappingURL=handler-steps.js.map