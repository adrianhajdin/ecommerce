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
exports.AdminPostRegionsRegionReq = void 0;
var class_validator_1 = require("class-validator");
var _1 = require(".");
var tax_inclusive_pricing_1 = __importDefault(require("../../../../loaders/feature-flags/tax-inclusive-pricing"));
var feature_flag_decorators_1 = require("../../../../utils/feature-flag-decorators");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [post] /admin/regions/{id}
 * operationId: "PostRegionsRegion"
 * summary: "Update a Region"
 * description: "Update a Region's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Region.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostRegionsRegionReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.regions.update(regionId, {
 *         name: "Europe"
 *       })
 *       .then(({ region }) => {
 *         console.log(region.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateRegion } from "medusa-react"
 *
 *       type Props = {
 *         regionId: string
 *       }
 *
 *       const Region = ({
 *         regionId
 *       }: Props) => {
 *         const updateRegion = useAdminUpdateRegion(regionId)
 *         // ...
 *
 *         const handleUpdate = (
 *           countries: string[]
 *         ) => {
 *           updateRegion.mutate({
 *             countries,
 *           }, {
 *             onSuccess: ({ region }) => {
 *               console.log(region.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Region
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/regions/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "name": "Europe"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Regions
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminRegionsRes"
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
    var region_id, validated, regionService, manager, region;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                region_id = req.params.region_id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostRegionsRegionReq, req.body)];
            case 1:
                validated = _a.sent();
                regionService = req.scope.resolve("regionService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, regionService
                                        .withTransaction(transactionManager)
                                        .update(region_id, validated)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 2:
                _a.sent();
                return [4 /*yield*/, regionService.retrieve(region_id, {
                        select: _1.defaultAdminRegionFields,
                        relations: _1.defaultAdminRegionRelations,
                    })];
            case 3:
                region = _a.sent();
                res.status(200).json({ region: region });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminPostRegionsRegionReq
 * type: object
 * description: "The details to update of the regions."
 * properties:
 *   name:
 *     description: "The name of the Region"
 *     type: string
 *   currency_code:
 *     description: "The 3 character ISO currency code to use in the Region."
 *     type: string
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *       description: See a list of codes.
 *   automatic_taxes:
 *     description: >-
 *       If set to `true`, the Medusa backend will automatically calculate taxes for carts in this region. If set to `false`, the taxes must be calculated manually.
 *     externalDocs:
 *       url: https://docs.medusajs.com/modules/taxes/storefront/manual-calculation
 *       description: How to calculate taxes in a storefront.
 *     type: boolean
 *   gift_cards_taxable:
 *     description: >-
 *       If set to `true`, taxes will be applied on gift cards.
 *     type: boolean
 *   tax_provider_id:
 *     description: "The ID of the tax provider to use. If none provided, the system tax provider is used."
 *     type: string
 *   tax_code:
 *     description: "The tax code of the Region."
 *     type: string
 *   tax_rate:
 *     description: "The tax rate to use in the Region."
 *     type: number
 *   includes_tax:
 *     x-featureFlag: "tax_inclusive_pricing"
 *     description: "Whether taxes are included in the prices of the region."
 *     type: boolean
 *   payment_providers:
 *     description: "A list of Payment Provider IDs that can be used in the Region"
 *     type: array
 *     items:
 *       type: string
 *   fulfillment_providers:
 *     description: "A list of Fulfillment Provider IDs that can be used in the Region"
 *     type: array
 *     items:
 *       type: string
 *   countries:
 *     description: "A list of countries' 2 ISO characters that should be included in the Region."
 *     type: array
 *     items:
 *       type: string
 */
var AdminPostRegionsRegionReq = /** @class */ (function () {
    function AdminPostRegionsRegionReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostRegionsRegionReq.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostRegionsRegionReq.prototype, "currency_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostRegionsRegionReq.prototype, "tax_code", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostRegionsRegionReq.prototype, "tax_rate", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostRegionsRegionReq.prototype, "gift_cards_taxable", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostRegionsRegionReq.prototype, "automatic_taxes", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostRegionsRegionReq.prototype, "tax_provider_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminPostRegionsRegionReq.prototype, "payment_providers", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminPostRegionsRegionReq.prototype, "fulfillment_providers", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminPostRegionsRegionReq.prototype, "countries", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)(tax_inclusive_pricing_1.default.key, [
            (0, class_validator_1.IsOptional)(),
            (0, class_validator_1.IsBoolean)(),
        ]),
        __metadata("design:type", Boolean)
    ], AdminPostRegionsRegionReq.prototype, "includes_tax", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostRegionsRegionReq.prototype, "metadata", void 0);
    return AdminPostRegionsRegionReq;
}());
exports.AdminPostRegionsRegionReq = AdminPostRegionsRegionReq;
//# sourceMappingURL=update-region.js.map