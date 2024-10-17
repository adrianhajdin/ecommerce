import { FlagRouter } from "@medusajs/utils";
import { AwilixContainer } from "awilix";
import { Express } from "express";
import { ConfigModule } from "../types/global";
type Options = {
    app: Express;
    container: AwilixContainer;
    configModule: ConfigModule;
    featureFlagRouter?: FlagRouter;
};
declare const _default: ({ app, container, configModule, featureFlagRouter, }: Options) => Promise<Express>;
export default _default;
