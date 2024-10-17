"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveRetryRuntimeConfig = exports.getRetryConfiguration = void 0;
const getRetryConfiguration = (runtimeConfig) => {
    let _retryStrategy = runtimeConfig.retryStrategy;
    return {
        setRetryStrategy(retryStrategy) {
            _retryStrategy = retryStrategy;
        },
        retryStrategy() {
            return _retryStrategy;
        },
    };
};
exports.getRetryConfiguration = getRetryConfiguration;
const resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
    const runtimeConfig = {};
    runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
    return runtimeConfig;
};
exports.resolveRetryRuntimeConfig = resolveRetryRuntimeConfig;
