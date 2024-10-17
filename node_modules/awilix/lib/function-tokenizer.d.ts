/**
 * Token type.
 */
export type TokenType = 'ident' | '(' | ')' | ',' | '=' | '*' | 'function' | 'class' | 'EOF';
/**
 * Lexer Token.
 */
export interface Token {
    type: TokenType;
    value?: string;
}
/**
 * Flags that can be passed to the tokenizer to toggle certain things.
 */
export declare const enum TokenizerFlags {
    None = 0,
    /**
     * If this is set, the tokenizer will not attempt to be smart about skipping expressions.
     */
    Dumb = 1
}
/**
 * Creates a tokenizer for the specified source.
 *
 * @param source
 */
export declare function createTokenizer(source: string): {
    next: (nextFlags?: TokenizerFlags) => Token;
    done: () => boolean;
};
