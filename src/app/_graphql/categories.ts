export const PRODUCT_CATEGORIES = `categories {
  title
  subtitle
  category
  id
}`

export const CATEGORIES = `
  query Categories {
    Categories(limit: 100) {
      docs {
        id
        title
        subtitle
        category
        slug
      }
    }
  }
`
