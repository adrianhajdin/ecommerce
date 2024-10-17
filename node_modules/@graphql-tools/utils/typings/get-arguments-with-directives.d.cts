import { DocumentNode } from 'graphql';
import { DirectiveUsage } from './types.cjs';
export type ArgumentToDirectives = {
    [argumentName: string]: DirectiveUsage[];
};
export type TypeAndFieldToArgumentDirectives = {
    [typeAndField: string]: ArgumentToDirectives;
};
export declare function getArgumentsWithDirectives(documentNode: DocumentNode): TypeAndFieldToArgumentDirectives;
