import { LineItem } from "../models/line-item";
import { ReturnItem } from "../models/return-item";
export declare const LineItemRepository: import("typeorm").Repository<LineItem> & {
    /**
     * Finds line items that are to be returned as part of the Return represented
     * by `returnId`. The function joins the associated ReturnItem and the
     * LineItem's TaxLines.
     * @param returnId - the id of the Return to get LineItems by
     * @return the LineItems associated with the Return with its ReturnItem joined
     *   and mapped to `return_item`.
     */
    findByReturn(returnId: string): Promise<(LineItem & {
        return_item: ReturnItem;
    })[]>;
};
export default LineItemRepository;
