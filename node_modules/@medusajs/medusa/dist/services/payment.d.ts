import { EntityManager } from "typeorm";
import { PaymentRepository } from "./../repositories/payment";
import { TransactionBaseService } from "../interfaces";
import { Payment, Refund } from "../models";
import { FindConfig } from "../types/common";
import EventBusService from "./event-bus";
import { PaymentProviderService } from "./index";
type InjectedDependencies = {
    manager: EntityManager;
    paymentProviderService: PaymentProviderService;
    eventBusService: EventBusService;
    paymentRepository: typeof PaymentRepository;
};
export type PaymentDataInput = {
    currency_code: string;
    provider_id: string;
    amount: number;
    data: Record<string, unknown>;
};
export default class PaymentService extends TransactionBaseService {
    protected readonly eventBusService_: EventBusService;
    protected readonly paymentProviderService_: PaymentProviderService;
    protected readonly paymentRepository_: typeof PaymentRepository;
    static readonly Events: {
        CREATED: string;
        UPDATED: string;
        PAYMENT_CAPTURED: string;
        PAYMENT_CAPTURE_FAILED: string;
        REFUND_CREATED: string;
        REFUND_FAILED: string;
    };
    constructor({ paymentRepository, paymentProviderService, eventBusService, }: InjectedDependencies);
    /**
     * Retrieves a payment by id.
     * @param paymentId - the id of the payment
     * @param config - the config to retrieve the payment
     * @return the payment.
     */
    retrieve(paymentId: string, config?: FindConfig<Payment>): Promise<Payment>;
    /**
     * Created a new payment.
     * @param paymentInput - info to create the payment
     * @return the payment created.
     */
    create(paymentInput: PaymentDataInput): Promise<Payment>;
    /**
     * Updates a payment in order to link it to an order or a swap.
     * @param paymentId - the id of the payment
     * @param data - order_id or swap_id to link the payment
     * @return the payment updated.
     */
    update(paymentId: string, data: {
        order_id?: string;
        swap_id?: string;
    }): Promise<Payment>;
    /**
     * Captures a payment.
     * @param paymentOrId - the id or the class instance of the payment
     * @return the payment captured.
     */
    capture(paymentOrId: string | Payment): Promise<Payment>;
    /**
     * refunds a payment.
     * @param paymentOrId - the id or the class instance of the payment
     * @param amount - the amount to be refunded from the payment
     * @param reason - the refund reason
     * @param note - additional note of the refund
     * @return the refund created.
     */
    refund(paymentOrId: string | Payment, amount: number, reason: string, note?: string): Promise<Refund>;
}
export {};
