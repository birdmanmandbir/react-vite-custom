import React from 'react'
import ProductTable from './ProductTable'
import mockData from './mockData'

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
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
    )
  }
}

export default FilterableProductTable
