"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountRepository = void 0;
var database_1 = require("../loaders/database");
var models_1 = require("../models");
exports.DiscountRepository = database_1.dataSource.getRepository(models_1.Discount);
exports.default = exports.DiscountRepository;
//# sourceMappingURL=discount.js.map