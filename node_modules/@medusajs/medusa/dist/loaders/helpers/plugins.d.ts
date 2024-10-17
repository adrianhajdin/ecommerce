import { LifetimeType } from "awilix";
import { AbstractFulfillmentService, AbstractPaymentProcessor } from "../../interfaces";
import { ClassConstructor, MedusaContainer } from "../../types/global";
type Context = {
    container: MedusaContainer;
    pluginDetails: Record<string, unknown>;
    registrationName: string;
};
export declare function registerPaymentProcessorFromClass(klass: ClassConstructor<AbstractPaymentProcessor> & {
    LIFE_TIME?: LifetimeType;
}, context: Context): void;
export declare function registerAbstractFulfillmentServiceFromClass(klass: ClassConstructor<AbstractFulfillmentService> & {
    LIFE_TIME?: LifetimeType;
}, context: Context): void;
export {};
