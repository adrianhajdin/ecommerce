"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaultAdminFulfillmentsFields = void 0;
exports.defaultAdminFulfillmentsFields = [
    "id",
    "location_id",
    "packed_at",
    "shipped_at",
    "delivered_at",
    "canceled_at",
    "data",
    "provider_id",
    "shipping_option_id",
    "metadata",
    "order",
    "created_at",
    "updated_at",
    "deleted_at",
    "*delivery_address",
    "*items",
    "*labels",
];
exports.retrieveTransformQueryConfig = {
    defaults: exports.defaultAdminFulfillmentsFields,
    isList: false,
};
exports.listTransformQueryConfig = __assign(__assign({}, exports.retrieveTransformQueryConfig), { isList: true });
//# sourceMappingURL=query-config.js.map