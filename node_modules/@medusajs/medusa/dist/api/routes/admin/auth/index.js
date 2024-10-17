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
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/auth", route);
    route.get("/", middlewares_1.default.authenticate(), middlewares_1.default.wrap(require("./get-session").default));
    route.post("/", middlewares_1.default.wrap(require("./create-session").default));
    route.delete("/", middlewares_1.default.authenticate(), middlewares_1.default.wrap(require("./delete-session").default));
    route.post("/token", middlewares_1.default.wrap(require("./get-token").default));
    return app;
});
__exportStar(require("./create-session"), exports);
__exportStar(require("./delete-session"), exports);
__exportStar(require("./get-session"), exports);
__exportStar(require("./get-token"), exports);
//# sourceMappingURL=index.js.map