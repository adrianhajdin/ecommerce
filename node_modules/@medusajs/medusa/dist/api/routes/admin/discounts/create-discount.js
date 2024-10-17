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
exports.AdminPostDiscountsParams = exports.AdminCreateCondition = exports.AdminPostDiscountsReq = exports.AdminPostDiscountsDiscountRule = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var models_1 = require("../../../../models");
var common_1 = require("../../../../types/common");
var discount_1 = require("../../../../types/discount");
var greater_than_1 = require("../../../../utils/validators/greater-than");
var iso8601_duration_1 = require("../../../../utils/validators/iso8601-duration");
/**
 * @oas [post] /admin/discounts
 * operationId: "PostDiscounts"
 * summary: "Create a Discount"
 * x-authenticated: true
 * description: "Create a Discount with a given set of rules that defines how the Discount is applied."
 * parameters:
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned discount.
 *   - (query) fields {string} Comma-separated fields that should be retrieved in the returned discount.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostDiscountsReq"
 * x-codegen:
 *   method: create
 *   queryParams: AdminPostDiscountsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       import { AllocationType, DiscountRuleType } from "@medusajs/medusa"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.discounts.create({
 *         code: "TEST",
 *         rule: {
 *           type: DiscountRuleType.FIXED,
 *           value: 10,
 *           allocation: AllocationType.ITEM
 *         },
 *         regions: ["reg_XXXXXXXX"],
 *         is_dynamic: false,
 *         is_disabled: false
 *       })
 *       .then(({ discount }) => {
 *         console.log(discount.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import {
 *         useAdminCreateDiscount,
 *       } from "medusa-react"
 *       import {
 *         AllocationType,
 *         DiscountRuleType,
 *       } from "@medusajs/medusa"
 *
 *       const CreateDiscount = () => {
 *         const createDiscount = useAdminCreateDiscount()
 *         // ...
 *
 *         const handleCreate = (
 *           currencyCode: string,
 *           regionId: string
 *         ) => {
 *           // ...
 *           createDiscount.mutate({
 *             code: currencyCode,
 *             rule: {
 *               type: DiscountRuleType.FIXED,
 *               value: 10,
 *               allocation: AllocationType.ITEM,
 *             },
 *             regions: [
 *                 regionId,
 *             ],
 *             is_dynamic: false,
 *             is_disabled: false,
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateDiscount
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/discounts' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "code": "TEST",
 *           "rule": {
 *              "type": "fixed",
 *              "value": 10,
 *              "allocation": "item"
 *           },
 *           "regions": ["reg_XXXXXXXX"]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Discounts
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminDiscountsRes"
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
    var discountService, manager, created, discount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                discountService = req.scope.resolve("discountService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, discountService
                                        .withTransaction(transactionManager)
                                        .create(req.validatedBody)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 1:
                created = _a.sent();
                return [4 /*yield*/, discountService.retrieve(created.id, req.retrieveConfig)];
            case 2:
                discount = _a.sent();
                res.status(200).json({ discount: discount });
                return [2 /*return*/];
        }
    });
}); });
/**
 * Details of the discount rule to create.
 */
var AdminPostDiscountsDiscountRule = /** @class */ (function () {
    function AdminPostDiscountsDiscountRule() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostDiscountsDiscountRule.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsEnum)(models_1.DiscountRuleType, {
            message: "Invalid rule type, must be one of \"fixed\", \"percentage\" or \"free_shipping\"",
        }),
        __metadata("design:type", String)
    ], AdminPostDiscountsDiscountRule.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], AdminPostDiscountsDiscountRule.prototype, "value", void 0);
    __decorate([
        (0, class_validator_1.IsEnum)(models_1.AllocationType, {
            message: "Invalid allocation type, must be one of \"total\" or \"item\"",
        }),
        __metadata("design:type", String)
    ], AdminPostDiscountsDiscountRule.prototype, "allocation", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return AdminCreateCondition; }),
        __metadata("design:type", Array)
    ], AdminPostDiscountsDiscountRule.prototype, "conditions", void 0);
    return AdminPostDiscountsDiscountRule;
}());
exports.AdminPostDiscountsDiscountRule = AdminPostDiscountsDiscountRule;
/**
 * @schema AdminPostDiscountsReq
 * type: object
 * description: "The details of the discount to create."
 * required:
 *   - code
 *   - rule
 *   - regions
 * properties:
 *   code:
 *     type: string
 *     description: A unique code that will be used to redeem the discount
 *   is_dynamic:
 *     type: boolean
 *     description: Whether the discount should have multiple instances of itself, each with a different code. This can be useful for automatically generated discount codes that all have to follow a common set of rules.
 *     default: false
 *   rule:
 *     description: The discount rule that defines how discounts are calculated
 *     type: object
 *     required:
 *        - type
 *        - value
 *        - allocation
 *     properties:
 *       description:
 *         type: string
 *         description: "A short description of the discount"
 *       type:
 *         type: string
 *         description: >-
 *           The type of the discount, can be `fixed` for discounts that reduce the price by a fixed amount, `percentage` for percentage reductions or `free_shipping` for shipping vouchers.
 *         enum: [fixed, percentage, free_shipping]
 *       value:
 *         type: number
 *         description: "The value that the discount represents. This will depend on the type of the discount."
 *       allocation:
 *         type: string
 *         description: >-
 *           The scope that the discount should apply to. `total` indicates that the discount should be applied on the cart total, and `item` indicates that the discount should be applied to each discountable item in the cart.
 *         enum: [total, item]
 *       conditions:
 *         type: array
 *         description: "A set of conditions that can be used to limit when the discount can be used. Only one of `products`, `product_types`, `product_collections`, `product_tags`, and `customer_groups` should be provided based on the discount condition's type."
 *         items:
 *           type: object
 *           required:
 *              - operator
 *           properties:
 *             operator:
 *               type: string
 *               description: >-
 *                 Operator of the condition. `in` indicates that discountable resources are within the specified resources. `not_in` indicates that
 *                 discountable resources are everything but the specified resources.
 *               enum: [in, not_in]
 *             products:
 *               type: array
 *               description: list of product IDs if the condition's type is `products`.
 *               items:
 *                 type: string
 *             product_types:
 *               type: array
 *               description: list of product type IDs if the condition's type is `product_types`.
 *               items:
 *                 type: string
 *             product_collections:
 *               type: array
 *               description: list of product collection IDs if the condition's type is `product_collections`.
 *               items:
 *                 type: string
 *             product_tags:
 *               type: array
 *               description: list of product tag IDs if the condition's type is `product_tags`.
 *               items:
 *                 type: string
 *             customer_groups:
 *               type: array
 *               description: list of customer group IDs if the condition's type is `customer_groups`.
 *               items:
 *                 type: string
 *   is_disabled:
 *     type: boolean
 *     description: >-
 *       Whether the discount code is disabled on creation. If set to `true`, it will not be available for customers.
 *     default: false
 *   starts_at:
 *     type: string
 *     format: date-time
 *     description: The date and time at which the discount should be available.
 *   ends_at:
 *     type: string
 *     format: date-time
 *     description: The date and time at which the discount should no longer be available.
 *   valid_duration:
 *     type: string
 *     description: The duration the discount runs between
 *     example: P3Y6M4DT12H30M5S
 *   regions:
 *     description: A list of region IDs representing the Regions in which the Discount can be used.
 *     type: array
 *     items:
 *       type: string
 *   usage_limit:
 *     type: number
 *     description: Maximum number of times the discount can be used
 *   metadata:
 *     description: An optional set of key-value pairs to hold additional information.
 *     type: object
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
var AdminPostDiscountsReq = /** @class */ (function () {
    function AdminPostDiscountsReq() {
        this.is_dynamic = false;
        this.is_disabled = false;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", String)
    ], AdminPostDiscountsReq.prototype, "code", void 0);
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return AdminPostDiscountsDiscountRule; }),
        __metadata("design:type", AdminPostDiscountsDiscountRule)
    ], AdminPostDiscountsReq.prototype, "rule", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostDiscountsReq.prototype, "is_dynamic", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostDiscountsReq.prototype, "is_disabled", void 0);
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        __metadata("design:type", Date)
    ], AdminPostDiscountsReq.prototype, "starts_at", void 0);
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_validator_1.IsOptional)(),
        (0, greater_than_1.IsGreaterThan)("starts_at"),
        (0, class_transformer_1.Type)(function () { return Date; }),
        __metadata("design:type", Date)
    ], AdminPostDiscountsReq.prototype, "ends_at", void 0);
    __decorate([
        (0, iso8601_duration_1.IsISO8601Duration)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostDiscountsReq.prototype, "valid_duration", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsPositive)(),
        __metadata("design:type", Number)
    ], AdminPostDiscountsReq.prototype, "usage_limit", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], AdminPostDiscountsReq.prototype, "regions", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostDiscountsReq.prototype, "metadata", void 0);
    return AdminPostDiscountsReq;
}());
exports.AdminPostDiscountsReq = AdminPostDiscountsReq;
/**
 * Details of the discount condition to create.
 */
var AdminCreateCondition = /** @class */ (function (_super) {
    __extends(AdminCreateCondition, _super);
    function AdminCreateCondition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminCreateCondition.prototype, "operator", void 0);
    return AdminCreateCondition;
}(discount_1.AdminUpsertConditionsReq));
exports.AdminCreateCondition = AdminCreateCondition;
/**
 * {@inheritDoc FindParams}
 */
var AdminPostDiscountsParams = /** @class */ (function (_super) {
    __extends(AdminPostDiscountsParams, _super);
    function AdminPostDiscountsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminPostDiscountsParams;
}(common_1.FindParams));
exports.AdminPostDiscountsParams = AdminPostDiscountsParams;
//# sourceMappingURL=create-discount.js.map