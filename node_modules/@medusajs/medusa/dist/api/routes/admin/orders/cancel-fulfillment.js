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
exports.AdminPostOrdersOrderFulfillementsCancelParams = exports.adjustInventoryForCancelledFulfillment = void 0;
var medusa_core_utils_1 = require("medusa-core-utils");
var common_1 = require("../../../../types/common");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
var utils_1 = require("@medusajs/utils");
/**
 * @oas [post] /admin/orders/{id}/fulfillments/{fulfillment_id}/cancel
 * operationId: "PostOrdersOrderFulfillmentsCancel"
 * summary: "Cancel a Fulfilmment"
 * description: "Cancel an order's fulfillment and change its fulfillment status to `canceled`."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (path) fulfillment_id=* {string} The ID of the Fulfillment.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned order.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned order.
 * x-codegen:
 *   method: cancelFulfillment
 *   params: AdminPostOrdersOrderFulfillementsCancelParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.cancelFulfillment(orderId, fulfillmentId)
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCancelFulfillment } from "medusa-react"
 *
 *       type Props = {
 *         orderId: string
 *       }
 *
 *       const Order = ({ orderId }: Props) => {
 *         const cancelFulfillment = useAdminCancelFulfillment(
 *           orderId
 *         )
 *         // ...
 *
 *         const handleCancel = (
 *           fulfillmentId: string
 *         ) => {
 *           cancelFulfillment.mutate(fulfillmentId, {
 *             onSuccess: ({ order }) => {
 *               console.log(order.fulfillments)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Order
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/orders/{id}/fulfillments/{fulfillment_id}/cancel' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Orders
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminOrdersRes"
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
    var _a, id, fulfillment_id, orderService, inventoryService, productVariantInventoryService, fulfillmentService, fulfillment, manager, order;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, id = _a.id, fulfillment_id = _a.fulfillment_id;
                orderService = req.scope.resolve("orderService");
                inventoryService = req.scope.resolve("inventoryService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                fulfillmentService = req.scope.resolve("fulfillmentService");
                return [4 /*yield*/, fulfillmentService.retrieve(fulfillment_id)];
            case 1:
                fulfillment = _b.sent();
                if (fulfillment.order_id !== id) {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "no fulfillment was found with the id: ".concat(fulfillment_id, " related to order: ").concat(id));
                }
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        var fulfillment;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, orderService
                                        .withTransaction(transactionManager)
                                        .cancelFulfillment(fulfillment_id)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, fulfillmentService
                                            .withTransaction(transactionManager)
                                            .retrieve(fulfillment_id, { relations: ["items", "items.item"] })];
                                case 2:
                                    fulfillment = _a.sent();
                                    if (!(fulfillment.location_id && inventoryService)) return [3 /*break*/, 4];
                                    return [4 /*yield*/, (0, exports.adjustInventoryForCancelledFulfillment)(fulfillment, {
                                            productVariantInventoryService: productVariantInventoryService.withTransaction(transactionManager),
                                        })];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); })];
            case 2:
                _b.sent();
                return [4 /*yield*/, orderService.retrieveWithTotals(id, req.retrieveConfig, {
                        includes: req.includes,
                    })];
            case 3:
                order = _b.sent();
                res.json({ order: (0, clean_response_data_1.cleanResponseData)(order, []) });
                return [2 /*return*/];
        }
    });
}); });
var adjustInventoryForCancelledFulfillment = function (fulfillment, context) { return __awaiter(void 0, void 0, void 0, function () {
    var productVariantInventoryService;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productVariantInventoryService = context.productVariantInventoryService;
                return [4 /*yield*/, (0, utils_1.promiseAll)(fulfillment.items.map(function (_a) {
                        var item = _a.item, quantity = _a.quantity;
                        return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!item.variant_id) return [3 /*break*/, 2];
                                        return [4 /*yield*/, productVariantInventoryService.adjustInventory(item.variant_id, fulfillment.location_id, quantity)];
                                    case 1:
                                        _b.sent();
                                        _b.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        });
                    }))];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.adjustInventoryForCancelledFulfillment = adjustInventoryForCancelledFulfillment;
var AdminPostOrdersOrderFulfillementsCancelParams = /** @class */ (function (_super) {
    __extends(AdminPostOrdersOrderFulfillementsCancelParams, _super);
    function AdminPostOrdersOrderFulfillementsCancelParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminPostOrdersOrderFulfillementsCancelParams;
}(common_1.FindParams));
exports.AdminPostOrdersOrderFulfillementsCancelParams = AdminPostOrdersOrderFulfillementsCancelParams;
//# sourceMappingURL=cancel-fulfillment.js.map