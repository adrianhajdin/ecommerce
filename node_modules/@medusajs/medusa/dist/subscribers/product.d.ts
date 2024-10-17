import { IEventBusService, ISearchService } from "@medusajs/types";
import { FlagRouter } from "@medusajs/utils";
import ProductService from "../services/product";
type InjectedDependencies = {
    eventBusService: IEventBusService;
    searchService: ISearchService;
    productService: ProductService;
    featureFlagRouter: FlagRouter;
};
declare class ProductSearchSubscriber {
    private readonly eventBusService_;
    private readonly searchService_;
    private readonly productService_;
    private readonly featureFlagRouter_;
    constructor(container: InjectedDependencies);
    handleProductCreation: (data: any) => Promise<void>;
    handleProductUpdate: (data: any) => Promise<void>;
    handleProductDeletion: (data: any) => Promise<void>;
    handleProductVariantChange: (data: any) => Promise<void>;
}
export default ProductSearchSubscriber;
