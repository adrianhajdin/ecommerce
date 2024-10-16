import React from "react";
import { 
  useAdminCreateProduct,
  useAdminCreateCollection,
  useMedusa
} from "medusa-react";
import { StepContentProps } from "../../../../widgets/onboarding-flow/onboarding-flow";
import { Button, Text } from "@medusajs/ui";
import { AdminPostProductsReq, Product } from "@medusajs/medusa";
import getSampleProducts from "../../../../utils/sample-products";
import prepareRegions from "../../../../utils/prepare-region";

const ProductsListNextjs = ({ onNext, isComplete }: StepContentProps) => {
  const { mutateAsync: createCollection, isLoading: collectionLoading } =
    useAdminCreateCollection();
  const { mutateAsync: createProduct, isLoading: productLoading } =
    useAdminCreateProduct();
  const { client } = useMedusa()

  const isLoading = collectionLoading || productLoading;

  const createSample = async () => {
    try {
      const { collection } = await createCollection({
        title: "Merch",
        handle: "merch",
      });

      const regions = await prepareRegions(client)

      const tryCreateProduct = async (sampleProduct: AdminPostProductsReq): Promise<Product | null> => {
        try {
          return (await createProduct(sampleProduct)).product
        } catch {
          // ignore if product already exists
          return null
        }
      }

      let product: Product
      const sampleProducts = getSampleProducts({
        regions,
        collection_id: collection.id
      })
      await Promise.all(
        sampleProducts.map(async (sampleProduct, index) => {
          const createdProduct = await tryCreateProduct(sampleProduct)
          if (index === 0 && createProduct) {
            product = createdProduct
          }
        })
      )
      onNext(product);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Text className="mb-2">
        Products in Medusa represent the products you sell. You can set their general details including a
        title and description. Each product has options and variants, and you can set a price for each variant.
      </Text>
      <Text>
        Click the button below to create sample products.
      </Text>
      {!isComplete && (
        <div className="flex gap-2 mt-6">
          <Button
            variant="primary"
            size="base"
            onClick={() => createSample()}
            isLoading={isLoading}
          >
            Create sample products
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductsListNextjs;
