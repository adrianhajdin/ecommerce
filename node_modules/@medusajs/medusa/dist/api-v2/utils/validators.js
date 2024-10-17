"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOperatorMap = exports.createFindParams = exports.createSelectParams = exports.createLinkBody = exports.createBatchBody = void 0;
var zod_1 = require("zod");
var createBatchBody = function (createValidator, updateValidator) {
    return zod_1.z.object({
        create: zod_1.z.array(createValidator).optional(),
        update: zod_1.z.array(updateValidator).optional(),
        delete: zod_1.z.array(zod_1.z.string()).optional(),
    });
};
exports.createBatchBody = createBatchBody;
var createLinkBody = function () {
    return zod_1.z.object({
        add: zod_1.z.array(zod_1.z.string()).optional(),
        remove: zod_1.z.array(zod_1.z.string()).optional(),
    });
};
exports.createLinkBody = createLinkBody;
var createSelectParams = function () {
    return zod_1.z.object({
        fields: zod_1.z.string().optional(),
    });
};
exports.createSelectParams = createSelectParams;
var createFindParams = function (_a) {
    var _b = _a === void 0 ? {} : _a, offset = _b.offset, limit = _b.limit, order = _b.order;
    var selectParams = (0, exports.createSelectParams)();
    return selectParams.merge(zod_1.z.object({
        offset: zod_1.z.preprocess(function (val) {
            if (val && typeof val === "string") {
                return parseInt(val);
            }
            return val;
        }, zod_1.z
            .number()
            .optional()
            .default(offset !== null && offset !== void 0 ? offset : 0)),
        limit: zod_1.z.preprocess(function (val) {
            if (val && typeof val === "string") {
                return parseInt(val);
            }
            return val;
        }, zod_1.z
            .number()
            .optional()
            .default(limit !== null && limit !== void 0 ? limit : 20)),
        order: order
            ? zod_1.z.string().optional().default(order)
            : zod_1.z.string().optional(),
    }));
};
exports.createFindParams = createFindParams;
var createOperatorMap = function (type, valueParser) {
    if (!type) {
        type = zod_1.z.string();
    }
    var unionType = zod_1.z.union([type, zod_1.z.array(type)]).optional();
    var arrayType = zod_1.z.array(type).optional();
    var simpleType = type.optional();
    if (valueParser) {
        unionType = zod_1.z
            .preprocess(valueParser, zod_1.z.union([type, zod_1.z.array(type)]))
            .optional();
        arrayType = zod_1.z.preprocess(valueParser, zod_1.z.array(type)).optional();
        simpleType = zod_1.z.preprocess(valueParser, type).optional();
    }
    return zod_1.z.object({
        $eq: unionType,
        $ne: unionType,
        $in: arrayType,
        $nin: arrayType,
        $like: simpleType,
        $ilike: simpleType,
        $re: simpleType,
        $contains: simpleType,
        $gt: simpleType,
        $gte: simpleType,
        $lt: simpleType,
        $lte: simpleType,
    });
};
exports.createOperatorMap = createOperatorMap;
//# sourceMappingURL=validators.js.map