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
var interfaces_1 = require("../interfaces");
var medusa_core_utils_1 = require("medusa-core-utils");
var StrategyResolver = /** @class */ (function (_super) {
    __extends(StrategyResolver, _super);
    function StrategyResolver(container) {
        var _this = _super.call(this, container) || this;
        _this.container = container;
        return _this;
    }
    StrategyResolver.prototype.resolveBatchJobByType = function (type) {
        var resolved;
        try {
            resolved = this.container["batchType_".concat(type)];
        }
        catch (e) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Unable to find a BatchJob strategy with the type ".concat(type));
        }
        return resolved;
    };
    return StrategyResolver;
}(interfaces_1.TransactionBaseService));
exports.default = StrategyResolver;
//# sourceMappingURL=strategy-resolver.js.map