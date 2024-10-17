"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaults = void 0;
exports.defaults = [
    "id",
    "name",
    "code",
    "rate",
    "tax_region_id",
    "is_default",
    "is_combinable",
    "created_by",
    "created_at",
    "updated_at",
    "deleted_at",
    "metadata",
    "*tax_region",
    "*rules",
];
exports.retrieveTransformQueryConfig = {
    defaults: exports.defaults,
    isList: false,
};
exports.listTransformQueryConfig = {
    defaults: exports.defaults,
    isList: true,
};
//# sourceMappingURL=query-config.js.map