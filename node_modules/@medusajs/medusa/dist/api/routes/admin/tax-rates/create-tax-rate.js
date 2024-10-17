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
exports.AdminPostTaxRatesParams = exports.AdminPostTaxRatesReq = void 0;
var class_validator_1 = require("class-validator");
var get_query_config_1 = require("./utils/get-query-config");
var lodash_1 = require("lodash");
var medusa_core_utils_1 = require("medusa-core-utils");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [post] /admin/tax-rates
 * operationId: "PostTaxRates"
 * summary: "Create a Tax Rate"
 * description: "Create a Tax Rate."
 * parameters:
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
 *         $ref: "#/components/schemas/AdminPostTaxRatesReq"
 * x-codegen:
 *   method: create
 *   queryParams: AdminPostTaxRatesParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.taxRates.create({
 *         code: "TEST",
 *         name: "New Tax Rate",
 *         region_id
 *       })
 *       .then(({ tax_rate }) => {
 *         console.log(tax_rate.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateTaxRate } from "medusa-react"
 *
 *       type Props = {
 *         regionId: string
 *       }
 *
 *       const CreateTaxRate = ({ regionId }: Props) => {
 *         const createTaxRate = useAdminCreateTaxRate()
 *         // ...
 *
 *         const handleCreate = (
 *           code: string,
 *           name: string,
 *           rate: number
 *         ) => {
 *           createTaxRate.mutate({
 *             code,
 *             name,
 *             region_id: regionId,
 *             rate,
 *           }, {
 *             onSuccess: ({ tax_rate }) => {
 *               console.log(tax_rate.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateTaxRate
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/tax-rates' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "code": "TEST",
 *           "name": "New Tax Rate",
 *           "region_id": "{region_id}"
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
    var value, query, manager, rateService, id, config, rate, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, validator_1.validator)(AdminPostTaxRatesReq, req.body)];
            case 1:
                value = _a.sent();
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostTaxRatesParams, req.query)];
            case 2:
                query = _a.sent();
                manager = req.scope.resolve("manager");
                rateService = req.scope.resolve("taxRateService");
                return [4 /*yield*/, manager.transaction(function (tx) { return __awaiter(void 0, void 0, void 0, function () {
                        var txRateService, created;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    txRateService = rateService.withTransaction(tx);
                                    return [4 /*yield*/, txRateService.create((0, lodash_1.omit)(value, ["products", "product_types", "shipping_options"]))];
                                case 1:
                                    created = _a.sent();
                                    id = created.id;
                                    if (!(0, medusa_core_utils_1.isDefined)(value.products)) return [3 /*break*/, 3];
                                    return [4 /*yield*/, txRateService.addToProduct(id, value.products)];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3:
                                    if (!(0, medusa_core_utils_1.isDefined)(value.product_types)) return [3 /*break*/, 5];
                                    return [4 /*yield*/, txRateService.addToProductType(id, value.product_types)];
                                case 4:
                                    _a.sent();
                                    _a.label = 5;
                                case 5:
                                    if (!(0, medusa_core_utils_1.isDefined)(value.shipping_options)) return [3 /*break*/, 7];
                                    return [4 /*yield*/, txRateService.addToShippingOption(id, value.shipping_options)];
                                case 6:
                                    _a.sent();
                                    _a.label = 7;
                                case 7: return [2 /*return*/];
                            }
                        });
                    }); })];
            case 3:
                _a.sent();
                if (typeof id === "undefined") {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Tax Rate was not created");
                }
                config = (0, get_query_config_1.getRetrieveConfig)(query.fields, query.expand);
                return [4 /*yield*/, rateService.retrieve(id, config)];
            case 4:
                rate = _a.sent();
                data = (0, get_query_config_1.pickByConfig)(rate, config);
                res.json({ tax_rate: data });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminPostTaxRatesReq
 * type: object
 * description: "The details of the tax rate to create."
 * required:
 *   - code
 *   - name
 *   - region_id
 * properties:
 *   code:
 *     type: string
 *     description: "The code of the tax rate."
 *   name:
 *     type: string
 *     description: "The name of the tax rate."
 *   region_id:
 *     type: string
 *     description: "The ID of the Region that the tax rate belongs to."
 *   rate:
 *     type: number
 *     description: "The numeric rate to charge."
 *   products:
 *     type: array
 *     description: "The IDs of the products associated with this tax rate."
 *     items:
 *       type: string
 *   shipping_options:
 *     type: array
 *     description: "The IDs of the shipping options associated with this tax rate"
 *     items:
 *       type: string
 *   product_types:
 *     type: array
 *     description: "The IDs of the types of products associated with this tax rate"
 *     items:
 *       type: string
 */
var AdminPostTaxRatesReq = /** @class */ (function () {
    function AdminPostTaxRatesReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostTaxRatesReq.prototype, "code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostTaxRatesReq.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostTaxRatesReq.prototype, "region_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Object)
    ], AdminPostTaxRatesReq.prototype, "rate", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostTaxRatesReq.prototype, "products", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostTaxRatesReq.prototype, "shipping_options", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostTaxRatesReq.prototype, "product_types", void 0);
    return AdminPostTaxRatesReq;
}());
exports.AdminPostTaxRatesReq = AdminPostTaxRatesReq;
/**
 * {@inheritDoc FindParams}
 */
var AdminPostTaxRatesParams = /** @class */ (function () {
    function AdminPostTaxRatesParams() {
    }
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminPostTaxRatesParams.prototype, "expand", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminPostTaxRatesParams.prototype, "fields", void 0);
    return AdminPostTaxRatesParams;
}());
exports.AdminPostTaxRatesParams = AdminPostTaxRatesParams;
//# sourceMappingURL=create-tax-rate.js.map