import { FlagRouter } from "@medusajs/utils";
import { EntityManager } from "typeorm";
import { AbstractBatchJobStrategy, IFileService } from "../../../interfaces";
import { BatchJob } from "../../../models";
import { BatchJobService, ProductCategoryService, ProductCollectionService, ProductService, ProductVariantService, RegionService, SalesChannelService, ShippingProfileService } from "../../../services";
import CsvParser from "../../../services/csv-parser";
import { OperationType, ProductImportCsvSchema, ProductImportInjectedProps, TParsedProductImportRowData } from "./types";
/**
 * Default strategy class used for a batch import of products/variants.
 */
declare class ProductImportStrategy extends AbstractBatchJobStrategy {
    static identifier: string;
    static batchType: string;
    private processedCounter;
    protected readonly featureFlagRouter_: FlagRouter;
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    protected readonly fileService_: IFileService;
    protected readonly regionService_: RegionService;
    protected readonly productService_: ProductService;
    protected readonly batchJobService_: BatchJobService;
    protected readonly productCollectionService_: ProductCollectionService;
    protected readonly salesChannelService_: SalesChannelService;
    protected readonly productVariantService_: ProductVariantService;
    protected readonly shippingProfileService_: ShippingProfileService;
    protected readonly productCategoryService_: ProductCategoryService;
    protected readonly csvParser_: CsvParser<ProductImportCsvSchema, Record<string, string>, Record<string, string>>;
    constructor({ batchJobService, productService, salesChannelService, productVariantService, shippingProfileService, regionService, fileService, productCollectionService, productCategoryService, manager, featureFlagRouter, }: ProductImportInjectedProps);
    buildTemplate(): Promise<string>;
    /**
     * Create a description of a row on which the error occurred and throw a Medusa error.
     *
     * @param row - Parsed CSV row data
     * @param errorDescription - Concrete error
     */
    protected static throwDescriptiveError(row: TParsedProductImportRowData, errorDescription?: string): never;
    /**
     * Generate instructions for update/create of products/variants from parsed CSV rows.
     *
     * @param csvData - An array of parsed CSV rows.
     */
    getImportInstructions(csvData: TParsedProductImportRowData[]): Promise<Record<OperationType, TParsedProductImportRowData[]>>;
    /**
     * Prepare prices records for insert - find and append region ids to records that contain a region name.
     *
     * @param row - An object containing parsed row data.
     */
    protected prepareVariantPrices(row: any): Promise<void>;
    /**
     * A worker method called after a batch job has been created.
     * The method parses a CSV file, generates sets of instructions
     * for processing and stores these instructions to a JSON file
     * which is uploaded to a bucket.
     *
     * @param batchJobId - An id of a job that is being preprocessed.
     */
    preProcessBatchJob(batchJobId: string): Promise<void>;
    /**
     * The main processing method called after a batch job
     * is ready/confirmed for processing.
     *
     * @param batchJobId - An id of a batch job that is being processed.
     */
    processJob(batchJobId: string): Promise<void>;
    /**
     * Create, or retrieve by name, sales channels from the input data.
     *
     * NOTE: Sales channel names provided in the CSV must exist in the DB.
     *       New sales channels will not be created.
     *
     * @param data an array of sales channels partials
     * @return an array of sales channels created or retrieved by name
     */
    private processSalesChannels;
    /**
     * Method retrieves product categories from handles provided in the CSV.
     *
     * @param data array of product category handles
     */
    private processCategories;
    /**
     * Method creates products using `ProductService` and parsed data from a CSV row.
     *
     * @param batchJob - The current batch job being processed.
     */
    private createProducts;
    /**
     * Method updates existing products in the DB using a CSV row data.
     *
     * @param batchJob - The current batch job being processed.
     */
    private updateProducts;
    /**
     * Method creates product variants from a CSV data.
     * Method also handles processing of variant options.
     *
     * @param batchJob - The current batch job being processed.
     */
    private createVariants;
    /**
     * Method updates product variants from a CSV data.
     *
     * @param batchJob - The current batch job being processed.
     */
    private updateVariants;
    /**
     * Extend records used for creating variant options with corresponding product option ids.
     *
     * @param variantOp - Parsed row data form CSV
     * @param productId - id of variant's product
     */
    protected prepareVariantOptions(variantOp: any, productId: string): Promise<void>;
    /**
     * Store import ops JSON file to a bucket.
     *
     * @param batchJobId - An id of the current batch job being processed.
     * @param results - An object containing parsed CSV data.
     */
    protected uploadImportOpsFile(batchJobId: string, results: Record<OperationType, TParsedProductImportRowData[]>): Promise<void>;
    /**
     * Download parsed ops JSON file.
     *
     * @param batchJob - the current batch job being processed
     * @param op - Type of import operation.
     */
    protected downloadImportOpsFile(batchJob: BatchJob, op: OperationType): Promise<TParsedProductImportRowData[]>;
    /**
     * Delete parsed CSV ops files.
     *
     * @param batchJob - the current batch job being processed
     */
    protected deleteOpsFiles(batchJob: BatchJob): Promise<void>;
    /**
     * Update count of processed data in the batch job `result` column
     * and cleanup temp JSON files.
     *
     * @param batchJob - The current batch job being processed.
     */
    private finalize;
    /**
     * Store the progress in the batch job `result` column.
     * Method is called after every update/create operation,
     * but after every `BATCH_SIZE` processed rows info is written to the DB.
     *
     * @param batchJobId - An id of the current batch job being processed.
     */
    private updateProgress;
    private static buildFilename;
}
export default ProductImportStrategy;
