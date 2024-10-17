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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var papaparse_1 = __importDefault(require("papaparse"));
var abstract_parser_1 = require("../interfaces/abstract-parser");
var DEFAULT_PARSE_OPTIONS = {
    dynamicTyping: true,
    header: true,
};
var CsvParser = /** @class */ (function (_super) {
    __extends(CsvParser, _super);
    function CsvParser(schema, delimiter) {
        var _this = _super.call(this, schema) || this;
        _this.$$delimiter = ";";
        if (delimiter) {
            _this.$$delimiter = delimiter;
        }
        return _this;
    }
    CsvParser.prototype.parse = function (readableStream, options) {
        var _a, e_1, _b, _c;
        if (options === void 0) { options = DEFAULT_PARSE_OPTIONS; }
        return __awaiter(this, void 0, void 0, function () {
            var csvStream, parsedContent, _d, csvStream_1, csvStream_1_1, chunk, e_1_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        csvStream = papaparse_1.default.parse(papaparse_1.default.NODE_STREAM_INPUT, options);
                        parsedContent = [];
                        readableStream.pipe(csvStream);
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 6, 7, 12]);
                        _d = true, csvStream_1 = __asyncValues(csvStream);
                        _e.label = 2;
                    case 2: return [4 /*yield*/, csvStream_1.next()];
                    case 3:
                        if (!(csvStream_1_1 = _e.sent(), _a = csvStream_1_1.done, !_a)) return [3 /*break*/, 5];
                        _c = csvStream_1_1.value;
                        _d = false;
                        try {
                            chunk = _c;
                            parsedContent.push(chunk);
                        }
                        finally {
                            _d = true;
                        }
                        _e.label = 4;
                    case 4: return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 12];
                    case 6:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 7:
                        _e.trys.push([7, , 10, 11]);
                        if (!(!_d && !_a && (_b = csvStream_1.return))) return [3 /*break*/, 9];
                        return [4 /*yield*/, _b.call(csvStream_1)];
                    case 8:
                        _e.sent();
                        _e.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 11: return [7 /*endfinally*/];
                    case 12: return [2 /*return*/, parsedContent];
                }
            });
        });
    };
    CsvParser.prototype.buildData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var validatedData, i, builtLine;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validatedData = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < data.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this._buildLine(data[i], i + 1)];
                    case 2:
                        builtLine = _a.sent();
                        validatedData.push(builtLine);
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, validatedData];
                }
            });
        });
    };
    CsvParser.prototype._buildLine = function (line, lineNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var outputTuple, columnMap, requiredColumnsMap, tupleKeys, processedColumns, tupleKeys_1, tupleKeys_1_1, tupleKey, column, context, missingColumns, _a, _b, column, context, e_2_1;
            var e_3, _c, e_2, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        outputTuple = {};
                        columnMap = this.buildColumnMap_(this.$$schema.columns);
                        requiredColumnsMap = this.buildColumnMap_(this.$$schema.columns.filter(function (col) { return col.required; }));
                        tupleKeys = Object.keys(line);
                        processedColumns = {};
                        try {
                            for (tupleKeys_1 = __values(tupleKeys), tupleKeys_1_1 = tupleKeys_1.next(); !tupleKeys_1_1.done; tupleKeys_1_1 = tupleKeys_1.next()) {
                                tupleKey = tupleKeys_1_1.value;
                                column = this.resolveColumn_(tupleKey, columnMap);
                                /**
                                 * if the tupleKey does not correspond to any column defined in the schema
                                 */
                                if (!column) {
                                    throw new Error("Unable to treat column ".concat(tupleKey, " from the csv file. No target column found in the provided schema"));
                                }
                                processedColumns[column.name] = true;
                                /**
                                 * if the value corresponding to the tupleKey is empty and the column is required in the schema
                                 */
                                if (!line[tupleKey] && column.required) {
                                    throw new Error("No value found for target column \"".concat(column.name, "\" in line ").concat(lineNumber, " of the given csv file"));
                                }
                                context = {
                                    line: line,
                                    lineNumber: lineNumber,
                                    column: column.name,
                                    tupleKey: tupleKey,
                                };
                                outputTuple = this.resolveTuple_(outputTuple, column, context);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (tupleKeys_1_1 && !tupleKeys_1_1.done && (_c = tupleKeys_1.return)) _c.call(tupleKeys_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        missingColumns = (0, lodash_1.difference)(Object.keys(requiredColumnsMap), Object.keys(processedColumns));
                        if (missingColumns.length > 0) {
                            throw new Error("Missing column(s) ".concat(formatMissingColumns(missingColumns), " from the given csv file"));
                        }
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 6, 7, 8]);
                        _a = __values(this.$$schema.columns), _b = _a.next();
                        _e.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        column = _b.value;
                        context = {
                            line: line,
                            lineNumber: lineNumber,
                            column: column.name,
                        };
                        if (!column.validator) return [3 /*break*/, 4];
                        return [4 /*yield*/, column.validator.validate(outputTuple, context)];
                    case 3:
                        _e.sent();
                        _e.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, outputTuple];
                }
            });
        });
    };
    CsvParser.prototype.buildColumnMap_ = function (columns) {
        return columns.reduce(function (map, column) {
            if (typeof column.name === "string") {
                map[column.name] = column;
            }
            return map;
        }, {});
    };
    CsvParser.prototype.resolveColumn_ = function (tupleKey, columnMap) {
        // @ts-ignore
        if (columnMap[tupleKey] && !columnMap[tupleKey].match) {
            return columnMap[tupleKey];
        }
        var matchedColumn = this.$$schema.columns.find(function (column) {
            return "match" in column &&
                typeof column.match === "object" &&
                column.match instanceof RegExp
                ? column.match.test(tupleKey)
                : false;
        });
        return matchedColumn;
    };
    CsvParser.prototype.resolveTuple_ = function (tuple, column, context) {
        var outputTuple = __assign({}, tuple);
        var tupleKey = context.tupleKey, csvContext = __rest(context, ["tupleKey"]);
        var line = csvContext.line;
        var resolvedKey = tupleKey;
        /**
         * if match is provided, then we should call the reducer if it's defined
         * otherwise, before using the mapTo property, we should make sure match was not provided
         */
        if ("match" in column && column.reducer) {
            return column.reducer(outputTuple, tupleKey, line[tupleKey], csvContext);
        }
        else if (!("match" in column) && "mapTo" in column && column.mapTo) {
            resolvedKey = column.mapTo;
        }
        var resolvedValue = column.transform
            ? column.transform(line[tupleKey], csvContext)
            : line[tupleKey];
        outputTuple[resolvedKey] = resolvedValue;
        return outputTuple;
    };
    return CsvParser;
}(abstract_parser_1.AbstractParser));
var formatMissingColumns = function (list) {
    return list.reduce(function (text, curr, i, array) {
        return text + (i < array.length - 1 ? "\"".concat(curr, "\", ") : "\"".concat(curr, "\""));
    }, "");
};
exports.default = CsvParser;
//# sourceMappingURL=csv-parser.js.map