"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRuleType = void 0;
var utils_1 = require("@medusajs/utils");
var validRuleTypes = Object.values(utils_1.RuleType);
function validateRuleType(ruleType) {
    var underscorizedRuleType = ruleType.split("-").join("_");
    if (!validRuleTypes.includes(underscorizedRuleType)) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Invalid param rule_type (".concat(ruleType, ")"));
    }
}
exports.validateRuleType = validateRuleType;
//# sourceMappingURL=validate-rule-type.js.map