"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer_1 = __importDefault(require("multer"));
var middlewares_1 = __importStar(require("../../../middlewares"));
var delete_upload_1 = require("./delete-upload");
var get_download_url_1 = require("./get-download-url");
var route = (0, express_1.Router)();
var upload = (0, multer_1.default)({ dest: "uploads/" });
exports.default = (function (app) {
    app.use("/uploads", route);
    route.post("/", upload.array("files"), middlewares_1.default.wrap(require("./create-upload").default));
    route.post("/protected", upload.array("files"), middlewares_1.default.wrap(require("./create-protected-upload").default));
    route.delete("/", (0, middlewares_1.transformBody)(delete_upload_1.AdminDeleteUploadsReq), middlewares_1.default.wrap(require("./delete-upload").default));
    route.post("/download-url", (0, middlewares_1.transformBody)(get_download_url_1.AdminPostUploadsDownloadUrlReq), middlewares_1.default.wrap(require("./get-download-url").default));
    return app;
});
__exportStar(require("./create-upload"), exports);
__exportStar(require("./delete-upload"), exports);
__exportStar(require("./get-download-url"), exports);
//# sourceMappingURL=index.js.map