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
var clean_response_data_1 = require("../../../../utils/clean-response-data");
/**
 * @oas [post] /store/carts/{id}/complete
 * summary: "Complete a Cart"
 * operationId: "PostCartsCartComplete"
 * description: |
 *   Complete a cart and place an order or create a swap, based on the cart's type. This includes attempting to authorize the cart's payment.
 *   If authorizing the payment requires more action, the cart will not be completed and the order will not be placed or the swap will not be created.
 *
 *   An idempotency key will be generated if none is provided in the header `Idempotency-Key` and added to
 *   the response. If an error occurs during cart completion or the request is interrupted for any reason, the cart completion can be retried by passing the idempotency
 *   key in the `Idempotency-Key` header.
 * externalDocs:
 *   description: "Cart completion overview"
 *   url: "https://docs.medusajs.com/modules/carts-and-checkout/cart#cart-completion"
 * parameters:
 *   - (path) id=* {String} The Cart ID.
 * x-codegen:
 *   method: complete
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.complete(cartId)
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useCompleteCart } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Cart = ({ cartId }: Props) => {
 *         const completeCart = useCompleteCart(cartId)
 *
 *         const handleComplete = () => {
 *           completeCart.mutate(void 0, {
 *             onSuccess: ({ data, type }) => {
 *               console.log(data.id, type)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default Cart
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/carts/{id}/complete'
 * tags:
 *   - Carts
 * responses:
 *   200:
 *     description: "If the payment of the cart was successfully authorized, but requires further
 *       action from the customer, the response body will contain the cart with an
 *       updated payment session. Otherwise, if the payment was authorized and the cart was successfully completed, the
 *       response body will contain either the newly created order or swap, depending on what the cart was created for."
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCompleteCartRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
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
    var id, manager, idempotencyKeyService, logger, headerKey, idempotencyKey, error_1, completionStrat, _a, response_code, response_body;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                manager = req.scope.resolve("manager");
                idempotencyKeyService = req.scope.resolve("idempotencyKeyService");
                logger = req.scope.resolve("logger");
                headerKey = req.get("Idempotency-Key") || "";
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, idempotencyKeyService
                                        .withTransaction(transactionManager)
                                        .initializeRequest(headerKey, req.method, req.params, req.path)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 2:
                idempotencyKey = _b.sent();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                logger.log(error_1);
                res.status(409).send("Failed to create idempotency key");
                return [2 /*return*/];
            case 4:
                res.setHeader("Access-Control-Expose-Headers", "Idempotency-Key");
                res.setHeader("Idempotency-Key", idempotencyKey.idempotency_key);
                completionStrat = req.scope.resolve("cartCompletionStrategy");
                return [4 /*yield*/, completionStrat.complete(id, idempotencyKey, req.request_context)];
            case 5:
                _a = _b.sent(), response_code = _a.response_code, response_body = _a.response_body;
                if (response_body.data) {
                    response_body.data = (0, clean_response_data_1.cleanResponseData)(response_body.data, []);
                }
                res.status(response_code).json(response_body);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=complete-cart.js.map