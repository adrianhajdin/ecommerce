import { z } from "zod";
export type AdminGetPaymentParamsType = z.infer<typeof AdminGetPaymentParams>;
export declare const AdminGetPaymentParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetPaymentsParamsType = z.infer<typeof AdminGetPaymentsParams>;
export declare const AdminGetPaymentsParams: any;
export type AdminGetPaymentProvidersParamsType = z.infer<typeof AdminGetPaymentProvidersParams>;
export declare const AdminGetPaymentProvidersParams: any;
export type AdminCreatePaymentCaptureType = z.infer<typeof AdminCreatePaymentCapture>;
export declare const AdminCreatePaymentCapture: z.ZodObject<{
    amount: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    amount?: number | undefined;
}, {
    amount?: number | undefined;
}>;
export type AdminCreatePaymentRefundType = z.infer<typeof AdminCreatePaymentRefund>;
export declare const AdminCreatePaymentRefund: z.ZodObject<{
    amount: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    amount?: number | undefined;
}, {
    amount?: number | undefined;
}>;
