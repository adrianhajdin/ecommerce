import { DeepPartial, EntityManager } from "typeorm";
import { EventBusService } from ".";
import { StorePostCustomersCustomerAddressesAddressReq } from "../api";
import { TransactionBaseService } from "../interfaces";
import { Address, Customer } from "../models";
import { AddressRepository } from "../repositories/address";
import { CustomerRepository } from "../repositories/customer";
import { AddressCreatePayload, FindConfig, Selector } from "../types/common";
import { CreateCustomerInput, UpdateCustomerInput } from "../types/customers";
type InjectedDependencies = {
    manager: EntityManager;
    eventBusService: EventBusService;
    customerRepository: typeof CustomerRepository;
    addressRepository: typeof AddressRepository;
};
/**
 * Provides layer to manipulate customers.
 */
declare class CustomerService extends TransactionBaseService {
    protected readonly customerRepository_: typeof CustomerRepository;
    protected readonly addressRepository_: typeof AddressRepository;
    protected readonly eventBusService_: EventBusService;
    static Events: {
        PASSWORD_RESET: string;
        CREATED: string;
        UPDATED: string;
    };
    constructor({ customerRepository, eventBusService, addressRepository, }: InjectedDependencies);
    /**
     * Generate a JSON Web token, that will be sent to a customer, that wishes to
     * reset password.
     * The token will be signed with the customer's current password hash as a
     * secret a long side a payload with userId and the expiry time for the token,
     * which is always 15 minutes.
     * @param {string} customerId - the customer to reset the password for
     * @return {string} the generated JSON web token
     */
    generateResetPasswordToken(customerId: string): Promise<string>;
    /**
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config object containing query settings
     * @return {Promise} the result of the find operation
     */
    list(selector?: Selector<Customer> & {
        q?: string;
        groups?: string[];
    }, config?: FindConfig<Customer>): Promise<Customer[]>;
    /**
     * @param {Object} selector - the query object for find
     * @param {FindConfig<Customer>} config - the config object containing query settings
     * @return {Promise} the result of the find operation
     */
    listAndCount(selector: Selector<Customer> & {
        q?: string;
        groups?: string[];
    }, config?: FindConfig<Customer>): Promise<[Customer[], number]>;
    /**
     * Return the total number of documents in database
     * @return {Promise} the result of the count operation
     */
    count(): Promise<number>;
    private retrieve_;
    /**
     * Gets a registered customer by email.
     * @param {string} email - the email of the customer to get.
     * @param {Object} config - the config object containing query settings
     * @return {Promise<Customer>} the customer document.
     * @deprecated
     */
    retrieveByEmail(email: string, config?: FindConfig<Customer>): Promise<Customer | never>;
    retrieveUnregisteredByEmail(email: string, config?: FindConfig<Customer>): Promise<Customer | never>;
    retrieveRegisteredByEmail(email: string, config?: FindConfig<Customer>): Promise<Customer | never>;
    listByEmail(email: string, config?: FindConfig<Customer>): Promise<Customer[]>;
    /**
     * Gets a customer by phone.
     * @param {string} phone - the phone of the customer to get.
     * @param {Object} config - the config object containing query settings
     * @return {Promise<Customer>} the customer document.
     */
    retrieveByPhone(phone: string, config?: FindConfig<Customer>): Promise<Customer | never>;
    /**
     * Gets a customer by id.
     * @param {string} customerId - the id of the customer to get.
     * @param {Object} config - the config object containing query settings
     * @return {Promise<Customer>} the customer document.
     */
    retrieve(customerId: string, config?: FindConfig<Customer>): Promise<Customer>;
    /**
     * Hashes a password
     * @param {string} password - the value to hash
     * @return {Promise<string>} hashed password
     */
    hashPassword_(password: string): Promise<string>;
    /**
     * Creates a customer from an email - customers can have accounts associated,
     * e.g. to login and view order history, etc. If a password is provided the
     * customer will automatically get an account, otherwise the customer is just
     * used to hold details of customers.
     * @param {object} customer - the customer to create
     * @return {Promise} the result of create
     */
    create(customer: CreateCustomerInput): Promise<Customer>;
    /**
     * Updates a customer.
     * @param {string} customerId - the id of the variant. Must be a string that
     *   can be casted to an ObjectId
     * @param {object} update - an object with the update values.
     * @return {Promise} resolves to the update result.
     */
    update(customerId: string, update: UpdateCustomerInput): Promise<Customer>;
    /**
     * Updates the customers' billing address.
     * @param {Customer} customer - the Customer to update
     * @param {Object|string} addressOrId - the value to set the billing address to
     * @return {Promise} the result of the update operation
     */
    updateBillingAddress_(customer: Customer, addressOrId: string | DeepPartial<Address> | undefined): Promise<void>;
    updateAddress(customerId: string, addressId: string, address: StorePostCustomersCustomerAddressesAddressReq): Promise<Address>;
    removeAddress(customerId: string, addressId: string): Promise<void>;
    addAddress(customerId: string, address: AddressCreatePayload): Promise<Customer | Address>;
    /**
     * Deletes a customer from a given customer id.
     * @param {string} customerId - the id of the customer to delete. Must be
     *   castable as an ObjectId
     * @return {Promise} the result of the delete operation.
     */
    delete(customerId: string): Promise<Customer | void>;
}
export default CustomerService;
