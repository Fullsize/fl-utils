## 方法名称

changeURLArg

## 描述

用于更改URL参数的值或添加新的参数。

## 参数

- `name`：要更改的参数名称。如果未提供，则不执行任何操作并返回原始URL。
- `val`：参数的新值。如果name提供但val未提供，则不执行任何操作并返回原始URL。
- `href`：要操作的URL字符串。如果未提供，则使用当前页面的URL。

## 返回值

- 返回一个新的URL，其中指定的参数名称具有新的参数值。
- 如果指定的参数不存在，则会添加新的参数。

## 使用示例

```javascript
// 导入 changeURLArg 方法
import { changeURLArg } from "@fullsize/utils";
const Page = () => {
  const [paramName, setParamName] = useState("");
  const [paramValue, setParamValue] = useState("");
  const [updatedUrl, setUpdatedUrl] = useState(window.location.href);

  const handleChangeUrl = () => {
    const newUrl = changeURLArg(paramName, paramValue);
    setUpdatedUrl(newUrl);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Change URL Parameter</h2>
      <div>
        <input
          type="text"
          placeholder="Parameter Name"
          value={paramName}
          onChange={(e) => setParamName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Parameter Value"
          value={paramValue}
          onChange={(e) => setParamValue(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleChangeUrl}>Change URL</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Updated URL:</h3>
        <p>{updatedUrl}</p>
      </div>
    </div>
  );
};
```
