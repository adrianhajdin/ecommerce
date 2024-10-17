"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimRepository = void 0;
var claim_order_1 = require("../models/claim-order");
var database_1 = require("../loaders/database");
exports.ClaimRepository = database_1.dataSource.getRepository(claim_order_1.ClaimOrder);
exports.default = exports.ClaimRepository;
//# sourceMappingURL=claim.js.map