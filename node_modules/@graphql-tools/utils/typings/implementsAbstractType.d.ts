import { GraphQLSchema, GraphQLType } from 'graphql';
import { Maybe } from './types.js';
export declare function implementsAbstractType(schema: GraphQLSchema, typeA: Maybe<GraphQLType>, typeB: Maybe<GraphQLType>): boolean;
