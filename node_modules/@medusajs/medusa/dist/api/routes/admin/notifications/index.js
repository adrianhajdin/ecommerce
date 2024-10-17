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
exports.defaultAdminNotificationsFields = exports.defaultAdminNotificationsRelations = void 0;
var express_1 = require("express");
var middlewares_1 = __importDefault(require("../../../middlewares"));
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/notifications", route);
    /**
     * List notifications
     */
    route.get("/", middlewares_1.default.wrap(require("./list-notifications").default));
    /**
     * Resend a notification
     */
    route.post("/:id/resend", middlewares_1.default.wrap(require("./resend-notification").default));
    return app;
});
exports.defaultAdminNotificationsRelations = ["resends"];
exports.defaultAdminNotificationsFields = [
    "id",
    "resource_type",
    "resource_id",
    "event_name",
    "to",
    "provider_id",
    "created_at",
    "updated_at",
];
__exportStar(require("./list-notifications"), exports);
__exportStar(require("./resend-notification"), exports);
//# sourceMappingURL=index.js.map