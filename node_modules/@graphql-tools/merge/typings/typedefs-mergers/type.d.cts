import { DirectiveDefinitionNode, ObjectTypeDefinitionNode, ObjectTypeExtensionNode } from 'graphql';
import { Config } from './merge-typedefs.cjs';
export declare function mergeType(node: ObjectTypeDefinitionNode | ObjectTypeExtensionNode, existingNode: ObjectTypeDefinitionNode | ObjectTypeExtensionNode, config?: Config, directives?: Record<string, DirectiveDefinitionNode>): ObjectTypeDefinitionNode | ObjectTypeExtensionNode;
