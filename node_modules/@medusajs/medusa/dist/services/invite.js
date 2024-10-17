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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
var invite_1 = require("../repositories/invite");
var user_1 = require("../repositories/user");
var utils_1 = require("../utils");
// 7 days
var DEFAULT_VALID_DURATION = 1000 * 60 * 60 * 24 * 7;
var InviteService = /** @class */ (function (_super) {
    __extends(InviteService, _super);
    function InviteService(_a, configModule) {
        var userService = _a.userService, userRepository = _a.userRepository, inviteRepository = _a.inviteRepository, eventBusService = _a.eventBusService;
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.configModule_ = configModule;
        _this.userService_ = userService;
        _this.userRepo_ = userRepository;
        _this.inviteRepository_ = inviteRepository;
        _this.eventBus_ = eventBusService;
        return _this;
    }
    InviteService.prototype.generateToken = function (data) {
        var jwt_secret = this.configModule_.projectConfig.jwt_secret;
        if (jwt_secret) {
            return jsonwebtoken_1.default.sign(data, jwt_secret);
        }
        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Please configure jwt_secret");
    };
    InviteService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var inviteRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inviteRepo = this.activeManager_.withRepository(invite_1.InviteRepository);
                        query = (0, utils_1.buildQuery)(selector, config);
                        return [4 /*yield*/, inviteRepo.find(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates an account_user.
     * @param user - user emails
     * @param role - role to assign to the user
     * @param validDuration - role to assign to the user
     * @return the result of create
     */
    InviteService.prototype.create = function (user, role, validDuration) {
        if (validDuration === void 0) { validDuration = DEFAULT_VALID_DURATION; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var inviteRepository, userRepo, userEntity, invite, created;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        inviteRepository = this.activeManager_.withRepository(invite_1.InviteRepository);
                                        userRepo = this.activeManager_.withRepository(user_1.UserRepository);
                                        return [4 /*yield*/, userRepo.findOne({
                                                where: { email: user },
                                            })];
                                    case 1:
                                        userEntity = _a.sent();
                                        if (userEntity) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Can't invite a user with an existing account");
                                        }
                                        return [4 /*yield*/, inviteRepository.findOne({
                                                where: { user_email: user },
                                            })
                                            // if user is trying to send another invite for the same account + email, but with a different role
                                            // then change the role on the invite as long as the invite has not been accepted yet
                                        ];
                                    case 2:
                                        invite = _a.sent();
                                        if (!(invite && !invite.accepted && invite.role !== role)) return [3 /*break*/, 4];
                                        invite.role = role;
                                        return [4 /*yield*/, inviteRepository.save(invite)];
                                    case 3:
                                        invite = _a.sent();
                                        return [3 /*break*/, 6];
                                    case 4:
                                        if (!!invite) return [3 /*break*/, 6];
                                        created = inviteRepository.create({
                                            role: role,
                                            token: "",
                                            user_email: user,
                                        });
                                        return [4 /*yield*/, inviteRepository.save(created)];
                                    case 5:
                                        invite = _a.sent();
                                        _a.label = 6;
                                    case 6:
                                        invite.token = this.generateToken({
                                            invite_id: invite.id,
                                            role: role,
                                            user_email: user,
                                        });
                                        invite.expires_at = new Date();
                                        invite.expires_at.setMilliseconds(invite.expires_at.getMilliseconds() + validDuration);
                                        return [4 /*yield*/, inviteRepository.save(invite)];
                                    case 7:
                                        invite = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(InviteService.Events.CREATED, {
                                                id: invite.id,
                                                token: invite.token,
                                                user_email: invite.user_email,
                                            })];
                                    case 8:
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
     * Deletes an invite from a given user id.
     * @param inviteId - the id of the invite to delete. Must be
     *   castable as an ObjectId
     * @return the result of the delete operation.
     */
    InviteService.prototype.delete = function (inviteId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var inviteRepo, invite;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        inviteRepo = manager.withRepository(invite_1.InviteRepository);
                                        return [4 /*yield*/, inviteRepo.findOne({ where: { id: inviteId } })];
                                    case 1:
                                        invite = _a.sent();
                                        if (!invite) {
                                            return [2 /*return*/];
                                        }
                                        return [4 /*yield*/, inviteRepo.delete({ id: invite.id })];
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
    InviteService.prototype.accept = function (token, user_) {
        return __awaiter(this, void 0, void 0, function () {
            var decoded, invite_id, user_email;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        try {
                            decoded = this.verifyToken(token);
                        }
                        catch (err) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Token is not valid");
                        }
                        invite_id = decoded.invite_id, user_email = decoded.user_email;
                        return [4 /*yield*/, this.atomicPhase_(function (m) { return __awaiter(_this, void 0, void 0, function () {
                                var userRepo, inviteRepo, invite, exists, user;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            userRepo = m.withRepository(this.userRepo_);
                                            inviteRepo = m.withRepository(this.inviteRepository_);
                                            return [4 /*yield*/, inviteRepo.findOne({ where: { id: invite_id } })];
                                        case 1:
                                            invite = _a.sent();
                                            if (!invite ||
                                                (invite === null || invite === void 0 ? void 0 : invite.user_email) !== user_email ||
                                                new Date() > invite.expires_at) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Invalid invite");
                                            }
                                            return [4 /*yield*/, userRepo.findOne({
                                                    where: { email: user_email.toLowerCase() },
                                                    select: ["id"],
                                                })];
                                        case 2:
                                            exists = _a.sent();
                                            if (exists) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "User already joined");
                                            }
                                            return [4 /*yield*/, this.userService_.withTransaction(m).create({
                                                    email: invite.user_email,
                                                    role: invite.role,
                                                    first_name: user_.first_name,
                                                    last_name: user_.last_name,
                                                }, user_.password)];
                                        case 3:
                                            user = _a.sent();
                                            return [4 /*yield*/, inviteRepo.delete({ id: invite.id })];
                                        case 4:
                                            _a.sent();
                                            return [2 /*return*/, user];
                                    }
                                });
                            }); }, "SERIALIZABLE")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InviteService.prototype.verifyToken = function (token) {
        var jwt_secret = this.configModule_.projectConfig.jwt_secret;
        if (jwt_secret) {
            return jsonwebtoken_1.default.verify(token, jwt_secret);
        }
        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Please configure jwt_secret");
    };
    InviteService.prototype.resend = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var inviteRepo, invite;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inviteRepo = this.activeManager_.withRepository(invite_1.InviteRepository);
                        return [4 /*yield*/, inviteRepo.findOne({ where: { id: id } })];
                    case 1:
                        invite = _a.sent();
                        if (!invite) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Invite doesn't exist");
                        }
                        invite.token = this.generateToken({
                            invite_id: invite.id,
                            role: invite.role,
                            user_email: invite.user_email,
                        });
                        invite.expires_at = new Date();
                        invite.expires_at.setDate(invite.expires_at.getDate() + 7);
                        return [4 /*yield*/, inviteRepo.save(invite)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.eventBus_
                                .withTransaction(this.activeManager_)
                                .emit(InviteService.Events.CREATED, {
                                id: invite.id,
                                token: invite.token,
                                user_email: invite.user_email,
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InviteService.Events = {
        CREATED: "invite.created",
    };
    return InviteService;
}(interfaces_1.TransactionBaseService));
exports.default = InviteService;
//# sourceMappingURL=invite.js.map