/**
 * Dedicated method to set metadata.
 * @param metadata - the metadata to set
 * @param obj - the entity to apply metadata to.
 * @return resolves to the updated result.
 */
export declare function setMetadata(obj: {
    metadata: Record<string, unknown> | null;
} | null | undefined, metadata: Record<string, unknown>): Record<string, unknown>;
