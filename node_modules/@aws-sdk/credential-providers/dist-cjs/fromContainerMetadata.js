"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromContainerMetadata = void 0;
const credential_provider_imds_1 = require("@smithy/credential-provider-imds");
const fromContainerMetadata = (init) => (0, credential_provider_imds_1.fromContainerMetadata)(init);
exports.fromContainerMetadata = fromContainerMetadata;
