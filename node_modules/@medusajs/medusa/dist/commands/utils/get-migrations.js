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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.revertIsolatedModulesMigration = exports.runIsolatedModulesMigration = exports.getModuleSharedResources = exports.getModuleMigrations = exports.getEnabledMigrations = exports.getInternalModules = void 0;
var modules_sdk_1 = require("@medusajs/modules-sdk");
var fs_1 = __importDefault(require("fs"));
var fs_exists_cached_1 = require("fs-exists-cached");
var glob_1 = __importDefault(require("glob"));
var lodash_1 = require("lodash");
var medusa_core_utils_1 = require("medusa-core-utils");
var path_1 = __importDefault(require("path"));
var config_1 = require("../../loaders/config");
var plugins_1 = require("../../loaders/plugins");
function createFileContentHash(path, files) {
    return path + files;
}
// TODO: Create unique id for each plugin
function createPluginId(name) {
    return name;
}
/**
 * Finds the correct path for the plugin. If it is a local plugin it will be
 * found in the plugins folder. Otherwise we will look for the plugin in the
 * installed npm packages.
 * @param {string} pluginName - the name of the plugin to find. Should match
 *    the name of the folder where the plugin is contained.
 * @return {object} the plugin details
 */
function resolvePlugin(pluginName) {
    // Only find plugins when we're not given an absolute path
    if (!(0, fs_exists_cached_1.sync)(pluginName)) {
        // Find the plugin in the local plugins folder
        var resolvedPath = path_1.default.resolve("./plugins/".concat(pluginName));
        if ((0, fs_exists_cached_1.sync)(resolvedPath)) {
            if ((0, fs_exists_cached_1.sync)("".concat(resolvedPath, "/package.json"))) {
                var packageJSON = JSON.parse(fs_1.default.readFileSync("".concat(resolvedPath, "/package.json"), "utf-8"));
                var name_1 = packageJSON.name || pluginName;
                // warnOnIncompatiblePeerDependency(name, packageJSON)
                return {
                    resolve: resolvedPath,
                    name: name_1,
                    id: createPluginId(name_1),
                    options: {},
                    version: packageJSON.version || createFileContentHash(resolvedPath, "**"),
                };
            }
            else {
                // Make package.json a requirement for local plugins too
                throw new Error("Plugin ".concat(pluginName, " requires a package.json file"));
            }
        }
    }
    var rootDir = path_1.default.resolve(".");
    /**
     *  Here we have an absolute path to an internal plugin, or a name of a module
     *  which should be located in node_modules.
     */
    try {
        var requireSource = rootDir !== null
            ? (0, medusa_core_utils_1.createRequireFromPath)("".concat(rootDir, "/:internal:"))
            : require;
        // If the path is absolute, resolve the directory of the internal plugin,
        // otherwise resolve the directory containing the package.json
        var resolvedPath = path_1.default.dirname(requireSource.resolve("".concat(pluginName, "/package.json")));
        var packageJSON = JSON.parse(fs_1.default.readFileSync("".concat(resolvedPath, "/package.json"), "utf-8"));
        // warnOnIncompatiblePeerDependency(packageJSON.name, packageJSON)
        return {
            resolve: resolvedPath,
            id: createPluginId(packageJSON.name),
            name: packageJSON.name,
            version: packageJSON.version,
        };
    }
    catch (err) {
        throw new Error("Unable to find plugin \"".concat(pluginName, "\". Perhaps you need to install its package?"));
    }
}
function getInternalModules(configModule) {
    var e_1, _a;
    var _b;
    var modules = [];
    var moduleResolutions = {};
    Object.entries((_b = configModule.modules) !== null && _b !== void 0 ? _b : {}).forEach(function (_a) {
        var _b = __read(_a, 2), moduleKey = _b[0], module = _b[1];
        moduleResolutions[moduleKey] = (0, modules_sdk_1.registerMedusaModule)(moduleKey, module)[moduleKey];
    });
    try {
        for (var _c = __values(Object.values(moduleResolutions)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var moduleResolution = _d.value;
            if (!moduleResolution.resolutionPath ||
                moduleResolution.moduleDeclaration.scope !== "internal") {
                continue;
            }
            var loadedModule = null;
            try {
                loadedModule = require(moduleResolution.resolutionPath).default;
            }
            catch (error) {
                console.log("Error loading Module", error);
                continue;
            }
            modules.push({
                moduleDeclaration: moduleResolution.moduleDeclaration,
                loadedModule: loadedModule,
            });
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return modules;
}
exports.getInternalModules = getInternalModules;
exports.default = (function (directory, featureFlagRouter) {
    var e_2, _a;
    var _b = (0, medusa_core_utils_1.getConfigFile)(directory, "medusa-config"), configModule = _b.configModule, error = _b.error;
    if (error) {
        (0, config_1.handleConfigError)(error);
    }
    var plugins = configModule.plugins;
    var resolved = plugins.map(function (plugin) {
        if ((0, lodash_1.isString)(plugin)) {
            return resolvePlugin(plugin);
        }
        var details = resolvePlugin(plugin.resolve);
        details.options = plugin.options;
        return details;
    });
    // Resolve user's project as a plugin for loading purposes
    resolved.push({
        resolve: "".concat(directory, "/dist"),
        name: plugins_1.MEDUSA_PROJECT_NAME,
        id: createPluginId(plugins_1.MEDUSA_PROJECT_NAME),
        options: {},
        version: createFileContentHash(process.cwd(), "**"),
    });
    var migrationDirs = [];
    var corePackageMigrations = path_1.default.resolve(path_1.default.join(__dirname, "..", "..", "migrations"));
    migrationDirs.push(path_1.default.join(corePackageMigrations, "*.js"));
    try {
        for (var resolved_1 = __values(resolved), resolved_1_1 = resolved_1.next(); !resolved_1_1.done; resolved_1_1 = resolved_1.next()) {
            var p = resolved_1_1.value;
            var exists = (0, fs_exists_cached_1.sync)("".concat(p.resolve, "/migrations"));
            if (exists) {
                migrationDirs.push("".concat(p.resolve, "/migrations/*.js"));
                continue;
            }
            var distExists = (0, fs_exists_cached_1.sync)("".concat(p.resolve, "/dist/migrations"));
            if (distExists) {
                migrationDirs.push("".concat(p.resolve, "/dist/migrations/*.js"));
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (resolved_1_1 && !resolved_1_1.done && (_a = resolved_1.return)) _a.call(resolved_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    var isFeatureFlagEnabled = function (flag) {
        return featureFlagRouter.isFeatureEnabled(flag);
    };
    var coreMigrations = (0, exports.getEnabledMigrations)(migrationDirs, isFeatureFlagEnabled);
    return { coreMigrations: coreMigrations };
});
var getEnabledMigrations = function (migrationDirs, isFlagEnabled) {
    var allMigrations = migrationDirs.flatMap(function (dir) {
        return glob_1.default.sync(dir);
    });
    return allMigrations
        .map(function (file) {
        var loaded = require(file);
        if (!(0, medusa_core_utils_1.isDefined)(loaded.featureFlag) || isFlagEnabled(loaded.featureFlag)) {
            delete loaded.featureFlag;
            return Object.values(loaded);
        }
    })
        .flat()
        .filter(Boolean);
};
exports.getEnabledMigrations = getEnabledMigrations;
var getModuleMigrations = function (configModule, isFlagEnabled) {
    var e_3, _a;
    var _b, _c;
    var loadedModules = getInternalModules(configModule);
    var allModules = [];
    try {
        for (var loadedModules_1 = __values(loadedModules), loadedModules_1_1 = loadedModules_1.next(); !loadedModules_1_1.done; loadedModules_1_1 = loadedModules_1.next()) {
            var loadedModule = loadedModules_1_1.value;
            var mod = loadedModule.loadedModule;
            var moduleMigrations = ((_b = mod.migrations) !== null && _b !== void 0 ? _b : [])
                .map(function (migration) {
                if (!(0, medusa_core_utils_1.isDefined)(migration.featureFlag) ||
                    isFlagEnabled(migration.featureFlag)) {
                    delete migration.featureFlag;
                    return Object.values(migration);
                }
            })
                .flat()
                .filter(Boolean);
            allModules.push({
                moduleDeclaration: loadedModule.moduleDeclaration,
                models: (_c = mod.models) !== null && _c !== void 0 ? _c : [],
                migrations: moduleMigrations,
            });
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (loadedModules_1_1 && !loadedModules_1_1.done && (_a = loadedModules_1.return)) _a.call(loadedModules_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return allModules;
};
exports.getModuleMigrations = getModuleMigrations;
var getModuleSharedResources = function (configModule, featureFlagsRouter) {
    var e_4, _a;
    var _b;
    var isFlagEnabled = function (flag) {
        return featureFlagsRouter && featureFlagsRouter.isFeatureEnabled(flag);
    };
    var loadedModules = (0, exports.getModuleMigrations)(configModule, isFlagEnabled);
    var migrations = [];
    var models = [];
    try {
        for (var loadedModules_2 = __values(loadedModules), loadedModules_2_1 = loadedModules_2.next(); !loadedModules_2_1.done; loadedModules_2_1 = loadedModules_2.next()) {
            var mod = loadedModules_2_1.value;
            if (mod.moduleDeclaration.resources !== "shared") {
                continue;
            }
            migrations = migrations.concat(mod.migrations);
            models = models.concat((_b = mod.models) !== null && _b !== void 0 ? _b : []);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (loadedModules_2_1 && !loadedModules_2_1.done && (_a = loadedModules_2.return)) _a.call(loadedModules_2);
        }
        finally { if (e_4) throw e_4.error; }
    }
    return {
        models: models,
        migrations: migrations,
    };
};
exports.getModuleSharedResources = getModuleSharedResources;
var runIsolatedModulesMigration = function (configModule) { return __awaiter(void 0, void 0, void 0, function () {
    var moduleResolutions, _a, _b, moduleResolution, e_5_1;
    var e_5, _c;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                moduleResolutions = {};
                Object.entries((_d = configModule.modules) !== null && _d !== void 0 ? _d : {}).forEach(function (_a) {
                    var _b = __read(_a, 2), moduleKey = _b[0], module = _b[1];
                    moduleResolutions[moduleKey] = (0, modules_sdk_1.registerMedusaModule)(moduleKey, module)[moduleKey];
                });
                _e.label = 1;
            case 1:
                _e.trys.push([1, 6, 7, 8]);
                _a = __values(Object.values(moduleResolutions)), _b = _a.next();
                _e.label = 2;
            case 2:
                if (!!_b.done) return [3 /*break*/, 5];
                moduleResolution = _b.value;
                if (!moduleResolution.resolutionPath ||
                    moduleResolution.moduleDeclaration.scope !== "internal" ||
                    moduleResolution.moduleDeclaration.resources !== "isolated") {
                    return [3 /*break*/, 4];
                }
                return [4 /*yield*/, modules_sdk_1.MedusaModule.migrateUp(moduleResolution.definition.key, moduleResolution.resolutionPath, moduleResolution.options)];
            case 3:
                _e.sent();
                _e.label = 4;
            case 4:
                _b = _a.next();
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_5_1 = _e.sent();
                e_5 = { error: e_5_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_5) throw e_5.error; }
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.runIsolatedModulesMigration = runIsolatedModulesMigration;
var revertIsolatedModulesMigration = function (configModule) { return __awaiter(void 0, void 0, void 0, function () {
    var moduleResolutions, _a, _b, moduleResolution, e_6_1;
    var e_6, _c;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                moduleResolutions = {};
                Object.entries((_d = configModule.modules) !== null && _d !== void 0 ? _d : {}).forEach(function (_a) {
                    var _b = __read(_a, 2), moduleKey = _b[0], module = _b[1];
                    moduleResolutions[moduleKey] = (0, modules_sdk_1.registerMedusaModule)(moduleKey, module)[moduleKey];
                });
                _e.label = 1;
            case 1:
                _e.trys.push([1, 6, 7, 8]);
                _a = __values(Object.values(moduleResolutions)), _b = _a.next();
                _e.label = 2;
            case 2:
                if (!!_b.done) return [3 /*break*/, 5];
                moduleResolution = _b.value;
                if (!moduleResolution.resolutionPath ||
                    moduleResolution.moduleDeclaration.scope !== "internal" ||
                    moduleResolution.moduleDeclaration.resources !== "isolated") {
                    return [3 /*break*/, 4];
                }
                return [4 /*yield*/, modules_sdk_1.MedusaModule.migrateDown(moduleResolution.definition.key, moduleResolution.resolutionPath, moduleResolution.options)];
            case 3:
                _e.sent();
                _e.label = 4;
            case 4:
                _b = _a.next();
                return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 8];
            case 6:
                e_6_1 = _e.sent();
                e_6 = { error: e_6_1 };
                return [3 /*break*/, 8];
            case 7:
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_6) throw e_6.error; }
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.revertIsolatedModulesMigration = revertIsolatedModulesMigration;
//# sourceMappingURL=get-migrations.js.map