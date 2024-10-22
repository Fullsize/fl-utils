## 方法名称

downloadFile

## 函数声明

```typescript
function downloadFile(url: string, filename: string): void;
```

## 描述

该函数用于通过 XMLHttpRequest (XHR) 请求从给定的 URL 下载文件，并将其保存为指定的文件名。文件数据以 Blob 的形式接收并处理。

## 参数

- `url: string`: 文件下载的 URL 地址。
- `filename: string`: 下载时保存的文件名。

## 返回值

- `void`: 该函数没有返回值，但它会启动文件的下载过程。

## 使用示例

```typescript
// 下载文件
downloadFile("https://example.com/file.pdf", "downloaded-file.pdf");
```
