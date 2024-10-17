"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateSalesChannel = exports.AdminCreateSalesChannel = exports.AdminGetSalesChannelsParams = exports.AdminGetSalesChannelParams = void 0;
var zod_1 = require("zod");
var validators_1 = require("../../utils/validators");
exports.AdminGetSalesChannelParams = (0, validators_1.createSelectParams)();
exports.AdminGetSalesChannelsParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    description: zod_1.z.string().optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    location_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    publishable_key_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetSalesChannelsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetSalesChannelsParams.array(); }).optional(),
}));
exports.AdminCreateSalesChannel = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    is_disabled: zod_1.z.boolean().optional(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
});
exports.AdminUpdateSalesChannel = zod_1.z.object({
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    is_disabled: zod_1.z.boolean().optional(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
});
//# sourceMappingURL=validators.js.map