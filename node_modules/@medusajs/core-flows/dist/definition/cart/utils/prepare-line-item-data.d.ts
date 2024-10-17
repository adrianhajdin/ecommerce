import { BigNumberInput, ProductVariantDTO } from "@medusajs/types";
interface Input {
    quantity: BigNumberInput;
    metadata?: Record<string, any>;
    unitPrice: BigNumberInput;
    variant: ProductVariantDTO;
    cartId?: string;
}
export declare function prepareLineItemData(data: Input): any;
export {};
