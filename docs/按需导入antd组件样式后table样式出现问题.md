使用vite-plugin-imp按需导入样式后，虽然包体积减少上百k，但table右下角的翻页按钮样式出问题了：
![](../markdown_assets/Snipaste_2022-01-01_19-55-30.png)
原因是Table组件使用了Pagination组件，但vite-plugin-imp不支持间接样式导入，
修改引入为以下方式后解决
```js
import { Table, Pagination } from 'antd'
```
目前没有更好的解决方案, 或许可以增加对vite-plugin-imp的定制配置解决, 根本上还是antd官方对按需引入的支持不足, 或许可以考虑其他组件库