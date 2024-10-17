"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateCollection = exports.AdminCreateCollection = exports.AdminGetCollectionsParams = exports.AdminGetCollectionParams = void 0;
var validators_1 = require("../../utils/validators");
var zod_1 = require("zod");
exports.AdminGetCollectionParams = (0, validators_1.createSelectParams)();
exports.AdminGetCollectionsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 10,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    title: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    handle: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetCollectionsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetCollectionsParams.array(); }).optional(),
}));
exports.AdminCreateCollection = zod_1.z.object({
    title: zod_1.z.string(),
    handle: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
});
exports.AdminUpdateCollection = zod_1.z.object({
    title: zod_1.z.string().optional(),
    handle: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
});
//# sourceMappingURL=validators.js.map