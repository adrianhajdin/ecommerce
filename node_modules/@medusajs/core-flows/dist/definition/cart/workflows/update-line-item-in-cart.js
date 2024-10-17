"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLineItemInCartWorkflow = exports.updateLineItemInCartWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const medusa_core_utils_1 = require("medusa-core-utils");
const use_remote_query_1 = require("../../../common/steps/use-remote-query");
const steps_1 = require("../../line-item/steps");
const steps_2 = require("../steps");
const refresh_cart_promotions_1 = require("../steps/refresh-cart-promotions");
const fields_1 = require("../utils/fields");
const prepare_confirm_inventory_input_1 = require("../utils/prepare-confirm-inventory-input");
const refresh_payment_collection_1 = require("./refresh-payment-collection");
// TODO: The UpdateLineItemsWorkflow are missing the following steps:
// - Validate shipping methods for new items (fulfillment module)
exports.updateLineItemInCartWorkflowId = "update-line-item-in-cart";
exports.updateLineItemInCartWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.updateLineItemInCartWorkflowId, (input) => {
    const item = (0, workflows_sdk_1.transform)({ input }, (data) => data.input.item);
    const pricingContext = (0, workflows_sdk_1.transform)({ cart: input.cart, item }, (data) => {
        return {
            currency_code: data.cart.currency_code,
            region_id: data.cart.region_id,
            customer_id: data.cart.customer_id,
        };
    });
    const variantIds = (0, workflows_sdk_1.transform)({ input }, (data) => [
        data.input.item.variant_id,
    ]);
    const salesChannelLocations = (0, use_remote_query_1.useRemoteQueryStep)({
        entry_point: "sales_channels",
        fields: ["id", "name", "stock_locations.id", "stock_locations.name"],
        variables: { id: input.cart.sales_channel_id },
    });
    const productVariantInventoryItems = (0, use_remote_query_1.useRemoteQueryStep)({
        entry_point: "product_variant_inventory_items",
        fields: ["variant_id", "inventory_item_id", "required_quantity"],
        variables: { variant_id: variantIds },
    }).config({ name: "inventory-items" });
    const variants = (0, steps_2.getVariantsStep)({
        filter: { id: variantIds },
        config: { select: ["id", "manage_inventory"] },
    });
    const confirmInventoryInput = (0, workflows_sdk_1.transform)({ productVariantInventoryItems, salesChannelLocations, input, variants }, (data) => {
        if (!data.salesChannelLocations.length) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, `Sales channel ${data.input.cart.sales_channel_id} is not associated with any stock locations.`);
        }
        const items = (0, prepare_confirm_inventory_input_1.prepareConfirmInventoryInput)({
            product_variant_inventory_items: data.productVariantInventoryItems,
            location_ids: data.salesChannelLocations[0].stock_locations.map((l) => l.id),
            items: [data.input.item],
            variants: data.variants.map((v) => ({
                id: v.id,
                manage_inventory: v.manage_inventory,
            })),
        });
        return { items };
    });
    (0, steps_2.confirmInventoryStep)(confirmInventoryInput);
    const priceSets = (0, steps_2.getVariantPriceSetsStep)({
        variantIds,
        context: pricingContext,
    });
    const lineItemUpdate = (0, workflows_sdk_1.transform)({ input, priceSets, item }, (data) => {
        const price = data.priceSets[data.item.variant_id].calculated_amount;
        return {
            data: {
                ...data.input.update,
                unit_price: price,
            },
            selector: {
                id: data.input.item.id,
            },
        };
    });
    const result = (0, steps_1.updateLineItemsStep)({
        data: lineItemUpdate.data,
        selector: lineItemUpdate.selector,
    });
    const cart = (0, use_remote_query_1.useRemoteQueryStep)({
        entry_point: "cart",
        fields: fields_1.cartFieldsForRefreshSteps,
        variables: { id: input.cart.id },
        list: false,
    }).config({ name: "refetch–cart" });
    (0, steps_2.refreshCartShippingMethodsStep)({ cart });
    (0, refresh_cart_promotions_1.refreshCartPromotionsStep)({ id: input.cart.id });
    (0, refresh_payment_collection_1.refreshPaymentCollectionForCartStep)({ cart_id: input.cart.id });
    const updatedItem = (0, workflows_sdk_1.transform)({ result }, (data) => data.result?.[0]);
    return updatedItem;
});
