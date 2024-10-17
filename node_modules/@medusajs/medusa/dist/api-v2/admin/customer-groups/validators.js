"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateCustomerGroup = exports.AdminCreateCustomerGroup = exports.AdminGetCustomerGroupsParams = exports.AdminCustomerInGroupFilters = exports.AdminGetCustomerGroupParams = void 0;
var validators_1 = require("../../utils/validators");
var zod_1 = require("zod");
exports.AdminGetCustomerGroupParams = (0, validators_1.createSelectParams)();
exports.AdminCustomerInGroupFilters = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    email: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), (0, validators_1.createOperatorMap)()])
        .optional(),
    default_billing_address_id: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())])
        .optional(),
    default_shipping_address_id: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())])
        .optional(),
    company_name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    first_name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    last_name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_by: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
});
exports.AdminGetCustomerGroupsParams = (0, validators_1.createFindParams)({
    limit: 50,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    customers: zod_1.z
        .union([zod_1.z.string(), zod_1.z.array(zod_1.z.string()), exports.AdminCustomerInGroupFilters])
        .optional(),
    created_by: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetCustomerGroupsParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetCustomerGroupsParams.array(); }).optional(),
}));
exports.AdminCreateCustomerGroup = zod_1.z.object({
    name: zod_1.z.string(),
});
exports.AdminUpdateCustomerGroup = zod_1.z.object({
    name: zod_1.z.string(),
});
//# sourceMappingURL=validators.js.map