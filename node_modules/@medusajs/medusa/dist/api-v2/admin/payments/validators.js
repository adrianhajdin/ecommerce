"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreatePaymentRefund = exports.AdminCreatePaymentCapture = exports.AdminGetPaymentProvidersParams = exports.AdminGetPaymentsParams = exports.AdminGetPaymentParams = void 0;
var zod_1 = require("zod");
var validators_1 = require("../../utils/validators");
exports.AdminGetPaymentParams = (0, validators_1.createSelectParams)();
exports.AdminGetPaymentsParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetPaymentsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetPaymentsParams.array(); }).optional(),
}));
exports.AdminGetPaymentProvidersParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0,
}).merge(zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    is_enabled: zod_1.z.boolean().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetPaymentProvidersParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetPaymentProvidersParams.array(); }).optional(),
}));
exports.AdminCreatePaymentCapture = zod_1.z
    .object({
    amount: zod_1.z.number().optional(),
})
    .strict();
exports.AdminCreatePaymentRefund = zod_1.z
    .object({
    amount: zod_1.z.number().optional(),
})
    .strict();
//# sourceMappingURL=validators.js.map