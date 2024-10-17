import { z } from "zod";
export type AdminGetInviteParamsType = z.infer<typeof AdminGetInviteParams>;
export declare const AdminGetInviteParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export type AdminGetInvitesParamsType = z.infer<typeof AdminGetInvitesParams>;
export declare const AdminGetInvitesParams: any;
export type AdminGetInviteAcceptParamsType = z.infer<typeof AdminGetInviteAcceptParams>;
export declare const AdminGetInviteAcceptParams: z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    fields?: string | undefined;
}, {
    token: string;
    fields?: string | undefined;
}>;
export type AdminCreateInviteType = z.infer<typeof AdminCreateInvite>;
export declare const AdminCreateInvite: z.ZodObject<{
    email: z.ZodString;
}, "strict", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export type AdminInviteAcceptType = z.infer<typeof AdminInviteAccept>;
export declare const AdminInviteAccept: z.ZodObject<{
    email: z.ZodOptional<z.ZodString>;
    first_name: z.ZodOptional<z.ZodString>;
    last_name: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    email?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
}, {
    email?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
}>;
