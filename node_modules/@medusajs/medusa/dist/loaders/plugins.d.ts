import { Express } from "express";
import { ConfigModule, MedusaContainer } from "../types/global";
type Options = {
    rootDirectory: string;
    container: MedusaContainer;
    configModule: ConfigModule;
    app: Express;
    activityId: string;
};
type PluginDetails = {
    resolve: string;
    name: string;
    id: string;
    options: Record<string, unknown>;
    version: string;
};
export declare const isSearchEngineInstalledResolutionKey = "isSearchEngineInstalled";
export declare const MEDUSA_PROJECT_NAME = "project-plugin";
/**
 * Registers all services in the services directory
 */
declare const _default: ({ rootDirectory, container, app, configModule, activityId, }: Options) => Promise<void>;
export default _default;
export declare function registerPluginModels({ rootDirectory, container, configModule, extensionDirectoryPath, pathGlob, }: {
    rootDirectory: string;
    container: MedusaContainer;
    configModule: ConfigModule;
    extensionDirectoryPath?: string;
    pathGlob?: string;
}): Promise<void>;
export declare function registerStrategies(pluginDetails: PluginDetails, container: MedusaContainer): void;
/**
 * Registers a service at the right location in our container.
 * PaymentService instances are added to the paymentProviders array in the
 * container. Names are camelCase formatted and namespaced by the folder i.e:
 * services/example-payments -> examplePaymentsService
 * @param {object} pluginDetails - the plugin details including plugin options,
 *    version, id, resolved path, etc. See resolvePlugin
 * @param {object} container - the container where the services will be
 *    registered
 * @return {void}
 */
export declare function registerServices(pluginDetails: PluginDetails, container: MedusaContainer): Promise<void>;
