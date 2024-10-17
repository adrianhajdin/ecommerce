import { AbstractNotificationService, TransactionBaseService } from "../interfaces";
import { FindConfig, Selector } from "../types/common";
import { EntityManager } from "typeorm";
import { Logger } from "../types/global";
import { Notification } from "../models";
import { NotificationProviderRepository } from "../repositories/notification-provider";
import { NotificationRepository } from "../repositories/notification";
type InjectedDependencies = {
    manager: EntityManager;
    logger: Logger;
    notificationRepository: typeof NotificationRepository;
    notificationProviderRepository: typeof NotificationProviderRepository;
};
type NotificationProviderKey = `noti_${string}`;
declare class NotificationService extends TransactionBaseService {
    protected subscribers_: {};
    protected attachmentGenerator_: unknown;
    protected readonly container_: InjectedDependencies & {
        [key in `${NotificationProviderKey}`]: AbstractNotificationService;
    };
    protected readonly logger_: Logger;
    protected readonly notificationRepository_: typeof NotificationRepository;
    protected readonly notificationProviderRepository_: typeof NotificationProviderRepository;
    constructor(container: InjectedDependencies);
    /**
     * Registers an attachment generator to the service. The generator can be
     * used to generate on demand invoices or other documents.
     * @param service the service to assign to the attachmentGenerator
     */
    registerAttachmentGenerator(service: unknown): void;
    /**
     * Takes a list of notification provider ids and persists them in the database.
     * @param providerIds - a list of provider ids
     */
    registerInstalledProviders(providerIds: string[]): Promise<void>;
    /**
     * Retrieves a list of notifications.
     * @param selector - the params to select the notifications by.
     * @param config - the configuration to apply to the query
     * @return the notifications that satisfy the query.
     */
    list(selector: Selector<Notification>, config?: FindConfig<Notification>): Promise<Notification[]>;
    /**
     * Retrieves a list of notifications and total count.
     * @param selector - the params to select the notifications by.
     * @param config - the configuration to apply to the query
     * @return the notifications that satisfy the query as well as the count.
     */
    listAndCount(selector: Selector<Notification>, config?: FindConfig<Notification>): Promise<[Notification[], number]>;
    /**
     * Retrieves a notification with a given id
     * @param id - the id of the notification
     * @param config - the configuration to apply to the query
     * @return the notification
     */
    retrieve(id: string, config?: FindConfig<Notification>): Promise<Notification | never>;
    /**
     * Subscribes a given provider to an event.
     * @param eventName - the event to subscribe to
     * @param providerId - the provider that the event will be sent to
     */
    subscribe(eventName: string, providerId: string): void;
    /**
     * Finds a provider with a given id. Will throw a NOT_FOUND error if the
     * resolution fails.
     * @param id - the id of the provider
     * @return the notification provider
     */
    protected retrieveProvider_(id: string): AbstractNotificationService;
    /**
     * Handles an event by relaying the event data to the subscribing providers.
     * The result of the notification send will be persisted in the database in
     * order to allow for resends. Will log any errors that are encountered.
     * @param eventName - the event to handle
     * @param data - the data the event was sent with
     * @return the result of notification subscribed
     */
    handleEvent(eventName: string, data: Record<string, unknown>): Promise<void | undefined | Notification[]>;
    /**
     * Sends a notification, by calling the given provider's sendNotification
     * method. Persists the Notification in the database.
     * @param event - the name of the event
     * @param eventData - the data the event was sent with
     * @param providerId - the provider that should handle the event.
     * @return the created notification
     */
    send(event: string, eventData: Record<string, unknown>, providerId: string): Promise<Notification | undefined>;
    /**
     * Resends a notification by retrieving a prior notification and calling the
     * underlying provider's resendNotification method.
     * @param {string} id - the id of the notification
     * @param {object} config - any configuration that might override the previous
     *  send
     * @return {Notification} the newly created notification
     */
    resend(id: string, config?: FindConfig<Notification>): Promise<Notification>;
}
export default NotificationService;
