/**
 *
 * @param relations relations from which a relation should be removed
 * @param relation relation to be removed
 * @returns tuple containing the new relations and a boolean indicating whether the relation was found in the relations array
 */
export declare const omitRelationIfExists: (relations: string[], relation: string) => [string[], boolean];
