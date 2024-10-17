"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCartWorkflow = exports.addToCartWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const medusa_core_utils_1 = require("medusa-core-utils");
const use_remote_query_1 = require("../../../common/steps/use-remote-query");
const steps_1 = require("../steps");
const refresh_cart_promotions_1 = require("../steps/refresh-cart-promotions");
const update_tax_lines_1 = require("../steps/update-tax-lines");
const fields_1 = require("../utils/fields");
const prepare_confirm_inventory_input_1 = require("../utils/prepare-confirm-inventory-input");
const prepare_line_item_data_1 = require("../utils/prepare-line-item-data");
const refresh_payment_collection_1 = require("./refresh-payment-collection");
// TODO: The AddToCartWorkflow are missing the following steps:
// - Refresh/delete shipping methods (fulfillment module)
exports.addToCartWorkflowId = "add-to-cart";
exports.addToCartWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.addToCartWorkflowId, (input) => {
    const variantIds = (0, workflows_sdk_1.transform)({ input }, (data) => {
        return (data.input.items ?? []).map((i) => i.variant_id);
    });
    (0, steps_1.validateVariantsExistStep)({ variantIds });
    const variants = (0, steps_1.getVariantsStep)({
        filter: { id: variantIds },
        config: {
            select: [
                "id",
                "title",
                "sku",
                "barcode",
                "product.id",
                "product.title",
                "product.description",
                "product.subtitle",
                "product.thumbnail",
                "product.type",
                "product.collection",
                "product.handle",
            ],
            relations: ["product"],
        },
    });
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
    const confirmInventoryInput = (0, workflows_sdk_1.transform)({ productVariantInventoryItems, salesChannelLocations, input, variants }, (data) => {
        if (!data.salesChannelLocations.length) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, `Sales channel ${data.input.cart.sales_channel_id} is not associated with any stock locations.`);
        }
        const items = (0, prepare_confirm_inventory_input_1.prepareConfirmInventoryInput)({
            product_variant_inventory_items: data.productVariantInventoryItems,
            location_ids: data.salesChannelLocations[0].stock_locations.map((l) => l.id),
            items: data.input.items,
            variants: data.variants.map((v) => ({
                id: v.id,
                manage_inventory: v.manage_inventory,
            })),
        });
        return { items };
    });
    (0, steps_1.confirmInventoryStep)(confirmInventoryInput);
    // TODO: This is on par with the context used in v1.*, but we can be more flexible.
    const pricingContext = (0, workflows_sdk_1.transform)({ cart: input.cart }, (data) => {
        return {
            currency_code: data.cart.currency_code,
            region_id: data.cart.region_id,
            customer_id: data.cart.customer_id,
        };
    });
    const priceSets = (0, steps_1.getVariantPriceSetsStep)({
        variantIds,
        context: pricingContext,
    });
    const lineItems = (0, workflows_sdk_1.transform)({ priceSets, input, variants }, (data) => {
        const items = (data.input.items ?? []).map((item) => {
            const variant = data.variants.find((v) => v.id === item.variant_id);
            return (0, prepare_line_item_data_1.prepareLineItemData)({
                variant: variant,
                unitPrice: data.priceSets[item.variant_id].calculated_amount,
                quantity: item.quantity,
                metadata: item?.metadata ?? {},
                cartId: data.input.cart.id,
            });
        });
        return items;
    });
    const items = (0, steps_1.addToCartStep)({ items: lineItems });
    const cart = (0, use_remote_query_1.useRemoteQueryStep)({
        entry_point: "cart",
        fields: fields_1.cartFieldsForRefreshSteps,
        variables: { id: input.cart.id },
        list: false,
    }).config({ name: "refetch–cart" });
    (0, steps_1.refreshCartShippingMethodsStep)({ cart });
    // TODO: since refreshCartShippingMethodsStep potentially removes cart shipping methods, we need the updated cart here
    // for the following 2 steps as they act upon final cart shape
    (0, update_tax_lines_1.updateTaxLinesStep)({ cart_or_cart_id: cart, items });
    (0, refresh_cart_promotions_1.refreshCartPromotionsStep)({ id: input.cart.id });
    (0, refresh_payment_collection_1.refreshPaymentCollectionForCartStep)({ cart_id: input.cart.id });
    return items;
});
