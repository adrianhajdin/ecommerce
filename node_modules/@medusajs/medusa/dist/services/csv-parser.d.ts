/// <reference types="node" />
import { ParseConfig } from "papaparse";
import { AbstractParser } from "../interfaces/abstract-parser";
import { CsvSchema } from "../interfaces/csv-parser";
declare class CsvParser<TSchema extends CsvSchema<TParserResult, TOutputResult> = CsvSchema, TParserResult extends object = Record<string, unknown>, TOutputResult = unknown> extends AbstractParser<TSchema, TParserResult, ParseConfig, TOutputResult> {
    protected readonly $$delimiter: string;
    constructor(schema: TSchema, delimiter?: string);
    parse(readableStream: NodeJS.ReadableStream, options?: ParseConfig): Promise<TParserResult[]>;
    buildData(data: TParserResult[]): Promise<TOutputResult[]>;
    private _buildLine;
    private buildColumnMap_;
    private resolveColumn_;
    private resolveTuple_;
}
export default CsvParser;
