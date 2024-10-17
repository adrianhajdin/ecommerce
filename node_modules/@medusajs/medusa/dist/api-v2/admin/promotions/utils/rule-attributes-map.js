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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruleAttributesMap = exports.disguisedRulesMap = exports.DisguisedRule = void 0;
var DisguisedRule;
(function (DisguisedRule) {
    DisguisedRule["APPLY_TO_QUANTITY"] = "apply_to_quantity";
    DisguisedRule["BUY_RULES_MIN_QUANTITY"] = "buy_rules_min_quantity";
})(DisguisedRule = exports.DisguisedRule || (exports.DisguisedRule = {}));
exports.disguisedRulesMap = (_a = {},
    _a[DisguisedRule.APPLY_TO_QUANTITY] = {
        relation: "application_method",
    },
    _a[DisguisedRule.BUY_RULES_MIN_QUANTITY] = {
        relation: "application_method",
    },
    _a);
var ruleAttributes = [
    {
        id: "currency",
        value: "currency_code",
        label: "Currency code",
        required: true,
    },
    {
        id: "customer_group",
        value: "customer_group.id",
        label: "Customer Group",
        required: false,
    },
    {
        id: "region",
        value: "region.id",
        label: "Region",
        required: false,
    },
    {
        id: "country",
        value: "shipping_address.country_code",
        label: "Country",
        required: false,
    },
    {
        id: "sales_channel",
        value: "sales_channel.id",
        label: "Sales Channel",
        required: false,
    },
];
var commonAttributes = [
    {
        id: "product",
        value: "items.product.id",
        label: "Product",
        required: false,
    },
    {
        id: "product_category",
        value: "items.product.categories.id",
        label: "Product Category",
        required: false,
    },
    {
        id: "product_collection",
        value: "items.product.collection_id",
        label: "Product Collection",
        required: false,
    },
    {
        id: "product_type",
        value: "items.product.type_id",
        label: "Product Type",
        required: false,
    },
    {
        id: "product_tag",
        value: "items.product.tags.id",
        label: "Product Tag",
        required: false,
    },
];
var buyRuleAttributes = __spreadArray([
    {
        id: DisguisedRule.BUY_RULES_MIN_QUANTITY,
        value: DisguisedRule.BUY_RULES_MIN_QUANTITY,
        label: "Minimum quantity of items",
        field_type: "number",
        required: true,
        disguised: true,
    }
], __read(commonAttributes), false);
var targetRuleAttributes = __spreadArray([
    {
        id: DisguisedRule.APPLY_TO_QUANTITY,
        value: DisguisedRule.APPLY_TO_QUANTITY,
        label: "Quantity of items promotion will apply to",
        field_type: "number",
        required: true,
        disguised: true,
    }
], __read(commonAttributes), false);
exports.ruleAttributesMap = {
    rules: ruleAttributes,
    "target-rules": targetRuleAttributes,
    "buy-rules": buyRuleAttributes,
};
//# sourceMappingURL=rule-attributes-map.js.map