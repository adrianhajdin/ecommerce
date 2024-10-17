"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listModules = void 0;
const glob = require("fast-glob");
const path = require("path");
const utils_1 = require("./utils");
// Regex to extract the module name.
const nameExpr = /(.*)\..*/i;
/**
 * Internal method for globbing a single pattern.
 *
 * @param  {String} globPattern
 * The glob pattern.
 *
 * @param  {String} opts.cwd
 * Current working directory, used for resolving filepaths.
 * Defaults to `process.cwd()`.
 *
 * @return {[{name, path, opts}]}
 * The module names and paths.
 *
 * @api private
 */
function _listModules(globPattern, opts) {
    opts = Object.assign({ cwd: process.cwd(), glob: glob.sync }, opts);
    let patternOpts = null;
    if (Array.isArray(globPattern)) {
        patternOpts = globPattern[1];
        globPattern = globPattern[0];
    }
    // Replace Windows path separators with Posix path
    globPattern = globPattern.replace(/\\/g, '/');
    const result = opts.glob(globPattern, { cwd: opts.cwd });
    const mapped = result.map((p) => ({
        name: nameExpr.exec(path.basename(p))[1],
        path: path.resolve(opts.cwd, p),
        opts: patternOpts,
    }));
    return mapped;
}
/**
 * Returns a list of {name, path} pairs,
 * where the name is the module name, and path is the actual
 * full path to the module.
 *
 * @param  {String|Array<String>} globPatterns
 * The glob pattern as a string or an array of strings.
 *
 * @param  {String} opts.cwd
 * Current working directory, used for resolving filepaths.
 * Defaults to `process.cwd()`.
 *
 * @return {[{name, path}]}
 * An array of objects with the module names and paths.
 */
function listModules(globPatterns, opts) {
    if (Array.isArray(globPatterns)) {
        return (0, utils_1.flatten)(globPatterns.map((p) => _listModules(p, opts)));
    }
    return _listModules(globPatterns, opts);
}
exports.listModules = listModules;
//# sourceMappingURL=list-modules.js.map