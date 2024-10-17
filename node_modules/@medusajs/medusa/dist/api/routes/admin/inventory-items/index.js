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
exports.defaultAdminInventoryItemRelations = exports.defaultAdminLocationLevelFields = exports.defaultAdminInventoryItemFields = void 0;
require("reflect-metadata");
var update_inventory_item_1 = require("./update-inventory-item");
var update_location_level_1 = require("./update-location-level");
var create_location_level_1 = require("./create-location-level");
var create_inventory_item_1 = require("./create-inventory-item");
var middlewares_1 = __importStar(require("../../../middlewares"));
var list_location_levels_1 = require("./list-location-levels");
var get_inventory_item_1 = require("./get-inventory-item");
var list_inventory_items_1 = require("./list-inventory-items");
var express_1 = require("express");
var check_registered_modules_1 = require("../../../middlewares/check-registered-modules");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/inventory-items", (0, check_registered_modules_1.checkRegisteredModules)({
        inventoryService: "Inventory is not enabled. Please add an Inventory module to enable this functionality.",
    }), route);
    route.get("/", (0, middlewares_1.transformQuery)(list_inventory_items_1.AdminGetInventoryItemsParams, {
        defaultFields: exports.defaultAdminInventoryItemFields,
        defaultRelations: exports.defaultAdminInventoryItemRelations,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-inventory-items").default));
    route.post("/:id", (0, middlewares_1.transformQuery)(update_inventory_item_1.AdminPostInventoryItemsInventoryItemParams, {
        defaultFields: exports.defaultAdminInventoryItemFields,
        defaultRelations: exports.defaultAdminInventoryItemRelations,
        isList: false,
    }), (0, middlewares_1.transformBody)(update_inventory_item_1.AdminPostInventoryItemsInventoryItemReq), middlewares_1.default.wrap(require("./update-inventory-item").default));
    route.delete("/:id", middlewares_1.default.wrap(require("./delete-inventory-item").default));
    route.post("/:id/location-levels", (0, middlewares_1.transformQuery)(create_location_level_1.AdminPostInventoryItemsItemLocationLevelsParams, {
        defaultFields: exports.defaultAdminInventoryItemFields,
        defaultRelations: exports.defaultAdminInventoryItemRelations,
        isList: false,
    }), (0, middlewares_1.transformBody)(create_location_level_1.AdminPostInventoryItemsItemLocationLevelsReq), middlewares_1.default.wrap(require("./create-location-level").default));
    route.post("/", (0, middlewares_1.transformQuery)(create_inventory_item_1.AdminPostInventoryItemsParams, {
        defaultFields: exports.defaultAdminInventoryItemFields,
        defaultRelations: exports.defaultAdminInventoryItemRelations,
        isList: false,
    }), (0, middlewares_1.transformBody)(create_inventory_item_1.AdminPostInventoryItemsReq), middlewares_1.default.wrap(require("./create-inventory-item").default));
    route.get("/:id/location-levels", (0, middlewares_1.transformQuery)(list_location_levels_1.AdminGetInventoryItemsItemLocationLevelsParams, {
        defaultFields: exports.defaultAdminLocationLevelFields,
        defaultRelations: [],
        isList: false,
    }), middlewares_1.default.wrap(require("./list-location-levels").default));
    route.delete("/:id/location-levels/:location_id", middlewares_1.default.wrap(require("./delete-location-level").default));
    route.post("/:id/location-levels/:location_id", (0, middlewares_1.transformQuery)(update_location_level_1.AdminPostInventoryItemsItemLocationLevelsLevelParams, {
        defaultFields: exports.defaultAdminInventoryItemFields,
        defaultRelations: exports.defaultAdminInventoryItemRelations,
        isList: false,
    }), (0, middlewares_1.transformBody)(update_location_level_1.AdminPostInventoryItemsItemLocationLevelsLevelReq), middlewares_1.default.wrap(require("./update-location-level").default));
    route.get("/:id", (0, middlewares_1.transformQuery)(get_inventory_item_1.AdminGetInventoryItemsItemParams, {
        defaultFields: exports.defaultAdminInventoryItemFields,
        defaultRelations: exports.defaultAdminInventoryItemRelations,
        isList: false,
    }), middlewares_1.default.wrap(require("./get-inventory-item").default));
    return app;
});
exports.defaultAdminInventoryItemFields = [
    "id",
    "sku",
    "title",
    "description",
    "thumbnail",
    "origin_country",
    "hs_code",
    "requires_shipping",
    "mid_code",
    "material",
    "weight",
    "length",
    "height",
    "width",
    "metadata",
    "created_at",
    "updated_at",
];
exports.defaultAdminLocationLevelFields = [
    "id",
    "inventory_item_id",
    "location_id",
    "stocked_quantity",
    "reserved_quantity",
    "incoming_quantity",
    "metadata",
    "created_at",
    "updated_at",
];
exports.defaultAdminInventoryItemRelations = [];
__exportStar(require("./create-inventory-item"), exports);
__exportStar(require("./create-location-level"), exports);
__exportStar(require("./get-inventory-item"), exports);
__exportStar(require("./list-inventory-items"), exports);
__exportStar(require("./list-location-levels"), exports);
__exportStar(require("./update-inventory-item"), exports);
__exportStar(require("./update-location-level"), exports);
//# sourceMappingURL=index.js.map