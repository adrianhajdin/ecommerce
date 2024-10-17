"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAbstractFulfillmentServiceFromClass = exports.registerPaymentProcessorFromClass = void 0;
var awilix_1 = require("awilix");
var interfaces_1 = require("../../interfaces");
var medusa_interfaces_1 = require("medusa-interfaces");
function registerPaymentProcessorFromClass(klass, context) {
    var _a;
    if (!interfaces_1.AbstractPaymentProcessor.isPaymentProcessor(klass.prototype) &&
        !medusa_interfaces_1.PaymentService.isPaymentService(klass.prototype)) {
        return;
    }
    var container = context.container, pluginDetails = context.pluginDetails, registrationName = context.registrationName;
    container.registerAdd("paymentProviders", (0, awilix_1.asFunction)(function (cradle) { return new klass(cradle, pluginDetails.options); }, {
        lifetime: klass.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
    }));
    container.register((_a = {},
        _a[registrationName] = (0, awilix_1.asFunction)(function (cradle) { return new klass(cradle, pluginDetails.options); }, {
            lifetime: klass.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
        }),
        _a["pp_".concat(klass.identifier)] = (0, awilix_1.aliasTo)(registrationName),
        _a));
}
exports.registerPaymentProcessorFromClass = registerPaymentProcessorFromClass;
function registerAbstractFulfillmentServiceFromClass(klass, context) {
    var _a;
    if (!interfaces_1.AbstractFulfillmentService.isFulfillmentService(klass.prototype)) {
        return;
    }
    var container = context.container, pluginDetails = context.pluginDetails, registrationName = context.registrationName;
    container.registerAdd("fulfillmentProviders", (0, awilix_1.asFunction)(function (cradle) { return new klass(cradle, pluginDetails.options); }, {
        lifetime: klass.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
    }));
    container.register((_a = {},
        _a[registrationName] = (0, awilix_1.asFunction)(function (cradle) { return new klass(cradle, pluginDetails.options); }, {
            lifetime: klass.LIFE_TIME || awilix_1.Lifetime.SINGLETON,
        }),
        _a["fp_".concat(klass.identifier)] = (0, awilix_1.aliasTo)(registrationName),
        _a));
}
exports.registerAbstractFulfillmentServiceFromClass = registerAbstractFulfillmentServiceFromClass;
//# sourceMappingURL=plugins.js.map