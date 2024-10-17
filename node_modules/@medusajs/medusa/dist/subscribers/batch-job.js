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
Object.defineProperty(exports, "__esModule", { value: true });
var services_1 = require("../services");
var BatchJobSubscriber = /** @class */ (function () {
    function BatchJobSubscriber(_a) {
        var eventBusService = _a.eventBusService, batchJobService = _a.batchJobService, strategyResolverService = _a.strategyResolverService, manager = _a.manager;
        var _this = this;
        this.preProcessBatchJob = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.manager_.transaction(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var batchJobServiceTx, batchJob, batchJobStrategy;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            batchJobServiceTx = this.batchJobService_.withTransaction(manager);
                                            return [4 /*yield*/, batchJobServiceTx.retrieve(data.id)];
                                        case 1:
                                            batchJob = _a.sent();
                                            batchJobStrategy = this.strategyResolver_.resolveBatchJobByType(batchJob.type);
                                            return [4 /*yield*/, batchJobStrategy
                                                    .withTransaction(manager)
                                                    .preProcessBatchJob(batchJob.id)];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, batchJobServiceTx.setPreProcessingDone(batchJob.id)];
                                        case 3:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.batchJobService_.setFailed(data.id, e_1.message)];
                    case 3:
                        _a.sent();
                        throw e_1;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.processBatchJob = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var e_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        return [4 /*yield*/, this.manager_.transaction("REPEATABLE READ", function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var batchJobServiceTx, batchJob, batchJobStrategy;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            batchJobServiceTx = this.batchJobService_.withTransaction(manager);
                                            return [4 /*yield*/, batchJobServiceTx.retrieve(data.id)];
                                        case 1:
                                            batchJob = _a.sent();
                                            batchJobStrategy = this.strategyResolver_.resolveBatchJobByType(batchJob.type);
                                            return [4 /*yield*/, batchJobServiceTx.setProcessing(batchJob.id)];
                                        case 2:
                                            _a.sent();
                                            return [4 /*yield*/, batchJobStrategy.withTransaction(manager).processJob(batchJob.id)];
                                        case 3:
                                            _a.sent();
                                            return [4 /*yield*/, batchJobServiceTx.complete(batchJob.id)];
                                        case 4:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        e_2 = _a.sent();
                        return [4 /*yield*/, this.batchJobService_.setFailed(data.id, e_2.message)];
                    case 3:
                        _a.sent();
                        throw e_2;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.eventBusService_ = eventBusService;
        this.batchJobService_ = batchJobService;
        this.strategyResolver_ = strategyResolverService;
        this.manager_ = manager;
        this.eventBusService_.subscribe(services_1.BatchJobService.Events.CREATED, this.preProcessBatchJob);
        this.eventBusService_.subscribe(services_1.BatchJobService.Events.CONFIRMED, this.processBatchJob);
    }
    return BatchJobSubscriber;
}());
exports.default = BatchJobSubscriber;
//# sourceMappingURL=batch-job.js.map