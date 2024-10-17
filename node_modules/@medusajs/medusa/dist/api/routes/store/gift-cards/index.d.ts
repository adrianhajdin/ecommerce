import { GiftCard } from "./../../../../";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultStoreGiftCardRelations: string[];
export declare const defaultStoreGiftCardFields: (keyof GiftCard)[];
export declare const allowedStoreGiftCardRelations: string[];
export declare const allowedStoreGiftCardFields: string[];
/**
 * @schema StoreGiftCardsRes
 * description: "The gift card's details."
 * type: object
 * required:
 *   - gift_card
 * properties:
 *   gift_card:
 *     description: "Gift card details."
 *     $ref: "#/components/schemas/GiftCard"
 */
export type StoreGiftCardsRes = {
    gift_card: GiftCard;
};
export * from "./get-gift-card";
