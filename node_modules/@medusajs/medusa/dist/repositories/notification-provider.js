"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationProviderRepository = void 0;
var notification_provider_1 = require("../models/notification-provider");
var database_1 = require("../loaders/database");
exports.NotificationProviderRepository = database_1.dataSource.getRepository(notification_provider_1.NotificationProvider);
exports.default = exports.NotificationProviderRepository;
//# sourceMappingURL=notification-provider.js.map