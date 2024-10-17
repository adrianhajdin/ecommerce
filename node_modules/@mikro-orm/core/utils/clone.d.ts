/**
 * Inspired by https://github.com/pvorb/clone but simplified and never tries to
 * clone `EventEmitter`s to get around https://github.com/mikro-orm/mikro-orm/issues/2748
 * @internal
 */
export declare function clone<T>(parent: T, respectCustomCloneMethod?: boolean): T;
