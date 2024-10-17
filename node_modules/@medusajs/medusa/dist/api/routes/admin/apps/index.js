"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var middlewares_1 = __importDefault(require("../../../middlewares"));
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/apps", route);
    route.get("/", middlewares_1.default.wrap(require("./list").default));
    route.post("/authorizations", middlewares_1.default.wrap(require("./authorize-app").default));
    return app;
});
//# sourceMappingURL=index.js.map