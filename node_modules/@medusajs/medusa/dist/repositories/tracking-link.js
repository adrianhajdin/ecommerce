"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingLinkRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.TrackingLinkRepository = database_1.dataSource.getRepository(models_1.TrackingLink);
exports.default = exports.TrackingLinkRepository;
//# sourceMappingURL=tracking-link.js.map