import Block from '../../common/Block'
import BreadItem from './views/BreadItem'
import BreadTable from './views/BreadTable'

function BreadAssistant() {
  return (
    <div>
      <h2>面包助手</h2>
      <h3>样例: </h3>
      <Block>
        <BreadItem />
      </Block>
      <Block>
        <BreadTable />
      </Block>
    </div>
  )
}
export default BreadAssistant
