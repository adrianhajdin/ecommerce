import { IEventBusService, ISearchService } from "@medusajs/types";
import { FlagRouter } from "@medusajs/utils";
import { Product } from "../models";
import ProductService from "../services/product";
type InjectedDependencies = {
    eventBusService: IEventBusService;
    searchService: ISearchService;
    productService: ProductService;
    featureFlagRouter: FlagRouter;
};
declare class SearchIndexingSubscriber {
    private readonly eventBusService_;
    private readonly searchService_;
    private readonly productService_;
    private readonly featureFlagRouter_;
    constructor({ eventBusService, searchService, productService, featureFlagRouter, }: InjectedDependencies);
    indexDocuments: () => Promise<void>;
    protected retrieveNextProducts(lastSeenId: string, take: number): Promise<Product[]>;
}
export default SearchIndexingSubscriber;
