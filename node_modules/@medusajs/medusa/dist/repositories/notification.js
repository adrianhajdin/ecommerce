"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.NotificationRepository = database_1.dataSource.getRepository(models_1.Notification);
exports.default = exports.NotificationRepository;
//# sourceMappingURL=notification.js.map