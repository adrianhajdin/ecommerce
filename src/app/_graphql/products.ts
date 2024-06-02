import { ARCHIVE_BLOCK, CALL_TO_ACTION, CONTENT, MEDIA_BLOCK } from './blocks'
import { PRODUCT_CATEGORIES } from './categories'
import { PRODUCT_COLORS } from './colors'
import { MEDIA_FIELDS } from './media'

export const PRODUCTS = `
  query Products {
    Products(limit: 300) {
      docs {
        slug
      }
    }
  }
`

export const PRODUCT = `
  query Product($slug: String, $draft: Boolean) {
    Products(where: { slug: { equals: $slug}}, limit: 1, draft: $draft) {
      docs {
        id
        title
        ${PRODUCT_CATEGORIES}
        price
        discountPercentage
        description
        relatedProducts {
          id
          slug
          title
          photos {
            photo{
              ${MEDIA_FIELDS}
            }
          }
          
        }
        ${PRODUCT_COLORS}
        sizes
        photos {
          photo{
            ${MEDIA_FIELDS}
          }
        }
      }
    }
  }
`

export const PRODUCT_PAYWALL = `
  query Product($slug: String, $draft: Boolean) {
    Products(where: { slug: { equals: $slug}}, limit: 1, draft: $draft) {
      docs {
        paywall {
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
        }
      }
    }
  }
`
