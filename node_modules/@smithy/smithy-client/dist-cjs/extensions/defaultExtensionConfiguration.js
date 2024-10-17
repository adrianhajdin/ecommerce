"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveDefaultRuntimeConfig = exports.getDefaultClientConfiguration = exports.getDefaultExtensionConfiguration = void 0;
const checksum_1 = require("./checksum");
const retry_1 = require("./retry");
const getDefaultExtensionConfiguration = (runtimeConfig) => {
    return {
        ...(0, checksum_1.getChecksumConfiguration)(runtimeConfig),
        ...(0, retry_1.getRetryConfiguration)(runtimeConfig),
    };
};
exports.getDefaultExtensionConfiguration = getDefaultExtensionConfiguration;
exports.getDefaultClientConfiguration = exports.getDefaultExtensionConfiguration;
const resolveDefaultRuntimeConfig = (config) => {
    return {
        ...(0, checksum_1.resolveChecksumRuntimeConfig)(config),
        ...(0, retry_1.resolveRetryRuntimeConfig)(config),
    };
};
exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;
