import type { AnyEntity, EntityMetadata } from '../typings';
export declare class IdentityMap {
    private readonly registry;
    store<T>(item: T): void;
    delete<T>(item: T): void;
    getByHash<T>(meta: EntityMetadata<T>, hash: string): T | undefined;
    getStore<T>(meta: EntityMetadata<T>): Map<string, T>;
    clear(): void;
    values(): AnyEntity[];
    [Symbol.iterator](): IterableIterator<AnyEntity>;
    keys(): string[];
    /**
     * For back compatibility only.
     */
    get<T>(hash: string): T | undefined;
    private getPkHash;
}
