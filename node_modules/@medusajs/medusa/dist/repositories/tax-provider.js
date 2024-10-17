"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxProviderRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.TaxProviderRepository = database_1.dataSource.getRepository(models_1.TaxProvider);
exports.default = exports.TaxProviderRepository;
//# sourceMappingURL=tax-provider.js.map