import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
import { InventoryItemDTO, ReservationItemDTO } from "@medusajs/types";
import { LineItem } from "../../../../models";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminReservationsRes
 * type: object
 * description: "The reservation's details."
 * required:
 *   - reservation
 * properties:
 *   reservation:
 *     description: Reservation details.
 *     $ref: "#/components/schemas/ReservationItemDTO"
 */
export type AdminReservationsRes = {
    reservation: ReservationItemDTO;
};
/**
 * @schema ExtendedReservationItem
 * type: object
 * allOf:
 *   - $ref: "#/components/schemas/ReservationItemDTO"
 *   - type: object
 *     properties:
 *       line_item:
 *         description: The line item associated with the reservation.
 *         $ref: "#/components/schemas/LineItem"
 *       inventory_item:
 *         description: The inventory item associated with the reservation.
 *         $ref: "#/components/schemas/InventoryItemDTO"
 */
export type ExtendedReservationItem = ReservationItemDTO & {
    line_item?: LineItem;
    inventory_item?: InventoryItemDTO;
};
/**
 * @schema AdminReservationsListRes
 * type: object
 * description: "The list of reservations with pagination fields."
 * required:
 *   - reservations
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   reservations:
 *     type: array
 *     description: An array of reservations details.
 *     items:
 *       $ref: "#/components/schemas/ExtendedReservationItem"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of reservations skipped when retrieving the reservations.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminReservationsListRes = PaginatedResponse & {
    reservations: ReservationItemDTO[];
};
export declare const defaultAdminReservationRelations: never[];
export declare const defaultReservationFields: string[];
/**
 * @schema AdminReservationsDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Reservation.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: reservation
 *   deleted:
 *     type: boolean
 *     description: Whether or not the Reservation was deleted.
 *     default: true
 */
export type AdminReservationsDeleteRes = DeleteResponse;
export * from "./create-reservation";
export * from "./delete-reservation";
export * from "./get-reservation";
export * from "./list-reservations";
export * from "./update-reservation";
