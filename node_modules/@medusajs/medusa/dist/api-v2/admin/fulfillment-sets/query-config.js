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
exports.retrieveServiceZoneTransformQueryConfig = exports.listTransformQueryConfig = exports.retrieveTransformQueryConfig = exports.defaultAdminFulfillmentSetsFields = void 0;
exports.defaultAdminFulfillmentSetsFields = [
    "id",
    "name",
    "type",
    "created_at",
    "updated_at",
    "deleted_at",
    "*service_zones",
    "*service_zones.geo_zones",
];
exports.retrieveTransformQueryConfig = {
    defaults: exports.defaultAdminFulfillmentSetsFields,
    isList: false,
};
exports.listTransformQueryConfig = __assign(__assign({}, exports.retrieveTransformQueryConfig), { isList: true });
exports.retrieveServiceZoneTransformQueryConfig = {
    defaults: [
        "id",
        "name",
        "type",
        "created_at",
        "updated_at",
        "deleted_at",
        "*geo_zones",
    ],
    isList: false,
};
//# sourceMappingURL=query-config.js.map