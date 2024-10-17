"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveChecksumRuntimeConfig = exports.getChecksumConfiguration = exports.AlgorithmId = void 0;
const types_1 = require("@smithy/types");
Object.defineProperty(exports, "AlgorithmId", { enumerable: true, get: function () { return types_1.AlgorithmId; } });
const getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    for (const id in types_1.AlgorithmId) {
        const algorithmId = types_1.AlgorithmId[id];
        if (runtimeConfig[algorithmId] === undefined) {
            continue;
        }
        checksumAlgorithms.push({
            algorithmId: () => algorithmId,
            checksumConstructor: () => runtimeConfig[algorithmId],
        });
    }
    return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
            this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
            return this._checksumAlgorithms;
        },
    };
};
exports.getChecksumConfiguration = getChecksumConfiguration;
const resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
};
exports.resolveChecksumRuntimeConfig = resolveChecksumRuntimeConfig;
