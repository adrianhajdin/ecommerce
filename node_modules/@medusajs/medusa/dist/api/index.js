"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var compression_1 = __importDefault(require("compression"));
var express_1 = require("express");
var api_1 = require("../utils/api");
var error_handler_1 = __importDefault(require("./middlewares/error-handler"));
var admin_1 = __importDefault(require("./routes/admin"));
var store_1 = __importDefault(require("./routes/store"));
// guaranteed to get dependencies
exports.default = (function (container, config) {
    var app = (0, express_1.Router)();
    var httpCompressionOptions = (0, api_1.compressionOptions)(config);
    if (httpCompressionOptions.enabled) {
        app.use((0, compression_1.default)(__assign({ filter: api_1.shouldCompressResponse }, httpCompressionOptions)));
    }
    (0, admin_1.default)(app, container, config);
    (0, store_1.default)(app, container, config);
    app.use((0, error_handler_1.default)());
    return app;
});
// Admin
__exportStar(require("./routes/admin/analytics-configs"), exports);
__exportStar(require("./routes/admin/auth"), exports);
__exportStar(require("./routes/admin/batch"), exports);
__exportStar(require("./routes/admin/collections"), exports);
__exportStar(require("./routes/admin/currencies"), exports);
__exportStar(require("./routes/admin/customer-groups"), exports);
__exportStar(require("./routes/admin/customers"), exports);
__exportStar(require("./routes/admin/discounts"), exports);
__exportStar(require("./routes/admin/draft-orders"), exports);
__exportStar(require("./routes/admin/gift-cards"), exports);
__exportStar(require("./routes/admin/inventory-items"), exports);
__exportStar(require("./routes/admin/invites"), exports);
__exportStar(require("./routes/admin/notes"), exports);
__exportStar(require("./routes/admin/notifications"), exports);
__exportStar(require("./routes/admin/order-edits"), exports);
__exportStar(require("./routes/admin/orders"), exports);
__exportStar(require("./routes/admin/payment-collections"), exports);
__exportStar(require("./routes/admin/payments"), exports);
__exportStar(require("./routes/admin/price-lists"), exports);
__exportStar(require("./routes/admin/product-categories"), exports);
__exportStar(require("./routes/admin/product-tags"), exports);
__exportStar(require("./routes/admin/product-types"), exports);
__exportStar(require("./routes/admin/products"), exports);
__exportStar(require("./routes/admin/publishable-api-keys"), exports);
__exportStar(require("./routes/admin/regions"), exports);
__exportStar(require("./routes/admin/reservations"), exports);
__exportStar(require("./routes/admin/return-reasons"), exports);
__exportStar(require("./routes/admin/returns"), exports);
__exportStar(require("./routes/admin/sales-channels"), exports);
__exportStar(require("./routes/admin/shipping-options"), exports);
__exportStar(require("./routes/admin/shipping-profiles"), exports);
__exportStar(require("./routes/admin/stock-locations"), exports);
__exportStar(require("./routes/admin/store"), exports);
__exportStar(require("./routes/admin/swaps"), exports);
__exportStar(require("./routes/admin/tax-rates"), exports);
__exportStar(require("./routes/admin/uploads"), exports);
__exportStar(require("./routes/admin/users"), exports);
__exportStar(require("./routes/admin/variants"), exports);
__exportStar(require("./routes/admin/workflows-executions"), exports);
// Store
__exportStar(require("./routes/store/auth"), exports);
__exportStar(require("./routes/store/carts"), exports);
__exportStar(require("./routes/store/collections"), exports);
__exportStar(require("./routes/store/customers"), exports);
__exportStar(require("./routes/store/gift-cards"), exports);
__exportStar(require("./routes/store/order-edits"), exports);
__exportStar(require("./routes/store/orders"), exports);
__exportStar(require("./routes/store/payment-collections"), exports);
__exportStar(require("./routes/store/product-categories"), exports);
__exportStar(require("./routes/store/product-tags"), exports);
__exportStar(require("./routes/store/product-types"), exports);
__exportStar(require("./routes/store/products"), exports);
__exportStar(require("./routes/store/regions"), exports);
__exportStar(require("./routes/store/return-reasons"), exports);
__exportStar(require("./routes/store/returns"), exports);
__exportStar(require("./routes/store/shipping-options"), exports);
__exportStar(require("./routes/store/swaps"), exports);
__exportStar(require("./routes/store/variants"), exports);
//# sourceMappingURL=index.js.map