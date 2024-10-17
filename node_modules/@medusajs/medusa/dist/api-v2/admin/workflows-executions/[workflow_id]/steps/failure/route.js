"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
var workflows_sdk_1 = require("@medusajs/workflows-sdk");
var utils_1 = require("@medusajs/utils");
var modules_sdk_1 = require("@medusajs/modules-sdk");
var POST = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var workflowEngineService, workflow_id, body, transaction_id, step_id, compensateInput, stepResponse, stepAction;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                workflowEngineService = req.scope.resolve(modules_sdk_1.ModuleRegistrationName.WORKFLOW_ENGINE);
                workflow_id = req.params.workflow_id;
                body = req.validatedBody;
                transaction_id = body.transaction_id, step_id = body.step_id;
                compensateInput = body.compensate_input;
                stepResponse = (0, utils_1.isDefined)(body.response)
                    ? new workflows_sdk_1.StepResponse(body.response, compensateInput)
                    : undefined;
                stepAction = body.action || utils_1.TransactionHandlerType.INVOKE;
                return [4 /*yield*/, workflowEngineService.setStepFailure({
                        idempotencyKey: {
                            action: stepAction,
                            transactionId: transaction_id,
                            stepId: step_id,
                            workflowId: workflow_id,
                        },
                        stepResponse: stepResponse,
                        options: {
                            container: req.scope,
                            context: {
                                requestId: req.requestId,
                            },
                        },
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/, res.status(200).json({ success: true })];
        }
    });
}); };
exports.POST = POST;
//# sourceMappingURL=route.js.map