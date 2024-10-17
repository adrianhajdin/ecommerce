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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = require("express");
var medusa_core_utils_1 = require("medusa-core-utils");
var middlewares_1 = __importDefault(require("../../middlewares"));
var analytics_configs_1 = __importDefault(require("./analytics-configs"));
var apps_1 = __importDefault(require("./apps"));
var auth_1 = __importDefault(require("./auth"));
var batch_1 = __importDefault(require("./batch"));
var collections_1 = __importDefault(require("./collections"));
var currencies_1 = __importDefault(require("./currencies"));
var customer_groups_1 = __importDefault(require("./customer-groups"));
var customers_1 = __importDefault(require("./customers"));
var discounts_1 = __importDefault(require("./discounts"));
var draft_orders_1 = __importDefault(require("./draft-orders"));
var gift_cards_1 = __importDefault(require("./gift-cards"));
var inventory_items_1 = __importDefault(require("./inventory-items"));
var invites_1 = __importStar(require("./invites"));
var notes_1 = __importDefault(require("./notes"));
var notifications_1 = __importDefault(require("./notifications"));
var order_edits_1 = __importDefault(require("./order-edits"));
var orders_1 = __importDefault(require("./orders"));
var payment_collections_1 = __importDefault(require("./payment-collections"));
var payments_1 = __importDefault(require("./payments"));
var price_lists_1 = __importDefault(require("./price-lists"));
var product_categories_1 = __importDefault(require("./product-categories"));
var product_tags_1 = __importDefault(require("./product-tags"));
var product_types_1 = __importDefault(require("./product-types"));
var products_1 = __importDefault(require("./products"));
var publishable_api_keys_1 = __importDefault(require("./publishable-api-keys"));
var regions_1 = __importDefault(require("./regions"));
var reservations_1 = __importDefault(require("./reservations"));
var return_reasons_1 = __importDefault(require("./return-reasons"));
var returns_1 = __importDefault(require("./returns"));
var sales_channels_1 = __importDefault(require("./sales-channels"));
var shipping_options_1 = __importDefault(require("./shipping-options"));
var shipping_profiles_1 = __importDefault(require("./shipping-profiles"));
var stock_locations_1 = __importDefault(require("./stock-locations"));
var store_1 = __importDefault(require("./store"));
var swaps_1 = __importDefault(require("./swaps"));
var tax_rates_1 = __importDefault(require("./tax-rates"));
var uploads_1 = __importDefault(require("./uploads"));
var users_1 = __importStar(require("./users"));
var variants_1 = __importDefault(require("./variants"));
var workflows_executions_1 = __importDefault(require("./workflows-executions"));
var route = (0, express_1.Router)();
exports.default = (function (app, container, config) {
    app.use("/admin", route);
    var adminCors = config.admin_cors || "";
    route.use((0, cors_1.default)({
        origin: (0, medusa_core_utils_1.parseCorsOrigins)(adminCors),
        credentials: true,
    }));
    var featureFlagRouter = container.resolve("featureFlagRouter");
    // Unauthenticated routes
    (0, auth_1.default)(route);
    // reset password
    (0, users_1.unauthenticatedUserRoutes)(route);
    // accept invite
    (0, invites_1.unauthenticatedInviteRoutes)(route);
    var middlewareService = container.resolve("middlewareService");
    // Calls all middleware that has been registered to run before authentication.
    middlewareService.usePreAuthentication(app);
    // Authenticated routes
    route.use(middlewares_1.default.authenticate());
    // Calls all middleware that has been registered to run after authentication.
    middlewareService.usePostAuthentication(app);
    (0, analytics_configs_1.default)(route);
    (0, apps_1.default)(route);
    (0, batch_1.default)(route);
    (0, collections_1.default)(route);
    (0, customer_groups_1.default)(route);
    (0, customers_1.default)(route);
    (0, currencies_1.default)(route);
    (0, discounts_1.default)(route);
    (0, draft_orders_1.default)(route);
    (0, gift_cards_1.default)(route);
    (0, inventory_items_1.default)(route);
    (0, invites_1.default)(route);
    (0, notes_1.default)(route);
    (0, notifications_1.default)(route);
    (0, orders_1.default)(route, featureFlagRouter);
    (0, order_edits_1.default)(route);
    (0, price_lists_1.default)(route, featureFlagRouter);
    (0, products_1.default)(route, featureFlagRouter);
    (0, product_tags_1.default)(route);
    (0, product_types_1.default)(route);
    (0, publishable_api_keys_1.default)(route);
    (0, regions_1.default)(route, featureFlagRouter);
    (0, reservations_1.default)(route);
    (0, return_reasons_1.default)(route);
    (0, returns_1.default)(route);
    (0, reservations_1.default)(route);
    (0, sales_channels_1.default)(route);
    (0, shipping_options_1.default)(route, featureFlagRouter);
    (0, shipping_profiles_1.default)(route);
    (0, stock_locations_1.default)(route);
    (0, store_1.default)(route);
    (0, swaps_1.default)(route);
    (0, tax_rates_1.default)(route);
    (0, uploads_1.default)(route);
    (0, users_1.default)(route);
    (0, variants_1.default)(route);
    (0, payment_collections_1.default)(route);
    (0, payments_1.default)(route);
    (0, product_categories_1.default)(route);
    (0, workflows_executions_1.default)(route);
    return app;
});
//# sourceMappingURL=index.js.map