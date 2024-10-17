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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorePostCustomersCustomerOrderClaimReq = void 0;
var utils_1 = require("@medusajs/utils");
var class_validator_1 = require("class-validator");
var medusa_core_utils_1 = require("medusa-core-utils");
var token_1 = __importDefault(require("../../../../services/token"));
var token_2 = require("../../../../types/token");
/**
 * @oas [post] /store/orders/batch/customer/token
 * operationId: "PostOrdersCustomerOrderClaim"
 * summary: "Claim Order"
 * description: "Allow the logged-in customer to claim ownership of one or more orders. This generates a token that can be used later on to verify the claim using the Verify Order Claim API Route.
 *  This also emits the event `order-update-token.created`. So, if you have a notification provider installed that handles this event and sends the customer a notification, such as an email,
 *  the customer should receive instructions on how to finalize their claim ownership."
 * externalDocs:
 *   description: "How to implement claim-order flow in a storefront"
 *   url: "https://docs.medusajs.com/modules/orders/storefront/implement-claim-order"
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCustomersCustomerOrderClaimReq"
 * x-codegen:
 *   method: requestCustomerOrders
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.orders.requestCustomerOrders({
 *         order_ids,
 *       })
 *       .then(() => {
 *         // successful
 *       })
 *       .catch(() => {
 *         // an error occurred
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useRequestOrderAccess } from "medusa-react"
 *
 *       const ClaimOrder = () => {
 *         const claimOrder = useRequestOrderAccess()
 *
 *         const handleClaimOrder = (
 *           orderIds: string[]
 *         ) => {
 *           claimOrder.mutate({
 *             order_ids: orderIds
 *           }, {
 *             onSuccess: () => {
 *               // successful
 *             },
 *             onError: () => {
 *               // an error occurred.
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default ClaimOrder
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/batch/customer/token' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *           "order_ids": ["id"],
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
    var order_ids, eventBusService, orderService, customerService, tokenService, customerId, customer, orders, emailOrderMapping;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                order_ids = req.validatedBody.order_ids;
                eventBusService = req.scope.resolve("eventBusService");
                orderService = req.scope.resolve("orderService");
                customerService = req.scope.resolve("customerService");
                tokenService = req.scope.resolve(token_1.default.RESOLUTION_KEY);
                customerId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.customer_id;
                return [4 /*yield*/, customerService.retrieve(customerId)];
            case 1:
                customer = _b.sent();
                if (!customer.has_account) {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNAUTHORIZED, "Customer does not have an account");
                }
                return [4 /*yield*/, orderService.list({ id: order_ids }, { select: ["id", "email"] })];
            case 2:
                orders = _b.sent();
                emailOrderMapping = orders.reduce(function (acc, order) {
                    acc[order.email] = __spreadArray(__spreadArray([], __read((acc[order.email] || [])), false), [order.id], false);
                    return acc;
                }, {});
                return [4 /*yield*/, (0, utils_1.promiseAll)(Object.entries(emailOrderMapping).map(function (_a) {
                        var _b = __read(_a, 2), email = _b[0], order_ids = _b[1];
                        return __awaiter(void 0, void 0, void 0, function () {
                            var token;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        token = tokenService.signToken({
                                            claimingCustomerId: customerId,
                                            orders: order_ids,
                                        }, { expiresIn: "15m" });
                                        return [4 /*yield*/, eventBusService.emit(token_2.TokenEvents.ORDER_UPDATE_TOKEN_CREATED, {
                                                old_email: email,
                                                new_customer_id: customer.id,
                                                orders: order_ids,
                                                token: token,
                                            })];
                                    case 1:
                                        _c.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    }))];
            case 3:
                _b.sent();
                res.sendStatus(200);
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema StorePostCustomersCustomerOrderClaimReq
 * type: object
 * description: "The details of the orders to claim."
 * required:
 *   - order_ids
 * properties:
 *   order_ids:
 *     description: "The ID of the orders to claim"
 *     type: array
 *     items:
 *      type: string
 */
var StorePostCustomersCustomerOrderClaimReq = /** @class */ (function () {
    function StorePostCustomersCustomerOrderClaimReq() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)({ each: true }),
        (0, class_validator_1.IsString)({ each: true }),
        __metadata("design:type", Array)
    ], StorePostCustomersCustomerOrderClaimReq.prototype, "order_ids", void 0);
    return StorePostCustomersCustomerOrderClaimReq;
}());
exports.StorePostCustomersCustomerOrderClaimReq = StorePostCustomersCustomerOrderClaimReq;
//# sourceMappingURL=request-order.js.map