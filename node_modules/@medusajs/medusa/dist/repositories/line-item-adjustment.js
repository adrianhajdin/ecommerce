"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineItemAdjustmentRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.LineItemAdjustmentRepository = database_1.dataSource.getRepository(models_1.LineItemAdjustment);
exports.default = exports.LineItemAdjustmentRepository;
//# sourceMappingURL=line-item-adjustment.js.map