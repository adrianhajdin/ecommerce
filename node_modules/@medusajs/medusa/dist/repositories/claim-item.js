"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimItemRepository = void 0;
var claim_item_1 = require("../models/claim-item");
var database_1 = require("../loaders/database");
exports.ClaimItemRepository = database_1.dataSource.getRepository(claim_item_1.ClaimItem);
exports.default = exports.ClaimItemRepository;
//# sourceMappingURL=claim-item.js.map