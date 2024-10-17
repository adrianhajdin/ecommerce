"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishableApiKeyRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
// eslint-disable-next-line max-len
exports.PublishableApiKeyRepository = database_1.dataSource.getRepository(models_1.PublishableApiKey);
exports.default = exports.PublishableApiKeyRepository;
//# sourceMappingURL=publishable-api-key.js.map