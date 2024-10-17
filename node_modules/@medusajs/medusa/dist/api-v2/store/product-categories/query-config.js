"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductCategoryConfig = exports.retrieveProductCategoryConfig = exports.defaults = void 0;
exports.defaults = [
    "id",
    "name",
    "description",
    "handle",
    "rank",
    "parent_category_id",
    "created_at",
    "updated_at",
    "metadata",
    "*parent_category",
    "*category_children",
];
exports.retrieveProductCategoryConfig = {
    defaults: exports.defaults,
    isList: false,
};
exports.listProductCategoryConfig = {
    defaults: exports.defaults,
    defaultLimit: 50,
    isList: true,
};
//# sourceMappingURL=query-config.js.map