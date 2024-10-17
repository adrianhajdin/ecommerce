import { AwilixContainer } from "awilix";
import { DataSource, DataSourceOptions } from "typeorm";
import { ConfigModule } from "../types/global";
import "../utils/naming-strategy";
type Options = {
    configModule: ConfigModule;
    container: AwilixContainer;
    customOptions?: {
        migrations: DataSourceOptions["migrations"];
        logging: DataSourceOptions["logging"];
    };
};
export declare let dataSource: DataSource;
declare const _default: ({ container, configModule, customOptions, }: Options) => Promise<DataSource>;
export default _default;
