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
require("reflect-metadata");
var middlewares_1 = __importStar(require("../../../middlewares"));
var feature_flag_enabled_1 = require("../../../middlewares/feature-flag-enabled");
var product_existence_1 = require("../../../middlewares/validators/product-existence");
var add_product_batch_1 = require("./add-product-batch");
var create_sales_channel_1 = require("./create-sales-channel");
var delete_products_batch_1 = require("./delete-products-batch");
var list_sales_channels_1 = require("./list-sales-channels");
var update_sales_channel_1 = require("./update-sales-channel");
var associate_stock_location_1 = require("./associate-stock-location");
var remove_stock_location_1 = require("./remove-stock-location");
var check_registered_modules_1 = require("../../../middlewares/check-registered-modules");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/sales-channels", (0, feature_flag_enabled_1.isFeatureFlagEnabled)("sales_channels"), route);
    route.get("/", (0, middlewares_1.transformQuery)(list_sales_channels_1.AdminGetSalesChannelsParams, {
        isList: true,
    }), middlewares_1.default.wrap(require("./list-sales-channels").default));
    var salesChannelRouter = (0, express_1.Router)({ mergeParams: true });
    route.use("/:id", salesChannelRouter);
    salesChannelRouter.get("/", middlewares_1.default.wrap(require("./get-sales-channel").default));
    salesChannelRouter.delete("/", middlewares_1.default.wrap(require("./delete-sales-channel").default));
    salesChannelRouter.post("/", (0, middlewares_1.transformBody)(update_sales_channel_1.AdminPostSalesChannelsSalesChannelReq), middlewares_1.default.wrap(require("./update-sales-channel").default));
    salesChannelRouter.post("/stock-locations", (0, check_registered_modules_1.checkRegisteredModules)({
        stockLocationService: "Stock Locations are not enabled. Please add a Stock Location module to enable this functionality.",
    }), (0, middlewares_1.transformBody)(associate_stock_location_1.AdminPostSalesChannelsChannelStockLocationsReq), middlewares_1.default.wrap(require("./associate-stock-location").default));
    salesChannelRouter.delete("/stock-locations", (0, check_registered_modules_1.checkRegisteredModules)({
        stockLocationService: "Stock Locations are not enabled. Please add a Stock Location module to enable this functionality.",
    }), (0, middlewares_1.transformBody)(remove_stock_location_1.AdminDeleteSalesChannelsChannelStockLocationsReq), middlewares_1.default.wrap(require("./remove-stock-location").default));
    salesChannelRouter.delete("/products/batch", (0, middlewares_1.transformBody)(delete_products_batch_1.AdminDeleteSalesChannelsChannelProductsBatchReq), middlewares_1.default.wrap(require("./delete-products-batch").default));
    salesChannelRouter.post("/products/batch", (0, middlewares_1.transformBody)(add_product_batch_1.AdminPostSalesChannelsChannelProductsBatchReq), (0, product_existence_1.validateProductsExist)(function (req) { return req.body.product_ids; }), middlewares_1.default.wrap(require("./add-product-batch").default));
    route.post("/", (0, middlewares_1.transformBody)(create_sales_channel_1.AdminPostSalesChannelsReq), middlewares_1.default.wrap(require("./create-sales-channel").default));
    return app;
});
__exportStar(require("./add-product-batch"), exports);
__exportStar(require("./create-sales-channel"), exports);
__exportStar(require("./delete-products-batch"), exports);
__exportStar(require("./delete-sales-channel"), exports);
__exportStar(require("./get-sales-channel"), exports);
__exportStar(require("./list-sales-channels"), exports);
__exportStar(require("./update-sales-channel"), exports);
__exportStar(require("./associate-stock-location"), exports);
__exportStar(require("./remove-stock-location"), exports);
//# sourceMappingURL=index.js.map