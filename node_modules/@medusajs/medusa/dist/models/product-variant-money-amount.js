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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductVariantMoneyAmount = void 0;
var typeorm_1 = require("typeorm");
var utils_1 = require("../utils");
var interfaces_1 = require("../interfaces");
var ProductVariantMoneyAmount = /** @class */ (function (_super) {
    __extends(ProductVariantMoneyAmount, _super);
    function ProductVariantMoneyAmount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    ProductVariantMoneyAmount.prototype.beforeInsert = function () {
        this.id = (0, utils_1.generateEntityId)(this.id, "pvma_");
    };
    __decorate([
        (0, typeorm_1.Index)("idx_product_variant_money_amount_money_amount_id_unique", {
            unique: true,
        }),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ProductVariantMoneyAmount.prototype, "money_amount_id", void 0);
    __decorate([
        (0, typeorm_1.Index)("idx_product_variant_money_amount_variant_id"),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ProductVariantMoneyAmount.prototype, "variant_id", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProductVariantMoneyAmount.prototype, "beforeInsert", null);
    ProductVariantMoneyAmount = __decorate([
        (0, typeorm_1.Entity)()
    ], ProductVariantMoneyAmount);
    return ProductVariantMoneyAmount;
}(interfaces_1.SoftDeletableEntity));
exports.ProductVariantMoneyAmount = ProductVariantMoneyAmount;
//# sourceMappingURL=product-variant-money-amount.js.map