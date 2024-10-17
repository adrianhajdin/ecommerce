"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShippingMethodRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.ShippingMethodRepository = database_1.dataSource.getRepository(models_1.ShippingMethod);
exports.default = exports.ShippingMethodRepository;
//# sourceMappingURL=shipping-method.js.map