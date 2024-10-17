import { ConfigModule } from "@medusajs/types";
import { Express } from "express";
import { Connection } from "typeorm";
import { MedusaContainer } from "../types/global";
type Options = {
    directory: string;
    expressApp: Express;
    isTest: boolean;
};
declare const _default: ({ directory: rootDirectory, expressApp, isTest, }: Options) => Promise<{
    configModule: ConfigModule;
    container: MedusaContainer;
    dbConnection?: Connection | undefined;
    app: Express;
    pgConnection: unknown;
    shutdown: () => Promise<void>;
    prepareShutdown: () => Promise<void>;
}>;
export default _default;
