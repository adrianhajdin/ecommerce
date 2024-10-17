import { Request, Response } from "express";
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
export declare class AdminPostAnalyticsConfigReq {
    opt_out: boolean;
    anonymize?: boolean;
}
