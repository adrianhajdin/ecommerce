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
exports.unauthenticatedInviteRoutes = void 0;
var express_1 = require("express");
var middlewares_1 = __importDefault(require("../../../middlewares"));
require("reflect-metadata");
var unauthenticatedInviteRoutes = function (app) {
    var route = (0, express_1.Router)();
    app.use("/invites", route);
    route.post("/accept", middlewares_1.default.wrap(require("./accept-invite").default));
};
exports.unauthenticatedInviteRoutes = unauthenticatedInviteRoutes;
exports.default = (function (app) {
    var route = (0, express_1.Router)();
    app.use("/invites", route);
    route.get("/", middlewares_1.default.wrap(require("./list-invites").default));
    route.post("/", middlewares_1.default.wrap(require("./create-invite").default));
    route.post("/:invite_id/resend", middlewares_1.default.wrap(require("./resend-invite").default));
    route.delete("/:invite_id", middlewares_1.default.wrap(require("./delete-invite").default));
    return app;
});
__exportStar(require("./accept-invite"), exports);
__exportStar(require("./create-invite"), exports);
__exportStar(require("./delete-invite"), exports);
__exportStar(require("./list-invites"), exports);
__exportStar(require("./resend-invite"), exports);
//# sourceMappingURL=index.js.map