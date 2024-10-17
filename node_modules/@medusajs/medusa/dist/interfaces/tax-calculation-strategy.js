"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractTaxCalculationStrategy = void 0;
var transaction_base_service_1 = require("./transaction-base-service");
/**
 * @parentIgnore activeManager_,atomicPhase_,shouldRetryTransaction_,withTransaction
 */
var AbstractTaxCalculationStrategy = /** @class */ (function (_super) {
    __extends(AbstractTaxCalculationStrategy, _super);
    /**
     * You can use the `constructor` of your tax calculation strategy to access the different services in Medusa through dependency injection.
     *
     * You can also use the constructor to initialize your integration with the third-party provider. For example, if you use a client to connect to the third-party provider’s APIs, you can initialize it in the constructor and use it in other methods in the service.
     * Additionally, if you’re creating your tax calculation strategy as an external plugin to be installed on any Medusa backend and you want to access the options added for the plugin, you can access it in the constructor.
     *
     * @param {Record<string, unknown>} container - An instance of `MedusaContainer` that allows you to access other resources, such as services, in your Medusa backend.
     * @param {Record<string, unknown>} config - If this tax calculation strategy is created in a plugin, the plugin's options are passed in this parameter.
     *
     * @example
     * import {
     *   ITaxCalculationStrategy,
     *   LineItemService,
     * } from "@medusajs/medusa"
     *
     * type InjectedDependencies = {
     *   lineItemService: LineItemService
     * }
     *
     * class TaxCalculationStrategy
     *   implements ITaxCalculationStrategy {
     *
     *   protected readonly lineItemService_: LineItemService
     *
     *   constructor({ lineItemService }: InjectedDependencies) {
     *     this.lineItemService_ = lineItemService
     *   }
     *
     *   // ...
     * }
     *
     * export default TaxCalculationStrategy
     */
    function AbstractTaxCalculationStrategy(container, config // eslint-disable-next-line @typescript-eslint/no-empty-function
    ) {
        var _this = _super.call(this, container, config) || this;
        _this.container = container;
        _this.config = config;
        return _this;
    }
    /**
     * @ignore
     */
    AbstractTaxCalculationStrategy.isTaxCalculationStrategy = function (object) {
        var _a;
        return (typeof object.calculate === "function" ||
            ((_a = object === null || object === void 0 ? void 0 : object.constructor) === null || _a === void 0 ? void 0 : _a._isTaxCalculationStrategy));
    };
    /**
     * @ignore
     */
    AbstractTaxCalculationStrategy._isTaxCalculationStrategy = true;
    return AbstractTaxCalculationStrategy;
}(transaction_base_service_1.TransactionBaseService));
exports.AbstractTaxCalculationStrategy = AbstractTaxCalculationStrategy;
//# sourceMappingURL=tax-calculation-strategy.js.map