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
exports.defaultAdminStockLocationRelations = exports.defaultAdminStockLocationFields = void 0;
var express_1 = require("express");
var middlewares_1 = __importStar(require("../../../middlewares"));
var check_registered_modules_1 = require("../../../middlewares/check-registered-modules");
var create_stock_location_1 = require("./create-stock-location");
var get_stock_location_1 = require("./get-stock-location");
var list_stock_locations_1 = require("./list-stock-locations");
var update_stock_location_1 = require("./update-stock-location");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/stock-locations", (0, check_registered_modules_1.checkRegisteredModules)({
        stockLocationService: "Stock Locations are not enabled. Please add a Stock Location module to enable this functionality.",
    }), route);
    route.get("/", (0, middlewares_1.transformQuery)(list_stock_locations_1.AdminGetStockLocationsParams, {
        defaultFields: exports.defaultAdminStockLocationFields,
        defaultRelations: exports.defaultAdminStockLocationRelations,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-stock-locations").default));
    route.post("/", (0, middlewares_1.transformQuery)(create_stock_location_1.AdminPostStockLocationsParams, {
        defaultFields: exports.defaultAdminStockLocationFields,
        defaultRelations: exports.defaultAdminStockLocationRelations,
        isList: false,
    }), (0, middlewares_1.transformBody)(create_stock_location_1.AdminPostStockLocationsReq), middlewares_1.default.wrap(require("./create-stock-location").default));
    route.get("/:id", (0, middlewares_1.transformQuery)(get_stock_location_1.AdminGetStockLocationsLocationParams, {
        defaultFields: exports.defaultAdminStockLocationFields,
        defaultRelations: exports.defaultAdminStockLocationRelations,
        isList: false,
    }), middlewares_1.default.wrap(require("./get-stock-location").default));
    route.post("/:id", (0, middlewares_1.transformQuery)(update_stock_location_1.AdminPostStockLocationsLocationParams, {
        defaultFields: exports.defaultAdminStockLocationFields,
        defaultRelations: exports.defaultAdminStockLocationRelations,
        isList: false,
    }), (0, middlewares_1.transformBody)(update_stock_location_1.AdminPostStockLocationsLocationReq), middlewares_1.default.wrap(require("./update-stock-location").default));
    route.delete("/:id", middlewares_1.default.wrap(require("./delete-stock-location").default));
    return app;
});
// eslint-disable-next-line max-len
exports.defaultAdminStockLocationFields = ["id", "name", "address_id", "metadata", "created_at", "updated_at"];
exports.defaultAdminStockLocationRelations = [];
__exportStar(require("./create-stock-location"), exports);
__exportStar(require("./get-stock-location"), exports);
__exportStar(require("./list-stock-locations"), exports);
__exportStar(require("./update-stock-location"), exports);
//# sourceMappingURL=index.js.map