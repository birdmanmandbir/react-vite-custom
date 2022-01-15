import { Table, Button } from 'antd'
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`

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
