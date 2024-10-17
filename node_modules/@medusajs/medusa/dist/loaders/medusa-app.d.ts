import { MedusaAppOutput } from "@medusajs/modules-sdk";
import { CommonTypes, InternalModuleDeclaration, MedusaContainer } from "@medusajs/types";
export declare function mergeDefaultModules(modulesConfig: CommonTypes.ConfigModule["modules"]): {
    [x: string]: boolean | Partial<InternalModuleDeclaration | import("@medusajs/modules-sdk").ExternalModuleDeclaration>;
};
export declare function migrateMedusaApp({ configModule, container, }: {
    configModule: {
        modules?: CommonTypes.ConfigModule["modules"];
        projectConfig: CommonTypes.ConfigModule["projectConfig"];
    };
    container: MedusaContainer;
}, config?: {
    registerInContainer: boolean;
}): Promise<void>;
export declare const loadMedusaApp: ({ configModule, container, }: {
    configModule: {
        modules?: CommonTypes.ConfigModule["modules"];
        projectConfig: CommonTypes.ConfigModule["projectConfig"];
    };
    container: MedusaContainer;
}, config?: {
    registerInContainer: boolean;
}) => Promise<MedusaAppOutput>;
/**
 * Run the modules loader without taking care of anything else. This is useful for running the loader as a separate action or to re run all modules loaders.
 *
 * @param configModule
 * @param container
 */
export declare function runModulesLoader({ configModule, container, }: {
    configModule: {
        modules?: CommonTypes.ConfigModule["modules"];
        projectConfig: CommonTypes.ConfigModule["projectConfig"];
    };
    container: MedusaContainer;
}): Promise<void>;
export default loadMedusaApp;
