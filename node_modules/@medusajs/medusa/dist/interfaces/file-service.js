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
exports.AbstractFileService = void 0;
var transaction_base_service_1 = require("./transaction-base-service");
/**
 * @parentIgnore activeManager_,atomicPhase_,shouldRetryTransaction_,withTransaction
 */
var AbstractFileService = /** @class */ (function (_super) {
    __extends(AbstractFileService, _super);
    /**
     * You can use the `constructor` of your file service to access the different services in Medusa through dependency injection.
     *
     * You can also use the constructor to initialize your integration with the third-party provider. For example, if you use a client to connect to the third-party provider’s APIs,
     * you can initialize it in the constructor and use it in other methods in the service.
     *
     * Additionally, if you’re creating your file service as an external plugin to be installed on any Medusa backend and you want to access the options added for the plugin,
     * you can access them in the constructor.
     *
     * @param {Record<string, unknown>} container - An instance of `MedusaContainer` that allows you to access other resources, such as services, in your Medusa backend.
     * @param {Record<string, unknown>} config - If this file service is created in a plugin, the plugin's options are passed in this parameter.
     *
     * @example
     * // ...
     * import { Logger } from "@medusajs/medusa"
     * import * as fs from "fs"
     *
     * class LocalFileService extends AbstractFileService {
     *   // can also be replaced by an environment variable
     *   // or a plugin option
     *   protected serverUrl = "http://localhost:9000"
     *   protected publicPath = "uploads"
     *   protected protectedPath = "protected-uploads"
     *   protected logger_: Logger
     *
     *   constructor({ logger }: InjectedDependencies) {
     *     // @ts-ignore
     *     super(...arguments)
     *     this.logger_ = logger
     *
     *     // for public uploads
     *     if (!fs.existsSync(this.publicPath)) {
     *       fs.mkdirSync(this.publicPath)
     *     }
     *
     *     // for protected uploads
     *     if (!fs.existsSync(this.protectedPath)) {
     *       fs.mkdirSync(this.protectedPath)
     *     }
     *   }
     *   // ...
     * }
     */
    function AbstractFileService(container, config // eslint-disable-next-line @typescript-eslint/no-empty-function
    ) {
        var _this = _super.call(this, container, config) || this;
        _this.container = container;
        _this.config = config;
        return _this;
    }
    /**
     * @ignore
     */
    AbstractFileService.isFileService = function (object) {
        var _a;
        return (_a = object === null || object === void 0 ? void 0 : object.constructor) === null || _a === void 0 ? void 0 : _a._isFileService;
    };
    /**
     * @ignore
     */
    AbstractFileService._isFileService = true;
    return AbstractFileService;
}(transaction_base_service_1.TransactionBaseService));
exports.AbstractFileService = AbstractFileService;
//# sourceMappingURL=file-service.js.map