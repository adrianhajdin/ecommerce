"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Worker Thread wrapper for sandboxing
 *
 */
const worker_threads_1 = require("worker_threads");
const main_base_1 = require("./main-base");
(0, main_base_1.default)(async (msg) => worker_threads_1.parentPort.postMessage(msg), worker_threads_1.parentPort);
//# sourceMappingURL=main-worker.js.map