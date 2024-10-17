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
exports.defaultAdminCollectionsRelations = exports.defaultAdminCollectionsFields = void 0;
var express_1 = require("express");
require("reflect-metadata");
var middlewares_1 = __importStar(require("../../../middlewares"));
var list_collections_1 = require("./list-collections");
var create_collection_1 = require("./create-collection");
var update_collection_1 = require("./update-collection");
var add_products_1 = require("./add-products");
var remove_products_1 = require("./remove-products");
exports.default = (function (app) {
    var route = (0, express_1.Router)();
    app.use("/collections", route);
    route.post("/", (0, middlewares_1.transformBody)(create_collection_1.AdminPostCollectionsReq), middlewares_1.default.wrap(require("./create-collection").default));
    route.get("/", (0, middlewares_1.transformQuery)(list_collections_1.AdminGetCollectionsParams, {
        defaultRelations: exports.defaultAdminCollectionsRelations,
        defaultFields: exports.defaultAdminCollectionsFields,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-collections").default));
    var collectionRouter = (0, express_1.Router)({ mergeParams: true });
    route.use("/:id", collectionRouter);
    collectionRouter.post("/", (0, middlewares_1.transformBody)(update_collection_1.AdminPostCollectionsCollectionReq), middlewares_1.default.wrap(require("./update-collection").default));
    collectionRouter.get("/", middlewares_1.default.wrap(require("./get-collection").default));
    collectionRouter.delete("/", middlewares_1.default.wrap(require("./delete-collection").default));
    collectionRouter.post("/products/batch", (0, middlewares_1.transformBody)(add_products_1.AdminPostProductsToCollectionReq), middlewares_1.default.wrap(require("./add-products").default));
    collectionRouter.delete("/products/batch", (0, middlewares_1.transformBody)(remove_products_1.AdminDeleteProductsFromCollectionReq), middlewares_1.default.wrap(require("./remove-products").default));
    return app;
});
exports.defaultAdminCollectionsFields = [
    "id",
    "title",
    "handle",
    "created_at",
    "updated_at",
];
exports.defaultAdminCollectionsRelations = ["products.profiles"];
__exportStar(require("./add-products"), exports);
__exportStar(require("./create-collection"), exports);
__exportStar(require("./delete-collection"), exports);
__exportStar(require("./get-collection"), exports);
__exportStar(require("./list-collections"), exports);
__exportStar(require("./remove-products"), exports);
__exportStar(require("./update-collection"), exports);
//# sourceMappingURL=index.js.map