export default Store;
declare class Store {
    config_: InMemoryConfigStore | Configstore;
    outbox_: OutboxStore;
    disabled_: boolean;
    getQueueSize(): number;
    getQueueCount(): number;
    addEvent(event: any): void;
    flushEvents(handler: any): Promise<boolean>;
    getConfig(path: any): any;
    setConfig(path: any, val: any): void;
}
import { InMemoryConfigStore } from "./util/in-memory-config";
import Configstore from "configstore";
import OutboxStore from "./util/outbox-store";
//# sourceMappingURL=store.d.ts.map