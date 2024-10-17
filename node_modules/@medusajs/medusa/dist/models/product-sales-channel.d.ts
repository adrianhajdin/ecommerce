import { BaseEntity } from "../interfaces";
export declare class ProductSalesChannel extends BaseEntity {
    sales_channel_id: string;
    product_id: string;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
