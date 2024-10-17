declare const _default: {
    readonly stripAnsi: (string: string) => string;
    readonly ansiStyles: {
        readonly modifier: import("ansi-styles").Modifier;
        readonly color: import("ansi-styles").ForegroundColor & import("ansi-styles").ColorBase;
        readonly bgColor: import("ansi-styles").BackgroundColor & import("ansi-styles").ColorBase;
        readonly codes: ReadonlyMap<number, number>;
    } & import("ansi-styles").BackgroundColor & import("ansi-styles").ForegroundColor & import("ansi-styles").Modifier;
    readonly ansiEscapes: any;
    readonly passwordPrompt: any;
    readonly screen: typeof import("@oclif/screen");
    readonly open: typeof import("./open").default;
    readonly prompt: typeof import("./prompt");
    readonly styledObject: typeof import("./styled/object").default;
    readonly styledHeader: typeof import("./styled/header").default;
    readonly styledJSON: typeof import("./styled/json").default;
    readonly table: typeof import("./styled/table").table;
    readonly tree: typeof import("./styled/tree").default;
    readonly wait: (ms?: number) => Promise<unknown>;
    readonly progress: typeof import("./styled/progress").default;
};
export default _default;
