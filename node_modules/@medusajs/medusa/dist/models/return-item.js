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
exports.ReturnItem = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var line_item_1 = require("./line-item");
var return_1 = require("./return");
var return_reason_1 = require("./return-reason");
var ReturnItem = /** @class */ (function () {
    function ReturnItem() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], ReturnItem.prototype, "return_id", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], ReturnItem.prototype, "item_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return return_1.Return; }),
        (0, typeorm_1.JoinColumn)({ name: "return_id" }),
        __metadata("design:type", Object)
    ], ReturnItem.prototype, "return_order", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return line_item_1.LineItem; }),
        (0, typeorm_1.JoinColumn)({ name: "item_id" }),
        __metadata("design:type", Object)
    ], ReturnItem.prototype, "item", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int" }),
        __metadata("design:type", Number)
    ], ReturnItem.prototype, "quantity", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "boolean", default: true }),
        __metadata("design:type", Boolean)
    ], ReturnItem.prototype, "is_requested", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Number)
    ], ReturnItem.prototype, "requested_quantity", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "int", nullable: true }),
        __metadata("design:type", Number)
    ], ReturnItem.prototype, "received_quantity", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ReturnItem.prototype, "reason_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return return_reason_1.ReturnReason; }),
        (0, typeorm_1.JoinColumn)({ name: "reason_id" }),
        __metadata("design:type", Object)
    ], ReturnItem.prototype, "reason", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], ReturnItem.prototype, "note", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], ReturnItem.prototype, "metadata", void 0);
    ReturnItem = __decorate([
        (0, typeorm_1.Entity)()
    ], ReturnItem);
    return ReturnItem;
}());
exports.ReturnItem = ReturnItem;
/**
 * @schema ReturnItem
 * title: "Return Item"
 * description: "A return item represents a line item in an order that is to be returned. It includes details related to the return and the reason behind it."
 * type: object
 * required:
 *   - is_requested
 *   - item_id
 *   - metadata
 *   - note
 *   - quantity
 *   - reason_id
 *   - received_quantity
 *   - requested_quantity
 *   - return_id
 * properties:
 *   return_id:
 *     description: The ID of the Return that the Return Item belongs to.
 *     type: string
 *     example: ret_01F0YET7XPCMF8RZ0Y151NZV2V
 *   item_id:
 *     description: The ID of the Line Item that the Return Item references.
 *     type: string
 *     example: item_01G8ZC9GWT6B2GP5FSXRXNFNGN
 *   return_order:
 *     description: Details of the Return that the Return Item belongs to.
 *     x-expandable: "return_order"
 *     nullable: true
 *     $ref: "#/components/schemas/Return"
 *   item:
 *     description: The details of the line item in the original order to be returned.
 *     x-expandable: "item"
 *     nullable: true
 *     $ref: "#/components/schemas/LineItem"
 *   quantity:
 *     description: The quantity of the Line Item to be returned.
 *     type: integer
 *     example: 1
 *   is_requested:
 *     description: Whether the Return Item was requested initially or received unexpectedly in the warehouse.
 *     type: boolean
 *     default: true
 *   requested_quantity:
 *     description: The quantity that was originally requested to be returned.
 *     nullable: true
 *     type: integer
 *     example: 1
 *   received_quantity:
 *     description: The quantity that was received in the warehouse.
 *     nullable: true
 *     type: integer
 *     example: 1
 *   reason_id:
 *     description: The ID of the reason for returning the item.
 *     nullable: true
 *     type: string
 *     example: rr_01G8X82GCCV2KSQHDBHSSAH5TQ
 *   reason:
 *     description: The details of the reason for returning the item.
 *     x-expandable: "reason"
 *     nullable: true
 *     $ref: "#/components/schemas/ReturnReason"
 *   note:
 *     description: An optional note with additional details about the Return.
 *     nullable: true
 *     type: string
 *     example: I didn't like it.
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
//# sourceMappingURL=return-item.js.map