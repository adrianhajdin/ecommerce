"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStoreOrderEditFields = exports.defaultStoreOrderEditRelations = exports.storeOrderEditNotAllowedFieldsAndRelations = exports.defaultOrderEditFields = exports.defaultOrderEditRelations = void 0;
exports.defaultOrderEditRelations = [
    "changes",
    "changes.line_item",
    "changes.line_item.variant",
    "changes.original_line_item",
    "changes.original_line_item.variant",
    "items",
    "items.variant",
    "items.adjustments",
    "items.tax_lines",
    "payment_collection",
];
exports.defaultOrderEditFields = [
    "id",
    "items",
    "changes",
    "order_id",
    "created_by",
    "created_at",
    "requested_by",
    "requested_at",
    "confirmed_by",
    "confirmed_at",
    "declined_by",
    "declined_reason",
    "declined_at",
    "canceled_by",
    "canceled_at",
    "internal_note",
    "payment_collection_id",
];
exports.storeOrderEditNotAllowedFieldsAndRelations = [
    "internal_note",
    "created_by",
    "confirmed_by",
    "canceled_by",
];
exports.defaultStoreOrderEditRelations = exports.defaultOrderEditRelations.filter(function (field) { return !exports.storeOrderEditNotAllowedFieldsAndRelations.includes(field); });
exports.defaultStoreOrderEditFields = exports.defaultOrderEditFields.filter(function (field) { return !exports.storeOrderEditNotAllowedFieldsAndRelations.includes(field); });
//# sourceMappingURL=order-edit.js.map