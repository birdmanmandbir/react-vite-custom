import React from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import mockData from './mockData'
import './App.css'

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      isStockOnly: false
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleIsStockOnlyChange = this.handleIsStockOnlyChange.bind(this)
  }

  handleFilterTextChange(e) {
    this.setState({ filterText: e.target.value })
  }

  handleIsStockOnlyChange(e) {
    this.setState({ isStockOnly: e.target.checked })
  }

  getDisplayedItems() {
    const ret = this.state.isStockOnly
      ? mockData.filter((item) => item.stocked === true)
      : mockData
    return ret
  }

  render() {
    const displayedItems = this.getDisplayedItems()
    return (
      <div className="external">
        <SearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          handleFilterTextChange={this.handleFilterTextChange}
          handleIsStockOnlyChange={this.handleIsStockOnlyChange}
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
}

export default FilterableProductTable
