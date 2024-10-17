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
exports.ShippingMethodTaxLine = void 0;
var typeorm_1 = require("typeorm");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var shipping_method_1 = require("./shipping-method");
var tax_line_1 = require("./tax-line");
var ShippingMethodTaxLine = /** @class */ (function (_super) {
    __extends(ShippingMethodTaxLine, _super);
    function ShippingMethodTaxLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    ShippingMethodTaxLine.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "smtl");
    };
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], ShippingMethodTaxLine.prototype, "shipping_method_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return shipping_method_1.ShippingMethod; }, function (sm) { return sm.tax_lines; }),
        (0, typeorm_1.JoinColumn)({ name: "shipping_method_id" }),
        __metadata("design:type", Object)
    ], ShippingMethodTaxLine.prototype, "shipping_method", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShippingMethodTaxLine.prototype, "beforeInsert", null);
    ShippingMethodTaxLine = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Unique)(["shipping_method_id", "code"])
    ], ShippingMethodTaxLine);
    return ShippingMethodTaxLine;
}(tax_line_1.TaxLine));
exports.ShippingMethodTaxLine = ShippingMethodTaxLine;
/**
 * @schema ShippingMethodTaxLine
 * title: "Shipping Method Tax Line"
 * description: "A Shipping Method Tax Line represents the taxes applied on a shipping method in a cart."
 * type: object
 * required:
 *   - code
 *   - created_at
 *   - id
 *   - shipping_method_id
 *   - metadata
 *   - name
 *   - rate
 *   - updated_at
 * properties:
 *   id:
 *     description: The line item tax line's ID
 *     type: string
 *     example: smtl_01G1G5V2DRX1SK6NQQ8VVX4HQ8
 *   code:
 *     description: A code to identify the tax type by
 *     nullable: true
 *     type: string
 *     example: tax01
 *   name:
 *     description: A human friendly name for the tax
 *     type: string
 *     example: Tax Example
 *   rate:
 *     description: "The numeric rate to charge tax by"
 *     type: number
 *     example: 10
 *   shipping_method_id:
 *     description: The ID of the line item
 *     type: string
 *     example: sm_01F0YET7DR2E7CYVSDHM593QG2
 *   shipping_method:
 *     description: The details of the associated shipping method.
 *     x-expandable: "shipping_method"
 *     nullable: true
 *     $ref: "#/components/schemas/ShippingMethod"
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
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
//# sourceMappingURL=shipping-method-tax-line.js.map