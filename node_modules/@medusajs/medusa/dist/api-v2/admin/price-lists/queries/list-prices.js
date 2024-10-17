"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPrices = void 0;
var utils_1 = require("@medusajs/utils");
var listPrices = function (ids, scope, fields) {
    var remoteQuery = scope.resolve(utils_1.ContainerRegistrationKeys.REMOTE_QUERY);
    var queryObject = (0, utils_1.remoteQueryObjectFromString)({
        entryPoint: "price",
        variables: {
            filters: { id: ids },
        },
        fields: fields,
    });
    return remoteQuery(queryObject);
};
exports.listPrices = listPrices;
//# sourceMappingURL=list-prices.js.map