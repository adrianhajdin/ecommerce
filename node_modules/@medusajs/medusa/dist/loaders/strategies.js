"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var glob_1 = __importDefault(require("glob"));
var path_1 = __importDefault(require("path"));
var awilix_1 = require("awilix");
var format_registration_name_1 = __importDefault(require("../utils/format-registration-name"));
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
/**
 * Registers all strategies in the strategies directory
 * @returns void
 */
exports.default = (function (_a) {
    var container = _a.container, configModule = _a.configModule, isTest = _a.isTest;
    var useMock = (0, medusa_core_utils_1.isDefined)(isTest) ? isTest : process.env.NODE_ENV === "test";
    var corePath = useMock
        ? "../strategies/__mocks__/[!__]*.js"
        : "../strategies/**/[!__]*.js";
    var coreFull = path_1.default.join(__dirname, corePath);
    var ignore = [
        "**/__fixtures__/**",
        "**/index.js",
        "**/index.ts",
        "**/utils.js",
        "**/utils.ts",
        "**/types.js",
        "**/types.ts",
        "**/types/**",
    ];
    if (!useMock) {
        ignore.push("**/__tests__/**", "**/__mocks__/**");
    }
    var core = glob_1.default.sync(coreFull, {
        cwd: __dirname,
        ignore: ignore,
    });
    core.forEach(function (fn) {
        var _a, _b;
        var loaded = require(fn).default;
        var name = (0, format_registration_name_1.default)(fn);
        if (interfaces_1.AbstractBatchJobStrategy.isBatchJobStrategy(loaded.prototype)) {
            container.registerAdd("batchJobStrategies", (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, configModule); }));
            container.register((_a = {},
                _a[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, configModule); }).singleton(),
                _a["batch_".concat(loaded.identifier)] = (0, awilix_1.aliasTo)(name),
                _a["batchType_".concat(loaded.batchType)] = (0, awilix_1.aliasTo)(name),
                _a));
        }
        else {
            container.register((_b = {},
                _b[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, configModule); }).singleton(),
                _b));
        }
    });
});
//# sourceMappingURL=strategies.js.map