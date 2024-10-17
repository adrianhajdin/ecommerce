/**
 * A parameter for a function.
 */
export interface Parameter {
    /**
     * Parameter name.
     */
    name: string;
    /**
     * True if the parameter is optional.
     */
    optional: boolean;
}
export declare function parseParameterList(source: string): Array<Parameter> | null;
