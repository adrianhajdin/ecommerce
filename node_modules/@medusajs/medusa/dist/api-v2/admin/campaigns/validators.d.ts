import { CampaignBudgetType } from "@medusajs/utils";
import { z } from "zod";
export declare const AdminGetCampaignParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetCampaignsParamsType = z.infer<typeof AdminGetCampaignsParams>;
export declare const AdminGetCampaignsParams: any;
export type AdminCreateCampaignType = z.infer<typeof AdminCreateCampaign>;
export declare const AdminCreateCampaign: z.ZodObject<{
    name: z.ZodString;
    campaign_identifier: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodString>;
    budget: z.ZodOptional<z.ZodObject<{
        type: z.ZodNativeEnum<typeof CampaignBudgetType>;
        limit: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: CampaignBudgetType;
        limit: number;
    }, {
        type: CampaignBudgetType;
        limit: number;
    }>>;
    starts_at: z.ZodDate;
    ends_at: z.ZodDate;
    promotions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    starts_at: Date;
    ends_at: Date;
    campaign_identifier: string;
    description?: string | undefined;
    currency?: string | undefined;
    budget?: {
        type: CampaignBudgetType;
        limit: number;
    } | undefined;
    promotions?: {
        id: string;
    }[] | undefined;
}, {
    name: string;
    starts_at: Date;
    ends_at: Date;
    campaign_identifier: string;
    description?: string | undefined;
    currency?: string | undefined;
    budget?: {
        type: CampaignBudgetType;
        limit: number;
    } | undefined;
    promotions?: {
        id: string;
    }[] | undefined;
}>;
export type AdminUpdateCampaignType = z.infer<typeof AdminUpdateCampaign>;
export declare const AdminUpdateCampaign: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    campaign_identifier: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodString>;
    budget: z.ZodOptional<z.ZodObject<{
        type: z.ZodOptional<z.ZodNativeEnum<typeof CampaignBudgetType>>;
        limit: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        type?: CampaignBudgetType | undefined;
        limit?: number | undefined;
    }, {
        type?: CampaignBudgetType | undefined;
        limit?: number | undefined;
    }>>;
    starts_at: z.ZodOptional<z.ZodDate>;
    ends_at: z.ZodOptional<z.ZodDate>;
    promotions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    campaign_identifier?: string | undefined;
    description?: string | undefined;
    currency?: string | undefined;
    budget?: {
        type?: CampaignBudgetType | undefined;
        limit?: number | undefined;
    } | undefined;
    starts_at?: Date | undefined;
    ends_at?: Date | undefined;
    promotions?: {
        id: string;
    }[] | undefined;
}, {
    name?: string | undefined;
    campaign_identifier?: string | undefined;
    description?: string | undefined;
    currency?: string | undefined;
    budget?: {
        type?: CampaignBudgetType | undefined;
        limit?: number | undefined;
    } | undefined;
    starts_at?: Date | undefined;
    ends_at?: Date | undefined;
    promotions?: {
        id: string;
    }[] | undefined;
}>;
