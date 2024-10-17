"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowedStoreProductCategoryFields = exports.defaultStoreProductCategoryFields = exports.defaultStoreCategoryScope = exports.defaultStoreProductCategoryRelations = void 0;
var express_1 = require("express");
var middlewares_1 = __importStar(require("../../../middlewares"));
var list_product_categories_1 = __importStar(require("./list-product-categories"));
var get_product_category_1 = __importStar(require("./get-product-category"));
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/product-categories", route);
    route.get("/", (0, middlewares_1.transformStoreQuery)(list_product_categories_1.StoreGetProductCategoriesParams, {
        defaultFields: exports.defaultStoreProductCategoryFields,
        allowedFields: exports.allowedStoreProductCategoryFields,
        defaultRelations: exports.defaultStoreProductCategoryRelations,
        isList: true,
    }), middlewares_1.default.wrap(list_product_categories_1.default));
    route.get("/:id", (0, middlewares_1.transformStoreQuery)(get_product_category_1.StoreGetProductCategoriesCategoryParams, {
        defaultFields: exports.defaultStoreProductCategoryFields,
        allowedFields: exports.allowedStoreProductCategoryFields,
        defaultRelations: exports.defaultStoreProductCategoryRelations,
        isList: false,
    }), middlewares_1.default.wrap(get_product_category_1.default));
    return app;
});
exports.defaultStoreProductCategoryRelations = [
    "parent_category",
    "category_children",
];
exports.defaultStoreCategoryScope = {
    is_internal: false,
    is_active: true,
};
exports.defaultStoreProductCategoryFields = [
    "id",
    "name",
    "description",
    "handle",
    "parent_category_id",
    "created_at",
    "updated_at",
    "rank",
    "metadata",
];
exports.allowedStoreProductCategoryFields = [
    "id",
    "name",
    "description",
    "handle",
    "parent_category_id",
    "created_at",
    "updated_at",
    "rank",
    "metadata",
];
__exportStar(require("./get-product-category"), exports);
__exportStar(require("./list-product-categories"), exports);
//# sourceMappingURL=index.js.map