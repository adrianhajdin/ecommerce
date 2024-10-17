import { ShippingTaxRate } from "../models";
import { ShippingTaxRateRepository } from "../repositories/shipping-tax-rate";
import { FindConfig } from "../types/common";
import { FilterableShippingTaxRateProps } from "../types/shipping-tax-rate";
import { TransactionBaseService } from "../interfaces";
declare class ShippingTaxRateService extends TransactionBaseService {
    protected readonly shippingTaxRateRepository_: typeof ShippingTaxRateRepository;
    constructor({ shippingTaxRateRepository }: {
        shippingTaxRateRepository: any;
    });
    /**
     * Lists Shipping Tax Rates given a certain query.
     * @param selector - the query object for find
     * @param config - query config object for variant retrieval
     * @return the result of the find operation
     */
    list(selector: FilterableShippingTaxRateProps, config?: FindConfig<ShippingTaxRate>): Promise<ShippingTaxRate[]>;
}
export default ShippingTaxRateService;
