"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.RegionRepository = database_1.dataSource.getRepository(models_1.Region);
exports.default = exports.RegionRepository;
//# sourceMappingURL=region.js.map