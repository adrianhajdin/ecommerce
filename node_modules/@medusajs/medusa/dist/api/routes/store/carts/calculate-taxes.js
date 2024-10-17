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
 * @oas [post] /store/carts/{id}/taxes
 * operationId: "PostCartsCartTaxes"
 * summary: "Calculate Cart Taxes"
 * description: "Calculate the taxes for a cart. This is useful if the `automatic_taxes` field of the cart's region is set to `false`. If the cart's region uses a tax provider other than
 *  Medusa's system provider, this may lead to sending requests to third-party services."
 * externalDocs:
 *   description: "How to calculate taxes manually during checkout"
 *   url: "https://docs.medusajs.com/modules/taxes/storefront/manual-calculation"
 * parameters:
 *   - (path) id=* {String} The Cart ID.
 * x-codegen:
 *   method: calculateTaxes
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/carts/{id}/taxes'
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
    var id, idempotencyKeyService, manager, logger, headerKey, idempotencyKey, error_1, cartService, inProgress, err, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                idempotencyKeyService = req.scope.resolve("idempotencyKeyService");
                manager = req.scope.resolve("manager");
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
                cartService = req.scope.resolve("cartService");
                inProgress = true;
                err = false;
                _b.label = 5;
            case 5:
                if (!inProgress) return [3 /*break*/, 12];
                _a = idempotencyKey.recovery_point;
                switch (_a) {
                    case "started": return [3 /*break*/, 6];
                    case "finished": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 9];
            case 6: return [4 /*yield*/, manager
                    .transaction("SERIALIZABLE", function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, idempotencyKeyService
                                    .withTransaction(transactionManager)
                                    .workStage(idempotencyKey.idempotency_key, function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                                    var cart;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, cartService
                                                    .withTransaction(manager)
                                                    .retrieveWithTotals(id, {}, { force_taxes: true })];
                                            case 1:
                                                cart = _a.sent();
                                                return [2 /*return*/, {
                                                        response_code: 200,
                                                        response_body: { cart: cart },
                                                    }];
                                        }
                                    });
                                }); })];
                            case 1:
                                idempotencyKey = _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); })
                    .catch(function (e) {
                    inProgress = false;
                    err = e;
                })];
            case 7:
                _b.sent();
                return [3 /*break*/, 11];
            case 8:
                {
                    inProgress = false;
                    return [3 /*break*/, 11];
                }
                _b.label = 9;
            case 9: return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
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
            case 10:
                _b.sent();
                return [3 /*break*/, 11];
            case 11: return [3 /*break*/, 5];
            case 12:
                if (err) {
                    throw err;
                }
                if (idempotencyKey.response_body.cart) {
                    idempotencyKey.response_body.cart = (0, clean_response_data_1.cleanResponseData)(idempotencyKey.response_body.cart, []);
                }
                res.status(idempotencyKey.response_code).json(idempotencyKey.response_body);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=calculate-taxes.js.map