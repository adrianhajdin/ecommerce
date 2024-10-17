"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapAsyncIterator = void 0;
const jsutils_js_1 = require("./jsutils.js");
/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */
function mapAsyncIterator(iterator, onNext, onError, onEnd) {
    if (Symbol.asyncIterator in iterator) {
        iterator = iterator[Symbol.asyncIterator]();
    }
    let $return;
    let abruptClose;
    let onEndWithValue;
    if (onEnd) {
        onEndWithValue = value => {
            const onEnd$ = onEnd();
            return (0, jsutils_js_1.isPromise)(onEnd$) ? onEnd$.then(() => value) : value;
        };
    }
    if (typeof iterator.return === 'function') {
        $return = iterator.return;
        abruptClose = (error) => {
            const rethrow = () => Promise.reject(error);
            return $return.call(iterator).then(rethrow, rethrow);
        };
    }
    function mapResult(result) {
        if (result.done) {
            return onEndWithValue ? onEndWithValue(result) : result;
        }
        return asyncMapValue(result.value, onNext).then(iteratorResult, abruptClose);
    }
    let mapReject;
    if (onError) {
        // Capture rejectCallback to ensure it cannot be null.
        const reject = onError;
        mapReject = (error) => asyncMapValue(error, reject).then(iteratorResult, abruptClose);
    }
    return {
        next() {
            return iterator.next().then(mapResult, mapReject);
        },
        return() {
            const res$ = $return
                ? $return.call(iterator).then(mapResult, mapReject)
                : Promise.resolve({ value: undefined, done: true });
            return onEndWithValue ? res$.then(onEndWithValue) : res$;
        },
        throw(error) {
            if (typeof iterator.throw === 'function') {
                return iterator.throw(error).then(mapResult, mapReject);
            }
            return Promise.reject(error).catch(abruptClose);
        },
        [Symbol.asyncIterator]() {
            return this;
        },
    };
}
exports.mapAsyncIterator = mapAsyncIterator;
function asyncMapValue(value, callback) {
    return new Promise(resolve => resolve(callback(value)));
}
function iteratorResult(value) {
    return { value, done: false };
}
