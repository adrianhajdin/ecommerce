import { EntitySchema } from "typeorm";
import { ClassConstructor } from "../../types/global";
type GetModelExtensionMapParams = {
    directory?: string;
    pathGlob?: string;
    config: Record<string, any>;
};
export declare function getModelExtensionsMap({ directory, pathGlob, config, }: GetModelExtensionMapParams): Map<string, ClassConstructor<unknown> | EntitySchema>;
export {};
