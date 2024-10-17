"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryRepository = void 0;
var country_1 = require("../models/country");
var database_1 = require("../loaders/database");
exports.CountryRepository = database_1.dataSource.getRepository(country_1.Country);
exports.default = exports.CountryRepository;
//# sourceMappingURL=country.js.map