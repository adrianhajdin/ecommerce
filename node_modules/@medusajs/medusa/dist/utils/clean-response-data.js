"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanResponseData = void 0;
var utils_1 = require("@medusajs/utils");
var omit_deep_1 = require("./omit-deep");
// TODO: once the legacy totals decoration will be removed.
// We will be able to only compute the totals if one of the total fields is present
// and therefore avoid totals computation if the user don't want them to appear in the response
// and therefore the below const will be removed
var INCLUDED_FIELDS = [
    "shipping_total",
    "discount_total",
    "tax_total",
    "refunded_total",
    "total",
    "subtotal",
    "paid_total",
    "refundable_amount",
    "gift_card_total",
    "gift_card_tax_total",
    "item_tax_total",
    "shipping_tax_total",
    "refundable",
    "original_total",
    "original_tax_total",
];
var EXCLUDED_FIELDS = ["raw_discount_total"];
/**
 * Filter response data to contain props specified in the `allowedProperties`.
 * You can read more in the transformQuery middleware utility methods.
 *
 * @param data - record or an array of records in the response
 * @param fields - record props allowed in the response
 */
function cleanResponseData(data, fields) {
    fields = fields !== null && fields !== void 0 ? fields : [];
    var isDataArray = Array.isArray(data);
    var arrayData = isDataArray ? data : [data];
    if (!fields.length) {
        arrayData = arrayData.map(function (record) { return (0, omit_deep_1.omitDeep)(record, EXCLUDED_FIELDS); });
        return (isDataArray ? arrayData : arrayData[0]);
    }
    var fieldsSet = new Set(__spreadArray(__spreadArray([], __read(fields), false), __read(INCLUDED_FIELDS), false));
    fields = __spreadArray([], __read(fieldsSet), false);
    arrayData = arrayData.map(function (record) {
        return (0, utils_1.pickDeep)((0, omit_deep_1.omitDeep)(record, EXCLUDED_FIELDS), fields);
    });
    return (isDataArray ? arrayData : arrayData[0]);
}
exports.cleanResponseData = cleanResponseData;
//# sourceMappingURL=clean-response-data.js.map