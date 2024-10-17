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
var utils_1 = require("@medusajs/utils");
/**
 * @oas [get] /store/customers/me/payment-methods
 * operationId: GetCustomersCustomerPaymentMethods
 * summary: Get Saved Payment Methods
 * description: "Retrieve the logged-in customer's saved payment methods. This API Route only works with payment providers created with the deprecated Payment Service interface.
 *  The payment methods are saved using the Payment Service's third-party service, and not on the Medusa backend. So, they're retrieved from the third-party service."
 * x-authenticated: true
 * deprecated: true
 * x-codegen:
 *   method: listPaymentMethods
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged
 *       medusa.customers.paymentMethods.list()
 *       .then(({ payment_methods }) => {
 *         console.log(payment_methods.length);
 *       })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/customers/me/payment-methods' \
 *       -H 'Authorization: Bearer {access_token}'
 * security:
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Customers
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCustomersListPaymentMethodsRes"
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
    var id, paymentProviderService, customerService, customer, paymentProviders, methods;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.user.customer_id;
                paymentProviderService = req.scope.resolve("paymentProviderService");
                customerService = req.scope.resolve("customerService");
                return [4 /*yield*/, customerService.retrieve(id)];
            case 1:
                customer = _a.sent();
                return [4 /*yield*/, paymentProviderService.list()];
            case 2:
                paymentProviders = _a.sent();
                return [4 /*yield*/, (0, utils_1.promiseAll)(paymentProviders.map(function (paymentProvider) { return __awaiter(void 0, void 0, void 0, function () {
                        var provider, pMethods;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    provider = paymentProviderService.retrieveProvider(paymentProvider.id);
                                    return [4 /*yield*/, provider.retrieveSavedMethods(customer)];
                                case 1:
                                    pMethods = _a.sent();
                                    return [2 /*return*/, pMethods.map(function (m) { return ({
                                            provider_id: paymentProvider.id,
                                            data: m,
                                        }); })];
                            }
                        });
                    }); }))];
            case 3:
                methods = _a.sent();
                res.json({
                    payment_methods: methods.flat(),
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=get-payment-methods.js.map