'use client'

import { ReactNode, SetStateAction, createContext, useContext, useState } from 'react'

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
  searchTerm: string // Adicionando o estado do termo de busca
  setSearchTerm: React.Dispatch<SetStateAction<string>> // Adicionando a função para atualizar o termo de busca
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
  searchTerm: '', // Valor inicial para o termo de busca
  setSearchTerm: () => {}, // Função inicial (placeholder)
}

const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [categoryFilters, setCategoryFilters] = useState<string[]>([])
  const [subCategoryFilters, setSubCategoryFilters] = useState<string[]>([])
  const [colorFilters, setColorFilters] = useState<string[]>([])
  const [sizeFilters, setSizeFilters] = useState<string[]>([])
  const [sort, setSort] = useState('-createdAt')
  const [searchTerm, setSearchTerm] = useState('')

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
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = () => useContext(FilterContext)
