import { BuildSchemaOptions, GraphQLSchema } from 'graphql';
import { SchemaPrintOptions } from './types.js';
export declare function fixSchemaAst(schema: GraphQLSchema, options: BuildSchemaOptions & SchemaPrintOptions): GraphQLSchema;
