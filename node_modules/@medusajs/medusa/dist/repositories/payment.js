"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.PaymentRepository = database_1.dataSource.getRepository(models_1.Payment);
exports.default = exports.PaymentRepository;
//# sourceMappingURL=payment.js.map