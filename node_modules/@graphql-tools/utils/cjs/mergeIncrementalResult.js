"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeIncrementalResult = void 0;
const merge_1 = require("dset/merge");
function mergeIncrementalResult({ incrementalResult, executionResult, }) {
    const path = ['data', ...(incrementalResult.path ?? [])];
    if (incrementalResult.items) {
        for (const item of incrementalResult.items) {
            (0, merge_1.dset)(executionResult, path, item);
            // Increment the last path segment (the array index) to merge the next item at the next index
            path[path.length - 1]++;
        }
    }
    if (incrementalResult.data) {
        (0, merge_1.dset)(executionResult, path, incrementalResult.data);
    }
    if (incrementalResult.errors) {
        executionResult.errors = executionResult.errors || [];
        executionResult.errors.push(...incrementalResult.errors);
    }
    if (incrementalResult.extensions) {
        (0, merge_1.dset)(executionResult, 'extensions', incrementalResult.extensions);
    }
    if (incrementalResult.incremental) {
        incrementalResult.incremental.forEach(incrementalSubResult => {
            mergeIncrementalResult({
                incrementalResult: incrementalSubResult,
                executionResult,
            });
        });
    }
}
exports.mergeIncrementalResult = mergeIncrementalResult;
