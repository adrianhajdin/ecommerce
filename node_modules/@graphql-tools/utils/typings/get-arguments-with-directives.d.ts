import { DocumentNode } from 'graphql';
import { DirectiveUsage } from './types.js';
export type ArgumentToDirectives = {
    [argumentName: string]: DirectiveUsage[];
};
export type TypeAndFieldToArgumentDirectives = {
    [typeAndField: string]: ArgumentToDirectives;
};
export declare function getArgumentsWithDirectives(documentNode: DocumentNode): TypeAndFieldToArgumentDirectives;
