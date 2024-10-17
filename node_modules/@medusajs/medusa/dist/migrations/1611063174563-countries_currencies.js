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
Object.defineProperty(exports, "__esModule", { value: true });
exports.countriesCurrencies1611063174563 = void 0;
var countries_1 = require("../utils/countries");
var currencies_1 = require("../utils/currencies");
var countriesCurrencies1611063174563 = /** @class */ (function () {
    function countriesCurrencies1611063174563() {
    }
    countriesCurrencies1611063174563.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var countries_2, countries_2_1, c, query, iso2, iso3, numeric, name_1, display, e_1_1, _a, _b, _c, _1, c, query, code, sym, nat, name_2, e_2_1;
            var e_1, _d, e_2, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 5, 6, 7]);
                        countries_2 = __values(countries_1.countries), countries_2_1 = countries_2.next();
                        _f.label = 1;
                    case 1:
                        if (!!countries_2_1.done) return [3 /*break*/, 4];
                        c = countries_2_1.value;
                        query = "INSERT INTO \"country\" (\"iso_2\", \"iso_3\", \"num_code\", \"name\", \"display_name\") VALUES ($1, $2, $3, $4, $5)";
                        iso2 = c.alpha2.toLowerCase();
                        iso3 = c.alpha3.toLowerCase();
                        numeric = c.numeric;
                        name_1 = c.name.toUpperCase();
                        display = c.name;
                        return [4 /*yield*/, queryRunner.query(query, [iso2, iso3, numeric, name_1, display])];
                    case 2:
                        _f.sent();
                        _f.label = 3;
                    case 3:
                        countries_2_1 = countries_2.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (countries_2_1 && !countries_2_1.done && (_d = countries_2.return)) _d.call(countries_2);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 7:
                        _f.trys.push([7, 12, 13, 14]);
                        _a = __values(Object.entries(currencies_1.currencies)), _b = _a.next();
                        _f.label = 8;
                    case 8:
                        if (!!_b.done) return [3 /*break*/, 11];
                        _c = __read(_b.value, 2), _1 = _c[0], c = _c[1];
                        query = "INSERT INTO \"currency\" (\"code\", \"symbol\", \"symbol_native\", \"name\") VALUES ($1, $2, $3, $4)";
                        code = c.code.toLowerCase();
                        sym = c.symbol;
                        nat = c.symbol_native;
                        name_2 = c.name;
                        return [4 /*yield*/, queryRunner.query(query, [code, sym, nat, name_2])];
                    case 9:
                        _f.sent();
                        _f.label = 10;
                    case 10:
                        _b = _a.next();
                        return [3 /*break*/, 8];
                    case 11: return [3 /*break*/, 14];
                    case 12:
                        e_2_1 = _f.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 14];
                    case 13:
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    countriesCurrencies1611063174563.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            var countries_3, countries_3_1, c, e_3_1, _a, _b, _c, _2, c, e_4_1;
            var e_3, _d, e_4, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 5, 6, 7]);
                        countries_3 = __values(countries_1.countries), countries_3_1 = countries_3.next();
                        _f.label = 1;
                    case 1:
                        if (!!countries_3_1.done) return [3 /*break*/, 4];
                        c = countries_3_1.value;
                        return [4 /*yield*/, queryRunner.query("DELETE FROM \"country\" WHERE iso_2 = '".concat(c.alpha2, "'"))];
                    case 2:
                        _f.sent();
                        _f.label = 3;
                    case 3:
                        countries_3_1 = countries_3.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_3_1 = _f.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (countries_3_1 && !countries_3_1.done && (_d = countries_3.return)) _d.call(countries_3);
                        }
                        finally { if (e_3) throw e_3.error; }
                        return [7 /*endfinally*/];
                    case 7:
                        _f.trys.push([7, 12, 13, 14]);
                        _a = __values(Object.entries(currencies_1.currencies)), _b = _a.next();
                        _f.label = 8;
                    case 8:
                        if (!!_b.done) return [3 /*break*/, 11];
                        _c = __read(_b.value, 2), _2 = _c[0], c = _c[1];
                        return [4 /*yield*/, queryRunner.query("DELETE FROM \"currency\" WHERE code = '".concat(c.code.toLowerCase(), "'"))];
                    case 9:
                        _f.sent();
                        _f.label = 10;
                    case 10:
                        _b = _a.next();
                        return [3 /*break*/, 8];
                    case 11: return [3 /*break*/, 14];
                    case 12:
                        e_4_1 = _f.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 14];
                    case 13:
                        try {
                            if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                        }
                        finally { if (e_4) throw e_4.error; }
                        return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    return countriesCurrencies1611063174563;
}());
exports.countriesCurrencies1611063174563 = countriesCurrencies1611063174563;
//# sourceMappingURL=1611063174563-countries_currencies.js.map