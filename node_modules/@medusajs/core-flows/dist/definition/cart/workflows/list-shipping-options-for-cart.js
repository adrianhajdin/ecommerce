"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listShippingOptionsForCartWorkflow = exports.listShippingOptionsForCartWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const use_remote_query_1 = require("../../../common/steps/use-remote-query");
const shipping_options_1 = require("../../../shipping-options");
const steps_1 = require("../steps");
exports.listShippingOptionsForCartWorkflowId = "list-shipping-options-for-cart";
exports.listShippingOptionsForCartWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.listShippingOptionsForCartWorkflowId, (input) => {
    const scLocationFulfillmentSets = (0, use_remote_query_1.useRemoteQueryStep)({
        entry_point: "sales_channels",
        fields: ["stock_locations.fulfillment_sets.id"],
        variables: { id: input.sales_channel_id },
    });
    const listOptionsInput = (0, workflows_sdk_1.transform)({ scLocationFulfillmentSets, input }, (data) => {
        const fulfillmentSetIds = data.scLocationFulfillmentSets
            .map((sc) => sc.stock_locations.map((loc) => loc.fulfillment_sets.map(({ id }) => id)))
            .flat(2);
        return {
            context: {
                fulfillment_set_id: fulfillmentSetIds,
                address: {
                    city: data.input.shipping_address?.city,
                    country_code: data.input.shipping_address?.country_code,
                    province_code: data.input.shipping_address?.province,
                },
            },
            config: {
                select: [
                    "id",
                    "name",
                    "price_type",
                    "service_zone_id",
                    "shipping_profile_id",
                    "provider_id",
                    "data",
                    "amount",
                ],
                relations: ["type", "provider"],
            },
        };
    });
    const options = (0, shipping_options_1.listShippingOptionsForContextStep)(listOptionsInput);
    const optionIds = (0, workflows_sdk_1.transform)({ options }, (data) => data.options.map((option) => option.id));
    // TODO: Separate shipping options based on price_type, flat_rate vs calculated
    const priceSets = (0, steps_1.getShippingOptionPriceSetsStep)({
        optionIds,
        context: {
            currency_code: input.currency_code,
        },
    });
    const shippingOptionsWithPrice = (0, workflows_sdk_1.transform)({ priceSets, options }, (data) => {
        const options = data.options.map((option) => {
            const price = data.priceSets?.[option.id].calculated_amount;
            return {
                ...option,
                amount: price,
            };
        });
        return options;
    });
    return shippingOptionsWithPrice;
});
