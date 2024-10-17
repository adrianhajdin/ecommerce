"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debugTimerEnd = exports.debugTimerStart = void 0;
const debugNamesOngoing = new Set();
function debugTimerStart(name) {
    const debugEnvVar = globalThis.process?.env?.['DEBUG'] || globalThis.DEBUG;
    if (debugEnvVar === '1' || debugEnvVar?.includes(name)) {
        debugNamesOngoing.add(name);
        console.time(name);
    }
}
exports.debugTimerStart = debugTimerStart;
function debugTimerEnd(name) {
    if (debugNamesOngoing.has(name)) {
        console.timeEnd(name);
    }
}
exports.debugTimerEnd = debugTimerEnd;
