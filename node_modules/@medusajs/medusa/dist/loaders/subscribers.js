"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var glob_1 = __importDefault(require("glob"));
var path_1 = __importDefault(require("path"));
var awilix_1 = require("awilix");
/**
 * Registers all subscribers in the subscribers directory
 */
exports.default = (function (_a) {
    var container = _a.container;
    var isTest = process.env.NODE_ENV === "test";
    var corePath = isTest
        ? "../subscribers/__mocks__/*.js"
        : "../subscribers/*.js";
    var coreFull = path_1.default.join(__dirname, corePath);
    var core = glob_1.default.sync(coreFull, { cwd: __dirname });
    core.forEach(function (fn) {
        var loaded = require(fn).default;
        container.build((0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle); }).singleton());
    });
});
//# sourceMappingURL=subscribers.js.map