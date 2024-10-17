import { ConfigModule, Logger, MedusaContainer } from "../types/global";
type Options = {
    container: MedusaContainer;
    configModule: ConfigModule;
    logger: Logger;
};
declare function redisLoader({ container, configModule, logger, }: Options): Promise<{
    shutdown: () => Promise<void>;
}>;
export default redisLoader;
