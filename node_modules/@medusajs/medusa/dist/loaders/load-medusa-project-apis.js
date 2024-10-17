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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MEDUSA_PROJECT_NAME = void 0;
var utils_1 = require("@medusajs/utils");
var glob_1 = __importDefault(require("glob"));
var medusa_telemetry_1 = require("medusa-telemetry");
var os_1 = require("os");
var path_1 = __importDefault(require("path"));
var jobs_1 = __importDefault(require("./helpers/jobs"));
var resolve_plugins_1 = require("./helpers/resolve-plugins");
var routing_1 = require("./helpers/routing");
var subscribers_1 = require("./helpers/subscribers");
var logger_1 = __importDefault(require("./logger"));
exports.MEDUSA_PROJECT_NAME = "project-plugin";
/**
 * Registers all services in the services directory
 */
exports.default = (function (_a) {
    var rootDirectory = _a.rootDirectory, container = _a.container, app = _a.app, configModule = _a.configModule, activityId = _a.activityId;
    return __awaiter(void 0, void 0, void 0, function () {
        var resolved, shouldStartAPI;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    resolved = (0, resolve_plugins_1.getResolvedPlugins)(rootDirectory, configModule) || [];
                    shouldStartAPI = configModule.projectConfig.worker_mode !== "worker";
                    return [4 /*yield*/, (0, utils_1.promiseAll)(resolved.map(function (pluginDetails) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!shouldStartAPI) return [3 /*break*/, 2];
                                        return [4 /*yield*/, registerApi(pluginDetails, app, container, configModule, activityId)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [4 /*yield*/, registerSubscribers(pluginDetails, container, activityId)];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, (0, utils_1.promiseAll)(resolved.map(function (pluginDetails) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, runLoaders(pluginDetails, container)];
                        }); }); }))];
                case 2:
                    _b.sent();
                    if (!configModule.projectConfig.redis_url) return [3 /*break*/, 4];
                    return [4 /*yield*/, Promise.all(resolved.map(function (pluginDetails) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, registerScheduledJobs(pluginDetails, container)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 5];
                case 4:
                    logger_1.default.warn("You don't have Redis configured. Scheduled jobs will not be enabled.");
                    _b.label = 5;
                case 5:
                    resolved.forEach(function (plugin) { return (0, medusa_telemetry_1.trackInstallation)(plugin.name, "plugin"); });
                    return [2 /*return*/];
            }
        });
    });
});
function runLoaders(pluginDetails, container) {
    return __awaiter(this, void 0, void 0, function () {
        var loaderFiles;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    loaderFiles = glob_1.default.sync("".concat(pluginDetails.resolve, "/loaders/[!__]*.js"), {});
                    return [4 /*yield*/, (0, utils_1.promiseAll)(loaderFiles.map(function (loader) { return __awaiter(_this, void 0, void 0, function () {
                            var module_1, err_1, logger_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 3, , 4]);
                                        module_1 = require(loader).default;
                                        if (!(typeof module_1 === "function")) return [3 /*break*/, 2];
                                        return [4 /*yield*/, module_1(container, pluginDetails.options)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [3 /*break*/, 4];
                                    case 3:
                                        err_1 = _a.sent();
                                        logger_2 = container.resolve("logger");
                                        logger_2.warn("Running loader failed: ".concat(err_1.message));
                                        return [2 /*return*/, Promise.resolve()];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function registerScheduledJobs(pluginDetails, container) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new jobs_1.default(path_1.default.join(pluginDetails.resolve, "jobs"), container, pluginDetails.options).load()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Registers the plugin's api routes.
 */
function registerApi(pluginDetails, app, container, configmodule, activityId) {
    return __awaiter(this, void 0, void 0, function () {
        var logger, projectName, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    logger = container.resolve("logger");
                    projectName = pluginDetails.name === exports.MEDUSA_PROJECT_NAME
                        ? "your Medusa project"
                        : "".concat(pluginDetails.name);
                    logger.progress(activityId, "Registering custom endpoints for ".concat(projectName));
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    /**
                     * Register the plugin's API routes using the file based routing.
                     */
                    return [4 /*yield*/, new routing_1.RoutesLoader({
                            app: app,
                            rootDir: path_1.default.join(pluginDetails.resolve, "api"),
                            activityId: activityId,
                            configModule: configmodule,
                        }).load()];
                case 2:
                    /**
                     * Register the plugin's API routes using the file based routing.
                     */
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _a.sent();
                    logger.warn("An error occurred while registering API Routes in ".concat(projectName).concat(err_2.stack ? os_1.EOL + err_2.stack : ""));
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, app];
            }
        });
    });
}
/**
 * Registers a plugin's subscribers at the right location in our container.
 * Subscribers are registered directly in the container.
 * @param {object} pluginDetails - the plugin details including plugin options,
 *    version, id, resolved path, etc. See resolvePlugin
 * @param {object} container - the container where the services will be
 *    registered
 * @return {void}
 */
function registerSubscribers(pluginDetails, container, activityId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new subscribers_1.SubscriberLoader(path_1.default.join(pluginDetails.resolve, "subscribers"), container, pluginDetails.options, activityId, true).load()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//# sourceMappingURL=load-medusa-project-apis.js.map