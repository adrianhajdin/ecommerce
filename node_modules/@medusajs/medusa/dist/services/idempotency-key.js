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
var medusa_core_utils_1 = require("medusa-core-utils");
var utils_1 = require("../utils");
var interfaces_1 = require("../interfaces");
var uuid_1 = require("uuid");
var KEY_LOCKED_TIMEOUT = 1000;
var IdempotencyKeyService = /** @class */ (function (_super) {
    __extends(IdempotencyKeyService, _super);
    function IdempotencyKeyService(_a) {
        var idempotencyKeyRepository = _a.idempotencyKeyRepository;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.idempotencyKeyRepository_ = idempotencyKeyRepository;
        return _this;
    }
    /**
     * Execute the initial steps in a idempotent request.
     * @param headerKey - potential idempotency key from header
     * @param reqMethod - method of request
     * @param reqParams - params of request
     * @param reqPath - path of request
     * @return the existing or created idempotency key
     */
    IdempotencyKeyService.prototype.initializeRequest = function (headerKey, reqMethod, reqParams, reqPath) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function () { return __awaiter(_this, void 0, void 0, function () {
                            var key;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!headerKey) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.retrieve(headerKey).catch(function () { return void 0; })];
                                    case 1:
                                        key = _a.sent();
                                        if (key) {
                                            return [2 /*return*/, key];
                                        }
                                        _a.label = 2;
                                    case 2: return [4 /*yield*/, this.create({
                                            request_method: reqMethod,
                                            request_params: reqParams,
                                            request_path: reqPath,
                                        })];
                                    case 3: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); }, "SERIALIZABLE")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Creates an idempotency key for a request.
     * If no idempotency key is provided in request, we will create a unique
     * identifier.
     * @param payload - payload of request to create idempotency key for
     * @return the created idempotency key
     */
    IdempotencyKeyService.prototype.create = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var idempotencyKeyRepo, created;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        idempotencyKeyRepo = manager.withRepository(this.idempotencyKeyRepository_);
                                        payload.idempotency_key = (_a = payload.idempotency_key) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)();
                                        created = idempotencyKeyRepo.create(payload);
                                        return [4 /*yield*/, idempotencyKeyRepo.save(created)];
                                    case 1: return [2 /*return*/, _b.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieves an idempotency key
     * @param idempotencyKeyOrSelector - key or selector to retrieve
     * @return idempotency key
     */
    IdempotencyKeyService.prototype.retrieve = function (idempotencyKeyOrSelector) {
        return __awaiter(this, void 0, void 0, function () {
            var idempotencyKeyRepo, selector, query, iKeys, iKey, message;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(idempotencyKeyOrSelector)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"idempotencyKeyOrSelector\" must be defined");
                        }
                        idempotencyKeyRepo = this.activeManager_.withRepository(this.idempotencyKeyRepository_);
                        selector = (0, utils_1.isString)(idempotencyKeyOrSelector)
                            ? { idempotency_key: idempotencyKeyOrSelector }
                            : idempotencyKeyOrSelector;
                        query = (0, utils_1.buildQuery)(selector);
                        return [4 /*yield*/, idempotencyKeyRepo.find(query)];
                    case 1:
                        iKeys = _a.sent();
                        if (iKeys.length > 1) {
                            throw new Error("Multiple keys were found for constraints: ".concat(JSON.stringify(idempotencyKeyOrSelector), ". There should only be one."));
                        }
                        iKey = iKeys[0];
                        if (!iKey) {
                            message = void 0;
                            if ((0, utils_1.isString)(idempotencyKeyOrSelector)) {
                                message = "Idempotency key ".concat(idempotencyKeyOrSelector, " was not found");
                            }
                            else {
                                message = "Idempotency key with constraints ".concat(JSON.stringify(idempotencyKeyOrSelector), " was not found");
                            }
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, message);
                        }
                        return [2 /*return*/, iKey];
                }
            });
        });
    };
    /**
     * Locks an idempotency.
     * @param idempotencyKey - key to lock
     * @return result of the update operation
     */
    IdempotencyKeyService.prototype.lock = function (idempotencyKey) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var idempotencyKeyRepo, key, isLocked;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        idempotencyKeyRepo = manager.withRepository(this.idempotencyKeyRepository_);
                                        return [4 /*yield*/, this.retrieve(idempotencyKey)];
                                    case 1:
                                        key = _a.sent();
                                        isLocked = key.locked_at &&
                                            new Date(key.locked_at).getTime() > Date.now() - KEY_LOCKED_TIMEOUT;
                                        if (isLocked) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.CONFLICT, "Key already locked");
                                        }
                                        return [4 /*yield*/, idempotencyKeyRepo.save(__assign(__assign({}, key), { locked_at: Date.now() }))];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Locks an idempotency.
     * @param {string} idempotencyKey - key to update
     * @param {object} update - update object
     * @return {Promise} result of the update operation
     */
    IdempotencyKeyService.prototype.update = function (idempotencyKey, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var idempotencyKeyRepo, iKey, _a, _b, _c, key, value;
                            var e_1, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        idempotencyKeyRepo = manager.withRepository(this.idempotencyKeyRepository_);
                                        return [4 /*yield*/, this.retrieve(idempotencyKey)];
                                    case 1:
                                        iKey = _e.sent();
                                        try {
                                            for (_a = __values(Object.entries(update)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                                                iKey[key] = value;
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [4 /*yield*/, idempotencyKeyRepo.save(iKey)];
                                    case 2: return [2 /*return*/, _e.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Performs an atomic work stage.
     * An atomic work stage contains some related functionality, that needs to be
     * transactionally executed in isolation. An idempotent request will
     * always consist of 2 or more of these phases. The required phases are
     * "started" and "finished".
     * @param idempotencyKey - current idempotency key
     * @param callback - functionality to execute within the phase
     * @return new updated idempotency key
     */
    IdempotencyKeyService.prototype.workStage = function (idempotencyKey, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, recovery_point, response_code, response_body, data;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, callback(manager)];
                                    case 1:
                                        _a = _b.sent(), recovery_point = _a.recovery_point, response_code = _a.response_code, response_body = _a.response_body;
                                        data = {
                                            recovery_point: recovery_point !== null && recovery_point !== void 0 ? recovery_point : "finished",
                                        };
                                        if (!recovery_point) {
                                            data.response_body = response_body;
                                            data.response_code = response_code;
                                        }
                                        return [4 /*yield*/, this.update(idempotencyKey, data)];
                                    case 2: return [2 /*return*/, _b.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return IdempotencyKeyService;
}(interfaces_1.TransactionBaseService));
exports.default = IdempotencyKeyService;
//# sourceMappingURL=idempotency-key.js.map