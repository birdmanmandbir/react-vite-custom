import { Input, Checkbox } from 'antd'
const inputStyle = {
  width: 120,
  marginBottom: 15,
  marginRight: 15
}
function SearchBar(props) {
  return (
    <div className="searchBar">
      <Input placeholder="Search..." style={inputStyle}></Input>
      <Checkbox>Only show products in stock</Checkbox>
    </div>
  )
}
export default SearchBar
