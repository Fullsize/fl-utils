# downloadFileAsStream

## 函数声明

```typescript
function downloadFileAsStream(fileData: Blob | MediaSource, filename: string): void;
```

## 描述

`downloadFileAsStream` 函数用于在浏览器中以流的形式下载文件。它接收文件的 `Blob` 或 `MediaSource` 数据，并创建一个临时的链接来触发下载。

## 参数

| 参数名     | 类型                 | 描述               | 默认值 |
| ---------- | -------------------- | ------------------ | ------ |
| `fileData` | `Blob \| MediaSource`| 需要下载的文件数据 | —      |
| `filename` | `string`             | 下载后保存的文件名 | —      |

## 返回值

`void` — 该函数没有返回值，但它会启动下载过程。

## 使用示例

```typescript
// 创建一个 Blob 数据
const fileData = new Blob(["Hello, world!"], { type: "text/plain" });

// 调用 downloadFileAsStream 下载文件
downloadFileAsStream(fileData, "example.txt");
```
