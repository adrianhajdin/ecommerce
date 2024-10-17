import type { MaybePromise } from './executor.js';
/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */
export declare function mapAsyncIterator<T, U>(iterator: AsyncIterable<T> | AsyncIterator<T>, onNext: (value: T) => MaybePromise<U>, onError?: any, onEnd?: () => MaybePromise<void>): AsyncIterableIterator<U>;
