import { isSome } from './helpers.js';
export function mergeDeep(sources, respectPrototype = false, respectArrays = false, respectArrayLength = false) {
    if (respectArrays && respectArrayLength) {
        let expectedLength;
        const areArraysInTheSameLength = sources.every(source => {
            if (Array.isArray(source)) {
                if (expectedLength === undefined) {
                    expectedLength = source.length;
                    return true;
                }
                else if (expectedLength === source.length) {
                    return true;
                }
            }
            return false;
        });
        if (areArraysInTheSameLength) {
            return new Array(expectedLength).fill(null).map((_, index) => mergeDeep(sources.map(source => source[index]), respectPrototype, respectArrays, respectArrayLength));
        }
    }
    const output = {};
    if (respectPrototype) {
        Object.setPrototypeOf(output, Object.create(Object.getPrototypeOf(sources[0])));
    }
    for (const source of sources) {
        if (isObject(source)) {
            if (respectPrototype) {
                const outputPrototype = Object.getPrototypeOf(output);
                const sourcePrototype = Object.getPrototypeOf(source);
                if (sourcePrototype) {
                    for (const key of Object.getOwnPropertyNames(sourcePrototype)) {
                        const descriptor = Object.getOwnPropertyDescriptor(sourcePrototype, key);
                        if (isSome(descriptor)) {
                            Object.defineProperty(outputPrototype, key, descriptor);
                        }
                    }
                }
            }
            for (const key in source) {
                if (isObject(source[key])) {
                    if (!(key in output)) {
                        Object.assign(output, { [key]: source[key] });
                    }
                    else {
                        output[key] = mergeDeep([output[key], source[key]], respectPrototype, respectArrays, respectArrayLength);
                    }
                }
                else if (respectArrays && Array.isArray(output[key])) {
                    if (Array.isArray(source[key])) {
                        if (respectArrayLength && output[key].length === source[key].length) {
                            output[key] = mergeDeep([output[key], source[key]], respectPrototype, respectArrays, respectArrayLength);
                        }
                        else {
                            output[key].push(...source[key]);
                        }
                    }
                    else {
                        output[key].push(source[key]);
                    }
                }
                else {
                    Object.assign(output, { [key]: source[key] });
                }
            }
        }
    }
    return output;
}
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
