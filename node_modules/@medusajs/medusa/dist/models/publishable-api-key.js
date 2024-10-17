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
exports.PublishableApiKey = void 0;
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var PublishableApiKey = /** @class */ (function (_super) {
    __extends(PublishableApiKey, _super);
    function PublishableApiKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @apiIgnore
     */
    PublishableApiKey.prototype.beforeInsert = function () {
        this.id = (0, utils_1.generateEntityId)(this.id, "pk");
    };
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], PublishableApiKey.prototype, "created_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
        __metadata("design:type", Object)
    ], PublishableApiKey.prototype, "revoked_by", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: (0, utils_1.resolveDbType)("timestamptz"), nullable: true }),
        __metadata("design:type", Date)
    ], PublishableApiKey.prototype, "revoked_at", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], PublishableApiKey.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PublishableApiKey.prototype, "beforeInsert", null);
    PublishableApiKey = __decorate([
        (0, typeorm_1.Entity)()
    ], PublishableApiKey);
    return PublishableApiKey;
}(interfaces_1.BaseEntity));
exports.PublishableApiKey = PublishableApiKey;
/**
 * @schema PublishableApiKey
 * title: "Publishable API key"
 * description: "A Publishable API key defines scopes that resources are available in. Then, it can be used in request to infer the resources without having to directly pass them. For example, a publishable API key can be associated with one or more sales channels. Then, when the publishable API key is passed in the header of a request, it is inferred what sales channel is being used without having to pass the sales channel as a query or body parameter of the request. Publishable API keys can only be used with sales channels, at the moment."
 * type: object
 * required:
 *   - created_at
 *   - created_by
 *   - id
 *   - revoked_by
 *   - revoked_at
 *   - title
 *   - updated_at
 * properties:
 *   id:
 *     description: The key's ID
 *     type: string
 *     example: pk_01G1G5V27GYX4QXNARRQCW1N8T
 *   created_by:
 *    description: The unique identifier of the user that created the key.
 *    nullable: true
 *    type: string
 *    example: usr_01G1G5V26F5TB3GPAPNJ8X1S3V
 *   revoked_by:
 *     description: The unique identifier of the user that revoked the key.
 *     nullable: true
 *     type: string
 *     example: usr_01G1G5V26F5TB3GPAPNJ8X1S3V
 *   revoked_at:
 *     description: The date with timezone at which the key was revoked.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   title:
 *     description: The key's title.
 *     type: string
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 */
//# sourceMappingURL=publishable-api-key.js.map