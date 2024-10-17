import { MigrationGenerator } from './MigrationGenerator';
export declare class JSMigrationGenerator extends MigrationGenerator {
    /**
     * @inheritDoc
     */
    generateMigrationFile(className: string, diff: {
        up: string[];
        down: string[];
    }): string;
}
