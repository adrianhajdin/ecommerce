import * as glob from 'fast-glob';
import { BuildResolverOptions } from './resolvers';
import { LifetimeType } from './awilix';
/**
 * The options when invoking listModules().
 * @interface ListModulesOptions
 */
export interface ListModulesOptions {
    cwd?: string;
    glob?: typeof glob.sync;
}
/**
 * An object containing the module name and path (full path to module).
 *
 * @interface ModuleDescriptor
 */
export interface ModuleDescriptor {
    name: string;
    path: string;
    opts: any;
}
/**
 * A glob pattern with associated registration options.
 */
export type GlobWithOptions = [string] | [string, BuildResolverOptions<any> | LifetimeType];
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
export declare function listModules(globPatterns: string | Array<string | GlobWithOptions>, opts?: ListModulesOptions): ModuleDescriptor[];
