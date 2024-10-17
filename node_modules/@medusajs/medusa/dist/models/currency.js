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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
var typeorm_1 = require("typeorm");
var feature_flag_decorators_1 = require("../utils/feature-flag-decorators");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var Currency = /** @class */ (function () {
    function Currency() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], Currency.prototype, "code", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Currency.prototype, "symbol", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Currency.prototype, "symbol_native", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Currency.prototype, "name", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagColumn)(tax_inclusive_pricing_1.default.key, { default: false }),
        __metadata("design:type", Boolean)
    ], Currency.prototype, "includes_tax", void 0);
    Currency = __decorate([
        (0, typeorm_1.Entity)()
    ], Currency);
    return Currency;
}());
exports.Currency = Currency;
/**
 * @schema Currency
 * title: "Currency"
 * description: "Currency"
 * type: object
 * required:
 *   - code
 *   - name
 *   - symbol
 *   - symbol_native
 * properties:
 *  code:
 *    description: The 3 character ISO code for the currency.
 *    type: string
 *    example: usd
 *    externalDocs:
 *      url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *      description: See a list of codes.
 *  symbol:
 *    description: The symbol used to indicate the currency.
 *    type: string
 *    example: $
 *  symbol_native:
 *    description: The native symbol used to indicate the currency.
 *    type: string
 *    example: $
 *  name:
 *    description: The written name of the currency
 *    type: string
 *    example: US Dollar
 *  includes_tax:
 *    description: "Whether the currency prices include tax"
 *    type: boolean
 *    x-featureFlag: "tax_inclusive_pricing"
 *    default: false
 */
//# sourceMappingURL=currency.js.map