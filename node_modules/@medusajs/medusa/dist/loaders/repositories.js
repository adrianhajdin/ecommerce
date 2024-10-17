"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var glob_1 = __importDefault(require("glob"));
var path_1 = __importDefault(require("path"));
var format_registration_name_1 = __importDefault(require("../utils/format-registration-name"));
var awilix_1 = require("awilix");
/**
 * Registers all models in the model directory
 */
exports.default = (function (_a) {
    var container = _a.container, isTest = _a.isTest;
    var corePath = isTest ? "../repositories/*.ts" : "../repositories/*.js";
    var coreFull = path_1.default.join(__dirname, corePath);
    var core = glob_1.default.sync(coreFull, { cwd: __dirname });
    core.forEach(function (fn) {
        var _a;
        var loaded = require(fn).default;
        if (typeof loaded === "object") {
            var name_1 = (0, format_registration_name_1.default)(fn);
            container.register((_a = {},
                _a[name_1] = (0, awilix_1.asValue)(loaded),
                _a));
        }
    });
});
//# sourceMappingURL=repositories.js.map