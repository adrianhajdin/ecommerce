"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OauthRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.OauthRepository = database_1.dataSource.getRepository(models_1.Oauth);
exports.default = exports.OauthRepository;
//# sourceMappingURL=oauth.js.map