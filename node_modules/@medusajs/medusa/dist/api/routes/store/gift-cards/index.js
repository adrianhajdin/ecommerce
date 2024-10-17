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
exports.allowedStoreGiftCardFields = exports.allowedStoreGiftCardRelations = exports.defaultStoreGiftCardFields = exports.defaultStoreGiftCardRelations = void 0;
var express_1 = require("express");
var middlewares_1 = __importDefault(require("../../../middlewares"));
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/gift-cards", route);
    route.get("/:code", middlewares_1.default.wrap(require("./get-gift-card").default));
    return app;
});
exports.defaultStoreGiftCardRelations = ["region"];
exports.defaultStoreGiftCardFields = [
    "id",
    "code",
    "value",
    "balance",
];
exports.allowedStoreGiftCardRelations = ["region"];
exports.allowedStoreGiftCardFields = ["id", "code", "value", "balance"];
__exportStar(require("./get-gift-card"), exports);
//# sourceMappingURL=index.js.map