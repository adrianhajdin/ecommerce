"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountRuleRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.DiscountRuleRepository = database_1.dataSource.getRepository(models_1.DiscountRule);
exports.default = exports.DiscountRuleRepository;
//# sourceMappingURL=discount-rule.js.map