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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var utils_1 = require("../utils");
var interfaces_1 = require("../interfaces");
var CustomerGroupService = /** @class */ (function (_super) {
    __extends(CustomerGroupService, _super);
    function CustomerGroupService(_a) {
        var customerGroupRepository = _a.customerGroupRepository, customerService = _a.customerService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.customerGroupRepository_ = customerGroupRepository;
        _this.customerService_ = customerService;
        return _this;
    }
    CustomerGroupService.prototype.retrieve = function (customerGroupId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var cgRepo, query, customerGroup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(customerGroupId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"customerGroupId\" must be defined");
                        }
                        cgRepo = this.activeManager_.withRepository(this.customerGroupRepository_);
                        query = (0, utils_1.buildQuery)({ id: customerGroupId }, config);
                        return [4 /*yield*/, cgRepo.findOne(query)];
                    case 1:
                        customerGroup = _a.sent();
                        if (!customerGroup) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "CustomerGroup with id ".concat(customerGroupId, " was not found"));
                        }
                        return [2 /*return*/, customerGroup];
                }
            });
        });
    };
    /**
     * Creates a customer group with the provided data.
     * @param group - the customer group to create
     * @return the result of the create operation
     */
    CustomerGroupService.prototype.create = function (group) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var cgRepo, created, err_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        cgRepo = manager.withRepository(this.customerGroupRepository_);
                                        created = cgRepo.create(group);
                                        return [4 /*yield*/, cgRepo.save(created)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                    case 2:
                                        err_1 = _a.sent();
                                        if (err_1.code === utils_1.PostgresError.DUPLICATE_ERROR) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.DUPLICATE_ERROR, err_1.detail);
                                        }
                                        throw err_1;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Add a batch of customers to a customer group at once
     * @param id id of the customer group to add customers to
     * @param customerIds customer id's to add to the group
     * @return the customer group after insertion
     */
    CustomerGroupService.prototype.addCustomers = function (id, customerIds) {
        return __awaiter(this, void 0, void 0, function () {
            var ids;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof customerIds === "string") {
                            ids = [customerIds];
                        }
                        else {
                            ids = customerIds;
                        }
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var cgRepo;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            cgRepo = manager.withRepository(this.customerGroupRepository_);
                                            return [4 /*yield*/, cgRepo.addCustomers(id, ids)];
                                        case 1: return [2 /*return*/, _a.sent()];
                                    }
                                });
                            }); }, function (e) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.handleCreationFail(id, ids, e)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update a customer group.
     *
     * @param customerGroupId - id of the customer group
     * @param update - customer group partial data
     * @returns resulting customer group
     */
    CustomerGroupService.prototype.update = function (customerGroupId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var metadata, properties, cgRepo, customerGroup, key;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        metadata = update.metadata, properties = __rest(update, ["metadata"]);
                                        cgRepo = manager.withRepository(this.customerGroupRepository_);
                                        return [4 /*yield*/, this.retrieve(customerGroupId)];
                                    case 1:
                                        customerGroup = _a.sent();
                                        for (key in properties) {
                                            if ((0, medusa_core_utils_1.isDefined)(properties[key])) {
                                                customerGroup[key] = properties[key];
                                            }
                                        }
                                        if ((0, medusa_core_utils_1.isDefined)(metadata)) {
                                            customerGroup.metadata = (0, utils_1.setMetadata)(customerGroup, metadata);
                                        }
                                        return [4 /*yield*/, cgRepo.save(customerGroup)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Remove customer group
     *
     * @param groupId id of the customer group to delete
     * @return a promise
     */
    CustomerGroupService.prototype.delete = function (groupId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var cgRepo, customerGroup;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        cgRepo = manager.withRepository(this.customerGroupRepository_);
                                        return [4 /*yield*/, cgRepo.findOne({ where: { id: groupId } })];
                                    case 1:
                                        customerGroup = _a.sent();
                                        if (!customerGroup) return [3 /*break*/, 3];
                                        return [4 /*yield*/, cgRepo.remove(customerGroup)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/, Promise.resolve()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * List customer groups.
     *
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return  the result of the find operation
     */
    CustomerGroupService.prototype.list = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, customerGroups;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.listAndCount(selector, config)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), customerGroups = _a[0];
                        return [2 /*return*/, customerGroups];
                }
            });
        });
    };
    /**
     * Retrieve a list of customer groups and total count of records that match the query.
     *
     * @param selector - the query object for find
     * @param config - the config to be used for find
     * @return the result of the find operation
     */
    CustomerGroupService.prototype.listAndCount = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var cgRepo, q, query, relations, query_;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cgRepo = this.activeManager_.withRepository(this.customerGroupRepository_);
                        if ((0, utils_1.isString)(selector.q)) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_1.buildQuery)(selector, config);
                        query.where = query.where;
                        if (q) {
                            query.where.name = (0, typeorm_1.ILike)("%".concat(q, "%"));
                        }
                        if (!query.where.discount_condition_id) return [3 /*break*/, 2];
                        relations = query.relations, query_ = __rest(query, ["relations"]);
                        return [4 /*yield*/, cgRepo.findWithRelationsAndCount(relations, query_)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, cgRepo.findAndCount(query)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Remove list of customers from a customergroup
     *
     * @param id id of the customer group from which the customers are removed
     * @param customerIds id's of the customer to remove from group
     * @return the customergroup with the provided id
     */
    CustomerGroupService.prototype.removeCustomer = function (id, customerIds) {
        return __awaiter(this, void 0, void 0, function () {
            var cgRepo, ids, customerGroup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cgRepo = this.activeManager_.withRepository(this.customerGroupRepository_);
                        if (typeof customerIds === "string") {
                            ids = [customerIds];
                        }
                        else {
                            ids = customerIds;
                        }
                        return [4 /*yield*/, this.retrieve(id)];
                    case 1:
                        customerGroup = _a.sent();
                        return [4 /*yield*/, cgRepo.removeCustomers(id, ids)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, customerGroup];
                }
            });
        });
    };
    CustomerGroupService.prototype.handleCreationFail = function (id, ids, error) {
        return __awaiter(this, void 0, void 0, function () {
            var existingCustomers_1, nonExistingCustomers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(error.code === utils_1.PostgresError.FOREIGN_KEY_ERROR)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.retrieve(id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.customerService_.list({
                                id: ids,
                            })];
                    case 2:
                        existingCustomers_1 = _a.sent();
                        nonExistingCustomers = ids.filter(function (cId) { return existingCustomers_1.findIndex(function (el) { return el.id === cId; }) === -1; });
                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "The following customer ids do not exist: ".concat(JSON.stringify(nonExistingCustomers.join(", "))));
                    case 3: throw error;
                }
            });
        });
    };
    return CustomerGroupService;
}(interfaces_1.TransactionBaseService));
exports.default = CustomerGroupService;
//# sourceMappingURL=customer-group.js.map