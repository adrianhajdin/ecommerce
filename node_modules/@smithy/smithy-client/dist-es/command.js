import { constructStack } from "@smithy/middleware-stack";
export class Command {
    constructor() {
        this.middlewareStack = constructStack();
    }
}
