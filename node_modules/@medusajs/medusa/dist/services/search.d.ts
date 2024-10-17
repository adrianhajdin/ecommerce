import { AbstractSearchService } from "@medusajs/utils";
import { EntityManager } from "typeorm";
import { Logger } from "../types/global";
type InjectedDependencies = {
    logger: Logger;
    manager: EntityManager;
};
export default class DefaultSearchService extends AbstractSearchService {
    isDefault: boolean;
    protected readonly logger_: Logger;
    protected readonly options_: Record<string, unknown>;
    constructor({ logger, manager }: InjectedDependencies, options: any);
    createIndex(indexName: string, options: unknown): Promise<void>;
    getIndex(indexName: string): Promise<void>;
    addDocuments(indexName: string, documents: unknown, type: string): Promise<void>;
    replaceDocuments(indexName: string, documents: unknown, type: string): Promise<void>;
    deleteDocument(indexName: string, document_id: string | number): Promise<void>;
    deleteAllDocuments(indexName: string): Promise<void>;
    search(indexName: string, query: unknown, options: unknown): Promise<{
        hits: unknown[];
    }>;
    updateSettings(indexName: string, settings: unknown): Promise<void>;
}
export {};
