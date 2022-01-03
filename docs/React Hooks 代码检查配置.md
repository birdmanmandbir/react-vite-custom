# React Hooks 代码检查配置
安装依赖
```bash
yarn add eslint-plugin-react-hooks --dev
```
配置eslint
```js
// .eslintrc.js
module.exports = {
  extends: [
    'plugin:react-hooks/recommended'
  ],
  plugins: ['react-hooks'],
  // 0: close; 1: warn; 2: error
  rules: {
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2
  }
}
```
测试是否生效：
在随便一个函数组件中添加：
```js
function a() {
  const [aa, setAa] = useState('')
}
```
如果提示不能在嵌套函数内使用hooks, 则配置成功

注意:
如果是vscode用户, 不方便查看eslint的报错, 可以用webstorm打开项目, 即可看到eslint的报错
(当然用eslint的命令行应该也可以)