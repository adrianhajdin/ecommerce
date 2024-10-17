"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftOrderRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.DraftOrderRepository = database_1.dataSource.getRepository(models_1.DraftOrder);
exports.default = exports.DraftOrderRepository;
//# sourceMappingURL=draft-order.js.map