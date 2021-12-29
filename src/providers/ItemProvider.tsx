import React from 'react'
import { useContext, createContext } from 'react'

const ItemContext = createContext({})

const ItemProvider: React.FunctionComponent = ({ children }) => {
  const a = 12
  return <ItemContext.Provider value={{ a }}>{children}</ItemContext.Provider>
}
const useItem = () => useContext(ItemContext)
export { ItemProvider, useItem }
