"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchJobRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.BatchJobRepository = database_1.dataSource.getRepository(models_1.BatchJob);
exports.default = exports.BatchJobRepository;
//# sourceMappingURL=batch-job.js.map