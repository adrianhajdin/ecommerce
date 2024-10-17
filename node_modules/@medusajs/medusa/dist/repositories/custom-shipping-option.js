"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomShippingOptionRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.CustomShippingOptionRepository = database_1.dataSource.getRepository(models_1.CustomShippingOption);
exports.default = exports.CustomShippingOptionRepository;
//# sourceMappingURL=custom-shipping-option.js.map