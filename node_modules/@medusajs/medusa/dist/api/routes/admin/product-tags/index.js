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
exports.defaultAdminProductTagsRelations = exports.defaultAdminProductTagsFields = void 0;
var express_1 = require("express");
var middlewares_1 = __importStar(require("../../../middlewares"));
require("reflect-metadata");
var list_product_tags_1 = require("./list-product-tags");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/product-tags", route);
    route.get("/", (0, middlewares_1.transformQuery)(list_product_tags_1.AdminGetProductTagsParams, {
        defaultFields: exports.defaultAdminProductTagsFields,
        defaultRelations: exports.defaultAdminProductTagsRelations,
        isList: true,
    }), middlewares_1.default.wrap(require("./list-product-tags").default));
    return app;
});
exports.defaultAdminProductTagsFields = [
    "id",
    "value",
    "created_at",
    "updated_at",
];
exports.defaultAdminProductTagsRelations = [];
__exportStar(require("./list-product-tags"), exports);
//# sourceMappingURL=index.js.map