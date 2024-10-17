"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var middlewares_1 = require("./admin/api-keys/middlewares");
var middlewares_2 = require("./admin/campaigns/middlewares");
var middlewares_3 = require("./admin/collections/middlewares");
var middlewares_4 = require("./admin/currencies/middlewares");
var middlewares_5 = require("./admin/customer-groups/middlewares");
var middlewares_6 = require("./admin/customers/middlewares");
var middlewares_7 = require("./admin/draft-orders/middlewares");
var middlewares_8 = require("./admin/fulfillment-providers/middlewares");
var middlewares_9 = require("./admin/fulfillment-sets/middlewares");
var middlewares_10 = require("./admin/fulfillments/middlewares");
var middlewares_11 = require("./admin/inventory-items/middlewares");
var middlewares_12 = require("./admin/invites/middlewares");
var middlewares_13 = require("./admin/orders/middlewares");
var middlewares_14 = require("./admin/payments/middlewares");
var middlewares_15 = require("./admin/price-lists/middlewares");
var middlewares_16 = require("./admin/pricing/middlewares");
var middlewares_17 = require("./admin/product-categories/middlewares");
var middlewares_18 = require("./admin/product-types/middlewares");
var middlewares_19 = require("./admin/products/middlewares");
var middlewares_20 = require("./admin/promotions/middlewares");
var middlewares_21 = require("./admin/regions/middlewares");
var middlewares_22 = require("./admin/reservations/middlewares");
var middlewares_23 = require("./admin/sales-channels/middlewares");
var middlewares_24 = require("./admin/shipping-options/middlewares");
var middlewares_25 = require("./admin/shipping-profiles/middlewares");
var middlewares_26 = require("./admin/stock-locations/middlewares");
var middlewares_27 = require("./admin/stores/middlewares");
var middlewares_28 = require("./admin/tax-rates/middlewares");
var middlewares_29 = require("./admin/tax-regions/middlewares");
var middlewares_30 = require("./admin/uploads/middlewares");
var middlewares_31 = require("./admin/users/middlewares");
var middlewares_32 = require("./admin/workflows-executions/middlewares");
var middlewares_33 = require("./auth/middlewares");
var middlewares_34 = require("./hooks/middlewares");
var middlewares_35 = require("./store/carts/middlewares");
var middlewares_36 = require("./store/collections/middlewares");
var middlewares_37 = require("./store/currencies/middlewares");
var middlewares_38 = require("./store/customers/middlewares");
var middlewares_39 = require("./store/products/middlewares");
var middlewares_40 = require("./store/product-categories/middlewares");
var middlewares_41 = require("./store/regions/middlewares");
exports.config = {
    routes: __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(middlewares_5.adminCustomerGroupRoutesMiddlewares), false), __read(middlewares_6.adminCustomerRoutesMiddlewares), false), __read(middlewares_20.adminPromotionRoutesMiddlewares), false), __read(middlewares_2.adminCampaignRoutesMiddlewares), false), __read(middlewares_35.storeCartRoutesMiddlewares), false), __read(middlewares_38.storeCustomerRoutesMiddlewares), false), __read(middlewares_35.storeCartRoutesMiddlewares), false), __read(middlewares_36.storeCollectionRoutesMiddlewares), false), __read(middlewares_40.storeProductCategoryRoutesMiddlewares), false), __read(middlewares_33.authRoutesMiddlewares), false), __read(middlewares_32.adminWorkflowsExecutionsMiddlewares), false), __read(middlewares_41.storeRegionRoutesMiddlewares), false), __read(middlewares_21.adminRegionRoutesMiddlewares), false), __read(middlewares_31.adminUserRoutesMiddlewares), false), __read(middlewares_12.adminInviteRoutesMiddlewares), false), __read(middlewares_28.adminTaxRateRoutesMiddlewares), false), __read(middlewares_29.adminTaxRegionRoutesMiddlewares), false), __read(middlewares_1.adminApiKeyRoutesMiddlewares), false), __read(middlewares_34.hooksRoutesMiddlewares), false), __read(middlewares_27.adminStoreRoutesMiddlewares), false), __read(middlewares_4.adminCurrencyRoutesMiddlewares), false), __read(middlewares_37.storeCurrencyRoutesMiddlewares), false), __read(middlewares_19.adminProductRoutesMiddlewares), false), __read(middlewares_14.adminPaymentRoutesMiddlewares), false), __read(middlewares_15.adminPriceListsRoutesMiddlewares), false), __read(middlewares_11.adminInventoryRoutesMiddlewares), false), __read(middlewares_3.adminCollectionRoutesMiddlewares), false), __read(middlewares_16.adminPricingRoutesMiddlewares), false), __read(middlewares_24.adminShippingOptionRoutesMiddlewares), false), __read(middlewares_7.adminDraftOrderRoutesMiddlewares), false), __read(middlewares_23.adminSalesChannelRoutesMiddlewares), false), __read(middlewares_26.adminStockLocationRoutesMiddlewares), false), __read(middlewares_18.adminProductTypeRoutesMiddlewares), false), __read(middlewares_30.adminUploadRoutesMiddlewares), false), __read(middlewares_9.adminFulfillmentSetsRoutesMiddlewares), false), __read(middlewares_13.adminOrderRoutesMiddlewares), false), __read(middlewares_22.adminReservationRoutesMiddlewares), false), __read(middlewares_17.adminProductCategoryRoutesMiddlewares), false), __read(middlewares_22.adminReservationRoutesMiddlewares), false), __read(middlewares_25.adminShippingProfilesMiddlewares), false), __read(middlewares_10.adminFulfillmentsRoutesMiddlewares), false), __read(middlewares_8.adminFulfillmentProvidersRoutesMiddlewares), false), __read(middlewares_39.storeProductRoutesMiddlewares), false),
};
//# sourceMappingURL=middlewares.js.map