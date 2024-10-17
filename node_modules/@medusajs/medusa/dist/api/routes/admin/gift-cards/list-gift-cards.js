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
exports.AdminGetGiftCardsParams = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var lodash_1 = require("lodash");
var medusa_core_utils_1 = require("medusa-core-utils");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [get] /admin/gift-cards
 * operationId: "GetGiftCards"
 * summary: "List Gift Cards"
 * description: "Retrieve a list of Gift Cards. The gift cards can be filtered by fields such as `q`. The gift cards can also paginated."
 * x-authenticated: true
 * parameters:
 *   - (query) offset=0 {number} The number of gift cards to skip when retrieving the gift cards.
 *   - (query) limit=50 {number} Limit the number of gift cards returned.
 *   - (query) q {string} a term to search gift cards' code or display ID
 *   - (query) order {string} A gift card field to sort-order the retrieved gift cards by.
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetGiftCardsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.giftCards.list()
 *       .then(({ gift_cards, limit, offset, count }) => {
 *         console.log(gift_cards.length);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { GiftCard } from "@medusajs/medusa"
 *       import { useAdminGiftCards } from "medusa-react"
 *
 *       const CustomGiftCards = () => {
 *         const { gift_cards, isLoading } = useAdminGiftCards()
 *
 *         return (
 *           <div>
 *             {isLoading && <span>Loading...</span>}
 *             {gift_cards && !gift_cards.length && (
 *               <span>No custom gift cards...</span>
 *             )}
 *             {gift_cards && gift_cards.length > 0 && (
 *               <ul>
 *                 {gift_cards.map((giftCard: GiftCard) => (
 *                   <li key={giftCard.id}>{giftCard.code}</li>
 *                 ))}
 *               </ul>
 *             )}
 *           </div>
 *         )
 *       }
 *
 *       export default CustomGiftCards
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl '{backend_url}/admin/gift-cards' \
 *       -H 'x-medusa-access-token: {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Gift Cards
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminGiftCardsListRes"
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
    var validated, giftCardService, _a, giftCards, count;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, validator_1.validator)(AdminGetGiftCardsParams, req.query)];
            case 1:
                validated = _b.sent();
                giftCardService = req.scope.resolve("giftCardService");
                return [4 /*yield*/, giftCardService.listAndCount((0, lodash_1.pickBy)(req.filterableFields, function (val) { return (0, medusa_core_utils_1.isDefined)(val); }), req.listConfig)];
            case 2:
                _a = __read.apply(void 0, [_b.sent(), 2]), giftCards = _a[0], count = _a[1];
                res.status(200).json({
                    gift_cards: giftCards,
                    count: count,
                    offset: validated.offset,
                    limit: validated.limit,
                });
                return [2 /*return*/];
        }
    });
}); });
/**
 * Parameters used to filter and configure the pagination of the retrieved gift cards.
 */
var AdminGetGiftCardsParams = /** @class */ (function () {
    function AdminGetGiftCardsParams() {
        /**
         * {@inheritDoc FindPaginationParams.limit}
         * @defaultValue 50
         */
        this.limit = 50;
        /**
         * {@inheritDoc FindPaginationParams.offset}
         * @defaultValue 0
         */
        this.offset = 0;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Object)
    ], AdminGetGiftCardsParams.prototype, "limit", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Object)
    ], AdminGetGiftCardsParams.prototype, "offset", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminGetGiftCardsParams.prototype, "q", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminGetGiftCardsParams.prototype, "order", void 0);
    return AdminGetGiftCardsParams;
}());
exports.AdminGetGiftCardsParams = AdminGetGiftCardsParams;
//# sourceMappingURL=list-gift-cards.js.map