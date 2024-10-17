"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminCreateShipment = exports.AdminCreateFulfillment = exports.AdminCancelFulfillment = exports.AdminFulfillmentParams = void 0;
var zod_1 = require("zod");
var common_validators_1 = require("../../utils/common-validators");
var validators_1 = require("../../utils/validators");
exports.AdminFulfillmentParams = (0, validators_1.createSelectParams)();
var AdminCreateFulfillmentItem = zod_1.z.object({
    title: zod_1.z.string(),
    sku: zod_1.z.string(),
    quantity: zod_1.z.number(),
    barcode: zod_1.z.string(),
    line_item_id: zod_1.z.string().optional(),
    inventory_item_id: zod_1.z.string().optional(),
});
var AdminCreateFulfillmentLabel = zod_1.z.object({
    tracking_number: zod_1.z.string(),
    tracking_url: zod_1.z.string(),
    label_url: zod_1.z.string(),
});
exports.AdminCancelFulfillment = zod_1.z.object({});
exports.AdminCreateFulfillment = zod_1.z.object({
    location_id: zod_1.z.string(),
    provider_id: zod_1.z.string(),
    delivery_address: common_validators_1.AddressPayload,
    items: zod_1.z.array(AdminCreateFulfillmentItem),
    labels: zod_1.z.array(AdminCreateFulfillmentLabel),
    order: zod_1.z.object({}),
    metadata: zod_1.z.record(zod_1.z.unknown()).optional().nullable(),
});
exports.AdminCreateShipment = zod_1.z.object({
    labels: zod_1.z.array(AdminCreateFulfillmentLabel),
});
//# sourceMappingURL=validators.js.map