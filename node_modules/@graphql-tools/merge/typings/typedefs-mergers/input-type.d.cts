import { DirectiveDefinitionNode, InputObjectTypeDefinitionNode, InputObjectTypeExtensionNode } from 'graphql';
import { Config } from './merge-typedefs.cjs';
export declare function mergeInputType(node: InputObjectTypeDefinitionNode | InputObjectTypeExtensionNode, existingNode: InputObjectTypeDefinitionNode | InputObjectTypeExtensionNode, config?: Config, directives?: Record<string, DirectiveDefinitionNode>): InputObjectTypeDefinitionNode | InputObjectTypeExtensionNode;
