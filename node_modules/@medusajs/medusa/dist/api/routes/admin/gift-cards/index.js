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
exports.defaultAdminGiftCardRelations = exports.defaultAdminGiftCardFields = void 0;
var express_1 = require("express");
require("reflect-metadata");
var middlewares_1 = __importStar(require("../../../middlewares"));
var list_gift_cards_1 = require("./list-gift-cards");
var create_gift_card_1 = require("./create-gift-card");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/gift-cards", route);
    route.get("/", (0, middlewares_1.transformQuery)(list_gift_cards_1.AdminGetGiftCardsParams, {
        defaultFields: exports.defaultAdminGiftCardFields,
        defaultRelations: exports.defaultAdminGiftCardRelations,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-gift-cards").default));
    route.post("/", (0, middlewares_1.transformBody)(create_gift_card_1.AdminPostGiftCardsReq), middlewares_1.default.wrap(require("./create-gift-card").default));
    route.get("/:id", middlewares_1.default.wrap(require("./get-gift-card").default));
    route.post("/:id", middlewares_1.default.wrap(require("./update-gift-card").default));
    route.delete("/:id", middlewares_1.default.wrap(require("./delete-gift-card").default));
    return app;
});
exports.defaultAdminGiftCardFields = [
    "id",
    "code",
    "value",
    "balance",
    "region_id",
    "is_disabled",
    "ends_at",
    "tax_rate",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
];
exports.defaultAdminGiftCardRelations = ["region", "order"];
__exportStar(require("./create-gift-card"), exports);
__exportStar(require("./list-gift-cards"), exports);
__exportStar(require("./update-gift-card"), exports);
//# sourceMappingURL=index.js.map