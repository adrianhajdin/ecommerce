"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnReasonRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.ReturnReasonRepository = database_1.dataSource.getRepository(models_1.ReturnReason);
exports.default = exports.ReturnReasonRepository;
//# sourceMappingURL=return-reason.js.map