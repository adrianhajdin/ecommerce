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
var format_registration_name_1 = require("../utils/format-registration-name");
var get_model_extension_map_1 = require("./helpers/get-model-extension-map");
var glob_1 = __importDefault(require("glob"));
var path_1 = __importDefault(require("path"));
var typeorm_1 = require("typeorm");
var awilix_1 = require("awilix");
/**
 * Registers all models in the model directory
 */
exports.default = (function (_a, config) {
    var container = _a.container, isTest = _a.isTest, rootDirectory = _a.rootDirectory, _b = _a.corePathGlob, corePathGlob = _b === void 0 ? "../models/*.js" : _b, _c = _a.coreTestPathGlob, coreTestPathGlob = _c === void 0 ? "../models/*.ts" : _c, _d = _a.extensionPathGlob, extensionPathGlob = _d === void 0 ? "dist/models/*.js" : _d;
    if (config === void 0) { config = { register: true }; }
    var coreModelsGlob = isTest ? coreTestPathGlob : corePathGlob;
    var coreModelsFullGlob = path_1.default.join(__dirname, coreModelsGlob);
    var models = [];
    var coreModels = glob_1.default.sync(coreModelsFullGlob, {
        cwd: __dirname,
        ignore: ["index.js", "index.ts", "index.js.map"],
    });
    var modelExtensionsMap = (0, get_model_extension_map_1.getModelExtensionsMap)({
        directory: rootDirectory,
        pathGlob: extensionPathGlob,
        config: config,
    });
    coreModels.forEach(function (modelPath) {
        var loaded = require(modelPath);
        if (loaded) {
            Object.entries(loaded).map(function (_a) {
                var _b;
                var _c = __read(_a, 2), val = _c[1];
                if (typeof val === "function" || val instanceof typeorm_1.EntitySchema) {
                    if (config.register) {
                        var name_1 = (0, format_registration_name_1.formatRegistrationName)(modelPath);
                        var mappedExtensionModel = modelExtensionsMap.get(name_1);
                        // If an extension file is found, override it with that instead
                        if (mappedExtensionModel) {
                            var coreModel = require(modelPath);
                            var modelName = (0, format_registration_name_1.formatRegistrationNameWithoutNamespace)(modelPath);
                            coreModel[modelName] = mappedExtensionModel;
                            val = mappedExtensionModel;
                        }
                        container.register((_b = {},
                            _b[name_1] = (0, awilix_1.asClass)(val),
                            _b));
                        container.registerAdd("db_entities", (0, awilix_1.asValue)(val));
                    }
                    models.push(val);
                }
            });
        }
    });
    return models;
});
//# sourceMappingURL=models.js.map