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
exports.Notification = void 0;
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../interfaces/models/base-entity");
var customer_1 = require("./customer");
var db_aware_column_1 = require("../utils/db-aware-column");
var notification_provider_1 = require("./notification-provider");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Notification_1 = Notification;
    /**
     * @apiIgnore
     */
    Notification.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "noti");
    };
    var Notification_1;
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Notification.prototype, "event_name", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Notification.prototype, "resource_type", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Notification.prototype, "resource_id", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Object)
    ], Notification.prototype, "customer_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return customer_1.Customer; }),
        (0, typeorm_1.JoinColumn)({ name: "customer_id" }),
        __metadata("design:type", customer_1.Customer)
    ], Notification.prototype, "customer", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Notification.prototype, "to", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb" }),
        __metadata("design:type", Object)
    ], Notification.prototype, "data", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Notification.prototype, "parent_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Notification_1; }),
        (0, typeorm_1.JoinColumn)({ name: "parent_id" }),
        __metadata("design:type", Notification)
    ], Notification.prototype, "parent_notification", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Notification_1; }, function (noti) { return noti.parent_notification; }),
        __metadata("design:type", Array)
    ], Notification.prototype, "resends", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Notification.prototype, "provider_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return notification_provider_1.NotificationProvider; }),
        (0, typeorm_1.JoinColumn)({ name: "provider_id" }),
        __metadata("design:type", notification_provider_1.NotificationProvider
        /**
         * @apiIgnore
         */
        )
    ], Notification.prototype, "provider", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Notification.prototype, "beforeInsert", null);
    Notification = Notification_1 = __decorate([
        (0, typeorm_1.Entity)()
    ], Notification);
    return Notification;
}(base_entity_1.BaseEntity));
exports.Notification = Notification;
/**
 * @schema Notification
 * title: "Notification"
 * description: "A notification is an alert sent, typically to customers, using the installed Notification Provider as a reaction to internal events such as `order.placed`. Notifications can be resent."
 * type: object
 * required:
 *   - created_at
 *   - customer_id
 *   - data
 *   - event_name
 *   - id
 *   - parent_id
 *   - provider_id
 *   - resource_type
 *   - resource_id
 *   - to
 *   - updated_at
 * properties:
 *   id:
 *     description: The notification's ID
 *     type: string
 *     example: noti_01G53V9Y6CKMCGBM1P0X7C28RX
 *   event_name:
 *     description: The name of the event that the notification was sent for.
 *     nullable: true
 *     type: string
 *     example: order.placed
 *   resource_type:
 *     description: The type of resource that the Notification refers to.
 *     type: string
 *     example: order
 *   resource_id:
 *     description: The ID of the resource that the Notification refers to.
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   customer_id:
 *     description: The ID of the customer that this notification was sent to.
 *     nullable: true
 *     type: string
 *     example: cus_01G2SG30J8C85S4A5CHM2S1NS2
 *   customer:
 *     description: The details of the customer that this notification was sent to.
 *     x-expandable: "customer"
 *     nullable: true
 *     $ref: "#/components/schemas/Customer"
 *   to:
 *     description: The address that the Notification was sent to. This will usually be an email address, but can represent other addresses such as a chat bot user ID.
 *     type: string
 *     example: user@example.com
 *   data:
 *     description: The data that the Notification was sent with. This contains all the data necessary for the Notification Provider to initiate a resend.
 *     type: object
 *     example: {}
 *   parent_id:
 *     description: The notification's parent ID
 *     nullable: true
 *     type: string
 *     example: noti_01G53V9Y6CKMCGBM1P0X7C28RX
 *   parent_notification:
 *     description: The details of the parent notification.
 *     x-expandable: "parent_notification"
 *     nullable: true
 *     $ref: "#/components/schemas/Notification"
 *   resends:
 *     description: The details of all resends of the notification.
 *     type: array
 *     x-expandable: "resends"
 *     items:
 *       $ref: "#/components/schemas/Notification"
 *   provider_id:
 *     description: The ID of the notification provider used to send the notification.
 *     nullable: true
 *     type: string
 *     example: sengrid
 *   provider:
 *     description: The notification provider used to send the notification.
 *     x-expandable: "provider"
 *     nullable: true
 *     $ref: "#/components/schemas/NotificationProvider"
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 */
//# sourceMappingURL=notification.js.map