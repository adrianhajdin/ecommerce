"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRuleAttribute = void 0;
var utils_1 = require("@medusajs/utils");
var rule_attributes_map_1 = require("./rule-attributes-map");
function validateRuleAttribute(ruleType, ruleAttributeId) {
    var ruleAttributes = rule_attributes_map_1.ruleAttributesMap[ruleType] || [];
    var ruleAttribute = ruleAttributes.find(function (obj) { return obj.id === ruleAttributeId; });
    if (!ruleAttribute) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Invalid rule attribute - ".concat(ruleAttributeId));
    }
}
exports.validateRuleAttribute = validateRuleAttribute;
//# sourceMappingURL=validate-rule-attribute.js.map