"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareLineItemData = void 0;
function prepareLineItemData(data) {
    const { variant, unitPrice, quantity, metadata, cartId } = data;
    if (!variant.product) {
        throw new Error("Variant does not have a product");
    }
    const lineItem = {
        quantity,
        title: variant.title,
        subtitle: variant.product.title,
        thumbnail: variant.product.thumbnail,
        product_id: variant.product.id,
        product_title: variant.product.title,
        product_description: variant.product.description,
        product_subtitle: variant.product.subtitle,
        product_type: variant.product.type?.[0].value ?? null,
        product_collection: variant.product.collection?.[0]?.value ?? null,
        product_handle: variant.product.handle,
        variant_id: variant.id,
        variant_sku: variant.sku,
        variant_barcode: variant.barcode,
        variant_title: variant.title,
        unit_price: unitPrice,
        metadata,
    };
    if (cartId) {
        lineItem.cart_id = cartId;
    }
    return lineItem;
}
exports.prepareLineItemData = prepareLineItemData;
