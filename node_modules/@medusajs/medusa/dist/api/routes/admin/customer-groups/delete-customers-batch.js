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
exports.AdminDeleteCustomerGroupsGroupCustomerBatchReq = void 0;
var customer_groups_1 = require("../../../../types/customer-groups");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [delete] /admin/customer-groups/{id}/customers/batch
 * operationId: "DeleteCustomerGroupsGroupCustomerBatch"
 * summary: "Remove Customers from Group"
 * description: "Remove a list of customers from a customer group. This doesn't delete the customer, only the association between the customer and the customer group."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the customer group.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminDeleteCustomerGroupsGroupCustomerBatchReq"
 * x-codegen:
 *   method: removeCustomers
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.customerGroups.removeCustomers(customerGroupId, {
 *         customer_ids: [
 *           {
 *             id: customerId
 *           }
 *         ]
 *       })
 *       .then(({ customer_group }) => {
 *         console.log(customer_group.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import {
 *         useAdminRemoveCustomersFromCustomerGroup,
 *       } from "medusa-react"
 *
 *       type Props = {
 *         customerGroupId: string
 *       }
 *
 *       const CustomerGroup = ({ customerGroupId }: Props) => {
 *         const removeCustomers =
 *           useAdminRemoveCustomersFromCustomerGroup(
 *             customerGroupId
 *           )
 *         // ...
 *
 *         const handleRemoveCustomer = (customerId: string) => {
 *           removeCustomers.mutate({
 *             customer_ids: [
 *               {
 *                 id: customerId,
 *               },
 *             ],
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CustomerGroup
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X DELETE '{backend_url}/admin/customer-groups/{id}/customers/batch' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "customer_ids": [
 *               {
 *                   "id": "cus_01G2Q4BS9GAHDBMDEN4ZQZCJB2"
 *               }
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customer Groups
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminCustomerGroupsRes"
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
    var id, validated, customerGroupService, manager, customer_group;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminDeleteCustomerGroupsGroupCustomerBatchReq, req.body)];
            case 1:
                validated = _a.sent();
                customerGroupService = req.scope.resolve("customerGroupService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, customerGroupService
                                        .withTransaction(transactionManager)
                                        .removeCustomer(id, validated.customer_ids.map(function (_a) {
                                        var id = _a.id;
                                        return id;
                                    }))];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 2:
                customer_group = _a.sent();
                res.status(200).json({ customer_group: customer_group });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminDeleteCustomerGroupsGroupCustomerBatchReq
 * type: object
 * description: "The customers to remove from the customer group."
 * required:
 *   - customer_ids
 * properties:
 *   customer_ids:
 *     description: "The ids of the customers to remove"
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: ID of the customer
 *           type: string
 */
var AdminDeleteCustomerGroupsGroupCustomerBatchReq = /** @class */ (function () {
    function AdminDeleteCustomerGroupsGroupCustomerBatchReq() {
    }
    __decorate([
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return customer_groups_1.CustomerGroupsBatchCustomer; }),
        __metadata("design:type", Array)
    ], AdminDeleteCustomerGroupsGroupCustomerBatchReq.prototype, "customer_ids", void 0);
    return AdminDeleteCustomerGroupsGroupCustomerBatchReq;
}());
exports.AdminDeleteCustomerGroupsGroupCustomerBatchReq = AdminDeleteCustomerGroupsGroupCustomerBatchReq;
//# sourceMappingURL=delete-customers-batch.js.map