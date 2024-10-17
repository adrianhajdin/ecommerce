import { AbstractBatchJobStrategy, IFileService } from "../../../interfaces";
import { BatchJobService, PriceListService, ProductVariantService, RegionService } from "../../../services";
import { InjectedProps, OperationType, ParsedPriceListImportPrice, PriceListImportCsvSchema, PriceListImportOperation, PriceListImportOperationPrice, TParsedPriceListImportRowData } from "./types";
import { BatchJob } from "../../../models";
import { CreateBatchJobInput } from "../../../types/batch-job";
import CsvParser from "../../../services/csv-parser";
import { EntityManager } from "typeorm";
import { TParsedProductImportRowData } from "../product/types";
declare class PriceListImportStrategy extends AbstractBatchJobStrategy {
    static identifier: string;
    static batchType: string;
    private processedCounter;
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    protected readonly fileService_: IFileService;
    protected readonly regionService_: RegionService;
    protected readonly priceListService_: PriceListService;
    protected readonly batchJobService_: BatchJobService;
    protected readonly productVariantService_: ProductVariantService;
    protected readonly csvParser_: CsvParser<PriceListImportCsvSchema, Record<string, string>, Record<string, string>>;
    constructor({ batchJobService, productVariantService, priceListService, regionService, fileService, manager, }: InjectedProps);
    buildTemplate(): Promise<string>;
    /**
     * Create a description of a row on which the error occurred and throw a Medusa error.
     *
     * @param row - Parsed CSV row data
     * @param errorDescription - Concrete error
     */
    protected static throwDescriptiveError(row: TParsedPriceListImportRowData, errorDescription?: string): never;
    prepareBatchJobForProcessing(batchJob: CreateBatchJobInput, reqContext: any): Promise<CreateBatchJobInput>;
    /**
     * Generate instructions for creation of prices from parsed CSV rows.
     *
     * @param priceListId - the ID of the price list where the prices will be created
     * @param csvData - An array of parsed CSV rows.
     */
    getImportInstructions(priceListId: string, csvData: TParsedPriceListImportRowData[]): Promise<Record<OperationType, PriceListImportOperation[]>>;
    /**
     * Prepare prices records for insert - find and append region ids to records that contain a region name.
     *
     * @param prices - the parsed prices to prepare
     * @returns the prepared prices. All prices have amount in DB format, currency_code and if applicable region_id.
     */
    protected prepareVariantPrices(prices: ParsedPriceListImportPrice[]): Promise<PriceListImportOperationPrice[]>;
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
    protected downloadImportOpsFile(batchJob: BatchJob, op: OperationType): Promise<TParsedPriceListImportRowData[]>;
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
    private static buildFilename;
}
export default PriceListImportStrategy;
