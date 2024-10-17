import { Address, Cart, Customer, PaymentSession, ShippingMethod } from "../models";
export type PaymentSessionInput = {
    payment_session_id?: string;
    provider_id: string;
    cart: Cart | {
        context: Record<string, unknown>;
        id: string;
        email: string;
        shipping_address: Address | null;
        shipping_methods: ShippingMethod[];
        billing_address?: Address | null;
    };
    customer?: Customer | null;
    currency_code: string;
    amount: number;
    resource_id?: string;
    paymentSessionData?: Record<string, unknown>;
};
export type CreatePaymentInput = {
    cart_id?: string;
    amount: number;
    currency_code: string;
    provider_id?: string;
    payment_session: PaymentSession;
    resource_id?: string;
};
