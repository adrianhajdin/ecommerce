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
exports.Country = void 0;
var typeorm_1 = require("typeorm");
var region_1 = require("./region");
var Country = /** @class */ (function () {
    function Country() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Country.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Index)({ unique: true }),
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Country.prototype, "iso_2", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Country.prototype, "iso_3", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Number)
    ], Country.prototype, "num_code", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Country.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Country.prototype, "display_name", void 0);
    __decorate([
        (0, typeorm_1.Index)(),
        (0, typeorm_1.Column)({ nullable: true }),
        __metadata("design:type", Object)
    ], Country.prototype, "region_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return region_1.Region; }, function (r) { return r.countries; }),
        (0, typeorm_1.JoinColumn)({ name: "region_id" }),
        __metadata("design:type", region_1.Region)
    ], Country.prototype, "region", void 0);
    Country = __decorate([
        (0, typeorm_1.Entity)()
    ], Country);
    return Country;
}());
exports.Country = Country;
/**
 * @schema Country
 * title: "Country"
 * description: "Country details"
 * type: object
 * required:
 *   - display_name
 *   - id
 *   - iso_2
 *   - iso_3
 *   - name
 *   - num_code
 *   - region_id
 * properties:
 *   id:
 *     description: The country's ID
 *     type: string
 *     example: 109
 *   iso_2:
 *     description: The 2 character ISO code of the country in lower case
 *     type: string
 *     example: it
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
 *       description: See a list of codes.
 *   iso_3:
 *     description: The 2 character ISO code of the country in lower case
 *     type: string
 *     example: ita
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3#Officially_assigned_code_elements
 *       description: See a list of codes.
 *   num_code:
 *     description: The numerical ISO code for the country.
 *     type: string
 *     example: 380
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_3166-1_numeric#Officially_assigned_code_elements
 *       description: See a list of codes.
 *   name:
 *     description: The normalized country name in upper case.
 *     type: string
 *     example: ITALY
 *   display_name:
 *     description: The country name appropriate for display.
 *     type: string
 *     example: Italy
 *   region_id:
 *     description: The region ID this country is associated with.
 *     nullable: true
 *     type: string
 *     example: reg_01G1G5V26T9H8Y0M4JNE3YGA4G
 *   region:
 *     description: The details of the region the country is associated with.
 *     x-expandable: "region"
 *     nullable: true
 *     $ref: "#/components/schemas/Region"
 */
//# sourceMappingURL=country.js.map