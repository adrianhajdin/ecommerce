"use strict";
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
exports.featureFlagRouter = void 0;
var utils_1 = require("@medusajs/utils");
var glob_1 = __importDefault(require("glob"));
var medusa_core_utils_1 = require("medusa-core-utils");
var medusa_telemetry_1 = require("medusa-telemetry");
var path_1 = __importDefault(require("path"));
var isTruthy = function (val) {
    if (typeof val === "string") {
        return val.toLowerCase() === "true";
    }
    return !!val;
};
exports.featureFlagRouter = new utils_1.FlagRouter({});
exports.default = (function (configModule, logger, flagDirectory) {
    var e_1, _a, e_2, _b;
    if (configModule === void 0) { configModule = {}; }
    var _c = configModule.featureFlags, projectConfigFlags = _c === void 0 ? {} : _c;
    var flagDir = path_1.default.join(flagDirectory || __dirname, "*.{j,t}s");
    var supportedFlags = glob_1.default.sync(flagDir, {
        ignore: ["**/index.js", "**/index.ts", "**/*.d.ts"],
    });
    var flagConfig = {};
    try {
        for (var supportedFlags_1 = __values(supportedFlags), supportedFlags_1_1 = supportedFlags_1.next(); !supportedFlags_1_1.done; supportedFlags_1_1 = supportedFlags_1.next()) {
            var flag = supportedFlags_1_1.value;
            var flagSettings = require(flag).default;
            if (!flagSettings) {
                continue;
            }
            flagConfig[flagSettings.key] = isTruthy(flagSettings.default_val);
            var from = void 0;
            if ((0, medusa_core_utils_1.isDefined)(process.env[flagSettings.env_key])) {
                from = "environment";
                var envVal = process.env[flagSettings.env_key];
                // MEDUSA_FF_ANALYTICS="true"
                flagConfig[flagSettings.key] = isTruthy(process.env[flagSettings.env_key]);
                var parsedFromEnv = (0, utils_1.isString)(envVal) ? envVal.split(",") : [];
                // MEDUSA_FF_WORKFLOWS=createProducts,deleteProducts
                if (parsedFromEnv.length > 1) {
                    flagConfig[flagSettings.key] = (0, utils_1.objectFromStringPath)(parsedFromEnv);
                }
            }
            else if ((0, medusa_core_utils_1.isDefined)(projectConfigFlags[flagSettings.key])) {
                from = "project config";
                // featureFlags: { analytics: "true" | true }
                flagConfig[flagSettings.key] = isTruthy(projectConfigFlags[flagSettings.key]);
                // featureFlags: { workflows: { createProducts: true } }
                if ((0, utils_1.isObject)(projectConfigFlags[flagSettings.key])) {
                    flagConfig[flagSettings.key] = projectConfigFlags[flagSettings.key];
                }
            }
            if (logger && from) {
                logger.info("Using flag ".concat(flagSettings.env_key, " from ").concat(from, " with value ").concat(flagConfig[flagSettings.key]));
            }
            if (flagConfig[flagSettings.key]) {
                (0, medusa_telemetry_1.trackFeatureFlag)(flagSettings.key);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (supportedFlags_1_1 && !supportedFlags_1_1.done && (_a = supportedFlags_1.return)) _a.call(supportedFlags_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var _d = __values(Object.keys(flagConfig)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var flag = _e.value;
            exports.featureFlagRouter.setFlag(flag, flagConfig[flag]);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return exports.featureFlagRouter;
});
//# sourceMappingURL=index.js.map