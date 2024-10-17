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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostProductsReq = void 0;
var core_flows_1 = require("@medusajs/core-flows");
var class_validator_1 = require("class-validator");
var _1 = require(".");
var feature_flags_1 = require("../../../../loaders/feature-flags");
var product_1 = require("../../../../types/product");
var product_variant_1 = require("../../../../types/product-variant");
var create_product_variant_1 = require("./transaction/create-product-variant");
var utils_1 = require("@medusajs/utils");
var class_transformer_1 = require("class-transformer");
var sales_channels_1 = __importDefault(require("../../../../loaders/feature-flags/sales-channels"));
var models_1 = require("../../../../models");
var utils_2 = require("../../../../utils");
var feature_flag_decorators_1 = require("../../../../utils/feature-flag-decorators");
/**
 * @oas [post] /admin/products
 * operationId: "PostProducts"
 * summary: "Create a Product"
 * x-authenticated: true
 * description: "Create a new Product. This API Route can also be used to create a gift card if the `is_giftcard` field is set to `true`."
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostProductsReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.products.create({
 *         title: "Shirt",
 *         is_giftcard: false,
 *         discountable: true
 *       })
 *       .then(({ product }) => {
 *         console.log(product.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateProduct } from "medusa-react"
 *
 *       type CreateProductData = {
 *         title: string
 *         is_giftcard: boolean
 *         discountable: boolean
 *         options: {
 *           title: string
 *         }[]
 *         variants: {
 *           title: string
 *           prices: {
 *             amount: number
 *             currency_code :string
 *           }[]
 *           options: {
 *             value: string
 *           }[]
 *         }[],
 *         collection_id: string
 *         categories: {
 *           id: string
 *         }[]
 *         type: {
 *           value: string
 *         }
 *         tags: {
 *           value: string
 *         }[]
 *       }
 *
 *       const CreateProduct = () => {
 *         const createProduct = useAdminCreateProduct()
 *         // ...
 *
 *         const handleCreate = (productData: CreateProductData) => {
 *           createProduct.mutate(productData, {
 *             onSuccess: ({ product }) => {
 *               console.log(product.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateProduct
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/products' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "title": "Shirt"
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
    var validated, logger, productService, pricingService, productVariantService, shippingProfileService, featureFlagRouter, productVariantInventoryService, inventoryService, salesChannelService, entityManager, productModuleService, isMedusaV2Enabled, product, createProductWorkflow, input, result, rawProduct, _a, pricedProduct;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, utils_2.validator)(AdminPostProductsReq, req.body)];
            case 1:
                validated = _b.sent();
                logger = req.scope.resolve("logger");
                productService = req.scope.resolve("productService");
                pricingService = req.scope.resolve("pricingService");
                productVariantService = req.scope.resolve("productVariantService");
                shippingProfileService = req.scope.resolve("shippingProfileService");
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                inventoryService = req.scope.resolve("inventoryService");
                salesChannelService = req.scope.resolve("salesChannelService");
                entityManager = req.scope.resolve("manager");
                productModuleService = req.scope.resolve("productModuleService");
                isMedusaV2Enabled = featureFlagRouter.isFeatureEnabled(utils_1.MedusaV2Flag.key);
                if (isMedusaV2Enabled && !productModuleService) {
                    logger.warn("Cannot run ".concat(core_flows_1.Workflows.CreateProducts, " workflow without '@medusajs/product' installed"));
                }
                if (!(isMedusaV2Enabled && !!productModuleService)) return [3 /*break*/, 3];
                createProductWorkflow = (0, core_flows_1.createProducts)(req.scope);
                input = {
                    products: [
                        validated,
                    ],
                };
                return [4 /*yield*/, createProductWorkflow.run({
                        input: input,
                        context: {
                            manager: entityManager,
                        },
                    })];
            case 2:
                result = (_b.sent()).result;
                product = result[0];
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, entityManager.transaction(function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                    var variants, shippingProfile, defaultSalesChannel, newProduct, _a, _b, _c, index, variant, optionIds_1, allVariantTransactions, transactionDependencies_1, variantsInputData, varTransaction, e_1;
                    var e_2, _d;
                    var _e, _f;
                    return __generator(this, function (_g) {
                        switch (_g.label) {
                            case 0:
                                variants = validated.variants;
                                delete validated.variants;
                                if (!validated.thumbnail && validated.images && validated.images.length) {
                                    validated.thumbnail = validated.images[0];
                                }
                                if (!validated.is_giftcard) return [3 /*break*/, 2];
                                return [4 /*yield*/, shippingProfileService
                                        .withTransaction(manager)
                                        .retrieveGiftCardDefault()];
                            case 1:
                                shippingProfile = _g.sent();
                                return [3 /*break*/, 4];
                            case 2: return [4 /*yield*/, shippingProfileService
                                    .withTransaction(manager)
                                    .retrieveDefault()];
                            case 3:
                                shippingProfile = _g.sent();
                                _g.label = 4;
                            case 4:
                                if (!(featureFlagRouter.isFeatureEnabled(sales_channels_1.default.key) &&
                                    !((_e = validated === null || validated === void 0 ? void 0 : validated.sales_channels) === null || _e === void 0 ? void 0 : _e.length))) return [3 /*break*/, 6];
                                return [4 /*yield*/, salesChannelService
                                        .withTransaction(manager)
                                        .retrieveDefault()];
                            case 5:
                                defaultSalesChannel = _g.sent();
                                validated.sales_channels = [defaultSalesChannel];
                                _g.label = 6;
                            case 6: return [4 /*yield*/, productService
                                    .withTransaction(manager)
                                    .create(__assign(__assign({}, validated), { profile_id: shippingProfile.id }))];
                            case 7:
                                newProduct = _g.sent();
                                if (!variants) return [3 /*break*/, 12];
                                try {
                                    for (_a = __values(variants.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                                        _c = __read(_b.value, 2), index = _c[0], variant = _c[1];
                                        variant["variant_rank"] = index;
                                    }
                                }
                                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                finally {
                                    try {
                                        if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                }
                                optionIds_1 = ((_f = validated === null || validated === void 0 ? void 0 : validated.options) === null || _f === void 0 ? void 0 : _f.map(function (o) { var _a; return (_a = newProduct.options.find(function (newO) { return newO.title === o.title; })) === null || _a === void 0 ? void 0 : _a.id; })) || [];
                                allVariantTransactions = [];
                                transactionDependencies_1 = {
                                    manager: manager,
                                    inventoryService: inventoryService,
                                    productVariantInventoryService: productVariantInventoryService,
                                    productVariantService: productVariantService,
                                };
                                _g.label = 8;
                            case 8:
                                _g.trys.push([8, 10, , 12]);
                                variantsInputData = variants.map(function (variant) {
                                    var _a;
                                    var options = ((_a = variant === null || variant === void 0 ? void 0 : variant.options) === null || _a === void 0 ? void 0 : _a.map(function (option, index) { return (__assign(__assign({}, option), { option_id: optionIds_1[index] })); })) || [];
                                    return __assign(__assign({}, variant), { options: options });
                                });
                                return [4 /*yield*/, (0, create_product_variant_1.createVariantsTransaction)(transactionDependencies_1, newProduct.id, variantsInputData)];
                            case 9:
                                varTransaction = _g.sent();
                                allVariantTransactions.push(varTransaction);
                                return [3 /*break*/, 12];
                            case 10:
                                e_1 = _g.sent();
                                return [4 /*yield*/, (0, utils_1.promiseAll)(allVariantTransactions.map(function (transaction) { return __awaiter(void 0, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, (0, create_product_variant_1.revertVariantTransaction)(transactionDependencies_1, transaction).catch(function () { return logger.warn("Transaction couldn't be reverted."); })];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }))];
                            case 11:
                                _g.sent();
                                throw e_1;
                            case 12: return [2 /*return*/, newProduct];
                        }
                    });
                }); })];
            case 4:
                product = _b.sent();
                _b.label = 5;
            case 5:
                if (!isMedusaV2Enabled) return [3 /*break*/, 7];
                return [4 /*yield*/, (0, utils_2.retrieveProduct)(req.scope, product.id, _1.defaultAdminProductRemoteQueryObject)];
            case 6:
                rawProduct = _b.sent();
                return [3 /*break*/, 9];
            case 7: return [4 /*yield*/, productService.retrieve(product.id, {
                    select: _1.defaultAdminProductFields,
                    relations: _1.defaultAdminProductRelations,
                })];
            case 8:
                rawProduct = _b.sent();
                _b.label = 9;
            case 9: return [4 /*yield*/, pricingService.setAdminProductPricing([
                    rawProduct,
                ])];
            case 10:
                _a = __read.apply(void 0, [_b.sent(), 1]), pricedProduct = _a[0];
                res.json({ product: pricedProduct });
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
    return ProductVariantOptionReq;
}());
var ProductOptionReq = /** @class */ (function () {
    function ProductOptionReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ProductOptionReq.prototype, "title", void 0);
    return ProductOptionReq;
}());
var ProductVariantReq = /** @class */ (function () {
    function ProductVariantReq() {
        this.inventory_quantity = 0;
        this.options = [];
    }
    __decorate([
        (0, class_validator_1.IsString)(),
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
        (0, class_validator_1.IsNumber)(),
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
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return product_variant_1.ProductVariantPricesCreateReq; }),
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
 * @schema AdminPostProductsReq
 * type: object
 * description: "The details of the product to create."
 * required:
 *   - title
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
 *   is_giftcard:
 *     description: A flag to indicate if the Product represents a Gift Card. Purchasing Products with this flag set to `true` will result in a Gift Card being created.
 *     type: boolean
 *     default: false
 *   discountable:
 *     description: A flag to indicate if discounts can be applied to the Line Items generated from this Product
 *     type: boolean
 *     default: true
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
 *     default: draft
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
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: The ID of a Product Category.
 *           type: string
 *   options:
 *     description: The Options that the Product should have. A new product option will be created for every item in the array.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           description: The title of the Product Option.
 *           type: string
 *   variants:
 *     description: An array of Product Variants to create with the Product. Each product variant must have a unique combination of Product Option values.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           description: The title of the Product Variant.
 *           type: string
 *         sku:
 *           description: The unique SKU of the Product Variant.
 *           type: string
 *         ean:
 *           description: The EAN number of the item.
 *           type: string
 *         upc:
 *           description: The UPC number of the item.
 *           type: string
 *         barcode:
 *           description: A generic GTIN field of the Product Variant.
 *           type: string
 *         hs_code:
 *           description: The Harmonized System code of the Product Variant.
 *           type: string
 *         inventory_quantity:
 *           description: The amount of stock kept of the Product Variant.
 *           type: integer
 *           default: 0
 *         allow_backorder:
 *           description: Whether the Product Variant can be purchased when out of stock.
 *           type: boolean
 *         manage_inventory:
 *           description: Whether Medusa should keep track of the inventory of this Product Variant.
 *           type: boolean
 *         weight:
 *           description: The wieght of the Product Variant.
 *           type: number
 *         length:
 *           description: The length of the Product Variant.
 *           type: number
 *         height:
 *           description: The height of the Product Variant.
 *           type: number
 *         width:
 *           description: The width of the Product Variant.
 *           type: number
 *         origin_country:
 *           description: The country of origin of the Product Variant.
 *           type: string
 *         mid_code:
 *           description: The Manufacturer Identification code of the Product Variant.
 *           type: string
 *         material:
 *           description: The material composition of the Product Variant.
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
 *           description: An array of Product Option values that the variant corresponds to. The option values should be added into the array in the same index as in the `options` field of the product.
 *           externalDocs:
 *             url: https://docs.medusajs.com/modules/products/admin/manage-products#create-a-product
 *             description: Example of how to create a product with options and variants
 *           items:
 *             type: object
 *             required:
 *               - value
 *             properties:
 *               value:
 *                 description: The value to give for the Product Option at the same index in the Product's `options` field.
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
 *     description: The Harmonized System code of the Product.
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
var AdminPostProductsReq = /** @class */ (function () {
    function AdminPostProductsReq() {
        this.is_giftcard = false;
        this.discountable = true;
        this.status = models_1.ProductStatus.DRAFT;
        if (!feature_flags_1.featureFlagRouter.isFeatureEnabled(sales_channels_1.default.key)) {
            delete this.sales_channels;
        }
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostProductsReq.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsReq.prototype, "subtitle", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsReq.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Object)
    ], AdminPostProductsReq.prototype, "is_giftcard", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        __metadata("design:type", Object)
    ], AdminPostProductsReq.prototype, "discountable", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminPostProductsReq.prototype, "images", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsReq.prototype, "thumbnail", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsReq.prototype, "handle", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(models_1.ProductStatus),
        __metadata("design:type", String)
    ], AdminPostProductsReq.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return product_1.ProductTypeReq; }),
        (0, class_validator_1.ValidateNested)(),
        __metadata("design:type", product_1.ProductTypeReq)
    ], AdminPostProductsReq.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostProductsReq.prototype, "collection_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return product_1.ProductTagReq; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostProductsReq.prototype, "tags", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)(sales_channels_1.default.key, [
            (0, class_validator_1.IsOptional)(),
            (0, class_transformer_1.Type)(function () { return product_1.ProductSalesChannelReq; }),
            (0, class_validator_1.ValidateNested)({ each: true }),
            (0, class_validator_1.IsArray)(),
        ]),
        __metadata("design:type", Array)
    ], AdminPostProductsReq.prototype, "sales_channels", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return product_1.ProductProductCategoryReq; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostProductsReq.prototype, "categories", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return ProductOptionReq; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostProductsReq.prototype, "options", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return ProductVariantReq; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostProductsReq.prototype, "variants", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsReq.prototype, "weight", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsReq.prototype, "length", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsReq.prototype, "height", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsReq.prototype, "width", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsReq.prototype, "hs_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsReq.prototype, "origin_country", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsReq.prototype, "mid_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsReq.prototype, "material", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostProductsReq.prototype, "metadata", void 0);
    return AdminPostProductsReq;
}());
exports.AdminPostProductsReq = AdminPostProductsReq;
//# sourceMappingURL=create-product.js.map