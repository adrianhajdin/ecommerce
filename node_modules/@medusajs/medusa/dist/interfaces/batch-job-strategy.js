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
exports.AbstractBatchJobStrategy = void 0;
var transaction_base_service_1 = require("./transaction-base-service");
var AbstractBatchJobStrategy = /** @class */ (function (_super) {
    __extends(AbstractBatchJobStrategy, _super);
    function AbstractBatchJobStrategy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbstractBatchJobStrategy.isBatchJobStrategy = function (object) {
        var _a;
        return (_a = object === null || object === void 0 ? void 0 : object.constructor) === null || _a === void 0 ? void 0 : _a._isBatchJobStrategy;
    };
    AbstractBatchJobStrategy.prototype.prepareBatchJobForProcessing = function (batchJob, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    req) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, batchJob];
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    AbstractBatchJobStrategy.prototype.preProcessBatchJob = function (batchJobId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    AbstractBatchJobStrategy.prototype.shouldRetryOnProcessingError = function (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    batchJob, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    err) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, false];
            });
        });
    };
    AbstractBatchJobStrategy.prototype.handleProcessingError = function (batchJobId, err, result) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var batchJob, shouldRetry, errMessage, errCode, resultError, existingErrors, retryCount;
                            var _a, _b, _c, _d, _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0: return [4 /*yield*/, this.batchJobService_
                                            .withTransaction(transactionManager)
                                            .retrieve(batchJobId)];
                                    case 1:
                                        batchJob = (_f.sent());
                                        return [4 /*yield*/, this.shouldRetryOnProcessingError(batchJob, err)];
                                    case 2:
                                        shouldRetry = _f.sent();
                                        errMessage = (_a = err.message) !== null && _a !== void 0 ? _a : "Something went wrong with the batchJob ".concat(batchJob.id);
                                        errCode = (_b = err.code) !== null && _b !== void 0 ? _b : "unknown";
                                        resultError = { message: errMessage, code: errCode, err: err };
                                        if (!shouldRetry) return [3 /*break*/, 4];
                                        existingErrors = (_d = (_c = batchJob === null || batchJob === void 0 ? void 0 : batchJob.result) === null || _c === void 0 ? void 0 : _c.errors) !== null && _d !== void 0 ? _d : [];
                                        retryCount = (_e = batchJob.context.retry_count) !== null && _e !== void 0 ? _e : 0;
                                        return [4 /*yield*/, this.batchJobService_
                                                .withTransaction(transactionManager)
                                                .update(batchJobId, {
                                                context: {
                                                    retry_count: retryCount + 1,
                                                },
                                                result: __assign(__assign({}, result), { errors: __spreadArray(__spreadArray([], __read(existingErrors), false), [resultError.message], false) }),
                                            })];
                                    case 3:
                                        _f.sent();
                                        return [3 /*break*/, 6];
                                    case 4: return [4 /*yield*/, this.batchJobService_
                                            .withTransaction(transactionManager)
                                            .setFailed(batchJob, resultError)];
                                    case 5:
                                        _f.sent();
                                        _f.label = 6;
                                    case 6: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: 
                    // TODO just throw to be handled by the subscriber
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AbstractBatchJobStrategy._isBatchJobStrategy = true;
    return AbstractBatchJobStrategy;
}(transaction_base_service_1.TransactionBaseService));
exports.AbstractBatchJobStrategy = AbstractBatchJobStrategy;
//# sourceMappingURL=batch-job-strategy.js.map