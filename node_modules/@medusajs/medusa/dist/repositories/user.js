"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.UserRepository = database_1.dataSource.getRepository(models_1.User);
exports.default = exports.UserRepository;
//# sourceMappingURL=user.js.map