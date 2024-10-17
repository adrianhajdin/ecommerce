"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooksRoutesMiddlewares = void 0;
exports.hooksRoutesMiddlewares = [
    {
        method: ["POST"],
        bodyParser: { preserveRawBody: true },
        matcher: "/hooks/payment/:provider",
    },
];
//# sourceMappingURL=middlewares.js.map