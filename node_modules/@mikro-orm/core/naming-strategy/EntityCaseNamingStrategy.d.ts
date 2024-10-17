import { AbstractNamingStrategy } from './AbstractNamingStrategy';
/**
 * This strategy keeps original entity/property names for table/column.
 */
export declare class EntityCaseNamingStrategy extends AbstractNamingStrategy {
    classToTableName(entityName: string): string;
    joinColumnName(propertyName: string): string;
    joinKeyColumnName(entityName: string, referencedColumnName?: string, composite?: boolean): string;
    joinTableName(sourceEntity: string, targetEntity: string, propertyName: string): string;
    propertyToColumnName(propertyName: string): string;
    referenceColumnName(): string;
}
