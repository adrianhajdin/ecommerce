"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberLoader = void 0;
var modules_sdk_1 = require("@medusajs/modules-sdk");
var utils_1 = require("@medusajs/utils");
var promises_1 = require("fs/promises");
var path_1 = require("path");
var logger_1 = __importDefault(require("../../logger"));
var SubscriberLoader = /** @class */ (function () {
    function SubscriberLoader(rootDir, container, options, activityId, isV2) {
        if (options === void 0) { options = {}; }
        if (isV2 === void 0) { isV2 = false; }
        this.excludes = [
            /\.DS_Store/,
            /(\.ts\.map|\.js\.map|\.d\.ts)/,
            /^_[^/\\]*(\.[^/\\]+)?$/,
        ];
        this.subscriberDescriptors_ = new Map();
        this.rootDir_ = rootDir;
        this.pluginOptions_ = options;
        this.container_ = container;
        this.activityId_ = activityId;
        this.isV2_ = isV2;
    }
    SubscriberLoader.prototype.validateSubscriber = function (subscriber, path) {
        var handler = subscriber.default;
        if (!handler || typeof handler !== "function") {
            /**
             * If the handler is not a function, we can't use it
             */
            logger_1.default.warn("The subscriber in ".concat(path, " is not a function."));
            return false;
        }
        var config = subscriber.config;
        if (!config) {
            /**
             * If the subscriber is missing a config, we can't use it
             */
            logger_1.default.warn("The subscriber in ".concat(path, " is missing a config."));
            return false;
        }
        if (!config.event) {
            /**
             * If the subscriber is missing an event, we can't use it.
             * In production we throw an error, else we log a warning
             */
            if (process.env.NODE_ENV === "production") {
                throw new Error("The subscriber in ".concat(path, " is missing an event."));
            }
            else {
                logger_1.default.warn("The subscriber in ".concat(path, " is missing an event."));
            }
            return false;
        }
        if (typeof config.event !== "string" &&
            !Array.isArray(config.event) &&
            !config.event.every(function (e) { return typeof e === "string"; })) {
            /**
             * If the subscribers event is not a string or an array of strings, we can't use it
             */
            logger_1.default.warn("The subscriber in ".concat(path, " has an invalid event. The event must be a string or an array of strings."));
            return false;
        }
        return true;
    };
    SubscriberLoader.prototype.createDescriptor = function (absolutePath, entry) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                var _b;
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (_b = absolutePath, Promise.resolve().then(function () { return __importStar(require(_b)); })).then(function (module_) {
                            var isValid = _this.validateSubscriber(module_, absolutePath);
                            if (!isValid) {
                                return;
                            }
                            _this.subscriberDescriptors_.set(absolutePath, {
                                config: module_.config,
                                handler: module_.default,
                            });
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SubscriberLoader.prototype.createMap = function (dirPath) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = Promise).all;
                        return [4 /*yield*/, (0, promises_1.readdir)(dirPath, { withFileTypes: true }).then(function (entries) { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                return __generator(this, function (_a) {
                                    return [2 /*return*/, entries
                                            .filter(function (entry) {
                                            if (_this.excludes.length &&
                                                _this.excludes.some(function (exclude) { return exclude.test(entry.name); })) {
                                                return false;
                                            }
                                            return true;
                                        })
                                            .map(function (entry) { return __awaiter(_this, void 0, void 0, function () {
                                            var fullPath;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        fullPath = (0, path_1.join)(dirPath, entry.name);
                                                        if (entry.isDirectory()) {
                                                            return [2 /*return*/, this.createMap(fullPath)];
                                                        }
                                                        return [4 /*yield*/, this.createDescriptor(fullPath, entry.name)];
                                                    case 1: return [2 /*return*/, _a.sent()];
                                                }
                                            });
                                        }); })];
                                });
                            }); })];
                    case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SubscriberLoader.prototype.inferIdentifier = function (fileName, config, handler) {
        var _a, _b;
        var context = config.context;
        /**
         * If subscriberId is provided, use that
         */
        if (context === null || context === void 0 ? void 0 : context.subscriberId) {
            return context.subscriberId;
        }
        var handlerName = handler.name;
        /**
         * If the handler is not anonymous, use the name
         */
        if (handlerName && !handlerName.startsWith("default")) {
            return (0, utils_1.kebabCase)(handlerName);
        }
        /**
         * If the handler is anonymous, use the file name
         */
        var idFromFile = (_b = (_a = fileName.split(path_1.sep).pop()) === null || _a === void 0 ? void 0 : _a.replace((0, path_1.extname)(fileName), "")) !== null && _b !== void 0 ? _b : "";
        return (0, utils_1.kebabCase)(idFromFile);
    };
    SubscriberLoader.prototype.createSubscriber = function (_a) {
        var e_1, _b;
        var _this = this;
        var _c;
        var fileName = _a.fileName, config = _a.config, handler = _a.handler;
        var resName = this.isV2_
            ? modules_sdk_1.ModuleRegistrationName.EVENT_BUS
            : "eventBusService";
        var eventBusService = this.container_.resolve(resName);
        var event = config.event;
        var events = Array.isArray(event) ? event : [event];
        var subscriber = function (data, eventName) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, handler({
                        eventName: eventName,
                        data: data,
                        container: this.container_,
                        pluginOptions: this.pluginOptions_,
                    })];
            });
        }); };
        var subscriberId = this.inferIdentifier(fileName, config, handler);
        try {
            for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                var e = events_1_1.value;
                eventBusService.subscribe(e, subscriber, __assign(__assign({}, ((_c = config.context) !== null && _c !== void 0 ? _c : {})), { subscriberId: subscriberId }));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (events_1_1 && !events_1_1.done && (_b = events_1.return)) _b.call(events_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SubscriberLoader.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hasSubscriberDir, err_1, map, _a, _b, _c, fileName, _d, config, handler;
            var e_2, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        hasSubscriberDir = false;
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, promises_1.readdir)(this.rootDir_)];
                    case 2:
                        _f.sent();
                        hasSubscriberDir = true;
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _f.sent();
                        hasSubscriberDir = false;
                        return [3 /*break*/, 4];
                    case 4:
                        if (!hasSubscriberDir) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.createMap(this.rootDir_)];
                    case 5:
                        _f.sent();
                        map = this.subscriberDescriptors_;
                        try {
                            for (_a = __values(map.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                _c = __read(_b.value, 2), fileName = _c[0], _d = _c[1], config = _d.config, handler = _d.handler;
                                this.createSubscriber({
                                    fileName: fileName,
                                    config: config,
                                    handler: handler,
                                });
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        /**
                         * Return the file paths of the registered subscribers, to prevent the
                         * backwards compatible loader from trying to register them.
                         */
                        return [2 /*return*/, __spreadArray([], __read(map.keys()), false)];
                }
            });
        });
    };
    return SubscriberLoader;
}());
exports.SubscriberLoader = SubscriberLoader;
//# sourceMappingURL=index.js.map