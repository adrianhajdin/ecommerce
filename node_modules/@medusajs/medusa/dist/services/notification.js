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
var medusa_core_utils_1 = require("medusa-core-utils");
var utils_1 = require("../utils");
var utils_2 = require("@medusajs/utils");
var NotificationService = /** @class */ (function (_super) {
    __extends(NotificationService, _super);
    function NotificationService(container) {
        var _this = _super.call(this, container) || this;
        _this.subscribers_ = {};
        _this.attachmentGenerator_ = null;
        var notificationProviderRepository = container.notificationProviderRepository, notificationRepository = container.notificationRepository, logger = container.logger;
        _this.container_ = container;
        _this.logger_ = logger;
        _this.notificationRepository_ = notificationRepository;
        _this.notificationProviderRepository_ = notificationProviderRepository;
        return _this;
    }
    /**
     * Registers an attachment generator to the service. The generator can be
     * used to generate on demand invoices or other documents.
     * @param service the service to assign to the attachmentGenerator
     */
    NotificationService.prototype.registerAttachmentGenerator = function (service) {
        this.attachmentGenerator_ = service;
    };
    /**
     * Takes a list of notification provider ids and persists them in the database.
     * @param providerIds - a list of provider ids
     */
    NotificationService.prototype.registerInstalledProviders = function (providerIds) {
        return __awaiter(this, void 0, void 0, function () {
            var notificationProviderRepository, model, providerIds_1, providerIds_1_1, id, n, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        notificationProviderRepository = this.container_.notificationProviderRepository;
                        model = this.activeManager_.withRepository(notificationProviderRepository);
                        return [4 /*yield*/, model.update({}, { is_installed: false })];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 9]);
                        providerIds_1 = __values(providerIds), providerIds_1_1 = providerIds_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!providerIds_1_1.done) return [3 /*break*/, 6];
                        id = providerIds_1_1.value;
                        n = model.create({ id: id, is_installed: true });
                        return [4 /*yield*/, model.save(n)];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        providerIds_1_1 = providerIds_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (providerIds_1_1 && !providerIds_1_1.done && (_a = providerIds_1.return)) _a.call(providerIds_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Retrieves a list of notifications.
     * @param selector - the params to select the notifications by.
     * @param config - the configuration to apply to the query
     * @return the notifications that satisfy the query.
     */
    NotificationService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, notifications;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.listAndCount(selector, config)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), notifications = _a[0];
                        return [2 /*return*/, notifications];
                }
            });
        });
    };
    /**
     * Retrieves a list of notifications and total count.
     * @param selector - the params to select the notifications by.
     * @param config - the configuration to apply to the query
     * @return the notifications that satisfy the query as well as the count.
     */
    NotificationService.prototype.listAndCount = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var notiRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        notiRepo = this.activeManager_.withRepository(this.notificationRepository_);
                        query = (0, utils_1.buildQuery)(selector, config);
                        return [4 /*yield*/, notiRepo.findAndCount(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves a notification with a given id
     * @param id - the id of the notification
     * @param config - the configuration to apply to the query
     * @return the notification
     */
    NotificationService.prototype.retrieve = function (id, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var notiRepository, query, notification;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        notiRepository = this.activeManager_.withRepository(this.notificationRepository_);
                        query = (0, utils_1.buildQuery)({ id: id }, config);
                        return [4 /*yield*/, notiRepository.findOne(query)];
                    case 1:
                        notification = _a.sent();
                        if (!notification) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Notification with id: ".concat(id, " was not found."));
                        }
                        return [2 /*return*/, notification];
                }
            });
        });
    };
    /**
     * Subscribes a given provider to an event.
     * @param eventName - the event to subscribe to
     * @param providerId - the provider that the event will be sent to
     */
    NotificationService.prototype.subscribe = function (eventName, providerId) {
        if (typeof providerId !== "string") {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "providerId must be a string");
        }
        if (this.subscribers_[eventName]) {
            this.subscribers_[eventName].push(providerId);
        }
        else {
            this.subscribers_[eventName] = [providerId];
        }
    };
    /**
     * Finds a provider with a given id. Will throw a NOT_FOUND error if the
     * resolution fails.
     * @param id - the id of the provider
     * @return the notification provider
     */
    NotificationService.prototype.retrieveProvider_ = function (id) {
        try {
            return this.container_["noti_".concat(id)];
        }
        catch (err) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Could not find a notification provider with id: ".concat(id, "."));
        }
    };
    /**
     * Handles an event by relaying the event data to the subscribing providers.
     * The result of the notification send will be persisted in the database in
     * order to allow for resends. Will log any errors that are encountered.
     * @param eventName - the event to handle
     * @param data - the data the event was sent with
     * @return the result of notification subscribed
     */
    NotificationService.prototype.handleEvent = function (eventName, data) {
        return __awaiter(this, void 0, void 0, function () {
            var subs;
            var _this = this;
            return __generator(this, function (_a) {
                subs = this.subscribers_[eventName];
                if (!subs) {
                    return [2 /*return*/, Promise.resolve()];
                }
                if (data["no_notification"] === true) {
                    return [2 /*return*/, Promise.resolve()];
                }
                return [2 /*return*/, (0, utils_2.promiseAll)(subs.map(function (providerId) { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            return [2 /*return*/, this.send(eventName, data, providerId).catch(function (err) {
                                    _this.logger_.log(err);
                                    _this.logger_.warn("An error occured while ".concat(providerId, " was processing a notification for ").concat(eventName, ": ").concat(err.message));
                                })];
                        });
                    }); }))];
            });
        });
    };
    /**
     * Sends a notification, by calling the given provider's sendNotification
     * method. Persists the Notification in the database.
     * @param event - the name of the event
     * @param eventData - the data the event was sent with
     * @param providerId - the provider that should handle the event.
     * @return the created notification
     */
    NotificationService.prototype.send = function (event, eventData, providerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var provider, result, to, data, notiRepo, _a, resource_type, resource_id, customer_id, created;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        provider = this.retrieveProvider_(providerId);
                                        return [4 /*yield*/, provider.sendNotification(event, eventData, this.attachmentGenerator_)];
                                    case 1:
                                        result = _b.sent();
                                        if (!result) {
                                            return [2 /*return*/];
                                        }
                                        to = result.to, data = result.data;
                                        notiRepo = transactionManager.withRepository(this.notificationRepository_);
                                        _a = __read(event.split("."), 1), resource_type = _a[0];
                                        resource_id = eventData.id;
                                        customer_id = eventData.customer_id || null;
                                        created = notiRepo.create({
                                            resource_type: resource_type,
                                            resource_id: resource_id,
                                            customer_id: customer_id,
                                            to: to,
                                            data: data,
                                            event_name: event,
                                            provider_id: providerId,
                                        });
                                        return [4 /*yield*/, notiRepo.save(created)];
                                    case 2: return [2 /*return*/, _b.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Resends a notification by retrieving a prior notification and calling the
     * underlying provider's resendNotification method.
     * @param {string} id - the id of the notification
     * @param {object} config - any configuration that might override the previous
     *  send
     * @return {Notification} the newly created notification
     */
    NotificationService.prototype.resend = function (id, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var notification, provider, _a, to, data, notiRepo, resendNoti, created;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(id)];
                                    case 1:
                                        notification = _b.sent();
                                        provider = this.retrieveProvider_(notification.provider_id);
                                        return [4 /*yield*/, provider.resendNotification(notification, config, this.attachmentGenerator_)];
                                    case 2:
                                        _a = _b.sent(), to = _a.to, data = _a.data;
                                        notiRepo = transactionManager.withRepository(this.notificationRepository_);
                                        resendNoti = __assign(__assign({}, notification), { id: null });
                                        created = notiRepo.create(__assign(__assign({}, resendNoti), { to: to, data: data, parent_id: id }));
                                        return [2 /*return*/, notiRepo.save(created)];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return NotificationService;
}(interfaces_1.TransactionBaseService));
exports.default = NotificationService;
//# sourceMappingURL=notification.js.map