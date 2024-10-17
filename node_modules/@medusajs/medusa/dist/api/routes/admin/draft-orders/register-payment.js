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
Object.defineProperty(exports, "__esModule", { value: true });
exports.reserveQuantityForDraftOrder = void 0;
var orders_1 = require("../../../../types/orders");
var medusa_core_utils_1 = require("medusa-core-utils");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
var utils_1 = require("@medusajs/utils");
/**
 * @oas [post] /admin/draft-orders/{id}/pay
 * summary: "Mark Paid"
 * operationId: "PostDraftOrdersDraftOrderRegisterPayment"
 * description: "Capture the draft order's payment. This will also set the draft order's status to `completed` and create an Order from the draft order. The payment is captured through Medusa's system payment,
 *  which is manual payment that isn't integrated with any third-party payment provider. It is assumed that the payment capturing is handled manually by the admin."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {String} The Draft Order ID.
 * x-codegen:
 *   method: markPaid
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.draftOrders.markPaid(draftOrderId)
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminDraftOrderRegisterPayment } from "medusa-react"
 *
 *       type Props = {
 *         draftOrderId: string
 *       }
 *
 *       const DraftOrder = ({ draftOrderId }: Props) => {
 *         const registerPayment = useAdminDraftOrderRegisterPayment(
 *           draftOrderId
 *         )
 *         // ...
 *
 *         const handlePayment = () => {
 *           registerPayment.mutate(void 0, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.id)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default DraftOrder
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/draft-orders/{id}/pay' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Draft Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminPostDraftOrdersDraftOrderRegisterPaymentRes"
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
    var id, draftOrderService, paymentProviderService, orderService, inventoryService, cartService, productVariantInventoryService, entityManager, order;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                draftOrderService = req.scope.resolve("draftOrderService");
                paymentProviderService = req.scope.resolve("paymentProviderService");
                orderService = req.scope.resolve("orderService");
                inventoryService = req.scope.resolve("inventoryService");
                cartService = req.scope.resolve("cartService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                entityManager = req.scope.resolve("manager");
                return [4 /*yield*/, entityManager.transaction(function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                        var draftOrderServiceTx, orderServiceTx, cartServiceTx, draftOrder, cart, order;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    draftOrderServiceTx = draftOrderService.withTransaction(manager);
                                    orderServiceTx = orderService.withTransaction(manager);
                                    cartServiceTx = cartService.withTransaction(manager);
                                    return [4 /*yield*/, draftOrderServiceTx.retrieve(id)];
                                case 1:
                                    draftOrder = _a.sent();
                                    return [4 /*yield*/, cartServiceTx.retrieveWithTotals(draftOrder.cart_id)];
                                case 2:
                                    cart = _a.sent();
                                    return [4 /*yield*/, paymentProviderService
                                            .withTransaction(manager)
                                            .createSession("system", cart)];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, cartServiceTx.setPaymentSession(cart.id, "system")];
                                case 4:
                                    _a.sent();
                                    return [4 /*yield*/, cartServiceTx.createTaxLines(cart.id)];
                                case 5:
                                    _a.sent();
                                    return [4 /*yield*/, cartServiceTx.authorizePayment(cart.id)];
                                case 6:
                                    _a.sent();
                                    return [4 /*yield*/, orderServiceTx.createFromCart(cart.id)];
                                case 7:
                                    order = _a.sent();
                                    return [4 /*yield*/, draftOrderServiceTx.registerCartCompletion(draftOrder.id, order.id)];
                                case 8:
                                    _a.sent();
                                    return [4 /*yield*/, orderServiceTx.capturePayment(order.id)];
                                case 9:
                                    _a.sent();
                                    return [4 /*yield*/, orderService
                                            .withTransaction(manager)
                                            .retrieveWithTotals(order.id, {
                                            relations: orders_1.defaultAdminOrdersRelations,
                                            select: orders_1.defaultAdminOrdersFields,
                                        })];
                                case 10:
                                    order = _a.sent();
                                    return [2 /*return*/, order];
                            }
                        });
                    }); })];
            case 1:
                order = _a.sent();
                res.status(200).json({ order: (0, clean_response_data_1.cleanResponseData)(order, []) });
                return [2 /*return*/];
        }
    });
}); });
var reserveQuantityForDraftOrder = function (order, context) { return __awaiter(void 0, void 0, void 0, function () {
    var productVariantInventoryService, locationId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productVariantInventoryService = context.productVariantInventoryService, locationId = context.locationId;
                return [4 /*yield*/, (0, utils_1.promiseAll)(order.items.map(function (item) { return __awaiter(void 0, void 0, void 0, function () {
                        var inventoryConfirmed;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!item.variant_id) return [3 /*break*/, 3];
                                    return [4 /*yield*/, productVariantInventoryService.confirmInventory(item.variant_id, item.quantity, { salesChannelId: order.sales_channel_id })];
                                case 1:
                                    inventoryConfirmed = _a.sent();
                                    if (!inventoryConfirmed) {
                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Variant with id: ".concat(item.variant_id, " does not have the required inventory"), medusa_core_utils_1.MedusaError.Codes.INSUFFICIENT_INVENTORY);
                                    }
                                    return [4 /*yield*/, productVariantInventoryService.reserveQuantity(item.variant_id, item.quantity, {
                                            lineItemId: item.id,
                                            salesChannelId: order.sales_channel_id,
                                        })];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.reserveQuantityForDraftOrder = reserveQuantityForDraftOrder;
//# sourceMappingURL=register-payment.js.map