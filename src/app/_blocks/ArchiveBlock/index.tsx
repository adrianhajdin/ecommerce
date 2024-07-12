'use client'

import React from 'react'

import { CollectionArchive } from '../../_components/CollectionArchive'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'
import { useFilter } from '../../_providers/Filter'
import { ArchiveBlockProps } from './types'

import classes from './index.module.scss'

export const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
  }
> = props => {
  const {
    introContent,
    id,
    relationTo,
    populateBy,
    limit,
    populatedDocs,
    populatedDocsTotal,
    categories,
    new: newFlag,
    hot: hotFlag,
    sale: saleFlag,
  } = props

  const { categoryFilters, subCategoryFilters } = useFilter()

  console.log(categoryFilters)


  return (
    <div id={`block-${id}`} className={classes.archiveBlock}>
      <CollectionArchive
        populateBy={populateBy}
        relationTo={relationTo}
        populatedDocs={categoryFilters.length > 0 || subCategoryFilters.length > 0 ? [] : []}
        populatedDocsTotal={categoryFilters.length > 0 || subCategoryFilters.length > 0 ? 0 : 0}
        categories={categories}
        limit={limit}
        sort="-publishedOn"
        new={newFlag}
        hot={hotFlag}
        sale={saleFlag}
      />
    </div>
  )
}
