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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sales_channels_1 = __importDefault(require("../../../../loaders/feature-flags/sales-channels"));
var clean_response_data_1 = require("../../../../utils/clean-response-data");
/**
 * @oas [get] /store/carts/{id}
 * operationId: "GetCartsCart"
 * summary: "Get a Cart"
 * description: "Retrieve a Cart's details. This includes recalculating its totals."
 * parameters:
 *   - (path) id=* {string} The ID of the Cart.
 * x-codegen:
 *   method: retrieve
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.retrieve(cartId)
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useGetCart } from "medusa-react"
 *
 *       type Props = {
 *         cartId: string
 *       }
 *
 *       const Cart = ({ cartId }: Props) => {
 *         const { cart, isLoading } = useGetCart(cartId)
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {cart && cart.items.length === 0 && (
 *               <span>Cart is empty</span>
 *             )}
 *             {cart && cart.items.length > 0 && (
 *               <ul>
 *                 {cart.items.map((item) => (
 *                   <li key={item.id}>{item.title}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Cart
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/store/carts/{id}'
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
    var id, cartService, manager, featureFlagRouter, productVariantInventoryService, cart, shouldSetAvailability, select, salesChannelsEnabled, data;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                id = req.params.id;
                cartService = req.scope.resolve("cartService");
                manager = req.scope.resolve("manager");
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                return [4 /*yield*/, cartService.retrieve(id, {
                        select: ["id", "customer_id"],
                    })
                    // If there is a logged in user add the user to the cart
                ];
            case 1:
                cart = _c.sent();
                if (!(req.user && req.user.customer_id)) return [3 /*break*/, 3];
                if (!(!cart.customer_id ||
                    !cart.email ||
                    cart.customer_id !== req.user.customer_id)) return [3 /*break*/, 3];
                return [4 /*yield*/, manager.transaction(function (transctionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, cartService.withTransaction(transctionManager).update(id, {
                                        customer_id: req.user.customer_id,
                                    })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 2:
                _c.sent();
                _c.label = 3;
            case 3:
                shouldSetAvailability = (_a = req.retrieveConfig.relations) === null || _a === void 0 ? void 0 : _a.some(function (rel) {
                    return rel.includes("variant");
                });
                select = __spreadArray([], __read(((_b = req.retrieveConfig.select) !== null && _b !== void 0 ? _b : [])), false);
                salesChannelsEnabled = featureFlagRouter.isFeatureEnabled(sales_channels_1.default.key);
                if (salesChannelsEnabled) {
                    select.push("sales_channel_id");
                }
                return [4 /*yield*/, cartService.retrieveWithTotals(id, req.retrieveConfig)];
            case 4:
                data = _c.sent();
                if (!shouldSetAvailability) return [3 /*break*/, 6];
                return [4 /*yield*/, productVariantInventoryService.setVariantAvailability(data.items.map(function (i) { return i.variant; }), data.sales_channel_id)];
            case 5:
                _c.sent();
                _c.label = 6;
            case 6:
                res.json({ cart: (0, clean_response_data_1.cleanResponseData)(data, []) });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=get-cart.js.map