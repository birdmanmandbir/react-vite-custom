import React from 'react'
import { useState } from 'react'

import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import mockData from './mockData'
import './App.css'

function getDisplayedItems(filterText, isStockOnly) {
  let ret = isStockOnly
    ? mockData.filter((item) => item.stocked === true)
    : mockData
  ret = ret.filter((item) => item.name.startsWith(filterText))
  return ret
}

function FilterableProductTable() {
  const [filterText, setFilterText] = useState('')
  const [isStockOnly, setIsStockOnly] = useState(false)

  const displayedItems = getDisplayedItems(filterText, isStockOnly)
  return (
    <div className="external">
      <SearchBar
        filterText={filterText}
        isStockOnly={isStockOnly}
        handleFilterTextChange={(e) => setFilterText(e.target.value)}
        handleIsStockOnlyChange={(value) => setIsStockOnly(value)}
      />
      <div className="productTable">
        <ProductTable
          title="Sporting Goods"
          dataSource={displayedItems.filter(
            (item) => item.category === 'Sporting Goods'
          )}
        />
        <ProductTable
          title="Electronics"
          dataSource={displayedItems.filter(
            (item) => item.category === 'Electronics'
          )}
        />
      </div>
    </div>
  )
}

export default FilterableProductTable
