"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetCustomerAddressesParams = exports.StoreUpdateCustomerAddress = exports.StoreCreateCustomerAddress = exports.StoreGetCustomerAddressParams = exports.StoreUpdateCustomer = exports.StoreCreateCustomer = exports.StoreGetCustomerParams = void 0;
var validators_1 = require("../../utils/validators");
var zod_1 = require("zod");
var common_validators_1 = require("../../utils/common-validators");
exports.StoreGetCustomerParams = (0, validators_1.createSelectParams)();
exports.StoreCreateCustomer = zod_1.z.object({
    email: zod_1.z.string().email().optional(),
    company_name: zod_1.z.string().optional(),
    first_name: zod_1.z.string().optional(),
    last_name: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
});
exports.StoreUpdateCustomer = zod_1.z.object({
    company_name: zod_1.z.string().nullable().optional(),
    first_name: zod_1.z.string().nullable().optional(),
    last_name: zod_1.z.string().nullable().optional(),
    phone: zod_1.z.string().nullable().optional(),
});
exports.StoreGetCustomerAddressParams = (0, validators_1.createSelectParams)();
exports.StoreCreateCustomerAddress = common_validators_1.AddressPayload.merge(zod_1.z.object({
    address_name: zod_1.z.string().optional(),
    is_default_shipping: zod_1.z.boolean().optional(),
    is_default_billing: zod_1.z.boolean().optional(),
}));
exports.StoreUpdateCustomerAddress = exports.StoreCreateCustomerAddress;
exports.StoreGetCustomerAddressesParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    city: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    country_code: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    postal_code: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
}));
//# sourceMappingURL=validators.js.map