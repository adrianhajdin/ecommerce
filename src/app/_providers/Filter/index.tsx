'use client'

import { createContext, ReactNode, SetStateAction, useContext, useState } from 'react'

interface IContextType {
  categoryFilters: string[]
  setCategoryFilters: React.Dispatch<SetStateAction<string[]>>
  subCategoryFilters: string[]
  setSubCategoryFilters: React.Dispatch<SetStateAction<string[]>>
  colorFilters: string[]
  setColorFilters: React.Dispatch<SetStateAction<string[]>>
  sizeFilters: string[]
  setSizeFilters: React.Dispatch<SetStateAction<string[]>>
  sort: string
  setSort: React.Dispatch<SetStateAction<string>>
}

export const INITIAL_FILTER_DATA = {
  categoryFilters: [],
  setCategoryFilters: () => [],
  subCategoryFilters: [],
  setSubCategoryFilters: () => [],
  colorFilters: [],
  setColorFilters: () => [],
  sizeFilters: [],
  setSizeFilters: () => [],
  sort: '',
  setSort: () => '',
}

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [categoryFilters, setCategoryFilters] = useState<string[]>([])
  const [subCategoryFilters, setSubCategoryFilters] = useState<string[]>([])
  const [colorFilters, setColorFilters] = useState<string[]>([])
  const [sizeFilters, setSizeFilters] = useState<string[]>([])
  const [sort, setSort] = useState('-createdAt')

  return (
    <FilterContext.Provider
      value={{
        categoryFilters,
        setCategoryFilters,
        subCategoryFilters,
        setSubCategoryFilters,
        colorFilters,
        setColorFilters,
        sizeFilters,
        setSizeFilters,
        sort,
        setSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)
