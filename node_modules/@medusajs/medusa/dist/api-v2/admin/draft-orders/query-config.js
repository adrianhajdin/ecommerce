"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaultAdminOrderFields = exports.defaultAdminListOrderFields = void 0;
exports.defaultAdminListOrderFields = [
    "id",
    "status",
    "version",
    "*items",
    "summary",
    "metadata",
    "created_at",
    "updated_at",
];
exports.defaultAdminOrderFields = [
    "id",
    "status",
    "version",
    "*items",
    "*items.tax_lines",
    "*items.adjustments",
    "*items.detail",
    "*items.tax_lines",
    "*items.adjustments",
    "*shipping_address",
    "*billing_address",
    "*shipping_methods",
    "*shipping_methods.tax_lines",
    "*shipping_methods.adjustments",
    "summary",
    "metadata",
    "created_at",
    "updated_at",
];
exports.retrieveTransformQueryConfig = {
    defaults: exports.defaultAdminOrderFields,
    isList: false,
};
exports.listTransformQueryConfig = {
    defaults: exports.defaultAdminListOrderFields,
    defaultLimit: 20,
    isList: true,
};
//# sourceMappingURL=query-config.js.map