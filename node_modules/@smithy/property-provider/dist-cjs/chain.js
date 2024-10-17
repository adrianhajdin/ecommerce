"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chain = void 0;
const ProviderError_1 = require("./ProviderError");
const chain = (...providers) => async () => {
    if (providers.length === 0) {
        throw new ProviderError_1.ProviderError("No providers in chain");
    }
    let lastProviderError;
    for (const provider of providers) {
        try {
            const credentials = await provider();
            return credentials;
        }
        catch (err) {
            lastProviderError = err;
            if (err === null || err === void 0 ? void 0 : err.tryNextLink) {
                continue;
            }
            throw err;
        }
    }
    throw lastProviderError;
};
exports.chain = chain;
