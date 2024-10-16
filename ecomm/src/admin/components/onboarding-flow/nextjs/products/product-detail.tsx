import { useAdminProduct } from "medusa-react";
import { StepContentProps } from "../../../../widgets/onboarding-flow/onboarding-flow";
import { Button, Text } from "@medusajs/ui";

const ProductDetailNextjs = ({ onNext, isComplete, data }: StepContentProps) => {
  const { product, isLoading: productIsLoading } = useAdminProduct(data?.product_id)
  return (
    <div>
      <div className="flex flex-col gap-2">
        <Text>
          We have now created a few sample products in your Medusa store. You can scroll down to see what the Product Detail view looks like in the Admin dashboard.
          This is also the view you use to edit existing products.
        </Text>
        <Text>
          To view the products in your store, you can visit the Next.js Storefront that was installed with <code>create-medusa-app</code>. 
        </Text>
        <Text>
          The Next.js Storefront Starter is a template that helps you start building an ecommerce store with Medusa. 
          You control the code for the storefront and you can customize it further to fit your specific needs.
        </Text>
        <Text>
          Click the button below to view the products in your Next.js Storefront.
        </Text>
        <Text>
          Having trouble? Click{" "}
          <a 
            href="https://docs.medusajs.com/starters/nextjs-medusa-starter#troubleshooting-nextjs-storefront-not-working"
            target="_blank"
            className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
          >
            here
          </a>.
        </Text>
      </div>
      <div className="flex gap-2 mt-6">
        <a
          href={`http://localhost:8000/products/${product?.handle}?onboarding=true`}
          target="_blank"
        >
          <Button variant="primary" size="base" isLoading={productIsLoading}>
            Open Next.js Storefront
          </Button>
        </a>
        {!isComplete && (
          <Button variant="secondary" size="base" onClick={() => onNext()}>
            Next step
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductDetailNextjs
