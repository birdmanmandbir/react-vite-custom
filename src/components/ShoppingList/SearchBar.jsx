import { Input } from 'antd'
function SearchBar(props) {
  return (
    <div className="searchBar" style={{ width: '100px' }}>
      <Input placeholder="Search..."></Input>
    </div>
  )
}
export default SearchBar
