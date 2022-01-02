import { Input, Checkbox } from 'antd'
const inputStyle = {
  width: 120,
  marginBottom: 15,
  marginRight: 15
}
function SearchBar(props) {
  return (
    <div className="searchBar">
      <Input
        placeholder="Search..."
        style={inputStyle}
        value={props.filterText}
        onChange={props.handleFilterTextChange}
      ></Input>
      <Checkbox
        value={props.isStockOnly}
        onChange={props.handleIsStockOnlyChange}
      >
        Only show products in stock
      </Checkbox>
    </div>
  )
}
export default SearchBar
