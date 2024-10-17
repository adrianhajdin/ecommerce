import { EntityManager } from "typeorm";
import { DeepPartial } from "typeorm/common/DeepPartial";
import { FlagRouter } from "@medusajs/utils";
import { TransactionBaseService } from "../interfaces";
import { LineItem, LineItemTaxLine } from "../models";
import { CartRepository } from "../repositories/cart";
import { LineItemRepository } from "../repositories/line-item";
import { LineItemTaxLineRepository } from "../repositories/line-item-tax-line";
import { FindConfig, Selector } from "../types/common";
import { GenerateInputData, GenerateLineItemContext } from "../types/line-item";
import { ProductVariantPricing } from "../types/pricing";
import { PricingService, ProductService, ProductVariantService, RegionService, TaxProviderService } from "./index";
import LineItemAdjustmentService from "./line-item-adjustment";
type InjectedDependencies = {
    manager: EntityManager;
    lineItemRepository: typeof LineItemRepository;
    lineItemTaxLineRepository: typeof LineItemTaxLineRepository;
    cartRepository: typeof CartRepository;
    productVariantService: ProductVariantService;
    productService: ProductService;
    pricingService: PricingService;
    regionService: RegionService;
    lineItemAdjustmentService: LineItemAdjustmentService;
    taxProviderService: TaxProviderService;
    featureFlagRouter: FlagRouter;
};
declare class LineItemService extends TransactionBaseService {
    protected readonly lineItemRepository_: typeof LineItemRepository;
    protected readonly itemTaxLineRepo_: typeof LineItemTaxLineRepository;
    protected readonly cartRepository_: typeof CartRepository;
    protected readonly productVariantService_: ProductVariantService;
    protected readonly productService_: ProductService;
    protected readonly pricingService_: PricingService;
    protected readonly regionService_: RegionService;
    protected readonly featureFlagRouter_: FlagRouter;
    protected readonly lineItemAdjustmentService_: LineItemAdjustmentService;
    protected readonly taxProviderService_: TaxProviderService;
    constructor({ lineItemRepository, lineItemTaxLineRepository, productVariantService, productService, pricingService, regionService, cartRepository, lineItemAdjustmentService, taxProviderService, featureFlagRouter, }: InjectedDependencies);
    list(selector: Selector<LineItem>, config?: FindConfig<LineItem>): Promise<LineItem[]>;
    /**
     * Retrieves a line item by its id.
     * @param id - the id of the line item to retrieve
     * @param config - the config to be used at query building
     * @return the line item
     */
    retrieve(id: string, config?: {}): Promise<LineItem | never>;
    /**
     * Creates return line items for a given cart based on the return items in a
     * return.
     * @param returnId - the id to generate return items from.
     * @param cartId - the cart to assign the return line items to.
     * @return the created line items
     */
    createReturnLines(returnId: string, cartId: string): Promise<LineItem[]>;
    /**
     * Generate a single or multiple line item without persisting the data into the db
     * @param variantIdOrData
     * @param regionIdOrContext
     * @param quantity
     * @param context
     */
    generate<T = string | GenerateInputData | GenerateInputData[], TResult = T extends string ? LineItem : T extends LineItem ? LineItem : LineItem[]>(variantIdOrData: T, regionIdOrContext: T extends string ? string : GenerateLineItemContext, quantity?: number, context?: GenerateLineItemContext): Promise<TResult>;
    protected generateLineItem(variant: {
        id: string;
        title: string;
        product_id: string;
        product: {
            title: string;
            thumbnail: string | null;
            discountable: boolean;
            is_giftcard: boolean;
        };
    }, quantity: number, context: GenerateLineItemContext & {
        variantPricing: ProductVariantPricing;
    }): Promise<LineItem>;
    /**
     * Create a line item
     * @param data - the line item object to create
     * @return the created line item
     */
    create<T = LineItem | LineItem[], TResult = T extends LineItem[] ? LineItem[] : LineItem>(data: T): Promise<TResult>;
    /**
     * Updates a line item
     * @param idOrSelector - the id or selector of the line item(s) to update
     * @param data - the properties to update the line item(s)
     * @return the updated line item(s)
     */
    update(idOrSelector: string | Selector<LineItem>, data: Partial<LineItem>): Promise<LineItem[]>;
    delete(ids: string[]): Promise<LineItem[]>;
    delete(id: string): Promise<LineItem | void>;
    /**
     * @deprecated no the cascade on the entity takes care of it
     * Deletes a line item with the tax lines.
     * @param id - the id of the line item to delete
     * @return the result of the delete operation
     */
    deleteWithTaxLines(id: string): Promise<LineItem | void>;
    /**
     * Create a line item tax line.
     * @param args - tax line partial passed to the repo create method
     * @return a new line item tax line
     */
    createTaxLine(args: DeepPartial<LineItemTaxLine>): LineItemTaxLine;
    cloneTo(ids: string | string[], data?: DeepPartial<LineItem>, options?: {
        setOriginalLineItemId?: boolean;
    }): Promise<LineItem[]>;
    protected validateGenerateArguments<T = string | GenerateInputData | GenerateInputData[], TResult = T extends string ? LineItem : T extends LineItem ? LineItem : LineItem[]>(variantIdOrData: string | T, regionIdOrContext: T extends string ? string : GenerateLineItemContext, quantity?: number): void | never;
}
export default LineItemService;
