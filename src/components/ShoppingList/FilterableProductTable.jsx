import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import mockData from './mockData'
import './App.css'

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="external">
        <SearchBar />
        <div className="productTable">
          <ProductTable
            title="Sporting Goods"
            dataSource={mockData.filter(
              (item) => item.category === 'Sporting Goods'
            )}
          />
          <ProductTable
            title="Electronics"
            dataSource={mockData.filter(
              (item) => item.category === 'Electronics'
            )}
          />
        </div>
      </div>
    )
  }
}

export default FilterableProductTable
