const debugNamesOngoing = new Set();
export function debugTimerStart(name) {
    const debugEnvVar = globalThis.process?.env?.['DEBUG'] || globalThis.DEBUG;
    if (debugEnvVar === '1' || debugEnvVar?.includes(name)) {
        debugNamesOngoing.add(name);
        console.time(name);
    }
}
export function debugTimerEnd(name) {
    if (debugNamesOngoing.has(name)) {
        console.timeEnd(name);
    }
}
