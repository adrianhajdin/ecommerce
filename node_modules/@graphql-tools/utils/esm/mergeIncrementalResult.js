import { dset } from 'dset/merge';
export function mergeIncrementalResult({ incrementalResult, executionResult, }) {
    const path = ['data', ...(incrementalResult.path ?? [])];
    if (incrementalResult.items) {
        for (const item of incrementalResult.items) {
            dset(executionResult, path, item);
            // Increment the last path segment (the array index) to merge the next item at the next index
            path[path.length - 1]++;
        }
    }
    if (incrementalResult.data) {
        dset(executionResult, path, incrementalResult.data);
    }
    if (incrementalResult.errors) {
        executionResult.errors = executionResult.errors || [];
        executionResult.errors.push(...incrementalResult.errors);
    }
    if (incrementalResult.extensions) {
        dset(executionResult, 'extensions', incrementalResult.extensions);
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
