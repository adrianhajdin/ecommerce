"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimTagRepository = void 0;
var claim_tag_1 = require("../models/claim-tag");
var database_1 = require("../loaders/database");
exports.ClaimTagRepository = database_1.dataSource.getRepository(claim_tag_1.ClaimTag);
exports.default = exports.ClaimTagRepository;
//# sourceMappingURL=claim-tag.js.map