参数配置页面如何组件化？子组件往往需要修改props状态，保存时也需要复杂的事件处理

react的事件处理有点复杂，vue好像不用关注这些细节
使用class field实验性语法比较好：
```js
class LoggingButton extends React.Component {
  // 此语法确保 `handleClick` 内的 `this` 已被绑定。
  // 注意: 这是 *实验性* 语法。
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}
```