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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGetCurrenciesParams = void 0;
var class_validator_1 = require("class-validator");
var tax_inclusive_pricing_1 = __importDefault(require("../../../../loaders/feature-flags/tax-inclusive-pricing"));
var common_1 = require("../../../../types/common");
var feature_flag_decorators_1 = require("../../../../utils/feature-flag-decorators");
/**
 * @oas [get] /admin/currencies
 * operationId: "GetCurrencies"
 * summary: "List Currency"
 * description: "Retrieve a list of currencies. The currencies can be filtered by fields such as `code`. The currencies can also be sorted or paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) code {string} filter by currency code.
 *   - in: query
 *     name: includes_tax
 *     description: filter currencies by whether they include taxes or not.
 *     schema:
 *       type: boolean
 *       x-featureFlag: "tax_inclusive_pricing"
 *   - (query) order {string} A field to sort order the retrieved currencies by.
 *   - (query) q {string} Term used to search currencies' name and code.
 *   - (query) offset=0 {number} The number of currencies to skip when retrieving the currencies.
 *   - (query) limit=20 {number} The number of currencies to return.
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetCurrenciesParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.currencies.list()
 *       .then(({ currencies, count, offset, limit }) => {
 *         console.log(currencies.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCurrencies } from "medusa-react"
 *
 *       const Currencies = () => {
 *         const { currencies, isLoading } = useAdminCurrencies()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {currencies && !currencies.length && (
 *               <span>No Currencies</span>
 *             )}
 *             {currencies && currencies.length > 0 && (
 *               <ul>
 *                 {currencies.map((currency) => (
 *                   <li key={currency.code}>{currency.name}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default Currencies
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/currencies' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Currencies
 * responses:
 *   "200":
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminCurrenciesListRes"
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
    var currencyService, _a, skip, take, _b, currencies, count;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                currencyService = req.scope.resolve("currencyService");
                _a = req.listConfig, skip = _a.skip, take = _a.take;
                req.listConfig.select = undefined;
                if (req.listConfig.order && req.listConfig.order["created_at"]) {
                    delete req.listConfig.order["created_at"];
                }
                return [4 /*yield*/, currencyService.listAndCount(req.filterableFields, req.listConfig)];
            case 1:
                _b = __read.apply(void 0, [_c.sent(), 2]), currencies = _b[0], count = _b[1];
                res.json({
                    currencies: currencies,
                    count: count,
                    offset: skip,
                    limit: take,
                });
                return [2 /*return*/];
        }
    });
}); });
/**
 * Parameters used to filter and configure the pagination of the retrieved currencies.
 */
var AdminGetCurrenciesParams = /** @class */ (function (_super) {
    __extends(AdminGetCurrenciesParams, _super);
    function AdminGetCurrenciesParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetCurrenciesParams.prototype, "code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetCurrenciesParams.prototype, "q", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)(tax_inclusive_pricing_1.default.key, [
            (0, class_validator_1.IsBoolean)(),
            (0, class_validator_1.IsOptional)(),
        ]),
        __metadata("design:type", Boolean)
    ], AdminGetCurrenciesParams.prototype, "includes_tax", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminGetCurrenciesParams.prototype, "order", void 0);
    return AdminGetCurrenciesParams;
}(common_1.FindPaginationParams));
exports.AdminGetCurrenciesParams = AdminGetCurrenciesParams;
//# sourceMappingURL=list-currencies.js.map