"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.ReturnRepository = database_1.dataSource.getRepository(models_1.Return);
exports.default = exports.ReturnRepository;
//# sourceMappingURL=return.js.map