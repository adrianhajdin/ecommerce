import type { EntityData, EntityMetadata } from '../typings';
import { Hydrator } from './Hydrator';
import type { EntityFactory } from '../entity/EntityFactory';
type EntityHydrator<T extends object> = (entity: T, data: EntityData<T>, factory: EntityFactory, newEntity: boolean, convertCustomTypes: boolean, schema?: string) => void;
export declare class ObjectHydrator extends Hydrator {
    private readonly hydrators;
    private tmpIndex;
    /**
     * @inheritDoc
     */
    hydrate<T extends object>(entity: T, meta: EntityMetadata<T>, data: EntityData<T>, factory: EntityFactory, type: 'full' | 'reference', newEntity?: boolean, convertCustomTypes?: boolean, schema?: string): void;
    /**
     * @inheritDoc
     */
    hydrateReference<T extends object>(entity: T, meta: EntityMetadata<T>, data: EntityData<T>, factory: EntityFactory, convertCustomTypes?: boolean, schema?: string): void;
    /**
     * @internal Highly performance-sensitive method.
     */
    getEntityHydrator<T extends object>(meta: EntityMetadata<T>, type: 'full' | 'reference'): EntityHydrator<T>;
    private createCollectionItemMapper;
    private wrap;
    private safeKey;
}
export {};
