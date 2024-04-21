export const PRODUCT_CATEGORIES = `categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`

export const CATEGORIES = `
  query Categories {
    Categories(limit: 100) {
      docs {
        id
        title
        parent{
          id
          title
        }
        media {
          alt
          width
          height
          url
        }
      }
    }
  }
`
