"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateUser = exports.AdminCreateUser = exports.AdminGetUsersParams = exports.AdminGetUserParams = void 0;
var validators_1 = require("../../utils/validators");
var zod_1 = require("zod");
exports.AdminGetUserParams = (0, validators_1.createSelectParams)();
exports.AdminGetUsersParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    email: zod_1.z.string().optional(),
    first_name: zod_1.z.string().optional(),
    last_name: zod_1.z.string().optional(),
}));
exports.AdminCreateUser = zod_1.z.object({
    email: zod_1.z.string(),
    first_name: zod_1.z.string().optional(),
    last_name: zod_1.z.string().optional(),
    avatar_url: zod_1.z.string().optional(),
});
exports.AdminUpdateUser = zod_1.z.object({
    first_name: zod_1.z.string().optional(),
    last_name: zod_1.z.string().optional(),
    avatar_url: zod_1.z.string().optional(),
});
//# sourceMappingURL=validators.js.map