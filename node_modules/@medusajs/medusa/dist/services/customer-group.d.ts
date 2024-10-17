import { DeepPartial, EntityManager } from "typeorm";
import { CustomerService } from ".";
import { CustomerGroup } from "..";
import { CustomerGroupRepository } from "../repositories/customer-group";
import { FindConfig, Selector } from "../types/common";
import { CustomerGroupUpdate } from "../types/customer-groups";
import { TransactionBaseService } from "../interfaces";
type CustomerGroupConstructorProps = {
    manager: EntityManager;
    customerGroupRepository: typeof CustomerGroupRepository;
    customerService: CustomerService;
};
declare class CustomerGroupService extends TransactionBaseService {
    protected readonly customerGroupRepository_: typeof CustomerGroupRepository;
    protected readonly customerService_: CustomerService;
    constructor({ customerGroupRepository, customerService, }: CustomerGroupConstructorProps);
    retrieve(customerGroupId: string, config?: {}): Promise<CustomerGroup>;
    /**
     * Creates a customer group with the provided data.
     * @param group - the customer group to create
     * @return the result of the create operation
     */
    create(group: DeepPartial<CustomerGroup>): Promise<CustomerGroup>;
    /**
     * Add a batch of customers to a customer group at once
     * @param id id of the customer group to add customers to
     * @param customerIds customer id's to add to the group
     * @return the customer group after insertion
     */
    addCustomers(id: string, customerIds: string | string[]): Promise<CustomerGroup>;
    /**
     * Update a customer group.
     *
     * @param customerGroupId - id of the customer group
     * @param update - customer group partial data
     * @returns resulting customer group
     */
    update(customerGroupId: string, update: CustomerGroupUpdate): Promise<CustomerGroup>;
    /**
     * Remove customer group
     *
     * @param groupId id of the customer group to delete
     * @return a promise
     */
    delete(groupId: string): Promise<void>;
    /**
     * List customer groups.
     *
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return  the result of the find operation
     */
    list(selector: (Selector<CustomerGroup> & {
        q?: string | undefined;
        discount_condition_id?: string | undefined;
    }) | undefined, config: FindConfig<CustomerGroup>): Promise<CustomerGroup[]>;
    /**
     * Retrieve a list of customer groups and total count of records that match the query.
     *
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    listAndCount(selector: (Selector<CustomerGroup> & {
        q?: string | undefined;
        discount_condition_id?: string | undefined;
    }) | undefined, config: FindConfig<CustomerGroup>): Promise<[CustomerGroup[], number]>;
    /**
     * Remove list of customers from a customergroup
     *
     * @param id id of the customer group from which the customers are removed
     * @param customerIds id's of the customer to remove from group
     * @return the customergroup with the provided id
     */
    removeCustomer(id: string, customerIds: string[] | string): Promise<CustomerGroup>;
    private handleCreationFail;
}
export default CustomerGroupService;
