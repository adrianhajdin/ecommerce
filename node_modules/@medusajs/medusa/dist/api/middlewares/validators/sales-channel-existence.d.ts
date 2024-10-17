import { NextFunction, Request, Response } from "express";
import { ProductSalesChannelReq } from "../../../types/product";
export declare function validateSalesChannelsExist(getSalesChannels: (req: any) => ProductSalesChannelReq[] | undefined): (req: Request, res: Response, next: NextFunction) => Promise<void>;
