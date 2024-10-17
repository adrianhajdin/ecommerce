import { ClassConstructor, MedusaContainer } from "../types/global";
import { EntitySchema } from "typeorm";
type ModelLoaderParams = {
    container: MedusaContainer;
    isTest?: boolean;
    rootDirectory?: string;
    corePathGlob?: string;
    coreTestPathGlob?: string;
    extensionPathGlob?: string;
};
/**
 * Registers all models in the model directory
 */
declare const _default: ({ container, isTest, rootDirectory, corePathGlob, coreTestPathGlob, extensionPathGlob, }: ModelLoaderParams, config?: {
    register: boolean;
}) => (EntitySchema<any> | ClassConstructor<unknown>)[];
export default _default;
