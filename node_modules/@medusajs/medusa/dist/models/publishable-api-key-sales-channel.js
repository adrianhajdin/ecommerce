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
exports.PublishableApiKeySalesChannel = void 0;
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var PublishableApiKeySalesChannel = /** @class */ (function (_super) {
    __extends(PublishableApiKeySalesChannel, _super);
    function PublishableApiKeySalesChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    PublishableApiKeySalesChannel.prototype.beforeInsert = function () {
        this.id = (0, utils_1.generateEntityId)(this.id, "pksc");
    };
    __decorate([
        (0, typeorm_1.Column)({ type: "text" }),
        __metadata("design:type", String)
    ], PublishableApiKeySalesChannel.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ type: "text" }),
        __metadata("design:type", String)
    ], PublishableApiKeySalesChannel.prototype, "sales_channel_id", void 0);
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ type: "text" }),
        __metadata("design:type", String)
    ], PublishableApiKeySalesChannel.prototype, "publishable_key_id", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PublishableApiKeySalesChannel.prototype, "beforeInsert", null);
    PublishableApiKeySalesChannel = __decorate([
        (0, typeorm_1.Entity)("publishable_api_key_sales_channel")
    ], PublishableApiKeySalesChannel);
    return PublishableApiKeySalesChannel;
}(interfaces_1.BaseEntity));
exports.PublishableApiKeySalesChannel = PublishableApiKeySalesChannel;
/**
 * @schema PublishableApiKeySalesChannel
 * title: "Publishable API Key Sales Channel"
 * description: "This represents the association between the Publishable API keys and Sales Channels"
 * type: object
 * required:
 *   - publishable_key_id
 *   - sales_channel_id
 *   - created_at
 *   - updated_at
 *   - deleted_at
 * properties:
 *   id:
 *    description: The relation's ID
 *    type: string
 *    example: pksc_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   sales_channel_id:
 *     description: The sales channel's ID
 *     type: string
 *     example: sc_01G1G5V21KADXNGH29BJMAJ4B4
 *   publishable_key_id:
 *     description: The publishable API key's ID
 *     type: string
 *     example: pak_01G1G5V21KADXNGH29BJMAJ4B4
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
//# sourceMappingURL=publishable-api-key-sales-channel.js.map