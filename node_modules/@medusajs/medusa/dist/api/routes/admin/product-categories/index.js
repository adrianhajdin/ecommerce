"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultProductCategoryFields = exports.allowedAdminProductCategoryRelations = exports.defaultAdminProductCategoryRelations = void 0;
var express_1 = require("express");
var middlewares_1 = __importStar(require("../../../middlewares"));
var feature_flag_enabled_1 = require("../../../middlewares/feature-flag-enabled");
var delete_product_category_1 = __importDefault(require("./delete-product-category"));
var product_existence_1 = require("../../../middlewares/validators/product-existence");
var get_product_category_1 = __importStar(require("./get-product-category"));
var list_product_categories_1 = __importStar(require("./list-product-categories"));
var create_product_category_1 = __importStar(require("./create-product-category"));
var update_product_category_1 = __importStar(require("./update-product-category"));
var add_products_batch_1 = __importStar(require("./add-products-batch"));
var delete_products_batch_1 = __importStar(require("./delete-products-batch"));
var route = (0, express_1.Router)();
exports.default = (function (app) {
    var retrieveTransformQueryConfig = {
        defaultFields: exports.defaultProductCategoryFields,
        defaultRelations: exports.defaultAdminProductCategoryRelations,
        allowedRelations: exports.allowedAdminProductCategoryRelations,
        isList: false,
    };
    var listTransformQueryConfig = __assign(__assign({}, retrieveTransformQueryConfig), { isList: true });
    app.use("/product-categories", (0, feature_flag_enabled_1.isFeatureFlagEnabled)("product_categories"), route);
    route.post("/", (0, middlewares_1.transformQuery)(create_product_category_1.AdminPostProductCategoriesParams, retrieveTransformQueryConfig), (0, middlewares_1.transformBody)(create_product_category_1.AdminPostProductCategoriesReq), middlewares_1.default.wrap(create_product_category_1.default));
    route.get("/", (0, middlewares_1.transformQuery)(list_product_categories_1.AdminGetProductCategoriesParams, listTransformQueryConfig), middlewares_1.default.wrap(list_product_categories_1.default));
    route.get("/:id", (0, middlewares_1.transformQuery)(get_product_category_1.AdminGetProductCategoryParams, retrieveTransformQueryConfig), middlewares_1.default.wrap(get_product_category_1.default));
    route.post("/:id", (0, middlewares_1.transformQuery)(update_product_category_1.AdminPostProductCategoriesCategoryParams, retrieveTransformQueryConfig), (0, middlewares_1.transformBody)(update_product_category_1.AdminPostProductCategoriesCategoryReq), middlewares_1.default.wrap(update_product_category_1.default));
    route.delete("/:id", middlewares_1.default.wrap(delete_product_category_1.default));
    route.post("/:id/products/batch", (0, middlewares_1.transformQuery)(add_products_batch_1.AdminPostProductCategoriesCategoryProductsBatchParams, retrieveTransformQueryConfig), (0, middlewares_1.transformBody)(add_products_batch_1.AdminPostProductCategoriesCategoryProductsBatchReq), (0, product_existence_1.validateProductsExist)(function (req) { return req.body.product_ids; }), middlewares_1.default.wrap(add_products_batch_1.default));
    route.delete("/:id/products/batch", (0, middlewares_1.transformQuery)(delete_products_batch_1.AdminDeleteProductCategoriesCategoryProductsBatchParams, retrieveTransformQueryConfig), (0, middlewares_1.transformBody)(delete_products_batch_1.AdminDeleteProductCategoriesCategoryProductsBatchReq), (0, product_existence_1.validateProductsExist)(function (req) { return req.body.product_ids; }), middlewares_1.default.wrap(delete_products_batch_1.default));
    return app;
});
__exportStar(require("./get-product-category"), exports);
__exportStar(require("./delete-product-category"), exports);
__exportStar(require("./list-product-categories"), exports);
__exportStar(require("./create-product-category"), exports);
__exportStar(require("./update-product-category"), exports);
__exportStar(require("./add-products-batch"), exports);
__exportStar(require("./delete-products-batch"), exports);
exports.defaultAdminProductCategoryRelations = [
    "parent_category",
    "category_children",
];
exports.allowedAdminProductCategoryRelations = [
    "parent_category",
    "category_children",
];
exports.defaultProductCategoryFields = [
    "id",
    "name",
    "description",
    "handle",
    "is_active",
    "is_internal",
    "rank",
    "parent_category_id",
    "created_at",
    "updated_at",
    "metadata",
];
//# sourceMappingURL=index.js.map