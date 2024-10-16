import { Region } from "@medusajs/medusa";
import type Medusa from "@medusajs/medusa-js"

export default async function prepareShippingOptions (client: Medusa, region: Region) {
  let { shipping_options } = await client.admin.shippingOptions.list({
    region_id: region.id
  })
  if (!shipping_options.length) {
    shipping_options = [(await client.admin.shippingOptions.create({
      "name": "PostFake Standard",
      "region_id": region.id,
      "provider_id": "manual",
      "data": {
        "id": "manual-fulfillment"
      },
      // @ts-ignore
      "price_type": "flat_rate",
      "amount": 1000
    })).shipping_option]
  }

  return shipping_options
}