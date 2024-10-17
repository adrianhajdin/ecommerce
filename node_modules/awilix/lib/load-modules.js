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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadModules = void 0;
const url_1 = require("url");
const lifetime_1 = require("./lifetime");
const resolvers_1 = require("./resolvers");
const utils_1 = require("./utils");
const camel_case_1 = require("camel-case");
const nameFormatters = {
    camelCase: (s) => (0, camel_case_1.camelCase)(s),
};
/**
 * Given an array of glob strings, will call `require`
 * on them, and call their default exported function with the
 * container as the first parameter.
 *
 * @param  {AwilixContainer} dependencies.container
 * The container to install loaded modules in.
 *
 * @param  {Function} dependencies.listModules
 * The listModules function to use for listing modules.
 *
 * @param  {Function} dependencies.require
 * The require function - it's a dependency because it makes testing easier.
 *
 * @param  {String[]} globPatterns
 * The array of globs to use when loading modules.
 *
 * @param  {Object} opts
 * Passed to `listModules`, e.g. `{ cwd: '...' }`.
 *
 * @param  {(string, ModuleDescriptor) => string} opts.formatName
 * Used to format the name the module is registered with in the container.
 *
 * @param  {boolean} opts.esModules
 * Set to `true` to use Node's native ECMAScriptModules modules
 *
 * @return {Object}
 * Returns an object describing the result.
 */
function loadModules(dependencies, globPatterns, opts) {
    opts !== null && opts !== void 0 ? opts : (opts = {});
    const container = dependencies.container;
    opts = optsWithDefaults(opts, container);
    const modules = dependencies.listModules(globPatterns, opts);
    if (opts.esModules) {
        return loadEsModules(dependencies, container, modules, opts);
    }
    else {
        const result = modules.map((m) => {
            const loaded = dependencies.require(m.path);
            return parseLoadedModule(loaded, m);
        });
        return registerModules(result, container, modules, opts);
    }
}
exports.loadModules = loadModules;
/**
 * Loads the modules using native ES6 modules and the async import()
 * @param {AwilixContainer} container
 * @param {ModuleDescriptor[]} modules
 * @param {LoadModulesOptions} opts
 */
function loadEsModules(dependencies, container, modules, opts) {
    return __awaiter(this, void 0, void 0, function* () {
        const importPromises = [];
        for (const m of modules) {
            const fileUrl = (0, url_1.pathToFileURL)(m.path).toString();
            importPromises.push(dependencies.require(fileUrl));
        }
        const imports = yield Promise.all(importPromises);
        const result = [];
        for (let i = 0; i < modules.length; i++) {
            result.push(parseLoadedModule(imports[i], modules[i]));
        }
        return registerModules(result, container, modules, opts);
    });
}
/**
 * Parses the module which has been required
 *
 * @param {any} loaded
 * @param {ModuleDescriptor} m
 */
function parseLoadedModule(loaded, m) {
    const items = [];
    // Meh, it happens.
    if (!loaded) {
        return items;
    }
    if ((0, utils_1.isFunction)(loaded)) {
        // for module.exports = ...
        items.push({
            name: m.name,
            path: m.path,
            value: loaded,
            opts: m.opts,
        });
        return items;
    }
    if (loaded.default && (0, utils_1.isFunction)(loaded.default)) {
        // ES6 default export
        items.push({
            name: m.name,
            path: m.path,
            value: loaded.default,
            opts: m.opts,
        });
    }
    // loop through non-default exports, but require the RESOLVER property set for
    // it to be a valid service module export.
    for (const key of Object.keys(loaded)) {
        if (key === 'default') {
            // default case handled separately due to its different name (file name)
            continue;
        }
        if ((0, utils_1.isFunction)(loaded[key]) && resolvers_1.RESOLVER in loaded[key]) {
            items.push({
                name: key,
                path: m.path,
                value: loaded[key],
                opts: m.opts,
            });
        }
    }
    return items;
}
/**
 * Registers the modules
 *
 * @param {ModuleDescriptorVal[][]} modulesToRegister
 * @param {AwilixContainer} container
 * @param {ModuleDescriptor[]} modules
 * @param {LoadModulesOptions} opts
 */
function registerModules(modulesToRegister, container, modules, opts) {
    modulesToRegister
        .reduce((acc, cur) => acc.concat(cur), [])
        .filter((x) => x)
        .forEach(registerDescriptor.bind(null, container, opts));
    return {
        loadedModules: modules,
    };
}
/**
 * Returns a new options object with defaults applied.
 */
function optsWithDefaults(opts, container) {
    return Object.assign({ 
        // Does a somewhat-deep merge on the registration options.
        resolverOptions: Object.assign({ lifetime: lifetime_1.Lifetime.TRANSIENT }, (opts && opts.resolverOptions)) }, opts);
}
/**
 * Given a module descriptor, reads it and registers it's value with the container.
 *
 * @param {AwilixContainer} container
 * @param {LoadModulesOptions} opts
 * @param {ModuleDescriptor} moduleDescriptor
 */
function registerDescriptor(container, opts, moduleDescriptor) {
    const inlineConfig = moduleDescriptor.value[resolvers_1.RESOLVER];
    let name = inlineConfig && inlineConfig.name;
    if (!name) {
        name = moduleDescriptor.name;
        let formatter = opts.formatName;
        if (formatter) {
            if (typeof formatter === 'string') {
                formatter = nameFormatters[formatter];
            }
            if (formatter) {
                name = formatter(name, moduleDescriptor);
            }
        }
    }
    let moduleDescriptorOpts = moduleDescriptor.opts;
    if (typeof moduleDescriptorOpts === 'string') {
        moduleDescriptorOpts = { lifetime: moduleDescriptorOpts };
    }
    const regOpts = Object.assign(Object.assign(Object.assign({}, opts.resolverOptions), moduleDescriptorOpts), inlineConfig);
    const reg = regOpts.register
        ? regOpts.register
        : (0, utils_1.isClass)(moduleDescriptor.value)
            ? resolvers_1.asClass
            : resolvers_1.asFunction;
    container.register(name, reg(moduleDescriptor.value, regOpts));
}
//# sourceMappingURL=load-modules.js.map