"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUpdateReservation = exports.AdminCreateReservation = exports.AdminGetReservationsParams = exports.AdminGetReservationParams = void 0;
var validators_1 = require("../../utils/validators");
var zod_1 = require("zod");
exports.AdminGetReservationParams = (0, validators_1.createSelectParams)();
exports.AdminGetReservationsParams = (0, validators_1.createFindParams)({
    limit: 20,
    offset: 0,
}).merge(zod_1.z.object({
    location_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    inventory_item_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    line_item_id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_by: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    description: zod_1.z.union([zod_1.z.string(), (0, validators_1.createOperatorMap)()]).optional(),
    quantity: (0, validators_1.createOperatorMap)(zod_1.z.number(), parseFloat).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
}));
exports.AdminCreateReservation = zod_1.z
    .object({
    line_item_id: zod_1.z.string().optional(),
    location_id: zod_1.z.string(),
    inventory_item_id: zod_1.z.string(),
    quantity: zod_1.z.number(),
    description: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
})
    .strict();
exports.AdminUpdateReservation = zod_1.z
    .object({
    location_id: zod_1.z.string().optional(),
    quantity: zod_1.z.number().optional(),
    description: zod_1.z.string().optional(),
    metadata: zod_1.z.record(zod_1.z.string(), zod_1.z.unknown()).optional(),
})
    .strict();
//# sourceMappingURL=validators.js.map