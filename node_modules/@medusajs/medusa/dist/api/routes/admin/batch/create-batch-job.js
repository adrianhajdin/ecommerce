"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.AdminPostBatchesReq = void 0;
var class_validator_1 = require("class-validator");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [post] /admin/batch-jobs
 * operationId: "PostBatchJobs"
 * summary: "Create a Batch Job"
 * description: "Create a Batch Job to be executed asynchronously in the Medusa backend. If `dry_run` is set to `true`, the batch job will not be executed until the it is confirmed,
 *  which can be done using the Confirm Batch Job API Route."
 * externalDocs:
 *   description: "How to create a batch job"
 *   url: "https://docs.medusajs.com/development/batch-jobs/create#create-batch-job"
 * x-authenticated: true
 * requestBody:
 *   content:
 *    application/json:
 *      schema:
 *        $ref: "#/components/schemas/AdminPostBatchesReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.batchJobs.create({
 *         type: 'product-export',
 *         context: {},
 *         dry_run: false
 *       }).then((({ batch_job }) => {
 *         console.log(batch_job.id);
 *       })
 *   - lang: tsx
 *     label: Medusa React
 *     source: |
 *       import React from "react"
 *       import { useAdminCreateBatchJob } from "medusa-react"
 *
 *       const CreateBatchJob = () => {
 *         const createBatchJob = useAdminCreateBatchJob()
 *         // ...
 *
 *         const handleCreateBatchJob = () => {
 *           createBatchJob.mutate({
 *             type: "publish-products",
 *             context: {},
 *             dry_run: true
 *           }, {
 *             onSuccess: ({ batch_job }) => {
 *               console.log(batch_job)
 *             }
 *           })
 *         }
 *
 *         // ...
 *       }
 *
 *       export default CreateBatchJob
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl -X POST '{backend_url}/admin/batch-jobs' \
 *       -H 'Content-Type: application/json' \
 *       -H 'x-medusa-access-token: {api_token}' \
 *       --data-raw '{
 *           "type": "product-export",
 *           "context": { }
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 *   - jwt_token: []
 * tags:
 *   - Batch Jobs
 * responses:
 *   201:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminBatchJobRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validated, batchJobService, userId, manager, batch_job;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, validator_1.validator)(AdminPostBatchesReq, req.body)];
            case 1:
                validated = _b.sent();
                batchJobService = req.scope.resolve("batchJobService");
                userId = (_a = req.user.id) !== null && _a !== void 0 ? _a : req.user.userId;
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        var toCreate;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, batchJobService
                                        .withTransaction(transactionManager)
                                        .prepareBatchJobForProcessing(validated, req)];
                                case 1:
                                    toCreate = _a.sent();
                                    return [4 /*yield*/, batchJobService.withTransaction(transactionManager).create(__assign(__assign({}, toCreate), { created_by: userId }))];
                                case 2: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 2:
                batch_job = _b.sent();
                res.status(201).json({ batch_job: batch_job });
                return [2 /*return*/];
        }
    });
}); });
/**
 * @schema AdminPostBatchesReq
 * type: object
 * description: The details of the batch job to create.
 * required:
 *   - type
 *   - context
 * properties:
 *   type:
 *     type: string
 *     description: >-
 *       The type of batch job to start, which is defined by the `batchType` property of the associated batch job strategy.
 *     example: product-export
 *   context:
 *     type: object
 *     description: Additional infomration regarding the batch to be used for processing.
 *     example:
 *       shape:
 *         prices:
 *           - region: null
 *             currency_code: "eur"
 *         dynamicImageColumnCount: 4
 *         dynamicOptionColumnCount: 2
 *       list_config:
 *         skip: 0
 *         take: 50
 *         order:
 *           created_at: "DESC"
 *         relations:
 *           - variants
 *           - variant.prices
 *           - images
 *   dry_run:
 *     type: boolean
 *     description: Set a batch job in dry_run mode, which would delay executing the batch job until it's confirmed.
 *     default: false
 */
var AdminPostBatchesReq = /** @class */ (function () {
    function AdminPostBatchesReq() {
        this.dry_run = false;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostBatchesReq.prototype, "type", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        __metadata("design:type", Object)
    ], AdminPostBatchesReq.prototype, "context", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostBatchesReq.prototype, "dry_run", void 0);
    return AdminPostBatchesReq;
}());
exports.AdminPostBatchesReq = AdminPostBatchesReq;
//# sourceMappingURL=create-batch-job.js.map