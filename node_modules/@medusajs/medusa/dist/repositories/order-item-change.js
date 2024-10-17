"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItemChangeRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.OrderItemChangeRepository = database_1.dataSource.getRepository(models_1.OrderItemChange);
exports.default = exports.OrderItemChangeRepository;
//# sourceMappingURL=order-item-change.js.map