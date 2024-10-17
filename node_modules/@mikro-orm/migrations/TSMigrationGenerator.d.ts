import { MigrationGenerator } from './MigrationGenerator';
export declare class TSMigrationGenerator extends MigrationGenerator {
    /**
     * @inheritDoc
     */
    generateMigrationFile(className: string, diff: {
        up: string[];
        down: string[];
    }): string;
}
