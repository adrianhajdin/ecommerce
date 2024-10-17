import { ModuleDescriptor, GlobWithOptions, listModules } from './list-modules';
import { BuildResolverOptions } from './resolvers';
import { AwilixContainer } from './container';
/**
 * Metadata of the module as well as the loaded module itself.
 * @interface LoadedModuleDescriptor
 */
export interface LoadedModuleDescriptor extends ModuleDescriptor {
    value: unknown;
}
/**
 * The options when invoking loadModules().
 * @interface LoadModulesOptions
 */
export interface LoadModulesOptions<ESM extends boolean = false> {
    cwd?: string;
    formatName?: NameFormatter | BuiltInNameFormatters;
    resolverOptions?: BuildResolverOptions<any>;
    esModules?: ESM;
}
/**
 * Name formatting options when using loadModules().
 * @type BuiltInNameFormatters
 */
export type BuiltInNameFormatters = 'camelCase';
/**
 * Takes in the filename of the module being loaded as well as the module descriptor,
 * and returns a string which is used to register the module in the container.
 *
 * `descriptor.name` is the same as `name`.
 *
 * @type {NameFormatter}
 */
export type NameFormatter = (name: string, descriptor: LoadedModuleDescriptor) => string;
/**
 * Dependencies for `loadModules`
 */
export interface LoadModulesDeps {
    listModules: typeof listModules;
    container: AwilixContainer;
    require(path: string): any | Promise<any>;
}
/**
 * The list of loaded modules
 */
export interface LoadModulesResult {
    loadedModules: Array<ModuleDescriptor>;
}
export declare function loadModules<ESM extends boolean = false>(dependencies: LoadModulesDeps, globPatterns: string | Array<string | GlobWithOptions>, opts?: LoadModulesOptions<ESM>): ESM extends true ? Promise<LoadModulesResult> : LoadModulesResult;
