import { ASTVisitor, DocumentNode, GraphQLSchema, ValidationContext } from 'graphql';
export type ValidationRule = (context: ValidationContext) => ASTVisitor;
export declare function validateGraphQlDocuments(schema: GraphQLSchema, documents: DocumentNode[], rules?: ValidationRule[]): readonly import("graphql").GraphQLError[];
export declare function createDefaultRules(): import("graphql").ValidationRule[];
