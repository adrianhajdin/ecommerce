import { SoftDeletableEntity } from "../interfaces";
export declare class OrderSalesChannel extends SoftDeletableEntity {
    id: string;
    order_id: string;
    sales_channel_id: string;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
