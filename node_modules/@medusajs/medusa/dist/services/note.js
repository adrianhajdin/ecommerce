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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var NoteService = /** @class */ (function (_super) {
    __extends(NoteService, _super);
    function NoteService(_a) {
        var noteRepository = _a.noteRepository, eventBusService = _a.eventBusService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.noteRepository_ = noteRepository;
        _this.eventBus_ = eventBusService;
        return _this;
    }
    /**
     * Retrieves a specific note.
     * @param noteId - the id of the note to retrieve.
     * @param config - any options needed to query for the result.
     * @return which resolves to the requested note.
     */
    NoteService.prototype.retrieve = function (noteId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var noteRepo, query, note;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(noteId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"noteId\" must be defined");
                        }
                        noteRepo = this.activeManager_.withRepository(this.noteRepository_);
                        query = (0, utils_1.buildQuery)({ id: noteId }, config);
                        return [4 /*yield*/, noteRepo.findOne(query)];
                    case 1:
                        note = _a.sent();
                        if (!note) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Note with id: ".concat(noteId, " was not found."));
                        }
                        return [2 /*return*/, note];
                }
            });
        });
    };
    /** Fetches all notes related to the given selector
     * @param selector - the query object for find
     * @param config - the configuration used to find the objects. contains relations, skip, and take.
     * @return notes related to the given search.
     */
    NoteService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {
            /**
             * How many Notes to skip in the resulting list of Notes.
             */
            skip: 0,
            /**
             * How many Notes to take in the resulting list of Notes.
             */
            take: 50,
            /**
             * Which relations to include in the resulting list of Notes.
             */
            relations: [],
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.listAndCount(selector, config)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), result = _a[0];
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** Fetches all notes related to the given selector
     * @param selector - the query object for find
     * @param config - the configuration used to find the objects. contains relations, skip, and take.
     * @return notes related to the given search.
     */
    NoteService.prototype.listAndCount = function (selector, config) {
        if (config === void 0) { config = {
            /**
             * How many Notes to skip in the resulting list of Notes.
             */
            skip: 0,
            /**
             * How many Notes to take in the resulting list of Notes.
             */
            take: 50,
            /**
             * Which relations to include in the resulting list of Notes.
             */
            relations: [],
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var noteRepo, query;
            return __generator(this, function (_a) {
                noteRepo = this.activeManager_.withRepository(this.noteRepository_);
                query = (0, utils_1.buildQuery)(selector, config);
                return [2 /*return*/, noteRepo.findAndCount(query)];
            });
        });
    };
    /**
     * Creates a note associated with a given author
     * @param data - the note to create
     * @param config - any configurations if needed, including meta data
     * @return resolves to the creation result
     */
    NoteService.prototype.create = function (data, config) {
        if (config === void 0) { config = { metadata: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var metadata, resource_id, resource_type, value, author_id;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        metadata = config.metadata;
                        resource_id = data.resource_id, resource_type = data.resource_type, value = data.value, author_id = data.author_id;
                        return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                                var noteRepo, toCreate, note, result;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            noteRepo = manager.withRepository(this.noteRepository_);
                                            toCreate = {
                                                resource_id: resource_id,
                                                resource_type: resource_type,
                                                value: value,
                                                author_id: author_id,
                                                metadata: metadata,
                                            };
                                            note = noteRepo.create(toCreate);
                                            return [4 /*yield*/, noteRepo.save(note)];
                                        case 1:
                                            result = _a.sent();
                                            return [4 /*yield*/, this.eventBus_
                                                    .withTransaction(manager)
                                                    .emit(NoteService.Events.CREATED, { id: result.id })];
                                        case 2:
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
     * Updates a given note with a new value
     * @param noteId - the id of the note to update
     * @param value - the new value
     * @return resolves to the updated element
     */
    NoteService.prototype.update = function (noteId, value) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var noteRepo, note, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        noteRepo = manager.withRepository(this.noteRepository_);
                                        return [4 /*yield*/, this.retrieve(noteId)];
                                    case 1:
                                        note = _a.sent();
                                        note.value = value;
                                        return [4 /*yield*/, noteRepo.save(note)];
                                    case 2:
                                        result = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(NoteService.Events.UPDATED, { id: result.id })];
                                    case 3:
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
     * Deletes a given note
     * @param noteId - id of the note to delete
     */
    NoteService.prototype.delete = function (noteId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var noteRepo, note;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        noteRepo = manager.withRepository(this.noteRepository_);
                                        return [4 /*yield*/, this.retrieve(noteId)];
                                    case 1:
                                        note = _a.sent();
                                        return [4 /*yield*/, noteRepo.softRemove(note)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(NoteService.Events.DELETED, { id: noteId })];
                                    case 3:
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
    NoteService.Events = {
        CREATED: "note.created",
        UPDATED: "note.updated",
        DELETED: "note.deleted",
    };
    return NoteService;
}(interfaces_1.TransactionBaseService));
exports.default = NoteService;
//# sourceMappingURL=note.js.map