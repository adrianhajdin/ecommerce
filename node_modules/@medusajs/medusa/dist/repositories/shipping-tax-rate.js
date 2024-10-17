"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingTaxRateRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.ShippingTaxRateRepository = database_1.dataSource.getRepository(models_1.ShippingTaxRate);
exports.default = exports.ShippingTaxRateRepository;
//# sourceMappingURL=shipping-tax-rate.js.map