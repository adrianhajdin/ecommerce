import { FlagRouter } from "@medusajs/utils";
import { EntityManager } from "typeorm";
import { TransactionBaseService } from "../interfaces";
import { Cart, ShippingOption, ShippingProfile } from "../models";
import { ProductRepository } from "../repositories/product";
import { ShippingProfileRepository } from "../repositories/shipping-profile";
import { FindConfig, Selector } from "../types/common";
import { CreateShippingProfile, UpdateShippingProfile } from "../types/shipping-profile";
import CustomShippingOptionService from "./custom-shipping-option";
import ProductService from "./product";
import ShippingOptionService from "./shipping-option";
type InjectedDependencies = {
    manager: EntityManager;
    productService: ProductService;
    shippingOptionService: ShippingOptionService;
    customShippingOptionService: CustomShippingOptionService;
    shippingProfileRepository: typeof ShippingProfileRepository;
    productRepository: typeof ProductRepository;
    featureFlagRouter: FlagRouter;
};
/**
 * Provides layer to manipulate profiles.
 * @constructor
 * @implements {BaseService}
 */
declare class ShippingProfileService extends TransactionBaseService {
    protected readonly productService_: ProductService;
    protected readonly shippingOptionService_: ShippingOptionService;
    protected readonly customShippingOptionService_: CustomShippingOptionService;
    protected readonly shippingProfileRepository_: typeof ShippingProfileRepository;
    protected readonly productRepository_: typeof ProductRepository;
    protected readonly featureFlagRouter_: FlagRouter;
    constructor({ shippingProfileRepository, productService, productRepository, shippingOptionService, customShippingOptionService, featureFlagRouter, }: InjectedDependencies);
    /**
     * @param selector - the query object for find
     * @param config - the config object for find
     * @return the result of the find operation
     */
    list(selector?: Selector<ShippingProfile>, config?: FindConfig<ShippingProfile>): Promise<ShippingProfile[]>;
    getMapProfileIdsByProductIds(productIds: string[]): Promise<Map<string, string>>;
    /**
     * Gets a profile by id.
     * Throws in case of DB Error and if profile was not found.
     * @param profileId - the id of the profile to get.
     * @param options - options opf the query.
     * @return {Promise<Product>} the profile document.
     */
    retrieve(profileId: string, options?: FindConfig<ShippingProfile>): Promise<ShippingProfile>;
    retrieveForProducts(productIds: string | string[]): Promise<{
        [product_id: string]: ShippingProfile[];
    }>;
    retrieveDefault(): Promise<ShippingProfile | null>;
    /**
     * Creates a default shipping profile, if this does not already exist.
     * @return {Promise<ShippingProfile>} the shipping profile
     */
    createDefault(): Promise<ShippingProfile>;
    /**
     * Retrieves the default gift card profile
     * @return the shipping profile for gift cards
     */
    retrieveGiftCardDefault(): Promise<ShippingProfile | null>;
    /**
     * Creates a default shipping profile, for gift cards if unless it already
     * exists.
     * @return the shipping profile
     */
    createGiftCardDefault(): Promise<ShippingProfile>;
    /**
     * Creates a new shipping profile.
     * @param profile - the shipping profile to create from
     * @return the result of the create operation
     */
    create(profile: CreateShippingProfile): Promise<ShippingProfile>;
    /**
     * Updates a profile. Metadata updates and product updates should use
     * dedicated methods, e.g. `setMetadata`, `addProduct`, etc. The function
     * will throw errors if metadata or product updates are attempted.
     * @param profileId - the id of the profile. Must be a string that
     *   can be casted to an ObjectId
     * @param update - an object with the update values.
     * @return resolves to the update result.
     */
    update(profileId: string, update: UpdateShippingProfile): Promise<ShippingProfile>;
    /**
     * Deletes a profile with a given profile id.
     * @param profileId - the id of the profile to delete. Must be
     *   castable as an ObjectId
     * @return the result of the delete operation.
     */
    delete(profileId: string): Promise<void>;
    /**
     * @deprecated use {@link addProducts} instead
     */
    addProduct(profileId: string, productId: string | string[]): Promise<ShippingProfile>;
    /**
     * Adds a product or an array of products to the profile.
     * @param profileId - the profile to add the products to.
     * @param productId - the ID of the product or multiple products to add.
     * @return the result of update
     */
    addProducts(profileId: string, productId: string | string[]): Promise<ShippingProfile>;
    /**
     * Removes a product or an array of products from the profile.
     * @param profileId - the profile to add the products to.
     * @param productId - the ID of the product or multiple products to add.
     * @return the result of update
     */
    removeProducts(profileId: string | null, productId: string | string[]): Promise<ShippingProfile | void>;
    /**
     * Adds a shipping option to the profile. The shipping option can be used to
     * fulfill the products in the products field.
     * @param profileId - the profile to apply the shipping option to
     * @param optionId - the ID of the option or multiple options to add to the profile
     * @return the result of the model update operation
     */
    addShippingOption(profileId: string, optionId: string | string[]): Promise<ShippingProfile>;
    /**
     * Finds all the shipping profiles that cover the products in a cart, and
     * validates all options that are available for the cart.
     * @param cart - the cart object to find shipping options for
     * @return a list of the available shipping options
     */
    fetchCartOptions(cart: any): Promise<ShippingOption[]>;
    /**
     * Returns a list of all the productIds in the cart.
     * @param cart - the cart to extract products from
     * @return a list of product ids
     */
    protected getProfilesInCart(cart: Cart): Promise<string[]>;
}
export default ShippingProfileService;
