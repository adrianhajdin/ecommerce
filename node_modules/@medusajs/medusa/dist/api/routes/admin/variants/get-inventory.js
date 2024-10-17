"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
Object.defineProperty(exports, "__esModule", { value: true });
var join_levels_1 = require("../inventory-items/utils/join-levels");
var utils_1 = require("@medusajs/utils");
/**
 * @oas [get] /admin/variants/{id}/inventory
 * operationId: "GetVariantsVariantInventory"
 * summary: "Get Variant's Inventory"
 * description: "Retrieve the available inventory of a Product Variant."
 * x-authenticated: true
 * parameters:
 *   - (path) id {string} The Product Variant ID.
 * x-codegen:
 *   method: getInventory
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.variants.getInventory(variantId)
 *       .then(({ variant }) => {
 *         console.log(variant.inventory, variant.sales_channel_availability)
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminVariantsInventory } from "medusa-react"
 *
 *       type Props = {
 *         variantId: string
 *       }
 *
 *       const VariantInventory = ({ variantId }: Props) => {
 *         const { variant, isLoading } = useAdminVariantsInventory(
 *           variantId
 *         )
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {variant && variant.inventory.length === 0 && (
 *               <span>Variant doesn't have inventory details</span>
 *             )}
 *             {variant && variant.inventory.length > 0 && (
 *               <ul>
 *                 {variant.inventory.map((inventory) => (
 *                   <li key={inventory.id}>{inventory.title}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default VariantInventory
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/variants/{id}/inventory' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Product Variants
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminGetVariantsVariantInventoryRes"
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
    var id, inventoryService, channelLocationService, channelService, productVariantInventoryService, variantService, variant, responseVariant, _a, rawChannels, channels, variantInventoryItems, inventory, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                id = req.params.id;
                inventoryService = req.scope.resolve("inventoryService");
                channelLocationService = req.scope.resolve("salesChannelLocationService");
                channelService = req.scope.resolve("salesChannelService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                variantService = req.scope.resolve("productVariantService");
                return [4 /*yield*/, variantService.retrieve(id, { select: ["id"] })];
            case 1:
                variant = _d.sent();
                responseVariant = {
                    id: variant.id,
                    inventory: [],
                    sales_channel_availability: [],
                };
                return [4 /*yield*/, channelService.listAndCount({})];
            case 2:
                _a = __read.apply(void 0, [_d.sent(), 1]), rawChannels = _a[0];
                return [4 /*yield*/, (0, utils_1.promiseAll)(rawChannels.map(function (channel) { return __awaiter(void 0, void 0, void 0, function () {
                        var locationIds;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, channelLocationService.listLocationIds(channel.id)];
                                case 1:
                                    locationIds = _a.sent();
                                    return [2 /*return*/, __assign(__assign({}, channel), { locations: locationIds })];
                            }
                        });
                    }); }))];
            case 3:
                channels = _d.sent();
                return [4 /*yield*/, productVariantInventoryService.listByVariant(variant.id)];
            case 4:
                variantInventoryItems = _d.sent();
                return [4 /*yield*/, productVariantInventoryService.listInventoryItemsByVariant(variant.id)];
            case 5:
                inventory = _d.sent();
                _b = responseVariant;
                return [4 /*yield*/, (0, join_levels_1.joinLevels)(inventory, [], inventoryService)];
            case 6:
                _b.inventory = _d.sent();
                if (!inventory.length) return [3 /*break*/, 8];
                _c = responseVariant;
                return [4 /*yield*/, (0, utils_1.promiseAll)(channels.map(function (channel) { return __awaiter(void 0, void 0, void 0, function () {
                        var quantity;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!channel.locations.length) {
                                        return [2 /*return*/, {
                                                channel_name: channel.name,
                                                channel_id: channel.id,
                                                available_quantity: 0,
                                            }];
                                    }
                                    // eslint-disable-next-line max-len
                                    return [4 /*yield*/, productVariantInventoryService.getVariantQuantityFromVariantInventoryItems(variantInventoryItems, channel.id)];
                                case 1:
                                    quantity = 
                                    // eslint-disable-next-line max-len
                                    _a.sent();
                                    return [2 /*return*/, {
                                            channel_name: channel.name,
                                            channel_id: channel.id,
                                            available_quantity: quantity,
                                        }];
                            }
                        });
                    }); }))];
            case 7:
                _c.sales_channel_availability = _d.sent();
                _d.label = 8;
            case 8:
                res.json({
                    variant: responseVariant,
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=get-inventory.js.map