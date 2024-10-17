"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRevokeApiKey = exports.AdminUpdateApiKey = exports.AdminCreateApiKey = exports.AdminGetApiKeysParams = exports.AdminGetApiKeyParams = void 0;
var zod_1 = require("zod");
var validators_1 = require("../../utils/validators");
var utils_1 = require("@medusajs/utils");
exports.AdminGetApiKeyParams = (0, validators_1.createSelectParams)();
exports.AdminGetApiKeysParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    title: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    token: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    type: zod_1.z.nativeEnum(utils_1.ApiKeyType).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetApiKeysParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetApiKeysParams.array(); }).optional(),
}));
exports.AdminCreateApiKey = zod_1.z.object({
    title: zod_1.z.string(),
    type: zod_1.z.nativeEnum(utils_1.ApiKeyType),
});
exports.AdminUpdateApiKey = zod_1.z.object({
    title: zod_1.z.string(),
});
exports.AdminRevokeApiKey = zod_1.z.object({
    revoke_in: zod_1.z.number().optional(),
});
//# sourceMappingURL=validators.js.map