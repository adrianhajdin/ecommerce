"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostTaxRatesTaxRateProductsParams = exports.AdminPostTaxRatesTaxRateProductsReq = void 0;
var class_validator_1 = require("class-validator");
var get_query_config_1 = require("./utils/get-query-config");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [post] /admin/tax-rates/{id}/products/batch
 * operationId: "PostTaxRatesTaxRateProducts"
 * summary: "Add to Products"
 * description: "Add products to a tax rate."
 * parameters:
 *   - (path) id=* {string} ID of the tax rate.
 *   - in: query
 *     name: fields
 *     description: "Comma-separated fields that should be included in the returned tax rate."
 *     style: form
 *     explode: false
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: expand
 *     description: "Comma-separated relations that should be expanded in the returned tax rate."
 *     style: form
 *     explode: false
 *     schema:
 *       type: array
 *       items:
 *         type: string
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostTaxRatesTaxRateProductsReq"
 * x-codegen:
 *   method: addProducts
 *   queryParams: AdminPostTaxRatesTaxRateProductsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.taxRates.addProducts(taxRateId, {
 *         products: [
 *           productId
 *         ]
 *       })
 *       .then(({ tax_rate }) => {
 *         console.log(tax_rate.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateProductTaxRates } from "medusa-react"
 *
 *       type Props = {
 *         taxRateId: string
 *       }
 *
 *       const TaxRate = ({ taxRateId }: Props) => {
 *         const addProduct = useAdminCreateProductTaxRates(taxRateId)
 *         // ...
 *
 *         const handleAddProduct = (productIds: string[]) => {
 *           addProduct.mutate({
 *             products: productIds,
 *           }, {
 *             onSuccess: ({ tax_rate }) => {
 *               console.log(tax_rate.products)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default TaxRate
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/tax-rates/{id}/products/batch' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *          "products": [
 *            "{product_id}"
 *          ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Tax Rates
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminTaxRatesRes"
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
    var value, query, rateService, manager, config, rate, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, validator_1.validator)(AdminPostTaxRatesTaxRateProductsReq, req.body)];
            case 1:
                value = _a.sent();
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostTaxRatesTaxRateProductsParams, req.query)];
            case 2:
                query = _a.sent();
                rateService = req.scope.resolve("taxRateService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, rateService
                                        .withTransaction(transactionManager)
                                        .addToProduct(req.params.id, value.products)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 3:
                _a.sent();
                config = (0, get_query_config_1.getRetrieveConfig)(query.fields, query.expand);
                return [4 /*yield*/, rateService.retrieve(req.params.id, config)];
            case 4:
                rate = _a.sent();
                data = (0, get_query_config_1.pickByConfig)(rate, config);
                res.json({ tax_rate: data });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminPostTaxRatesTaxRateProductsReq
 * type: object
 * description: "The details of the products to associat with the tax rate."
 * required:
 *   - products
 * properties:
 *   products:
 *     type: array
 *     description: "The IDs of the products to associate with this tax rate"
 *     items:
 *       type: string
 */
var AdminPostTaxRatesTaxRateProductsReq = /** @class */ (function () {
    function AdminPostTaxRatesTaxRateProductsReq() {
    }
    __decorate([
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostTaxRatesTaxRateProductsReq.prototype, "products", void 0);
    return AdminPostTaxRatesTaxRateProductsReq;
}());
exports.AdminPostTaxRatesTaxRateProductsReq = AdminPostTaxRatesTaxRateProductsReq;
/**
 * {@inheritDoc FindParams}
 */
var AdminPostTaxRatesTaxRateProductsParams = /** @class */ (function () {
    function AdminPostTaxRatesTaxRateProductsParams() {
    }
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminPostTaxRatesTaxRateProductsParams.prototype, "expand", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminPostTaxRatesTaxRateProductsParams.prototype, "fields", void 0);
    return AdminPostTaxRatesTaxRateProductsParams;
}());
exports.AdminPostTaxRatesTaxRateProductsParams = AdminPostTaxRatesTaxRateProductsParams;
//# sourceMappingURL=add-to-products.js.map