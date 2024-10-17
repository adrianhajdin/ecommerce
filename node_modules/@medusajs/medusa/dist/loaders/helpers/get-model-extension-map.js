"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModelExtensionsMap = void 0;
var glob_1 = __importDefault(require("glob"));
var path_1 = __importDefault(require("path"));
var typeorm_1 = require("typeorm");
var format_registration_name_1 = require("../../utils/format-registration-name");
function getModelExtensionsMap(_a) {
    var directory = _a.directory, pathGlob = _a.pathGlob, _b = _a.config, config = _b === void 0 ? {} : _b;
    var modelExtensionsMap = new Map();
    var fullPathGlob = directory && pathGlob ? path_1.default.join(directory, pathGlob) : null;
    var modelExtensions = fullPathGlob
        ? glob_1.default.sync(fullPathGlob, {
            cwd: directory,
            ignore: ["index.js", "index.js.map"],
        })
        : [];
    modelExtensions.forEach(function (modelExtensionPath) {
        var extendedModel = require(modelExtensionPath);
        if (extendedModel) {
            Object.entries(extendedModel).map(function (_a) {
                var _b = __read(_a, 2), _key = _b[0], val = _b[1];
                if (typeof val === "function" || val instanceof typeorm_1.EntitySchema) {
                    if (config.register) {
                        var name_1 = (0, format_registration_name_1.formatRegistrationName)(modelExtensionPath);
                        modelExtensionsMap.set(name_1, val);
                    }
                }
            });
        }
    });
    return modelExtensionsMap;
}
exports.getModelExtensionsMap = getModelExtensionsMap;
//# sourceMappingURL=get-model-extension-map.js.map