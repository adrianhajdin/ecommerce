"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCustomerAdressesParams = exports.AdminUpdateCustomerAddress = exports.AdminCreateCustomerAddress = exports.AdminUpdateCustomer = exports.AdminCreateCustomer = exports.AdminCustomersParams = exports.AdminCustomerGroupInCustomerParams = exports.AdminCustomerParams = void 0;
var zod_1 = require("zod");
var validators_1 = require("../../utils/validators");
exports.AdminCustomerParams = (0, validators_1.createSelectParams)();
exports.AdminCustomerGroupInCustomerParams = zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
});
exports.AdminCustomersParams = (0, validators_1.createFindParams)({
    limit: 50,
    offset: 0,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    email: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    groups: zod_1.z
        .union([
        exports.AdminCustomerGroupInCustomerParams,
        zod_1.z.string(),
        zod_1.z.array(zod_1.z.string()),
    ])
        .optional(),
    company_name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    first_name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    last_name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_by: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminCustomersParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminCustomersParams.array(); }).optional(),
}));
exports.AdminCreateCustomer = zod_1.z.object({
    email: zod_1.z.string().email().optional(),
    company_name: zod_1.z.string().optional(),
    first_name: zod_1.z.string().optional(),
    last_name: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
});
exports.AdminUpdateCustomer = zod_1.z.object({
    email: zod_1.z.string().email().nullable().optional(),
    company_name: zod_1.z.string().nullable().optional(),
    first_name: zod_1.z.string().nullable().optional(),
    last_name: zod_1.z.string().nullable().optional(),
    phone: zod_1.z.string().nullable().optional(),
});
exports.AdminCreateCustomerAddress = zod_1.z.object({
    address_name: zod_1.z.string().optional(),
    is_default_shipping: zod_1.z.boolean().optional(),
    is_default_billing: zod_1.z.boolean().optional(),
    company: zod_1.z.string().optional(),
    first_name: zod_1.z.string().optional(),
    last_name: zod_1.z.string().optional(),
    address_1: zod_1.z.string().optional(),
    address_2: zod_1.z.string().optional(),
    city: zod_1.z.string().optional(),
    country_code: zod_1.z.string().optional(),
    province: zod_1.z.string().optional(),
    postal_code: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
});
exports.AdminUpdateCustomerAddress = exports.AdminCreateCustomerAddress;
exports.AdminCustomerAdressesParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    company: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    city: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    country_code: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    province: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    postal_code: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
}));
//# sourceMappingURL=validators.js.map