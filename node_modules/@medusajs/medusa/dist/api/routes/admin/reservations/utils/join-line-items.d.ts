import { ExtendedReservationItem } from "..";
import { LineItemService } from "../../../../../services";
export declare const joinLineItems: (reservations: ExtendedReservationItem[], lineItemService: LineItemService) => Promise<ExtendedReservationItem[]>;
