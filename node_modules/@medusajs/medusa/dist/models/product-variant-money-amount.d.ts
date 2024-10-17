import { SoftDeletableEntity } from "../interfaces";
export declare class ProductVariantMoneyAmount extends SoftDeletableEntity {
    money_amount_id: string;
    variant_id: string;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
