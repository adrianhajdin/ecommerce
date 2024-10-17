import { TransactionBaseService } from "./transaction-base-service";
import { Address, Cart, Customer, Payment, PaymentSession, PaymentSessionStatus, ShippingMethod } from "../models";
export type Data = Record<string, unknown>;
export type PaymentData = Data;
export type PaymentSessionData = Data;
export type PaymentContext = {
    cart: {
        context: Record<string, unknown>;
        id: string;
        email: string;
        shipping_address: Address | null;
        shipping_methods: ShippingMethod[];
        billing_address?: Address | null;
    };
    currency_code: string;
    amount: number;
    resource_id: string;
    customer?: Customer;
    paymentSessionData: Record<string, unknown>;
};
export type PaymentSessionResponse = {
    update_requests: {
        customer_metadata: Record<string, unknown>;
    };
    session_data: Record<string, unknown>;
};
/**
 * This will be @deprecated in the near future use the new PaymentProcessor interface instead
 */
export interface PaymentService extends TransactionBaseService {
    getIdentifier(): string;
    /**
     * This will be @deprecated in the near future use PaymentProcessor.retrievePayment instead
     * @param paymentSession
     */
    getPaymentData(paymentSession: PaymentSession): Promise<PaymentData>;
    /**
     * This will be @deprecated in the near future use PaymentProcessor.updatePayment instead
     * @param paymentSessionData
     * @param data
     */
    updatePaymentData(paymentSessionData: PaymentSessionData, data: Data): Promise<PaymentSessionData>;
    /**
     * This will be @deprecated in the near future use PaymentProcessor.initiatePayment instead
     * @param context The type of this argument is meant to be temporary and once the previous method signature
     * will be removed, the type will only be PaymentContext instead of Cart & PaymentContext
     */
    createPayment(context: Cart & PaymentContext): Promise<PaymentSessionResponse>;
    /**
     * This will be @deprecated in the near future use createPayment(context: `Cart & PaymentContext): Promise<PaymentSessionResponse>` instead
     * @param cart
     */
    createPayment(cart: Cart): Promise<PaymentSessionData>;
    /**
     * This will be @deprecated in the near future use PaymentProcessor.retrievePayment instead
     * @param paymentData
     */
    retrievePayment(paymentData: PaymentData): Promise<Data>;
    updatePayment(paymentSessionData: PaymentSessionData, context: Cart & PaymentContext): Promise<PaymentSessionData | PaymentSessionResponse>;
    /**
     * This will be @deprecated in the near future use PaymentProcessor.updatePayment instead
     * @param paymentSessionData
     * @param cart
     */
    updatePayment(paymentSessionData: PaymentSessionData, cart: Cart): Promise<PaymentSessionData>;
    /**
     * This will be @deprecated in the near future use PaymentProcessor.authorizePayment instead
     * @param paymentSession
     * @param context
     */
    authorizePayment(paymentSession: PaymentSession, context: Data): Promise<{
        data: PaymentSessionData;
        status: PaymentSessionStatus;
    }>;
    /**
     * This will be @deprecated in the near future use PaymentProcessor.capturePayment instead
     * @param payment
     */
    capturePayment(payment: Payment): Promise<PaymentData>;
    /**
     * This will be @deprecated in the near future use PaymentProcessor.refundPayment instead
     * @param payment
     * @param refundAmount
     */
    refundPayment(payment: Payment, refundAmount: number): Promise<PaymentData>;
    /**
     * This will be @deprecated in the near future use PaymentProcessor.cancelPayment instead
     * @param payment
     */
    cancelPayment(payment: Payment): Promise<PaymentData>;
    /**
     * This will be @deprecated in the near future use PaymentProcessor.cancelPayment instead
     * @param paymentSession
     */
    deletePayment(paymentSession: PaymentSession): Promise<void>;
    /**
     * This will be @deprecated in the near future use PaymentProcessor.getSavedMethods instead
     * @param customer
     */
    retrieveSavedMethods(customer: Customer): Promise<Data[]>;
    /**
     * This will be @deprecated in the near future use PaymentProcessor.getPaymentStatus instead
     * @param data
     */
    getStatus(data: Data): Promise<PaymentSessionStatus>;
}
/**
 * This will be @deprecated in the near future use the AbstractPaymentProcessor instead
 */
export declare abstract class AbstractPaymentService extends TransactionBaseService implements PaymentService {
    static _isPaymentService: boolean;
    /**
     * @ignore
     */
    static isPaymentService(object: any): boolean;
    protected constructor(container: unknown, config?: Record<string, unknown>);
    static identifier: string;
    getIdentifier(): string;
    /**
     * @deprecated
     */
    abstract getPaymentData(paymentSession: PaymentSession): Promise<PaymentData>;
    /**
     * @deprecated
     */
    abstract updatePaymentData(paymentSessionData: PaymentSessionData, data: Data): Promise<PaymentSessionData>;
    /**
     * @param context The type of this argument is meant to be temporary and once the previous method signature
     * will be removed, the type will only be PaymentContext instead of Cart & PaymentContext
     */
    abstract createPayment(context: Cart & PaymentContext): Promise<PaymentSessionResponse>;
    /**
     * This will be @deprecated in the near future use `createPayment(context: Cart & PaymentContext): Promise<PaymentSessionResponse>` instead
     * @param cart
     */
    abstract createPayment(cart: Cart): Promise<PaymentSessionData>;
    /**
     * @deprecated
     */
    abstract retrievePayment(paymentData: PaymentData): Promise<Data>;
    /**
     * @param paymentSessionData
     * @param context The type of this argument is meant to be temporary and once the previous method signature
     * will be removed, the type will only be PaymentContext instead of Cart & PaymentContext
     * @return it return either a PaymentSessionResponse or PaymentSessionResponse["session_data"] to maintain backward compatibility
     */
    abstract updatePayment(paymentSessionData: PaymentSessionData, context: Cart & PaymentContext): Promise<PaymentSessionResponse | PaymentSessionResponse["session_data"]>;
    /**
     * This will be @deprecated in the near future use `updatePayment(paymentSessionData: PaymentSessionData, context: Cart & PaymentContext): Promise<PaymentSessionResponse>` instead
     * @param paymentSessionData
     * @param cart
     */
    abstract updatePayment(paymentSessionData: PaymentSessionData, cart: Cart): Promise<PaymentSessionData>;
    /**
     * @deprecated
     */
    abstract authorizePayment(paymentSession: PaymentSession, context: Data): Promise<{
        data: PaymentSessionData;
        status: PaymentSessionStatus;
    }>;
    /**
     * This will be @deprecated in the near future
     */
    abstract capturePayment(payment: Payment): Promise<PaymentData>;
    /**
     * This will be @deprecated in the near future
     */
    abstract refundPayment(payment: Payment, refundAmount: number): Promise<PaymentData>;
    /**
     * This will be @deprecated in the near future
     */
    abstract cancelPayment(payment: Payment): Promise<PaymentData>;
    /**
     * This will be @deprecated in the near future
     */
    abstract deletePayment(paymentSession: PaymentSession): Promise<void>;
    /**
     * This will be @deprecated in the near future
     */
    retrieveSavedMethods(customer: Customer): Promise<Data[]>;
    /**
     * This will be @deprecated in the near future
     */
    abstract getStatus(data: Data): Promise<PaymentSessionStatus>;
}
