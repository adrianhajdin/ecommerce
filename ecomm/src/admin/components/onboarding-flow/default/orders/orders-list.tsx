import React from "react";
import { 
  useAdminProduct,
  useAdminCreateDraftOrder,
  useMedusa
} from "medusa-react";
import { StepContentProps } from "../../../../widgets/onboarding-flow/onboarding-flow";
import { Button, Text } from "@medusajs/ui";
import prepareRegions from "../../../../utils/prepare-region";
import prepareShippingOptions from "../../../../utils/prepare-shipping-options";

const OrdersListDefault = ({ onNext, isComplete, data }: StepContentProps) => {
  const { product } = useAdminProduct(data.product_id);
  const { mutateAsync: createDraftOrder, isLoading } =
    useAdminCreateDraftOrder();
  const { client } = useMedusa();

  const createOrder = async () => {
    const variant = product.variants[0] ?? null;
    try {
      // check if there is a shipping option and a region
      // and if not, create demo ones
      const regions = await prepareRegions(client)
      const shipping_options = await prepareShippingOptions(client, regions[0])

      const { draft_order } = await createDraftOrder({
        email: "customer@medusajs.com",
        items: [
          variant
            ? {
                quantity: 1,
                variant_id: variant?.id,
              }
            : {
                quantity: 1,
                title: product.title,
                unit_price: 50,
              },
        ],
        shipping_methods: [
          {
            option_id: shipping_options[0].id,
          },
        ],
        region_id: regions[0].id,
      });

      const { order } = await client.admin.draftOrders.markPaid(draft_order.id);

      onNext(order);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="mb-6">
        <Text className="mb-2">
          The last step is to create a sample order using the product you just created. You can then view your order’s details, process its payment, fulfillment, inventory, and more.
        </Text>
        <Text>
          By clicking the “Create a Sample Order” button, we’ll generate an order using the product you created and default configurations.
        </Text>
      </div>
      <div className="flex gap-2">
        {!isComplete && (
          <Button
            variant="primary"
            size="base"
            onClick={() => createOrder()}
            isLoading={isLoading}
          >
            Create a sample order
          </Button>
        )}
      </div>
    </>
  );
};

export default OrdersListDefault;
