import { GraphQLSchema } from 'graphql';
import { DirectableObject } from './getDirectiveExtensions.cjs';
export interface DirectiveAnnotation {
    name: string;
    args?: Record<string, any>;
}
export type DirectableGraphQLObject = DirectableObject;
export declare function getDirectivesInExtensions(node: DirectableGraphQLObject, pathToDirectivesInExtensions?: string[]): Array<DirectiveAnnotation>;
export declare function getDirectiveInExtensions(node: DirectableGraphQLObject, directiveName: string, pathToDirectivesInExtensions?: string[]): Array<Record<string, any>> | undefined;
export declare function getDirectives(schema: GraphQLSchema, node: DirectableGraphQLObject, pathToDirectivesInExtensions?: string[]): Array<DirectiveAnnotation>;
export declare function getDirective(schema: GraphQLSchema, node: DirectableGraphQLObject, directiveName: string, pathToDirectivesInExtensions?: string[]): Array<Record<string, any>> | undefined;
