export declare class Tree {
    nodes: {
        [key: string]: Tree;
    };
    insert(child: string, value?: Tree): Tree;
    search(key: string): Tree | undefined;
    display(logger?: any): void;
}
export default function tree(): Tree;
