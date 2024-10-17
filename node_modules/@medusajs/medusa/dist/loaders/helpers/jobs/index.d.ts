import { MedusaContainer } from "@medusajs/types";
import { ScheduledJobArgs, ScheduledJobConfig } from "../../../types/scheduled-jobs";
type ScheduledJobHandler = (args: ScheduledJobArgs) => Promise<void>;
type ScheduledJobModule = {
    config: ScheduledJobConfig;
    handler: ScheduledJobHandler;
};
export default class ScheduledJobsLoader {
    protected container_: MedusaContainer;
    protected pluginOptions_: Record<string, unknown>;
    protected rootDir_: string;
    protected excludes: RegExp[];
    protected jobDescriptors_: Map<string, ScheduledJobModule>;
    constructor(rootDir: string, container: MedusaContainer, options?: Record<string, unknown>);
    private validateJob;
    private createDescriptor;
    private createMap;
    private createScheduledJobs;
    load(): Promise<void>;
}
export {};
