import { ASTNode } from 'graphql';
export declare const asArray: <T>(fns: T | T[]) => T[];
export declare function isDocumentString(str: any): boolean;
/**
 * Checkes whether the `str` contains any path illegal characters.
 *
 * A string may sometimes look like a path but is not (like an SDL of a simple
 * GraphQL schema). To make sure we don't yield false-positives in such cases,
 * we disallow new lines in paths (even though most Unix systems support new
 * lines in file names).
 */
export declare function isValidPath(str: any): boolean;
export declare function compareStrings<A, B>(a: A, b: B): 1 | -1 | 0;
export declare function nodeToString(a: ASTNode): string;
export declare function compareNodes(a: ASTNode, b: ASTNode, customFn?: (a: any, b: any) => number): number;
export declare function isSome<T>(input: T): input is Exclude<T, null | undefined>;
export declare function assertSome<T>(input: T, message?: string): asserts input is Exclude<T, null | undefined>;
