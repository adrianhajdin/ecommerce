"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreateDraftOrder = exports.AdminGetOrdersParams = exports.AdminGetOrderParams = void 0;
var validators_1 = require("../../utils/validators");
var common_validators_1 = require("../../utils/common-validators");
var zod_1 = require("zod");
exports.AdminGetOrderParams = (0, validators_1.createSelectParams)();
exports.AdminGetOrdersParams = (0, validators_1.createFindParams)({
    limit: 50,
    offset: 0,
}).merge(zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    name: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    $and: zod_1.z.lazy(function () { return exports.AdminGetOrdersParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.AdminGetOrdersParams.array(); }).optional(),
}));
var Status;
(function (Status) {
    Status["completed"] = "completed";
})(Status || (Status = {}));
var ShippingMethod = zod_1.z.object({
    shipping_method_id: zod_1.z.string().optional(),
    order_id: zod_1.z.string().optional(),
    name: zod_1.z.string(),
    option_id: zod_1.z.string(),
    data: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
    amount: common_validators_1.BigNumberInput,
});
var Item = zod_1.z
    .object({
    title: zod_1.z.string().optional(),
    sku: zod_1.z.string().optional(),
    barcode: zod_1.z.string().optional(),
    variant_id: zod_1.z.string().optional(),
    unit_price: common_validators_1.BigNumberInput.optional(),
    quantity: zod_1.z.number(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
})
    .refine(function (data) {
    if (!data.variant_id) {
        return data.title && (data.sku || data.barcode);
    }
    return true;
});
exports.AdminCreateDraftOrder = zod_1.z
    .object({
    status: zod_1.z.nativeEnum(Status).optional(),
    sales_channel_id: zod_1.z.string().optional(),
    email: zod_1.z.string().optional(),
    customer_id: zod_1.z.string().optional(),
    billing_address: common_validators_1.AddressPayload.optional(),
    shipping_address: common_validators_1.AddressPayload.optional(),
    items: zod_1.z.array(Item).optional(),
    region_id: zod_1.z.string(),
    promo_codes: zod_1.z.array(zod_1.z.string()).optional(),
    currency_code: zod_1.z.string().optional(),
    no_notification_order: zod_1.z.boolean().optional(),
    shipping_methods: zod_1.z.array(ShippingMethod),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
})
    .strict()
    .refine(function (data) {
    if (!data.email && !data.customer_id) {
        return false;
    }
    return true;
}, { message: "Either email or customer_id must be provided" });
//# sourceMappingURL=validators.js.map