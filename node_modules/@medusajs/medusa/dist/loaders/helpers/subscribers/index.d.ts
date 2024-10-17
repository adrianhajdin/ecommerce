import { MedusaContainer } from "@medusajs/types";
import { SubscriberArgs, SubscriberConfig } from "../../../types/subscribers";
type SubscriberHandler<T> = (args: SubscriberArgs<T>) => Promise<void>;
type SubscriberModule<T> = {
    config: SubscriberConfig;
    handler: SubscriberHandler<T>;
};
export declare class SubscriberLoader {
    protected isV2_: boolean;
    protected container_: MedusaContainer;
    protected pluginOptions_: Record<string, unknown>;
    protected activityId_: string;
    protected rootDir_: string;
    protected excludes: RegExp[];
    protected subscriberDescriptors_: Map<string, SubscriberModule<any>>;
    constructor(rootDir: string, container: MedusaContainer, options: Record<string, unknown> | undefined, activityId: string, isV2?: boolean);
    private validateSubscriber;
    private createDescriptor;
    private createMap;
    private inferIdentifier;
    private createSubscriber;
    load(): Promise<string[] | undefined>;
}
export {};
