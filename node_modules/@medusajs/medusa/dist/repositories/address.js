"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.AddressRepository = database_1.dataSource.getRepository(models_1.Address);
exports.default = exports.AddressRepository;
//# sourceMappingURL=address.js.map