import React from 'react'
import ProductTable from './ProductTable'
import mockData from './mockData'
import './App.css'

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="external">
        <div className="product-table">
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
