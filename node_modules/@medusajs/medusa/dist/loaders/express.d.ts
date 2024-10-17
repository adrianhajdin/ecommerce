import { Express } from "express";
import { ConfigModule } from "../types/global";
type Options = {
    app: Express;
    configModule: ConfigModule;
};
declare const _default: ({ app, configModule }: Options) => Promise<{
    app: Express;
    shutdown: () => Promise<void>;
}>;
export default _default;
