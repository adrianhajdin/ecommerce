"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStockLocationsWorkflow = exports.deleteStockLocationsWorkflowId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const modules_sdk_1 = require("@medusajs/modules-sdk");
const steps_1 = require("../steps");
const remove_remote_links_1 = require("../../common/steps/remove-remote-links");
exports.deleteStockLocationsWorkflowId = "delete-stock-locations-workflow";
exports.deleteStockLocationsWorkflow = (0, workflows_sdk_1.createWorkflow)(exports.deleteStockLocationsWorkflowId, (input) => {
    (0, steps_1.deleteStockLocationsStep)(input.ids);
    (0, remove_remote_links_1.removeRemoteLinkStep)({
        [modules_sdk_1.Modules.STOCK_LOCATION]: { stock_location_id: input.ids },
    });
});
