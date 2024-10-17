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
var modules_sdk_1 = require("@medusajs/modules-sdk");
/**
 * @oas [get] /admin/store
 * operationId: "GetStore"
 * summary: "Get Store details"
 * description: "Retrieve the Store's details."
 * x-authenticated: true
 * x-codegen:
 *   method: retrieve
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.store.retrieve()
 *       .then(({ store }) => {
 *         console.log(store.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminStore } from "medusa-react"
 *
 *       const Store = () => {
 *         const {
 *           store,
 *           isLoading
 *         } = useAdminStore()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {store && <span>{store.name}</span>}
 *           </div>
 *         )
 *       }
 *
 *       export default Store
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/store' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Store
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminExtendedStoresRes"
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
    var storeService, featureFlagRouter, paymentProviderService, fulfillmentProviderService, relations, data, paymentProviders, fulfillmentProviders;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                storeService = req.scope.resolve("storeService");
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                paymentProviderService = req.scope.resolve("paymentProviderService");
                fulfillmentProviderService = req.scope.resolve("fulfillmentProviderService");
                relations = __spreadArray([], __read(_1.defaultRelationsExtended), false);
                if (featureFlagRouter.isFeatureEnabled("sales_channels")) {
                    relations.push("default_sales_channel");
                }
                return [4 /*yield*/, storeService.retrieve({
                        relations: relations,
                    })];
            case 1:
                data = (_a.sent());
                data.feature_flags = featureFlagRouter.listFlags();
                data.modules = modules_sdk_1.MedusaModule.getLoadedModules()
                    .map(function (loadedModule) {
                    return Object.entries(loadedModule).map(function (_a) {
                        var _b = __read(_a, 2), key = _b[0], service = _b[1];
                        return {
                            module: key,
                            resolution: service.__definition.defaultPackage,
                        };
                    });
                })
                    .flat();
                return [4 /*yield*/, paymentProviderService.list()];
            case 2:
                paymentProviders = _a.sent();
                return [4 /*yield*/, fulfillmentProviderService.list()];
            case 3:
                fulfillmentProviders = _a.sent();
                data.payment_providers = paymentProviders;
                data.fulfillment_providers = fulfillmentProviders;
                res.status(200).json({ store: data });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=get-store.js.map