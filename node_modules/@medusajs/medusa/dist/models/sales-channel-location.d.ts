import { Relation } from "typeorm";
import { SoftDeletableEntity } from "../interfaces";
import { SalesChannel } from "./sales-channel";
export declare class SalesChannelLocation extends SoftDeletableEntity {
    sales_channel_id: string;
    location_id: string;
    sales_channel: Relation<SalesChannel>;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema SalesChannelLocation
 * title: "Sales Channel Stock Location"
 * description: "This represents the association between a sales channel and a stock locations."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - id
 *   - location_id
 *   - sales_channel_id
 *   - updated_at
 * properties:
 *   id:
 *     description: The Sales Channel Stock Location's ID
 *     type: string
 *     example: scloc_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   sales_channel_id:
 *     description: "The ID of the Sales Channel"
 *     type: string
 *     example: sc_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   location_id:
 *     description: "The ID of the Location Stock."
 *     type: string
 *   sales_channel:
 *     description: The details of the sales channel the location is associated with.
 *     x-expandable: "sales_channel"
 *     nullable: true
 *     $ref: "#/components/schemas/SalesChannel"
 *   created_at:
 *     description: "The date with timezone at which the resource was created."
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: "The date with timezone at which the resource was updated."
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     description: "The date with timezone at which the resource was deleted."
 *     nullable: true
 *     type: string
 *     format: date-time
 */
