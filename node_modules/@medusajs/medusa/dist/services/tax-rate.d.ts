import { TransactionBaseService } from "../interfaces";
import { ProductTaxRate, ProductTypeTaxRate, ShippingTaxRate, TaxRate } from "../models";
import { TaxRateRepository } from "../repositories/tax-rate";
import ProductService from "../services/product";
import ProductTypeService from "../services/product-type";
import ShippingOptionService from "../services/shipping-option";
import { FindConfig } from "../types/common";
import { CreateTaxRateInput, FilterableTaxRateProps, TaxRateListByConfig, UpdateTaxRateInput } from "../types/tax-rate";
declare class TaxRateService extends TransactionBaseService {
    protected readonly productService_: ProductService;
    protected readonly productTypeService_: ProductTypeService;
    protected readonly shippingOptionService_: ShippingOptionService;
    protected readonly taxRateRepository_: typeof TaxRateRepository;
    constructor({ productService, productTypeService, shippingOptionService, taxRateRepository, }: {
        productService: any;
        productTypeService: any;
        shippingOptionService: any;
        taxRateRepository: any;
    });
    list(selector: FilterableTaxRateProps, config?: FindConfig<TaxRate>): Promise<TaxRate[]>;
    listAndCount(selector: FilterableTaxRateProps, config?: FindConfig<TaxRate>): Promise<[TaxRate[], number]>;
    retrieve(taxRateId: string, config?: FindConfig<TaxRate>): Promise<TaxRate>;
    create(data: CreateTaxRateInput): Promise<TaxRate>;
    update(id: string, data: UpdateTaxRateInput): Promise<TaxRate>;
    delete(id: string | string[]): Promise<void>;
    removeFromProduct(id: string, productIds: string | string[]): Promise<void>;
    removeFromProductType(id: string, typeIds: string | string[]): Promise<void>;
    removeFromShippingOption(id: string, optionIds: string | string[]): Promise<void>;
    addToProduct(id: string, productIds: string | string[], replace?: boolean): Promise<ProductTaxRate | ProductTaxRate[]>;
    addToProductType(id: string, productTypeIds: string | string[], replace?: boolean): Promise<ProductTypeTaxRate[]>;
    addToShippingOption(id: string, optionIds: string | string[], replace?: boolean): Promise<ShippingTaxRate[]>;
    listByProduct(productId: string, config: TaxRateListByConfig): Promise<TaxRate[]>;
    listByShippingOption(shippingOptionId: string): Promise<TaxRate[]>;
}
export default TaxRateService;
