"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetCurrenciesParams = exports.StoreGetCurrencyParams = void 0;
var validators_1 = require("../../utils/validators");
var zod_1 = require("zod");
exports.StoreGetCurrencyParams = (0, validators_1.createSelectParams)();
exports.StoreGetCurrenciesParams = (0, validators_1.createFindParams)({
    offset: 0,
    limit: 50,
}).merge(zod_1.z.object({
    q: zod_1.z.string().optional(),
    code: zod_1.z.union([zod_1.z.string(), zod_1.z.array(zod_1.z.string())]).optional(),
    $and: zod_1.z.lazy(function () { return exports.StoreGetCurrenciesParams.array(); }).optional(),
    $or: zod_1.z.lazy(function () { return exports.StoreGetCurrenciesParams.array(); }).optional(),
}));
//# sourceMappingURL=validators.js.map