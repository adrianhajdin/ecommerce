import { ARCHIVE_BLOCK, CALL_TO_ACTION, CONTENT, MEDIA_BLOCK } from './blocks'
import { MEDIA, MEDIA_FIELDS } from './media'
export const PAGES = `
  query Pages {
    Pages(limit: 300, where: { slug: { not_equals: "cart" } })  {
      docs {
        slug
      }
    }
  }
`

export const PAGE = `
  query Page($slug: String, $draft: Boolean) {
    Pages(where: { AND: [{ slug: { equals: $slug }}] }, limit: 1, draft: $draft) {
      docs {
        id
        title
        layout {
          ${CONTENT}
          ${CALL_TO_ACTION}
          ${CONTENT}
          ${MEDIA_BLOCK}
          ${ARCHIVE_BLOCK}
        }
        hero {
          type
          media{
              ${MEDIA_FIELDS}
            }
          ${MEDIA}
                    carrossel{
            medias {
            media {
              ${MEDIA_FIELDS}
            }
          }
          }
        }
      }
    }
  }
`



export const EDITABLE_PAGES = `
  query EditablePages {
    Editablepages(limit: 300, where: { slug: { not_equals: "cart" } })  {
      docs {
        slug
      }
    }
  }
`
export const EDITABLE_PAGE = `
  query EditablePage($slug: String, $draft: Boolean) {
    Editablepages(where: { AND: [{ slug: { equals: $slug }}] }, limit: 1, draft: $draft) {
      docs {
        id
        title
        layout {

          ${ARCHIVE_BLOCK}
        }
        hero {
          type
          media {
              ${MEDIA_FIELDS}
            }
          carrossel{
            medias {
            media {
              ${MEDIA_FIELDS}
            }
          }
          }
  
          ${MEDIA}
        }
      }
    }
  }
`
