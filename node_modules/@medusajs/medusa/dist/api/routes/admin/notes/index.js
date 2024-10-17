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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var middlewares_1 = __importDefault(require("../../../middlewares"));
require("reflect-metadata");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/notes", route);
    route.get("/:id", middlewares_1.default.wrap(require("./get-note").default));
    route.get("/", middlewares_1.default.wrap(require("./list-notes").default));
    route.post("/", middlewares_1.default.wrap(require("./create-note").default));
    route.post("/:id", middlewares_1.default.wrap(require("./update-note").default));
    route.delete("/:id", middlewares_1.default.wrap(require("./delete-note").default));
    return app;
});
__exportStar(require("./create-note"), exports);
__exportStar(require("./delete-note"), exports);
__exportStar(require("./get-note"), exports);
__exportStar(require("./list-notes"), exports);
__exportStar(require("./update-note"), exports);
//# sourceMappingURL=index.js.map