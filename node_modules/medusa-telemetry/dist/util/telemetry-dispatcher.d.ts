export default TelemetryDispatcher;
declare class TelemetryDispatcher {
    constructor(options: any);
    store_: Store;
    host: string;
    path: string;
    axiosInstance: any;
    timeout: any;
    flushed: boolean;
    isTrackingEnabled(): any;
    trackingEnabled: any;
    dispatch(): Promise<void>;
    isErrorRetryable_(error: any): boolean;
}
import Store from "../store";
//# sourceMappingURL=telemetry-dispatcher.d.ts.map