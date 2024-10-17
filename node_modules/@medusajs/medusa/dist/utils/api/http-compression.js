"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compressionOptions = exports.shouldCompressResponse = void 0;
var compression_1 = __importDefault(require("compression"));
function shouldCompressResponse(req, res) {
    var logger = req.scope.resolve("logger");
    var projectConfig = req.scope.resolve("configModule").projectConfig;
    var enabled = compressionOptions(projectConfig).enabled;
    if (!enabled) {
        return false;
    }
    if (req.headers["x-no-compression"]) {
        // don't compress responses with this request header
        return false;
    }
    // fallback to standard filter function
    return compression_1.default.filter(req, res);
}
exports.shouldCompressResponse = shouldCompressResponse;
function compressionOptions(config) {
    var _a, _b, _c, _d, _e;
    var responseCompressionOptions = (_a = config.http_compression) !== null && _a !== void 0 ? _a : {};
    responseCompressionOptions.enabled = (_b = responseCompressionOptions.enabled) !== null && _b !== void 0 ? _b : false;
    responseCompressionOptions.level = (_c = responseCompressionOptions.level) !== null && _c !== void 0 ? _c : 6;
    responseCompressionOptions.memLevel = (_d = responseCompressionOptions.memLevel) !== null && _d !== void 0 ? _d : 8;
    responseCompressionOptions.threshold =
        (_e = responseCompressionOptions.threshold) !== null && _e !== void 0 ? _e : 1024;
    return responseCompressionOptions;
}
exports.compressionOptions = compressionOptions;
//# sourceMappingURL=http-compression.js.map