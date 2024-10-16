import { Store } from "@medusajs/medusa"
import type Medusa from "@medusajs/medusa-js"
import { ExtendedStoreDTO } from "@medusajs/medusa/dist/types/store"

export default async function prepareRegions (client: Medusa) {
  let { regions } = await client.admin.regions.list()
  if (!regions.length) {
    let { store } = await client.admin.store.retrieve()
    if (!store.currencies) {
      store = (await client.admin.store.update({
        currencies: ["eur"]
      })).store as ExtendedStoreDTO
    }

    regions = [(await client.admin.regions.create(getSampleRegion(store))).region]
  }

  return regions
}

function getSampleRegion (store: Store) {
  return {
    name: "EU",
    currency_code: store.currencies[0].code,
    tax_rate: 0,
    payment_providers: [
      "manual"
    ],
    fulfillment_providers: [
      "manual"
    ],
    countries: [
      "gb",
      "de",
      "dk",
      "se",
      "fr",
      "es",
      "it"
    ]
  }
}