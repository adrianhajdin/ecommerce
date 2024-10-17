"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.RefundRepository = database_1.dataSource.getRepository(models_1.Refund);
exports.default = exports.RefundRepository;
//# sourceMappingURL=refund.js.map