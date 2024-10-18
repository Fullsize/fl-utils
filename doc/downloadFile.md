## 方法名称

downloadFile

## 描述

下载文件到本地。

## 参数

- `url` 文件的下载链接。
- `filename` 下载后保存的文件名。

## 返回值

本地文件

## 使用示例

```javascript
// 导入 downloadFile 方法
import { downloadFile } from "@fullsize/utils";

const App: React.FC = () => {
  const [fileUrl, setFileUrl] = useState<string>(
    "https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
  );
  const [filename, setFilename] = useState<string>("sample.pdf");

  const handleDownload = () => {
    downloadFile(fileUrl, filename);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>File Download Example</h2>
      <div>
        <input
          type="text"
          placeholder="Enter file URL"
          value={fileUrl}
          onChange={(e) => setFileUrl(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <input
          type="text"
          placeholder="Enter filename"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <button onClick={handleDownload}>Download File</button>
      </div>
    </div>
  );
};
```
