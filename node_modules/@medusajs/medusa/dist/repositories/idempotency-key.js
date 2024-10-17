"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdempotencyKeyRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.IdempotencyKeyRepository = database_1.dataSource.getRepository(models_1.IdempotencyKey);
exports.default = exports.IdempotencyKeyRepository;
//# sourceMappingURL=idempotency-key.js.map