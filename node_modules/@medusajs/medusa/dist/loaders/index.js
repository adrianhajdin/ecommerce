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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_flows_1 = require("@medusajs/core-flows");
var modules_sdk_1 = require("@medusajs/modules-sdk");
var types_1 = require("@medusajs/types");
var utils_1 = require("@medusajs/utils");
var awilix_1 = require("awilix");
var medusa_core_utils_1 = require("medusa-core-utils");
var medusa_telemetry_1 = require("medusa-telemetry");
var os_1 = require("os");
var request_ip_1 = __importDefault(require("request-ip"));
var uuid_1 = require("uuid");
var api_1 = __importDefault(require("./api"));
var config_1 = __importDefault(require("./config"));
var database_1 = __importStar(require("./database"));
var defaults_1 = __importDefault(require("./defaults"));
var express_1 = __importDefault(require("./express"));
var feature_flags_1 = __importDefault(require("./feature-flags"));
var register_workflows_1 = require("./helpers/register-workflows");
var load_medusa_project_apis_1 = __importDefault(require("./load-medusa-project-apis"));
var logger_1 = __importDefault(require("./logger"));
var medusa_app_1 = __importStar(require("./medusa-app"));
var models_1 = __importDefault(require("./models"));
var passport_1 = __importDefault(require("./passport"));
var pg_connection_1 = __importDefault(require("./pg-connection"));
var plugins_1 = __importStar(require("./plugins"));
var redis_1 = __importDefault(require("./redis"));
var repositories_1 = __importDefault(require("./repositories"));
var search_index_1 = __importDefault(require("./search-index"));
var services_1 = __importDefault(require("./services"));
var strategies_1 = __importDefault(require("./strategies"));
var subscribers_1 = __importDefault(require("./subscribers"));
function loadLegacyModulesEntities(configModules, container) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var logger, _d, _e, _f, moduleName, moduleConfig, definition, modulePath, resources, module_1, e_1_1;
        var e_1, _g;
        return __generator(this, function (_h) {
            var _j;
            switch (_h.label) {
                case 0:
                    logger = container.resolve(utils_1.ContainerRegistrationKeys.LOGGER);
                    _h.label = 1;
                case 1:
                    _h.trys.push([1, 6, 7, 8]);
                    _d = __values(Object.entries(configModules)), _e = _d.next();
                    _h.label = 2;
                case 2:
                    if (!!_e.done) return [3 /*break*/, 5];
                    _f = __read(_e.value, 2), moduleName = _f[0], moduleConfig = _f[1];
                    definition = modules_sdk_1.ModulesDefinition[moduleName];
                    if (!(definition === null || definition === void 0 ? void 0 : definition.isLegacy)) {
                        return [3 /*break*/, 4];
                    }
                    modulePath = (0, utils_1.isString)(moduleConfig)
                        ? moduleConfig
                        : (_a = moduleConfig.resolve) !== null && _a !== void 0 ? _a : definition.defaultPackage;
                    resources = (0, utils_1.isString)(moduleConfig)
                        ? definition.defaultModuleDeclaration
                            .resources
                        : (_b = moduleConfig.resources) !== null && _b !== void 0 ? _b : definition.defaultModuleDeclaration
                            .resources;
                    if (!(resources === types_1.MODULE_RESOURCE_TYPE.SHARED)) return [3 /*break*/, 4];
                    if (!modulePath) {
                        logger.warn("Unable to load module entities for ".concat(moduleName));
                        return [3 /*break*/, 4];
                    }
                    return [4 /*yield*/, (_j = modulePath, Promise.resolve().then(function () { return __importStar(require(_j)); }))];
                case 3:
                    module_1 = _h.sent();
                    if ((_c = module_1.default) === null || _c === void 0 ? void 0 : _c.models) {
                        module_1.default.models.map(function (model) {
                            return container.registerAdd("db_entities", (0, awilix_1.asValue)(model));
                        });
                    }
                    _h.label = 4;
                case 4:
                    _e = _d.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_1_1 = _h.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (_e && !_e.done && (_g = _d.return)) _g.call(_d);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    });
}
function loadMedusaV2(_a) {
    var rootDirectory = _a.rootDirectory, configModule = _a.configModule, featureFlagRouter = _a.featureFlagRouter, expressApp = _a.expressApp;
    return __awaiter(this, void 0, void 0, function () {
        var container, shouldStartAPI, pgConnection, _b, medusaAppOnApplicationShutdown, medusaAppOnApplicationPrepareShutdown, expressShutdown, shutdown_1, shutdown;
        var _c;
        var _this = this;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    container = (0, medusa_core_utils_1.createMedusaContainer)();
                    shouldStartAPI = configModule.projectConfig.worker_mode !== "worker";
                    return [4 /*yield*/, (0, pg_connection_1.default)({ container: container, configModule: configModule })];
                case 1:
                    pgConnection = _d.sent();
                    container.register((_c = {},
                        _c[utils_1.ContainerRegistrationKeys.LOGGER] = (0, awilix_1.asValue)(logger_1.default),
                        _c[utils_1.ContainerRegistrationKeys.FEATURE_FLAG_ROUTER] = (0, awilix_1.asValue)(featureFlagRouter),
                        _c[utils_1.ContainerRegistrationKeys.CONFIG_MODULE] = (0, awilix_1.asValue)(configModule),
                        _c[utils_1.ContainerRegistrationKeys.REMOTE_QUERY] = (0, awilix_1.asValue)(null),
                        _c));
                    // Workflows are registered before the app to allow modules to run workflows as part of bootstrapping
                    //  e.g. the workflow engine will resume workflows that were running when the server was shut down
                    return [4 /*yield*/, (0, register_workflows_1.registerProjectWorkflows)({ rootDirectory: rootDirectory, configModule: configModule })];
                case 2:
                    // Workflows are registered before the app to allow modules to run workflows as part of bootstrapping
                    //  e.g. the workflow engine will resume workflows that were running when the server was shut down
                    _d.sent();
                    return [4 /*yield*/, (0, medusa_app_1.default)({
                            configModule: configModule,
                            container: container,
                        })];
                case 3:
                    _b = _d.sent(), medusaAppOnApplicationShutdown = _b.onApplicationShutdown, medusaAppOnApplicationPrepareShutdown = _b.onApplicationPrepareShutdown;
                    expressShutdown = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/];
                    }); }); };
                    if (!shouldStartAPI) return [3 /*break*/, 6];
                    return [4 /*yield*/, (0, express_1.default)({ app: expressApp, configModule: configModule })];
                case 4:
                    shutdown_1 = (_d.sent()).shutdown;
                    expressShutdown = shutdown_1;
                    expressApp.use(function (req, res, next) {
                        var _a;
                        req.scope = container.createScope();
                        req.requestId = (_a = req.headers["x-request-id"]) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)();
                        next();
                    });
                    // Add additional information to context of request
                    expressApp.use(function (req, res, next) {
                        var ipAddress = request_ip_1.default.getClientIp(req);
                        req.request_context = {
                            ip_address: ipAddress,
                        };
                        next();
                    });
                    // TODO: Add Subscribers loader
                    return [4 /*yield*/, (0, api_1.default)({
                            container: container,
                            app: expressApp,
                            configModule: configModule,
                            featureFlagRouter: featureFlagRouter,
                        })];
                case 5:
                    // TODO: Add Subscribers loader
                    _d.sent();
                    _d.label = 6;
                case 6: return [4 /*yield*/, (0, load_medusa_project_apis_1.default)({
                        rootDirectory: rootDirectory,
                        container: container,
                        app: expressApp,
                        configModule: configModule,
                        activityId: "medusa-project-apis",
                    })];
                case 7:
                    _d.sent();
                    return [4 /*yield*/, (0, core_flows_1.createDefaultsWorkflow)(container).run()];
                case 8:
                    _d.sent();
                    shutdown = function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0: return [4 /*yield*/, medusaAppOnApplicationShutdown()];
                                case 1:
                                    _b.sent();
                                    return [4 /*yield*/, (0, utils_1.promiseAll)([
                                            container.dispose(),
                                            (_a = pgConnection === null || pgConnection === void 0 ? void 0 : pgConnection.context) === null || _a === void 0 ? void 0 : _a.destroy(),
                                            expressShutdown(),
                                            medusaAppOnApplicationShutdown(),
                                        ])];
                                case 2:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    return [2 /*return*/, {
                            configModule: configModule,
                            container: container,
                            app: expressApp,
                            pgConnection: pgConnection,
                            shutdown: shutdown,
                            prepareShutdown: medusaAppOnApplicationPrepareShutdown,
                        }];
            }
        });
    });
}
exports.default = (function (_a) {
    var rootDirectory = _a.directory, expressApp = _a.expressApp, isTest = _a.isTest;
    return __awaiter(void 0, void 0, void 0, function () {
        function shutdown() {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, medusaAppOnApplicationShutdown()];
                        case 1:
                            _b.sent();
                            return [4 /*yield*/, (0, utils_1.promiseAll)([
                                    container.dispose(),
                                    dbConnection === null || dbConnection === void 0 ? void 0 : dbConnection.destroy(),
                                    (_a = pgConnection === null || pgConnection === void 0 ? void 0 : pgConnection.context) === null || _a === void 0 ? void 0 : _a.destroy(),
                                    redisShutdown(),
                                    expressShutdown(),
                                ])];
                        case 2:
                            _b.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        var configModule, featureFlagRouter, container, redisShutdown, modelsActivity, mAct, pmActivity, pmAct, stratActivity, stratAct, pgConnection, configModules, dbActivity, dbConnection, dbAct, repoActivity, rAct, servicesActivity, servAct, modulesActivity, _b, medusaAppOnApplicationShutdown, medusaAppOnApplicationPrepareShutdown, modAct, expActivity, expressShutdown, exAct, pluginsActivity, pAct, subActivity, subAct, apiActivity, apiAct, defaultsActivity, dAct, searchActivity, searchAct;
        var _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    configModule = (0, config_1.default)(rootDirectory);
                    featureFlagRouter = (0, feature_flags_1.default)(configModule, logger_1.default);
                    (0, medusa_telemetry_1.track)("FEATURE_FLAGS_LOADED");
                    if (!featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key)) return [3 /*break*/, 2];
                    return [4 /*yield*/, loadMedusaV2({
                            rootDirectory: rootDirectory,
                            configModule: configModule,
                            featureFlagRouter: featureFlagRouter,
                            expressApp: expressApp,
                        })];
                case 1: return [2 /*return*/, _e.sent()];
                case 2:
                    container = (0, medusa_core_utils_1.createMedusaContainer)();
                    container.register(utils_1.ContainerRegistrationKeys.CONFIG_MODULE, (0, awilix_1.asValue)(configModule));
                    // Add additional information to context of request
                    expressApp.use(function (req, res, next) {
                        var ipAddress = request_ip_1.default.getClientIp(req);
                        req.request_context = {
                            ip_address: ipAddress,
                        };
                        next();
                    });
                    container.register((_c = {},
                        _c[utils_1.ContainerRegistrationKeys.LOGGER] = (0, awilix_1.asValue)(logger_1.default),
                        _c.featureFlagRouter = (0, awilix_1.asValue)(featureFlagRouter),
                        _c));
                    return [4 /*yield*/, (0, redis_1.default)({
                            container: container,
                            configModule: configModule,
                            logger: logger_1.default,
                        })];
                case 3:
                    redisShutdown = (_e.sent()).shutdown;
                    modelsActivity = logger_1.default.activity("Initializing models".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("MODELS_INIT_STARTED");
                    (0, models_1.default)({ container: container, rootDirectory: rootDirectory });
                    mAct = logger_1.default.success(modelsActivity, "Models initialized") || {};
                    (0, medusa_telemetry_1.track)("MODELS_INIT_COMPLETED", { duration: mAct.duration });
                    pmActivity = logger_1.default.activity("Initializing plugin models".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("PLUGIN_MODELS_INIT_STARTED");
                    return [4 /*yield*/, (0, plugins_1.registerPluginModels)({
                            rootDirectory: rootDirectory,
                            container: container,
                            configModule: configModule,
                        })];
                case 4:
                    _e.sent();
                    pmAct = logger_1.default.success(pmActivity, "Plugin models initialized") || {};
                    (0, medusa_telemetry_1.track)("PLUGIN_MODELS_INIT_COMPLETED", { duration: pmAct.duration });
                    stratActivity = logger_1.default.activity("Initializing strategies".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("STRATEGIES_INIT_STARTED");
                    (0, strategies_1.default)({ container: container, configModule: configModule, isTest: isTest });
                    stratAct = logger_1.default.success(stratActivity, "Strategies initialized") || {};
                    (0, medusa_telemetry_1.track)("STRATEGIES_INIT_COMPLETED", { duration: stratAct.duration });
                    return [4 /*yield*/, (0, pg_connection_1.default)({ container: container, configModule: configModule })];
                case 5:
                    pgConnection = _e.sent();
                    configModules = (0, medusa_app_1.mergeDefaultModules)(configModule.modules);
                    return [4 /*yield*/, loadLegacyModulesEntities(configModules, container)];
                case 6:
                    _e.sent();
                    dbActivity = logger_1.default.activity("Initializing database".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("DATABASE_INIT_STARTED");
                    return [4 /*yield*/, (0, database_1.default)({
                            container: container,
                            configModule: configModule,
                        })];
                case 7:
                    dbConnection = _e.sent();
                    dbAct = logger_1.default.success(dbActivity, "Database initialized") || {};
                    (0, medusa_telemetry_1.track)("DATABASE_INIT_COMPLETED", { duration: dbAct.duration });
                    repoActivity = logger_1.default.activity("Initializing repositories".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("REPOSITORIES_INIT_STARTED");
                    (0, repositories_1.default)({ container: container });
                    rAct = logger_1.default.success(repoActivity, "Repositories initialized") || {};
                    (0, medusa_telemetry_1.track)("REPOSITORIES_INIT_COMPLETED", { duration: rAct.duration });
                    container.register((_d = {},
                        _d[utils_1.ContainerRegistrationKeys.MANAGER] = (0, awilix_1.asValue)(database_1.dataSource.manager),
                        _d));
                    container.register("remoteQuery", (0, awilix_1.asValue)(null)); // ensure remoteQuery is always registered
                    servicesActivity = logger_1.default.activity("Initializing services".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("SERVICES_INIT_STARTED");
                    (0, services_1.default)({ container: container, configModule: configModule, isTest: isTest });
                    servAct = logger_1.default.success(servicesActivity, "Services initialized") || {};
                    (0, medusa_telemetry_1.track)("SERVICES_INIT_COMPLETED", { duration: servAct.duration });
                    modulesActivity = logger_1.default.activity("Initializing modules".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("MODULES_INIT_STARTED");
                    return [4 /*yield*/, (0, medusa_app_1.default)({
                            configModule: configModule,
                            container: container,
                        })];
                case 8:
                    _b = _e.sent(), medusaAppOnApplicationShutdown = _b.onApplicationShutdown, medusaAppOnApplicationPrepareShutdown = _b.onApplicationPrepareShutdown;
                    modAct = logger_1.default.success(modulesActivity, "Modules initialized") || {};
                    (0, medusa_telemetry_1.track)("MODULES_INIT_COMPLETED", { duration: modAct.duration });
                    expActivity = logger_1.default.activity("Initializing express".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("EXPRESS_INIT_STARTED");
                    return [4 /*yield*/, (0, express_1.default)({
                            app: expressApp,
                            configModule: configModule,
                        })];
                case 9:
                    expressShutdown = (_e.sent()).shutdown;
                    return [4 /*yield*/, (0, passport_1.default)({ app: expressApp, configModule: configModule })];
                case 10:
                    _e.sent();
                    exAct = logger_1.default.success(expActivity, "Express intialized") || {};
                    (0, medusa_telemetry_1.track)("EXPRESS_INIT_COMPLETED", { duration: exAct.duration });
                    // Add the registered services to the request scope
                    expressApp.use(function (req, res, next) {
                        var _a;
                        container.register({ manager: (0, awilix_1.asValue)(database_1.dataSource.manager) });
                        req.scope = container.createScope();
                        req.requestId = (_a = req.headers["x-request-id"]) !== null && _a !== void 0 ? _a : (0, uuid_1.v4)();
                        next();
                    });
                    pluginsActivity = logger_1.default.activity("Initializing plugins".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("PLUGINS_INIT_STARTED");
                    return [4 /*yield*/, (0, plugins_1.default)({
                            container: container,
                            rootDirectory: rootDirectory,
                            configModule: configModule,
                            app: expressApp,
                            activityId: pluginsActivity,
                        })];
                case 11:
                    _e.sent();
                    pAct = logger_1.default.success(pluginsActivity, "Plugins intialized") || {};
                    (0, medusa_telemetry_1.track)("PLUGINS_INIT_COMPLETED", { duration: pAct.duration });
                    subActivity = logger_1.default.activity("Initializing subscribers".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("SUBSCRIBERS_INIT_STARTED");
                    (0, subscribers_1.default)({ container: container });
                    subAct = logger_1.default.success(subActivity, "Subscribers initialized") || {};
                    (0, medusa_telemetry_1.track)("SUBSCRIBERS_INIT_COMPLETED", { duration: subAct.duration });
                    apiActivity = logger_1.default.activity("Initializing API".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("API_INIT_STARTED");
                    return [4 /*yield*/, (0, api_1.default)({
                            container: container,
                            app: expressApp,
                            configModule: configModule,
                            featureFlagRouter: featureFlagRouter,
                        })];
                case 12:
                    _e.sent();
                    apiAct = logger_1.default.success(apiActivity, "API initialized") || {};
                    (0, medusa_telemetry_1.track)("API_INIT_COMPLETED", { duration: apiAct.duration });
                    defaultsActivity = logger_1.default.activity("Initializing defaults".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("DEFAULTS_INIT_STARTED");
                    return [4 /*yield*/, (0, defaults_1.default)({ container: container })];
                case 13:
                    _e.sent();
                    dAct = logger_1.default.success(defaultsActivity, "Defaults initialized") || {};
                    (0, medusa_telemetry_1.track)("DEFAULTS_INIT_COMPLETED", { duration: dAct.duration });
                    searchActivity = logger_1.default.activity("Initializing search engine indexing".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("SEARCH_ENGINE_INDEXING_STARTED");
                    return [4 /*yield*/, (0, search_index_1.default)({ container: container })];
                case 14:
                    _e.sent();
                    searchAct = logger_1.default.success(searchActivity, "Indexing event emitted") || {};
                    (0, medusa_telemetry_1.track)("SEARCH_ENGINE_INDEXING_COMPLETED", { duration: searchAct.duration });
                    return [2 /*return*/, {
                            configModule: configModule,
                            container: container,
                            dbConnection: dbConnection,
                            app: expressApp,
                            pgConnection: pgConnection,
                            shutdown: shutdown,
                            prepareShutdown: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                                return [2 /*return*/, medusaAppOnApplicationPrepareShutdown()];
                            }); }); },
                        }];
            }
        });
    });
});
//# sourceMappingURL=index.js.map