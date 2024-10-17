"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FulfillmentSetLocation = void 0;
const modules_sdk_1 = require("@medusajs/modules-sdk");
const utils_1 = require("@medusajs/utils");
exports.FulfillmentSetLocation = {
    serviceName: utils_1.LINKS.FulfillmentSetLocation,
    isLink: true,
    databaseConfig: {
        tableName: "fulfillment_set_location",
        idPrefix: "fsloc",
    },
    alias: [
        {
            name: ["fulfillment_set_location", "fulfillment_set_locations"],
            args: {
                entity: "LinkFulfillmentSetLocation",
            },
        },
    ],
    primaryKeys: ["id", "fulfillment_set_id", "stock_location_id"],
    relationships: [
        {
            serviceName: modules_sdk_1.Modules.FULFILLMENT,
            primaryKey: "id",
            foreignKey: "fulfillment_set_id",
            alias: "fulfillment_set",
        },
        {
            serviceName: modules_sdk_1.Modules.STOCK_LOCATION,
            primaryKey: "id",
            foreignKey: "stock_location_id",
            alias: "location",
        },
    ],
    extends: [
        {
            serviceName: modules_sdk_1.Modules.FULFILLMENT,
            fieldAlias: {
                stock_locations: "locations_link.location",
            },
            relationship: {
                serviceName: utils_1.LINKS.FulfillmentSetLocation,
                primaryKey: "fulfillment_set_id",
                foreignKey: "id",
                alias: "locations_link",
                isList: true,
            },
        },
        {
            serviceName: modules_sdk_1.Modules.STOCK_LOCATION,
            relationship: {
                serviceName: utils_1.LINKS.FulfillmentSetLocation,
                primaryKey: "stock_location_id",
                foreignKey: "id",
                alias: "fulfillment_set_link",
                isList: true,
            },
            fieldAlias: {
                fulfillment_sets: "fulfillment_set_link.fulfillment_set",
            },
        },
    ],
};
