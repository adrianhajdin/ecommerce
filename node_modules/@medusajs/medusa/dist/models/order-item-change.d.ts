import { SoftDeletableEntity } from "../interfaces";
import { LineItem } from "./line-item";
import { OrderEdit } from "./order-edit";
/**
 * @enum
 *
 * The type of the order edit item change.
 */
export declare enum OrderEditItemChangeType {
    /**
     * A new item to be added to the original order.
     */
    ITEM_ADD = "item_add",
    /**
     * An existing item to be removed from the original order.
     */
    ITEM_REMOVE = "item_remove",
    /**
     * An existing item to be updated in the original order.
     */
    ITEM_UPDATE = "item_update"
}
export declare class OrderItemChange extends SoftDeletableEntity {
    type: OrderEditItemChangeType;
    order_edit_id: string;
    order_edit: OrderEdit;
    original_line_item_id?: string;
    original_line_item?: LineItem;
    line_item_id?: string;
    line_item?: LineItem;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema OrderItemChange
 * title: "Order Item Change"
 * description: "An order item change is a change made within an order edit to an order's items. These changes are not reflected on the original order until the order edit is confirmed."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - id
 *   - line_item_id
 *   - order_edit_id
 *   - original_line_item_id
 *   - type
 *   - updated_at
 * properties:
 *   id:
 *     description: The order item change's ID
 *     type: string
 *     example: oic_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   type:
 *     description: The order item change's status
 *     type: string
 *     enum:
 *       - item_add
 *       - item_remove
 *       - item_update
 *   order_edit_id:
 *     description: The ID of the order edit
 *     type: string
 *     example: oe_01G2SG30J8C85S4A5CHM2S1NS2
 *   order_edit:
 *     description: The details of the order edit the item change is associated with.
 *     x-expandable: "order_edit"
 *     nullable: true
 *     $ref: "#/components/schemas/OrderEdit"
 *   original_line_item_id:
 *      description: The ID of the original line item in the order
 *      nullable: true
 *      type: string
 *      example: item_01G8ZC9GWT6B2GP5FSXRXNFNGN
 *   original_line_item:
 *      description: The details of the original line item this item change references. This is used if the item change updates or deletes the original item.
 *      x-expandable: "original_line_item"
 *      nullable: true
 *      $ref: "#/components/schemas/LineItem"
 *   line_item_id:
 *      description: The ID of the cloned line item.
 *      nullable: true
 *      type: string
 *      example: item_01G8ZC9GWT6B2GP5FSXRXNFNGN
 *   line_item:
 *      description: The details of the resulting line item after the item change. This line item is then used in the original order once the order edit is confirmed.
 *      x-expandable: "line_item"
 *      nullable: true
 *      $ref: "#/components/schemas/LineItem"
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     description: The date with timezone at which the resource was deleted.
 *     nullable: true
 *     type: string
 *     format: date-time
 */
