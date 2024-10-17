"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTransformPaymentProvidersQueryConfig = exports.defaultAdminPaymentPaymentProviderFields = exports.retrieveTransformQueryConfig = exports.listTransformQueryConfig = exports.defaultAdminPaymentFields = void 0;
exports.defaultAdminPaymentFields = [
    "id",
    "currency_code",
    "amount",
    "captured_at",
    "payment_collection_id",
    "payment_session_id",
    "captures.id",
    "captures.amount",
    "refunds.id",
    "refunds.amount",
];
exports.listTransformQueryConfig = {
    defaults: exports.defaultAdminPaymentFields,
    isList: true,
};
exports.retrieveTransformQueryConfig = {
    defaults: exports.defaultAdminPaymentFields,
    isList: false,
};
exports.defaultAdminPaymentPaymentProviderFields = ["id", "is_enabled"];
exports.listTransformPaymentProvidersQueryConfig = {
    defaults: exports.defaultAdminPaymentPaymentProviderFields,
    isList: true,
};
//# sourceMappingURL=query-config.js.map