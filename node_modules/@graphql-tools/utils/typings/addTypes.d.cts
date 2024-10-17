import { GraphQLDirective, GraphQLNamedType, GraphQLSchema } from 'graphql';
export declare function addTypes(schema: GraphQLSchema, newTypesOrDirectives: Array<GraphQLNamedType | GraphQLDirective>): GraphQLSchema;
