export declare const CreateLineItemSteps: {
    STARTED: string;
    SET_PAYMENT_SESSIONS: string;
    FINISHED: string;
};
export declare function addOrUpdateLineItem({ cartId, container, manager, data, }: {
    cartId: any;
    container: any;
    manager: any;
    data: any;
}): Promise<void>;
export declare function setPaymentSessions({ cart, container, manager }: {
    cart: any;
    container: any;
    manager: any;
}): Promise<void>;
export declare function setVariantAvailability({ cart, container, manager }: {
    cart: any;
    container: any;
    manager: any;
}): Promise<import("../../../../../../models").ProductVariant[] | import("../../../../../../types/pricing").PricedVariant[] | undefined>;
