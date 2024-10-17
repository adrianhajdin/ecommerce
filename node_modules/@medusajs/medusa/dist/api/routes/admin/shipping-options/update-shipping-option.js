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
exports.AdminPostShippingOptionsOptionReq = void 0;
var class_validator_1 = require("class-validator");
var _1 = require(".");
var class_transformer_1 = require("class-transformer");
var tax_inclusive_pricing_1 = __importDefault(require("../../../../loaders/feature-flags/tax-inclusive-pricing"));
var models_1 = require("../../../../models");
var feature_flag_decorators_1 = require("../../../../utils/feature-flag-decorators");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [post] /admin/shipping-options/{id}
 * operationId: "PostShippingOptionsOption"
 * summary: "Update Shipping Option"
 * description: "Update a Shipping Option's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Shipping Option.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostShippingOptionsOptionReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.shippingOptions.update(optionId, {
 *         name: "PostFake",
 *         requirements: [
 *           {
 *             id,
 *             type: "max_subtotal",
 *             amount: 1000
 *           }
 *         ]
 *       })
 *       .then(({ shipping_option }) => {
 *         console.log(shipping_option.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminUpdateShippingOption } from "medusa-react"
 *
 *       type Props = {
 *         shippingOptionId: string
 *       }
 *
 *       const ShippingOption = ({ shippingOptionId }: Props) => {
 *         const updateShippingOption = useAdminUpdateShippingOption(
 *           shippingOptionId
 *         )
 *         // ...
 *
 *         const handleUpdate = (
 *           name: string,
 *           requirements: {
 *             id: string,
 *             type: string,
 *             amount: number
 *           }[]
 *         ) => {
 *           updateShippingOption.mutate({
 *             name,
 *             requirements
 *           }, {
 *             onSuccess: ({ shipping_option }) => {
 *               console.log(shipping_option.requirements)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default ShippingOption
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/shipping-options/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "requirements": [
 *             {
 *               "type": "max_subtotal",
 *               "amount": 1000
 *             }
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Shipping Options
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminShippingOptionsRes"
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
    var option_id, validated, optionService, manager, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                option_id = req.params.option_id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostShippingOptionsOptionReq, req.body)];
            case 1:
                validated = (_a.sent());
                optionService = req.scope.resolve("shippingOptionService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, optionService
                                        .withTransaction(transactionManager)
                                        .update(option_id, validated)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 2:
                _a.sent();
                return [4 /*yield*/, optionService.retrieve(option_id, {
                        select: _1.shippingOptionsDefaultFields,
                        relations: _1.shippingOptionsDefaultRelations,
                    })];
            case 3:
                data = _a.sent();
                res.status(200).json({ shipping_option: data });
                return [2 /*return*/];
        }
    });
}); });
var OptionRequirement = /** @class */ (function () {
    function OptionRequirement() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], OptionRequirement.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], OptionRequirement.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], OptionRequirement.prototype, "amount", void 0);
    return OptionRequirement;
}());
/**
 * @schema AdminPostShippingOptionsOptionReq
 * type: object
 * description: "The details to update of the shipping option."
 * required:
 *   - requirements
 * properties:
 *   name:
 *     description: "The name of the Shipping Option"
 *     type: string
 *   amount:
 *     description: >-
 *       The amount to charge for the Shipping Option. If the `price_type` of the shipping option is `calculated`, this amount will not actually be used.
 *     type: integer
 *   admin_only:
 *     description: >-
 *       If set to `true`, the shipping option can only be used when creating draft orders.
 *     type: boolean
 *   metadata:
 *     description: "An optional set of key-value pairs with additional information."
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 *   requirements:
 *     description: "The requirements that must be satisfied for the Shipping Option to be available."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - type
 *         - amount
 *       properties:
 *         id:
 *           description: The ID of an existing requirement. If an ID is passed, the existing requirement's details are updated. Otherwise, a new requirement is created.
 *           type: string
 *         type:
 *           description: The type of the requirement
 *           type: string
 *           enum:
 *             - max_subtotal
 *             - min_subtotal
 *         amount:
 *           description: The amount to compare with.
 *           type: integer
 *   includes_tax:
 *     description: "Tax included in prices of shipping option"
 *     x-featureFlag: "tax_inclusive_pricing"
 *     type: boolean
 */
var AdminPostShippingOptionsOptionReq = /** @class */ (function () {
    function AdminPostShippingOptionsOptionReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostShippingOptionsOptionReq.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostShippingOptionsOptionReq.prototype, "amount", void 0);
    __decorate([
        (0, class_validator_1.IsEnum)(models_1.ShippingOptionPriceType, {
            message: "Invalid price type, must be one of \"flat_rate\" or \"calculated\"",
        }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostShippingOptionsOptionReq.prototype, "price_type", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return OptionRequirement; }),
        __metadata("design:type", Array)
    ], AdminPostShippingOptionsOptionReq.prototype, "requirements", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostShippingOptionsOptionReq.prototype, "admin_only", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostShippingOptionsOptionReq.prototype, "metadata", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)(tax_inclusive_pricing_1.default.key, [
            (0, class_validator_1.IsOptional)(),
            (0, class_validator_1.IsBoolean)(),
        ]),
        __metadata("design:type", Boolean)
    ], AdminPostShippingOptionsOptionReq.prototype, "includes_tax", void 0);
    return AdminPostShippingOptionsOptionReq;
}());
exports.AdminPostShippingOptionsOptionReq = AdminPostShippingOptionsOptionReq;
//# sourceMappingURL=update-shipping-option.js.map