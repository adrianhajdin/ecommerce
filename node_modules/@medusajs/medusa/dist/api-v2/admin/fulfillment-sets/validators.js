"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminFulfillmentSetParams = exports.AdminUpdateFulfillmentSetServiceZonesSchema = exports.AdminCreateFulfillmentSetServiceZonesSchema = exports.AdminServiceZonesParams = void 0;
var zod_1 = require("zod");
var validators_1 = require("../../utils/validators");
var geo_zone_1 = require("./validators/geo-zone");
exports.AdminServiceZonesParams = (0, validators_1.createFindParams)();
exports.AdminCreateFulfillmentSetServiceZonesSchema = zod_1.z
    .object({
    name: zod_1.z.string(),
    geo_zones: zod_1.z
        .array(zod_1.z.union([
        geo_zone_1.geoZoneCountrySchema,
        geo_zone_1.geoZoneProvinceSchema,
        geo_zone_1.geoZoneCitySchema,
        geo_zone_1.geoZoneZipSchema,
    ]))
        .optional(),
})
    .strict();
exports.AdminUpdateFulfillmentSetServiceZonesSchema = zod_1.z
    .object({
    name: zod_1.z.string().optional(),
    geo_zones: zod_1.z
        .array(zod_1.z.union([
        geo_zone_1.geoZoneCountrySchema.merge(zod_1.z.object({ id: zod_1.z.string().optional() })),
        geo_zone_1.geoZoneProvinceSchema.merge(zod_1.z.object({ id: zod_1.z.string().optional() })),
        geo_zone_1.geoZoneCitySchema.merge(zod_1.z.object({ id: zod_1.z.string().optional() })),
        geo_zone_1.geoZoneZipSchema.merge(zod_1.z.object({ id: zod_1.z.string().optional() })),
    ]))
        .optional(),
})
    .strict();
exports.AdminFulfillmentSetParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0,
}).merge(zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    type: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    service_zone_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
}));
//# sourceMappingURL=validators.js.map