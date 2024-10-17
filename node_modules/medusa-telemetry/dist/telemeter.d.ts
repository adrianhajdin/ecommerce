export default Telemeter;
declare class Telemeter {
    constructor(options?: {});
    store_: Store;
    flushAt: number;
    maxQueueSize: any;
    flushInterval: any;
    flushed: boolean;
    queueSize_: number;
    queueCount_: number;
    featureFlags_: Set<any>;
    modules_: Set<any>;
    plugins_: any[];
    getMachineId(): any;
    machineId: any;
    isTrackingEnabled(): any;
    trackingEnabled: any;
    getOsInfo(): {
        node_version: string;
        platform: NodeJS.Platform;
        release: string;
        cpus: string | undefined;
        is_ci: boolean;
        ci_name: any;
        arch: string;
        docker: boolean;
        term_program: string | undefined;
    };
    osInfo: {
        node_version: string;
        platform: NodeJS.Platform;
        release: string;
        cpus: string | undefined;
        is_ci: boolean;
        ci_name: any;
        arch: string;
        docker: boolean;
        term_program: string | undefined;
    } | undefined;
    getMedusaVersion(): any;
    getCliVersion(): any;
    setTelemetryEnabled(enabled: any): void;
    track(event: any, data: any): void;
    enqueue_(type: any, data: any): void;
    timer: NodeJS.Timeout | undefined;
    trackFeatureFlag(flag: any): void;
    trackModule(module: any): void;
    trackPlugin(plugin: any): void;
}
import Store from "./store";
//# sourceMappingURL=telemeter.d.ts.map