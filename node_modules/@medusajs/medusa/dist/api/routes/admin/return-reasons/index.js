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
exports.defaultAdminReturnReasonsRelations = exports.defaultAdminReturnReasonsFields = void 0;
var express_1 = require("express");
var middlewares_1 = __importDefault(require("../../../middlewares"));
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/return-reasons", route);
    /**
     * List reasons
     */
    route.get("/", middlewares_1.default.wrap(require("./list-reasons").default));
    /**
     * Retrieve reason
     */
    route.get("/:id", middlewares_1.default.wrap(require("./get-reason").default));
    /**
     * Create a reason
     */
    route.post("/", middlewares_1.default.wrap(require("./create-reason").default));
    /**
     * Update a reason
     */
    route.post("/:id", middlewares_1.default.wrap(require("./update-reason").default));
    /**
     * Delete a reason
     */
    route.delete("/:id", middlewares_1.default.wrap(require("./delete-reason").default));
    return app;
});
exports.defaultAdminReturnReasonsFields = [
    "id",
    "value",
    "label",
    "parent_return_reason_id",
    "description",
    "created_at",
    "updated_at",
    "deleted_at",
];
exports.defaultAdminReturnReasonsRelations = [
    "parent_return_reason",
    "return_reason_children",
];
__exportStar(require("./create-reason"), exports);
__exportStar(require("./update-reason"), exports);
//# sourceMappingURL=index.js.map