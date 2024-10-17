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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostPriceListsPriceListReq = void 0;
var utils_1 = require("@medusajs/utils");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var _1 = require(".");
var tax_inclusive_pricing_1 = __importDefault(require("../../../../loaders/feature-flags/tax-inclusive-pricing"));
var price_list_1 = require("../../../../types/price-list");
var feature_flag_decorators_1 = require("../../../../utils/feature-flag-decorators");
var date_transform_1 = require("../../../../utils/validators/date-transform");
/**
 * @oas [post] /admin/price-lists
 * operationId: "PostPriceListsPriceList"
 * summary: "Create a Price List"
 * description: "Create a Price List."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostPriceListsPriceListReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       import { PriceListType } from "@medusajs/medusa"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.priceLists.create({
 *         name: "New Price List",
 *         description: "A new price list",
 *         type: PriceListType.SALE,
 *         prices: [
 *           {
 *             amount: 1000,
 *             variant_id,
 *             currency_code: "eur"
 *           }
 *         ]
 *       })
 *       .then(({ price_list }) => {
 *         console.log(price_list.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import {
 *         PriceListStatus,
 *         PriceListType,
 *       } from "@medusajs/medusa"
 *       import { useAdminCreatePriceList } from "medusa-react"
 *
 *       type CreateData = {
 *         name: string
 *         description: string
 *         type: PriceListType
 *         status: PriceListStatus
 *         prices: {
 *           amount: number
 *           variant_id: string
 *           currency_code: string
 *           max_quantity: number
 *         }[]
 *       }
 *
 *       const CreatePriceList = () => {
 *         const createPriceList = useAdminCreatePriceList()
 *         // ...
 *
 *         const handleCreate = (
 *           data: CreateData
 *         ) => {
 *           createPriceList.mutate(data, {
 *             onSuccess: ({ price_list }) => {
 *               console.log(price_list.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreatePriceList
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/price-lists' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "name": "New Price List",
 *           "description": "A new price list",
 *           "type": "sale",
 *           "prices": [
 *             {
 *               "amount": 1000,
 *               "variant_id": "afafa",
 *               "currency_code": "eur"
 *             }
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Price Lists
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminPriceListRes"
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
    var priceListService, manager, priceList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                priceListService = req.scope.resolve("priceListService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, priceListService
                                        .withTransaction(transactionManager)
                                        .create(req.validatedBody)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 1:
                priceList = _a.sent();
                return [4 /*yield*/, priceListService.retrieve(priceList.id, {
                        select: _1.defaultAdminPriceListFields,
                        relations: _1.defaultAdminPriceListRelations,
                    })];
            case 2:
                priceList = _a.sent();
                res.json({ price_list: priceList });
                return [2 /*return*/];
        }
    });
}); });
var CustomerGroup = /** @class */ (function () {
    function CustomerGroup() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], CustomerGroup.prototype, "id", void 0);
    return CustomerGroup;
}());
/**
 * @schema AdminPostPriceListsPriceListReq
 * type: object
 * description: "The details of the price list to create."
 * required:
 *   - name
 *   - description
 *   - type
 *   - prices
 * properties:
 *   name:
 *     description: "The name of the Price List."
 *     type: string
 *   description:
 *     description: "The description of the Price List."
 *     type: string
 *   starts_at:
 *     description: "The date with timezone that the Price List starts being valid."
 *     type: string
 *     format: date
 *   ends_at:
 *     description: "The date with timezone that the Price List ends being valid."
 *     type: string
 *     format: date
 *   type:
 *     description: The type of the Price List.
 *     type: string
 *     enum:
 *      - sale
 *      - override
 *   status:
 *     description: >-
 *       The status of the Price List. If the status is set to `draft`, the prices created in the price list will not be available of the customer.
 *     type: string
 *     enum:
 *       - active
 *       - draft
 *   prices:
 *      description: The prices of the Price List.
 *      type: array
 *      items:
 *        type: object
 *        required:
 *          - amount
 *          - variant_id
 *        properties:
 *          region_id:
 *            description: The ID of the Region for which the price is used. This is only required if `currecny_code` is not provided.
 *            type: string
 *          currency_code:
 *            description: The 3 character ISO currency code for which the price will be used. This is only required if `region_id` is not provided.
 *            type: string
 *            externalDocs:
 *              url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *              description: See a list of codes.
 *          amount:
 *            description: The amount to charge for the Product Variant.
 *            type: integer
 *          variant_id:
 *            description: The ID of the Variant for which the price is used.
 *            type: string
 *          min_quantity:
 *            description: The minimum quantity for which the price will be used.
 *            type: integer
 *          max_quantity:
 *            description: The maximum quantity for which the price will be used.
 *            type: integer
 *   customer_groups:
 *     type: array
 *     description: An array of customer groups that the Price List applies to.
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: The ID of a customer group
 *           type: string
 *   includes_tax:
 *      description: "Tax included in prices of price list"
 *      x-featureFlag: "tax_inclusive_pricing"
 *      type: boolean
 */
var AdminPostPriceListsPriceListReq = /** @class */ (function () {
    function AdminPostPriceListsPriceListReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostPriceListsPriceListReq.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostPriceListsPriceListReq.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(date_transform_1.transformOptionalDate),
        __metadata("design:type", Date)
    ], AdminPostPriceListsPriceListReq.prototype, "starts_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(date_transform_1.transformOptionalDate),
        __metadata("design:type", Date)
    ], AdminPostPriceListsPriceListReq.prototype, "ends_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEnum)(utils_1.PriceListStatus),
        __metadata("design:type", String)
    ], AdminPostPriceListsPriceListReq.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsEnum)(utils_1.PriceListType),
        __metadata("design:type", String)
    ], AdminPostPriceListsPriceListReq.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_transformer_1.Type)(function () { return price_list_1.AdminPriceListPricesCreateReq; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        __metadata("design:type", Array)
    ], AdminPostPriceListsPriceListReq.prototype, "prices", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_transformer_1.Type)(function () { return CustomerGroup; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        __metadata("design:type", Array)
    ], AdminPostPriceListsPriceListReq.prototype, "customer_groups", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)(tax_inclusive_pricing_1.default.key, [
            (0, class_validator_1.IsOptional)(),
            (0, class_validator_1.IsBoolean)(),
        ]),
        __metadata("design:type", Boolean)
    ], AdminPostPriceListsPriceListReq.prototype, "includes_tax", void 0);
    return AdminPostPriceListsPriceListReq;
}());
exports.AdminPostPriceListsPriceListReq = AdminPostPriceListsPriceListReq;
//# sourceMappingURL=create-price-list.js.map