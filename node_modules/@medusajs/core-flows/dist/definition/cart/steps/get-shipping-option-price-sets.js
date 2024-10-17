"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShippingOptionPriceSetsStep = exports.getShippingOptionPriceSetsStepId = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
const utils_1 = require("@medusajs/utils");
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
exports.getShippingOptionPriceSetsStepId = "get-shipping-option-price-sets";
exports.getShippingOptionPriceSetsStep = (0, workflows_sdk_1.createStep)(exports.getShippingOptionPriceSetsStepId, async (data, { container }) => {
    if (!data.optionIds.length) {
        return new workflows_sdk_1.StepResponse({});
    }
    const pricingModuleService = container.resolve(modules_sdk_1.ModuleRegistrationName.PRICING);
    const remoteQuery = container.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    const query = (0, utils_1.remoteQueryObjectFromString)({
        entryPoint: "shipping_option_price_set",
        fields: ["id", "shipping_option_id", "price_set_id"],
        variables: {
            shipping_option_id: data.optionIds,
        },
    });
    const optionPriceSets = await remoteQuery(query);
    const optionsMissingPrices = (0, utils_1.arrayDifference)(data.optionIds, optionPriceSets.map((v) => v.shipping_option_id));
    if (optionsMissingPrices.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, `Shipping options with IDs ${optionsMissingPrices.join(", ")} do not have a price`);
    }
    const calculatedPriceSets = await pricingModuleService.calculatePrices({ id: optionPriceSets.map((v) => v.price_set_id) }, { context: data.context });
    const idToPriceSet = new Map(calculatedPriceSets.map((p) => [p.id, p]));
    const optionToCalculatedPriceSets = optionPriceSets.reduce((acc, { shipping_option_id, price_set_id }) => {
        const calculatedPriceSet = idToPriceSet.get(price_set_id);
        if (calculatedPriceSet) {
            acc[shipping_option_id] = calculatedPriceSet;
        }
        return acc;
    }, {});
    return new workflows_sdk_1.StepResponse(optionToCalculatedPriceSets);
});
