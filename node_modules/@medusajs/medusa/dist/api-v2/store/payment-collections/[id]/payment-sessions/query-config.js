"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveTransformQueryConfig = exports.allowedStorePaymentCollectionRelations = exports.defaultStorePaymentCollectionRelations = exports.defaultStorePaymentCollectionFields = void 0;
exports.defaultStorePaymentCollectionFields = [
    "id",
    "currency_code",
    "amount",
    "payment_sessions",
    "payment_sessions.id",
    "payment_sessions.amount",
    "payment_sessions.provider_id",
];
exports.defaultStorePaymentCollectionRelations = ["payment_sessions"];
exports.allowedStorePaymentCollectionRelations = ["payment_sessions"];
exports.retrieveTransformQueryConfig = {
    defaultFields: exports.defaultStorePaymentCollectionFields,
    defaultRelations: exports.defaultStorePaymentCollectionRelations,
    allowedRelations: exports.allowedStorePaymentCollectionRelations,
    isList: false,
};
//# sourceMappingURL=query-config.js.map