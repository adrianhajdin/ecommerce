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
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var ReturnReasonService = /** @class */ (function (_super) {
    __extends(ReturnReasonService, _super);
    function ReturnReasonService(_a) {
        var returnReasonRepository = _a.returnReasonRepository;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.retReasonRepo_ = returnReasonRepository;
        return _this;
    }
    ReturnReasonService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var rrRepo, parentReason, created;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        rrRepo = manager.withRepository(this.retReasonRepo_);
                                        if (!(data.parent_return_reason_id && data.parent_return_reason_id !== "")) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.retrieve(data.parent_return_reason_id)];
                                    case 1:
                                        parentReason = _a.sent();
                                        if (parentReason.parent_return_reason_id) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Doubly nested return reasons is not supported");
                                        }
                                        _a.label = 2;
                                    case 2:
                                        created = rrRepo.create(data);
                                        return [4 /*yield*/, rrRepo.save(created)];
                                    case 3: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReturnReasonService.prototype.update = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var rrRepo, reason, _a, _b, key;
                            var e_1, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        rrRepo = manager.withRepository(this.retReasonRepo_);
                                        return [4 /*yield*/, this.retrieve(id)];
                                    case 1:
                                        reason = _d.sent();
                                        try {
                                            for (_a = __values(Object.keys(data).filter(function (k) { return typeof data[k] !== "undefined"; })), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                key = _b.value;
                                                reason[key] = data[key];
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [4 /*yield*/, rrRepo.save(reason)];
                                    case 2:
                                        _d.sent();
                                        return [2 /*return*/, reason];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param {Object} selector - the query object for find
     * @param {Object} config - config object
     * @return {Promise} the result of the find operation
     */
    ReturnReasonService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var rrRepo, query;
            return __generator(this, function (_a) {
                rrRepo = this.activeManager_.withRepository(this.retReasonRepo_);
                query = (0, utils_1.buildQuery)(selector, config);
                return [2 /*return*/, rrRepo.find(query)];
            });
        });
    };
    /**
     * Gets an order by id.
     * @param {string} returnReasonId - id of order to retrieve
     * @param {Object} config - config object
     * @return {Promise<Order>} the order document
     */
    ReturnReasonService.prototype.retrieve = function (returnReasonId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var rrRepo, query, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(returnReasonId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"returnReasonId\" must be defined");
                        }
                        rrRepo = this.activeManager_.withRepository(this.retReasonRepo_);
                        query = (0, utils_1.buildQuery)({ id: returnReasonId }, config);
                        return [4 /*yield*/, rrRepo.findOne(query)];
                    case 1:
                        item = _a.sent();
                        if (!item) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Return Reason with id: ".concat(returnReasonId, " was not found."));
                        }
                        return [2 /*return*/, item];
                }
            });
        });
    };
    ReturnReasonService.prototype.delete = function (returnReasonId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                        var rrRepo, reason;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    rrRepo = manager.withRepository(this.retReasonRepo_);
                                    return [4 /*yield*/, this.retrieve(returnReasonId, {
                                            relations: ["return_reason_children"],
                                        })];
                                case 1:
                                    reason = _a.sent();
                                    if (!reason) {
                                        return [2 /*return*/, Promise.resolve()];
                                    }
                                    return [4 /*yield*/, rrRepo.softRemove(reason)];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/, Promise.resolve()];
                            }
                        });
                    }); })];
            });
        });
    };
    return ReturnReasonService;
}(interfaces_1.TransactionBaseService));
exports.default = ReturnReasonService;
//# sourceMappingURL=return-reason.js.map