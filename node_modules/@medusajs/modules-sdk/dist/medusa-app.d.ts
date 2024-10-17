import { RemoteFetchDataCallback } from "@medusajs/orchestration";
import { ExternalModuleDeclaration, InternalModuleDeclaration, LoadedModule, MedusaContainer, ModuleJoinerConfig, ModuleServiceInitializeOptions, RemoteQueryFunction } from "@medusajs/types";
import { Modules } from "./definitions";
import { RemoteLink } from "./remote-link";
export type RunMigrationFn = (options?: ModuleServiceInitializeOptions, injectedDependencies?: Record<any, any>) => Promise<void>;
export type MedusaModuleConfig = {
    [key: string | Modules]: string | boolean | Partial<InternalModuleDeclaration | ExternalModuleDeclaration>;
};
export type SharedResources = {
    database?: ModuleServiceInitializeOptions["database"] & {
        /**
         * {
         *   name?: string
         *   afterCreate?: Function
         *   min?: number
         *   max?: number
         *   refreshIdle?: boolean
         *   idleTimeoutMillis?: number
         *   reapIntervalMillis?: number
         *   returnToHead?: boolean
         *   priorityRange?: number
         *   log?: (message: string, logLevel: string) => void
         * }
         */
        pool?: Record<string, unknown>;
    };
};
export declare function loadModules(modulesConfig: any, sharedContainer: any, migrationOnly?: boolean, loaderOnly?: boolean, workerMode?: "shared" | "worker" | "server"): Promise<{}>;
export type MedusaAppOutput = {
    modules: Record<string, LoadedModule | LoadedModule[]>;
    link: RemoteLink | undefined;
    query: RemoteQueryFunction;
    entitiesMap?: Record<string, any>;
    notFound?: Record<string, Record<string, string>>;
    runMigrations: RunMigrationFn;
    onApplicationShutdown: () => Promise<void>;
    onApplicationPrepareShutdown: () => Promise<void>;
};
export type MedusaAppOptions = {
    workerMode?: "shared" | "worker" | "server";
    sharedContainer?: MedusaContainer;
    sharedResourcesConfig?: SharedResources;
    loadedModules?: LoadedModule[];
    servicesConfig?: ModuleJoinerConfig[];
    modulesConfigPath?: string;
    modulesConfigFileName?: string;
    modulesConfig?: MedusaModuleConfig;
    linkModules?: ModuleJoinerConfig | ModuleJoinerConfig[];
    remoteFetchData?: RemoteFetchDataCallback;
    injectedDependencies?: any;
    onApplicationStartCb?: () => void;
    /**
     * Forces the modules bootstrapper to only run the modules loaders and return prematurely
     */
    loaderOnly?: boolean;
};
export declare function MedusaApp(options?: MedusaAppOptions): Promise<MedusaAppOutput>;
export declare function MedusaAppMigrateUp(options?: MedusaAppOptions): Promise<void>;
