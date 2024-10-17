"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetProductCategoriesCategoryParams = void 0;
var common_1 = require("../../../../types/common");
var tree_1 = require("../../../../utils/transformers/tree");
var _1 = require(".");
/**
 * @oas [get] /store/product-categories/{id}
 * operationId: "GetProductCategoriesCategory"
 * summary: "Get a Product Category"
 * description: "Retrieve a Product Category's details."
 * x-featureFlag: "product_categories"
 * parameters:
 *   - (path) id=* {string} The ID of the Product Category
 *   - (query) fields {string} Comma-separated fields that should be expanded in the returned product category.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned product category.
 * x-codegen:
 *   method: retrieve
 *   queryParams: StoreGetProductCategoriesCategoryParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.productCategories.retrieve(productCategoryId)
 *       .then(({ product_category }) => {
 *         console.log(product_category.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useProductCategory } from "medusa-react"
 *
 *       type Props = {
 *         categoryId: string
 *       }
 *
 *       const Category = ({ categoryId }: Props) => {
 *         const { product_category, isLoading } = useProductCategory(
 *           categoryId
 *         )
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {product_category && <span>{product_category.name}</span>}
 *           </div>
 *         )
 *       }
 *
 *       export default Category
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/product-categories/{id}' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Product Categories
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/StoreGetProductCategoriesCategoryRes"
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "401":
 *    $ref: "#/components/responses/unauthorized"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, retrieveConfig, productCategoryService, productCategory;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                retrieveConfig = req.retrieveConfig;
                productCategoryService = req.scope.resolve("productCategoryService");
                return [4 /*yield*/, productCategoryService.retrieve(id, retrieveConfig, _1.defaultStoreCategoryScope)];
            case 1:
                productCategory = _a.sent();
                res.status(200).json({
                    // TODO: When we implement custom queries for tree paths in medusa, remove the transformer
                    // Adding this here since typeorm tree repo doesn't allow configs to be passed
                    // onto its children nodes. As an alternative, we are transforming the data post query.
                    product_category: (0, tree_1.transformTreeNodesWithConfig)(productCategory, retrieveConfig, _1.defaultStoreCategoryScope),
                });
                return [2 /*return*/];
        }
    });
}); });
var StoreGetProductCategoriesCategoryParams = /** @class */ (function (_super) {
    __extends(StoreGetProductCategoriesCategoryParams, _super);
    function StoreGetProductCategoriesCategoryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StoreGetProductCategoriesCategoryParams;
}(common_1.FindParams));
exports.StoreGetProductCategoriesCategoryParams = StoreGetProductCategoriesCategoryParams;
//# sourceMappingURL=get-product-category.js.map