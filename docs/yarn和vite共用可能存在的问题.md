vite dev server 开启时, 如果使用yarn add 新的dependency, 可能会提示以下错误, 依赖安装不成功:
```
Error: EPERM: operation not permitted, unlink 'xxx\node_modules\esbuild-windows-64\esbuild.exe'
```
网上没有找到解决方案, 关闭vite dev server后重试, 安装成功

## 根因分析
猜测可能是因为vite运行时使用了esbuild.exe, 而yarn add 的某些阶段也会使用esbuild.exe