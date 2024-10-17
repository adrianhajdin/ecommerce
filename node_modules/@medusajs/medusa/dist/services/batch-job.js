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
var interfaces_1 = require("../interfaces");
var batch_job_1 = require("../types/batch-job");
var utils_1 = require("../utils");
var BatchJobService = /** @class */ (function (_super) {
    __extends(BatchJobService, _super);
    function BatchJobService(_a) {
        var batchJobRepository = _a.batchJobRepository, eventBusService = _a.eventBusService, strategyResolverService = _a.strategyResolverService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.batchJobStatusMapToProps = new Map([
            [
                batch_job_1.BatchJobStatus.PRE_PROCESSED,
                {
                    entityColumnName: "pre_processed_at",
                    eventType: BatchJobService.Events.PRE_PROCESSED,
                },
            ],
            [
                batch_job_1.BatchJobStatus.CONFIRMED,
                {
                    entityColumnName: "confirmed_at",
                    eventType: BatchJobService.Events.CONFIRMED,
                },
            ],
            [
                batch_job_1.BatchJobStatus.PROCESSING,
                {
                    entityColumnName: "processing_at",
                    eventType: BatchJobService.Events.PROCESSING,
                },
            ],
            [
                batch_job_1.BatchJobStatus.COMPLETED,
                {
                    entityColumnName: "completed_at",
                    eventType: BatchJobService.Events.COMPLETED,
                },
            ],
            [
                batch_job_1.BatchJobStatus.CANCELED,
                {
                    entityColumnName: "canceled_at",
                    eventType: BatchJobService.Events.CANCELED,
                },
            ],
            [
                batch_job_1.BatchJobStatus.FAILED,
                {
                    entityColumnName: "failed_at",
                    eventType: BatchJobService.Events.FAILED,
                },
            ],
        ]);
        _this.batchJobRepository_ = batchJobRepository;
        _this.eventBus_ = eventBusService;
        _this.strategyResolver_ = strategyResolverService;
        return _this;
    }
    BatchJobService.prototype.retrieve = function (batchJobId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var batchJobRepo, query, batchJob;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(batchJobId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"batchJobId\" must be defined");
                        }
                        batchJobRepo = this.activeManager_.withRepository(this.batchJobRepository_);
                        query = (0, utils_1.buildQuery)({ id: batchJobId }, config);
                        return [4 /*yield*/, batchJobRepo.findOne(query)];
                    case 1:
                        batchJob = _a.sent();
                        if (!batchJob) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Batch job with id ".concat(batchJobId, " was not found"));
                        }
                        return [2 /*return*/, batchJob];
                }
            });
        });
    };
    BatchJobService.prototype.listAndCount = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { skip: 0, take: 20 }; }
        return __awaiter(this, void 0, void 0, function () {
            var batchJobRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        batchJobRepo = this.activeManager_.withRepository(this.batchJobRepository_);
                        query = (0, utils_1.buildQuery)(selector, config);
                        return [4 /*yield*/, batchJobRepo.findAndCount(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BatchJobService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var batchJobRepo, batchJob, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        batchJobRepo = manager.withRepository(this.batchJobRepository_);
                                        batchJob = batchJobRepo.create(data);
                                        return [4 /*yield*/, batchJobRepo.save(batchJob)];
                                    case 1:
                                        result = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(BatchJobService.Events.CREATED, {
                                                id: result.id,
                                            })];
                                    case 2:
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
    BatchJobService.prototype.update = function (batchJobOrId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var batchJobRepo, batchJob, context, result, rest;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        batchJobRepo = manager.withRepository(this.batchJobRepository_);
                                        batchJob = batchJobOrId;
                                        if (!(typeof batchJobOrId === "string")) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.retrieve(batchJobOrId)];
                                    case 1:
                                        batchJob = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        context = data.context, result = data.result, rest = __rest(data, ["context", "result"]);
                                        if (context) {
                                            batchJob.context = __assign(__assign({}, batchJob.context), context);
                                        }
                                        if (result) {
                                            batchJob.result = __assign(__assign({}, batchJob.result), result);
                                        }
                                        Object.keys(rest)
                                            .filter(function (key) { return typeof rest[key] !== "undefined"; })
                                            .forEach(function (key) {
                                            batchJob[key] = rest[key];
                                        });
                                        return [4 /*yield*/, batchJobRepo.save(batchJob)];
                                    case 3:
                                        batchJob = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(BatchJobService.Events.UPDATED, {
                                                id: batchJob.id,
                                            })];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/, batchJob];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BatchJobService.prototype.confirm = function (batchJobOrId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function () { return __awaiter(_this, void 0, void 0, function () {
                            var batchJob;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        batchJob = batchJobOrId;
                                        if (!(typeof batchJobOrId === "string")) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.retrieve(batchJobOrId)];
                                    case 1:
                                        batchJob = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (batchJob.status !== batch_job_1.BatchJobStatus.PRE_PROCESSED) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot confirm processing for a batch job that is not pre processed");
                                        }
                                        return [4 /*yield*/, this.updateStatus(batchJob, batch_job_1.BatchJobStatus.CONFIRMED)];
                                    case 3: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BatchJobService.prototype.complete = function (batchJobOrId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function () { return __awaiter(_this, void 0, void 0, function () {
                            var batchJob;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        batchJob = batchJobOrId;
                                        if (!(typeof batchJobOrId === "string")) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.retrieve(batchJobOrId)];
                                    case 1:
                                        batchJob = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (batchJob.status !== batch_job_1.BatchJobStatus.PROCESSING) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Cannot complete a batch job with status \"".concat(batchJob.status, "\". The batch job must be processing"));
                                        }
                                        return [4 /*yield*/, this.updateStatus(batchJob, batch_job_1.BatchJobStatus.COMPLETED)];
                                    case 3: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BatchJobService.prototype.cancel = function (batchJobOrId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function () { return __awaiter(_this, void 0, void 0, function () {
                            var batchJob;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        batchJob = batchJobOrId;
                                        if (!(typeof batchJobOrId === "string")) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.retrieve(batchJobOrId)];
                                    case 1:
                                        batchJob = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (batchJob.status === batch_job_1.BatchJobStatus.COMPLETED) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot cancel completed batch job");
                                        }
                                        return [4 /*yield*/, this.updateStatus(batchJob, batch_job_1.BatchJobStatus.CANCELED)];
                                    case 3: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BatchJobService.prototype.setPreProcessingDone = function (batchJobOrId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function () { return __awaiter(_this, void 0, void 0, function () {
                            var batchJob;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        batchJob = batchJobOrId;
                                        if (!(typeof batchJobOrId === "string")) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.retrieve(batchJobOrId)];
                                    case 1:
                                        batchJob = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (batchJob.status === batch_job_1.BatchJobStatus.PRE_PROCESSED) {
                                            return [2 /*return*/, batchJob];
                                        }
                                        if (batchJob.status !== batch_job_1.BatchJobStatus.CREATED) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot mark a batch job as pre processed if it is not in created status");
                                        }
                                        return [4 /*yield*/, this.updateStatus(batchJobOrId, batch_job_1.BatchJobStatus.PRE_PROCESSED)];
                                    case 3:
                                        batchJob = _a.sent();
                                        if (batchJob.dry_run) {
                                            return [2 /*return*/, batchJob];
                                        }
                                        return [4 /*yield*/, this.confirm(batchJob)];
                                    case 4: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BatchJobService.prototype.setProcessing = function (batchJobOrId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function () { return __awaiter(_this, void 0, void 0, function () {
                            var batchJob;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        batchJob = batchJobOrId;
                                        if (!(typeof batchJobOrId === "string")) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.retrieve(batchJobOrId)];
                                    case 1:
                                        batchJob = _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        if (batchJob.status !== batch_job_1.BatchJobStatus.CONFIRMED) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot mark a batch job as processing if the status is different that confirmed");
                                        }
                                        return [4 /*yield*/, this.updateStatus(batchJob, batch_job_1.BatchJobStatus.PROCESSING)];
                                    case 3: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BatchJobService.prototype.setFailed = function (batchJobOrId, error) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function () { return __awaiter(_this, void 0, void 0, function () {
                            var batchJob, result;
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        batchJob = batchJobOrId;
                                        if (!error) return [3 /*break*/, 4];
                                        if (!(typeof batchJobOrId === "string")) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.retrieve(batchJobOrId)];
                                    case 1:
                                        batchJob = _c.sent();
                                        _c.label = 2;
                                    case 2:
                                        result = (_a = batchJob.result) !== null && _a !== void 0 ? _a : {};
                                        return [4 /*yield*/, this.update(batchJob, {
                                                result: __assign(__assign({}, result), { errors: __spreadArray(__spreadArray([], __read(((_b = result === null || result === void 0 ? void 0 : result.errors) !== null && _b !== void 0 ? _b : [])), false), [error], false) }),
                                            })];
                                    case 3:
                                        _c.sent();
                                        _c.label = 4;
                                    case 4: return [4 /*yield*/, this.updateStatus(batchJob, batch_job_1.BatchJobStatus.FAILED)];
                                    case 5: return [2 /*return*/, _c.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BatchJobService.prototype.prepareBatchJobForProcessing = function (data, req) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var batchStrategy;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        batchStrategy = this.strategyResolver_.resolveBatchJobByType(data.type);
                                        return [4 /*yield*/, batchStrategy
                                                .withTransaction(transactionManager)
                                                .prepareBatchJobForProcessing(data, req)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BatchJobService.prototype.updateStatus = function (batchJobOrId, status) {
        return __awaiter(this, void 0, void 0, function () {
            var batchJob, _a, entityColumnName, eventType, batchJobRepo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        batchJob = batchJobOrId;
                        if (!(typeof batchJobOrId === "string")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.retrieve(batchJobOrId)];
                    case 1:
                        batchJob = _b.sent();
                        _b.label = 2;
                    case 2:
                        _a = this.batchJobStatusMapToProps.get(status) || {}, entityColumnName = _a.entityColumnName, eventType = _a.eventType;
                        if (!entityColumnName || !eventType) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Unable to update the batch job status from ".concat(batchJob.status, " to ").concat(status, ". The status doesn't exist"));
                        }
                        batchJob[entityColumnName] = new Date();
                        batchJobRepo = this.activeManager_.withRepository(this.batchJobRepository_);
                        return [4 /*yield*/, batchJobRepo.save(batchJob)];
                    case 3:
                        batchJob = _b.sent();
                        batchJob.loadStatus();
                        return [4 /*yield*/, this.eventBus_.withTransaction(this.activeManager_).emit(eventType, {
                                id: batchJob.id,
                            })];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, batchJob];
                }
            });
        });
    };
    BatchJobService.Events = {
        CREATED: "batch.created",
        UPDATED: "batch.updated",
        PRE_PROCESSED: "batch.pre_processed",
        CONFIRMED: "batch.confirmed",
        PROCESSING: "batch.processing",
        COMPLETED: "batch.completed",
        CANCELED: "batch.canceled",
        FAILED: "batch.failed",
    };
    return BatchJobService;
}(interfaces_1.TransactionBaseService));
exports.default = BatchJobService;
//# sourceMappingURL=batch-job.js.map