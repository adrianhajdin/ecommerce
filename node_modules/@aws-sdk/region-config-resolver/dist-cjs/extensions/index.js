"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAwsRegionExtensionConfiguration = exports.getAwsRegionExtensionConfiguration = void 0;
const getAwsRegionExtensionConfiguration = (runtimeConfig) => {
    let runtimeConfigRegion = async () => {
        if (runtimeConfig.region === undefined) {
            throw new Error("Region is missing from runtimeConfig");
        }
        const region = runtimeConfig.region;
        if (typeof region === "string") {
            return region;
        }
        return region();
    };
    return {
        setRegion(region) {
            runtimeConfigRegion = region;
        },
        region() {
            return runtimeConfigRegion;
        },
    };
};
exports.getAwsRegionExtensionConfiguration = getAwsRegionExtensionConfiguration;
const resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
    return {
        region: awsRegionExtensionConfiguration.region(),
    };
};
exports.resolveAwsRegionExtensionConfiguration = resolveAwsRegionExtensionConfiguration;
