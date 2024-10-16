import React from "react";
import { CurrencyDollarSolid, NextJs, ComputerDesktopSolid } from "@medusajs/icons";
import { IconBadge, Heading, Text } from "@medusajs/ui";

const OrderDetailNextjs = () => {
  const queryParams = `?ref=onboarding&type=${
    process.env.MEDUSA_ADMIN_ONBOARDING_TYPE || "nextjs"
  }`;
  return (
    <>
      <Text size="small" className="mb-6">
        You finished the setup guide 🎉. You now have a complete ecommerce store
        with a backend, admin, and a Next.js storefront. Feel free to play
        around with each of these components to experience all commerce features
        that Medusa provides.
      </Text>
      <Heading
        level="h2"
        className="text-ui-fg-base pt-6 border-t border-ui-border-base border-solid mb-2"
      >
        Continue Building your Ecommerce Store
      </Heading>
      <Text size="small">
        Your ecommerce store provides all basic ecommerce features you need to
        start selling. You can add more functionalities, add plugins for
        third-party integrations, and customize the storefront’s look and feel
        to support your use case.
      </Text>
      <div className="grid grid-cols-3 gap-4 mt-6 pb-6 mb-6 border-b border-ui-border-base border-solid auto-rows-fr">
        <a
          href={`https://docs.medusajs.com/starters/nextjs-medusa-starter${queryParams}`}
          target="_blank"
          className="flex"
        >
          <div className="p-3 rounded-rounded items-start flex bg-ui-bg-subtle shadow-elevation-card-rest hover:shadow-elevation-card-hover">
            <div className="mr-4">
              <div className="bg-ui-bg-base rounded-lg border border-ui-border-strong p-1 flex justify-center items-center">
                <IconBadge>
                  <NextJs />
                </IconBadge>
              </div>
            </div>
            <div>
              <Text
                size="xsmall"
                weight="plus"
                className="mb-1 text-ui-fg-base"
              >
                Build with the Next.js Storefront
              </Text>
              <Text size="small">
                Learn about the Next.js starter storefront’s features and how to
                customize it.
              </Text>
            </div>
          </div>
        </a>
        <a
          href={`https://docs.medusajs.com/modules/overview${queryParams}`}
          target="_blank"
          className="flex"
        >
          <div className="p-3 rounded-rounded items-start flex bg-ui-bg-subtle shadow-elevation-card-rest hover:shadow-elevation-card-hover">
            <div className="mr-4">
              <div className="bg-ui-bg-base rounded-lg border border-ui-border-strong p-1 flex justify-center items-center">
                <IconBadge>
                  <CurrencyDollarSolid />
                </IconBadge>
              </div>
            </div>
            <div>
              <Text
                size="xsmall"
                weight="plus"
                className="mb-1 text-ui-fg-base"
              >
                Add Commerce Features
              </Text>
              <Text size="small">
                Learn about all available commerce features and how to
                add them in your storefront
              </Text>
            </div>
          </div>
        </a>
        <a
          href={`https://docs.medusajs.com/recipes${queryParams}`}
          target="_blank"
          className="flex"
        >
          <div className="p-3 rounded-rounded flex items-start bg-ui-bg-subtle shadow-elevation-card-rest hover:shadow-elevation-card-hover">
            <div className="mr-4">
              <div className="bg-ui-bg-base rounded-lg border border-ui-border-strong p-1 flex justify-center items-center">
                <IconBadge>
                  <ComputerDesktopSolid />
                </IconBadge>
              </div>
            </div>
            <div>
              <Text
                size="xsmall"
                weight="plus"
                className="mb-1 text-ui-fg-base"
              >
                Build Custom Use Cases
              </Text>
              <Text size="small">
                Build a marketplace, subscription-based purchases,
                or your custom use-cases.
              </Text>
            </div>
          </div>
        </a>
      </div>
      <div>
        You can find more useful guides in{" "}
        <a
          href="https://docs.medusajs.com/?ref=onboarding"
          target="_blank"
          className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
        >
          our documentation
        </a>
        . If you like Medusa, please{" "}
        <a
          href="https://github.com/medusajs/medusa"
          target="_blank"
          className="text-ui-fg-interactive hover:text-ui-fg-interactive-hover"
        >
          star us on GitHub
        </a>
        .
      </div>
    </>
  );
};

export default OrderDetailNextjs;
