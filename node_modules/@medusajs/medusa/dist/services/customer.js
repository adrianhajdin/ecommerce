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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var medusa_core_utils_1 = require("medusa-core-utils");
var scrypt_kdf_1 = __importDefault(require("scrypt-kdf"));
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var utils_2 = require("@medusajs/utils");
/**
 * Provides layer to manipulate customers.
 */
var CustomerService = /** @class */ (function (_super) {
    __extends(CustomerService, _super);
    function CustomerService(_a) {
        var customerRepository = _a.customerRepository, eventBusService = _a.eventBusService, addressRepository = _a.addressRepository;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.customerRepository_ = customerRepository;
        _this.eventBusService_ = eventBusService;
        _this.addressRepository_ = addressRepository;
        return _this;
    }
    /**
     * Generate a JSON Web token, that will be sent to a customer, that wishes to
     * reset password.
     * The token will be signed with the customer's current password hash as a
     * secret a long side a payload with userId and the expiry time for the token,
     * which is always 15 minutes.
     * @param {string} customerId - the customer to reset the password for
     * @return {string} the generated JSON web token
     */
    CustomerService.prototype.generateResetPasswordToken = function (customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var customer, secret, expiry, payload, token;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(customerId, {
                                            select: [
                                                "id",
                                                "has_account",
                                                "password_hash",
                                                "email",
                                                "first_name",
                                                "last_name",
                                            ],
                                        })];
                                    case 1:
                                        customer = _a.sent();
                                        if (!customer.has_account) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "You must have an account to reset the password. Create an account first");
                                        }
                                        secret = customer.password_hash;
                                        expiry = Math.floor(Date.now() / 1000) + 60 * 15 // 15 minutes ahead
                                        ;
                                        payload = { customer_id: customer.id, exp: expiry };
                                        token = jsonwebtoken_1.default.sign(payload, secret);
                                        // Notify subscribers
                                        void this.eventBusService_
                                            .withTransaction(manager)
                                            .emit(CustomerService.Events.PASSWORD_RESET, {
                                            id: customerId,
                                            email: customer.email,
                                            first_name: customer.first_name,
                                            last_name: customer.last_name,
                                            token: token,
                                        });
                                        return [2 /*return*/, token];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param {Object} selector - the query object for find
     * @param {Object} config - the config object containing query settings
     * @return {Promise} the result of the find operation
     */
    CustomerService.prototype.list = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { relations: [], skip: 0, take: 50 }; }
        return __awaiter(this, void 0, void 0, function () {
            var customerRepo, q, query, _a, customers;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        customerRepo = this.activeManager_.withRepository(this.customerRepository_);
                        if ("q" in selector) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_1.buildQuery)(selector, config);
                        return [4 /*yield*/, customerRepo.listAndCount(query, q)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), customers = _a[0];
                        return [2 /*return*/, customers];
                }
            });
        });
    };
    /**
     * @param {Object} selector - the query object for find
     * @param {FindConfig<Customer>} config - the config object containing query settings
     * @return {Promise} the result of the find operation
     */
    CustomerService.prototype.listAndCount = function (selector, config) {
        if (config === void 0) { config = {
            relations: [],
            skip: 0,
            take: 50,
            order: { created_at: "DESC" },
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var customerRepo, q, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customerRepo = this.activeManager_.withRepository(this.customerRepository_);
                        if ("q" in selector) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_1.buildQuery)(selector, config);
                        return [4 /*yield*/, customerRepo.listAndCount(query, q)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Return the total number of documents in database
     * @return {Promise} the result of the count operation
     */
    CustomerService.prototype.count = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customerRepo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customerRepo = this.activeManager_.withRepository(this.customerRepository_);
                        return [4 /*yield*/, customerRepo.count({})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CustomerService.prototype.retrieve_ = function (selector, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var customerRepo, query, customer, selectorConstraints;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customerRepo = this.activeManager_.withRepository(this.customerRepository_);
                        query = (0, utils_1.buildQuery)(selector, config);
                        return [4 /*yield*/, customerRepo.findOne(query)];
                    case 1:
                        customer = _a.sent();
                        if (!customer) {
                            selectorConstraints = (0, utils_2.selectorConstraintsToString)(selector);
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Customer with ".concat(selectorConstraints, " was not found"));
                        }
                        return [2 /*return*/, customer];
                }
            });
        });
    };
    /**
     * Gets a registered customer by email.
     * @param {string} email - the email of the customer to get.
     * @param {Object} config - the config object containing query settings
     * @return {Promise<Customer>} the customer document.
     * @deprecated
     */
    CustomerService.prototype.retrieveByEmail = function (email, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(email)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"email\" must be defined");
                        }
                        return [4 /*yield*/, this.retrieve_({ email: email.toLowerCase() }, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CustomerService.prototype.retrieveUnregisteredByEmail = function (email, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrieve_({ email: email.toLowerCase(), has_account: false }, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CustomerService.prototype.retrieveRegisteredByEmail = function (email, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrieve_({ email: email.toLowerCase(), has_account: true }, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CustomerService.prototype.listByEmail = function (email, config) {
        if (config === void 0) { config = { relations: [], skip: 0, take: 2 }; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.list({ email: email.toLowerCase() }, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets a customer by phone.
     * @param {string} phone - the phone of the customer to get.
     * @param {Object} config - the config object containing query settings
     * @return {Promise<Customer>} the customer document.
     */
    CustomerService.prototype.retrieveByPhone = function (phone, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrieve_({ phone: phone }, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets a customer by id.
     * @param {string} customerId - the id of the customer to get.
     * @param {Object} config - the config object containing query settings
     * @return {Promise<Customer>} the customer document.
     */
    CustomerService.prototype.retrieve = function (customerId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!(0, medusa_core_utils_1.isDefined)(customerId)) {
                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"customerId\" must be defined");
                }
                return [2 /*return*/, this.retrieve_({ id: customerId }, config)];
            });
        });
    };
    /**
     * Hashes a password
     * @param {string} password - the value to hash
     * @return {Promise<string>} hashed password
     */
    CustomerService.prototype.hashPassword_ = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            var buf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, scrypt_kdf_1.default.kdf(password, { logN: 1, r: 1, p: 1 })];
                    case 1:
                        buf = _a.sent();
                        return [2 /*return*/, buf.toString("base64")];
                }
            });
        });
    };
    /**
     * Creates a customer from an email - customers can have accounts associated,
     * e.g. to login and view order history, etc. If a password is provided the
     * customer will automatically get an account, otherwise the customer is just
     * used to hold details of customers.
     * @param {object} customer - the customer to create
     * @return {Promise} the result of create
     */
    CustomerService.prototype.create = function (customer) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var customerRepository, email, password, existing, hashedPassword, created, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        customerRepository = manager.withRepository(this.customerRepository_);
                                        customer.email = customer.email.toLowerCase();
                                        email = customer.email, password = customer.password;
                                        return [4 /*yield*/, this.listByEmail(email).catch(function () { return undefined; })
                                            // should validate that "existing.some(acc => acc.has_account) && password"
                                        ];
                                    case 1:
                                        existing = _a.sent();
                                        // should validate that "existing.some(acc => acc.has_account) && password"
                                        if (existing) {
                                            if (existing.some(function (customer) { return customer.has_account; }) && password) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.DUPLICATE_ERROR, "A customer with the given email already has an account. Log in instead");
                                            }
                                            else if ((existing === null || existing === void 0 ? void 0 : existing.some(function (customer) { return !customer.has_account; })) &&
                                                !password) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.DUPLICATE_ERROR, "Guest customer with email already exists");
                                            }
                                        }
                                        if (!password) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.hashPassword_(password)];
                                    case 2:
                                        hashedPassword = _a.sent();
                                        customer.password_hash = hashedPassword;
                                        customer.has_account = true;
                                        delete customer.password;
                                        _a.label = 3;
                                    case 3:
                                        created = customerRepository.create(customer);
                                        return [4 /*yield*/, customerRepository.save(created)];
                                    case 4:
                                        result = _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(CustomerService.Events.CREATED, result)];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a customer.
     * @param {string} customerId - the id of the variant. Must be a string that
     *   can be casted to an ObjectId
     * @param {object} update - an object with the update values.
     * @return {Promise} resolves to the update result.
     */
    CustomerService.prototype.update = function (customerId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var customerRepository, customer, password, metadata, billing_address, billing_address_id, groups, rest, address, _a, _b, _c, key, value, _d, updated;
                            var e_1, _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        customerRepository = manager.withRepository(this.customerRepository_);
                                        return [4 /*yield*/, this.retrieve(customerId)];
                                    case 1:
                                        customer = _f.sent();
                                        password = update.password, metadata = update.metadata, billing_address = update.billing_address, billing_address_id = update.billing_address_id, groups = update.groups, rest = __rest(update, ["password", "metadata", "billing_address", "billing_address_id", "groups"]);
                                        if (metadata) {
                                            customer.metadata = (0, utils_1.setMetadata)(customer, metadata);
                                        }
                                        if (!("billing_address_id" in update || "billing_address" in update)) return [3 /*break*/, 3];
                                        address = billing_address_id || billing_address;
                                        if (!(0, medusa_core_utils_1.isDefined)(address)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.updateBillingAddress_(customer, address)];
                                    case 2:
                                        _f.sent();
                                        _f.label = 3;
                                    case 3:
                                        try {
                                            for (_a = __values(Object.entries(rest)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                                                customer[key] = value;
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        if (!password) return [3 /*break*/, 5];
                                        _d = customer;
                                        return [4 /*yield*/, this.hashPassword_(password)];
                                    case 4:
                                        _d.password_hash = _f.sent();
                                        _f.label = 5;
                                    case 5:
                                        if (groups) {
                                            customer.groups = groups;
                                        }
                                        return [4 /*yield*/, customerRepository.save(customer)];
                                    case 6:
                                        updated = _f.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(CustomerService.Events.UPDATED, updated)];
                                    case 7:
                                        _f.sent();
                                        return [2 /*return*/, updated];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates the customers' billing address.
     * @param {Customer} customer - the Customer to update
     * @param {Object|string} addressOrId - the value to set the billing address to
     * @return {Promise} the result of the update operation
     */
    CustomerService.prototype.updateBillingAddress_ = function (customer, addressOrId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var addrRepo, address, fetchedAddress, addr, created, saved;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        addrRepo = manager.withRepository(this.addressRepository_);
                                        if (addressOrId === null || addressOrId === undefined) {
                                            customer.billing_address_id = null;
                                            return [2 /*return*/];
                                        }
                                        if (!(typeof addressOrId === "string")) return [3 /*break*/, 2];
                                        return [4 /*yield*/, addrRepo.findOne({
                                                where: { id: addressOrId },
                                            })];
                                    case 1:
                                        fetchedAddress = _b.sent();
                                        if (!fetchedAddress) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Address with id ".concat(addressOrId, " was not found"));
                                        }
                                        address = fetchedAddress;
                                        return [3 /*break*/, 3];
                                    case 2:
                                        address = addressOrId;
                                        _b.label = 3;
                                    case 3:
                                        address.country_code = (_a = address.country_code) === null || _a === void 0 ? void 0 : _a.toLowerCase();
                                        if (!(0, medusa_core_utils_1.isDefined)(address === null || address === void 0 ? void 0 : address.id)) return [3 /*break*/, 4];
                                        customer.billing_address_id = address.id;
                                        return [3 /*break*/, 9];
                                    case 4:
                                        if (!customer.billing_address_id) return [3 /*break*/, 7];
                                        return [4 /*yield*/, addrRepo.findOne({
                                                where: { id: customer.billing_address_id },
                                            })];
                                    case 5:
                                        addr = _b.sent();
                                        return [4 /*yield*/, addrRepo.save(__assign(__assign({}, addr), address))];
                                    case 6:
                                        _b.sent();
                                        return [3 /*break*/, 9];
                                    case 7:
                                        created = addrRepo.create(address);
                                        return [4 /*yield*/, addrRepo.save(created)];
                                    case 8:
                                        saved = _b.sent();
                                        customer.billing_address = saved;
                                        _b.label = 9;
                                    case 9: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CustomerService.prototype.updateAddress = function (customerId, addressId, address) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var addressRepo, toUpdate, _a, _b, _c, key, value;
                            var e_2, _d;
                            var _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        addressRepo = manager.withRepository(this.addressRepository_);
                                        address.country_code = (_e = address.country_code) === null || _e === void 0 ? void 0 : _e.toLowerCase();
                                        return [4 /*yield*/, addressRepo.findOne({
                                                where: { id: addressId, customer_id: customerId },
                                            })];
                                    case 1:
                                        toUpdate = _f.sent();
                                        if (!toUpdate) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Could not find address for customer");
                                        }
                                        try {
                                            for (_a = __values(Object.entries(address)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                                                toUpdate[key] = value;
                                            }
                                        }
                                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_2) throw e_2.error; }
                                        }
                                        return [2 /*return*/, addressRepo.save(toUpdate)];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CustomerService.prototype.removeAddress = function (customerId, addressId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var addressRepo, address;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        addressRepo = manager.withRepository(this.addressRepository_);
                                        return [4 /*yield*/, addressRepo.findOne({
                                                where: { id: addressId, customer_id: customerId },
                                            })];
                                    case 1:
                                        address = _a.sent();
                                        if (!address) {
                                            return [2 /*return*/];
                                        }
                                        return [4 /*yield*/, addressRepo.softRemove(address)];
                                    case 2:
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
    CustomerService.prototype.addAddress = function (customerId, address) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var addressRepository, customer, shouldAdd, created, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        addressRepository = manager.withRepository(this.addressRepository_);
                                        address.country_code = address.country_code.toLowerCase();
                                        return [4 /*yield*/, this.retrieve(customerId, {
                                                relations: ["shipping_addresses"],
                                            })];
                                    case 1:
                                        customer = _a.sent();
                                        shouldAdd = !customer.shipping_addresses.find(function (a) {
                                            var _a;
                                            return ((_a = a.country_code) === null || _a === void 0 ? void 0 : _a.toLowerCase()) ===
                                                address.country_code.toLowerCase() &&
                                                a.address_1 === address.address_1 &&
                                                a.address_2 === address.address_2 &&
                                                a.city === address.city &&
                                                a.phone === address.phone &&
                                                a.postal_code === address.postal_code &&
                                                a.province === address.province &&
                                                a.first_name === address.first_name &&
                                                a.last_name === address.last_name;
                                        });
                                        if (!shouldAdd) return [3 /*break*/, 3];
                                        created = addressRepository.create(__assign(__assign({}, address), { customer_id: customerId }));
                                        return [4 /*yield*/, addressRepository.save(created)];
                                    case 2:
                                        result = _a.sent();
                                        return [2 /*return*/, result];
                                    case 3: return [2 /*return*/, customer];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes a customer from a given customer id.
     * @param {string} customerId - the id of the customer to delete. Must be
     *   castable as an ObjectId
     * @return {Promise} the result of the delete operation.
     */
    CustomerService.prototype.delete = function (customerId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var customerRepo, customer;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        customerRepo = manager.withRepository(this.customerRepository_);
                                        return [4 /*yield*/, customerRepo.findOne({ where: { id: customerId } })];
                                    case 1:
                                        customer = _a.sent();
                                        if (!customer) {
                                            return [2 /*return*/];
                                        }
                                        return [4 /*yield*/, customerRepo.softRemove(customer)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CustomerService.Events = {
        PASSWORD_RESET: "customer.password_reset",
        CREATED: "customer.created",
        UPDATED: "customer.updated",
    };
    return CustomerService;
}(interfaces_1.TransactionBaseService));
exports.default = CustomerService;
//# sourceMappingURL=customer.js.map