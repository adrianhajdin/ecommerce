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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var PaymentService = /** @class */ (function (_super) {
    __extends(PaymentService, _super);
    function PaymentService(_a) {
        var paymentRepository = _a.paymentRepository, paymentProviderService = _a.paymentProviderService, eventBusService = _a.eventBusService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.paymentRepository_ = paymentRepository;
        _this.paymentProviderService_ = paymentProviderService;
        _this.eventBusService_ = eventBusService;
        return _this;
    }
    /**
     * Retrieves a payment by id.
     * @param paymentId - the id of the payment
     * @param config - the config to retrieve the payment
     * @return the payment.
     */
    PaymentService.prototype.retrieve = function (paymentId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var paymentRepository, query, payment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(paymentId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"paymentId\" must be defined");
                        }
                        paymentRepository = this.activeManager_.withRepository(this.paymentRepository_);
                        query = (0, utils_1.buildQuery)({ id: paymentId }, config);
                        return [4 /*yield*/, paymentRepository.find(query)];
                    case 1:
                        payment = _a.sent();
                        if (!payment.length) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Payment with id ".concat(paymentId, " was not found"));
                        }
                        return [2 /*return*/, payment[0]];
                }
            });
        });
    };
    /**
     * Created a new payment.
     * @param paymentInput - info to create the payment
     * @return the payment created.
     */
    PaymentService.prototype.create = function (paymentInput) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var data, currency_code, amount, provider_id, paymentRepository, created, saved;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = paymentInput.data, currency_code = paymentInput.currency_code, amount = paymentInput.amount, provider_id = paymentInput.provider_id;
                                        paymentRepository = manager.withRepository(this.paymentRepository_);
                                        created = paymentRepository.create({
                                            provider_id: provider_id,
                                            amount: amount,
                                            currency_code: currency_code,
                                            data: data,
                                        });
                                        return [4 /*yield*/, paymentRepository.save(created)];
                                    case 1:
                                        saved = _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(PaymentService.Events.CREATED, saved)];
                                    case 2:
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
    /**
     * Updates a payment in order to link it to an order or a swap.
     * @param paymentId - the id of the payment
     * @param data - order_id or swap_id to link the payment
     * @return the payment updated.
     */
    PaymentService.prototype.update = function (paymentId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var payment, paymentRepository, updated;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(paymentId)];
                                    case 1:
                                        payment = _a.sent();
                                        paymentRepository = manager.withRepository(this.paymentRepository_);
                                        if (data === null || data === void 0 ? void 0 : data.order_id) {
                                            payment.order_id = data.order_id;
                                        }
                                        if (data === null || data === void 0 ? void 0 : data.swap_id) {
                                            payment.swap_id = data.swap_id;
                                        }
                                        return [4 /*yield*/, paymentRepository.save(payment)];
                                    case 2:
                                        updated = _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(PaymentService.Events.UPDATED, updated)];
                                    case 3:
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
     * Captures a payment.
     * @param paymentOrId - the id or the class instance of the payment
     * @return the payment captured.
     */
    PaymentService.prototype.capture = function (paymentOrId) {
        return __awaiter(this, void 0, void 0, function () {
            var payment, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(typeof paymentOrId === "string")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.retrieve(paymentOrId)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = paymentOrId;
                        _b.label = 3;
                    case 3:
                        payment = _a;
                        if (payment === null || payment === void 0 ? void 0 : payment.captured_at) {
                            return [2 /*return*/, payment];
                        }
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var captureError, capturedPayment;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            captureError = null;
                                            return [4 /*yield*/, this.paymentProviderService_
                                                    .withTransaction(manager)
                                                    .capturePayment(payment)
                                                    .catch(function (err) {
                                                    captureError = err;
                                                })];
                                        case 1:
                                            capturedPayment = _a.sent();
                                            if (!!capturedPayment) return [3 /*break*/, 3];
                                            return [4 /*yield*/, this.eventBusService_
                                                    .withTransaction(manager)
                                                    .emit(PaymentService.Events.PAYMENT_CAPTURE_FAILED, __assign(__assign({}, payment), { error: captureError }))];
                                        case 2:
                                            _a.sent();
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Failed to capture Payment ".concat(payment.id));
                                        case 3: return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(PaymentService.Events.PAYMENT_CAPTURED, capturedPayment)];
                                        case 4:
                                            _a.sent();
                                            return [2 /*return*/, capturedPayment];
                                    }
                                });
                            }); })];
                    case 4: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /**
     * refunds a payment.
     * @param paymentOrId - the id or the class instance of the payment
     * @param amount - the amount to be refunded from the payment
     * @param reason - the refund reason
     * @param note - additional note of the refund
     * @return the refund created.
     */
    PaymentService.prototype.refund = function (paymentOrId, amount, reason, note) {
        return __awaiter(this, void 0, void 0, function () {
            var payment, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(typeof paymentOrId === "string")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.retrieve(paymentOrId)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = paymentOrId;
                        _b.label = 3;
                    case 3:
                        payment = _a;
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var refundable, refundError, refund;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!payment.captured_at) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Payment ".concat(payment.id, " is not captured"));
                                            }
                                            refundable = payment.amount - payment.amount_refunded;
                                            if (amount > refundable) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Only ".concat(refundable, " can be refunded from Payment ").concat(payment.id));
                                            }
                                            refundError = null;
                                            return [4 /*yield*/, this.paymentProviderService_
                                                    .withTransaction(manager)
                                                    .refundFromPayment(payment, amount, reason, note)
                                                    .catch(function (err) {
                                                    refundError = err;
                                                })];
                                        case 1:
                                            refund = _a.sent();
                                            if (!!refund) return [3 /*break*/, 3];
                                            return [4 /*yield*/, this.eventBusService_
                                                    .withTransaction(manager)
                                                    .emit(PaymentService.Events.REFUND_FAILED, __assign(__assign({}, payment), { error: refundError }))];
                                        case 2:
                                            _a.sent();
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Failed to refund Payment ".concat(payment.id));
                                        case 3: return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(PaymentService.Events.REFUND_CREATED, refund)];
                                        case 4:
                                            _a.sent();
                                            return [2 /*return*/, refund];
                                    }
                                });
                            }); })];
                    case 4: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    PaymentService.Events = {
        CREATED: "payment.created",
        UPDATED: "payment.updated",
        PAYMENT_CAPTURED: "payment.payment_captured",
        PAYMENT_CAPTURE_FAILED: "payment.payment_capture_failed",
        REFUND_CREATED: "payment.payment_refund_created",
        REFUND_FAILED: "payment.payment_refund_failed",
    };
    return PaymentService;
}(interfaces_1.TransactionBaseService));
exports.default = PaymentService;
//# sourceMappingURL=payment.js.map