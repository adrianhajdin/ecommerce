import { ColumnOptions, ColumnType } from "typeorm";
export declare function resolveDbType(pgSqlType: ColumnType): ColumnType;
export declare function resolveDbGenerationStrategy(pgSqlType: "increment" | "uuid" | "rowid"): "increment" | "uuid" | "rowid";
export declare function DbAwareColumn(columnOptions: ColumnOptions): PropertyDecorator;
