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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var medusa_core_utils_1 = require("medusa-core-utils");
var scrypt_kdf_1 = __importDefault(require("scrypt-kdf"));
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var analytics_1 = __importDefault(require("../loaders/feature-flags/analytics"));
var utils_1 = require("../utils");
var is_email_1 = require("../utils/is-email");
/**
 * Provides layer to manipulate users.
 */
var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(_a) {
        var userRepository = _a.userRepository, eventBusService = _a.eventBusService, analyticsConfigService = _a.analyticsConfigService, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.userRepository_ = userRepository;
        _this.analyticsConfigService_ = analyticsConfigService;
        _this.featureFlagRouter_ = featureFlagRouter;
        _this.eventBus_ = eventBusService;
        return _this;
    }
    /**
     * @param {FilterableUserProps} selector - the query object for find
     * @param {Object} config - the configuration object for the query
     * @return {Promise} the result of the find operation
     */
    UserService.prototype.list = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { skip: 0, take: 50 }; }
        return __awaiter(this, void 0, void 0, function () {
            var userRepo, q, query, where;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepo = this.activeManager_.withRepository(this.userRepository_);
                        if (selector.q) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_1.buildQuery)(selector, config);
                        if (q) {
                            where = query.where;
                            delete where.email;
                            delete where.first_name;
                            delete where.last_name;
                            query.where = [
                                __assign(__assign({}, where), { email: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                                __assign(__assign({}, where), { first_name: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                                __assign(__assign({}, where), { last_name: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                            ];
                        }
                        return [4 /*yield*/, userRepo.find(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.prototype.listAndCount = function (selector, config) {
        if (selector === void 0) { selector = {}; }
        if (config === void 0) { config = { skip: 0, take: 50 }; }
        return __awaiter(this, void 0, void 0, function () {
            var userRepo, q, query, where;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepo = this.activeManager_.withRepository(this.userRepository_);
                        if (selector.q) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_1.buildQuery)(selector, config);
                        if (q) {
                            where = query.where;
                            delete where.email;
                            delete where.first_name;
                            delete where.last_name;
                            query.where = [
                                __assign(__assign({}, where), { email: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                                __assign(__assign({}, where), { first_name: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                                __assign(__assign({}, where), { last_name: (0, typeorm_1.ILike)("%".concat(q, "%")) }),
                            ];
                        }
                        return [4 /*yield*/, userRepo.findAndCount(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets a user by id.
     * Throws in case of DB Error and if user was not found.
     * @param {string} userId - the id of the user to get.
     * @param {FindConfig} config - query configs
     * @return {Promise<User>} the user document.
     */
    UserService.prototype.retrieve = function (userId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var userRepo, query, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(userId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"userId\" must be defined");
                        }
                        userRepo = this.activeManager_.withRepository(this.userRepository_);
                        query = (0, utils_1.buildQuery)({ id: userId }, config);
                        return [4 /*yield*/, userRepo.find(query)];
                    case 1:
                        users = _a.sent();
                        if (!users.length) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "User with id: ".concat(userId, " was not found"));
                        }
                        return [2 /*return*/, users[0]];
                }
            });
        });
    };
    /**
     * Gets a user by api token.
     * Throws in case of DB Error and if user was not found.
     * @param {string} apiToken - the token of the user to get.
     * @param {string[]} relations - relations to include with the user.
     * @return {Promise<User>} the user document.
     */
    UserService.prototype.retrieveByApiToken = function (apiToken, relations) {
        if (relations === void 0) { relations = []; }
        return __awaiter(this, void 0, void 0, function () {
            var userRepo, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepo = this.activeManager_.withRepository(this.userRepository_);
                        return [4 /*yield*/, userRepo.findOne({
                                where: { api_token: apiToken },
                                relations: relations,
                            })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "User with api token: ".concat(apiToken, " was not found"));
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    /**
     * Gets a user by email.
     * Throws in case of DB Error and if user was not found.
     * @param {string} email - the email of the user to get.
     * @param {FindConfig} config - query config
     * @return {Promise<User>} the user document.
     */
    UserService.prototype.retrieveByEmail = function (email, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var userRepo, query, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepo = this.activeManager_.withRepository(this.userRepository_);
                        query = (0, utils_1.buildQuery)({ email: email.toLowerCase() }, config);
                        return [4 /*yield*/, userRepo.findOne(query)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "User with email: ".concat(email, " was not found"));
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    /**
     * Hashes a password
     * @param {string} password - the value to hash
     * @return {string} hashed password
     */
    UserService.prototype.hashPassword_ = function (password) {
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
     * Creates a user with username being validated.
     * Fails if email is not a valid format.
     * @param {object} user - the user to create
     * @param {string} password - user's password to hash
     * @return {Promise} the result of create
     */
    UserService.prototype.create = function (user, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var userRepo, createData, validatedEmail, userEntity, hashedPassword, created, newUser;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        userRepo = manager.withRepository(this.userRepository_);
                                        createData = __assign({}, user);
                                        validatedEmail = (0, is_email_1.validateEmail)(user.email);
                                        return [4 /*yield*/, userRepo.findOne({
                                                where: { email: validatedEmail },
                                            })];
                                    case 1:
                                        userEntity = _a.sent();
                                        if (userEntity) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "A user with the same email already exists.");
                                        }
                                        if (!password) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.hashPassword_(password)];
                                    case 2:
                                        hashedPassword = _a.sent();
                                        createData.password_hash = hashedPassword;
                                        _a.label = 3;
                                    case 3:
                                        createData.email = validatedEmail;
                                        created = userRepo.create(createData);
                                        return [4 /*yield*/, userRepo.save(created)];
                                    case 4:
                                        newUser = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(UserService.Events.CREATED, { id: newUser.id })];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, newUser];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a user.
     * @param {object} userId - id of the user to update
     * @param {object} update - the values to be updated on the user
     * @return {Promise} the result of create
     */
    UserService.prototype.update = function (userId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var userRepo, user, email, password_hash, metadata, rest, _a, _b, _c, key, value, updatedUser;
                            var e_1, _d;
                            return __generator(this, function (_e) {
                                switch (_e.label) {
                                    case 0:
                                        userRepo = manager.withRepository(this.userRepository_);
                                        return [4 /*yield*/, this.retrieve(userId)];
                                    case 1:
                                        user = _e.sent();
                                        email = update.email, password_hash = update.password_hash, metadata = update.metadata, rest = __rest(update, ["email", "password_hash", "metadata"]);
                                        if (email) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "You are not allowed to update email");
                                        }
                                        if (password_hash) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Use dedicated methods, `setPassword`, `generateResetPasswordToken` for password operations");
                                        }
                                        if (metadata) {
                                            user.metadata = (0, utils_1.setMetadata)(user, metadata);
                                        }
                                        try {
                                            for (_a = __values(Object.entries(rest)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                                                user[key] = value;
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [4 /*yield*/, userRepo.save(user)];
                                    case 2:
                                        updatedUser = _e.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(UserService.Events.UPDATED, { id: updatedUser.id })];
                                    case 3:
                                        _e.sent();
                                        return [2 /*return*/, updatedUser];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes a user from a given user id.
     * @param {string} userId - the id of the user to delete. Must be
     *   castable as an ObjectId
     * @return {Promise} the result of the delete operation.
     */
    UserService.prototype.delete = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var userRepo, analyticsServiceTx, user;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        userRepo = manager.withRepository(this.userRepository_);
                                        analyticsServiceTx = this.analyticsConfigService_.withTransaction(manager);
                                        return [4 /*yield*/, userRepo.findOne({ where: { id: userId } })];
                                    case 1:
                                        user = _a.sent();
                                        if (!user) {
                                            return [2 /*return*/, Promise.resolve()];
                                        }
                                        if (!this.featureFlagRouter_.isFeatureEnabled(analytics_1.default.key)) return [3 /*break*/, 3];
                                        return [4 /*yield*/, analyticsServiceTx.delete(userId)];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [4 /*yield*/, userRepo.softRemove(user)];
                                    case 4:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(UserService.Events.DELETED, { id: user.id })];
                                    case 5:
                                        _a.sent();
                                        return [2 /*return*/, Promise.resolve()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sets a password for a user
     * Fails if no user exists with userId and if the hashing of the new
     * password does not work.
     * @param {string} userId - the userId to set password for
     * @param {string} password - the old password to set
     * @return {Promise} the result of the update operation
     */
    UserService.prototype.setPassword_ = function (userId, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var userRepo, user, hashedPassword;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        userRepo = manager.withRepository(this.userRepository_);
                                        return [4 /*yield*/, this.retrieve(userId)];
                                    case 1:
                                        user = _a.sent();
                                        return [4 /*yield*/, this.hashPassword_(password)];
                                    case 2:
                                        hashedPassword = _a.sent();
                                        if (!hashedPassword) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.DB_ERROR, "An error occured while hashing password");
                                        }
                                        user.password_hash = hashedPassword;
                                        return [4 /*yield*/, userRepo.save(user)];
                                    case 3: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Generate a JSON Web token, that will be sent to a user, that wishes to
     * reset password.
     * The token will be signed with the users current password hash as a secret
     * a long side a payload with userId and the expiry time for the token, which
     * is always 15 minutes.
     * @param {string} userId - the id of the user to reset password for
     * @return {string} the generated JSON web token
     */
    UserService.prototype.generateResetPasswordToken = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var user, secret, expiry, payload, token;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.retrieve(userId, {
                                            select: ["id", "email", "password_hash"],
                                        })];
                                    case 1:
                                        user = _a.sent();
                                        secret = user.password_hash;
                                        expiry = Math.floor(Date.now() / 1000) + 60 * 15;
                                        payload = { user_id: user.id, email: user.email, exp: expiry };
                                        token = jsonwebtoken_1.default.sign(payload, secret);
                                        // Notify subscribers
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(transactionManager)
                                                .emit(UserService.Events.PASSWORD_RESET, {
                                                email: user.email,
                                                token: token,
                                            })];
                                    case 2:
                                        // Notify subscribers
                                        _a.sent();
                                        return [2 /*return*/, token];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserService.Events = {
        PASSWORD_RESET: "user.password_reset",
        CREATED: "user.created",
        UPDATED: "user.updated",
        DELETED: "user.deleted",
    };
    return UserService;
}(interfaces_1.TransactionBaseService));
exports.default = UserService;
//# sourceMappingURL=user.js.map