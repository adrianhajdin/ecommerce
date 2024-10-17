import { NextFunction, Request, Response } from "express";
type GetProductsRequiredParams = {
    id: string;
};
export declare function validateProductsExist<T extends GetProductsRequiredParams = GetProductsRequiredParams>(getProducts: (req: any) => T[]): (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
