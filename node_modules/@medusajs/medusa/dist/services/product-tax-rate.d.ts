import { ProductTaxRate } from "../models";
import { ProductTaxRateRepository } from "../repositories/product-tax-rate";
import { FindConfig } from "../types/common";
import { FilterableProductTaxRateProps } from "../types/product-tax-rate";
import { TransactionBaseService } from "../interfaces";
declare class ProductTaxRateService extends TransactionBaseService {
    protected readonly productTaxRateRepository_: typeof ProductTaxRateRepository;
    constructor({ productTaxRateRepository }: {
        productTaxRateRepository: any;
    });
    /**
     * @param selector - the query object for find
     * @param config - query config object for variant retrieval
     * @return the result of the find operation
     */
    list(selector: FilterableProductTaxRateProps, config?: FindConfig<ProductTaxRate>): Promise<ProductTaxRate[]>;
}
export default ProductTaxRateService;
