"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateStore = exports.AdminGetStoresParams = exports.AdminGetStoreParams = void 0;
var validators_1 = require("../../utils/validators");
var zod_1 = require("zod");
exports.AdminGetStoreParams = (0, validators_1.createSelectParams)();
exports.AdminGetStoresParams = (0, validators_1.createFindParams)({
    limit: 50,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetStoresParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetStoresParams.array(); }).optional(),
}));
exports.AdminUpdateStore = zod_1.z.object({
    name: zod_1.z.string().optional(),
    supported_currency_codes: zod_1.z.array(zod_1.z.string()).optional(),
    default_currency_code: zod_1.z.string().optional(),
    default_sales_channel_id: zod_1.z.string().optional(),
    default_region_id: zod_1.z.string().optional(),
    default_location_id: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
});
//# sourceMappingURL=validators.js.map