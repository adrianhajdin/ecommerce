export default NotificationSubscriber;
declare class NotificationSubscriber {
    constructor({ eventBusService, notificationService }: {
        eventBusService: any;
        notificationService: any;
    });
    notificationService_: any;
    eventBus_: any;
    onEvent: (data: any, eventName: any) => any;
}
