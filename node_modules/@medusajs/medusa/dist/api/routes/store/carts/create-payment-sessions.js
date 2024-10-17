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
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var clean_response_data_1 = require("../../../../utils/clean-response-data");
var handler_steps_1 = require("./create-line-item/utils/handler-steps");
/**
 * @oas [post] /store/carts/{id}/payment-sessions
 * operationId: "PostCartsCartPaymentSessions"
 * summary: "Create Payment Sessions"
 * description: "Create Payment Sessions for each of the available Payment Providers in the Cart's Region. If there's only one payment session created,
 *  it will be selected by default. The creation of the payment session uses the payment provider and may require sending requests to third-party services."
 * parameters:
 *   - (path) id=* {string} The ID of the Cart.
 * x-codegen:
 *   method: createPaymentSessions
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.createPaymentSessions(cartId)
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useCreatePaymentSession } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Cart = ({ cartId }: Props) => {
 *         const createPaymentSession = useCreatePaymentSession(cartId)
 *
 *         const handleComplete = () => {
 *           createPaymentSession.mutate(void 0, {
 *             onSuccess: ({ cart }) => {
 *               console.log(cart.payment_sessions)
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
 *       curl -X POST '{backend_url}/store/carts/{id}/payment-sessions'
 * tags:
 *   - Carts
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCartsRes"
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
    var id, idempotencyKeyService, manager, headerKey, idempotencyKey, error_1, inProgress, err, _loop_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                idempotencyKeyService = req.scope.resolve("idempotencyKeyService");
                manager = req.scope.resolve("manager");
                headerKey = req.get("Idempotency-Key") || "";
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, idempotencyKeyService
                                        .withTransaction(transactionManager)
                                        .initializeRequest(headerKey, req.method, req.params, req.path)];
                                case 1:
                                    idempotencyKey = _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                res.status(409).send("Failed to create idempotency key");
                return [2 /*return*/];
            case 4:
                res.setHeader("Access-Control-Expose-Headers", "Idempotency-Key");
                res.setHeader("Idempotency-Key", idempotencyKey.idempotency_key);
                inProgress = true;
                err = false;
                _loop_1 = function () {
                    var _b, cartService_1, getCart, cart_1, freshCart, e_1;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                _b = idempotencyKey.recovery_point;
                                switch (_b) {
                                    case "started": return [3 /*break*/, 1];
                                    case "finished": return [3 /*break*/, 9];
                                }
                                return [3 /*break*/, 10];
                            case 1:
                                _c.trys.push([1, 7, , 8]);
                                cartService_1 = req.scope.resolve("cartService");
                                getCart = function () { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, cartService_1
                                                    .withTransaction(manager)
                                                    .retrieveWithTotals(id, {
                                                    select: _1.defaultStoreCartFields,
                                                    relations: __spreadArray(__spreadArray([], __read(_1.defaultStoreCartRelations), false), [
                                                        "region.tax_rates",
                                                        "customer",
                                                    ], false),
                                                }, { force_taxes: true })];
                                            case 1: return [2 /*return*/, _a.sent()];
                                        }
                                    });
                                }); };
                                return [4 /*yield*/, getCart()];
                            case 2:
                                cart_1 = _c.sent();
                                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                                        var txCartService;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    txCartService = cartService_1.withTransaction(transactionManager);
                                                    return [4 /*yield*/, txCartService.setPaymentSessions(cart_1)];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); })];
                            case 3:
                                _c.sent();
                                return [4 /*yield*/, getCart()];
                            case 4:
                                freshCart = _c.sent();
                                return [4 /*yield*/, (0, handler_steps_1.setVariantAvailability)({
                                        cart: freshCart,
                                        container: req.scope,
                                        manager: manager,
                                    })];
                            case 5:
                                _c.sent();
                                return [4 /*yield*/, idempotencyKeyService
                                        .withTransaction(manager)
                                        .update(idempotencyKey.idempotency_key, {
                                        recovery_point: "finished",
                                        response_code: 200,
                                        response_body: { cart: freshCart },
                                    })];
                            case 6:
                                idempotencyKey = _c.sent();
                                return [3 /*break*/, 8];
                            case 7:
                                e_1 = _c.sent();
                                inProgress = false;
                                err = e_1;
                                return [3 /*break*/, 8];
                            case 8: return [3 /*break*/, 12];
                            case 9:
                                {
                                    inProgress = false;
                                    return [3 /*break*/, 12];
                                }
                                _c.label = 10;
                            case 10: return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, idempotencyKeyService
                                                    .withTransaction(transactionManager)
                                                    .update(idempotencyKey.idempotency_key, {
                                                    recovery_point: "finished",
                                                    response_code: 500,
                                                    response_body: { message: "Unknown recovery point" },
                                                })];
                                            case 1:
                                                idempotencyKey = _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })];
                            case 11:
                                _c.sent();
                                return [3 /*break*/, 12];
                            case 12: return [2 /*return*/];
                        }
                    });
                };
                _a.label = 5;
            case 5:
                if (!inProgress) return [3 /*break*/, 7];
                return [5 /*yield**/, _loop_1()];
            case 6:
                _a.sent();
                return [3 /*break*/, 5];
            case 7:
                if (err) {
                    throw err;
                }
                if (idempotencyKey.response_body.cart) {
                    idempotencyKey.response_body.data = (0, clean_response_data_1.cleanResponseData)(idempotencyKey.response_body.cart, []);
                }
                res.status(idempotencyKey.response_code).json(idempotencyKey.response_body);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=create-payment-sessions.js.map