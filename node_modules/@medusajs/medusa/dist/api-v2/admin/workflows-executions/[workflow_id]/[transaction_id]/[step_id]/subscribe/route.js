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
exports.GET = void 0;
var modules_sdk_1 = require("@medusajs/modules-sdk");
var GET = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var workflowEngineService, _a, workflow_id, transaction_id, subscriberId;
    return __generator(this, function (_b) {
        workflowEngineService = req.scope.resolve(modules_sdk_1.ModuleRegistrationName.WORKFLOW_ENGINE);
        _a = req.query, workflow_id = _a.workflow_id, transaction_id = _a.transaction_id;
        subscriberId = "__sub__" + Math.random().toString(36).substring(2, 9);
        res.writeHead(200, {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alive",
        });
        req.on("close", function () {
            res.end();
            void workflowEngineService.unsubscribe({
                workflowId: workflow_id,
                transactionId: transaction_id,
                subscriberOrId: subscriberId,
            });
        });
        req.on("error", function (err) {
            if (err.code === "ECONNRESET") {
                res.end();
            }
        });
        void workflowEngineService.subscribe({
            workflowId: workflow_id,
            transactionId: transaction_id,
            subscriber: function (args) { return __awaiter(void 0, void 0, void 0, function () {
                var eventType, workflowId, transactionId, step, response, result, errors, data;
                return __generator(this, function (_a) {
                    eventType = args.eventType, workflowId = args.workflowId, transactionId = args.transactionId, step = args.step, response = args.response, result = args.result, errors = args.errors;
                    data = {
                        event_type: eventType,
                        workflow_id: workflowId,
                        transaction_id: transactionId,
                        step: step,
                        response: response,
                        result: result,
                        errors: errors,
                    };
                    res.write("event: ".concat(eventType, "\ndata: ").concat(JSON.stringify(data), "\n\n"));
                    return [2 /*return*/];
                });
            }); },
            subscriberId: subscriberId,
        });
        return [2 /*return*/];
    });
}); };
exports.GET = GET;
//# sourceMappingURL=route.js.map