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
exports.SalesChannelLocation = void 0;
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var feature_flag_decorators_1 = require("../utils/feature-flag-decorators");
var sales_channel_1 = require("./sales-channel");
var SalesChannelLocation = /** @class */ (function (_super) {
    __extends(SalesChannelLocation, _super);
    function SalesChannelLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    SalesChannelLocation.prototype.beforeInsert = function () {
        this.id = (0, utils_1.generateEntityId)(this.id, "scloc");
    };
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ type: "text" }),
        __metadata("design:type", String)
    ], SalesChannelLocation.prototype, "sales_channel_id", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ type: "text" }),
        __metadata("design:type", String)
    ], SalesChannelLocation.prototype, "location_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return sales_channel_1.SalesChannel; }, function (sc) { return sc.locations; }),
        (0, typeorm_1.JoinColumn)({ name: "sales_channel_id" }),
        __metadata("design:type", Object)
    ], SalesChannelLocation.prototype, "sales_channel", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SalesChannelLocation.prototype, "beforeInsert", null);
    SalesChannelLocation = __decorate([
        (0, feature_flag_decorators_1.FeatureFlagEntity)("sales_channels")
    ], SalesChannelLocation);
    return SalesChannelLocation;
}(interfaces_1.SoftDeletableEntity));
exports.SalesChannelLocation = SalesChannelLocation;
/**
 * @schema SalesChannelLocation
 * title: "Sales Channel Stock Location"
 * description: "This represents the association between a sales channel and a stock locations."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - id
 *   - location_id
 *   - sales_channel_id
 *   - updated_at
 * properties:
 *   id:
 *     description: The Sales Channel Stock Location's ID
 *     type: string
 *     example: scloc_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   sales_channel_id:
 *     description: "The ID of the Sales Channel"
 *     type: string
 *     example: sc_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   location_id:
 *     description: "The ID of the Location Stock."
 *     type: string
 *   sales_channel:
 *     description: The details of the sales channel the location is associated with.
 *     x-expandable: "sales_channel"
 *     nullable: true
 *     $ref: "#/components/schemas/SalesChannel"
 *   created_at:
 *     description: "The date with timezone at which the resource was created."
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: "The date with timezone at which the resource was updated."
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     description: "The date with timezone at which the resource was deleted."
 *     nullable: true
 *     type: string
 *     format: date-time
 */
//# sourceMappingURL=sales-channel-location.js.map