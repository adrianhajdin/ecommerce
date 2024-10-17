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
exports.AdminDeleteDiscountsDiscountConditionsConditionParams = void 0;
var medusa_core_utils_1 = require("medusa-core-utils");
var common_1 = require("../../../../types/common");
/**
 * @oas [delete] /admin/discounts/{discount_id}/conditions/{condition_id}
 * operationId: "DeleteDiscountsDiscountConditionsCondition"
 * summary: "Delete a Condition"
 * description: "Delete a Discount Condition. This does not delete resources associated to the discount condition."
 * x-authenticated: true
 * parameters:
 *   - (path) discount_id=* {string} The ID of the Discount
 *   - (path) condition_id=* {string} The ID of the Discount Condition
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned discount.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned discount.
 * x-codegen:
 *   method: deleteCondition
 *   queryParams: AdminDeleteDiscountsDiscountConditionsConditionParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.discounts.deleteCondition(discountId, conditionId)
 *       .then(({ id, object, deleted }) => {
 *         console.log(id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import {
 *         useAdminDiscountRemoveCondition
 *       } from "medusa-react"
 *
 *       type Props = {
 *         discountId: string
 *       }
 *
 *       const Discount = ({ discountId }: Props) => {
 *         const deleteCondition = useAdminDiscountRemoveCondition(
 *           discountId
 *         )
 *         // ...
 *
 *         const handleDelete = (
 *           conditionId: string
 *         ) => {
 *           deleteCondition.mutate(conditionId, {
 *             onSuccess: ({ id, object, deleted }) => {
 *               console.log(deleted)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Discount
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/discounts/{id}/conditions/{condition_id}' \
 *       -H 'x-medusa-access-token: {api_token}'
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
 *           $ref: "#/components/schemas/AdminDiscountConditionsDeleteRes"
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
    var _a, discount_id, condition_id, conditionService, discountService, condition, discount_1, discount, manager;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, discount_id = _a.discount_id, condition_id = _a.condition_id;
                conditionService = req.scope.resolve("discountConditionService");
                discountService = req.scope.resolve("discountService");
                return [4 /*yield*/, conditionService
                        .retrieve(condition_id)
                        .catch(function () { return void 0; })];
            case 1:
                condition = _b.sent();
                if (!!condition) return [3 /*break*/, 3];
                return [4 /*yield*/, discountService.retrieve(discount_id, req.retrieveConfig)
                    // resolves idempotently in case of non-existing condition
                ];
            case 2:
                discount_1 = _b.sent();
                // resolves idempotently in case of non-existing condition
                return [2 /*return*/, res.json({
                        id: condition_id,
                        object: "discount-condition",
                        deleted: true,
                        discount: discount_1,
                    })];
            case 3: return [4 /*yield*/, discountService.retrieve(discount_id, {
                    select: ["id", "rule_id"],
                })];
            case 4:
                discount = _b.sent();
                if (condition.discount_rule_id !== discount.rule_id) {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Condition with id ".concat(condition_id, " does not belong to Discount with id ").concat(discount_id));
                }
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, conditionService
                                        .withTransaction(transactionManager)
                                        .delete(condition_id)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 5:
                _b.sent();
                return [4 /*yield*/, discountService.retrieve(discount_id, req.retrieveConfig)];
            case 6:
                discount = _b.sent();
                res.json({
                    id: condition_id,
                    object: "discount-condition",
                    deleted: true,
                    discount: discount,
                });
                return [2 /*return*/];
        }
    });
}); });
var AdminDeleteDiscountsDiscountConditionsConditionParams = /** @class */ (function (_super) {
    __extends(AdminDeleteDiscountsDiscountConditionsConditionParams, _super);
    function AdminDeleteDiscountsDiscountConditionsConditionParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminDeleteDiscountsDiscountConditionsConditionParams;
}(common_1.FindParams));
exports.AdminDeleteDiscountsDiscountConditionsConditionParams = AdminDeleteDiscountsDiscountConditionsConditionParams;
//# sourceMappingURL=delete-condition.js.map