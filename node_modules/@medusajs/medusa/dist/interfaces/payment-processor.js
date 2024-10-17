"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPaymentProcessorError = exports.AbstractPaymentProcessor = void 0;
var AbstractPaymentProcessor = /** @class */ (function () {
    /**
     * You can use the `constructor` of your Payment Processor to have access to different services in Medusa through [dependency injection](https://docs.medusajs.com/development/fundamentals/dependency-injection).
     *
     * You can also use the constructor to initialize your integration with the third-party provider. For example, if you use a client to connect to the third-party provider’s APIs,
     * you can initialize it in the constructor and use it in other methods in the service.
     *
     * Additionally, if you’re creating your Payment Processor as an external plugin to be installed on any Medusa backend and you want to access the options added for the plugin,
     * you can access it in the constructor. The options are passed as a second parameter.
     *
     * @param {Record<string, unknown>} container - An instance of `MedusaContainer` that allows you to access other resources, such as services, in your Medusa backend through [dependency injection](https://docs.medusajs.com/development/fundamentals/dependency-injection)
     * @param {Record<string, unknown>} config - If this payment processor is created in a plugin, the plugin's options are passed in this parameter.
     *
     * @example
     * ```ts
     * class MyPaymentService extends AbstractPaymentProcessor {
     *   // ...
     *   constructor(container, options) {
     *     super(container)
     *     // you can access options here
     *
     *     // you can also initialize a client that
     *     // communicates with a third-party service.
     *     this.client = new Client(options)
     *   }
     *   // ...
     * }
     * ```
     */
    function AbstractPaymentProcessor(container, config // eslint-disable-next-line @typescript-eslint/no-empty-function
    ) {
        this.container = container;
        this.config = config;
    }
    /**
     * @ignore
     */
    AbstractPaymentProcessor.isPaymentProcessor = function (object) {
        var _a;
        return (_a = object === null || object === void 0 ? void 0 : object.constructor) === null || _a === void 0 ? void 0 : _a._isPaymentProcessor;
    };
    /**
     * @ignore
     *
     * Return a unique identifier to retrieve the payment plugin provider
     */
    AbstractPaymentProcessor.prototype.getIdentifier = function () {
        var ctr = this.constructor;
        if (!ctr.identifier) {
            throw new Error("Missing static property \"identifier\".");
        }
        return ctr.identifier;
    };
    /**
     * @ignore
     */
    AbstractPaymentProcessor._isPaymentProcessor = true;
    return AbstractPaymentProcessor;
}());
exports.AbstractPaymentProcessor = AbstractPaymentProcessor;
function isPaymentProcessorError(obj) {
    return obj && typeof obj === "object" && obj.error && obj.code && obj.detail;
}
exports.isPaymentProcessorError = isPaymentProcessorError;
//# sourceMappingURL=payment-processor.js.map