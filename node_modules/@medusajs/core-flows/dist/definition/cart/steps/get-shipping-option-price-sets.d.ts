interface StepInput {
    optionIds: string[];
    context?: Record<string, unknown>;
}
export declare const getShippingOptionPriceSetsStepId = "get-shipping-option-price-sets";
export declare const getShippingOptionPriceSetsStep: import("@medusajs/workflows-sdk").StepFunction<StepInput, any>;
export {};
