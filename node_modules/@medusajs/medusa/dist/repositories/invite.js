"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InviteRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.InviteRepository = database_1.dataSource.getRepository(models_1.Invite);
exports.default = exports.InviteRepository;
//# sourceMappingURL=invite.js.map