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
exports.AdminOrdersOrderLineItemReservationReq = void 0;
var medusa_core_utils_1 = require("medusa-core-utils");
/**
 * @oas [post] /admin/orders/{id}/line-items/{line_item_id}/reserve
 * operationId: "PostOrdersOrderLineItemReservations"
 * summary: "Create a Reservation"
 * description: "Create a Reservation for a line item at a specified location, optionally for a partial quantity."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (path) line_item_id=* {string} The ID of the Line item.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminOrdersOrderLineItemReservationReq"
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/orders/{id}/line-items/{line_item_id}/reserve' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "location_id": "loc_1"
 *       }'
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
 *           $ref: "#/components/schemas/AdminPostReservationsReq"
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
    var _a, id, line_item_id, validatedBody, productVariantInventoryService, manager, lineItemService, reservations;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.params, id = _a.id, line_item_id = _a.line_item_id;
                validatedBody = req.validatedBody;
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                manager = req.scope.resolve("manager");
                lineItemService = req.scope.resolve("lineItemService");
                return [4 /*yield*/, manager.transaction(function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                        var lineItem, quantity, productVariantInventoryServiceTx;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, lineItemService
                                        .withTransaction(manager)
                                        .retrieve(line_item_id)];
                                case 1:
                                    lineItem = _a.sent();
                                    if (!lineItem.variant_id) {
                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Can't create a reservation for a Line Item wihtout a variant");
                                    }
                                    quantity = validatedBody.quantity || lineItem.quantity;
                                    productVariantInventoryServiceTx = productVariantInventoryService.withTransaction(manager);
                                    return [4 /*yield*/, productVariantInventoryServiceTx.reserveQuantity(lineItem.variant_id, quantity, {
                                            locationId: validatedBody.location_id,
                                        })];
                                case 2: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 1:
                reservations = _b.sent();
                res.json({ reservation: reservations[0] });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminOrdersOrderLineItemReservationReq
 * type: object
 * required:
 * - location_id
 * properties:
 *   location_id:
 *     description: "The ID of the location of the reservation"
 *     type: string
 *   quantity:
 *     description: "The quantity to reserve"
 *     type: number
 */
var AdminOrdersOrderLineItemReservationReq = /** @class */ (function () {
    function AdminOrdersOrderLineItemReservationReq() {
    }
    return AdminOrdersOrderLineItemReservationReq;
}());
exports.AdminOrdersOrderLineItemReservationReq = AdminOrdersOrderLineItemReservationReq;
//# sourceMappingURL=create-reservation-for-line-item.js.map