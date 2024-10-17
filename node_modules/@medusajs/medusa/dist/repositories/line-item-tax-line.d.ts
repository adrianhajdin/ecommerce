import { LineItemTaxLine } from "../models";
export declare const LineItemTaxLineRepository: import("typeorm").Repository<LineItemTaxLine> & {
    upsertLines(lines: LineItemTaxLine[]): Promise<LineItemTaxLine[]>;
    deleteForCart(cartId: string): Promise<void>;
};
export default LineItemTaxLineRepository;
