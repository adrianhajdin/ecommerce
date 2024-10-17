export declare enum DisguisedRule {
    APPLY_TO_QUANTITY = "apply_to_quantity",
    BUY_RULES_MIN_QUANTITY = "buy_rules_min_quantity"
}
export declare const disguisedRulesMap: {
    apply_to_quantity: {
        relation: string;
    };
    buy_rules_min_quantity: {
        relation: string;
    };
};
export declare const ruleAttributesMap: {
    rules: {
        id: string;
        value: string;
        label: string;
        required: boolean;
    }[];
    "target-rules": ({
        id: string;
        value: string;
        label: string;
        required: boolean;
    } | {
        id: DisguisedRule;
        value: DisguisedRule;
        label: string;
        field_type: string;
        required: boolean;
        disguised: boolean;
    })[];
    "buy-rules": ({
        id: string;
        value: string;
        label: string;
        required: boolean;
    } | {
        id: DisguisedRule;
        value: DisguisedRule;
        label: string;
        field_type: string;
        required: boolean;
        disguised: boolean;
    })[];
};
