"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingOptionRequirementRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.ShippingOptionRequirementRepository = database_1.dataSource.getRepository(models_1.ShippingOptionRequirement);
exports.default = exports.ShippingOptionRequirementRepository;
//# sourceMappingURL=shipping-option-requirement.js.map