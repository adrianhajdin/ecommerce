"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.StoreRepository = database_1.dataSource.getRepository(models_1.Store);
exports.default = exports.StoreRepository;
//# sourceMappingURL=store.js.map