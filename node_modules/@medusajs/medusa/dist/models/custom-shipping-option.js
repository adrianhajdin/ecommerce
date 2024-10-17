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
exports.CustomShippingOption = void 0;
var typeorm_1 = require("typeorm");
var cart_1 = require("./cart");
var db_aware_column_1 = require("../utils/db-aware-column");
var shipping_option_1 = require("./shipping-option");
var soft_deletable_entity_1 = require("../interfaces/models/soft-deletable-entity");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var CustomShippingOption = /** @class */ (function (_super) {
    __extends(CustomShippingOption, _super);
    function CustomShippingOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    CustomShippingOption.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "cso");
    };
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        __metadata("design:type", Number)
    ], CustomShippingOption.prototype, "price", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], CustomShippingOption.prototype, "shipping_option_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return shipping_option_1.ShippingOption; }),
        (0, typeorm_1.JoinColumn)({ name: "shipping_option_id" }),
        __metadata("design:type", shipping_option_1.ShippingOption)
    ], CustomShippingOption.prototype, "shipping_option", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], CustomShippingOption.prototype, "cart_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return cart_1.Cart; }),
        (0, typeorm_1.JoinColumn)({ name: "cart_id" }),
        __metadata("design:type", cart_1.Cart)
    ], CustomShippingOption.prototype, "cart", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], CustomShippingOption.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CustomShippingOption.prototype, "beforeInsert", null);
    CustomShippingOption = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(["shipping_option_id", "cart_id"])
    ], CustomShippingOption);
    return CustomShippingOption;
}(soft_deletable_entity_1.SoftDeletableEntity));
exports.CustomShippingOption = CustomShippingOption;
/**
 * @schema CustomShippingOption
 * title: "Custom Shipping Option"
 * description: "Custom Shipping Options are overridden Shipping Options. Admins can attach a Custom Shipping Option to a cart in order to set a custom price for a particular Shipping Option."
 * type: object
 * required:
 *   - cart_id
 *   - created_at
 *   - deleted_at
 *   - id
 *   - metadata
 *   - price
 *   - shipping_option_id
 *   - updated_at
 * properties:
 *   id:
 *     description: The custom shipping option's ID
 *     type: string
 *     example: cso_01G8X99XNB77DMFBJFWX6DN9V9
 *   price:
 *     description: The custom price set that will override the shipping option's original price
 *     type: integer
 *     example: 1000
 *   shipping_option_id:
 *     description: The ID of the Shipping Option that the custom shipping option overrides
 *     type: string
 *     example: so_01G1G5V27GYX4QXNARRQCW1N8T
 *   shipping_option:
 *     description: The details of the overridden shipping options.
 *     x-expandable: "shipping_option"
 *     nullable: true
 *     $ref: "#/components/schemas/ShippingOption"
 *   cart_id:
 *     description: The ID of the Cart that the custom shipping option is attached to
 *     nullable: true
 *     type: string
 *     example: cart_01G8ZH853Y6TFXWPG5EYE81X63
 *   cart:
 *     description: The details of the cart this shipping option belongs to.
 *     x-expandable: "cart"
 *     nullable: true
 *     $ref: "#/components/schemas/Cart"
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
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
//# sourceMappingURL=custom-shipping-option.js.map