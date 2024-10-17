"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreAddCartShippingMethods = exports.StoreUpdateCartLineItem = exports.StoreAddCartLineItem = exports.StoreCalculateCartTaxes = exports.StoreUpdateCart = exports.StoreRemoveCartPromotions = exports.StoreAddCartPromotions = exports.StoreCreateCart = exports.StoreGetCartsCart = void 0;
var zod_1 = require("zod");
var common_validators_1 = require("../../utils/common-validators");
var validators_1 = require("../../utils/validators");
exports.StoreGetCartsCart = (0, validators_1.createSelectParams)();
var ItemSchema = zod_1.z.object({
    variant_id: zod_1.z.string(),
    quantity: zod_1.z.number(),
});
exports.StoreCreateCart = zod_1.z
    .object({
    region_id: zod_1.z.string().optional().nullable(),
    shipping_address: zod_1.z.union([common_validators_1.AddressPayload, zod_1.z.string()]).optional(),
    billing_address: zod_1.z.union([common_validators_1.AddressPayload, zod_1.z.string()]).optional(),
    email: zod_1.z.string().email().optional().nullable(),
    currency_code: zod_1.z.string().optional(),
    items: zod_1.z.array(ItemSchema).optional(),
    sales_channel_id: zod_1.z.string().optional().nullable(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional().nullable(),
})
    .strict();
exports.StoreAddCartPromotions = zod_1.z
    .object({
    promo_codes: zod_1.z.array(zod_1.z.string()),
})
    .strict();
exports.StoreRemoveCartPromotions = zod_1.z
    .object({
    promo_codes: zod_1.z.array(zod_1.z.string()),
})
    .strict();
exports.StoreUpdateCart = zod_1.z
    .object({
    region_id: zod_1.z.string().optional().nullable(),
    email: zod_1.z.string().email().optional().nullable(),
    billing_address: zod_1.z.union([common_validators_1.AddressPayload, zod_1.z.string()]).optional(),
    shipping_address: zod_1.z.union([common_validators_1.AddressPayload, zod_1.z.string()]).optional(),
    sales_channel_id: zod_1.z.string().optional().nullable(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional().nullable(),
    promo_codes: zod_1.z.array(zod_1.z.string()).optional(),
})
    .strict();
exports.StoreCalculateCartTaxes = (0, validators_1.createSelectParams)();
exports.StoreAddCartLineItem = zod_1.z.object({
    variant_id: zod_1.z.string(),
    quantity: zod_1.z.number(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
});
exports.StoreUpdateCartLineItem = zod_1.z.object({
    quantity: zod_1.z.number(),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional(),
});
exports.StoreAddCartShippingMethods = zod_1.z
    .object({
    option_id: zod_1.z.string(),
    data: zod_1.z.record(zod_1.z.unknown()).optional(),
})
    .strict();
//# sourceMappingURL=validators.js.map