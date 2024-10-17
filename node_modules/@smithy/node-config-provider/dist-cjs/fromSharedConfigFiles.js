"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromSharedConfigFiles = void 0;
const property_provider_1 = require("@smithy/property-provider");
const shared_ini_file_loader_1 = require("@smithy/shared-ini-file-loader");
const fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
    const profile = (0, shared_ini_file_loader_1.getProfileName)(init);
    const { configFile, credentialsFile } = await (0, shared_ini_file_loader_1.loadSharedConfigFiles)(init);
    const profileFromCredentials = credentialsFile[profile] || {};
    const profileFromConfig = configFile[profile] || {};
    const mergedProfile = preferredFile === "config"
        ? { ...profileFromCredentials, ...profileFromConfig }
        : { ...profileFromConfig, ...profileFromCredentials };
    try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === undefined) {
            throw new Error();
        }
        return configValue;
    }
    catch (e) {
        throw new property_provider_1.CredentialsProviderError(e.message || `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`);
    }
};
exports.fromSharedConfigFiles = fromSharedConfigFiles;
