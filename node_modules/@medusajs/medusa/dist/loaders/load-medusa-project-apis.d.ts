import { Express } from "express";
import { ConfigModule, MedusaContainer } from "../types/global";
type Options = {
    rootDirectory: string;
    container: MedusaContainer;
    configModule: ConfigModule;
    app: Express;
    activityId: string;
};
export declare const MEDUSA_PROJECT_NAME = "project-plugin";
/**
 * Registers all services in the services directory
 */
declare const _default: ({ rootDirectory, container, app, configModule, activityId, }: Options) => Promise<void>;
export default _default;
