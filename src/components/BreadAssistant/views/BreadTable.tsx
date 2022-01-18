import { Table, Button } from 'antd'
import Header from '../Header'

function BreadTable() {
  return (
    <div>
      <Header>
        <h3>选择想做的菜谱</h3>
        <Button>添加菜谱</Button>
      </Header>
      <div className="tableWrapper">
        <Table></Table>
      </div>
    </div>
  )
}

export default BreadTable
