"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminInviteAccept = exports.AdminCreateInvite = exports.AdminGetInviteAcceptParams = exports.AdminGetInvitesParams = exports.AdminGetInviteParams = void 0;
var zod_1 = require("zod");
var validators_1 = require("../../utils/validators");
exports.AdminGetInviteParams = (0, validators_1.createSelectParams)();
exports.AdminGetInvitesParams = (0, validators_1.createFindParams)({
    limit: 50,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetInvitesParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetInvitesParams.array(); }).optional(),
}));
exports.AdminGetInviteAcceptParams = (0, validators_1.createSelectParams)().merge(zod_1.z.object({
    token: zod_1.z.string(),
}));
exports.AdminCreateInvite = zod_1.z
    .object({
    email: zod_1.z.string(),
})
    .strict();
exports.AdminInviteAccept = zod_1.z
    .object({
    email: zod_1.z.string().optional(),
    first_name: zod_1.z.string().optional(),
    last_name: zod_1.z.string().optional(),
})
    .strict();
//# sourceMappingURL=validators.js.map