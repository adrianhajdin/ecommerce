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
exports.StorePostPaymentCollectionsBatchSessionsReq = exports.StorePostPaymentCollectionsSessionsReq = void 0;
var class_validator_1 = require("class-validator");
var is_type_1 = require("../../../../utils/validators/is-type");
/**
 * @oas [post] /store/payment-collections/{id}/sessions/batch
 * operationId: "PostPaymentCollectionsPaymentCollectionSessionsBatch"
 * summary: "Manage Payment Sessions"
 * description: "Create, update, or delete a list of payment sessions of a Payment Collections. If a payment session is not provided in the `sessions` array, it's deleted."
 * x-authenticated: false
 * parameters:
 *   - (path) id=* {string} The ID of the Payment Collection.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostPaymentCollectionsBatchSessionsReq"
 * x-codegen:
 *   method: managePaymentSessionsBatch
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *
 *       // Total amount = 10000
 *
 *       // Example 1: Adding two new sessions
 *       medusa.paymentCollections.managePaymentSessionsBatch(paymentId, {
 *         sessions: [
 *           {
 *             provider_id: "stripe",
 *             amount: 5000,
 *           },
 *           {
 *             provider_id: "manual",
 *             amount: 5000,
 *           },
 *         ]
 *       })
 *       .then(({ payment_collection }) => {
 *         console.log(payment_collection.id);
 *       })
 *
 *       // Example 2: Updating one session and removing the other
 *       medusa.paymentCollections.managePaymentSessionsBatch(paymentId, {
 *         sessions: [
 *           {
 *             provider_id: "stripe",
 *             amount: 10000,
 *             session_id: "ps_123456"
 *           },
 *         ]
 *       })
 *       .then(({ payment_collection }) => {
 *         console.log(payment_collection.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useManageMultiplePaymentSessions } from "medusa-react"
 *
 *       type Props = {
 *         paymentCollectionId: string
 *       }
 *
 *       const PaymentCollection = ({
 *         paymentCollectionId
 *       }: Props) => {
 *         const managePaymentSessions = useManageMultiplePaymentSessions(
 *           paymentCollectionId
 *         )
 *
 *         const handleManagePaymentSessions = () => {
 *           // Total amount = 10000
 *
 *           // Example 1: Adding two new sessions
 *           managePaymentSessions.mutate({
 *             sessions: [
 *               {
 *                 provider_id: "stripe",
 *                 amount: 5000,
 *               },
 *               {
 *                 provider_id: "manual",
 *                 amount: 5000,
 *               },
 *             ]
 *           }, {
 *             onSuccess: ({ payment_collection }) => {
 *               console.log(payment_collection.payment_sessions)
 *             }
 *           })
 *
 *           // Example 2: Updating one session and removing the other
 *           managePaymentSessions.mutate({
 *             sessions: [
 *               {
 *                 provider_id: "stripe",
 *                 amount: 10000,
 *                 session_id: "ps_123456"
 *               },
 *             ]
 *           }, {
 *             onSuccess: ({ payment_collection }) => {
 *               console.log(payment_collection.payment_sessions)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default PaymentCollection
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/store/payment-collections/{id}/sessions/batch' \
 *       -H 'Content-Type: application/json' \
 *       --data-raw '{
 *         "sessions": [
 *           {
 *             "provider_id": "stripe",
 *             "amount": 5000
 *           },
 *           {
 *             "provider_id": "manual",
 *             "amount": 5000
 *           }
 *         ]
 *       }'
 * security:
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Payment Collections
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StorePaymentCollectionsRes"
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
    var data, id, customerId, paymentCollectionService, manager, paymentCollection;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                data = req.validatedBody;
                id = req.params.id;
                customerId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.customer_id;
                paymentCollectionService = req.scope.resolve("paymentCollectionService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, paymentCollectionService
                                        .withTransaction(transactionManager)
                                        .setPaymentSessionsBatch(id, data.sessions, customerId)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 1:
                paymentCollection = _b.sent();
                res.status(200).json({ payment_collection: paymentCollection });
                return [2 /*return*/];
        }
    });
}); });
var StorePostPaymentCollectionsSessionsReq = /** @class */ (function () {
    function StorePostPaymentCollectionsSessionsReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StorePostPaymentCollectionsSessionsReq.prototype, "provider_id", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        (0, class_validator_1.IsNotEmpty)(),
        __metadata("design:type", Number)
    ], StorePostPaymentCollectionsSessionsReq.prototype, "amount", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StorePostPaymentCollectionsSessionsReq.prototype, "session_id", void 0);
    return StorePostPaymentCollectionsSessionsReq;
}());
exports.StorePostPaymentCollectionsSessionsReq = StorePostPaymentCollectionsSessionsReq;
/**
 * @schema StorePostPaymentCollectionsBatchSessionsReq
 * type: object
 * description: "The details of the payment sessions to manage."
 * required:
 *   - sessions
 * properties:
 *   sessions:
 *     description: "Payment sessions related to the Payment Collection. Existing sessions that are not added in this array will be deleted."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - provider_id
 *         - amount
 *       properties:
 *         provider_id:
 *           type: string
 *           description: The ID of the Payment Provider.
 *         amount:
 *           type: integer
 *           description: "The payment amount"
 *         session_id:
 *           type: string
 *           description: "The ID of the Payment Session to be updated. If no ID is provided, a new payment session is created."
 */
var StorePostPaymentCollectionsBatchSessionsReq = /** @class */ (function () {
    function StorePostPaymentCollectionsBatchSessionsReq() {
    }
    __decorate([
        (0, is_type_1.IsType)([[StorePostPaymentCollectionsSessionsReq]]),
        __metadata("design:type", Array)
    ], StorePostPaymentCollectionsBatchSessionsReq.prototype, "sessions", void 0);
    return StorePostPaymentCollectionsBatchSessionsReq;
}());
exports.StorePostPaymentCollectionsBatchSessionsReq = StorePostPaymentCollectionsBatchSessionsReq;
//# sourceMappingURL=manage-batch-payment-sessions.js.map