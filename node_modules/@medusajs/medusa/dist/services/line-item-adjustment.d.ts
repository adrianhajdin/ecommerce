import { EntityManager, FindOperator } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { Cart, LineItem, LineItemAdjustment } from "../models";
import { LineItemAdjustmentRepository } from "../repositories/line-item-adjustment";
import { FindConfig } from "../types/common";
import { FilterableLineItemAdjustmentProps } from "../types/line-item-adjustment";
import { CalculationContextData } from "../types/totals";
import DiscountService from "./discount";
type LineItemAdjustmentServiceProps = {
    manager: EntityManager;
    lineItemAdjustmentRepository: typeof LineItemAdjustmentRepository;
    discountService: DiscountService;
};
type AdjustmentContext = {
    variant: {
        product_id: string;
    };
};
type GeneratedAdjustment = {
    amount: number;
    discount_id: string;
    description: string;
};
/**
 * Provides layer to manipulate line item adjustments.
 */
declare class LineItemAdjustmentService extends TransactionBaseService {
    private readonly lineItemAdjustmentRepo_;
    private readonly discountService;
    constructor({ lineItemAdjustmentRepository, discountService, }: LineItemAdjustmentServiceProps);
    /**
     * Retrieves a line item adjustment by id.
     * @param lineItemAdjustmentId - the id of the line item adjustment to retrieve
     * @param config - the config to retrieve the line item adjustment by
     * @return the line item adjustment.
     */
    retrieve(lineItemAdjustmentId: string, config?: FindConfig<LineItemAdjustment>): Promise<LineItemAdjustment>;
    /**
     * Creates a line item adjustment
     * @param data - the line item adjustment to create
     * @return line item adjustment
     */
    create(data: Partial<LineItemAdjustment>): Promise<LineItemAdjustment>;
    /**
     * Creates a line item adjustment
     * @param id - the line item adjustment id to update
     * @param data - the line item adjustment to create
     * @return line item adjustment
     */
    update(id: string, data: Partial<LineItemAdjustment>): Promise<LineItemAdjustment>;
    /**
     * Lists line item adjustments
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    list(selector?: FilterableLineItemAdjustmentProps, config?: FindConfig<LineItemAdjustment>): Promise<LineItemAdjustment[]>;
    /**
     * Deletes line item adjustments matching a selector
     * @param selectorOrIds - the query object for find or the line item adjustment id
     * @return the result of the delete operation
     */
    delete(selectorOrIds: string | string[] | (FilterableLineItemAdjustmentProps & {
        discount_id?: FindOperator<string | null>;
    })): Promise<void>;
    /**
     * Creates adjustment for a line item
     * @param calculationContextData - the calculationContextData object holding discounts
     * @param generatedLineItem - the line item for which a line item adjustment might be created
     * @param context - the line item for which a line item adjustment might be created
     * @return a line item adjustment or undefined if no adjustment was created
     */
    generateAdjustments(calculationContextData: CalculationContextData, generatedLineItem: LineItem, context: AdjustmentContext): Promise<GeneratedAdjustment[]>;
    /**
     * Creates adjustment for a line item
     * @param cart - the cart object holding discounts
     * @param lineItem - the line item for which a line item adjustment might be created
     * @return a line item adjustment or undefined if no adjustment was created
     */
    createAdjustmentForLineItem(cart: Cart, lineItem: LineItem): Promise<LineItemAdjustment[]>;
    /**
     * Creates adjustment for a line item
     * @param cart - the cart object holding discounts
     * @param lineItem - the line item for which a line item adjustment might be created
     * @return if a lineItem was given, returns a line item adjustment or undefined if no adjustment was created
     * otherwise returns an array of line item adjustments for each line item in the cart
     */
    createAdjustments(cart: Cart, lineItem?: LineItem): Promise<LineItemAdjustment[] | LineItemAdjustment[][]>;
}
export default LineItemAdjustmentService;
