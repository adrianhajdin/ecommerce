import { StockLocationDTO, StockLocationExpandedDTO } from "@medusajs/types";
import { SalesChannelLocationService, SalesChannelService } from "../../../../../services";
declare const joinSalesChannels: (locations: StockLocationDTO[], channelLocationService: SalesChannelLocationService, salesChannelService: SalesChannelService) => Promise<StockLocationExpandedDTO[]>;
export { joinSalesChannels };
