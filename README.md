react 的事件处理有点复杂，vue 好像不用关注这些细节
使用 class field 实验性语法比较好：

```js
class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick = () => {
    console.log('this is:', this)
  }

  render() {
    return <button onClick={this.handleClick}>Click me</button>
  }
}
```

使用 vite-plugin-imp 进行了 css 按需加载，打包体积如下：
![](./markdown_assets/Snipaste_2022-01-01_14-03-25.png)
[参考链接](https://juejin.cn/post/6938671679153373214#heading-5)
[官方推荐的校验库-formik](https://formik.org/)
[配置 eslint，prettier，husky](https://dev.to/smetankajakub/how-to-integrate-husky-eslint-prettier-to-project-in-less-than-15-minutes-5gh)

官方建议不使用继承，组件的继承关系可以用组合，类似 v-slot 的方式实现；
