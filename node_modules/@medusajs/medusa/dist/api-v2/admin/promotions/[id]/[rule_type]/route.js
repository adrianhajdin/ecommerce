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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
var utils_1 = require("@medusajs/utils");
var utils_2 = require("../../utils");
var GET = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, ruleType, remoteQuery, dasherizedRuleType, queryObject, _b, promotion, ruleAttributes, promotionRules, transformedRules, disguisedRules, requiredRules, disguisedRules_1, disguisedRules_1_1, disguisedRule, value, values, _loop_1, promotionRules_1, promotionRules_1_1, promotionRule, e_1_1, requiredRules_1, requiredRules_1_1, requiredRule;
    var e_2, _c, e_1, _d, e_3, _e;
    var _f, _g, _h, _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = req.params, id = _a.id, ruleType = _a.rule_type;
                remoteQuery = req.scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
                (0, utils_2.validateRuleType)(ruleType);
                dasherizedRuleType = ruleType.split("-").join("_");
                queryObject = (0, utils_1.remoteQueryObjectFromString)({
                    entryPoint: "promotion",
                    variables: { id: id },
                    fields: req.remoteQueryConfig.fields,
                });
                return [4 /*yield*/, remoteQuery(queryObject)];
            case 1:
                _b = __read.apply(void 0, [_k.sent(), 1]), promotion = _b[0];
                ruleAttributes = utils_2.ruleAttributesMap[ruleType];
                promotionRules = [];
                if (dasherizedRuleType === utils_1.RuleType.RULES) {
                    promotionRules.push.apply(promotionRules, __spreadArray([], __read(((promotion === null || promotion === void 0 ? void 0 : promotion.rules) || [])), false));
                }
                else if (dasherizedRuleType === utils_1.RuleType.TARGET_RULES) {
                    promotionRules.push.apply(promotionRules, __spreadArray([], __read((((_f = promotion === null || promotion === void 0 ? void 0 : promotion.application_method) === null || _f === void 0 ? void 0 : _f.target_rules) || [])), false));
                }
                else if (dasherizedRuleType === utils_1.RuleType.BUY_RULES) {
                    promotionRules.push.apply(promotionRules, __spreadArray([], __read((((_g = promotion === null || promotion === void 0 ? void 0 : promotion.application_method) === null || _g === void 0 ? void 0 : _g.buy_rules) || [])), false));
                }
                transformedRules = [];
                disguisedRules = ruleAttributes.filter(function (attr) { return !!attr.disguised; });
                requiredRules = ruleAttributes.filter(function (attr) { return !!attr.required; });
                try {
                    for (disguisedRules_1 = __values(disguisedRules), disguisedRules_1_1 = disguisedRules_1.next(); !disguisedRules_1_1.done; disguisedRules_1_1 = disguisedRules_1.next()) {
                        disguisedRule = disguisedRules_1_1.value;
                        value = (_h = promotion === null || promotion === void 0 ? void 0 : promotion.application_method) === null || _h === void 0 ? void 0 : _h[disguisedRule.id];
                        values = value ? [{ label: value, value: value }] : [];
                        transformedRules.push({
                            id: undefined,
                            attribute: disguisedRule.id,
                            attribute_label: disguisedRule.label,
                            field_type: disguisedRule.field_type,
                            operator: utils_1.RuleOperator.EQ,
                            operator_label: utils_2.operatorsMap[utils_1.RuleOperator.EQ].label,
                            values: values,
                            disguised: true,
                            required: true,
                        });
                        continue;
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (disguisedRules_1_1 && !disguisedRules_1_1.done && (_c = disguisedRules_1.return)) _c.call(disguisedRules_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                _loop_1 = function (promotionRule) {
                    var currentRuleAttribute, queryConfig, rows, valueLabelMap;
                    var _l;
                    return __generator(this, function (_m) {
                        switch (_m.label) {
                            case 0:
                                currentRuleAttribute = ruleAttributes.find(function (attr) { return attr.value === promotionRule.attribute; });
                                if (!currentRuleAttribute) {
                                    return [2 /*return*/, "continue"];
                                }
                                queryConfig = utils_2.ruleQueryConfigurations[currentRuleAttribute.id];
                                return [4 /*yield*/, remoteQuery((0, utils_1.remoteQueryObjectFromString)({
                                        entryPoint: queryConfig.entryPoint,
                                        variables: {
                                            filters: (_l = {},
                                                _l[queryConfig.valueAttr] = promotionRule.values.map(function (v) { return v.value; }),
                                                _l),
                                        },
                                        fields: [queryConfig.labelAttr, queryConfig.valueAttr],
                                    }))];
                            case 1:
                                rows = _m.sent();
                                valueLabelMap = new Map(rows.map(function (row) { return [
                                    row[queryConfig.valueAttr],
                                    row[queryConfig.labelAttr],
                                ]; }));
                                promotionRule.values = promotionRule.values.map(function (value) { return ({
                                    value: value.value,
                                    label: valueLabelMap.get(value.value) || value.value,
                                }); });
                                transformedRules.push(__assign(__assign({}, promotionRule), { attribute_label: currentRuleAttribute.label, field_type: currentRuleAttribute.field_type, operator_label: ((_j = utils_2.operatorsMap[promotionRule.operator]) === null || _j === void 0 ? void 0 : _j.label) || promotionRule.operator, disguised: false, required: currentRuleAttribute.required || false }));
                                return [2 /*return*/];
                        }
                    });
                };
                _k.label = 2;
            case 2:
                _k.trys.push([2, 7, 8, 9]);
                promotionRules_1 = __values(promotionRules), promotionRules_1_1 = promotionRules_1.next();
                _k.label = 3;
            case 3:
                if (!!promotionRules_1_1.done) return [3 /*break*/, 6];
                promotionRule = promotionRules_1_1.value;
                return [5 /*yield**/, _loop_1(promotionRule)];
            case 4:
                _k.sent();
                _k.label = 5;
            case 5:
                promotionRules_1_1 = promotionRules_1.next();
                return [3 /*break*/, 3];
            case 6: return [3 /*break*/, 9];
            case 7:
                e_1_1 = _k.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 9];
            case 8:
                try {
                    if (promotionRules_1_1 && !promotionRules_1_1.done && (_d = promotionRules_1.return)) _d.call(promotionRules_1);
                }
                finally { if (e_1) throw e_1.error; }
                return [7 /*endfinally*/];
            case 9:
                if (requiredRules.length && !transformedRules.length) {
                    try {
                        for (requiredRules_1 = __values(requiredRules), requiredRules_1_1 = requiredRules_1.next(); !requiredRules_1_1.done; requiredRules_1_1 = requiredRules_1.next()) {
                            requiredRule = requiredRules_1_1.value;
                            transformedRules.push({
                                id: undefined,
                                attribute: requiredRule.value,
                                attribute_label: requiredRule.label,
                                operator: utils_1.RuleOperator.EQ,
                                field_type: requiredRule.field_type,
                                operator_label: utils_2.operatorsMap[utils_1.RuleOperator.EQ].label,
                                values: [],
                                disguised: true,
                                required: true,
                            });
                            continue;
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (requiredRules_1_1 && !requiredRules_1_1.done && (_e = requiredRules_1.return)) _e.call(requiredRules_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                res.json({
                    rules: transformedRules,
                });
                return [2 /*return*/];
        }
    });
}); };
exports.GET = GET;
//# sourceMappingURL=route.js.map