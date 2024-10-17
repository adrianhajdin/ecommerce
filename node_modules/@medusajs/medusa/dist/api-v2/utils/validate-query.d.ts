import { BaseEntity, QueryConfig } from "@medusajs/types";
import { NextFunction } from "express";
import { z } from "zod";
import { MedusaRequest, MedusaResponse } from "../../types/routing";
export declare function validateAndTransformQuery<TEntity extends BaseEntity>(zodSchema: z.ZodObject<any, any> | z.ZodEffects<any, any>, queryConfig: QueryConfig<TEntity>): (req: MedusaRequest, res: MedusaResponse, next: NextFunction) => Promise<void>;
