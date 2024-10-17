"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerServices = exports.registerStrategies = exports.registerPluginModels = exports.MEDUSA_PROJECT_NAME = exports.isSearchEngineInstalledResolutionKey = void 0;
var utils_1 = require("@medusajs/utils");
var awilix_1 = require("awilix");
var glob_1 = __importDefault(require("glob"));
var medusa_interfaces_1 = require("medusa-interfaces");
var medusa_telemetry_1 = require("medusa-telemetry");
var os_1 = require("os");
var path_1 = __importDefault(require("path"));
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var format_registration_name_1 = require("../utils/format-registration-name");
var get_model_extension_map_1 = require("./helpers/get-model-extension-map");
var jobs_1 = __importDefault(require("./helpers/jobs"));
var plugins_1 = require("./helpers/plugins");
var resolve_plugins_1 = require("./helpers/resolve-plugins");
var routing_1 = require("./helpers/routing");
var subscribers_1 = require("./helpers/subscribers");
var logger_1 = __importDefault(require("./logger"));
exports.isSearchEngineInstalledResolutionKey = "isSearchEngineInstalled";
exports.MEDUSA_PROJECT_NAME = "project-plugin";
/**
 * Registers all services in the services directory
 */
exports.default = (function (_a) {
    var rootDirectory = _a.rootDirectory, container = _a.container, app = _a.app, configModule = _a.configModule, activityId = _a.activityId;
    return __awaiter(void 0, void 0, void 0, function () {
        var resolved;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    resolved = (0, resolve_plugins_1.getResolvedPlugins)(rootDirectory, configModule) || [];
                    return [4 /*yield*/, (0, utils_1.promiseAll)(resolved.map(function (pluginDetails) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, runSetupFunctions(pluginDetails)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, (0, utils_1.promiseAll)(resolved.map(function (pluginDetails) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        registerRepositories(pluginDetails, container);
                                        return [4 /*yield*/, registerServices(pluginDetails, container)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, registerMedusaApi(pluginDetails, container)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, registerApi(pluginDetails, app, rootDirectory, container, configModule, activityId)];
                                    case 3:
                                        _a.sent();
                                        registerCoreRouters(pluginDetails, container);
                                        return [4 /*yield*/, registerSubscribers(pluginDetails, container, activityId)];
                                    case 4:
                                        _a.sent();
                                        return [4 /*yield*/, registerWorkflows(pluginDetails)];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _b.sent();
                    return [4 /*yield*/, (0, utils_1.promiseAll)(resolved.map(function (pluginDetails) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, runLoaders(pluginDetails, container)];
                        }); }); }))];
                case 3:
                    _b.sent();
                    if (!configModule.projectConfig.redis_url) return [3 /*break*/, 5];
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
                case 4:
                    _b.sent();
                    return [3 /*break*/, 6];
                case 5:
                    logger_1.default.warn("You don't have Redis configured. Scheduled jobs will not be enabled.");
                    _b.label = 6;
                case 6:
                    resolved.forEach(function (plugin) { return (0, medusa_telemetry_1.trackInstallation)(plugin.name, "plugin"); });
                    return [2 /*return*/];
            }
        });
    });
});
function registerPluginModels(_a) {
    var rootDirectory = _a.rootDirectory, container = _a.container, configModule = _a.configModule, _b = _a.extensionDirectoryPath, extensionDirectoryPath = _b === void 0 ? "dist" : _b, _c = _a.pathGlob, pathGlob = _c === void 0 ? "/models/*.js" : _c;
    return __awaiter(this, void 0, void 0, function () {
        var resolved;
        var _this = this;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    resolved = (0, resolve_plugins_1.getResolvedPlugins)(rootDirectory, configModule, extensionDirectoryPath) ||
                        [];
                    return [4 /*yield*/, (0, utils_1.promiseAll)(resolved.map(function (pluginDetails) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                registerModels(pluginDetails, container, rootDirectory, pathGlob);
                                return [2 /*return*/];
                            });
                        }); }))];
                case 1:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.registerPluginModels = registerPluginModels;
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
function registerMedusaApi(pluginDetails, container) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            registerMedusaMiddleware(pluginDetails, container);
            registerStrategies(pluginDetails, container);
            return [2 /*return*/];
        });
    });
}
function registerStrategies(pluginDetails, container) {
    var files = glob_1.default.sync("".concat(pluginDetails.resolve, "/strategies/[!__]*.js"), {
        ignore: ["**/__fixtures__/**", "**/index.js", "**/index.ts"],
    });
    var registeredServices = {};
    files.map(function (file) {
        var _a;
        var module = require(file).default;
        switch (true) {
            case interfaces_1.AbstractTaxCalculationStrategy.isTaxCalculationStrategy(module.prototype):
                {
                    if (!("taxCalculationStrategy" in registeredServices)) {
                        container.register({
                            taxCalculationStrategy: (0, awilix_1.asFunction)(function (cradle) { return new module(cradle, pluginDetails.options); }).singleton(),
                        });
                        registeredServices["taxCalculationStrategy"] = file;
                    }
                    else {
                        logger_1.default.warn("Cannot register ".concat(file, ". A tax calculation strategy is already registered"));
                    }
                    break;
                }
            case interfaces_1.AbstractCartCompletionStrategy.isCartCompletionStrategy(module.prototype):
                {
                    if (!("cartCompletionStrategy" in registeredServices)) {
                        container.register({
                            cartCompletionStrategy: (0, awilix_1.asFunction)(function (cradle) { return new module(cradle, pluginDetails.options); }).singleton(),
                        });
                        registeredServices["cartCompletionStrategy"] = file;
                    }
                    else {
                        logger_1.default.warn("Cannot register ".concat(file, ". A cart completion strategy is already registered"));
                    }
                    break;
                }
            case interfaces_1.AbstractBatchJobStrategy.isBatchJobStrategy(module.prototype): {
                container.registerAdd("batchJobStrategies", (0, awilix_1.asFunction)(function (cradle) { return new module(cradle, pluginDetails.options); }));
                var name_1 = (0, format_registration_name_1.formatRegistrationName)(file);
                container.register((_a = {},
                    _a[name_1] = (0, awilix_1.asFunction)(function (cradle) { return new module(cradle, pluginDetails.options); }).singleton(),
                    _a["batch_".concat(module.identifier)] = (0, awilix_1.aliasTo)(name_1),
                    _a["batchType_".concat(module.batchType)] = (0, awilix_1.aliasTo)(name_1),
                    _a));
                break;
            }
            case interfaces_1.AbstractPriceSelectionStrategy.isPriceSelectionStrategy(module.prototype):
                {
                    if (!("priceSelectionStrategy" in registeredServices)) {
                        container.register({
                            priceSelectionStrategy: (0, awilix_1.asFunction)(function (cradle) { return new module(cradle, pluginDetails.options); }).singleton(),
                        });
                        registeredServices["priceSelectionStrategy"] = file;
                    }
                    else {
                        logger_1.default.warn("Cannot register ".concat(file, ". A price selection strategy is already registered"));
                    }
                    break;
                }
            default:
                logger_1.default.warn("".concat(file, " did not export a class that implements a strategy interface. Your Medusa server will still work, but if you have written custom strategy logic it will not be used. Make sure to implement the proper interface."));
        }
    });
}
exports.registerStrategies = registerStrategies;
function registerMedusaMiddleware(pluginDetails, container) {
    var module;
    try {
        module = require("".concat(pluginDetails.resolve, "/api/medusa-middleware")).default;
    }
    catch (err) {
        return;
    }
    var middlewareService = container.resolve("middlewareService");
    if (module.postAuthentication) {
        middlewareService.addPostAuthentication(module.postAuthentication, pluginDetails.options);
    }
    if (module.preAuthentication) {
        middlewareService.addPreAuthentication(module.preAuthentication, pluginDetails.options);
    }
    if (module.preCartCreation) {
        middlewareService.addPreCartCreation(module.preCartCreation);
    }
}
function registerCoreRouters(pluginDetails, container) {
    var middlewareService = container.resolve("middlewareService");
    var resolve = pluginDetails.resolve;
    var adminFiles = glob_1.default.sync("".concat(resolve, "/api/admin/[!__]*.js"), {});
    var storeFiles = glob_1.default.sync("".concat(resolve, "/api/store/[!__]*.js"), {});
    adminFiles.forEach(function (fn) {
        var descriptor = fn.split(".")[0];
        var splat = descriptor.split("/");
        var path = "".concat(splat[splat.length - 2], "/").concat(splat[splat.length - 1]);
        var loaded = require(fn).default;
        if (loaded && typeof loaded === "function") {
            middlewareService.addRouter(path, loaded());
        }
    });
    storeFiles.forEach(function (fn) {
        var descriptor = fn.split(".")[0];
        var splat = descriptor.split("/");
        var path = "".concat(splat[splat.length - 2], "/").concat(splat[splat.length - 1]);
        var loaded = require(fn).default;
        if (loaded && typeof loaded === "function") {
            middlewareService.addRouter(path, loaded());
        }
    });
}
/**
 * Registers the plugin's api routes.
 */
function registerApi(pluginDetails, app, rootDirectory, container, configmodule, activityId) {
    if (rootDirectory === void 0) { rootDirectory = ""; }
    return __awaiter(this, void 0, void 0, function () {
        var logger, projectName, err_2, apiFolderExists, routes;
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
                case 4:
                    try {
                        apiFolderExists = true;
                        try {
                            require.resolve("".concat(pluginDetails.resolve, "/api"));
                        }
                        catch (e) {
                            apiFolderExists = false;
                        }
                        if (apiFolderExists) {
                            routes = require("".concat(pluginDetails.resolve, "/api")).default;
                            if (routes) {
                                app.use("/", routes(rootDirectory, pluginDetails.options));
                            }
                        }
                    }
                    catch (err) {
                        if (err.code !== "MODULE_NOT_FOUND") {
                            logger.warn("An error occurred while registering endpoints in ".concat(projectName));
                            if (err.stack) {
                                logger.warn("".concat(err.stack));
                            }
                        }
                    }
                    return [2 /*return*/, app];
            }
        });
    });
}
/**
 * Registers a service at the right location in our container.
 * PaymentService instances are added to the paymentProviders array in the
 * container. Names are camelCase formatted and namespaced by the folder i.e:
 * services/example-payments -> examplePaymentsService
 * @param {object} pluginDetails - the plugin details including plugin options,
 *    version, id, resolved path, etc. See resolvePlugin
 * @param {object} container - the container where the services will be
 *    registered
 * @return {void}
 */
function registerServices(pluginDetails, container) {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    files = glob_1.default.sync("".concat(pluginDetails.resolve, "/services/[!__]*.js"), {});
                    return [4 /*yield*/, (0, utils_1.promiseAll)(files.map(function (fn) { return __awaiter(_this, void 0, void 0, function () {
                            var loaded, name, context, appDetails, oauthService, name_2;
                            var _a, _b, _c, _d, _e, _f;
                            return __generator(this, function (_g) {
                                switch (_g.label) {
                                    case 0:
                                        loaded = require(fn).default;
                                        name = (0, format_registration_name_1.formatRegistrationName)(fn);
                                        if (typeof loaded !== "function") {
                                            throw new Error("Cannot register ".concat(name, ". Make sure to default export a service class in ").concat(fn));
                                        }
                                        context = { container: container, pluginDetails: pluginDetails, registrationName: name };
                                        (0, plugins_1.registerPaymentProcessorFromClass)(loaded, context);
                                        (0, plugins_1.registerAbstractFulfillmentServiceFromClass)(loaded, context);
                                        if (!medusa_interfaces_1.OauthService.isOauthService(loaded.prototype)) return [3 /*break*/, 2];
                                        appDetails = loaded.getAppDetails(pluginDetails.options);
                                        oauthService = container.resolve("oauthService");
                                        return [4 /*yield*/, oauthService.registerOauthApp(appDetails)];
                                    case 1:
                                        _g.sent();
                                        name_2 = appDetails.application_name;
                                        container.register((_a = {},
                                            _a["".concat(name_2, "Oauth")] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }, {
                                                lifetime: loaded.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
                                            }),
                                            _a));
                                        return [3 /*break*/, 3];
                                    case 2:
                                        if (interfaces_1.AbstractNotificationService.isNotificationService(loaded.prototype)) {
                                            container.registerAdd("notificationProviders", (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }, {
                                                lifetime: loaded.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
                                            }));
                                            // Add the service directly to the container in order to make simple
                                            // resolution if we already know which notification provider we need to use
                                            container.register((_b = {},
                                                _b[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }, {
                                                    lifetime: loaded.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
                                                }),
                                                _b["noti_".concat(loaded.identifier)] = (0, awilix_1.aliasTo)(name),
                                                _b));
                                        }
                                        else if (interfaces_1.AbstractFileService.isFileService(loaded.prototype)) {
                                            // Add the service directly to the container in order to make simple
                                            // resolution if we already know which file storage provider we need to use
                                            container.register((_c = {},
                                                _c[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }, {
                                                    lifetime: loaded.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
                                                }),
                                                _c["fileService"] = (0, awilix_1.aliasTo)(name),
                                                _c));
                                        }
                                        else if (utils_1.AbstractSearchService.isSearchService(loaded.prototype)) {
                                            // Add the service directly to the container in order to make simple
                                            // resolution if we already know which search provider we need to use
                                            container.register((_d = {},
                                                _d[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }, {
                                                    lifetime: loaded.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
                                                }),
                                                _d["searchService"] = (0, awilix_1.aliasTo)(name),
                                                _d));
                                            container.register(exports.isSearchEngineInstalledResolutionKey, (0, awilix_1.asValue)(true));
                                        }
                                        else if (interfaces_1.AbstractTaxService.isTaxService(loaded.prototype)) {
                                            container.registerAdd("taxProviders", (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }, {
                                                lifetime: loaded.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
                                            }));
                                            container.register((_e = {},
                                                _e[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }, {
                                                    lifetime: loaded.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
                                                }),
                                                _e["tp_".concat(loaded.identifier)] = (0, awilix_1.aliasTo)(name),
                                                _e));
                                        }
                                        else {
                                            container.register((_f = {},
                                                _f[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }, {
                                                    lifetime: loaded.LIFE_TIME || awilix_1.Lifetime.SCOPED,
                                                }),
                                                _f));
                                        }
                                        _g.label = 3;
                                    case 3: return [2 /*return*/];
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
exports.registerServices = registerServices;
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
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var loadedFiles, normalizedLoadedFiles, files;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, new subscribers_1.SubscriberLoader(path_1.default.join(pluginDetails.resolve, "subscribers"), container, pluginDetails.options, activityId).load()
                    /**
                     * Exclude any files that have already been loaded by the subscriber loader
                     */
                ];
                case 1:
                    loadedFiles = _b.sent();
                    normalizedLoadedFiles = (_a = loadedFiles === null || loadedFiles === void 0 ? void 0 : loadedFiles.map(function (file) { return file.replace(/\\/g, "/"); })) !== null && _a !== void 0 ? _a : [];
                    files = glob_1.default.sync("".concat(pluginDetails.resolve, "/subscribers/*.js"), {});
                    files
                        .filter(function (file) { return !normalizedLoadedFiles.includes(file); })
                        .forEach(function (fn) {
                        var loaded = require(fn).default;
                        container.build((0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }).singleton());
                    });
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Registers a plugin's repositories at the right location in our container.
 * repositories are registered directly in the container.
 * @param {object} pluginDetails - the plugin details including plugin options,
 *    version, id, resolved path, etc. See resolvePlugin
 * @param {object} container - the container where the services will be
 *    registered
 * @return {void}
 */
function registerRepositories(pluginDetails, container) {
    var files = glob_1.default.sync("".concat(pluginDetails.resolve, "/repositories/*.js"), {});
    files.forEach(function (fn) {
        var loaded = require(fn);
        Object.entries(loaded).map(function (_a) {
            var _b;
            var _c = __read(_a, 2), val = _c[1];
            if (typeof loaded === "object") {
                var name_3 = (0, format_registration_name_1.formatRegistrationName)(fn);
                container.register((_b = {},
                    _b[name_3] = (0, awilix_1.asValue)(val),
                    _b));
            }
        });
    });
}
/**
 * import files from the workflows directory to run the registration of the wofklows
 * @param pluginDetails
 */
function registerWorkflows(pluginDetails) {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    files = glob_1.default.sync("".concat(pluginDetails.resolve, "/workflows/*.js"), {});
                    return [4 /*yield*/, Promise.all(files.map(function (file) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            var _b;
                            return [2 /*return*/, (_b = file, Promise.resolve().then(function () { return __importStar(require(_b)); }))];
                        }); }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * Registers a plugin's models at the right location in our container. Models
 * must inherit from BaseModel. Models are registered directly in the container.
 * Names are camelCase formatted and namespaced by the folder i.e:
 * models/example-person -> examplePersonModel
 * @param {object} pluginDetails - the plugin details including plugin options,
 *    version, id, resolved path, etc. See resolvePlugin
 * @param {object} container - the container where the services will be
 *    registered
 * @param rootDirectory
 * @param pathGlob
 * @return {void}
 */
function registerModels(pluginDetails, container, rootDirectory, pathGlob) {
    if (pathGlob === void 0) { pathGlob = "/models/*.js"; }
    var pluginFullPathGlob = path_1.default.join(pluginDetails.resolve, pathGlob);
    var modelExtensionsMap = (0, get_model_extension_map_1.getModelExtensionsMap)({
        directory: pluginDetails.resolve,
        pathGlob: pathGlob,
        config: { register: true },
    });
    var pluginModels = glob_1.default.sync(pluginFullPathGlob, {
        ignore: ["index.js", "index.js.map"],
    });
    var coreModelsFullGlob = path_1.default.join(__dirname, "../models/*.js");
    var coreModels = glob_1.default.sync(coreModelsFullGlob, {
        cwd: __dirname,
        ignore: ["index.js", "index.ts", "index.js.map"],
    });
    // Apply the extended models to the core models first to ensure that
    // when relationships are created, the extended models are used
    coreModels.forEach(function (modelPath) {
        var loaded = require(modelPath);
        if (loaded) {
            var name_4 = (0, format_registration_name_1.formatRegistrationName)(modelPath);
            var mappedExtensionModel = modelExtensionsMap.get(name_4);
            if (mappedExtensionModel) {
                var modelName = (0, utils_1.upperCaseFirst)((0, format_registration_name_1.formatRegistrationNameWithoutNamespace)(modelPath));
                loaded[modelName] = mappedExtensionModel;
            }
        }
    });
    pluginModels.forEach(function (coreOrPluginModelPath) {
        var loaded = require(coreOrPluginModelPath);
        if (loaded) {
            Object.entries(loaded).map(function (_a) {
                var _b;
                var _c = __read(_a, 2), val = _c[1];
                if (typeof val === "function" || val instanceof typeorm_1.EntitySchema) {
                    var name_5 = (0, format_registration_name_1.formatRegistrationName)(coreOrPluginModelPath);
                    container.register((_b = {},
                        _b[name_5] = (0, awilix_1.asValue)(val),
                        _b));
                    container.registerAdd("db_entities", (0, awilix_1.asValue)(val));
                }
            });
        }
    });
}
/**
 * Runs all setup functions in a plugin. Setup functions are run before anything from the plugin is
 * registered to the container. This is useful for running custom build logic, fetching remote
 * configurations, etc.
 * @param pluginDetails The plugin details including plugin options, version, id, resolved path, etc.
 */
function runSetupFunctions(pluginDetails) {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    files = glob_1.default.sync("".concat(pluginDetails.resolve, "/setup/*.js"), {});
                    return [4 /*yield*/, (0, utils_1.promiseAll)(files.map(function (fn) { return __awaiter(_this, void 0, void 0, function () {
                            var loaded, err_3;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        loaded = require(fn).default;
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, loaded()];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        err_3 = _a.sent();
                                        throw new Error("A setup function from ".concat(pluginDetails.name, " failed. ").concat(err_3));
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
//# sourceMappingURL=plugins.js.map