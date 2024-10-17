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
exports.ShippingProfile = exports.ShippingProfileType = void 0;
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var product_1 = require("./product");
var shipping_option_1 = require("./shipping-option");
/**
 * @enum
 *
 * The shipping profile's type.
 */
var ShippingProfileType;
(function (ShippingProfileType) {
    /**
     * The default profile used to ship item.
     */
    ShippingProfileType["DEFAULT"] = "default";
    /**
     * The profile used to ship gift cards.
     */
    ShippingProfileType["GIFT_CARD"] = "gift_card";
    /**
     * The profile used to ship custom items.
     */
    ShippingProfileType["CUSTOM"] = "custom";
})(ShippingProfileType = exports.ShippingProfileType || (exports.ShippingProfileType = {}));
var ShippingProfile = /** @class */ (function (_super) {
    __extends(ShippingProfile, _super);
    function ShippingProfile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    ShippingProfile.prototype.beforeInsert = function () {
        this.id = (0, utils_1.generateEntityId)(this.id, "sp");
    };
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ShippingProfile.prototype, "name", void 0);
    __decorate([
        (0, utils_1.DbAwareColumn)({ type: "enum", enum: ShippingProfileType }),
        __metadata("design:type", String)
    ], ShippingProfile.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return product_1.Product; }),
        (0, typeorm_1.JoinTable)({
            name: "product_shipping_profile",
            joinColumn: {
                name: "profile_id",
                referencedColumnName: "id",
            },
            inverseJoinColumn: {
                name: "product_id",
                referencedColumnName: "id",
            },
        }),
        __metadata("design:type", Array)
    ], ShippingProfile.prototype, "products", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return shipping_option_1.ShippingOption; }, function (so) { return so.profile; }),
        __metadata("design:type", Array)
    ], ShippingProfile.prototype, "shipping_options", void 0);
    __decorate([
        (0, utils_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], ShippingProfile.prototype, "metadata", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShippingProfile.prototype, "beforeInsert", null);
    ShippingProfile = __decorate([
        (0, typeorm_1.Entity)()
    ], ShippingProfile);
    return ShippingProfile;
}(interfaces_1.SoftDeletableEntity));
exports.ShippingProfile = ShippingProfile;
/**
 * @schema ShippingProfile
 * title: "Shipping Profile"
 * description: "A Shipping Profile has a set of defined Shipping Options that can be used to fulfill a given set of Products. For example, gift cards are shipped differently than physical products,
 *  so a shipping profile with the type `gift_card` groups together the shipping options that can only be used for gift cards."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - id
 *   - metadata
 *   - name
 *   - type
 *   - updated_at
 * properties:
 *   id:
 *     description: The shipping profile's ID
 *     type: string
 *     example: sp_01G1G5V239ENSZ5MV4JAR737BM
 *   name:
 *     description: The name given to the Shipping profile - this may be displayed to the Customer.
 *     type: string
 *     example: Default Shipping Profile
 *   type:
 *     description: The type of the Shipping Profile, may be `default`, `gift_card` or `custom`.
 *     type: string
 *     enum:
 *       - default
 *       - gift_card
 *       - custom
 *     example: default
 *   products:
 *     description: The details of the products that the Shipping Profile defines Shipping Options for. Available if the relation `products` is expanded.
 *     type: array
 *     x-expandable: "products"
 *     items:
 *       $ref: "#/components/schemas/Product"
 *   shipping_options:
 *     description: The details of the shipping options that can be used to create shipping methods for the Products in the Shipping Profile.
 *     type: array
 *     x-expandable: "shipping_options"
 *     items:
 *       $ref: "#/components/schemas/ShippingOption"
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
//# sourceMappingURL=shipping-profile.js.map