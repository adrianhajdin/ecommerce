"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreateStockLocationFulfillmentSet = exports.AdminUpdateStockLocation = exports.AdminCreateStockLocation = exports.AdminUpsertStockLocationAddress = exports.AdminGetStockLocationsParams = exports.AdminGetStockLocationParams = void 0;
var zod_1 = require("zod");
var validators_1 = require("../../utils/validators");
exports.AdminGetStockLocationParams = (0, validators_1.createSelectParams)();
exports.AdminGetStockLocationsParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    address_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    sales_channel_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetStockLocationsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetStockLocationsParams.array(); }).optional(),
}));
exports.AdminUpsertStockLocationAddress = zod_1.z.object({
    address_1: zod_1.z.string(),
    address_2: zod_1.z.string().optional(),
    company: zod_1.z.string().optional(),
    city: zod_1.z.string().optional(),
    country_code: zod_1.z.string(),
    phone: zod_1.z.string().optional(),
    postal_code: zod_1.z.string().optional(),
    province: zod_1.z.string().optional(),
});
exports.AdminCreateStockLocation = zod_1.z.object({
    name: zod_1.z.preprocess(function (val) { return val.trim(); }, zod_1.z.string()),
    address: exports.AdminUpsertStockLocationAddress.optional(),
    address_id: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
});
exports.AdminUpdateStockLocation = zod_1.z.object({
    name: zod_1.z
        .preprocess(function (val) { return val.trim(); }, zod_1.z.string().optional())
        .optional(),
    address: exports.AdminUpsertStockLocationAddress.optional(),
    address_id: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
});
exports.AdminCreateStockLocationFulfillmentSet = zod_1.z
    .object({
    name: zod_1.z.string(),
    type: zod_1.z.string(),
})
    .strict();
//# sourceMappingURL=validators.js.map