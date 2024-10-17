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
var medusa_core_utils_1 = require("medusa-core-utils");
var models_1 = require("../models");
var utils_1 = require("../utils");
var interfaces_1 = require("../interfaces");
var utils_2 = require("@medusajs/utils");
var PaymentCollectionService = /** @class */ (function (_super) {
    __extends(PaymentCollectionService, _super);
    function PaymentCollectionService(_a) {
        var paymentCollectionRepository = _a.paymentCollectionRepository, paymentProviderService = _a.paymentProviderService, customerService = _a.customerService, eventBusService = _a.eventBusService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.paymentCollectionRepository_ = paymentCollectionRepository;
        _this.paymentProviderService_ = paymentProviderService;
        _this.eventBusService_ = eventBusService;
        _this.customerService_ = customerService;
        return _this;
    }
    /**
     * Retrieves a payment collection by id.
     * @param paymentCollectionId - the id of the payment collection
     * @param config - the config to retrieve the payment collection
     * @return the payment collection.
     */
    PaymentCollectionService.prototype.retrieve = function (paymentCollectionId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var paymentCollectionRepository, paymentCollection, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(paymentCollectionId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"paymentCollectionId\" must be defined");
                        }
                        paymentCollectionRepository = this.activeManager_.withRepository(this.paymentCollectionRepository_);
                        paymentCollection = [];
                        if (!paymentCollectionId) return [3 /*break*/, 2];
                        query = (0, utils_1.buildQuery)({ id: paymentCollectionId }, config);
                        return [4 /*yield*/, paymentCollectionRepository.find(query)];
                    case 1:
                        paymentCollection = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!paymentCollection.length) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Payment collection with id ".concat(paymentCollectionId, " was not found"));
                        }
                        return [2 /*return*/, paymentCollection[0]];
                }
            });
        });
    };
    /**
     * Creates a new payment collection.
     * @param data - info to create the payment collection
     * @return the payment collection created.
     */
    PaymentCollectionService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var paymentCollectionRepository, paymentCollectionToCreate, paymentCollection;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        paymentCollectionRepository = manager.withRepository(this.paymentCollectionRepository_);
                                        paymentCollectionToCreate = paymentCollectionRepository.create({
                                            region_id: data.region_id,
                                            type: data.type,
                                            status: models_1.PaymentCollectionStatus.NOT_PAID,
                                            currency_code: data.currency_code,
                                            amount: data.amount,
                                            metadata: data.metadata,
                                            created_by: data.created_by,
                                            description: data.description,
                                        });
                                        return [4 /*yield*/, paymentCollectionRepository.save(paymentCollectionToCreate)];
                                    case 1:
                                        paymentCollection = _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(PaymentCollectionService.Events.CREATED, paymentCollection)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/, paymentCollection];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a payment collection.
     * @param paymentCollectionId - the id of the payment collection to update
     * @param data - info to be updated
     * @return the payment collection updated.
     */
    PaymentCollectionService.prototype.update = function (paymentCollectionId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var paymentCollectionRepo, paymentCollection, _a, _b, key, result;
                            var e_1, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        paymentCollectionRepo = manager.withRepository(this.paymentCollectionRepository_);
                                        return [4 /*yield*/, this.retrieve(paymentCollectionId)];
                                    case 1:
                                        paymentCollection = _d.sent();
                                        try {
                                            for (_a = __values(Object.keys(data)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                key = _b.value;
                                                if (key === "metadata" && data.metadata) {
                                                    paymentCollection[key] = (0, utils_1.setMetadata)(paymentCollection, data.metadata);
                                                }
                                                else if ((0, medusa_core_utils_1.isDefined)(data[key])) {
                                                    paymentCollection[key] = data[key];
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
                                        return [4 /*yield*/, paymentCollectionRepo.save(paymentCollection)];
                                    case 2:
                                        result = _d.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(PaymentCollectionService.Events.UPDATED, result)];
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
    /**
     * Deletes a payment collection.
     * @param paymentCollectionId - the id of the payment collection to be removed
     * @return the payment collection removed.
     */
    PaymentCollectionService.prototype.delete = function (paymentCollectionId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var paymentCollectionRepo, paymentCollection;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        paymentCollectionRepo = manager.withRepository(this.paymentCollectionRepository_);
                                        return [4 /*yield*/, this.retrieve(paymentCollectionId).catch(function () { return void 0; })];
                                    case 1:
                                        paymentCollection = _a.sent();
                                        if (!paymentCollection) {
                                            return [2 /*return*/];
                                        }
                                        if (![
                                            models_1.PaymentCollectionStatus.CANCELED,
                                            models_1.PaymentCollectionStatus.NOT_PAID,
                                        ].includes(paymentCollection.status)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot delete payment collection with status ".concat(paymentCollection.status));
                                        }
                                        return [4 /*yield*/, paymentCollectionRepo.remove(paymentCollection)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(PaymentCollectionService.Events.DELETED, paymentCollection)];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/, paymentCollection];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentCollectionService.prototype.isValidTotalAmount = function (total, sessionsInput) {
        var sum = sessionsInput.reduce(function (cur, sess) { return cur + sess.amount; }, 0);
        return total === sum;
    };
    /**
     * Manages multiple payment sessions of a payment collection.
     * @param paymentCollectionOrId - the id of the payment collection
     * @param sessionsInput - array containing payment session info
     * @param customerId - the id of the customer
     * @return the payment collection and its payment sessions.
     */
    PaymentCollectionService.prototype.setPaymentSessionsBatch = function (paymentCollectionOrId, sessionsInput, customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var paymentCollectionRepository, payCol, _a, payColRegionProviderMap, customer, _b, payColSessionMap, paymentProviderTx, selectedSessionIds, paymentSessions, sessionsInput_1, sessionsInput_1_1, session, existingSession, inputData, paymentSession, e_2_1, removeSessions, paymentProviderTx_1;
                            var e_2, _c;
                            var _this = this;
                            var _d, _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        paymentCollectionRepository = manager.withRepository(this.paymentCollectionRepository_);
                                        if (!(0, utils_1.isString)(paymentCollectionOrId)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.retrieve(paymentCollectionOrId, {
                                                relations: [
                                                    "region",
                                                    "region.payment_providers",
                                                    "payment_sessions",
                                                ],
                                            })];
                                    case 1:
                                        _a = _f.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        _a = paymentCollectionOrId;
                                        _f.label = 3;
                                    case 3:
                                        payCol = _a;
                                        if (payCol.status !== models_1.PaymentCollectionStatus.NOT_PAID) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot set payment sessions for a payment collection with status ".concat(payCol.status));
                                        }
                                        payColRegionProviderMap = new Map(payCol.region.payment_providers.map(function (provider) {
                                            return [provider.id, provider];
                                        }));
                                        sessionsInput = sessionsInput.filter(function (session) {
                                            return !!payColRegionProviderMap.get(session.provider_id);
                                        });
                                        if (!this.isValidTotalAmount(payCol.amount, sessionsInput)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "The sum of sessions is not equal to ".concat(payCol.amount, " on Payment Collection"));
                                        }
                                        if (!!(0, medusa_core_utils_1.isDefined)(customerId)) return [3 /*break*/, 4];
                                        _b = null;
                                        return [3 /*break*/, 6];
                                    case 4: return [4 /*yield*/, this.customerService_
                                            .withTransaction(manager)
                                            .retrieve(customerId, {
                                            select: ["id", "email", "metadata"],
                                        })
                                            .catch(function () { return null; })];
                                    case 5:
                                        _b = _f.sent();
                                        _f.label = 6;
                                    case 6:
                                        customer = _b;
                                        payColSessionMap = new Map(((_d = payCol.payment_sessions) !== null && _d !== void 0 ? _d : []).map(function (session) {
                                            return [session.id, session];
                                        }));
                                        paymentProviderTx = this.paymentProviderService_.withTransaction(manager);
                                        selectedSessionIds = [];
                                        paymentSessions = [];
                                        _f.label = 7;
                                    case 7:
                                        _f.trys.push([7, 15, 16, 17]);
                                        sessionsInput_1 = __values(sessionsInput), sessionsInput_1_1 = sessionsInput_1.next();
                                        _f.label = 8;
                                    case 8:
                                        if (!!sessionsInput_1_1.done) return [3 /*break*/, 14];
                                        session = sessionsInput_1_1.value;
                                        existingSession = session.session_id && payColSessionMap.get(session.session_id);
                                        inputData = {
                                            cart: {
                                                email: (customer === null || customer === void 0 ? void 0 : customer.email) || "",
                                                context: {},
                                                shipping_methods: [],
                                                shipping_address: null,
                                                id: "",
                                                region_id: payCol.region_id,
                                                total: session.amount,
                                            },
                                            resource_id: payCol.id,
                                            currency_code: payCol.currency_code,
                                            amount: session.amount,
                                            provider_id: session.provider_id,
                                            customer: customer,
                                        };
                                        paymentSession = void 0;
                                        if (!existingSession) return [3 /*break*/, 10];
                                        return [4 /*yield*/, paymentProviderTx.updateSession(existingSession, inputData)];
                                    case 9:
                                        paymentSession = _f.sent();
                                        return [3 /*break*/, 12];
                                    case 10: return [4 /*yield*/, paymentProviderTx.createSession(inputData)];
                                    case 11:
                                        paymentSession = _f.sent();
                                        _f.label = 12;
                                    case 12:
                                        selectedSessionIds.push(paymentSession.id);
                                        paymentSessions.push(paymentSession);
                                        _f.label = 13;
                                    case 13:
                                        sessionsInput_1_1 = sessionsInput_1.next();
                                        return [3 /*break*/, 8];
                                    case 14: return [3 /*break*/, 17];
                                    case 15:
                                        e_2_1 = _f.sent();
                                        e_2 = { error: e_2_1 };
                                        return [3 /*break*/, 17];
                                    case 16:
                                        try {
                                            if (sessionsInput_1_1 && !sessionsInput_1_1.done && (_c = sessionsInput_1.return)) _c.call(sessionsInput_1);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                        return [7 /*endfinally*/];
                                    case 17:
                                        if (!((_e = payCol.payment_sessions) === null || _e === void 0 ? void 0 : _e.length)) return [3 /*break*/, 20];
                                        removeSessions = payCol.payment_sessions.filter(function (_a) {
                                            var id = _a.id;
                                            return !selectedSessionIds.includes(id);
                                        });
                                        if (!removeSessions.length) return [3 /*break*/, 20];
                                        return [4 /*yield*/, paymentCollectionRepository.delete(removeSessions.map(function (sess) { return sess.id; }))];
                                    case 18:
                                        _f.sent();
                                        paymentProviderTx_1 = this.paymentProviderService_.withTransaction(manager);
                                        return [4 /*yield*/, (0, utils_2.promiseAll)(removeSessions.map(function (sess) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                                return [2 /*return*/, paymentProviderTx_1.deleteSession(sess)];
                                            }); }); })).catch(function () { return void 0; })];
                                    case 19:
                                        _f.sent();
                                        _f.label = 20;
                                    case 20:
                                        payCol.payment_sessions = paymentSessions;
                                        return [4 /*yield*/, paymentCollectionRepository.save(payCol)];
                                    case 21: return [2 /*return*/, _f.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Manages a single payment sessions of a payment collection.
     * @param paymentCollectionId - the id of the payment collection
     * @param sessionInput - object containing payment session info
     * @param customerId - the id of the customer
     * @return the payment collection and its payment session.
     */
    PaymentCollectionService.prototype.setPaymentSession = function (paymentCollectionId, sessionInput, customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function () { return __awaiter(_this, void 0, void 0, function () {
                            var payCol, hasProvider, existingSession;
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(paymentCollectionId, {
                                            relations: ["region", "region.payment_providers", "payment_sessions"],
                                        })];
                                    case 1:
                                        payCol = _c.sent();
                                        hasProvider = (_a = payCol === null || payCol === void 0 ? void 0 : payCol.region) === null || _a === void 0 ? void 0 : _a.payment_providers.find(function (p) { return p.id === sessionInput.provider_id; });
                                        if (!hasProvider) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Payment provider not found");
                                        }
                                        existingSession = (_b = payCol.payment_sessions) === null || _b === void 0 ? void 0 : _b.find(function (sess) { return sessionInput.provider_id === (sess === null || sess === void 0 ? void 0 : sess.provider_id); });
                                        return [4 /*yield*/, this.setPaymentSessionsBatch(payCol, [
                                                __assign(__assign({}, sessionInput), { amount: payCol.amount, session_id: existingSession === null || existingSession === void 0 ? void 0 : existingSession.id }),
                                            ], customerId)];
                                    case 2: return [2 /*return*/, _c.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Removes and recreate a payment session of a payment collection.
     * @param paymentCollectionId - the id of the payment collection
     * @param sessionId - the id of the payment session to be replaced
     * @param customerId - the id of the customer
     * @return the new payment session created.
     */
    PaymentCollectionService.prototype.refreshPaymentSession = function (paymentCollectionId, sessionId, customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var paymentCollectionRepository, payCol, session, customer, _a, inputData, sessionRefreshed;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        paymentCollectionRepository = manager.withRepository(this.paymentCollectionRepository_);
                                        return [4 /*yield*/, paymentCollectionRepository.getPaymentCollectionIdBySessionId(sessionId, {
                                                relations: {
                                                    region: {
                                                        payment_providers: true,
                                                    },
                                                    payment_sessions: true,
                                                },
                                            })];
                                    case 1:
                                        payCol = _b.sent();
                                        if (paymentCollectionId !== payCol.id) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Payment Session ".concat(sessionId, " does not belong to Payment Collection ").concat(paymentCollectionId));
                                        }
                                        session = payCol.payment_sessions.find(function (sess) { return sessionId === (sess === null || sess === void 0 ? void 0 : sess.id); });
                                        if (!session) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Session with id ".concat(sessionId, " was not found"));
                                        }
                                        if (!!(0, medusa_core_utils_1.isDefined)(customerId)) return [3 /*break*/, 2];
                                        _a = null;
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, this.customerService_
                                            .withTransaction(manager)
                                            .retrieve(customerId, {
                                            select: ["id", "email", "metadata"],
                                        })
                                            .catch(function () { return null; })];
                                    case 3:
                                        _a = _b.sent();
                                        _b.label = 4;
                                    case 4:
                                        customer = _a;
                                        inputData = {
                                            cart: {
                                                email: (customer === null || customer === void 0 ? void 0 : customer.email) || "",
                                                context: {},
                                                shipping_methods: [],
                                                shipping_address: null,
                                                id: "",
                                                region_id: payCol.region_id,
                                                total: session.amount,
                                            },
                                            resource_id: payCol.id,
                                            currency_code: payCol.currency_code,
                                            amount: session.amount,
                                            provider_id: session.provider_id,
                                            customer: customer,
                                        };
                                        return [4 /*yield*/, this.paymentProviderService_
                                                .withTransaction(manager)
                                                .refreshSession(session, inputData)];
                                    case 5:
                                        sessionRefreshed = _b.sent();
                                        payCol.payment_sessions = payCol.payment_sessions.map(function (sess) {
                                            if (sess.id === sessionId) {
                                                return sessionRefreshed;
                                            }
                                            return sess;
                                        });
                                        if (session.payment_authorized_at && payCol.authorized_amount) {
                                            payCol.authorized_amount -= session.amount;
                                        }
                                        return [4 /*yield*/, paymentCollectionRepository.save(payCol)];
                                    case 6:
                                        _b.sent();
                                        return [2 /*return*/, sessionRefreshed];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Marks a payment collection as authorized bypassing the payment flow.
     * @param paymentCollectionId - the id of the payment collection
     * @return the payment session authorized.
     */
    PaymentCollectionService.prototype.markAsAuthorized = function (paymentCollectionId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var paymentCollectionRepo, paymentCollection, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        paymentCollectionRepo = manager.withRepository(this.paymentCollectionRepository_);
                                        return [4 /*yield*/, this.retrieve(paymentCollectionId)];
                                    case 1:
                                        paymentCollection = _a.sent();
                                        paymentCollection.status = models_1.PaymentCollectionStatus.AUTHORIZED;
                                        paymentCollection.authorized_amount = paymentCollection.amount;
                                        return [4 /*yield*/, paymentCollectionRepo.save(paymentCollection)];
                                    case 2:
                                        result = _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(PaymentCollectionService.Events.PAYMENT_AUTHORIZED, result)];
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
     * Authorizes the payment sessions of a payment collection.
     * @param paymentCollectionId - the id of the payment collection
     * @param sessionIds - array of payment session ids to be authorized
     * @param context - additional data required by payment providers
     * @return the payment collection and its payment session.
     */
    PaymentCollectionService.prototype.authorizePaymentSessions = function (paymentCollectionId, sessionIds, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var paymentCollectionRepository, payCol, paymentProviderTx, authorizedAmount, i, session, paymentSession, inputData, _a, _b, payColCopy;
                            var _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        paymentCollectionRepository = manager.withRepository(this.paymentCollectionRepository_);
                                        return [4 /*yield*/, this.retrieve(paymentCollectionId, {
                                                relations: ["payment_sessions", "payments"],
                                            })];
                                    case 1:
                                        payCol = _d.sent();
                                        if (payCol.authorized_amount === payCol.amount) {
                                            return [2 /*return*/, payCol];
                                        }
                                        if (!(payCol.amount <= 0)) return [3 /*break*/, 3];
                                        payCol.authorized_amount = 0;
                                        payCol.status = models_1.PaymentCollectionStatus.AUTHORIZED;
                                        return [4 /*yield*/, paymentCollectionRepository.save(payCol)];
                                    case 2: return [2 /*return*/, _d.sent()];
                                    case 3:
                                        if (!((_c = payCol.payment_sessions) === null || _c === void 0 ? void 0 : _c.length)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "You cannot complete a Payment Collection without a payment session.");
                                        }
                                        paymentProviderTx = this.paymentProviderService_.withTransaction(manager);
                                        authorizedAmount = 0;
                                        i = 0;
                                        _d.label = 4;
                                    case 4:
                                        if (!(i < payCol.payment_sessions.length)) return [3 /*break*/, 8];
                                        session = payCol.payment_sessions[i];
                                        if (session.payment_authorized_at) {
                                            authorizedAmount += session.amount;
                                            return [3 /*break*/, 7];
                                        }
                                        if (!sessionIds.includes(session.id)) {
                                            return [3 /*break*/, 7];
                                        }
                                        return [4 /*yield*/, paymentProviderTx.authorizePayment(session, context)];
                                    case 5:
                                        paymentSession = _d.sent();
                                        if (paymentSession) {
                                            payCol.payment_sessions[i] = paymentSession;
                                        }
                                        if (!((paymentSession === null || paymentSession === void 0 ? void 0 : paymentSession.status) === models_1.PaymentSessionStatus.AUTHORIZED)) return [3 /*break*/, 7];
                                        authorizedAmount += session.amount;
                                        inputData = {
                                            amount: session.amount,
                                            currency_code: payCol.currency_code,
                                            provider_id: session.provider_id,
                                            resource_id: payCol.id,
                                            payment_session: paymentSession,
                                        };
                                        _b = (_a = payCol.payments).push;
                                        return [4 /*yield*/, paymentProviderTx.createPayment(inputData)];
                                    case 6:
                                        _b.apply(_a, [_d.sent()]);
                                        _d.label = 7;
                                    case 7:
                                        i++;
                                        return [3 /*break*/, 4];
                                    case 8:
                                        if (authorizedAmount === 0) {
                                            payCol.status = models_1.PaymentCollectionStatus.AWAITING;
                                        }
                                        else if (authorizedAmount < payCol.amount) {
                                            payCol.status = models_1.PaymentCollectionStatus.PARTIALLY_AUTHORIZED;
                                        }
                                        else if (authorizedAmount === payCol.amount) {
                                            payCol.status = models_1.PaymentCollectionStatus.AUTHORIZED;
                                        }
                                        payCol.authorized_amount = authorizedAmount;
                                        return [4 /*yield*/, paymentCollectionRepository.save(payCol)];
                                    case 9:
                                        payColCopy = _d.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(PaymentCollectionService.Events.PAYMENT_AUTHORIZED, payColCopy)];
                                    case 10:
                                        _d.sent();
                                        return [2 /*return*/, payCol];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentCollectionService.Events = {
        CREATED: "payment-collection.created",
        UPDATED: "payment-collection.updated",
        DELETED: "payment-collection.deleted",
        PAYMENT_AUTHORIZED: "payment-collection.payment_authorized",
    };
    return PaymentCollectionService;
}(interfaces_1.TransactionBaseService));
exports.default = PaymentCollectionService;
//# sourceMappingURL=payment-collection.js.map