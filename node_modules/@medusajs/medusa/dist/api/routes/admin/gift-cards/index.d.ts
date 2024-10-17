import "reflect-metadata";
import { GiftCard } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminGiftCardFields: (keyof GiftCard)[];
export declare const defaultAdminGiftCardRelations: string[];
/**
 * @schema AdminGiftCardsRes
 * type: object
 * description: "The gift card's details."
 * x-expanded-relations:
 *   field: gift_card
 *   relations:
 *     - order
 *     - region
 *   eager:
 *     - region.fulfillment_providers
 *     - region.payment_providers
 * required:
 *   - gift_card
 * properties:
 *   gift_card:
 *     description: "A gift card's details."
 *     $ref: "#/components/schemas/GiftCard"
 */
export type AdminGiftCardsRes = {
    gift_card: GiftCard;
};
/**
 * @schema AdminGiftCardsDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Gift Card
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: gift-card
 *   deleted:
 *     type: boolean
 *     description: Whether the gift card was deleted successfully.
 *     default: true
 */
export type AdminGiftCardsDeleteRes = DeleteResponse;
/**
 * @schema AdminGiftCardsListRes
 * type: object
 * description: "The list of gift cards with pagination fields."
 * x-expanded-relations:
 *   field: gift_cards
 *   relations:
 *     - order
 *     - region
 *   eager:
 *     - region.fulfillment_providers
 *     - region.payment_providers
 * required:
 *   - gift_cards
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   gift_cards:
 *     type: array
 *     description: "The list of gift cards."
 *     items:
 *       $ref: "#/components/schemas/GiftCard"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of gift cards skipped when retrieving the gift cards.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminGiftCardsListRes = PaginatedResponse & {
    gift_cards: GiftCard[];
};
export * from "./create-gift-card";
export * from "./list-gift-cards";
export * from "./update-gift-card";
