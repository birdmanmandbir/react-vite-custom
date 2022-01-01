import { Table } from 'antd'

const colConfig = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  }
]
function ProductTable(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <Table
        dataSource={props.dataSource}
        columns={colConfig}
        rowKey={(record) => record.name}
      />
    </div>
  )
}

export default ProductTable
