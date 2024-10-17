import { DeleteResult, FindManyOptions, SelectQueryBuilder } from "typeorm";
import { ProductTaxRate, ProductTypeTaxRate, ShippingTaxRate, TaxRate } from "../models";
import { TaxRateListByConfig } from "../types/tax-rate";
export declare const TaxRateRepository: import("typeorm").Repository<TaxRate> & {
    getFindQueryBuilder(findOptions: FindManyOptions<TaxRate>): SelectQueryBuilder<TaxRate>;
    findWithResolution(findOptions: FindManyOptions<TaxRate>): Promise<TaxRate[]>;
    findOneWithResolution(findOptions: FindManyOptions<TaxRate>): Promise<TaxRate | null>;
    findAndCountWithResolution(findOptions: FindManyOptions<TaxRate>): Promise<[TaxRate[], number]>;
    applyResolutionsToQueryBuilder(qb: SelectQueryBuilder<TaxRate>, resolverFields: string[]): SelectQueryBuilder<TaxRate>;
    removeFromProduct(id: string, productIds: string[]): Promise<DeleteResult>;
    addToProduct(id: string, productIds: string[], overrideExisting?: boolean): Promise<ProductTaxRate[]>;
    removeFromProductType(id: string, productTypeIds: string[]): Promise<DeleteResult>;
    addToProductType(id: string, productTypeIds: string[], overrideExisting?: boolean): Promise<ProductTypeTaxRate[]>;
    removeFromShippingOption(id: string, optionIds: string[]): Promise<DeleteResult>;
    addToShippingOption(id: string, optionIds: string[], overrideExisting?: boolean): Promise<ShippingTaxRate[]>;
    listByProduct(productId: string, config: TaxRateListByConfig): Promise<TaxRate[]>;
    listByShippingOption(optionId: string): Promise<TaxRate[]>;
};
export default TaxRateRepository;
