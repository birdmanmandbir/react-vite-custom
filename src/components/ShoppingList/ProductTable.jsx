import { Table } from 'antd'
import PropTypes from 'prop-types'
const redText = {
  color: 'red'
}

const greenText = {
  color: 'green'
}

const colConfig = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => {
      if (record.stocked) {
        return <span style={greenText}>{text}</span>
      }
      return <span style={redText}>{text}</span>
    }
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  }
]

const style = { width: '100%' }

function ProductTable(props) {
  if (props.dataSource.length === 0) return null
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

ProductTable.propTypes = {
  dataSource: PropTypes.array,
  title: PropTypes.string
}

export default ProductTable
