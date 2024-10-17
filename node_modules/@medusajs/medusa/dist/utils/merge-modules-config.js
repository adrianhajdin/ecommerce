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
exports.mergeModulesConfig = void 0;
var modules_sdk_1 = require("@medusajs/modules-sdk");
/**
 * Merge the modules config from the medusa-config file with the modules config from medusa package
 * @param modules
 * @param medusaInternalModulesConfig
 */
function mergeModulesConfig(modules, medusaInternalModulesConfig) {
    var e_1, _a;
    var _b;
    if (modules === void 0) { modules = {}; }
    if (medusaInternalModulesConfig === void 0) { medusaInternalModulesConfig = {}; }
    var modules_ = __assign({}, modules);
    var userModulesConfigKeys = Object.keys(modules);
    var internalModulesConfigKeys = Object.keys(medusaInternalModulesConfig);
    var allModulesKeys = new Set(__spreadArray(__spreadArray([], __read(userModulesConfigKeys), false), __read(internalModulesConfigKeys), false));
    try {
        for (var allModulesKeys_1 = __values(allModulesKeys), allModulesKeys_1_1 = allModulesKeys_1.next(); !allModulesKeys_1_1.done; allModulesKeys_1_1 = allModulesKeys_1.next()) {
            var moduleName = allModulesKeys_1_1.value;
            var internalModuleConfig = medusaInternalModulesConfig[moduleName];
            var moduleDefinition = modules_sdk_1.ModulesDefinition[moduleName];
            if (moduleDefinition === null || moduleDefinition === void 0 ? void 0 : moduleDefinition.isLegacy) {
                continue;
            }
            (_b = modules_[moduleName]) !== null && _b !== void 0 ? _b : (modules_[moduleName] = internalModuleConfig);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (allModulesKeys_1_1 && !allModulesKeys_1_1.done && (_a = allModulesKeys_1.return)) _a.call(allModulesKeys_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return modules_;
}
exports.mergeModulesConfig = mergeModulesConfig;
//# sourceMappingURL=merge-modules-config.js.map