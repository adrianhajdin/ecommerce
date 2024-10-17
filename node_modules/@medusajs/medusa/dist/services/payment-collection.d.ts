import { DeepPartial, EntityManager } from "typeorm";
import { PaymentCollection, PaymentSession } from "../models";
import { PaymentCollectionRepository } from "../repositories/payment-collection";
import { FindConfig } from "../types/common";
import { CustomerService, PaymentProviderService } from "./index";
import { TransactionBaseService } from "../interfaces";
import { CreatePaymentCollectionInput, PaymentCollectionsSessionsBatchInput, PaymentCollectionsSessionsInput } from "../types/payment-collection";
import EventBusService from "./event-bus";
type InjectedDependencies = {
    manager: EntityManager;
    paymentCollectionRepository: typeof PaymentCollectionRepository;
    paymentProviderService: PaymentProviderService;
    eventBusService: EventBusService;
    customerService: CustomerService;
};
export default class PaymentCollectionService extends TransactionBaseService {
    static readonly Events: {
        CREATED: string;
        UPDATED: string;
        DELETED: string;
        PAYMENT_AUTHORIZED: string;
    };
    protected readonly eventBusService_: EventBusService;
    protected readonly paymentProviderService_: PaymentProviderService;
    protected readonly customerService_: CustomerService;
    protected readonly paymentCollectionRepository_: typeof PaymentCollectionRepository;
    constructor({ paymentCollectionRepository, paymentProviderService, customerService, eventBusService, }: InjectedDependencies);
    /**
     * Retrieves a payment collection by id.
     * @param paymentCollectionId - the id of the payment collection
     * @param config - the config to retrieve the payment collection
     * @return the payment collection.
     */
    retrieve(paymentCollectionId: string, config?: FindConfig<PaymentCollection>): Promise<PaymentCollection>;
    /**
     * Creates a new payment collection.
     * @param data - info to create the payment collection
     * @return the payment collection created.
     */
    create(data: CreatePaymentCollectionInput): Promise<PaymentCollection>;
    /**
     * Updates a payment collection.
     * @param paymentCollectionId - the id of the payment collection to update
     * @param data - info to be updated
     * @return the payment collection updated.
     */
    update(paymentCollectionId: string, data: DeepPartial<PaymentCollection>): Promise<PaymentCollection>;
    /**
     * Deletes a payment collection.
     * @param paymentCollectionId - the id of the payment collection to be removed
     * @return the payment collection removed.
     */
    delete(paymentCollectionId: string): Promise<PaymentCollection | undefined>;
    private isValidTotalAmount;
    /**
     * Manages multiple payment sessions of a payment collection.
     * @param paymentCollectionOrId - the id of the payment collection
     * @param sessionsInput - array containing payment session info
     * @param customerId - the id of the customer
     * @return the payment collection and its payment sessions.
     */
    setPaymentSessionsBatch(paymentCollectionOrId: string | PaymentCollection, sessionsInput: PaymentCollectionsSessionsBatchInput[], customerId: string): Promise<PaymentCollection>;
    /**
     * Manages a single payment sessions of a payment collection.
     * @param paymentCollectionId - the id of the payment collection
     * @param sessionInput - object containing payment session info
     * @param customerId - the id of the customer
     * @return the payment collection and its payment session.
     */
    setPaymentSession(paymentCollectionId: string, sessionInput: PaymentCollectionsSessionsInput, customerId: string): Promise<PaymentCollection>;
    /**
     * Removes and recreate a payment session of a payment collection.
     * @param paymentCollectionId - the id of the payment collection
     * @param sessionId - the id of the payment session to be replaced
     * @param customerId - the id of the customer
     * @return the new payment session created.
     */
    refreshPaymentSession(paymentCollectionId: string, sessionId: string, customerId: string): Promise<PaymentSession>;
    /**
     * Marks a payment collection as authorized bypassing the payment flow.
     * @param paymentCollectionId - the id of the payment collection
     * @return the payment session authorized.
     */
    markAsAuthorized(paymentCollectionId: string): Promise<PaymentCollection>;
    /**
     * Authorizes the payment sessions of a payment collection.
     * @param paymentCollectionId - the id of the payment collection
     * @param sessionIds - array of payment session ids to be authorized
     * @param context - additional data required by payment providers
     * @return the payment collection and its payment session.
     */
    authorizePaymentSessions(paymentCollectionId: string, sessionIds: string[], context?: Record<string, unknown>): Promise<PaymentCollection>;
}
export {};
