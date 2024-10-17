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
exports.TransactionBaseService = void 0;
var TransactionBaseService = /** @class */ (function () {
    function TransactionBaseService(__container__, __configModule__, __moduleDeclaration__) {
        this.__container__ = __container__;
        this.__configModule__ = __configModule__;
        this.__moduleDeclaration__ = __moduleDeclaration__;
        this.manager_ = __container__ === null || __container__ === void 0 ? void 0 : __container__.manager;
    }
    Object.defineProperty(TransactionBaseService.prototype, "activeManager_", {
        get: function () {
            var _a;
            return (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
        },
        enumerable: false,
        configurable: true
    });
    TransactionBaseService.prototype.withTransaction = function (transactionManager) {
        if (!transactionManager) {
            return this;
        }
        var cloned = new this.constructor(this.__container__, this.__configModule__, this.__moduleDeclaration__);
        cloned.manager_ = transactionManager;
        cloned.transactionManager_ = transactionManager;
        return cloned;
    };
    TransactionBaseService.prototype.shouldRetryTransaction_ = function (err) {
        if (!(err === null || err === void 0 ? void 0 : err.code)) {
            return false;
        }
        var code = err === null || err === void 0 ? void 0 : err.code;
        return code === "40001" || code === "40P01";
    };
    /**
     * Wraps some work within a transactional block. If the service already has
     * a transaction manager attached this will be reused, otherwise a new
     * transaction manager is created.
     * @param work - the transactional work to be done
     * @param isolationOrErrorHandler - the isolation level to be used for the work.
     * @param maybeErrorHandlerOrDontFail Potential error handler
     * @return the result of the transactional work
     */
    TransactionBaseService.prototype.atomicPhase_ = function (work, isolationOrErrorHandler, maybeErrorHandlerOrDontFail) {
        return __awaiter(this, void 0, void 0, function () {
            var errorHandler, isolation, dontFail, doWork, temp_1, doWork_1, result, error_1, error_2, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        errorHandler = maybeErrorHandlerOrDontFail;
                        isolation = isolationOrErrorHandler;
                        dontFail = false;
                        if (typeof isolationOrErrorHandler === "function") {
                            isolation = null;
                            errorHandler = isolationOrErrorHandler;
                            dontFail = !!maybeErrorHandlerOrDontFail;
                        }
                        if (!this.transactionManager_) return [3 /*break*/, 2];
                        doWork = function (m) { return __awaiter(_this, void 0, void 0, function () {
                            var error_3, queryRunner;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.manager_ = m;
                                        this.transactionManager_ = m;
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 8]);
                                        return [4 /*yield*/, work(m)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                    case 3:
                                        error_3 = _a.sent();
                                        if (!errorHandler) return [3 /*break*/, 7];
                                        queryRunner = this.transactionManager_.queryRunner;
                                        if (!(queryRunner && queryRunner.isTransactionActive)) return [3 /*break*/, 5];
                                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                                    case 4:
                                        _a.sent();
                                        _a.label = 5;
                                    case 5: return [4 /*yield*/, errorHandler(error_3)];
                                    case 6:
                                        _a.sent();
                                        _a.label = 7;
                                    case 7: throw error_3;
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, doWork(this.transactionManager_)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        temp_1 = this.manager_;
                        doWork_1 = function (m) { return __awaiter(_this, void 0, void 0, function () {
                            var result, error_4;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.manager_ = m;
                                        this.transactionManager_ = m;
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, work(m)];
                                    case 2:
                                        result = _a.sent();
                                        this.manager_ = temp_1;
                                        this.transactionManager_ = undefined;
                                        return [2 /*return*/, result];
                                    case 3:
                                        error_4 = _a.sent();
                                        this.manager_ = temp_1;
                                        this.transactionManager_ = undefined;
                                        throw error_4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); };
                        if (!(isolation && this.manager_)) return [3 /*break*/, 10];
                        result = void 0;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 10]);
                        return [4 /*yield*/, this.manager_.transaction(isolation, function (m) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, doWork_1(m)];
                            }); }); })];
                    case 4:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 5:
                        error_1 = _a.sent();
                        if (!this.shouldRetryTransaction_(error_1)) return [3 /*break*/, 6];
                        return [2 /*return*/, this.manager_.transaction(isolation, function (m) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, doWork_1(m)];
                            }); }); })];
                    case 6:
                        if (!errorHandler) return [3 /*break*/, 8];
                        return [4 /*yield*/, errorHandler(error_1)];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: throw error_1;
                    case 9: return [3 /*break*/, 10];
                    case 10:
                        _a.trys.push([10, 12, , 15]);
                        return [4 /*yield*/, this.manager_.transaction(function (m) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, doWork_1(m)];
                            }); }); })];
                    case 11: return [2 /*return*/, _a.sent()];
                    case 12:
                        error_2 = _a.sent();
                        if (!errorHandler) return [3 /*break*/, 14];
                        return [4 /*yield*/, errorHandler(error_2)];
                    case 13:
                        result = _a.sent();
                        if (dontFail) {
                            return [2 /*return*/, result];
                        }
                        _a.label = 14;
                    case 14: throw error_2;
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    return TransactionBaseService;
}());
exports.TransactionBaseService = TransactionBaseService;
//# sourceMappingURL=transaction-base-service.js.map