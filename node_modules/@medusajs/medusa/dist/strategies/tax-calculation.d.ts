import { FlagRouter } from "@medusajs/utils";
import { ITaxCalculationStrategy, TaxCalculationContext } from "../interfaces";
import { LineItem, LineItemTaxLine, ShippingMethodTaxLine } from "../models";
declare class TaxCalculationStrategy implements ITaxCalculationStrategy {
    protected readonly featureFlagRouter_: FlagRouter;
    constructor({ featureFlagRouter }: {
        featureFlagRouter: any;
    });
    calculate(items: LineItem[], taxLines: (ShippingMethodTaxLine | LineItemTaxLine)[], calculationContext: TaxCalculationContext): Promise<number>;
    private calculateLineItemsTax;
    private calculateShippingMethodsTax;
}
export default TaxCalculationStrategy;
