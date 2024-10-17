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
exports.AdminPostOrderEditsRequestConfirmationReq = void 0;
var class_validator_1 = require("class-validator");
var models_1 = require("../../../../models");
var order_edit_1 = require("../../../../types/order-edit");
/**
 * @oas [post] /admin/order-edits/{id}/request
 * operationId: "PostOrderEditsOrderEditRequest"
 * summary: "Request Confirmation"
 * description: "Request customer confirmation of an Order Edit. This would emit the event `order-edit.requested` which Notification Providers listen to and send
 *  a notification to the customer about the order edit."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order Edit.
 * x-codegen:
 *   method: requestConfirmation
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orderEdits.requestConfirmation(orderEditId)
 *       .then({ order_edit }) => {
 *         console.log(order_edit.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import {
 *         useAdminRequestOrderEditConfirmation,
 *       } from "medusa-react"
 *
 *       type Props = {
 *         orderEditId: string
 *       }
 *
 *       const OrderEdit = ({ orderEditId }: Props) => {
 *         const requestOrderConfirmation =
 *           useAdminRequestOrderEditConfirmation(
 *             orderEditId
 *           )
 *
 *         const handleRequestConfirmation = () => {
 *           requestOrderConfirmation.mutate(void 0, {
 *             onSuccess: ({ order_edit }) => {
 *               console.log(
 *                 order_edit.requested_at,
 *                 order_edit.requested_by
 *               )
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default OrderEdit
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/order-edits/{id}/request' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Order Edits
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminOrderEditsRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, validatedBody, orderEditService, orderService, paymentCollectionService, manager, loggedInUser, orderEdit;
    var _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                id = req.params.id;
                validatedBody = req.validatedBody;
                orderEditService = req.scope.resolve("orderEditService");
                orderService = req.scope.resolve("orderService");
                paymentCollectionService = req.scope.resolve("paymentCollectionService");
                manager = req.scope.resolve("manager");
                loggedInUser = ((_b = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : (_c = req.user) === null || _c === void 0 ? void 0 : _c.userId);
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        var orderEditServiceTx, orderEdit, total, order, paymentCollection;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    orderEditServiceTx = orderEditService.withTransaction(transactionManager);
                                    return [4 /*yield*/, orderEditServiceTx.requestConfirmation(id, {
                                            requestedBy: loggedInUser,
                                        })];
                                case 1:
                                    orderEdit = _a.sent();
                                    return [4 /*yield*/, orderEditServiceTx.decorateTotals(orderEdit)];
                                case 2:
                                    total = _a.sent();
                                    if (!(total.difference_due > 0)) return [3 /*break*/, 6];
                                    return [4 /*yield*/, orderService
                                            .withTransaction(transactionManager)
                                            .retrieve(orderEdit.order_id, {
                                            select: ["currency_code", "region_id"],
                                        })];
                                case 3:
                                    order = _a.sent();
                                    return [4 /*yield*/, paymentCollectionService
                                            .withTransaction(transactionManager)
                                            .create({
                                            type: models_1.PaymentCollectionType.ORDER_EDIT,
                                            amount: total.difference_due,
                                            currency_code: order.currency_code,
                                            region_id: order.region_id,
                                            description: validatedBody.payment_collection_description,
                                            created_by: loggedInUser,
                                        })];
                                case 4:
                                    paymentCollection = _a.sent();
                                    orderEdit.payment_collection_id = paymentCollection.id;
                                    return [4 /*yield*/, orderEditServiceTx.update(orderEdit.id, {
                                            payment_collection_id: paymentCollection.id,
                                        })];
                                case 5:
                                    _a.sent();
                                    _a.label = 6;
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); })];
            case 1:
                _d.sent();
                return [4 /*yield*/, orderEditService.retrieve(id, {
                        relations: order_edit_1.defaultOrderEditRelations,
                        select: order_edit_1.defaultOrderEditFields,
                    })];
            case 2:
                orderEdit = _d.sent();
                return [4 /*yield*/, orderEditService.decorateTotals(orderEdit)];
            case 3:
                orderEdit = _d.sent();
                res.status(200).send({
                    order_edit: orderEdit,
                });
                return [2 /*return*/];
        }
    });
}); });
var AdminPostOrderEditsRequestConfirmationReq = /** @class */ (function () {
    function AdminPostOrderEditsRequestConfirmationReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostOrderEditsRequestConfirmationReq.prototype, "payment_collection_description", void 0);
    return AdminPostOrderEditsRequestConfirmationReq;
}());
exports.AdminPostOrderEditsRequestConfirmationReq = AdminPostOrderEditsRequestConfirmationReq;
//# sourceMappingURL=request-confirmation.js.map