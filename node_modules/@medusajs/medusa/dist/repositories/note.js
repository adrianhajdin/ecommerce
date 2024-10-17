"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteRepository = void 0;
var models_1 = require("../models");
var database_1 = require("../loaders/database");
exports.NoteRepository = database_1.dataSource.getRepository(models_1.Note);
exports.default = exports.NoteRepository;
//# sourceMappingURL=note.js.map