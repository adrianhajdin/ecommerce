import { type StringValueNode } from 'graphql';
interface ObjectWithDescription {
    astNode?: {
        description?: StringValueNode | null;
    } | null;
    description?: string | null;
}
export declare function getDescriptionNode(obj: ObjectWithDescription): StringValueNode | undefined;
export {};
