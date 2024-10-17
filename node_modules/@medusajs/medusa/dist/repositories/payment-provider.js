"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentProviderRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.PaymentProviderRepository = database_1.dataSource.getRepository(models_1.PaymentProvider);
exports.default = exports.PaymentProviderRepository;
//# sourceMappingURL=payment-provider.js.map