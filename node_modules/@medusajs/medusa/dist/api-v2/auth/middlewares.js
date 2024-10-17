"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutesMiddlewares = void 0;
var authenticate_middleware_1 = require("../../utils/authenticate-middleware");
exports.authRoutesMiddlewares = [
    {
        method: ["POST"],
        matcher: "/auth/session",
        middlewares: [(0, authenticate_middleware_1.authenticate)(/.*/, "bearer")],
    },
    {
        method: ["POST"],
        matcher: "/auth/:scope/:auth_provider/callback",
        middlewares: [],
    },
    {
        method: ["POST"],
        matcher: "/auth/:scope/:auth_provider",
        middlewares: [],
    },
];
//# sourceMappingURL=middlewares.js.map