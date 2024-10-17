import { z } from "zod";
export declare const createBatchBody: (createValidator: z.ZodType, updateValidator: z.ZodType) => z.ZodObject<{
    create: z.ZodOptional<z.ZodArray<z.ZodType<any, z.ZodTypeDef, any>, "many">>;
    update: z.ZodOptional<z.ZodArray<z.ZodType<any, z.ZodTypeDef, any>, "many">>;
    delete: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    create?: any[] | undefined;
    update?: any[] | undefined;
    delete?: string[] | undefined;
}, {
    create?: any[] | undefined;
    update?: any[] | undefined;
    delete?: string[] | undefined;
}>;
export declare const createLinkBody: () => z.ZodObject<{
    add: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    remove: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    add?: string[] | undefined;
    remove?: string[] | undefined;
}, {
    add?: string[] | undefined;
    remove?: string[] | undefined;
}>;
export declare const createSelectParams: () => z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fields?: string | undefined;
}, {
    fields?: string | undefined;
}>;
export declare const createFindParams: ({ offset, limit, order, }?: {
    offset?: number | undefined;
    limit?: number | undefined;
    order?: string | undefined;
}) => z.ZodObject<{
    fields: z.ZodOptional<z.ZodString>;
    offset: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    limit: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodNumber>>, number, unknown>;
    order: z.ZodOptional<z.ZodString> | z.ZodDefault<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    fields?: string | undefined;
    order?: string | undefined;
}, {
    fields?: string | undefined;
    offset?: unknown;
    limit?: unknown;
    order?: string | undefined;
}>;
export declare const createOperatorMap: (type?: z.ZodType, valueParser?: ((val: any) => any) | undefined) => z.ZodObject<{
    $eq: any;
    $ne: any;
    $in: any;
    $nin: any;
    $like: any;
    $ilike: any;
    $re: any;
    $contains: any;
    $gt: any;
    $gte: any;
    $lt: any;
    $lte: any;
}, "strip", z.ZodTypeAny, {
    $eq?: any;
    $ne?: any;
    $in?: any;
    $nin?: any;
    $like?: any;
    $ilike?: any;
    $re?: any;
    $contains?: any;
    $gt?: any;
    $gte?: any;
    $lt?: any;
    $lte?: any;
}, {
    $eq?: any;
    $ne?: any;
    $in?: any;
    $nin?: any;
    $like?: any;
    $ilike?: any;
    $re?: any;
    $contains?: any;
    $gt?: any;
    $gte?: any;
    $lt?: any;
    $lte?: any;
}>;
