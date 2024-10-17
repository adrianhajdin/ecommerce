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
exports.AdminDeleteDiscountsDiscountConditionsConditionBatchReq = exports.AdminDeleteDiscountsDiscountConditionsConditionBatchParams = void 0;
var discount_1 = require("../../../../types/discount");
var class_validator_1 = require("class-validator");
var common_1 = require("../../../../types/common");
/**
 * @oas [delete] /admin/discounts/{discount_id}/conditions/{condition_id}/batch
 * operationId: "DeleteDiscountsDiscountConditionsConditionBatch"
 * summary: "Remove Batch Resources"
 * description: "Remove a batch of resources from a discount condition. This will only remove the association between the resource and the discount condition, not the resource itself."
 * x-authenticated: true
 * parameters:
 *   - (path) discount_id=* {string} The ID of the discount.
 *   - (path) condition_id=* {string} The ID of the condition to remove the resources from.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned discount.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned discount.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminDeleteDiscountsDiscountConditionsConditionBatchReq"
 * x-codegen:
 *   method: deleteConditionResourceBatch
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.discounts.deleteConditionResourceBatch(discountId, conditionId, {
 *         resources: [{ id: itemId }]
 *       })
 *       .then(({ discount }) => {
 *         console.log(discount.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import {
 *         useAdminDeleteDiscountConditionResourceBatch
 *       } from "medusa-react"
 *
 *       type Props = {
 *         discountId: string
 *         conditionId: string
 *       }
 *
 *       const DiscountCondition = ({
 *         discountId,
 *         conditionId
 *       }: Props) => {
 *         const deleteConditionResource = useAdminDeleteDiscountConditionResourceBatch(
 *           discountId,
 *           conditionId,
 *         )
 *         // ...
 *
 *         const handleDelete = (itemId: string) => {
 *           deleteConditionResource.mutate({
 *             resources: [
 *               {
 *                 id: itemId
 *               }
 *             ]
 *           }, {
 *             onSuccess: ({ discount }) => {
 *               console.log(discount.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default DiscountCondition
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/discounts/{id}/conditions/{condition_id}/batch' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "resources": [{ "id": "item_id" }]
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
    var _a, discount_id, condition_id, conditionService, manager, condition, validatedBody, data, discountService, discount;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.params, discount_id = _a.discount_id, condition_id = _a.condition_id;
                conditionService = req.scope.resolve("discountConditionService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, conditionService.retrieve(condition_id, {
                        select: ["id", "type", "discount_rule_id"],
                    })];
            case 1:
                condition = _c.sent();
                validatedBody = req.validatedBody;
                data = (_b = {
                        id: condition_id,
                        rule_id: condition.discount_rule_id
                    },
                    _b[discount_1.DiscountConditionMapTypeToProperty[condition.type]] = validatedBody.resources,
                    _b);
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, conditionService
                                        .withTransaction(transactionManager)
                                        .removeResources(data)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 2:
                _c.sent();
                discountService = req.scope.resolve("discountService");
                return [4 /*yield*/, discountService.retrieve(discount_id, req.retrieveConfig)];
            case 3:
                discount = _c.sent();
                res.status(200).json({ discount: discount });
                return [2 /*return*/];
        }
    });
}); });
/**
 * {@inheritDoc FindParams}
 */
// eslint-disable-next-line max-len
var AdminDeleteDiscountsDiscountConditionsConditionBatchParams = /** @class */ (function (_super) {
    __extends(AdminDeleteDiscountsDiscountConditionsConditionBatchParams, _super);
    function AdminDeleteDiscountsDiscountConditionsConditionBatchParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminDeleteDiscountsDiscountConditionsConditionBatchParams;
}(common_1.FindParams));
exports.AdminDeleteDiscountsDiscountConditionsConditionBatchParams = AdminDeleteDiscountsDiscountConditionsConditionBatchParams;
/**
 * @schema AdminDeleteDiscountsDiscountConditionsConditionBatchReq
 * type: object
 * description: "The resources to remove."
 * required:
 *   - resources
 * properties:
 *   resources:
 *     description: The resources to be removed from the discount condition
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: The id of the item
 *           type: string
 */
var AdminDeleteDiscountsDiscountConditionsConditionBatchReq = /** @class */ (function () {
    function AdminDeleteDiscountsDiscountConditionsConditionBatchReq() {
    }
    __decorate([
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminDeleteDiscountsDiscountConditionsConditionBatchReq.prototype, "resources", void 0);
    return AdminDeleteDiscountsDiscountConditionsConditionBatchReq;
}());
exports.AdminDeleteDiscountsDiscountConditionsConditionBatchReq = AdminDeleteDiscountsDiscountConditionsConditionBatchReq;
//# sourceMappingURL=delete-resources-from-condition-batch.js.map