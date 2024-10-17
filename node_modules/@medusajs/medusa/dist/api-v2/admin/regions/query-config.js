"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaultAdminRegionFields = void 0;
exports.defaultAdminRegionFields = [
    "id",
    "name",
    "currency_code",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
    "*countries",
];
exports.retrieveTransformQueryConfig = {
    defaults: exports.defaultAdminRegionFields,
    isList: false,
};
exports.listTransformQueryConfig = {
    defaults: exports.defaultAdminRegionFields,
    defaultLimit: 20,
    isList: true,
};
//# sourceMappingURL=query-config.js.map