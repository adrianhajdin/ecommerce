"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHelpClass = exports.template = exports.sortBy = exports.castArray = exports.compact = exports.uniqBy = void 0;
const ts_node_1 = require("@oclif/config/lib/ts-node");
const _ = require("lodash");
function uniqBy(arr, fn) {
    return arr.filter((a, i) => {
        const aVal = fn(a);
        return !arr.find((b, j) => j > i && fn(b) === aVal);
    });
}
exports.uniqBy = uniqBy;
function compact(a) {
    return a.filter((a) => Boolean(a));
}
exports.compact = compact;
function castArray(input) {
    if (input === undefined)
        return [];
    return Array.isArray(input) ? input : [input];
}
exports.castArray = castArray;
function sortBy(arr, fn) {
    function compare(a, b) {
        a = a === undefined ? 0 : a;
        b = b === undefined ? 0 : b;
        if (Array.isArray(a) && Array.isArray(b)) {
            if (a.length === 0 && b.length === 0)
                return 0;
            const diff = compare(a[0], b[0]);
            if (diff !== 0)
                return diff;
            return compare(a.slice(1), b.slice(1));
        }
        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    }
    return arr.sort((a, b) => compare(fn(a), fn(b)));
}
exports.sortBy = sortBy;
function template(context) {
    function render(t) {
        return _.template(t)(context);
    }
    return render;
}
exports.template = template;
function extractExport(config, classPath) {
    const helpClassPath = ts_node_1.tsPath(config.root, classPath);
    return require(helpClassPath);
}
function extractClass(exported) {
    return exported && exported.default ? exported.default : exported;
}
function getHelpClass(config, defaultClass = '@oclif/help') {
    const pjson = config.pjson;
    const configuredClass = pjson && pjson.oclif && pjson.oclif.helpClass;
    if (configuredClass) {
        try {
            const exported = extractExport(config, configuredClass);
            return extractClass(exported);
        }
        catch (error) {
            throw new Error(`Unable to load configured help class "${configuredClass}", failed with message:\n${error.message}`);
        }
    }
    try {
        const defaultModulePath = require.resolve(defaultClass, { paths: [config.root] });
        const exported = require(defaultModulePath);
        return extractClass(exported);
    }
    catch (error) {
        throw new Error(`Could not load a help class, consider installing the @oclif/help package, failed with message:\n${error.message}`);
    }
}
exports.getHelpClass = getHelpClass;
