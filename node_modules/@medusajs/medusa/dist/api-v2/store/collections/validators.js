"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetCollectionsParams = exports.StoreGetCollectionParams = void 0;
var validators_1 = require("../../utils/validators");
var zod_1 = require("zod");
exports.StoreGetCollectionParams = (0, validators_1.createSelectParams)();
exports.StoreGetCollectionsParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 10,
    order: "-created_at",
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    title: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    handle: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(function () { return exports.StoreGetCollectionsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.StoreGetCollectionsParams.array(); }).optional(),
}));
//# sourceMappingURL=validators.js.map