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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingOptionRequirement = exports.RequirementType = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var shipping_option_1 = require("./shipping-option");
/**
 * @enum
 *
 * The type of shipping option requirement.
 */
var RequirementType;
(function (RequirementType) {
    /**
     * The shipping option can only be applied if the subtotal is greater than the requirement's amount.
     */
    RequirementType["MIN_SUBTOTAL"] = "min_subtotal";
    /**
     * The shipping option can only be applied if the subtotal is less than the requirement's amont.
     */
    RequirementType["MAX_SUBTOTAL"] = "max_subtotal";
})(RequirementType = exports.RequirementType || (exports.RequirementType = {}));
var ShippingOptionRequirement = /** @class */ (function () {
    function ShippingOptionRequirement() {
    }
    /**
     * @apiIgnore
     */
    ShippingOptionRequirement.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "sor");
    };
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], ShippingOptionRequirement.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ShippingOptionRequirement.prototype, "shipping_option_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return shipping_option_1.ShippingOption; }),
        (0, typeorm_1.JoinColumn)({ name: "shipping_option_id" }),
        __metadata("design:type", Object)
    ], ShippingOptionRequirement.prototype, "shipping_option", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "enum", enum: RequirementType }),
        __metadata("design:type", String)
    ], ShippingOptionRequirement.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        __metadata("design:type", Number)
    ], ShippingOptionRequirement.prototype, "amount", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({ type: (0, db_aware_column_1.resolveDbType)("timestamptz") }),
        __metadata("design:type", Date
        /**
         * @apiIgnore
         */
        )
    ], ShippingOptionRequirement.prototype, "deleted_at", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShippingOptionRequirement.prototype, "beforeInsert", null);
    ShippingOptionRequirement = __decorate([
        (0, typeorm_1.Entity)()
    ], ShippingOptionRequirement);
    return ShippingOptionRequirement;
}());
exports.ShippingOptionRequirement = ShippingOptionRequirement;
/**
 * @schema ShippingOptionRequirement
 * title: "Shipping Option Requirement"
 * description: "A shipping option requirement defines conditions that a Cart must satisfy for the Shipping Option to be available for usage in the Cart."
 * type: object
 * required:
 *   - amount
 *   - deleted_at
 *   - id
 *   - shipping_option_id
 *   - type
 * properties:
 *   id:
 *     description: The shipping option requirement's ID
 *     type: string
 *     example: sor_01G1G5V29AB4CTNDRFSRWSRKWD
 *   shipping_option_id:
 *     description: The ID of the shipping option that the requirements belong to.
 *     type: string
 *     example: so_01G1G5V27GYX4QXNARRQCW1N8T
 *   shipping_option:
 *     description: The details of the shipping option that the requirements belong to.
 *     x-expandable: "shipping_option"
 *     nullable: true
 *     $ref: "#/components/schemas/ShippingOption"
 *   type:
 *     description: The type of the requirement, this defines how the value will be compared to the Cart's total. `min_subtotal` requirements define the minimum subtotal that is needed for the Shipping Option to be available, while the `max_subtotal` defines the maximum subtotal that the Cart can have for the Shipping Option to be available.
 *     type: string
 *     enum:
 *       - min_subtotal
 *       - max_subtotal
 *     example: min_subtotal
 *   amount:
 *     description: The amount to compare the Cart subtotal to.
 *     type: integer
 *     example: 100
 *   deleted_at:
 *     description: The date with timezone at which the resource was deleted.
 *     nullable: true
 *     type: string
 *     format: date-time
 */
//# sourceMappingURL=shipping-option-requirement.js.map