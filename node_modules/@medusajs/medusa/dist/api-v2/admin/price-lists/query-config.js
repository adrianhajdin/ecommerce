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
exports.listPriceListQueryConfig = exports.retrivePriceListQueryConfig = exports.listPriceListPriceQueryConfig = exports.retrivePriceListPriceQueryConfig = exports.adminPriceListRemoteQueryFields = exports.adminPriceListPriceRemoteQueryFields = exports.PriceListRelations = void 0;
var PriceListRelations;
(function (PriceListRelations) {
    PriceListRelations["PRICES"] = "prices";
})(PriceListRelations = exports.PriceListRelations || (exports.PriceListRelations = {}));
exports.adminPriceListPriceRemoteQueryFields = [
    "id",
    "currency_code",
    "amount",
    "min_quantity",
    "max_quantity",
    "created_at",
    "deleted_at",
    "updated_at",
    "price_set.variant.id",
    "price_rules.value",
    "price_rules.rule_type.rule_attribute",
];
exports.adminPriceListRemoteQueryFields = __spreadArray([
    "id",
    "type",
    "description",
    "title",
    "status",
    "starts_at",
    "ends_at",
    "created_at",
    "updated_at",
    "deleted_at",
    "price_list_rules.price_list_rule_values.value",
    "price_list_rules.rule_type.rule_attribute"
], __read(exports.adminPriceListPriceRemoteQueryFields.map(function (field) { return "prices.".concat(field); })), false);
exports.retrivePriceListPriceQueryConfig = {
    defaults: exports.adminPriceListPriceRemoteQueryFields,
    isList: false,
};
exports.listPriceListPriceQueryConfig = __assign(__assign({}, exports.retrivePriceListPriceQueryConfig), { isList: true });
exports.retrivePriceListQueryConfig = {
    defaults: exports.adminPriceListRemoteQueryFields,
    isList: false,
};
exports.listPriceListQueryConfig = __assign(__assign({}, exports.retrivePriceListQueryConfig), { isList: true });
//# sourceMappingURL=query-config.js.map