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
exports.FulfillmentProvider = void 0;
var typeorm_1 = require("typeorm");
var FulfillmentProvider = /** @class */ (function () {
    function FulfillmentProvider() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)(),
        __metadata("design:type", String)
    ], FulfillmentProvider.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ default: true }),
        __metadata("design:type", Boolean)
    ], FulfillmentProvider.prototype, "is_installed", void 0);
    FulfillmentProvider = __decorate([
        (0, typeorm_1.Entity)()
    ], FulfillmentProvider);
    return FulfillmentProvider;
}());
exports.FulfillmentProvider = FulfillmentProvider;
/**
 * @schema FulfillmentProvider
 * title: "Fulfillment Provider"
 * description: "A fulfillment provider represents a fulfillment service installed in the Medusa backend, either through a plugin or backend customizations.
 *  It holds the fulfillment service's installation status."
 * type: object
 * required:
 *   - id
 *   - is_installed
 * properties:
 *   id:
 *     description: The ID of the fulfillment provider as given by the fulfillment service.
 *     type: string
 *     example: manual
 *   is_installed:
 *     description: Whether the fulfillment service is installed in the current version. If a fulfillment service is no longer installed, the `is_installed` attribute is set to `false`.
 *     type: boolean
 *     default: true
 */
//# sourceMappingURL=fulfillment-provider.js.map