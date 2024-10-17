export default OrderSubscriber;
declare class OrderSubscriber {
    constructor({ manager, eventBusService, discountService, giftCardService, totalsService, orderService, draftOrderService, regionService, }: {
        manager: any;
        eventBusService: any;
        discountService: any;
        giftCardService: any;
        totalsService: any;
        orderService: any;
        draftOrderService: any;
        regionService: any;
    });
    manager_: any;
    totalsService_: any;
    discountService_: any;
    giftCardService_: any;
    orderService_: any;
    draftOrderService_: any;
    regionService_: any;
    eventBus_: any;
    handleOrderPlaced: (data: any) => Promise<void>;
    updateDraftOrder: (data: any) => Promise<void>;
}
