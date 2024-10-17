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
exports.runModulesLoader = exports.loadMedusaApp = exports.migrateMedusaApp = exports.mergeDefaultModules = void 0;
var modules_sdk_1 = require("@medusajs/modules-sdk");
var utils_1 = require("@medusajs/utils");
var awilix_1 = require("awilix");
var remote_query_fetch_data_1 = require("../utils/remote-query-fetch-data");
function mergeDefaultModules(modulesConfig) {
    var e_1, _a;
    var _b, _c;
    var _d;
    var defaultModules = Object.values(modules_sdk_1.ModulesDefinition).filter(function (definition) {
        return !!definition.defaultPackage;
    });
    var configModules = (_b = __assign({}, modulesConfig)) !== null && _b !== void 0 ? _b : {};
    try {
        for (var _e = __values(defaultModules), _f = _e.next(); !_f.done; _f = _e.next()) {
            var defaultModule = _f.value;
            (_c = configModules[_d = defaultModule.key]) !== null && _c !== void 0 ? _c : (configModules[_d] = defaultModule.defaultModuleDeclaration);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return configModules;
}
exports.mergeDefaultModules = mergeDefaultModules;
function migrateMedusaApp(_a, config) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var _k;
    var configModule = _a.configModule, container = _a.container;
    if (config === void 0) { config = { registerInContainer: true }; }
    return __awaiter(this, void 0, void 0, function () {
        var injectedDependencies, sharedResourcesConfig, configModules, _l, _m, moduleKey;
        var _o, e_2, _p;
        return __generator(this, function (_q) {
            switch (_q.label) {
                case 0:
                    injectedDependencies = (_o = {},
                        _o[utils_1.ContainerRegistrationKeys.PG_CONNECTION] = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION),
                        _o[utils_1.ContainerRegistrationKeys.LOGGER] = container.resolve(utils_1.ContainerRegistrationKeys.LOGGER),
                        _o);
                    sharedResourcesConfig = {
                        database: {
                            clientUrl: (_f = (_e = (_d = (_c = (_b = injectedDependencies[utils_1.ContainerRegistrationKeys.PG_CONNECTION]) === null || _b === void 0 ? void 0 : _b.client) === null || _c === void 0 ? void 0 : _c.config) === null || _d === void 0 ? void 0 : _d.connection) === null || _e === void 0 ? void 0 : _e.connectionString) !== null && _f !== void 0 ? _f : configModule.projectConfig.database_url,
                            driverOptions: configModule.projectConfig.database_driver_options,
                            debug: !!((_g = configModule.projectConfig.database_logging) !== null && _g !== void 0 ? _g : false),
                        },
                    };
                    configModules = mergeDefaultModules(configModule.modules);
                    try {
                        // Apply default options to legacy modules
                        for (_l = __values(Object.keys(configModules)), _m = _l.next(); !_m.done; _m = _l.next()) {
                            moduleKey = _m.value;
                            if (!((_h = modules_sdk_1.ModulesDefinition[moduleKey]) === null || _h === void 0 ? void 0 : _h.isLegacy)) {
                                continue;
                            }
                            if ((0, utils_1.isObject)(configModules[moduleKey])) {
                                ;
                                (_j = (_k = configModules[moduleKey]).options) !== null && _j !== void 0 ? _j : (_k.options = {
                                    database: {
                                        type: "postgres",
                                        url: sharedResourcesConfig.database.clientUrl,
                                        clientUrl: sharedResourcesConfig.database.clientUrl,
                                        extra: configModule.projectConfig.database_extra,
                                        schema: configModule.projectConfig.database_schema,
                                        logging: configModule.projectConfig.database_logging,
                                    },
                                });
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_m && !_m.done && (_p = _l.return)) _p.call(_l);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    return [4 /*yield*/, (0, modules_sdk_1.MedusaAppMigrateUp)({
                            modulesConfig: configModules,
                            remoteFetchData: (0, remote_query_fetch_data_1.remoteQueryFetchData)(container),
                            sharedContainer: container,
                            sharedResourcesConfig: sharedResourcesConfig,
                            injectedDependencies: injectedDependencies,
                        })];
                case 1:
                    _q.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.migrateMedusaApp = migrateMedusaApp;
var loadMedusaApp = function (_a, config) {
    var configModule = _a.configModule, container = _a.container;
    if (config === void 0) { config = { registerInContainer: true }; }
    return __awaiter(void 0, void 0, void 0, function () {
        var featureFlagRouter, isMedusaV2Enabled, injectedDependencies, sharedResourcesConfig, configModules, _b, _c, moduleKey, medusaApp, requiredModuleKeys, missingPackages, requiredModuleKeys_1, requiredModuleKeys_1_1, requiredModuleKey, isModuleInstalled, _d, _e, moduleService, loadedModule, _f, _g, moduleDefinition;
        var _h, e_3, _j, e_4, _k, e_5, _l, e_6, _m;
        var _o, _p, _q;
        var _r;
        return __generator(this, function (_s) {
            switch (_s.label) {
                case 0:
                    featureFlagRouter = container.resolve("featureFlagRouter");
                    isMedusaV2Enabled = featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key);
                    injectedDependencies = (_h = {},
                        _h[utils_1.ContainerRegistrationKeys.PG_CONNECTION] = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION),
                        _h[utils_1.ContainerRegistrationKeys.LOGGER] = container.resolve(utils_1.ContainerRegistrationKeys.LOGGER),
                        _h);
                    sharedResourcesConfig = {
                        database: {
                            clientUrl: configModule.projectConfig.database_url,
                            driverOptions: configModule.projectConfig.database_driver_options,
                            debug: !!((_o = configModule.projectConfig.database_logging) !== null && _o !== void 0 ? _o : false),
                        },
                    };
                    container.register(utils_1.ContainerRegistrationKeys.REMOTE_QUERY, (0, awilix_1.asValue)(undefined));
                    container.register(utils_1.ContainerRegistrationKeys.REMOTE_LINK, (0, awilix_1.asValue)(undefined));
                    configModules = mergeDefaultModules(configModule.modules);
                    try {
                        // Apply default options to legacy modules
                        for (_b = __values(Object.keys(configModules)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            moduleKey = _c.value;
                            if (!((_p = modules_sdk_1.ModulesDefinition[moduleKey]) === null || _p === void 0 ? void 0 : _p.isLegacy)) {
                                continue;
                            }
                            if ((0, utils_1.isObject)(configModules[moduleKey])) {
                                ;
                                (_q = (_r = configModules[moduleKey]).options) !== null && _q !== void 0 ? _q : (_r.options = {
                                    database: {
                                        type: "postgres",
                                        url: configModule.projectConfig.database_url,
                                        extra: configModule.projectConfig.database_extra,
                                        schema: configModule.projectConfig.database_schema,
                                        logging: configModule.projectConfig.database_logging,
                                    },
                                });
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_j = _b.return)) _j.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    return [4 /*yield*/, (0, modules_sdk_1.MedusaApp)({
                            workerMode: configModule.projectConfig.worker_mode,
                            modulesConfig: configModules,
                            remoteFetchData: (0, remote_query_fetch_data_1.remoteQueryFetchData)(container),
                            sharedContainer: container,
                            sharedResourcesConfig: sharedResourcesConfig,
                            injectedDependencies: injectedDependencies,
                        })];
                case 1:
                    medusaApp = _s.sent();
                    requiredModuleKeys = [modules_sdk_1.Modules.PRODUCT, modules_sdk_1.Modules.PRICING];
                    missingPackages = [];
                    if (isMedusaV2Enabled) {
                        try {
                            for (requiredModuleKeys_1 = __values(requiredModuleKeys), requiredModuleKeys_1_1 = requiredModuleKeys_1.next(); !requiredModuleKeys_1_1.done; requiredModuleKeys_1_1 = requiredModuleKeys_1.next()) {
                                requiredModuleKey = requiredModuleKeys_1_1.value;
                                isModuleInstalled = modules_sdk_1.MedusaModule.isInstalled(requiredModuleKey);
                                if (!isModuleInstalled) {
                                    missingPackages.push(modules_sdk_1.MODULE_PACKAGE_NAMES[requiredModuleKey] || requiredModuleKey);
                                }
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (requiredModuleKeys_1_1 && !requiredModuleKeys_1_1.done && (_k = requiredModuleKeys_1.return)) _k.call(requiredModuleKeys_1);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        if (missingPackages.length) {
                            throw new Error("FeatureFlag medusa_v2 (MEDUSA_FF_MEDUSA_V2) requires the following packages/module registration: (".concat(missingPackages.join(", "), ")"));
                        }
                    }
                    if (!config.registerInContainer) {
                        return [2 /*return*/, medusaApp];
                    }
                    container.register(utils_1.ContainerRegistrationKeys.REMOTE_LINK, (0, awilix_1.asValue)(medusaApp.link));
                    container.register(utils_1.ContainerRegistrationKeys.REMOTE_QUERY, (0, awilix_1.asValue)(medusaApp.query));
                    try {
                        for (_d = __values(Object.values(medusaApp.modules)), _e = _d.next(); !_e.done; _e = _d.next()) {
                            moduleService = _e.value;
                            loadedModule = moduleService;
                            container.register(loadedModule.__definition.registrationName, (0, awilix_1.asValue)(moduleService));
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_e && !_e.done && (_l = _d.return)) _l.call(_d);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                    try {
                        // Register all unresolved modules as undefined to be present in the container with undefined value by defaul
                        // but still resolvable
                        for (_f = __values(Object.values(modules_sdk_1.ModulesDefinition)), _g = _f.next(); !_g.done; _g = _f.next()) {
                            moduleDefinition = _g.value;
                            if (!container.hasRegistration(moduleDefinition.registrationName)) {
                                container.register(moduleDefinition.registrationName, (0, awilix_1.asValue)(undefined));
                            }
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_m = _f.return)) _m.call(_f);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                    return [2 /*return*/, medusaApp];
            }
        });
    });
};
exports.loadMedusaApp = loadMedusaApp;
/**
 * Run the modules loader without taking care of anything else. This is useful for running the loader as a separate action or to re run all modules loaders.
 *
 * @param configModule
 * @param container
 */
function runModulesLoader(_a) {
    var _b, _c, _d;
    var _e;
    var configModule = _a.configModule, container = _a.container;
    return __awaiter(this, void 0, void 0, function () {
        var injectedDependencies, sharedResourcesConfig, configModules, _f, _g, moduleKey;
        var _h, e_7, _j;
        return __generator(this, function (_k) {
            switch (_k.label) {
                case 0:
                    injectedDependencies = (_h = {},
                        _h[utils_1.ContainerRegistrationKeys.PG_CONNECTION] = container.resolve(utils_1.ContainerRegistrationKeys.PG_CONNECTION),
                        _h[utils_1.ContainerRegistrationKeys.LOGGER] = container.resolve(utils_1.ContainerRegistrationKeys.LOGGER),
                        _h);
                    sharedResourcesConfig = {
                        database: {
                            clientUrl: configModule.projectConfig.database_url,
                            driverOptions: configModule.projectConfig.database_driver_options,
                            debug: !!((_b = configModule.projectConfig.database_logging) !== null && _b !== void 0 ? _b : false),
                        },
                    };
                    configModules = mergeDefaultModules(configModule.modules);
                    try {
                        // Apply default options to legacy modules
                        for (_f = __values(Object.keys(configModules)), _g = _f.next(); !_g.done; _g = _f.next()) {
                            moduleKey = _g.value;
                            if (!((_c = modules_sdk_1.ModulesDefinition[moduleKey]) === null || _c === void 0 ? void 0 : _c.isLegacy)) {
                                continue;
                            }
                            if ((0, utils_1.isObject)(configModules[moduleKey])) {
                                ;
                                (_d = (_e = configModules[moduleKey]).options) !== null && _d !== void 0 ? _d : (_e.options = {
                                    database: {
                                        type: "postgres",
                                        url: configModule.projectConfig.database_url,
                                        extra: configModule.projectConfig.database_extra,
                                        schema: configModule.projectConfig.database_schema,
                                        logging: configModule.projectConfig.database_logging,
                                    },
                                });
                            }
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_j = _f.return)) _j.call(_f);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                    return [4 /*yield*/, (0, modules_sdk_1.MedusaApp)({
                            modulesConfig: configModules,
                            remoteFetchData: (0, remote_query_fetch_data_1.remoteQueryFetchData)(container),
                            sharedContainer: container,
                            sharedResourcesConfig: sharedResourcesConfig,
                            injectedDependencies: injectedDependencies,
                            loaderOnly: true,
                        })];
                case 1:
                    _k.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.runModulesLoader = runModulesLoader;
exports.default = exports.loadMedusaApp;
//# sourceMappingURL=medusa-app.js.map