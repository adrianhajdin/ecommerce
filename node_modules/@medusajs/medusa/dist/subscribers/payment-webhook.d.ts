import { IPaymentModuleService, ProviderWebhookPayload } from "@medusajs/types";
import { EventBusService } from "../services";
type InjectedDependencies = {
    paymentModuleService: IPaymentModuleService;
    eventBusService: EventBusService;
};
declare class PaymentWebhookSubscriber {
    private readonly eventBusService_;
    private readonly paymentModuleService_;
    constructor({ eventBusService, paymentModuleService }: InjectedDependencies);
    /**
     * TODO: consider moving this to a workflow
     */
    processEvent: (data: ProviderWebhookPayload) => Promise<void>;
}
export default PaymentWebhookSubscriber;
