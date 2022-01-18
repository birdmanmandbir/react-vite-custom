import classes from './hidden.module.less'

// 测试css module样式用，其实这种简单的完全可以用行内样式
export default function Hidden() {
  return <div className={classes['hidden-style']}></div>
}
