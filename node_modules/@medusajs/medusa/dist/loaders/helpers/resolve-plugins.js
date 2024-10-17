"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResolvedPlugins = void 0;
var utils_1 = require("@medusajs/utils");
var fs_1 = __importDefault(require("fs"));
var fs_exists_cached_1 = require("fs-exists-cached");
var medusa_core_utils_1 = require("medusa-core-utils");
var path_1 = __importDefault(require("path"));
var plugins_1 = require("../plugins");
function createPluginId(name) {
    return name;
}
function createFileContentHash(path, files) {
    return path + files;
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
        var computedResolvedPath = resolvedPath + (process.env.DEV_MODE ? "/src" : "");
        // Add support for a plugin to output the build into a dist directory
        var resolvedPathToDist = resolvedPath + "/dist";
        var isDistExist = resolvedPathToDist &&
            !process.env.DEV_MODE &&
            (0, fs_exists_cached_1.sync)(resolvedPath + "/dist");
        return {
            resolve: isDistExist ? resolvedPathToDist : computedResolvedPath,
            id: createPluginId(packageJSON.name),
            name: packageJSON.name,
            options: {},
            version: packageJSON.version,
        };
    }
    catch (err) {
        throw new Error("Unable to find plugin \"".concat(pluginName, "\". Perhaps you need to install its package?"));
    }
}
function getResolvedPlugins(rootDirectory, configModule, extensionDirectoryPath, isMedusaProject) {
    if (extensionDirectoryPath === void 0) { extensionDirectoryPath = "dist"; }
    if (isMedusaProject === void 0) { isMedusaProject = false; }
    var plugins = configModule.plugins;
    if (isMedusaProject) {
        var extensionDirectory_1 = path_1.default.join(rootDirectory, extensionDirectoryPath);
        return [
            {
                resolve: extensionDirectory_1,
                name: plugins_1.MEDUSA_PROJECT_NAME,
                id: createPluginId(plugins_1.MEDUSA_PROJECT_NAME),
                options: configModule,
                version: createFileContentHash(process.cwd(), "**"),
            },
        ];
    }
    var resolved = plugins.map(function (plugin) {
        if ((0, utils_1.isString)(plugin)) {
            return resolvePlugin(plugin);
        }
        var details = resolvePlugin(plugin.resolve);
        details.options = plugin.options;
        return details;
    });
    var extensionDirectory = path_1.default.join(rootDirectory, extensionDirectoryPath);
    // Resolve user's project as a plugin for loading purposes
    resolved.push({
        resolve: extensionDirectory,
        name: plugins_1.MEDUSA_PROJECT_NAME,
        id: createPluginId(plugins_1.MEDUSA_PROJECT_NAME),
        options: configModule,
        version: createFileContentHash(process.cwd(), "**"),
    });
    return resolved;
}
exports.getResolvedPlugins = getResolvedPlugins;
//# sourceMappingURL=resolve-plugins.js.map