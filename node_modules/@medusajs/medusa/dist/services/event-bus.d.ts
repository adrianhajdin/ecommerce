import { EventBusTypes, Logger } from "@medusajs/types";
import { EventBusUtils } from "@medusajs/utils";
import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { StagedJob } from "../models";
import { FindConfig } from "../types/common";
import { ConfigModule } from "../types/global";
import StagedJobService from "./staged-job";
type InjectedDependencies = {
    stagedJobService: StagedJobService;
    eventBusModuleService: EventBusUtils.AbstractEventBusModuleService;
    logger: Logger;
};
/**
 * Can keep track of multiple subscribers to different events and run the
 * subscribers when events happen. Events will run asynchronously.
 */
export default class EventBusService extends TransactionBaseService implements EventBusTypes.IEventBusService {
    protected readonly config_: ConfigModule;
    protected readonly stagedJobService_: StagedJobService;
    protected get eventBusModuleService_(): EventBusTypes.IEventBusModuleService;
    protected readonly logger_: Logger;
    protected shouldEnqueuerRun: boolean;
    protected enqueue_: Promise<void>;
    constructor({ stagedJobService, logger }: InjectedDependencies, config: ConfigModule, isSingleton?: boolean);
    withTransaction(transactionManager?: EntityManager): this;
    /**
     * Adds a function to a list of event subscribers.
     * @param event - the event that the subscriber will listen for.
     * @param subscriber - the function to be called when a certain event
     * happens. Subscribers must return a Promise.
     * @param context - subscriber context
     * @return this
     */
    subscribe(event: string | symbol, subscriber: EventBusTypes.Subscriber, context?: EventBusTypes.SubscriberContext): this;
    /**
     * Removes function from the list of event subscribers.
     * @param event - the event of the subcriber.
     * @param subscriber - the function to be removed
     * @param context - subscriber context
     * @return this
     */
    unsubscribe(event: string | symbol, subscriber: EventBusTypes.Subscriber, context: EventBusTypes.SubscriberContext): this;
    /**
     * Calls all subscribers when an event occurs.
     * @param data - The data to use to process the events
     * @return the jobs from our queue
     */
    emit<T>(data: EventBusTypes.EmitData<T>[]): Promise<StagedJob[] | void>;
    emit<T>(data: EventBusTypes.Message<T>[]): Promise<StagedJob[] | void>;
    /**
     * Calls all subscribers when an event occurs.
     * @param {string} eventName - the name of the event to be process.
     * @param data - the data to send to the subscriber.
     * @param options - options to add the job with
     * @return the job from our queue
     */
    emit<T>(eventName: string, data: T, options?: Record<string, unknown>): Promise<StagedJob | void>;
    startEnqueuer(): void;
    stopEnqueuer(): Promise<void>;
    enqueuer_(): Promise<void>;
    protected listJobs(listConfig: FindConfig<StagedJob>): Promise<never[] | StagedJob[]>;
}
export {};
