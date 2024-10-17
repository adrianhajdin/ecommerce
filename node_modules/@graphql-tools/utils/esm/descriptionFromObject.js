import { Kind } from 'graphql';
export function getDescriptionNode(obj) {
    if (obj.astNode?.description) {
        return {
            ...obj.astNode.description,
            block: true,
        };
    }
    if (obj.description) {
        return {
            kind: Kind.STRING,
            value: obj.description,
            block: true,
        };
    }
}
