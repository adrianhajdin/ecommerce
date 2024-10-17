"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = require("express");
var medusa_core_utils_1 = require("medusa-core-utils");
var middlewares_1 = __importDefault(require("../../middlewares"));
var product_types_1 = __importDefault(require("../admin/product-types"));
var auth_1 = __importDefault(require("./auth"));
var carts_1 = __importDefault(require("./carts"));
var collections_1 = __importDefault(require("./collections"));
var customers_1 = __importDefault(require("./customers"));
var gift_cards_1 = __importDefault(require("./gift-cards"));
var order_edits_1 = __importDefault(require("./order-edits"));
var orders_1 = __importDefault(require("./orders"));
var payment_collections_1 = __importDefault(require("./payment-collections"));
var product_categories_1 = __importDefault(require("./product-categories"));
var product_tags_1 = __importDefault(require("./product-tags"));
var products_1 = __importDefault(require("./products"));
var regions_1 = __importDefault(require("./regions"));
var return_reasons_1 = __importDefault(require("./return-reasons"));
var returns_1 = __importDefault(require("./returns"));
var shipping_options_1 = __importDefault(require("./shipping-options"));
var swaps_1 = __importDefault(require("./swaps"));
var variants_1 = __importDefault(require("./variants"));
var route = (0, express_1.Router)();
exports.default = (function (app, container, config) {
    app.use("/store", route);
    var featureFlagRouter = container.resolve("featureFlagRouter");
    var storeCors = config.store_cors || "";
    route.use((0, cors_1.default)({
        origin: (0, medusa_core_utils_1.parseCorsOrigins)(storeCors),
        credentials: true,
    }));
    route.use(middlewares_1.default.authenticateCustomer());
    (0, auth_1.default)(route);
    (0, collections_1.default)(route);
    (0, customers_1.default)(route, container);
    (0, products_1.default)(route, featureFlagRouter);
    (0, product_tags_1.default)(route);
    (0, product_types_1.default)(route);
    (0, orders_1.default)(route);
    (0, order_edits_1.default)(route);
    (0, carts_1.default)(route, container);
    (0, shipping_options_1.default)(route);
    (0, regions_1.default)(route, featureFlagRouter);
    (0, swaps_1.default)(route);
    (0, variants_1.default)(route);
    (0, returns_1.default)(route);
    (0, gift_cards_1.default)(route);
    (0, return_reasons_1.default)(route);
    (0, payment_collections_1.default)(route);
    (0, product_categories_1.default)(route);
    return app;
});
//# sourceMappingURL=index.js.map