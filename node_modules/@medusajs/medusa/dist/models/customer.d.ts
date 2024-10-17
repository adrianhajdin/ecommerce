import { Relation } from "typeorm";
import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
import { Address } from "./address";
import { CustomerGroup } from "./customer-group";
import { Order } from "./order";
export declare class Customer extends SoftDeletableEntity {
    email: string;
    first_name: string;
    last_name: string;
    billing_address_id: string | null;
    billing_address: Relation<Address>;
    shipping_addresses: Relation<Address>[];
    /**
     * @apiIgnore
     */
    password_hash: string;
    phone: string;
    has_account: boolean;
    orders: Relation<Order>[];
    groups: Relation<CustomerGroup>[];
    metadata: Record<string, unknown>;
    /**
     * @apiIgnore
     */
    private beforeInsert;
}
/**
 * @schema Customer
 * title: "Customer"
 * description: "A customer can make purchases in your store and manage their profile."
 * type: object
 * required:
 *   - billing_address_id
 *   - created_at
 *   - deleted_at
 *   - email
 *   - first_name
 *   - has_account
 *   - id
 *   - last_name
 *   - metadata
 *   - phone
 *   - updated_at
 * properties:
 *   id:
 *     description: The customer's ID
 *     type: string
 *     example: cus_01G2SG30J8C85S4A5CHM2S1NS2
 *   email:
 *     description: The customer's email
 *     type: string
 *     format: email
 *   first_name:
 *     description: The customer's first name
 *     nullable: true
 *     type: string
 *     example: Arno
 *   last_name:
 *     description: The customer's last name
 *     nullable: true
 *     type: string
 *     example: Willms
 *   billing_address_id:
 *     description: The customer's billing address ID
 *     nullable: true
 *     type: string
 *     example: addr_01G8ZH853YPY9B94857DY91YGW
 *   billing_address:
 *     description: The details of the billing address associated with the customer.
 *     x-expandable: "billing_address"
 *     nullable: true
 *     $ref: "#/components/schemas/Address"
 *   shipping_addresses:
 *     description: The details of the shipping addresses associated with the customer.
 *     type: array
 *     x-expandable: "shipping_addresses"
 *     items:
 *       $ref: "#/components/schemas/Address"
 *   phone:
 *     description: The customer's phone number
 *     nullable: true
 *     type: string
 *     example: 16128234334802
 *   has_account:
 *     description: Whether the customer has an account or not
 *     type: boolean
 *     default: false
 *   orders:
 *     description: The details of the orders this customer placed.
 *     type: array
 *     x-expandable: "orders"
 *     items:
 *       $ref: "#/components/schemas/Order"
 *   groups:
 *     description: The customer groups the customer belongs to.
 *     type: array
 *     x-expandable: "groups"
 *     items:
 *       $ref: "#/components/schemas/CustomerGroup"
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
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 *     externalDocs:
 *       description: "Learn about the metadata attribute, and how to delete and update it."
 *       url: "https://docs.medusajs.com/development/entities/overview#metadata-attribute"
 */
