import { BaseEntity } from "../interfaces/models/base-entity";
import { Customer } from "./customer";
import { NotificationProvider } from "./notification-provider";
export declare class Notification extends BaseEntity {
    event_name: string;
    resource_type: string;
    resource_id: string;
    customer_id: string | null;
    customer: Customer;
    to: string;
    data: Record<string, unknown>;
    parent_id: string;
    parent_notification: Notification;
    resends: Notification[];
    provider_id: string;
    provider: NotificationProvider;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema Notification
 * title: "Notification"
 * description: "A notification is an alert sent, typically to customers, using the installed Notification Provider as a reaction to internal events such as `order.placed`. Notifications can be resent."
 * type: object
 * required:
 *   - created_at
 *   - customer_id
 *   - data
 *   - event_name
 *   - id
 *   - parent_id
 *   - provider_id
 *   - resource_type
 *   - resource_id
 *   - to
 *   - updated_at
 * properties:
 *   id:
 *     description: The notification's ID
 *     type: string
 *     example: noti_01G53V9Y6CKMCGBM1P0X7C28RX
 *   event_name:
 *     description: The name of the event that the notification was sent for.
 *     nullable: true
 *     type: string
 *     example: order.placed
 *   resource_type:
 *     description: The type of resource that the Notification refers to.
 *     type: string
 *     example: order
 *   resource_id:
 *     description: The ID of the resource that the Notification refers to.
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   customer_id:
 *     description: The ID of the customer that this notification was sent to.
 *     nullable: true
 *     type: string
 *     example: cus_01G2SG30J8C85S4A5CHM2S1NS2
 *   customer:
 *     description: The details of the customer that this notification was sent to.
 *     x-expandable: "customer"
 *     nullable: true
 *     $ref: "#/components/schemas/Customer"
 *   to:
 *     description: The address that the Notification was sent to. This will usually be an email address, but can represent other addresses such as a chat bot user ID.
 *     type: string
 *     example: user@example.com
 *   data:
 *     description: The data that the Notification was sent with. This contains all the data necessary for the Notification Provider to initiate a resend.
 *     type: object
 *     example: {}
 *   parent_id:
 *     description: The notification's parent ID
 *     nullable: true
 *     type: string
 *     example: noti_01G53V9Y6CKMCGBM1P0X7C28RX
 *   parent_notification:
 *     description: The details of the parent notification.
 *     x-expandable: "parent_notification"
 *     nullable: true
 *     $ref: "#/components/schemas/Notification"
 *   resends:
 *     description: The details of all resends of the notification.
 *     type: array
 *     x-expandable: "resends"
 *     items:
 *       $ref: "#/components/schemas/Notification"
 *   provider_id:
 *     description: The ID of the notification provider used to send the notification.
 *     nullable: true
 *     type: string
 *     example: sengrid
 *   provider:
 *     description: The notification provider used to send the notification.
 *     x-expandable: "provider"
 *     nullable: true
 *     $ref: "#/components/schemas/NotificationProvider"
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 */
