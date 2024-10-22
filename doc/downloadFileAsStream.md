## 方法名称

downloadFileAsStream

## 描述

该函数用于在浏览器中以流的形式下载文件。它接收文件的 `Blob` 或 `MediaSource` 数据，并创建一个临时的链接来触发下载，允许用户下载该文件。

## 参数

- `fileData: Blob | MediaSource`: 需要下载的文件数据。可以是 `Blob（二进制大对象）或` `MediaSource（媒体资源）。`
- `filename: string` 下载后保存的文件名。

## 返回值

- `void`: 该函数没有返回值，但它会启动下载过程。

## 使用示例

```typescript
// 创建一个 Blob 数据
const fileData = new Blob(["Hello, world!"], { type: "text/plain" });

// 调用 downloadFileAsStream 下载文件
downloadFileAsStream(fileData, "example.txt");
```
