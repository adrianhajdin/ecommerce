"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshPaymentCollectionForCartWorkflow = exports.refreshPaymentCollectionForCartWorkflowId = exports.refreshPaymentCollectionForCartStep = exports.refreshPaymentCollectionForCartStepId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const use_remote_query_1 = require("../../../common/steps/use-remote-query");
const payment_collection_1 = require("../../payment-collection");
// We export a step running the workflow too, so that we can use it as a subworkflow e.g. in the update cart workflows
exports.refreshPaymentCollectionForCartStepId = "refresh-payment-collection-for-cart";
exports.refreshPaymentCollectionForCartStep = (0, workflows_sdk_1.createStep)(exports.refreshPaymentCollectionForCartStepId, async (data, { container }) => {
    await (0, exports.refreshPaymentCollectionForCartWorkflow)(container).run({
        input: {
            cart_id: data.cart_id,
        },
    });
    return new workflows_sdk_1.StepResponse(null);
});
exports.refreshPaymentCollectionForCartWorkflowId = "refresh-payment-collection-for-cart";
exports.refreshPaymentCollectionForCartWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.refreshPaymentCollectionForCartWorkflowId, (input) => {
    const carts = (0, use_remote_query_1.useRemoteQueryStep)({
        entry_point: "cart",
        fields: [
            "id",
            "total",
            "currency_code",
            "payment_collection.id",
            "payment_collection.payment_sessions.id",
        ],
        variables: { id: input.cart_id },
    });
    (0, payment_collection_1.deletePaymentSessionStep)({
        payment_session_id: carts[0].payment_collection.payment_sessions?.[0].id,
    });
    // TODO: Temporary fixed cart total, so we can test the workflow.
    //  This will be removed when the totals utilities are built.
    const cartTotal = 4242;
    (0, payment_collection_1.updatePaymentCollectionStep)({
        selector: { id: carts[0].payment_collection.id },
        update: {
            amount: cartTotal,
            currency_code: carts[0].currency_code,
        },
    });
});
