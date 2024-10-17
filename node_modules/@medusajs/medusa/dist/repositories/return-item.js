"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnItemRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.ReturnItemRepository = database_1.dataSource.getRepository(models_1.ReturnItem);
exports.default = exports.ReturnItemRepository;
//# sourceMappingURL=return-item.js.map