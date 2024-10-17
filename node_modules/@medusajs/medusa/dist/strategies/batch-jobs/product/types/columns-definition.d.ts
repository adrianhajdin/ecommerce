import { ProductColumnDefinition, TBuiltProductImportLine, TParsedProductImportRowData } from "./index";
import { CsvSchema } from "../../../../interfaces/csv-parser";
export declare const productColumnsDefinition: ProductColumnDefinition;
export declare const productSalesChannelColumnsDefinition: ProductColumnDefinition;
export declare const productCategoriesColumnsDefinition: ProductColumnDefinition;
export declare const productImportColumnsDefinition: CsvSchema<TParsedProductImportRowData, TBuiltProductImportLine>;
export declare const productImportSalesChannelsColumnsDefinition: CsvSchema<TParsedProductImportRowData, TBuiltProductImportLine>;
export declare const productImportProductCategoriesColumnsDefinition: CsvSchema<TParsedProductImportRowData, TBuiltProductImportLine>;
