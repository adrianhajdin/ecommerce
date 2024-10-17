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
exports.defaultReservationFields = exports.defaultAdminReservationRelations = void 0;
var middlewares_1 = __importStar(require("../../../middlewares"));
var list_reservations_1 = require("./list-reservations");
var create_reservation_1 = require("./create-reservation");
var update_reservation_1 = require("./update-reservation");
var express_1 = require("express");
var check_registered_modules_1 = require("../../../middlewares/check-registered-modules");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/reservations", (0, check_registered_modules_1.checkRegisteredModules)({
        inventoryService: "Inventory is not enabled. Please add an Inventory module to enable this functionality.",
    }), route);
    route.get("/:id", middlewares_1.default.wrap(require("./get-reservation").default));
    route.post("/", (0, middlewares_1.transformBody)(create_reservation_1.AdminPostReservationsReq), middlewares_1.default.wrap(require("./create-reservation").default));
    route.get("/", (0, middlewares_1.transformQuery)(list_reservations_1.AdminGetReservationsParams, {
        defaultFields: exports.defaultReservationFields,
        defaultRelations: exports.defaultAdminReservationRelations,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-reservations").default));
    route.post("/:id", (0, middlewares_1.transformBody)(update_reservation_1.AdminPostReservationsReservationReq), middlewares_1.default.wrap(require("./update-reservation").default));
    route.delete("/:id", middlewares_1.default.wrap(require("./delete-reservation").default));
    return app;
});
exports.defaultAdminReservationRelations = [];
exports.defaultReservationFields = [
    "id",
    "location_id",
    "inventory_item_id",
    "quantity",
    "line_item_id",
    "description",
    "metadata",
    "created_at",
    "updated_at",
];
__exportStar(require("./create-reservation"), exports);
__exportStar(require("./delete-reservation"), exports);
__exportStar(require("./get-reservation"), exports);
__exportStar(require("./list-reservations"), exports);
__exportStar(require("./update-reservation"), exports);
//# sourceMappingURL=index.js.map