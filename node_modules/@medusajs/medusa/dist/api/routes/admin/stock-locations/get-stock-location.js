"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.AdminGetStockLocationsLocationParams = void 0;
var common_1 = require("../../../../types/common");
var join_sales_channels_1 = require("./utils/join-sales-channels");
/**
 * @oas [get] /admin/stock-locations/{id}
 * operationId: "GetStockLocationsStockLocation"
 * summary: "Get a Stock Location"
 * description: "Retrieve a Stock Location's details."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Stock Location.
 *   - (query) expand {string} Comma-separated relations that should be expanded in the returned stock location.
 *   - (query) fields {string} Comma-separated fields that should be included in the returned stock location.
 * x-codegen:
 *   method: retrieve
 *   queryParams: AdminGetStockLocationsLocationParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.stockLocations.retrieve(stockLocationId)
 *       .then(({ stock_location }) => {
 *         console.log(stock_location.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminStockLocation } from "medusa-react"
 *
 *       type Props = {
 *         stockLocationId: string
 *       }
 *
 *       const StockLocation = ({ stockLocationId }: Props) => {
 *         const {
 *           stock_location,
 *           isLoading
 *         } = useAdminStockLocation(stockLocationId)
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {stock_location && (
 *               <span>{stock_location.name}</span>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default StockLocation
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/stock-locations/{id}' \
 *       -H 'x-medusa-access-token: {api_token}' \
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Stock Locations
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminStockLocationsRes"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, locationService, channelLocationService, salesChannelService, retrieveConfig, includeSalesChannels, stockLocation, _a, location_1;
    var _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                id = req.params.id;
                locationService = req.scope.resolve("stockLocationService");
                channelLocationService = req.scope.resolve("salesChannelLocationService");
                salesChannelService = req.scope.resolve("salesChannelService");
                retrieveConfig = req.retrieveConfig;
                includeSalesChannels = !!((_b = retrieveConfig.relations) === null || _b === void 0 ? void 0 : _b.includes("sales_channels"));
                if (includeSalesChannels) {
                    retrieveConfig.relations = (_c = retrieveConfig.relations) === null || _c === void 0 ? void 0 : _c.filter(function (r) { return r !== "sales_channels"; });
                }
                return [4 /*yield*/, locationService.retrieve(id, retrieveConfig)];
            case 1:
                stockLocation = _d.sent();
                if (!includeSalesChannels) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, join_sales_channels_1.joinSalesChannels)([stockLocation], channelLocationService, salesChannelService)];
            case 2:
                _a = __read.apply(void 0, [_d.sent(), 1]), location_1 = _a[0];
                stockLocation = location_1;
                _d.label = 3;
            case 3:
                res.status(200).json({ stock_location: stockLocation });
                return [2 /*return*/];
        }
    });
}); });
var AdminGetStockLocationsLocationParams = /** @class */ (function (_super) {
    __extends(AdminGetStockLocationsLocationParams, _super);
    function AdminGetStockLocationsLocationParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AdminGetStockLocationsLocationParams;
}(common_1.FindParams));
exports.AdminGetStockLocationsLocationParams = AdminGetStockLocationsLocationParams;
//# sourceMappingURL=get-stock-location.js.map