"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMedusaVersion = void 0;
var path_1 = __importDefault(require("path"));
var getMedusaVersion = function () {
    try {
        return require(path_1.default.join(process.cwd(), "node_modules", "@medusajs/medusa", "package.json")).version;
    }
    catch (e) {
        return "";
    }
};
exports.getMedusaVersion = getMedusaVersion;
//# sourceMappingURL=get-medusa-version.js.map