import { AdminPostProductsReq, Region } from "@medusajs/medusa"

type SampleProductsOptions = {
  regions: Region[]
  collection_id?: string
}

// can't use the ProductStatus imported
// from the core within admin cusotmizations
enum ProductStatus {
  PUBLISHED = "published"
}

export default function getSampleProducts ({
  regions,
  collection_id
}: SampleProductsOptions): AdminPostProductsReq[] {
  return [
    {
      title: "Medusa T-Shirt",
      status: ProductStatus.PUBLISHED,
      collection_id,
      discountable: true,
      subtitle: null,
      description: "Reimagine the feeling of a classic T-shirt. With our cotton T-shirts, everyday essentials no longer have to be ordinary.",
      handle: "medusa-t-shirt",
      is_giftcard: false,
      weight: 400,
      images: [
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-front.png",
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-black-back.png",
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-front.png",
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/tee-white-back.png"
      ],
      options: [
        {
          title: "Size",
        },
        {
          title: "Color",
        }
      ],
      variants: [
        {
          title: "S / Black",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 2200
            }
          }),
          options: [
            {
              value: "S"
            },
            {
              value: "Black"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "S / White",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 2200
            }
          }),
          options: [
            {
              value: "S"
            },
            {
              value: "White"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "M / Black",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 2200
            }
          }),
          options: [
            {
              value: "M"
            },
            {
              value: "Black"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "M / White",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 2200
            }
          }),
          options: [
            {
              value: "M"
            },
            {
              value: "White"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "L / Black",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 2200
            }
          }),
          options: [
            {
              value: "L"
            },
            {
              value: "Black"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "L / White",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 2200
            }
          }),
          options: [
            {
              value: "L"
            },
            {
              value: "White"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "XL / Black",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 2200
            }
          }),
          options: [
            {
              value: "XL"
            },
            {
              value: "Black"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "XL / White",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 2200
            }
          }),
          options: [
            {
              value: "XL"
            },
            {
              value: "White"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        }
      ]
    },
    {
      title: "Medusa Sweatshirt",
      status: ProductStatus.PUBLISHED,
      discountable: true,
      collection_id,
      subtitle: null,
      description: "Reimagine the feeling of a classic sweatshirt. With our cotton sweatshirt, everyday essentials no longer have to be ordinary.",
      handle: "sweatshirt",
      is_giftcard: false,
      weight: 400,
      images: [
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png",
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-back.png"
      ],
      options: [
        {
          title: "Size",
        }
      ],
      variants: [
        {
          title: "S",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 3350
            }
          }),
          options: [
            {
              value: "S"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "M",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 3350
            }
          }),
          options: [
            {
              value: "M"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "L",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 3350
            }
          }),
          options: [
            {
              value: "L"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "XL",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 3350
            }
          }),
          options: [
            {
              value: "XL"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        }
      ]
    },
    {
      title: "Medusa Sweatpants",
      status: ProductStatus.PUBLISHED,
      discountable: true,
      collection_id,
      subtitle: null,
      description: "Reimagine the feeling of classic sweatpants. With our cotton sweatpants, everyday essentials no longer have to be ordinary.",
      handle: "sweatpants",
      is_giftcard: false,
      weight: 400,
      images: [
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-front.png",
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-back.png"
      ],
      options: [
        {
          title: "Size",
        }
      ],
      variants: [
        {
          title: "S",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 3350
            }
          }),
          options: [
            {
              value: "S"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "M",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 3350
            }
          }),
          options: [
            {
              value: "M"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "L",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 3350
            }
          }),
          options: [
            {
              value: "L"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "XL",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 3350
            }
          }),
          options: [
            {
              value: "XL"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        }
      ]
    },
    {
      title: "Medusa Shorts",
      status: ProductStatus.PUBLISHED,
      discountable: true,
      collection_id,
      subtitle: null,
      description: "Reimagine the feeling of classic shorts. With our cotton shorts, everyday essentials no longer have to be ordinary.",
      handle: "shorts",
      is_giftcard: false,
      weight: 400,
      images: [
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-front.png",
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/shorts-vintage-back.png"
      ],
      options: [
        {
          title: "Size",
        }
      ],
      variants: [
        {
          title: "S",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 2850
            }
          }),
          options: [
            {
              value: "S"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "M",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 2850
            }
          }),
          options: [
            {
              value: "M"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "L",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 2850
            }
          }),
          options: [
            {
              value: "L"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "XL",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 2850
            }
          }),
          options: [
            {
              value: "XL"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        }
      ]
    },
    {
      title: "Medusa Hoodie",
      status: ProductStatus.PUBLISHED,
      discountable: true,
      collection_id,
      subtitle: null,
      description: "Reimagine the feeling of a classic hoodie. With our cotton hoodie, everyday essentials no longer have to be ordinary.",
      handle: "hoodie",
      is_giftcard: false,
      weight: 400,
      images: [
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/black_hoodie_front.png",
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/black_hoodie_back.png"
      ],
      options: [
        {
          title: "Size",
        }
      ],
      variants: [
        {
          title: "S",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 4150
            }
          }),
          options: [
            {
              value: "S"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "M",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 4150
            }
          }),
          options: [
            {
              value: "M"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "L",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 4150
            }
          }),
          options: [
            {
              value: "L"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "XL",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 4150
            }
          }),
          options: [
            {
              value: "XL"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        }
      ]
    },
    {
      title: "Medusa Longsleeve",
      status: ProductStatus.PUBLISHED,
      discountable: true,
      collection_id,
      subtitle: null,
      description: "Reimagine the feeling of a classic longsleeve. With our cotton longsleeve, everyday essentials no longer have to be ordinary.",
      handle: "longsleeve",
      is_giftcard: false,
      weight: 400,
      images: [
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/ls-black-front.png",
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/ls-black-back.png"
      ],
      options: [
        {
          title: "Size",
        }
      ],
      variants: [
        {
          title: "S",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 4150
            }
          }),
          options: [
            {
              value: "S"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "M",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 4150
            }
          }),
          options: [
            {
              value: "M"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "L",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 4150
            }
          }),
          options: [
            {
              value: "L"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        },
        {
          title: "XL",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 4150
            }
          }),
          options: [
            {
              value: "XL"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        }
      ]
    },
    {
      title: "Medusa Coffee Mug",
      status: ProductStatus.PUBLISHED,
      discountable: true,
      collection_id,
      subtitle: null,
      description: "Every programmer's best friend.",
      handle: "coffee-mug",
      is_giftcard: false,
      weight: 400,
      images: [
        "https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png"
      ],
      options: [
        {
          title: "Size",
        }
      ],
      variants: [
        {
          title: "One Size",
          prices: regions.map((region) => {
            return {
              currency_code: region.currency_code,
              amount: 1200
            }
          }),
          options: [
            {
              value: "One Size"
            }
          ],
          inventory_quantity: 100,
          manage_inventory: true
        }
      ]
    }
  ]
}