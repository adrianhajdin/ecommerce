"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClaimImageRepository = void 0;
var claim_image_1 = require("../models/claim-image");
var database_1 = require("../loaders/database");
exports.ClaimImageRepository = database_1.dataSource.getRepository(claim_image_1.ClaimImage);
exports.default = exports.ClaimImageRepository;
//# sourceMappingURL=claim-image.js.map