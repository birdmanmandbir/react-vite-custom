import { Input, Switch } from 'antd'
const inputStyle = {
  width: 140,
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
      <Switch
        checked={props.isStockOnly}
        onChange={props.handleIsStockOnlyChange}
        style={{ marginRight: 10 }}
      />
      <label>Only show products in stock</label>
    </div>
  )
}
export default SearchBar
