"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOptionRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.ProductOptionRepository = database_1.dataSource.getRepository(models_1.ProductOption);
exports.default = exports.ProductOptionRepository;
//# sourceMappingURL=product-option.js.map