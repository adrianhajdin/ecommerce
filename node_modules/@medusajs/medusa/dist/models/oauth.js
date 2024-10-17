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
exports.Oauth = void 0;
var typeorm_1 = require("typeorm");
var db_aware_column_1 = require("../utils/db-aware-column");
var generate_entity_id_1 = require("../utils/generate-entity-id");
var Oauth = /** @class */ (function () {
    function Oauth() {
    }
    /**
     * @apiIgnore
     */
    Oauth.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.generateEntityId)(this.id, "oauth");
    };
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], Oauth.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Oauth.prototype, "display_name", void 0);
    __decorate([
        (0, typeorm_1.Index)({ unique: true }),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Oauth.prototype, "application_name", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Oauth.prototype, "install_url", void 0);
    __decorate([
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", String)
    ], Oauth.prototype, "uninstall_url", void 0);
    __decorate([
        (0, db_aware_column_1.DbAwareColumn)({ type: "jsonb", nullable: true }),
        __metadata("design:type", Object)
    ], Oauth.prototype, "data", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Oauth.prototype, "beforeInsert", null);
    Oauth = __decorate([
        (0, typeorm_1.Entity)()
    ], Oauth);
    return Oauth;
}());
exports.Oauth = Oauth;
/**
 * @schema OAuth
 * title: "OAuth"
 * description: "An Oauth app is typically created by a plugin to handle authentication to third-party services."
 * type: object
 * required:
 *   - application_name
 *   - data
 *   - display_name
 *   - id
 *   - install_url
 *   - uninstall_url
 * properties:
 *   id:
 *     description: The app's ID
 *     type: string
 *     example: example_app
 *   display_name:
 *     description: The app's display name
 *     type: string
 *     example: Example app
 *   application_name:
 *     description: The app's name
 *     type: string
 *     example: example
 *   install_url:
 *     description: The URL to install the app
 *     nullable: true
 *     type: string
 *     format: uri
 *   uninstall_url:
 *     description: The URL to uninstall the app
 *     nullable: true
 *     type: string
 *     format: uri
 *   data:
 *     description: Any data necessary to the app.
 *     nullable: true
 *     type: object
 *     example: {}
 */
//# sourceMappingURL=oauth.js.map