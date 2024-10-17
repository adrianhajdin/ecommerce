"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsConfigRepository = void 0;
var analytics_config_1 = require("../models/analytics-config");
var database_1 = require("../loaders/database");
exports.AnalyticsConfigRepository = database_1.dataSource.getRepository(analytics_config_1.AnalyticsConfig);
exports.default = exports.AnalyticsConfigRepository;
//# sourceMappingURL=analytics-config.js.map