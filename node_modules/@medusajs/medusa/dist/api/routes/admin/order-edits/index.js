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
var express_1 = require("express");
var order_edit_1 = require("../../../../types/order-edit");
var middlewares_1 = __importStar(require("../../../middlewares"));
var add_line_item_1 = require("./add-line-item");
var create_order_edit_1 = require("./create-order-edit");
var get_order_edit_1 = require("./get-order-edit");
var list_order_edit_1 = require("./list-order-edit");
var request_confirmation_1 = require("./request-confirmation");
var update_order_edit_1 = require("./update-order-edit");
var update_order_edit_line_item_1 = require("./update-order-edit-line-item");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/order-edits", route);
    route.post("/", (0, middlewares_1.transformBody)(create_order_edit_1.AdminPostOrderEditsReq), middlewares_1.default.wrap(require("./create-order-edit").default));
    route.get("/", (0, middlewares_1.transformQuery)(list_order_edit_1.GetOrderEditsParams, {
        defaultFields: order_edit_1.defaultOrderEditFields,
        defaultRelations: order_edit_1.defaultOrderEditRelations,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-order-edit").default));
    route.get("/:id", (0, middlewares_1.transformQuery)(get_order_edit_1.GetOrderEditsOrderEditParams, {
        defaultRelations: order_edit_1.defaultOrderEditRelations,
        defaultFields: order_edit_1.defaultOrderEditFields,
        isList: false,
    }), middlewares_1.default.wrap(require("./get-order-edit").default));
    route.post("/:id", (0, middlewares_1.transformBody)(update_order_edit_1.AdminPostOrderEditsOrderEditReq), middlewares_1.default.wrap(require("./update-order-edit").default));
    route.post("/:id/cancel", middlewares_1.default.wrap(require("./cancel-order-edit").default));
    route.post("/:id/items", (0, middlewares_1.transformBody)(add_line_item_1.AdminPostOrderEditsEditLineItemsReq), middlewares_1.default.wrap(require("./add-line-item").default));
    route.post("/:id/confirm", middlewares_1.default.wrap(require("./confirm-order-edit").default));
    route.delete("/:id", middlewares_1.default.wrap(require("./delete-order-edit").default));
    route.delete("/:id/changes/:change_id", middlewares_1.default.wrap(require("./delete-order-edit-item-change").default));
    route.post("/:id/request", (0, middlewares_1.transformBody)(request_confirmation_1.AdminPostOrderEditsRequestConfirmationReq), middlewares_1.default.wrap(require("./request-confirmation").default));
    route.post("/:id/items/:item_id", (0, middlewares_1.transformBody)(update_order_edit_line_item_1.AdminPostOrderEditsEditLineItemsLineItemReq), middlewares_1.default.wrap(require("./update-order-edit-line-item").default));
    route.delete("/:id/items/:item_id", middlewares_1.default.wrap(require("./delete-line-item").default));
    return app;
});
__exportStar(require("./add-line-item"), exports);
__exportStar(require("./create-order-edit"), exports);
__exportStar(require("./get-order-edit"), exports);
__exportStar(require("./list-order-edit"), exports);
__exportStar(require("./request-confirmation"), exports);
__exportStar(require("./update-order-edit"), exports);
__exportStar(require("./update-order-edit-line-item"), exports);
//# sourceMappingURL=index.js.map