export class InMemoryConfigStore {
    config: {};
    path: string;
    createBaseConfig(): {
        "telemetry.enabled": boolean;
        "telemetry.machine_id": string;
    };
    get(key: any): any;
    set(key: any, value: any): void;
    all(): {};
    size(): number;
    has(key: any): boolean;
    del(key: any): void;
    clear(): void;
}
//# sourceMappingURL=in-memory-config.d.ts.map