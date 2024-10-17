import { GraphQLSchema } from 'graphql';
import { ArgumentFilter, DirectiveFilter, EnumValueFilter, FieldFilter, RootFieldFilter, TypeFilter } from './Interfaces.cjs';
export declare function filterSchema({ schema, typeFilter, fieldFilter, rootFieldFilter, objectFieldFilter, interfaceFieldFilter, inputObjectFieldFilter, argumentFilter, directiveFilter, enumValueFilter, }: {
    schema: GraphQLSchema;
    rootFieldFilter?: RootFieldFilter;
    typeFilter?: TypeFilter;
    fieldFilter?: FieldFilter;
    objectFieldFilter?: FieldFilter;
    interfaceFieldFilter?: FieldFilter;
    inputObjectFieldFilter?: FieldFilter;
    argumentFilter?: ArgumentFilter;
    directiveFilter?: DirectiveFilter;
    enumValueFilter?: EnumValueFilter;
}): GraphQLSchema;
