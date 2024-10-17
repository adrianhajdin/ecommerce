import { FlagRouter } from "@medusajs/utils";
import { BasePaymentService } from "medusa-interfaces";
import { EntityManager } from "typeorm";
import { AbstractPaymentProcessor, AbstractPaymentService, PaymentContext, PaymentSessionResponse, TransactionBaseService } from "../interfaces";
import { Cart, Payment, PaymentProvider, PaymentSession, PaymentSessionStatus, Refund } from "../models";
import { PaymentRepository } from "../repositories/payment";
import { PaymentProviderRepository } from "../repositories/payment-provider";
import { PaymentSessionRepository } from "../repositories/payment-session";
import { RefundRepository } from "../repositories/refund";
import { FindConfig, Selector } from "../types/common";
import { Logger } from "../types/global";
import { CreatePaymentInput, PaymentSessionInput } from "../types/payment";
import { CustomerService } from "./index";
import PaymentService from "./payment";
type PaymentProviderKey = `pp_${string}` | "systemPaymentProviderService";
type InjectedDependencies = {
    manager: EntityManager;
    paymentSessionRepository: typeof PaymentSessionRepository;
    paymentProviderRepository: typeof PaymentProviderRepository;
    paymentRepository: typeof PaymentRepository;
    refundRepository: typeof RefundRepository;
    paymentService: PaymentService;
    customerService: CustomerService;
    featureFlagRouter: FlagRouter;
    logger: Logger;
} & {
    [key in `${PaymentProviderKey}`]: AbstractPaymentService | typeof BasePaymentService;
};
/**
 * Helps retrieve payment providers
 */
export default class PaymentProviderService extends TransactionBaseService {
    protected readonly container_: InjectedDependencies;
    protected readonly paymentSessionRepository_: typeof PaymentSessionRepository;
    protected readonly paymentProviderRepository_: typeof PaymentProviderRepository;
    protected readonly paymentRepository_: typeof PaymentRepository;
    protected get paymentService_(): PaymentService;
    protected readonly refundRepository_: typeof RefundRepository;
    protected readonly customerService_: CustomerService;
    protected readonly logger_: Logger;
    protected readonly featureFlagRouter_: FlagRouter;
    constructor(container: InjectedDependencies);
    registerInstalledProviders(providerIds: string[]): Promise<void>;
    list(): Promise<PaymentProvider[]>;
    /**
     * Retrieve a payment entity with the given id.
     * @param paymentId
     * @param relations
     */
    retrievePayment(paymentId: string, relations?: string[]): Promise<Payment | never>;
    /**
     * List all the payments according to the given selector and config.
     * @param selector
     * @param config
     */
    listPayments(selector: Selector<Payment>, config?: FindConfig<Payment>): Promise<Payment[]>;
    /**
     * Return the payment session for the given id.
     * @param paymentSessionId
     * @param relations
     */
    retrieveSession(paymentSessionId: string, relations?: string[]): Promise<PaymentSession | never>;
    /**
     * @deprecated
     * @param providerId
     * @param cart
     */
    createSession(providerId: string, cart: Cart): Promise<PaymentSession>;
    /**
     * Creates a payment session with the given provider.
     * @param sessionInput
     */
    createSession(sessionInput: PaymentSessionInput): Promise<PaymentSession>;
    /**
     * Refreshes a payment session with the given provider.
     * This means, that we delete the current one and create a new.
     * @param paymentSession - the payment session object to
     *    update
     * @param sessionInput
     * @return the payment session
     */
    refreshSession(paymentSession: {
        id: string;
        data: Record<string, unknown>;
        provider_id: string;
    }, sessionInput: PaymentSessionInput): Promise<PaymentSession>;
    /**
     * Update a payment session with the given provider.
     * @param paymentSession - The paymentSession to update
     * @param sessionInput
     * @return the payment session
     */
    updateSession(paymentSession: {
        id: string;
        data: Record<string, unknown>;
        provider_id: string;
    }, sessionInput: Cart | PaymentSessionInput): Promise<PaymentSession>;
    deleteSession(paymentSession: PaymentSession): Promise<PaymentSession | undefined>;
    /**
     * Finds a provider given an id
     * @param providerId - the id of the provider to get
     * @return the payment provider
     */
    retrieveProvider<TProvider extends AbstractPaymentService | typeof BasePaymentService | AbstractPaymentProcessor>(providerId: string): TProvider extends AbstractPaymentService ? AbstractPaymentService : TProvider extends AbstractPaymentProcessor ? AbstractPaymentProcessor : typeof BasePaymentService;
    createPayment(data: CreatePaymentInput): Promise<Payment>;
    updatePayment(paymentId: string, data: {
        order_id?: string;
        swap_id?: string;
    }): Promise<Payment>;
    authorizePayment(paymentSession: PaymentSession, context: Record<string, unknown>): Promise<PaymentSession | undefined>;
    updateSessionData(paymentSession: PaymentSession, data: Record<string, unknown>): Promise<PaymentSession>;
    cancelPayment(paymentObj: Partial<Payment> & {
        id: string;
    }): Promise<Payment>;
    getStatus(payment: Payment): Promise<PaymentSessionStatus>;
    capturePayment(paymentObj: Partial<Payment> & {
        id: string;
    }): Promise<Payment>;
    refundPayment(payObjs: Payment[], amount: number, reason: string, note?: string): Promise<Refund>;
    refundFromPayment(payment: Payment, amount: number, reason: string, note?: string): Promise<Refund>;
    retrieveRefund(id: string, config?: FindConfig<Refund>): Promise<Refund | never>;
    /**
     * Build the create session context for both legacy and new API
     * @param cartOrData
     * @protected
     */
    protected buildPaymentProcessorContext(cartOrData: Cart | PaymentSessionInput): Cart & PaymentContext;
    /**
     * Create or update a Payment session data.
     * @param providerId
     * @param data
     * @protected
     */
    protected saveSession(providerId: string, data: {
        payment_session_id?: string;
        cartId?: string;
        amount?: number;
        sessionData: Record<string, unknown>;
        isSelected?: boolean;
        isInitiated?: boolean;
        status?: PaymentSessionStatus;
    }): Promise<PaymentSession>;
    /**
     * Process the collected data. Can be used every time we need to process some collected data returned by the provider
     * @param data
     * @param paymentResponse
     * @protected
     */
    protected processUpdateRequestsData(data: {
        customer?: {
            id?: string | undefined;
        } | undefined;
    } | undefined, paymentResponse: PaymentSessionResponse | Record<string, unknown>): Promise<void>;
    private throwFromPaymentProcessorError;
}
export {};
