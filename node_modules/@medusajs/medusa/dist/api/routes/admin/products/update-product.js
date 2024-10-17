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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostProductsProductReq = void 0;
var core_flows_1 = require("@medusajs/core-flows");
var utils_1 = require("@medusajs/utils");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var _1 = require(".");
var models_1 = require("../../../../models");
var product_1 = require("../../../../types/product");
var product_variant_1 = require("../../../../types/product-variant");
var utils_2 = require("../../../../utils");
var create_product_variant_1 = require("./transaction/create-product-variant");
var sales_channels_1 = __importDefault(require("../../../../loaders/feature-flags/sales-channels"));
var feature_flag_decorators_1 = require("../../../../utils/feature-flag-decorators");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [post] /admin/products/{id}
 * operationId: "PostProductsProduct"
 * summary: "Update a Product"
 * description: "Update a Product's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Product.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostProductsProductReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.products.update(productId, {
 *         title: "Shirt",
 *       })
 *       .then(({ product }) => {
 *         console.log(product.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateProduct } from "medusa-react"
 *
 *       type Props = {
 *         productId: string
 *       }
 *
 *       const Product = ({ productId }: Props) => {
 *         const updateProduct = useAdminUpdateProduct(
 *           productId
 *         )
 *         // ...
 *
 *         const handleUpdate = (
 *           title: string
 *         ) => {
 *           updateProduct.mutate({
 *             title,
 *           }, {
 *             onSuccess: ({ product }) => {
 *               console.log(product.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Product
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/products/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "title": "Size"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Products
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminProductsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, validated, logger, productVariantRepo, productService, pricingService, productVariantService, productVariantInventoryService, inventoryService, manager, productModuleService, featureFlagRouter, isMedusaV2Enabled, updateProductWorkflow, input, result, rawProduct, _a, product;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostProductsProductReq, req.body)];
            case 1:
                validated = _b.sent();
                logger = req.scope.resolve("logger");
                productVariantRepo = req.scope.resolve("productVariantRepository");
                productService = req.scope.resolve("productService");
                pricingService = req.scope.resolve("pricingService");
                productVariantService = req.scope.resolve("productVariantService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                inventoryService = req.scope.resolve("inventoryService");
                manager = req.scope.resolve("manager");
                productModuleService = req.scope.resolve("productModuleService");
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                isMedusaV2Enabled = featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key);
                if (isMedusaV2Enabled && !productModuleService) {
                    logger.warn("Cannot run ".concat(core_flows_1.Workflows.UpdateProducts, " workflow without '@medusajs/product' installed"));
                }
                if (!isMedusaV2Enabled) return [3 /*break*/, 3];
                updateProductWorkflow = (0, core_flows_1.updateProducts)(req.scope);
                input = {
                    products: [
                        __assign({ id: id }, validated),
                    ],
                };
                return [4 /*yield*/, updateProductWorkflow.run({
                        input: input,
                        context: {
                            manager: manager,
                        },
                    })];
            case 2:
                result = (_b.sent()).result;
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                    var productServiceTx, variants, product, variantRepo, productVariants, productVariantMap, variantWithIdSet, variantIdsNotBelongingToProduct, variantsToUpdate, variantsToCreate, _a, _b, _c, variantRank, variant, productVariant, allVariantTransactions, transactionDependencies, productVariantServiceTx, variantIdsToDelete, varTransaction, e_1;
                    var e_2, _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                productServiceTx = productService.withTransaction(transactionManager);
                                variants = validated.variants;
                                delete validated.variants;
                                return [4 /*yield*/, productServiceTx.update(id, validated)];
                            case 1:
                                product = _e.sent();
                                if (!variants) {
                                    return [2 /*return*/];
                                }
                                variantRepo = manager.withRepository(productVariantRepo);
                                return [4 /*yield*/, productVariantService
                                        .withTransaction(transactionManager)
                                        .list({ product_id: id }, {
                                        select: variantRepo.metadata.columns.map(function (c) { return c.propertyName; }),
                                    })];
                            case 2:
                                productVariants = _e.sent();
                                productVariantMap = new Map(productVariants.map(function (v) { return [v.id, v]; }));
                                variantWithIdSet = new Set();
                                variantIdsNotBelongingToProduct = [];
                                variantsToUpdate = [];
                                variantsToCreate = [];
                                try {
                                    // Preparing the data step
                                    for (_a = __values(variants.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                        _c = __read(_b.value, 2), variantRank = _c[0], variant = _c[1];
                                        if (!variant.id) {
                                            Object.assign(variant, {
                                                variant_rank: variantRank,
                                                options: variant.options || [],
                                                prices: variant.prices || [],
                                            });
                                            variantsToCreate.push(variant);
                                            continue;
                                        }
                                        // Will be used to find the variants that should be removed during the next steps
                                        variantWithIdSet.add(variant.id);
                                        if (!productVariantMap.has(variant.id)) {
                                            variantIdsNotBelongingToProduct.push(variant.id);
                                            continue;
                                        }
                                        productVariant = productVariantMap.get(variant.id);
                                        Object.assign(variant, {
                                            variant_rank: variantRank,
                                            product_id: productVariant.product_id,
                                        });
                                        variantsToUpdate.push({ variant: productVariant, updateData: variant });
                                    }
                                }
                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                finally {
                                    try {
                                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                }
                                if (variantIdsNotBelongingToProduct.length) {
                                    throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Variants with id: ".concat(variantIdsNotBelongingToProduct.join(", "), " are not associated with this product"));
                                }
                                allVariantTransactions = [];
                                transactionDependencies = {
                                    manager: transactionManager,
                                    inventoryService: inventoryService,
                                    productVariantInventoryService: productVariantInventoryService,
                                    productVariantService: productVariantService,
                                };
                                productVariantServiceTx = productVariantService.withTransaction(transactionManager);
                                variantIdsToDelete = __spreadArray([], __read(productVariantMap.keys()), false).filter(function (variantId) { return !variantWithIdSet.has(variantId); });
                                if (!variantIdsToDelete) return [3 /*break*/, 4];
                                return [4 /*yield*/, productVariantServiceTx.delete(variantIdsToDelete)];
                            case 3:
                                _e.sent();
                                _e.label = 4;
                            case 4:
                                if (!variantsToUpdate.length) return [3 /*break*/, 6];
                                return [4 /*yield*/, productVariantServiceTx.update(variantsToUpdate)];
                            case 5:
                                _e.sent();
                                _e.label = 6;
                            case 6:
                                if (!variantsToCreate.length) return [3 /*break*/, 11];
                                _e.label = 7;
                            case 7:
                                _e.trys.push([7, 9, , 11]);
                                return [4 /*yield*/, (0, create_product_variant_1.createVariantsTransaction)(transactionDependencies, product.id, variantsToCreate)];
                            case 8:
                                varTransaction = _e.sent();
                                allVariantTransactions.push(varTransaction);
                                return [3 /*break*/, 11];
                            case 9:
                                e_1 = _e.sent();
                                return [4 /*yield*/, (0, utils_1.promiseAll)(allVariantTransactions.map(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, (0, create_product_variant_1.revertVariantTransaction)(transactionDependencies, transaction).catch(function () { return logger.warn("Transaction couldn't be reverted."); })];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }))];
                            case 10:
                                _e.sent();
                                throw e_1;
                            case 11: return [2 /*return*/];
                        }
                    });
                }); })];
            case 4:
                _b.sent();
                _b.label = 5;
            case 5:
                if (!isMedusaV2Enabled) return [3 /*break*/, 7];
                return [4 /*yield*/, (0, utils_2.retrieveProduct)(req.scope, id, _1.defaultAdminProductRemoteQueryObject)];
            case 6:
                rawProduct = _b.sent();
                return [3 /*break*/, 9];
            case 7: return [4 /*yield*/, productService.retrieve(id, {
                    select: _1.defaultAdminProductFields,
                    relations: _1.defaultAdminProductRelations,
                })];
            case 8:
                rawProduct = _b.sent();
                _b.label = 9;
            case 9: return [4 /*yield*/, pricingService.setAdminProductPricing([rawProduct])];
            case 10:
                _a = __read.apply(void 0, [_b.sent(), 1]), product = _a[0];
                res.json({ product: product });
                return [2 /*return*/];
        }
    });
}); });
var ProductVariantOptionReq = /** @class */ (function () {
    function ProductVariantOptionReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ProductVariantOptionReq.prototype, "value", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ProductVariantOptionReq.prototype, "option_id", void 0);
    return ProductVariantOptionReq;
}());
var ProductVariantReq = /** @class */ (function () {
    function ProductVariantReq() {
        this.options = [];
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "sku", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "ean", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "upc", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "barcode", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "hs_code", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], ProductVariantReq.prototype, "inventory_quantity", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], ProductVariantReq.prototype, "allow_backorder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], ProductVariantReq.prototype, "manage_inventory", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], ProductVariantReq.prototype, "weight", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], ProductVariantReq.prototype, "length", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], ProductVariantReq.prototype, "height", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], ProductVariantReq.prototype, "width", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "origin_country", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "mid_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], ProductVariantReq.prototype, "material", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], ProductVariantReq.prototype, "metadata", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return product_variant_1.ProductVariantPricesUpdateReq; }),
        __metadata("design:type", Array)
    ], ProductVariantReq.prototype, "prices", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return ProductVariantOptionReq; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], ProductVariantReq.prototype, "options", void 0);
    return ProductVariantReq;
}());
/**
 * @schema AdminPostProductsProductReq
 * type: object
 * description: "The details to update of the product."
 * properties:
 *   title:
 *     description: "The title of the Product"
 *     type: string
 *   subtitle:
 *     description: "The subtitle of the Product"
 *     type: string
 *   description:
 *     description: "The description of the Product."
 *     type: string
 *   discountable:
 *     description: A flag to indicate if discounts can be applied to the Line Items generated from this Product
 *     type: boolean
 *   images:
 *     description: An array of images of the Product. Each value in the array is a URL to the image. You can use the upload API Routes to upload the image and obtain a URL.
 *     type: array
 *     items:
 *       type: string
 *   thumbnail:
 *     description: The thumbnail to use for the Product. The value is a URL to the thumbnail. You can use the upload API Routes to upload the thumbnail and obtain a URL.
 *     type: string
 *   handle:
 *     description: A unique handle to identify the Product by. If not provided, the kebab-case version of the product title will be used. This can be used as a slug in URLs.
 *     type: string
 *   status:
 *     description: The status of the product. The product is shown to the customer only if its status is `published`.
 *     type: string
 *     enum: [draft, proposed, published, rejected]
 *   type:
 *     description: The Product Type to associate the Product with.
 *     type: object
 *     required:
 *       - value
 *     properties:
 *       id:
 *         description: The ID of an existing Product Type. If not provided, a new product type will be created.
 *         type: string
 *       value:
 *         description: The value of the Product Type.
 *         type: string
 *   collection_id:
 *     description: The ID of the Product Collection the Product belongs to.
 *     type: string
 *   tags:
 *     description: Product Tags to associate the Product with.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - value
 *       properties:
 *         id:
 *           description: The ID of an existing Product Tag. If not provided, a new product tag will be created.
 *           type: string
 *         value:
 *           description: The value of the Tag. If the `id` is provided, the value of the existing tag will be updated.
 *           type: string
 *   sales_channels:
 *     description: "Sales channels to associate the Product with."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: The ID of an existing Sales channel.
 *           type: string
 *   categories:
 *     description: "Product categories to add the Product to."
 *     x-featureFlag: "product_categories"
 *     type: array
 *     items:
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: The ID of a Product Category.
 *           type: string
 *   variants:
 *     description: An array of Product Variants to create with the Product. Each product variant must have a unique combination of Product Option values.
 *     type: array
 *     items:
 *       type: object
 *       properties:
 *         id:
 *           description: The id of an existing product variant. If provided, the details of the product variant will be updated. If not, a new product variant will be created.
 *           type: string
 *         title:
 *           description: The title of the product variant.
 *           type: string
 *         sku:
 *           description: The unique SKU of the product variant.
 *           type: string
 *         ean:
 *           description: The EAN number of the product variant.
 *           type: string
 *         upc:
 *           description: The UPC number of the product variant.
 *           type: string
 *         barcode:
 *           description: A generic GTIN field of the product variant.
 *           type: string
 *         hs_code:
 *           description: The Harmonized System code of the product variant.
 *           type: string
 *         inventory_quantity:
 *           description: The amount of stock kept of the product variant.
 *           type: integer
 *         allow_backorder:
 *           description: Whether the product variant can be purchased when out of stock.
 *           type: boolean
 *         manage_inventory:
 *           description: Whether Medusa should keep track of the inventory of this product variant.
 *           type: boolean
 *         weight:
 *           description: The weight of the product variant.
 *           type: number
 *         length:
 *           description: The length of the product variant.
 *           type: number
 *         height:
 *           description: The height of the product variant.
 *           type: number
 *         width:
 *           description: The width of the product variant.
 *           type: number
 *         origin_country:
 *           description: The country of origin of the product variant.
 *           type: string
 *         mid_code:
 *           description: The Manufacturer Identification code of the product variant.
 *           type: string
 *         material:
 *           description: The material composition of the product variant.
 *           type: string
 *         metadata:
 *           description: An optional set of key-value pairs with additional information.
 *           type: object
 *           externalDocs:
 *             description: "Learn about the metadata attribute, and how to delete and update it."
 *             url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 *         prices:
 *           type: array
 *           description: An array of product variant prices. A product variant can have different prices for each region or currency code.
 *           externalDocs:
 *             url: https://docs.medusajs.com/modules/products/admin/manage-products#product-variant-prices
 *             description: Product variant pricing.
 *           items:
 *             type: object
 *             required:
 *               - amount
 *             properties:
 *               id:
 *                 description: The ID of the Price. If provided, the existing price will be updated. Otherwise, a new price will be created.
 *                 type: string
 *               region_id:
 *                 description: The ID of the Region the price will be used in. This is only required if `currency_code` is not provided.
 *                 type: string
 *               currency_code:
 *                 description: The 3 character ISO currency code the price will be used in. This is only required if `region_id` is not provided.
 *                 type: string
 *                 externalDocs:
 *                   url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *                   description: See a list of codes.
 *               amount:
 *                 description: The price amount.
 *                 type: integer
 *               min_quantity:
 *                 description: The minimum quantity required to be added to the cart for the price to be used.
 *                 type: integer
 *               max_quantity:
 *                 description: The maximum quantity required to be added to the cart for the price to be used.
 *                 type: integer
 *         options:
 *           type: array
 *           description: An array of Product Option values that the variant corresponds to.
 *           items:
 *             type: object
 *             required:
 *               - option_id
 *               - value
 *             properties:
 *               option_id:
 *                 description: The ID of the Option.
 *                 type: string
 *               value:
 *                 description: The value of the Product Option.
 *                 type: string
 *   weight:
 *     description: The weight of the Product.
 *     type: number
 *   length:
 *     description: The length of the Product.
 *     type: number
 *   height:
 *     description: The height of the Product.
 *     type: number
 *   width:
 *     description: The width of the Product.
 *     type: number
 *   hs_code:
 *     description: The Harmonized System code of the product variant.
 *     type: string
 *   origin_country:
 *     description: The country of origin of the Product.
 *     type: string
 *   mid_code:
 *     description: The Manufacturer Identification code of the Product.
 *     type: string
 *   material:
 *     description: The material composition of the Product.
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs with additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
var AdminPostProductsProductReq = /** @class */ (function () {
    function AdminPostProductsProductReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "subtitle", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostProductsProductReq.prototype, "discountable", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminPostProductsProductReq.prototype, "images", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "thumbnail", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "handle", void 0);
    __decorate([
        (0, class_validator_1.IsEnum)(models_1.ProductStatus),
        (0, class_validator_1.NotEquals)(null),
        (0, class_validator_1.ValidateIf)(function (object, value) { return value !== undefined; }),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return product_1.ProductTypeReq; }),
        (0, class_validator_1.ValidateNested)(),
        __metadata("design:type", product_1.ProductTypeReq)
    ], AdminPostProductsProductReq.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "collection_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return product_1.ProductTagReq; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostProductsProductReq.prototype, "tags", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)(sales_channels_1.default.key, [
            (0, class_validator_1.IsOptional)(),
            (0, class_transformer_1.Type)(function () { return product_1.ProductSalesChannelReq; }),
            (0, class_validator_1.ValidateNested)({ each: true }),
            (0, class_validator_1.IsArray)(),
        ]),
        __metadata("design:type", Object)
    ], AdminPostProductsProductReq.prototype, "sales_channels", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return product_1.ProductProductCategoryReq; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostProductsProductReq.prototype, "categories", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return ProductVariantReq; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostProductsProductReq.prototype, "variants", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsProductReq.prototype, "weight", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsProductReq.prototype, "length", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsProductReq.prototype, "height", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsProductReq.prototype, "width", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "hs_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "origin_country", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "mid_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductReq.prototype, "material", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostProductsProductReq.prototype, "metadata", void 0);
    return AdminPostProductsProductReq;
}());
exports.AdminPostProductsProductReq = AdminPostProductsProductReq;
//# sourceMappingURL=update-product.js.map