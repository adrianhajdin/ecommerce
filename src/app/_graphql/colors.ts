export const PRODUCT_COLORS = `colors {
  color
  colorHex
  id
}`

export const COLORS = `
  query Color {
    Colors(limit: 100) {
      docs {
        color
        colorHex
        id
      }
    }
  }
`
