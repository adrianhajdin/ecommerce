import { ClassConstructor } from "class-transformer";
import { ValidatorOptions } from "class-validator";
import { Constructor } from "@medusajs/types";
/**
 * When overriding a validator, you can register it to be used instead of the original one.
 * For example, the place where you are overriding the core validator, you can call this function
 * @example
 * ```ts
 * // /src/api/routes/admin/products/create-product.ts
 * import { registerOverriddenValidators } from "@medusajs/medusa"
 * import { AdminPostProductsReq as MedusaAdminPostProductsReq } from "@medusajs/medusa/dist/api/routes/admin/products/create-product"
 * import { IsString } from "class-validator"
 *
 * class AdminPostProductsReq extends MedusaAdminPostProductsReq {
 *    @IsString()
 *    test: string
 * }
 *
 * registerOverriddenValidators(AdminPostProductsReq)
 * ```
 * @param extendedValidator
 */
export declare function registerOverriddenValidators(extendedValidator: Constructor<any>): void;
export declare function validator<T, V>(typedClass: ClassConstructor<T>, plain: V, config?: ValidatorOptions): Promise<T>;
