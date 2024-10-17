"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStorePaymentCollectionFields = exports.defaultStorePaymentCollectionRelations = exports.storePaymentCollectionNotAllowedFieldsAndRelations = exports.defaultPaymentCollectionFields = exports.defaultPaymentCollectionRelations = void 0;
exports.defaultPaymentCollectionRelations = [
    "region",
    "region.payment_providers",
    "payment_sessions",
];
exports.defaultPaymentCollectionFields = [
    "id",
    "type",
    "status",
    "description",
    "amount",
    "authorized_amount",
    "currency_code",
    "metadata",
    "region",
    "payment_sessions",
    "payments",
];
// eslint-disable-next-line max-len
exports.storePaymentCollectionNotAllowedFieldsAndRelations = ["created_by"];
exports.defaultStorePaymentCollectionRelations = exports.defaultPaymentCollectionRelations.filter(function (field) {
    return !exports.storePaymentCollectionNotAllowedFieldsAndRelations.includes(field);
});
exports.defaultStorePaymentCollectionFields = exports.defaultPaymentCollectionFields.filter(function (field) {
    return !exports.storePaymentCollectionNotAllowedFieldsAndRelations.includes(field);
});
//# sourceMappingURL=payment-collection.js.map