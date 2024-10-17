import { FlagRouter } from "@medusajs/utils";
import { EntityManager } from "typeorm";
import { AbstractBatchJobStrategy, IFileService } from "../../../interfaces";
import { BatchJobService, ProductService } from "../../../services";
import { CreateBatchJobInput } from "../../../types/batch-job";
import { DynamicProductExportDescriptor, ProductExportBatchJob, ProductExportInjectedDependencies } from "./types";
export default class ProductExportStrategy extends AbstractBatchJobStrategy {
    static identifier: string;
    static batchType: string;
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    protected readonly batchJobService_: BatchJobService;
    protected readonly productService_: ProductService;
    protected readonly fileService_: IFileService;
    protected readonly featureFlagRouter_: FlagRouter;
    protected readonly remoteQuery_: any;
    protected readonly defaultRelations_: string[];
    protected readonly columnsDefinition: {
        [x: string]: {
            name: string;
            importDescriptor?: import("./types").ProductImportDescriptor | undefined;
            exportDescriptor?: DynamicProductExportDescriptor | import("./types").ProductExportDescriptor | undefined;
        };
    };
    protected readonly salesChannelsColumnsDefinition: {
        [x: string]: {
            name: string;
            importDescriptor?: import("./types").ProductImportDescriptor | undefined;
            exportDescriptor?: DynamicProductExportDescriptor | import("./types").ProductExportDescriptor | undefined;
        };
    };
    protected readonly productCategoriesColumnDefinitions: {
        [x: string]: {
            name: string;
            importDescriptor?: import("./types").ProductImportDescriptor | undefined;
            exportDescriptor?: DynamicProductExportDescriptor | import("./types").ProductExportDescriptor | undefined;
        };
    };
    private readonly NEWLINE_;
    private readonly DELIMITER_;
    private readonly DEFAULT_LIMIT;
    constructor({ manager, batchJobService, productService, fileService, featureFlagRouter, remoteQuery, }: ProductExportInjectedDependencies);
    buildTemplate(): Promise<string>;
    prepareBatchJobForProcessing(batchJob: CreateBatchJobInput, req: Express.Request): Promise<CreateBatchJobInput>;
    preProcessBatchJob(batchJobId: string): Promise<void>;
    processJob(batchJobId: string): Promise<void>;
    buildHeader(batchJob: ProductExportBatchJob): Promise<string>;
    private appendImagesDescriptors;
    private appendSalesChannelsDescriptors;
    private appendProductCategoriesDescriptors;
    private appendOptionsDescriptors;
    private appendMoneyAmountDescriptors;
    private buildProductVariantLines;
    private onProcessCanceled;
    /**
     * Return the maximum number of each relation that must appears in the export.
     * The number of item of a relation can vary between 0-Infinity and therefore the number of columns
     * that will be added to the export correspond to that number
     * @param products - The main entity to get the relation shape from
     * @return ({
     *   optionColumnCount: number
     *   imageColumnCount: number
     *   salesChannelsColumnCount: number
     *   pricesData: Set<string>
     * })
     * @private
     */
    private getProductRelationsDynamicColumnsShape;
}
