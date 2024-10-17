"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderExportPropertiesDescriptors = void 0;
exports.orderExportPropertiesDescriptors = [
    {
        fieldName: "id",
        title: "Order_ID",
        accessor: function (order) { return order.id; },
    },
    {
        fieldName: "display_id",
        title: "Display_ID",
        accessor: function (order) { return order.display_id.toString(); },
    },
    {
        fieldName: "status",
        title: "Order status",
        accessor: function (order) { return order.status.toString(); },
    },
    {
        fieldName: "created_at",
        title: "Date",
        accessor: function (order) { return order.created_at.toUTCString(); },
    },
    {
        fieldName: "customer",
        title: [
            "Customer First name",
            "Customer Last name",
            "Customer Email",
            "Customer ID",
        ].join(";"),
        accessor: function (order) {
            return [
                order.customer.first_name,
                order.customer.last_name,
                order.customer.email,
                order.customer.id,
            ].join(";");
        },
    },
    {
        fieldName: "shipping_address",
        title: [
            "Shipping Address 1",
            "Shipping Address 2",
            "Shipping Country Code",
            "Shipping City",
            "Shipping Postal Code",
            "Shipping Region ID",
        ].join(";"),
        accessor: function (order) {
            var _a, _b, _c, _d, _e;
            return [
                (_a = order.shipping_address) === null || _a === void 0 ? void 0 : _a.address_1,
                (_b = order.shipping_address) === null || _b === void 0 ? void 0 : _b.address_2,
                (_c = order.shipping_address) === null || _c === void 0 ? void 0 : _c.country_code,
                (_d = order.shipping_address) === null || _d === void 0 ? void 0 : _d.city,
                (_e = order.shipping_address) === null || _e === void 0 ? void 0 : _e.postal_code,
                order.region_id,
            ].join(";");
        },
    },
    {
        fieldName: "fulfillment_status",
        title: "Fulfillment Status",
        accessor: function (order) { return order.fulfillment_status; },
    },
    {
        fieldName: "payment_status",
        title: "Payment Status",
        accessor: function (order) { return order.payment_status; },
    },
    {
        fieldName: "subtotal",
        title: "Subtotal",
        accessor: function (order) { return order.subtotal.toString(); },
    },
    {
        fieldName: "shipping_total",
        title: "Shipping Total",
        accessor: function (order) { return order.shipping_total.toString(); },
    },
    {
        fieldName: "discount_total",
        title: "Discount Total",
        accessor: function (order) { return order.discount_total.toString(); },
    },
    {
        fieldName: "gift_card_total",
        title: "Gift Card Total",
        accessor: function (order) { return order.gift_card_total.toString(); },
    },
    {
        fieldName: "refunded_total",
        title: "Refunded Total",
        accessor: function (order) { return order.refunded_total.toString(); },
    },
    {
        fieldName: "tax_total",
        title: "Tax Total",
        accessor: function (order) { var _a, _b; return (_b = (_a = order.tax_total) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
    },
    {
        fieldName: "total",
        title: "Total",
        accessor: function (order) { return order.total.toString(); },
    },
    {
        fieldName: "currency_code",
        title: "Currency Code",
        accessor: function (order) { return order.currency_code; },
    },
];
//# sourceMappingURL=index.js.map