"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.CurrencyRepository = database_1.dataSource.getRepository(models_1.Currency);
exports.default = exports.CurrencyRepository;
//# sourceMappingURL=currency.js.map