"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalBooleanValidator = exports.BigNumberInput = exports.AddressPayload = void 0;
var zod_1 = require("zod");
var is_boolean_1 = require("../../../utils/validators/is-boolean");
exports.AddressPayload = zod_1.z
    .object({
    first_name: zod_1.z.string().optional(),
    last_name: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    company: zod_1.z.string().optional(),
    address_1: zod_1.z.string().optional(),
    address_2: zod_1.z.string().optional(),
    city: zod_1.z.string().optional(),
    country_code: zod_1.z.string().optional(),
    province: zod_1.z.string().optional(),
    postal_code: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.string()).optional().nullable(),
})
    .strict();
exports.BigNumberInput = zod_1.z.union([
    zod_1.z.number(),
    zod_1.z.string(),
    zod_1.z.object({
        value: zod_1.z.string(),
        precision: zod_1.z.number(),
    }),
]);
exports.OptionalBooleanValidator = zod_1.z.preprocess(function (val) { return is_boolean_1.optionalBooleanMapper.get(val === null || val === void 0 ? void 0 : val.toLowerCase()); }, zod_1.z.boolean().optional());
//# sourceMappingURL=common.js.map