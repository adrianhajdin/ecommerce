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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleConfigError = void 0;
var medusa_core_utils_1 = require("medusa-core-utils");
var logger_1 = __importDefault(require("./logger"));
var isProduction = ["production", "prod"].includes(process.env.NODE_ENV || "");
var errorHandler = isProduction
    ? function (msg) {
        throw new Error(msg);
    }
    : console.log;
var handleConfigError = function (error) {
    logger_1.default.error("Error in loading config: ".concat(error.message));
    if (error.stack) {
        logger_1.default.error(error.stack);
    }
    process.exit(1);
};
exports.handleConfigError = handleConfigError;
exports.default = (function (rootDirectory) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var _k = (0, medusa_core_utils_1.getConfigFile)(rootDirectory, "medusa-config"), configModule = _k.configModule, error = _k.error;
    if (error) {
        (0, exports.handleConfigError)(error);
    }
    if (!((_a = configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig) === null || _a === void 0 ? void 0 : _a.redis_url)) {
        console.log("[medusa-config] \u26A0\uFE0F redis_url not found. A fake redis instance will be used.");
    }
    var jwt_secret = (_c = (_b = configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig) === null || _b === void 0 ? void 0 : _b.jwt_secret) !== null && _c !== void 0 ? _c : process.env.JWT_SECRET;
    if (!jwt_secret) {
        errorHandler("[medusa-config] \u26A0\uFE0F jwt_secret not found.".concat(isProduction
            ? ""
            : " fallback to either cookie_secret or default 'supersecret'."));
    }
    var cookie_secret = (_e = (_d = configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig) === null || _d === void 0 ? void 0 : _d.cookie_secret) !== null && _e !== void 0 ? _e : process.env.COOKIE_SECRET;
    if (!cookie_secret) {
        errorHandler("[medusa-config] \u26A0\uFE0F cookie_secret not found.".concat(isProduction
            ? ""
            : " fallback to either cookie_secret or default 'supersecret'."));
    }
    var worker_mode = (_f = configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig) === null || _f === void 0 ? void 0 : _f.worker_mode;
    if (!(0, medusa_core_utils_1.isDefined)(worker_mode)) {
        var env = process.env.MEDUSA_WORKER_MODE;
        if ((0, medusa_core_utils_1.isDefined)(env)) {
            if (env === "shared" || env === "worker" || env === "server") {
                worker_mode = env;
            }
        }
        else {
            worker_mode = "shared";
        }
    }
    return {
        projectConfig: __assign(__assign({ jwt_secret: jwt_secret !== null && jwt_secret !== void 0 ? jwt_secret : "supersecret", cookie_secret: cookie_secret !== null && cookie_secret !== void 0 ? cookie_secret : "supersecret" }, configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig), { worker_mode: worker_mode }),
        modules: (_g = configModule.modules) !== null && _g !== void 0 ? _g : {},
        featureFlags: (_h = configModule === null || configModule === void 0 ? void 0 : configModule.featureFlags) !== null && _h !== void 0 ? _h : {},
        plugins: (_j = configModule === null || configModule === void 0 ? void 0 : configModule.plugins) !== null && _j !== void 0 ? _j : [],
    };
});
//# sourceMappingURL=config.js.map