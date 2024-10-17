"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartFieldsForRefreshSteps = void 0;
exports.cartFieldsForRefreshSteps = [
    "region_id",
    "currency_code",
    "region.*",
    "items.*",
    "items.tax_lines.*",
    "shipping_address.*",
    "shipping_methods.*",
    "shipping_methods.tax_lines*",
    "customer.*",
    "customer.groups.*",
];
