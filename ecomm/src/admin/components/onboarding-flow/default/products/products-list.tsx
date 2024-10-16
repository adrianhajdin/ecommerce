import React, { useMemo } from "react";
import { 
  useAdminCreateProduct,
  useAdminCreateCollection,
  useMedusa
} from "medusa-react";
import { StepContentProps } from "../../../../widgets/onboarding-flow/onboarding-flow";
import { Button, Text } from "@medusajs/ui";
import getSampleProducts from "../../../../utils/sample-products";
import prepareRegions from "../../../../utils/prepare-region";

const ProductsListDefault = ({ onNext, isComplete }: StepContentProps) => {
  const { mutateAsync: createCollection, isLoading: collectionLoading } =
    useAdminCreateCollection();
  const { mutateAsync: createProduct, isLoading: productLoading } =
    useAdminCreateProduct();
  const { client } = useMedusa()

  const isLoading = useMemo(() => 
    collectionLoading || productLoading,
    [collectionLoading, productLoading]
  );

  const createSample = async () => {
    try {
      const { collection } = await createCollection({
        title: "Merch",
        handle: "merch",
      });

      const regions = await prepareRegions(client)

      const sampleProducts = getSampleProducts({
        regions,
        collection_id: collection.id
      })
      const { product } = await createProduct(sampleProducts[0]);
      onNext(product);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Text className="mb-2">
        Create a product and set its general details such as title and
        description, its price, options, variants, images, and more. You'll then
        use the product to create a sample order.
      </Text>
      <Text>
        You can create a product by clicking the "New Product" button below.
        Alternatively, if you're not ready to create your own product, we can
        create a sample one for you.
      </Text>
      {!isComplete && (
        <div className="flex gap-2 mt-6">
          <Button
            variant="primary"
            size="base"
            onClick={() => createSample()}
            isLoading={isLoading}
          >
            Create sample product
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductsListDefault;
