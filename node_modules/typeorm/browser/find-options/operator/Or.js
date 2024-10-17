import { FindOperator } from "../FindOperator";
export function Or(...values) {
    return new FindOperator("or", values, true, true);
}

//# sourceMappingURL=Or.js.map
