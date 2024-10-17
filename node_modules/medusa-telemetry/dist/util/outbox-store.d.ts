export default Outbox;
declare class Outbox {
    constructor(baseDir: any);
    eventsJsonFileName: string;
    bufferFilePath: string;
    baseDir: any;
    appendToBuffer(event: any): void;
    getSize(): number;
    getCount(): number;
    flushFile(filePath: any, flushOperation: any): Promise<boolean>;
    startFlushEvents(flushOperation: any): Promise<boolean>;
}
//# sourceMappingURL=outbox-store.d.ts.map