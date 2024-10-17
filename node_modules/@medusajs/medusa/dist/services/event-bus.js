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
var utils_1 = require("@medusajs/utils");
var os_1 = require("os");
var interfaces_1 = require("../interfaces");
var utils_2 = require("../utils");
var sleep_1 = require("../utils/sleep");
/**
 * Can keep track of multiple subscribers to different events and run the
 * subscribers when events happen. Events will run asynchronously.
 */
var EventBusService = /** @class */ (function (_super) {
    __extends(EventBusService, _super);
    function EventBusService(_a, config, isSingleton) {
        var stagedJobService = _a.stagedJobService, logger = _a.logger;
        if (isSingleton === void 0) { isSingleton = true; }
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.logger_ = logger;
        _this.config_ = config;
        _this.stagedJobService_ = stagedJobService;
        if (process.env.NODE_ENV !== "test" && isSingleton) {
            _this.startEnqueuer();
        }
        return _this;
    }
    Object.defineProperty(EventBusService.prototype, "eventBusModuleService_", {
        // eslint-disable-next-line max-len
        get: function () {
            return this.__container__.eventBusModuleService;
        },
        enumerable: false,
        configurable: true
    });
    EventBusService.prototype.withTransaction = function (transactionManager) {
        if (!transactionManager) {
            return this;
        }
        var cloned = new this.constructor({
            manager: transactionManager,
            stagedJobService: this.stagedJobService_,
            eventBusModuleService: this.eventBusModuleService_,
        }, this.config_, false);
        cloned.manager_ = transactionManager;
        cloned.transactionManager_ = transactionManager;
        return cloned;
    };
    /**
     * Adds a function to a list of event subscribers.
     * @param event - the event that the subscriber will listen for.
     * @param subscriber - the function to be called when a certain event
     * happens. Subscribers must return a Promise.
     * @param context - subscriber context
     * @return this
     */
    EventBusService.prototype.subscribe = function (event, subscriber, context) {
        if (typeof subscriber !== "function") {
            throw new Error("Subscriber must be a function");
        }
        this.eventBusModuleService_.subscribe(event, subscriber, context);
        return this;
    };
    /**
     * Removes function from the list of event subscribers.
     * @param event - the event of the subcriber.
     * @param subscriber - the function to be removed
     * @param context - subscriber context
     * @return this
     */
    EventBusService.prototype.unsubscribe = function (event, subscriber, context) {
        this.eventBusModuleService_.unsubscribe(event, subscriber, context);
        return this;
    };
    EventBusService.prototype.emit = function (eventNameOrData, data, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var manager, isBulkEmit, dataBody, events, stagedJobs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.activeManager_;
                        isBulkEmit = !(0, utils_2.isString)(eventNameOrData);
                        dataBody = (0, utils_2.isString)(eventNameOrData)
                            ? data !== null && data !== void 0 ? data : data.body
                            : undefined;
                        events = isBulkEmit
                            ? eventNameOrData.map(function (event) {
                                var _a;
                                return ({
                                    eventName: event.eventName,
                                    data: (_a = event.data) !== null && _a !== void 0 ? _a : event.body.data,
                                    options: event.options,
                                });
                            })
                            : [
                                {
                                    eventName: eventNameOrData,
                                    data: dataBody,
                                    options: options,
                                },
                            ];
                        return [4 /*yield*/, this.stagedJobService_
                                .withTransaction(manager)
                                .create(events)];
                    case 1:
                        stagedJobs = _a.sent();
                        return [2 /*return*/, (!isBulkEmit ? stagedJobs[0] : stagedJobs)];
                }
            });
        });
    };
    EventBusService.prototype.startEnqueuer = function () {
        this.shouldEnqueuerRun = true;
        this.enqueue_ = this.enqueuer_();
    };
    EventBusService.prototype.stopEnqueuer = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.shouldEnqueuerRun = false;
                        return [4 /*yield*/, this.enqueue_];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EventBusService.prototype.enqueuer_ = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var listConfig, _loop_1, this_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        listConfig = {
                            relations: [],
                            skip: 0,
                            take: (_a = this.config_.projectConfig.jobs_batch_size) !== null && _a !== void 0 ? _a : 1000,
                        };
                        _loop_1 = function () {
                            var jobs, eventsData;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, (0, sleep_1.sleep)(3000)];
                                    case 1:
                                        _c.sent();
                                        return [4 /*yield*/, this_1.listJobs(listConfig)];
                                    case 2:
                                        jobs = _c.sent();
                                        if (!jobs.length) {
                                            return [2 /*return*/, "continue"];
                                        }
                                        eventsData = jobs.map(function (job) {
                                            return {
                                                eventName: job.event_name,
                                                data: job.data,
                                                options: __assign({ jobId: job.id }, job.options),
                                            };
                                        });
                                        return [4 /*yield*/, this_1.eventBusModuleService_.emit(eventsData).then(function () { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, this.stagedJobService_.delete(jobs.map(function (j) { return j.id; }))];
                                                        case 1: return [2 /*return*/, _a.sent()];
                                                    }
                                                });
                                            }); })];
                                    case 3:
                                        _c.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _b.label = 1;
                    case 1:
                        if (!this.shouldEnqueuerRun) return [3 /*break*/, 3];
                        return [5 /*yield**/, _loop_1()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EventBusService.prototype.listJobs = function (listConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.stagedJobService_.list(listConfig).catch(function (err) {
                            if (utils_1.DatabaseErrorCode.connectionFailure === err.code) {
                                _this.logger_.warn("Database connection failure:".concat(os_1.EOL).concat(err.message));
                            }
                            else {
                                _this.logger_.warn("Failed to fetch jobs:".concat(os_1.EOL).concat(err.message));
                            }
                            return [];
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return EventBusService;
}(interfaces_1.TransactionBaseService));
exports.default = EventBusService;
//# sourceMappingURL=event-bus.js.map