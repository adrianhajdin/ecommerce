"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStockLocationsStep = exports.deleteStockLocationsStepId = void 0;
const workflows_sdk_1 = require("@medusajs/workflows-sdk");
const modules_sdk_1 = require("@medusajs/modules-sdk");
exports.deleteStockLocationsStepId = "delete-stock-locations-step";
exports.deleteStockLocationsStep = (0, workflows_sdk_1.createStep)(exports.deleteStockLocationsStepId, async (input, { container }) => {
    const service = container.resolve(modules_sdk_1.ModuleRegistrationName.STOCK_LOCATION);
    await service.softDelete(input);
    return new workflows_sdk_1.StepResponse(void 0, input);
}, async (deletedLocationIds, { container }) => {
    if (!deletedLocationIds?.length) {
        return;
    }
    const service = container.resolve(modules_sdk_1.ModuleRegistrationName.STOCK_LOCATION);
    await service.restore(deletedLocationIds);
});
