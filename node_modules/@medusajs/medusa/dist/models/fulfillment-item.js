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
exports.FulfillmentItem = void 0;
var typeorm_1 = require("typeorm");
var fulfillment_1 = require("./fulfillment");
var line_item_1 = require("./line-item");
var FulfillmentItem = /** @class */ (function () {
    function FulfillmentItem() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], FulfillmentItem.prototype, "fulfillment_id", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], FulfillmentItem.prototype, "item_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return fulfillment_1.Fulfillment; }),
        (0, typeorm_1.JoinColumn)({ name: "fulfillment_id" }),
        __metadata("design:type", Object)
    ], FulfillmentItem.prototype, "fulfillment", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return line_item_1.LineItem; }),
        (0, typeorm_1.JoinColumn)({ name: "item_id" }),
        __metadata("design:type", Object)
    ], FulfillmentItem.prototype, "item", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        __metadata("design:type", Number)
    ], FulfillmentItem.prototype, "quantity", void 0);
    FulfillmentItem = __decorate([
        (0, typeorm_1.Entity)()
    ], FulfillmentItem);
    return FulfillmentItem;
}());
exports.FulfillmentItem = FulfillmentItem;
/**
 * @schema FulfillmentItem
 * title: "Fulfillment Item"
 * description: "This represents the association between a Line Item and a Fulfillment."
 * type: object
 * required:
 *   - fulfillment_id
 *   - item_id
 *   - quantity
 * properties:
 *   fulfillment_id:
 *     description: The ID of the Fulfillment that the Fulfillment Item belongs to.
 *     type: string
 *     example: ful_01G8ZRTMQCA76TXNAT81KPJZRF
 *   item_id:
 *     description: The ID of the Line Item that the Fulfillment Item references.
 *     type: string
 *     example: item_01G8ZC9GWT6B2GP5FSXRXNFNGN
 *   fulfillment:
 *     description: The details of the fulfillment.
 *     x-expandable: "fulfillment"
 *     nullable: true
 *     $ref: "#/components/schemas/Fulfillment"
 *   item:
 *     description: The details of the line item.
 *     x-expandable: "item"
 *     nullable: true
 *     $ref: "#/components/schemas/LineItem"
 *   quantity:
 *     description: The quantity of the Line Item that is included in the Fulfillment.
 *     type: integer
 *     example: 1
 */
//# sourceMappingURL=fulfillment-item.js.map