## 方法名称

downloadFileAsStream

## 描述

使用文件流下载文件到本地。

## 参数

- `fileData` 文件的 Blob 对象或文件流。
- `filename` 下载后保存的文件名。

## 返回值

本地文件

## 使用示例

```javascript
// 导入 downloadFileAsStream 方法
import { downloadFileAsStream } from "@fullsize/utils";

const App: React.FC = () => {
  const handleDownload = () => {
    // 创建一个文本 Blob
    const text = "Hello, this is a sample text file!";
    const blob = new Blob([text], { type: "text/plain" });

    // 调用下载函数
    downloadFileAsStream(blob, "sample.txt");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>File Download Example</h2>
      <button onClick={handleDownload}>Download Text File</button>
    </div>
  );
};
```
