"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceMetadataV1FallbackError = void 0;
const property_provider_1 = require("@smithy/property-provider");
class InstanceMetadataV1FallbackError extends property_provider_1.CredentialsProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "InstanceMetadataV1FallbackError";
        Object.setPrototypeOf(this, InstanceMetadataV1FallbackError.prototype);
    }
}
exports.InstanceMetadataV1FallbackError = InstanceMetadataV1FallbackError;
