"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftCardTransactionRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.GiftCardTransactionRepository = database_1.dataSource.getRepository(models_1.GiftCardTransaction);
exports.default = exports.GiftCardTransactionRepository;
//# sourceMappingURL=gift-card-transaction.js.map