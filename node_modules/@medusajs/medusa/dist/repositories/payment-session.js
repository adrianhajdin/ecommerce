"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSessionRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.PaymentSessionRepository = database_1.dataSource.getRepository(models_1.PaymentSession);
exports.default = exports.PaymentSessionRepository;
//# sourceMappingURL=payment-session.js.map