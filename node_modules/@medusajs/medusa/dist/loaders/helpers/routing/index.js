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
exports.RoutesLoader = void 0;
var utils_1 = require("@medusajs/utils");
var cors_1 = __importDefault(require("cors"));
var express_1 = require("express");
var promises_1 = require("fs/promises");
var medusa_core_utils_1 = require("medusa-core-utils");
var path_1 = require("path");
var middlewares_1 = require("../../../api/middlewares");
var logger_1 = __importDefault(require("../../logger"));
var types_1 = require("./types");
var log = function (_a) {
    var activityId = _a.activityId, message = _a.message;
    if (activityId) {
        logger_1.default.progress(activityId, message);
        return;
    }
    logger_1.default.info(message);
};
/**
 * File name that is used to indicate that the file is a route file
 */
var ROUTE_NAME = "route";
/**
 * Flag that developers can export from their route files to indicate
 * whether or not the route should be authenticated or not.
 */
var AUTHTHENTICATE = "AUTHENTICATE";
/**
 * File name for the global middlewares file
 */
var MIDDLEWARES_NAME = "middlewares";
var pathSegmentReplacer = {
    "\\[\\.\\.\\.\\]": function () { return "*"; },
    "\\[(\\w+)?": function (param) { return ":".concat(param); },
    "\\]": function () { return ""; },
};
/**
 * @param routes - The routes to prioritize
 *
 * @return An array of sorted
 * routes based on their priority
 */
var prioritize = function (routes) {
    return routes.sort(function (a, b) {
        return a.priority - b.priority;
    });
};
/**
 * The smaller the number the higher the priority with zero indicating
 * highest priority
 *
 * @param path - The path to calculate the priority for
 *
 * @return An integer ranging from `0` to `Infinity`
 */
function calculatePriority(path) {
    var _a, _b, _c;
    var depth = ((_a = path.match(/\/.+?/g)) === null || _a === void 0 ? void 0 : _a.length) || 0;
    var specifity = ((_b = path.match(/\/:.+?/g)) === null || _b === void 0 ? void 0 : _b.length) || 0;
    var catchall = (((_c = path.match(/\/\*/g)) === null || _c === void 0 ? void 0 : _c.length) || 0) > 0 ? Infinity : 0;
    return depth + specifity + catchall;
}
function matchMethod(method, configMethod) {
    if (!configMethod || configMethod === "USE" || configMethod === "ALL") {
        return true;
    }
    else if (Array.isArray(configMethod)) {
        return (configMethod.includes(method) ||
            configMethod.includes("ALL") ||
            configMethod.includes("USE"));
    }
    else {
        return method === configMethod;
    }
}
/**
 * Function that looks though the global middlewares and returns the first
 * complete match for the given path and method.
 *
 * @param path - The path to match
 * @param method - The method to match
 * @param routes - The routes to match against
 * @returns The first complete match or undefined if no match is found
 */
function findMatch(path, method, routes) {
    var e_1, _a;
    try {
        for (var routes_1 = __values(routes), routes_1_1 = routes_1.next(); !routes_1_1.done; routes_1_1 = routes_1.next()) {
            var route = routes_1_1.value;
            var matcher = route.matcher, configMethod = route.method;
            if (matchMethod(method, configMethod)) {
                var isMatch = false;
                if (typeof matcher === "string") {
                    // Convert wildcard expressions to proper regex for matching entire path
                    // The '.*' will match any character sequence including '/'
                    var regex = new RegExp("^".concat(matcher.split("*").join(".*"), "$"));
                    isMatch = regex.test(path);
                }
                else if (matcher instanceof RegExp) {
                    // Ensure that the regex matches the entire path
                    var match = path.match(matcher);
                    isMatch = match !== null && match[0] === path;
                }
                if (isMatch) {
                    return route; // Return the first complete match
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (routes_1_1 && !routes_1_1.done && (_a = routes_1.return)) _a.call(routes_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return undefined; // Return undefined if no complete match is found
}
/**
 * Returns an array of body parser middlewares that are applied on routes
 * out-of-the-box.
 */
function getBodyParserMiddleware(args) {
    var sizeLimit = args === null || args === void 0 ? void 0 : args.sizeLimit;
    var preserveRawBody = args === null || args === void 0 ? void 0 : args.preserveRawBody;
    return [
        (0, express_1.json)({
            limit: sizeLimit,
            verify: preserveRawBody
                ? function (req, res, buf) {
                    req.rawBody = buf;
                }
                : undefined,
        }),
        (0, express_1.text)({ limit: sizeLimit }),
        (0, express_1.urlencoded)({ limit: sizeLimit, extended: true }),
    ];
}
var RoutesLoader = /** @class */ (function () {
    function RoutesLoader(_a) {
        var _b;
        var app = _a.app, activityId = _a.activityId, rootDir = _a.rootDir, configModule = _a.configModule, _c = _a.excludes, excludes = _c === void 0 ? [] : _c;
        this.routesMap = new Map();
        this.excludes = [
            /\.DS_Store/,
            /(\.ts\.map|\.js\.map|\.d\.ts)/,
            /^_[^/\\]*(\.[^/\\]+)?$/,
        ];
        this.app = app;
        this.router = (0, express_1.Router)();
        this.activityId = activityId;
        this.rootDir = rootDir;
        this.configModule = configModule;
        (_b = this.excludes).push.apply(_b, __spreadArray([], __read((excludes !== null && excludes !== void 0 ? excludes : [])), false));
    }
    /**
     * Validate the route config and display a log info if
     * it should be ignored or skipped.
     *
     * @param {GlobalMiddlewareDescriptor} descriptor
     * @param {MiddlewaresConfig} config
     *
     * @return {void}
     */
    RoutesLoader.prototype.validateMiddlewaresConfig = function (_a) {
        var e_2, _b;
        var _c;
        var config = _a.config;
        if (!(config === null || config === void 0 ? void 0 : config.routes) && !(config === null || config === void 0 ? void 0 : config.errorHandler)) {
            log({
                activityId: this.activityId,
                message: "Empty middleware config. Skipping middleware application.",
            });
            return;
        }
        try {
            for (var _d = __values((_c = config.routes) !== null && _c !== void 0 ? _c : []), _e = _d.next(); !_e.done; _e = _d.next()) {
                var route = _e.value;
                if (!route.matcher) {
                    throw new Error("Route is missing a `matcher` field. The 'matcher' field is required when applying middleware to this route.");
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * Take care of replacing the special path segments
     * to an express specific path segment
     *
     * @param route - The route to parse
     *
     * @example
     * "/admin/orders/[id]/route.ts => "/admin/orders/:id/route.ts"
     */
    RoutesLoader.prototype.parseRoute = function (route) {
        var e_3, _a, e_4, _b;
        var route_ = route;
        try {
            for (var _c = __values(Object.entries(pathSegmentReplacer)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var config = _d.value;
                var _e = __read(config, 2), searchFor = _e[0], replacedByFn = _e[1];
                var replacer = new RegExp(searchFor, "g");
                var matches = __spreadArray([], __read(route_.matchAll(replacer)), false);
                var parameters = new Set();
                try {
                    for (var matches_1 = (e_4 = void 0, __values(matches)), matches_1_1 = matches_1.next(); !matches_1_1.done; matches_1_1 = matches_1.next()) {
                        var match = matches_1_1.value;
                        if ((match === null || match === void 0 ? void 0 : match[1]) && !Number.isInteger(match === null || match === void 0 ? void 0 : match[1])) {
                            if (parameters.has(match === null || match === void 0 ? void 0 : match[1])) {
                                log({
                                    activityId: this.activityId,
                                    message: "Duplicate parameters found in route ".concat(route, " (").concat(match === null || match === void 0 ? void 0 : match[1], ")"),
                                });
                                throw new Error("Duplicate parameters found in route ".concat(route, " (").concat(match === null || match === void 0 ? void 0 : match[1], "). Make sure that all parameters are unique."));
                            }
                            parameters.add(match === null || match === void 0 ? void 0 : match[1]);
                        }
                        route_ = route_.replace(match[0], replacedByFn(match === null || match === void 0 ? void 0 : match[1]));
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (matches_1_1 && !matches_1_1.done && (_b = matches_1.return)) _b.call(matches_1);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                var extension = (0, path_1.extname)(route_);
                if (extension) {
                    route_ = route_.replace(extension, "");
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
        route = route_;
        return route;
    };
    /**
     * Load the file content from a descriptor and retrieve the verbs and handlers
     * to be assigned to the descriptor
     *
     * @return {Promise<void>}
     */
    RoutesLoader.prototype.createRoutesConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, utils_1.promiseAll)(__spreadArray([], __read(this.routesMap.values()), false).map(function (descriptor) { return __awaiter(_this, void 0, void 0, function () {
                            var absolutePath, route;
                            var _this = this;
                            return __generator(this, function (_a) {
                                var _b;
                                switch (_a.label) {
                                    case 0:
                                        absolutePath = descriptor.absolutePath;
                                        route = descriptor.route;
                                        return [4 /*yield*/, (_b = absolutePath, Promise.resolve().then(function () { return __importStar(require(_b)); })).then(function (import_) {
                                                var e_5, _a;
                                                var _b, _c;
                                                var map = _this.routesMap;
                                                var config = {
                                                    routes: [],
                                                    shouldRequireAdminAuth: false,
                                                    shouldRequireCustomerAuth: false,
                                                    shouldAppendCustomer: false,
                                                    shouldAppendAuthCors: false,
                                                };
                                                /**
                                                 * If the developer has not exported the
                                                 * AUTHENTICATE flag we default to true.
                                                 */
                                                var shouldRequireAuth = import_[AUTHTHENTICATE] !== undefined
                                                    ? import_[AUTHTHENTICATE]
                                                    : true;
                                                /**
                                                 * If the developer has not exported the
                                                 * CORS flag we default to true.
                                                 */
                                                var shouldAddCors = import_["CORS"] !== undefined ? import_["CORS"] : true;
                                                if (route.startsWith("/admin")) {
                                                    if (shouldAddCors) {
                                                        config.shouldAppendAdminCors = true;
                                                    }
                                                    if (shouldRequireAuth) {
                                                        config.shouldRequireAdminAuth = true;
                                                    }
                                                }
                                                if (route.startsWith("/store")) {
                                                    config.shouldAppendCustomer = true;
                                                    if (shouldAddCors) {
                                                        config.shouldAppendStoreCors = true;
                                                    }
                                                }
                                                if (route.startsWith("/auth") && shouldAddCors) {
                                                    config.shouldAppendAuthCors = true;
                                                }
                                                if (shouldRequireAuth && route.startsWith("/store/me")) {
                                                    config.shouldRequireCustomerAuth = shouldRequireAuth;
                                                }
                                                var handlers = Object.keys(import_).filter(function (key) {
                                                    /**
                                                     * Filter out any export that is not a function
                                                     */
                                                    return typeof import_[key] === "function";
                                                });
                                                try {
                                                    for (var handlers_1 = __values(handlers), handlers_1_1 = handlers_1.next(); !handlers_1_1.done; handlers_1_1 = handlers_1.next()) {
                                                        var handler = handlers_1_1.value;
                                                        if (types_1.HTTP_METHODS.includes(handler)) {
                                                            (_b = config.routes) === null || _b === void 0 ? void 0 : _b.push({
                                                                method: handler,
                                                                handler: import_[handler],
                                                            });
                                                        }
                                                        else {
                                                            log({
                                                                activityId: _this.activityId,
                                                                message: "Skipping handler ".concat(handler, " in ").concat(absolutePath, ". Invalid HTTP method: ").concat(handler, "."),
                                                            });
                                                        }
                                                    }
                                                }
                                                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                                                finally {
                                                    try {
                                                        if (handlers_1_1 && !handlers_1_1.done && (_a = handlers_1.return)) _a.call(handlers_1);
                                                    }
                                                    finally { if (e_5) throw e_5.error; }
                                                }
                                                if (!((_c = config.routes) === null || _c === void 0 ? void 0 : _c.length)) {
                                                    log({
                                                        activityId: _this.activityId,
                                                        message: "No valid route handlers detected in ".concat(absolutePath, ". Skipping route configuration."),
                                                    });
                                                    map.delete(absolutePath);
                                                    return;
                                                }
                                                descriptor.config = config;
                                                map.set(absolutePath, descriptor);
                                            })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RoutesLoader.prototype.createRoutesDescriptor = function (_a) {
        var childPath = _a.childPath, parentPath = _a.parentPath;
        var descriptor = {
            absolutePath: childPath,
            relativePath: "",
            route: "",
            priority: Infinity,
        };
        if (parentPath) {
            childPath = childPath.replace(parentPath, "");
        }
        descriptor.relativePath = childPath;
        var routeToParse = childPath;
        var pathSegments = childPath.split(path_1.sep);
        var lastSegment = pathSegments[pathSegments.length - 1];
        if (lastSegment.startsWith("route")) {
            pathSegments.pop();
            routeToParse = pathSegments.join("/");
        }
        descriptor.route = this.parseRoute(routeToParse);
        descriptor.priority = calculatePriority(descriptor.route);
        this.routesMap.set(childPath, descriptor);
    };
    RoutesLoader.prototype.createMiddlewaresDescriptor = function (_a) {
        var dirPath = _a.dirPath;
        return __awaiter(this, void 0, void 0, function () {
            var files, middlewareFilePath, absolutePath, error_1;
            var _this = this;
            return __generator(this, function (_b) {
                var _c;
                switch (_b.label) {
                    case 0: return [4 /*yield*/, (0, promises_1.readdir)(dirPath)];
                    case 1:
                        files = _b.sent();
                        middlewareFilePath = files
                            .filter(function (path) {
                            if (_this.excludes.length &&
                                _this.excludes.some(function (exclude) { return exclude.test(path); })) {
                                return false;
                            }
                            return true;
                        })
                            .find(function (file) {
                            return file.replace(/\.[^/.]+$/, "") === MIDDLEWARES_NAME;
                        });
                        if (!middlewareFilePath) {
                            log({
                                activityId: this.activityId,
                                message: "No middleware files found in ".concat(dirPath, ". Skipping middleware configuration."),
                            });
                            return [2 /*return*/];
                        }
                        absolutePath = (0, path_1.join)(dirPath, middlewareFilePath);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, (_c = absolutePath, Promise.resolve().then(function () { return __importStar(require(_c)); })).then(function (import_) {
                                var _a;
                                var middlewaresConfig = import_.config;
                                if (!middlewaresConfig) {
                                    log({
                                        activityId: _this.activityId,
                                        message: "No middleware configuration found in ".concat(absolutePath, ". Skipping middleware configuration."),
                                    });
                                    return;
                                }
                                middlewaresConfig.routes = (_a = middlewaresConfig.routes) === null || _a === void 0 ? void 0 : _a.map(function (route) {
                                    var _a;
                                    return __assign(__assign({}, route), { method: (_a = route.method) !== null && _a !== void 0 ? _a : "USE" });
                                });
                                var descriptor = {
                                    config: middlewaresConfig,
                                };
                                _this.validateMiddlewaresConfig(descriptor);
                                _this.globalMiddlewaresDescriptor = descriptor;
                            })];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        log({
                            activityId: this.activityId,
                            message: "Failed to load middleware configuration in ".concat(absolutePath, ". Skipping middleware configuration."),
                        });
                        return [2 /*return*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RoutesLoader.prototype.createRoutesMap = function (_a) {
        var dirPath = _a.dirPath, parentPath = _a.parentPath;
        return __awaiter(this, void 0, void 0, function () {
            var _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = utils_1.promiseAll;
                        return [4 /*yield*/, (0, promises_1.readdir)(dirPath, { withFileTypes: true }).then(function (entries) {
                                return entries
                                    .filter(function (entry) {
                                    if (_this.excludes.length &&
                                        _this.excludes.some(function (exclude) { return exclude.test(entry.name); })) {
                                        return false;
                                    }
                                    var name = entry.name;
                                    var extension = (0, path_1.extname)(name);
                                    if (extension) {
                                        name = name.replace(extension, "");
                                    }
                                    if (entry.isFile() && name !== ROUTE_NAME) {
                                        return false;
                                    }
                                    return true;
                                })
                                    .map(function (entry) { return __awaiter(_this, void 0, void 0, function () {
                                    var childPath;
                                    return __generator(this, function (_a) {
                                        childPath = (0, path_1.join)(dirPath, entry.name);
                                        if (entry.isDirectory()) {
                                            return [2 /*return*/, this.createRoutesMap({
                                                    dirPath: childPath,
                                                    parentPath: parentPath !== null && parentPath !== void 0 ? parentPath : dirPath,
                                                })];
                                        }
                                        return [2 /*return*/, this.createRoutesDescriptor({
                                                childPath: childPath,
                                                parentPath: parentPath,
                                            })];
                                    });
                                }); })
                                    .flat(Infinity);
                            })];
                    case 1: return [4 /*yield*/, _b.apply(void 0, [_c.sent()])];
                    case 2:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Apply the most specific body parser middleware to the router
     */
    RoutesLoader.prototype.applyBodyParserMiddleware = function (path, method) {
        var _a, _b;
        var _c, _d, _e;
        var middlewareDescriptor = this.globalMiddlewaresDescriptor;
        var mostSpecificConfig = findMatch(path, method, (_d = (_c = middlewareDescriptor === null || middlewareDescriptor === void 0 ? void 0 : middlewareDescriptor.config) === null || _c === void 0 ? void 0 : _c.routes) !== null && _d !== void 0 ? _d : []);
        if (!mostSpecificConfig || (mostSpecificConfig === null || mostSpecificConfig === void 0 ? void 0 : mostSpecificConfig.bodyParser) === undefined) {
            (_a = this.router)[method.toLowerCase()].apply(_a, __spreadArray([path], __read(getBodyParserMiddleware()), false));
            return;
        }
        if (mostSpecificConfig === null || mostSpecificConfig === void 0 ? void 0 : mostSpecificConfig.bodyParser) {
            var sizeLimit = (_e = mostSpecificConfig === null || mostSpecificConfig === void 0 ? void 0 : mostSpecificConfig.bodyParser) === null || _e === void 0 ? void 0 : _e.sizeLimit;
            (_b = this.router)[method.toLowerCase()].apply(_b, __spreadArray([path], __read(getBodyParserMiddleware(mostSpecificConfig === null || mostSpecificConfig === void 0 ? void 0 : mostSpecificConfig.bodyParser)), false));
            return;
        }
        return;
    };
    /**
     * Apply the route specific middlewares to the router,
     * this includes the cors, authentication and
     * body parsing. These are applied first to ensure
     * that they are applied before any other middleware.
     */
    RoutesLoader.prototype.applyRouteSpecificMiddlewares = function () {
        var e_6, _a, e_7, _b;
        var _c, _d;
        var prioritizedRoutes = prioritize(__spreadArray([], __read(this.routesMap.values()), false));
        try {
            for (var prioritizedRoutes_1 = __values(prioritizedRoutes), prioritizedRoutes_1_1 = prioritizedRoutes_1.next(); !prioritizedRoutes_1_1.done; prioritizedRoutes_1_1 = prioritizedRoutes_1.next()) {
                var descriptor = prioritizedRoutes_1_1.value;
                if (!((_d = (_c = descriptor.config) === null || _c === void 0 ? void 0 : _c.routes) === null || _d === void 0 ? void 0 : _d.length)) {
                    continue;
                }
                var routes = descriptor.config.routes;
                /**
                 * Apply default store and admin middlewares if
                 * not opted out of.
                 */
                if (descriptor.config.shouldAppendAdminCors) {
                    /**
                     * Apply the admin cors
                     */
                    this.router.use(descriptor.route, (0, cors_1.default)({
                        origin: (0, medusa_core_utils_1.parseCorsOrigins)(this.configModule.projectConfig.admin_cors || ""),
                        credentials: true,
                    }));
                }
                if (descriptor.config.shouldAppendAuthCors) {
                    /**
                     * Apply the auth cors
                     */
                    this.router.use(descriptor.route, (0, cors_1.default)({
                        origin: (0, medusa_core_utils_1.parseCorsOrigins)(this.configModule.projectConfig.auth_cors || ""),
                        credentials: true,
                    }));
                }
                if (descriptor.config.shouldAppendStoreCors) {
                    /**
                     * Apply the store cors
                     */
                    this.router.use(descriptor.route, (0, cors_1.default)({
                        origin: (0, medusa_core_utils_1.parseCorsOrigins)(this.configModule.projectConfig.store_cors || ""),
                        credentials: true,
                    }));
                }
                if (descriptor.config.shouldAppendCustomer) {
                    /**
                     * Add the customer to the request object
                     */
                    this.router.use(descriptor.route, (0, middlewares_1.authenticateCustomer)());
                }
                if (descriptor.config.shouldRequireCustomerAuth) {
                    /**
                     * Require the customer to be authenticated
                     */
                    this.router.use(descriptor.route, (0, middlewares_1.requireCustomerAuthentication)());
                }
                if (descriptor.config.shouldRequireAdminAuth) {
                    /**
                     * Require the admin to be authenticated
                     */
                    this.router.use(descriptor.route, (0, middlewares_1.authenticate)());
                }
                try {
                    for (var routes_2 = (e_7 = void 0, __values(routes)), routes_2_1 = routes_2.next(); !routes_2_1.done; routes_2_1 = routes_2.next()) {
                        var route = routes_2_1.value;
                        /**
                         * Apply the body parser middleware if the route
                         * has not opted out of it.
                         */
                        this.applyBodyParserMiddleware(descriptor.route, route.method);
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (routes_2_1 && !routes_2_1.done && (_b = routes_2.return)) _b.call(routes_2);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (prioritizedRoutes_1_1 && !prioritizedRoutes_1_1.done && (_a = prioritizedRoutes_1.return)) _a.call(prioritizedRoutes_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
    };
    /**
     * Apply the error handler middleware to the router
     */
    RoutesLoader.prototype.applyErrorHandlerMiddleware = function () {
        var _a;
        var middlewareDescriptor = this.globalMiddlewaresDescriptor;
        var errorHandlerFn = (_a = middlewareDescriptor === null || middlewareDescriptor === void 0 ? void 0 : middlewareDescriptor.config) === null || _a === void 0 ? void 0 : _a.errorHandler;
        /**
         * If the user has opted out of the error handler then return
         */
        if (errorHandlerFn === false) {
            return;
        }
        /**
         * If the user has provided a custom error handler then use it
         */
        if (errorHandlerFn) {
            this.router.use(errorHandlerFn);
            return;
        }
        /**
         * If the user has not provided a custom error handler then use the
         * default one.
         */
        this.router.use((0, middlewares_1.errorHandler)());
    };
    RoutesLoader.prototype.registerRoutes = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var middlewareDescriptor, shouldWrapHandler, prioritizedRoutes, prioritizedRoutes_2, prioritizedRoutes_2_1, descriptor, routes, routes_3, routes_3_1, route, handler;
            var e_8, _d, e_9, _e;
            return __generator(this, function (_f) {
                middlewareDescriptor = this.globalMiddlewaresDescriptor;
                shouldWrapHandler = (middlewareDescriptor === null || middlewareDescriptor === void 0 ? void 0 : middlewareDescriptor.config)
                    ? middlewareDescriptor.config.errorHandler !== false
                    : true;
                prioritizedRoutes = prioritize(__spreadArray([], __read(this.routesMap.values()), false));
                try {
                    for (prioritizedRoutes_2 = __values(prioritizedRoutes), prioritizedRoutes_2_1 = prioritizedRoutes_2.next(); !prioritizedRoutes_2_1.done; prioritizedRoutes_2_1 = prioritizedRoutes_2.next()) {
                        descriptor = prioritizedRoutes_2_1.value;
                        if (!((_b = (_a = descriptor.config) === null || _a === void 0 ? void 0 : _a.routes) === null || _b === void 0 ? void 0 : _b.length)) {
                            continue;
                        }
                        routes = descriptor.config.routes;
                        try {
                            for (routes_3 = (e_9 = void 0, __values(routes)), routes_3_1 = routes_3.next(); !routes_3_1.done; routes_3_1 = routes_3.next()) {
                                route = routes_3_1.value;
                                log({
                                    activityId: this.activityId,
                                    message: "Registering route [".concat((_c = route.method) === null || _c === void 0 ? void 0 : _c.toUpperCase(), "] - ").concat(descriptor.route),
                                });
                                handler = shouldWrapHandler
                                    ? (0, utils_1.wrapHandler)(route.handler)
                                    : route.handler;
                                this.router[route.method.toLowerCase()](descriptor.route, handler);
                            }
                        }
                        catch (e_9_1) { e_9 = { error: e_9_1 }; }
                        finally {
                            try {
                                if (routes_3_1 && !routes_3_1.done && (_e = routes_3.return)) _e.call(routes_3);
                            }
                            finally { if (e_9) throw e_9.error; }
                        }
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (prioritizedRoutes_2_1 && !prioritizedRoutes_2_1.done && (_d = prioritizedRoutes_2.return)) _d.call(prioritizedRoutes_2);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    RoutesLoader.prototype.registerMiddlewares = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var descriptor, routes, routes_4, routes_4_1, route, methods, methods_1, methods_1_1, method;
            var e_10, _c, e_11, _d, _e;
            return __generator(this, function (_f) {
                descriptor = this.globalMiddlewaresDescriptor;
                if (!descriptor) {
                    return [2 /*return*/];
                }
                if (!((_b = (_a = descriptor.config) === null || _a === void 0 ? void 0 : _a.routes) === null || _b === void 0 ? void 0 : _b.length)) {
                    return [2 /*return*/];
                }
                routes = descriptor.config.routes;
                try {
                    /**
                     * We don't prioritize the middlewares to preserve the order
                     * in which they are defined in the 'middlewares.ts'. This is to
                     * maintain the same behavior as how middleware is applied
                     * in Express.
                     */
                    for (routes_4 = __values(routes), routes_4_1 = routes_4.next(); !routes_4_1.done; routes_4_1 = routes_4.next()) {
                        route = routes_4_1.value;
                        if (!route.middlewares || !route.middlewares.length) {
                            continue;
                        }
                        methods = (Array.isArray(route.method) ? route.method : [route.method]).filter(Boolean);
                        try {
                            for (methods_1 = (e_11 = void 0, __values(methods)), methods_1_1 = methods_1.next(); !methods_1_1.done; methods_1_1 = methods_1.next()) {
                                method = methods_1_1.value;
                                log({
                                    activityId: this.activityId,
                                    message: "Registering middleware [".concat(method, "] - ").concat(route.matcher),
                                });
                                (_e = this.router)[method.toLowerCase()].apply(_e, __spreadArray([route.matcher], __read(route.middlewares), false));
                            }
                        }
                        catch (e_11_1) { e_11 = { error: e_11_1 }; }
                        finally {
                            try {
                                if (methods_1_1 && !methods_1_1.done && (_d = methods_1.return)) _d.call(methods_1);
                            }
                            finally { if (e_11) throw e_11.error; }
                        }
                    }
                }
                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                finally {
                    try {
                        if (routes_4_1 && !routes_4_1.done && (_c = routes_4.return)) _c.call(routes_4);
                    }
                    finally { if (e_10) throw e_10.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    RoutesLoader.prototype.load = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var apiExists, _error_1, timeSpent;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        performance && performance.mark("file-base-routing-start" + this.rootDir);
                        apiExists = true;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, (0, promises_1.readdir)(this.rootDir)];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _error_1 = _c.sent();
                        apiExists = false;
                        return [3 /*break*/, 4];
                    case 4:
                        if (!apiExists) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.createMiddlewaresDescriptor({ dirPath: this.rootDir })];
                    case 5:
                        _c.sent();
                        return [4 /*yield*/, this.createRoutesMap({ dirPath: this.rootDir })];
                    case 6:
                        _c.sent();
                        return [4 /*yield*/, this.createRoutesConfig()];
                    case 7:
                        _c.sent();
                        this.applyRouteSpecificMiddlewares();
                        return [4 /*yield*/, this.registerMiddlewares()];
                    case 8:
                        _c.sent();
                        return [4 /*yield*/, this.registerRoutes()];
                    case 9:
                        _c.sent();
                        this.applyErrorHandlerMiddleware();
                        /**
                         * Apply the router to the app.
                         *
                         * This prevents middleware from a plugin from
                         * bleeding into the global middleware stack.
                         */
                        this.app.use("/", this.router);
                        _c.label = 10;
                    case 10:
                        performance && performance.mark("file-base-routing-end" + this.rootDir);
                        timeSpent = performance &&
                            ((_b = (_a = performance
                                .measure("file-base-routing-measure" + this.rootDir, "file-base-routing-start" + this.rootDir, "file-base-routing-end" + this.rootDir)) === null || _a === void 0 ? void 0 : _a.duration) === null || _b === void 0 ? void 0 : _b.toFixed(2));
                        log({
                            activityId: this.activityId,
                            message: "Routes loaded in ".concat(timeSpent, " ms"),
                        });
                        this.routesMap.clear();
                        this.globalMiddlewaresDescriptor = undefined;
                        return [2 /*return*/];
                }
            });
        });
    };
    return RoutesLoader;
}());
exports.RoutesLoader = RoutesLoader;
exports.default = RoutesLoader;
//# sourceMappingURL=index.js.map