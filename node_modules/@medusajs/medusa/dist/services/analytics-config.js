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
var interfaces_1 = require("../interfaces");
var AnalyticsConfigService = /** @class */ (function (_super) {
    __extends(AnalyticsConfigService, _super);
    function AnalyticsConfigService(_a) {
        var analyticsConfigRepository = _a.analyticsConfigRepository;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.analyticsConfigRepository_ = analyticsConfigRepository;
        return _this;
    }
    AnalyticsConfigService.prototype.retrieve = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var analyticsRepo, analyticsConfig;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        analyticsRepo = this.activeManager_.withRepository(this.analyticsConfigRepository_);
                        return [4 /*yield*/, analyticsRepo.findOne({
                                where: { user_id: userId },
                            })];
                    case 1:
                        analyticsConfig = _a.sent();
                        if (!analyticsConfig) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "No analytics config found for user with id: ".concat(userId));
                        }
                        return [2 /*return*/, analyticsConfig];
                }
            });
        });
    };
    /**
     * Creates an analytics config.
     */
    AnalyticsConfigService.prototype.create = function (userId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var analyticsRepo, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        analyticsRepo = this.activeManager_.withRepository(this.analyticsConfigRepository_);
                        config = analyticsRepo.create(__assign({ user_id: userId }, data));
                        return [4 /*yield*/, analyticsRepo.save(config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates an analytics config. If the config does not exist, it will be created instead.
     */
    AnalyticsConfigService.prototype.update = function (userId, update) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var analyticsRepo, config, _c, _d, _e, key, value;
            var e_1, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        analyticsRepo = this.activeManager_.withRepository(this.analyticsConfigRepository_);
                        return [4 /*yield*/, this.retrieve(userId).catch(function () { return undefined; })];
                    case 1:
                        config = _g.sent();
                        if (!config) {
                            return [2 /*return*/, this.create(userId, {
                                    opt_out: (_a = update.opt_out) !== null && _a !== void 0 ? _a : false,
                                    anonymize: (_b = update.anonymize) !== null && _b !== void 0 ? _b : false,
                                })];
                        }
                        try {
                            for (_c = __values(Object.entries(update)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                                if (value !== undefined) {
                                    config[key] = value;
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [4 /*yield*/, analyticsRepo.save(config)];
                    case 2: return [2 /*return*/, _g.sent()];
                }
            });
        });
    };
    /**
     * Deletes an analytics config.
     */
    AnalyticsConfigService.prototype.delete = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var analyticsRepo, config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        analyticsRepo = this.activeManager_.withRepository(this.analyticsConfigRepository_);
                        return [4 /*yield*/, this.retrieve(userId).catch(function () { return undefined; })];
                    case 1:
                        config = _a.sent();
                        if (!config) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, analyticsRepo.softRemove(config)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AnalyticsConfigService;
}(interfaces_1.TransactionBaseService));
exports.default = AnalyticsConfigService;
//# sourceMappingURL=analytics-config.js.map