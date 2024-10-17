import { MedusaContainer } from "../types/global";
type LoaderOptions = {
    container: MedusaContainer;
    configModule: object;
    isTest?: boolean;
};
/**
 * Registers all strategies in the strategies directory
 * @returns void
 */
declare const _default: ({ container, configModule, isTest }: LoaderOptions) => void;
export default _default;
