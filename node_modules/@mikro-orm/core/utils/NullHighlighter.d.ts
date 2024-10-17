import type { Highlighter } from '../typings';
export declare class NullHighlighter implements Highlighter {
    highlight(text: string): string;
}
