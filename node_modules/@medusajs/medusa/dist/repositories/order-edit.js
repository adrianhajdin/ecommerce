"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderEditRepository = void 0;
var order_edit_1 = require("../models/order-edit");
var database_1 = require("../loaders/database");
exports.OrderEditRepository = database_1.dataSource.getRepository(order_edit_1.OrderEdit);
exports.default = exports.OrderEditRepository;
//# sourceMappingURL=order-edit.js.map