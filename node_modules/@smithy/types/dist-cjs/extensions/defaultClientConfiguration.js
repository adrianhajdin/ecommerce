"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveDefaultRuntimeConfig = exports.getDefaultClientConfiguration = void 0;
const checksum_1 = require("./checksum");
const getDefaultClientConfiguration = (runtimeConfig) => {
    return {
        ...(0, checksum_1.getChecksumConfiguration)(runtimeConfig),
    };
};
exports.getDefaultClientConfiguration = getDefaultClientConfiguration;
const resolveDefaultRuntimeConfig = (config) => {
    return {
        ...(0, checksum_1.resolveChecksumRuntimeConfig)(config),
    };
};
exports.resolveDefaultRuntimeConfig = resolveDefaultRuntimeConfig;
