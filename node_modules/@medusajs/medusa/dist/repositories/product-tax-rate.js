"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTaxRateRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.ProductTaxRateRepository = database_1.dataSource.getRepository(models_1.ProductTaxRate);
exports.default = exports.ProductTaxRateRepository;
//# sourceMappingURL=product-tax-rate.js.map