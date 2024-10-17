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
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAdminUserFields = exports.unauthenticatedUserRoutes = void 0;
var express_1 = require("express");
var middlewares_1 = __importStar(require("../../../middlewares"));
var list_users_1 = require("./list-users");
var unauthenticatedUserRoutes = function (app) {
    var route = (0, express_1.Router)();
    app.use("/users", route);
    route.post("/password-token", middlewares_1.default.wrap(require("./reset-password-token").default));
    route.post("/reset-password", middlewares_1.default.wrap(require("./reset-password").default));
};
exports.unauthenticatedUserRoutes = unauthenticatedUserRoutes;
exports.default = (function (app) {
    var route = (0, express_1.Router)();
    app.use("/users", route);
    route.get("/:user_id", middlewares_1.default.wrap(require("./get-user").default));
    route.post("/", middlewares_1.default.wrap(require("./create-user").default));
    route.post("/:user_id", middlewares_1.default.wrap(require("./update-user").default));
    route.delete("/:user_id", middlewares_1.default.wrap(require("./delete-user").default));
    route.get("/", (0, middlewares_1.transformQuery)(list_users_1.AdminGetUsersParams, {
        defaultFields: exports.defaultAdminUserFields,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-users").default));
    return app;
});
exports.defaultAdminUserFields = [
    "id",
    "email",
    "first_name",
    "last_name",
    "role",
    "api_token",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
];
__exportStar(require("./reset-password"), exports);
__exportStar(require("./reset-password-token"), exports);
__exportStar(require("./create-user"), exports);
__exportStar(require("./delete-user"), exports);
__exportStar(require("./get-user"), exports);
__exportStar(require("./list-users"), exports);
__exportStar(require("./update-user"), exports);
//# sourceMappingURL=index.js.map