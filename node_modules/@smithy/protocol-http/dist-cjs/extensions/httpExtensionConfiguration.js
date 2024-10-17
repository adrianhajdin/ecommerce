"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveHttpHandlerRuntimeConfig = exports.getHttpHandlerExtensionConfiguration = void 0;
const getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
    let httpHandler = runtimeConfig.httpHandler;
    return {
        setHttpHandler(handler) {
            httpHandler = handler;
        },
        httpHandler() {
            return httpHandler;
        },
        updateHttpClientConfig(key, value) {
            httpHandler.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
            return httpHandler.httpHandlerConfigs();
        },
    };
};
exports.getHttpHandlerExtensionConfiguration = getHttpHandlerExtensionConfiguration;
const resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
    return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler(),
    };
};
exports.resolveHttpHandlerRuntimeConfig = resolveHttpHandlerRuntimeConfig;
