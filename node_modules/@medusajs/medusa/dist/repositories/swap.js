"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.SwapRepository = database_1.dataSource.getRepository(models_1.Swap);
exports.default = exports.SwapRepository;
//# sourceMappingURL=swap.js.map