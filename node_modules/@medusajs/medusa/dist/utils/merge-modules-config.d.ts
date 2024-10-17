import { ConfigModule } from "@medusajs/types";
/**
 * Merge the modules config from the medusa-config file with the modules config from medusa package
 * @param modules
 * @param medusaInternalModulesConfig
 */
export declare function mergeModulesConfig(modules?: ConfigModule["modules"], medusaInternalModulesConfig?: {}): Record<string, boolean | Partial<import("@medusajs/types").InternalModuleDeclaration | import("@medusajs/types").ExternalModuleDeclaration>>;
