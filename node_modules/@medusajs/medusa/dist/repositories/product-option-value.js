"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOptionValueRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.ProductOptionValueRepository = database_1.dataSource.getRepository(models_1.ProductOptionValue);
exports.default = exports.ProductOptionValueRepository;
//# sourceMappingURL=product-option-value.js.map