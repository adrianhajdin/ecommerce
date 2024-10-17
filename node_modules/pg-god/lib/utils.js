"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePostgresUrl = exports.merge = void 0;
const url = require("url");
/**
 * Shallow merge objects without overriding fields with `undefined`.
 * TODO: return better types
 */
function merge(target, ...sources) {
    return Object.assign({}, target, ...sources.map(x => Object.entries(x)
        .filter(([key, value]) => value !== undefined)
        .reduce((obj, [key, value]) => (obj[key] = value, obj), {})));
}
exports.merge = merge;
function parsePostgresUrl(dbUrl) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const urlQuery = url.parse(dbUrl);
    return {
        scheme: (_a = urlQuery.protocol) === null || _a === void 0 ? void 0 : _a.substr(0, ((_b = urlQuery.protocol) === null || _b === void 0 ? void 0 : _b.length) - 1),
        userName: (_c = urlQuery.auth) === null || _c === void 0 ? void 0 : _c.substr(0, (_d = urlQuery.auth) === null || _d === void 0 ? void 0 : _d.indexOf(':')),
        password: (_e = urlQuery.auth) === null || _e === void 0 ? void 0 : _e.substr(((_f = urlQuery.auth) === null || _f === void 0 ? void 0 : _f.indexOf(':')) + 1, (_g = urlQuery.auth) === null || _g === void 0 ? void 0 : _g.length),
        host: urlQuery.hostname,
        port: urlQuery.port,
        databaseName: (_h = urlQuery.path) === null || _h === void 0 ? void 0 : _h.slice(1),
    };
}
exports.parsePostgresUrl = parsePostgresUrl;
//# sourceMappingURL=utils.js.map