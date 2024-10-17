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
exports.AbstractTaxService = void 0;
var transaction_base_service_1 = require("./transaction-base-service");
/**
 * @parentIgnore activeManager_,atomicPhase_,shouldRetryTransaction_,withTransaction
 */
var AbstractTaxService = /** @class */ (function (_super) {
    __extends(AbstractTaxService, _super);
    /**
     * You can use the `constructor` of your tax provider to access the different services in Medusa through dependency injection.
     *
     * You can also use the constructor to initialize your integration with the third-party provider. For example, if you use a client to connect to the third-party provider’s APIs, you can initialize it in the constructor and use it in other methods in the service.
     * Additionally, if you’re creating your tax provider as an external plugin to be installed on any Medusa backend and you want to access the options added for the plugin, you can access it in the constructor.
     *
     * @param {Record<string, unknown>} container - An instance of `MedusaContainer` that allows you to access other resources, such as services, in your Medusa backend.
     * @param {Record<string, unknown>} config - If this tax provider is created in a plugin, the plugin's options are passed in this parameter.
     *
     * @example
     * // ...
     * import { LineItemService } from "@medusajs/medusa"
     *
     * type InjectedDependencies = {
     *   lineItemService: LineItemService
     * }
     *
     * class MyTaxService extends AbstractTaxService {
     *   protected readonly lineItemService_: LineItemService
     *
     *   constructor({ lineItemService }: InjectedDependencies) {
     *     super(arguments[0])
     *     this.lineItemService_ = lineItemService
     *
     *     // you can also initialize a client that
     *     // communicates with a third-party service.
     *     this.client = new Client(options)
     *   }
     *
     *   // ...
     * }
     *
     * export default MyTaxService
     */
    function AbstractTaxService(container, config // eslint-disable-next-line @typescript-eslint/no-empty-function
    ) {
        var _this = _super.call(this, container, config) || this;
        _this.container = container;
        _this.config = config;
        return _this;
    }
    /**
     * @ignore
     */
    AbstractTaxService.isTaxService = function (object) {
        var _a;
        return (_a = object === null || object === void 0 ? void 0 : object.constructor) === null || _a === void 0 ? void 0 : _a._isTaxService;
    };
    /**
     * @ignore
     */
    AbstractTaxService.prototype.getIdentifier = function () {
        if (!this.constructor.identifier) {
            throw new Error("Missing static property \"identifier\".");
        }
        return this.constructor.identifier;
    };
    /**
     * @ignore
     */
    AbstractTaxService._isTaxService = true;
    return AbstractTaxService;
}(transaction_base_service_1.TransactionBaseService));
exports.AbstractTaxService = AbstractTaxService;
//# sourceMappingURL=tax-service.js.map