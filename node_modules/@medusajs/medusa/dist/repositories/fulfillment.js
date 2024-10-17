"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.FulfillmentRepository = database_1.dataSource.getRepository(models_1.Fulfillment);
exports.default = exports.FulfillmentRepository;
//# sourceMappingURL=fulfillment.js.map