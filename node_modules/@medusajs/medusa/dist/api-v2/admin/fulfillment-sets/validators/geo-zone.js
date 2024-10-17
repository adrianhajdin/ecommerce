"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geoZoneZipSchema = exports.geoZoneCitySchema = exports.geoZoneProvinceSchema = exports.geoZoneCountrySchema = void 0;
var zod_1 = require("zod");
var geoZoneBaseSchema = zod_1.z.object({
    country_code: zod_1.z.string(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
});
exports.geoZoneCountrySchema = geoZoneBaseSchema.merge(zod_1.z.object({
    type: zod_1.z.literal("country"),
}));
exports.geoZoneProvinceSchema = geoZoneBaseSchema.merge(zod_1.z.object({
    type: zod_1.z.literal("province"),
    province_code: zod_1.z.string(),
}));
exports.geoZoneCitySchema = geoZoneBaseSchema.merge(zod_1.z.object({
    type: zod_1.z.literal("city"),
    province_code: zod_1.z.string(),
    city: zod_1.z.string(),
}));
exports.geoZoneZipSchema = geoZoneBaseSchema.merge(zod_1.z.object({
    type: zod_1.z.literal("zip"),
    province_code: zod_1.z.string(),
    city: zod_1.z.string(),
    postal_expression: zod_1.z.record(zod_1.z.unknown()),
}));
//# sourceMappingURL=geo-zone.js.map