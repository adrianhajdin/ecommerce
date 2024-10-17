"use strict";
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var models_1 = require("../../../../models");
var order_edit_1 = require("../../../../types/order-edit");
/**
 * @oas [post] /store/order-edits/{id}/complete
 * operationId: "PostOrderEditsOrderEditComplete"
 * summary: "Complete an Order Edit"
 * description: "Complete an Order Edit and reflect its changes on the original order. Any additional payment required must be authorized first using the Payment Collection API Routes."
 * externalDocs:
 *   description: "How to handle order edits in a storefront"
 *   url: "https://docs.medusajs.com/modules/orders/storefront/handle-order-edits"
 * parameters:
 *   - (path) id=* {string} The ID of the Order Edit.
 * x-codegen:
 *   method: complete
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.orderEdits.complete(orderEditId)
 *       .then(({ order_edit }) => {
 *         console.log(order_edit.id)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useCompleteOrderEdit } from "medusa-react"
 *
 *       type Props = {
 *         orderEditId: string
 *       }
 *
 *       const OrderEdit = ({ orderEditId }: Props) => {
 *         const completeOrderEdit = useCompleteOrderEdit(
 *           orderEditId
 *         )
 *         // ...
 *
 *         const handleCompleteOrderEdit = () => {
 *           completeOrderEdit.mutate(void 0, {
 *             onSuccess: ({ order_edit }) => {
 *               console.log(order_edit.confirmed_at)
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
 *       curl -X POST '{backend_url}/store/order-edits/{id}/complete'
 * tags:
 *   - Order Edits
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreOrderEditsRes"
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
    var id, orderEditService, paymentProviderService, manager, userId, orderEdit;
    var _a, _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                id = req.params.id;
                orderEditService = req.scope.resolve("orderEditService");
                paymentProviderService = req.scope.resolve("paymentProviderService");
                manager = req.scope.resolve("manager");
                userId = (_d = (_b = (_a = req.user) === null || _a === void 0 ? void 0 : _a.customer_id) !== null && _b !== void 0 ? _b : (_c = req.user) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : (_e = req.user) === null || _e === void 0 ? void 0 : _e.userId;
                return [4 /*yield*/, manager.transaction(function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                        var orderEditServiceTx, paymentProviderServiceTx, orderEdit, allowedStatus, _a, _b, payment, e_1_1, returned;
                        var e_1, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    orderEditServiceTx = orderEditService.withTransaction(manager);
                                    paymentProviderServiceTx = paymentProviderService.withTransaction(manager);
                                    return [4 /*yield*/, orderEditServiceTx.retrieve(id, {
                                            relations: ["payment_collection", "payment_collection.payments"],
                                        })];
                                case 1:
                                    orderEdit = _d.sent();
                                    allowedStatus = [models_1.OrderEditStatus.REQUESTED, models_1.OrderEditStatus.CONFIRMED];
                                    if (!(orderEdit.payment_collection &&
                                        allowedStatus.includes(orderEdit.status))) return [3 /*break*/, 9];
                                    if (orderEdit.payment_collection.status !==
                                        models_1.PaymentCollectionStatus.AUTHORIZED) {
                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Unable to complete an order edit if the payment is not authorized");
                                    }
                                    if (!orderEdit.payment_collection) return [3 /*break*/, 9];
                                    _d.label = 2;
                                case 2:
                                    _d.trys.push([2, 7, 8, 9]);
                                    _a = __values(orderEdit.payment_collection.payments), _b = _a.next();
                                    _d.label = 3;
                                case 3:
                                    if (!!_b.done) return [3 /*break*/, 6];
                                    payment = _b.value;
                                    if (!(payment.order_id !== orderEdit.order_id)) return [3 /*break*/, 5];
                                    return [4 /*yield*/, paymentProviderServiceTx.updatePayment(payment.id, {
                                            order_id: orderEdit.order_id,
                                        })];
                                case 4:
                                    _d.sent();
                                    _d.label = 5;
                                case 5:
                                    _b = _a.next();
                                    return [3 /*break*/, 3];
                                case 6: return [3 /*break*/, 9];
                                case 7:
                                    e_1_1 = _d.sent();
                                    e_1 = { error: e_1_1 };
                                    return [3 /*break*/, 9];
                                case 8:
                                    try {
                                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                    return [7 /*endfinally*/];
                                case 9:
                                    if (orderEdit.status === models_1.OrderEditStatus.CONFIRMED) {
                                        return [2 /*return*/, orderEdit];
                                    }
                                    if (orderEdit.status !== models_1.OrderEditStatus.REQUESTED) {
                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot complete an order edit with status ".concat(orderEdit.status));
                                    }
                                    return [4 /*yield*/, orderEditServiceTx.confirm(id, {
                                            confirmedBy: userId,
                                        })];
                                case 10:
                                    returned = _d.sent();
                                    return [2 /*return*/, returned];
                            }
                        });
                    }); })];
            case 1:
                _f.sent();
                return [4 /*yield*/, orderEditService.retrieve(id, {
                        select: order_edit_1.defaultStoreOrderEditFields,
                        relations: order_edit_1.defaultStoreOrderEditRelations,
                    })];
            case 2:
                orderEdit = _f.sent();
                return [4 /*yield*/, orderEditService.decorateTotals(orderEdit)];
            case 3:
                orderEdit = _f.sent();
                res.status(200).json({ order_edit: orderEdit });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=complete-order-edit.js.map