import { Table, Pagination } from 'antd'

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

const style = { width: '100%' }

function ProductTable(props) {
  return (
    <div style={style}>
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
