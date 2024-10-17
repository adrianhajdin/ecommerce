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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceList = void 0;
var utils_1 = require("@medusajs/utils");
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var feature_flag_decorators_1 = require("../utils/feature-flag-decorators");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var customer_group_1 = require("./customer-group");
var money_amount_1 = require("./money-amount");
var PriceList = /** @class */ (function (_super) {
    __extends(PriceList, _super);
    function PriceList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    PriceList.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "pl");
    };
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PriceList.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PriceList.prototype, "description", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: utils_1.PriceListType, default: "sale" }),
        __metadata("design:type", String)
    ], PriceList.prototype, "type", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: utils_1.PriceListStatus, default: "draft" }),
        __metadata("design:type", String)
    ], PriceList.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: (0, db_aware_column_1.resolveDbType)("timestamptz"),
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], PriceList.prototype, "starts_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Object)
    ], PriceList.prototype, "ends_at", void 0);
    __decorate([
        (0, typeorm_1.JoinTable)({
            name: "price_list_customer_groups",
            joinColumn: {
                name: "price_list_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "customer_group_id",
                referencedColumnName: "id",
            },
        }),
        (0, typeorm_1.ManyToMany)(function () { return customer_group_1.CustomerGroup; }, function (cg) { return cg.price_lists; }, {
            onDelete: "CASCADE",
        }),
        __metadata("design:type", Array)
    ], PriceList.prototype, "customer_groups", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return money_amount_1.MoneyAmount; }, function (moneyAmount) { return moneyAmount.price_list; }, {
            onDelete: "CASCADE",
        }),
        __metadata("design:type", Array)
    ], PriceList.prototype, "prices", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagColumn)(tax_inclusive_pricing_1.default.key, { default: false }),
        __metadata("design:type", Boolean)
    ], PriceList.prototype, "includes_tax", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PriceList.prototype, "beforeInsert", null);
    PriceList = __decorate([
        (0, typeorm_1.Entity)()
    ], PriceList);
    return PriceList;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.PriceList = PriceList;
/**
 * @schema PriceList
 * title: "Price List"
 * description: "A Price List represents a set of prices that override the default price for one or more product variants."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - description
 *   - ends_at
 *   - id
 *   - name
 *   - starts_at
 *   - status
 *   - type
 *   - updated_at
 * properties:
 *   id:
 *     description: The price list's ID
 *     type: string
 *     example: pl_01G8X3CKJXCG5VXVZ87H9KC09W
 *   name:
 *     description: The price list's name
 *     type: string
 *     example: VIP Prices
 *   description:
 *     description: The price list's description
 *     type: string
 *     example: Prices for VIP customers
 *   type:
 *     description: The type of Price List. This can be one of either `sale` or `override`.
 *     type: string
 *     enum:
 *       - sale
 *       - override
 *     default: sale
 *   status:
 *     description: The status of the Price List
 *     type: string
 *     enum:
 *       - active
 *       - draft
 *     default: draft
 *   starts_at:
 *     description: The date with timezone that the Price List starts being valid.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   ends_at:
 *     description: The date with timezone that the Price List stops being valid.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   customer_groups:
 *     description: The details of the customer groups that the Price List can apply to.
 *     type: array
 *     x-expandable: "customer_groups"
 *     items:
 *       $ref: "#/components/schemas/CustomerGroup"
 *   prices:
 *     description: The prices that belong to the price list, represented as a Money Amount.
 *     type: array
 *     x-expandable: "prices"
 *     items:
 *       $ref: "#/components/schemas/MoneyAmount"
 *   includes_tax:
 *     description: "Whether the price list prices include tax"
 *     type: boolean
 *     x-featureFlag: "tax_inclusive_pricing"
 *     default: false
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     description: The date with timezone at which the resource was deleted.
 *     nullable: true
 *     type: string
 *     format: date-time
 */
//# sourceMappingURL=price-list.js.map