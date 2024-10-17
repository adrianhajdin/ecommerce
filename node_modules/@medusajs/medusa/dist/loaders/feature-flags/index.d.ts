import { FlagRouter } from "@medusajs/utils";
import { Logger } from "../../types/global";
export declare const featureFlagRouter: FlagRouter;
declare const _default: (configModule?: {
    featureFlags?: Record<string, string | boolean | Record<string, boolean>>;
}, logger?: Logger, flagDirectory?: string) => FlagRouter;
export default _default;
