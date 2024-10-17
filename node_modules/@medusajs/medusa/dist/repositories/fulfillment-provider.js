"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentProviderRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.FulfillmentProviderRepository = database_1.dataSource.getRepository(models_1.FulfillmentProvider);
exports.default = exports.FulfillmentProviderRepository;
//# sourceMappingURL=fulfillment-provider.js.map