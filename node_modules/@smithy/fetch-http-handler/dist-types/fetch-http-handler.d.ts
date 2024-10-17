import { HttpHandler, HttpRequest, HttpResponse } from "@smithy/protocol-http";
import { HttpHandlerOptions, Provider } from "@smithy/types";
/**
 * Represents the http options that can be passed to a browser http client.
 */
export interface FetchHttpHandlerOptions {
    /**
     * The number of milliseconds a request can take before being automatically
     * terminated.
     */
    requestTimeout?: number;
    /**
     * Whether to allow the request to outlive the page. Default value is false.
     *
     * There may be limitations to the payload size, number of concurrent requests,
     * request duration etc. when using keepalive in browsers.
     *
     * These may change over time, so look for up to date information about
     * these limitations before enabling keepalive.
     */
    keepAlive?: boolean;
}
type FetchHttpHandlerConfig = FetchHttpHandlerOptions;
/**
 * @internal
 * Detection of keepalive support. Can be overridden for testing.
 */
export declare const keepAliveSupport: {
    supported: boolean;
};
/**
 * @public
 *
 * HttpHandler implementation using browsers' `fetch` global function.
 */
export declare class FetchHttpHandler implements HttpHandler<FetchHttpHandlerConfig> {
    private config?;
    private configProvider;
    constructor(options?: FetchHttpHandlerOptions | Provider<FetchHttpHandlerOptions | undefined>);
    destroy(): void;
    handle(request: HttpRequest, { abortSignal }?: HttpHandlerOptions): Promise<{
        response: HttpResponse;
    }>;
    updateHttpClientConfig(key: keyof FetchHttpHandlerConfig, value: FetchHttpHandlerConfig[typeof key]): void;
    httpHandlerConfigs(): FetchHttpHandlerConfig;
}
export {};
