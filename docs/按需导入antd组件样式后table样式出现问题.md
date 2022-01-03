使用vite-plugin-imp按需导入样式后，虽然包体积减少上百k，但table右下角的翻页按钮样式出问题了：
![](../markdown_assets/Snipaste_2022-01-01_19-55-30.png)
原因是Table组件使用了Pagination组件，但vite-plugin-imp不支持间接样式导入，
修改引入为以下方式后解决
```js
import { Table, Pagination } from 'antd'
```


[vite 尝鲜 - 掘金](https://juejin.cn/post/6919104746867556365)
参考github此issue后解决：
[vite 是否可以配置 antd-vue 按需求加载 · Issue #1389 · vitejs/vite](https://github.com/vitejs/vite/issues/1389)