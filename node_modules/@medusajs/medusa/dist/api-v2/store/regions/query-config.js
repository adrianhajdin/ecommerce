"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaultStoreRegionFields = void 0;
exports.defaultStoreRegionFields = [
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
    defaults: exports.defaultStoreRegionFields,
    isList: false,
};
exports.listTransformQueryConfig = {
    defaults: exports.defaultStoreRegionFields,
    defaultLimit: 20,
    isList: true,
};
//# sourceMappingURL=query-config.js.map