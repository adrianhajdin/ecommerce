"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGetOrdersParams = exports.AdminGetOrdersOrderParams = void 0;
var zod_1 = require("zod");
var validators_1 = require("../../utils/validators");
exports.AdminGetOrdersOrderParams = (0, validators_1.createSelectParams)().merge(zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    status: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
}));
/**
 * Parameters used to filter and configure the pagination of the retrieved order.
 */
exports.AdminGetOrdersParams = (0, validators_1.createFindParams)({
    limit: 15,
    offset: 0,
}).merge(zod_1.z.object({
    id: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    status: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    created_at: (0, validators_1.createOperatorMap)().optional(),
    updated_at: (0, validators_1.createOperatorMap)().optional(),
    deleted_at: (0, validators_1.createOperatorMap)().optional(),
}));
//# sourceMappingURL=validators.js.map