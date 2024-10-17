import { AbstractNamingStrategy } from './AbstractNamingStrategy';
export declare class UnderscoreNamingStrategy extends AbstractNamingStrategy {
    classToTableName(entityName: string): string;
    joinColumnName(propertyName: string): string;
    joinKeyColumnName(entityName: string, referencedColumnName?: string): string;
    joinTableName(sourceEntity: string, targetEntity: string, propertyName: string): string;
    propertyToColumnName(propertyName: string): string;
    referenceColumnName(): string;
    private underscore;
}
