## 方法名称

deconstruction

## 描述

对数据进行解构，并根据提供的 JSON 对象重组数据。

## 参数

- `data` 要解构的数据数组。
- `deconstructionJSON` 解构规则的 JSON 对象。

## 返回值

返回重组后的数据数组。

## 使用示例

```javascript
// 导入 deconstruction 方法
import { deconstruction } from "@fullsize/utils";

const Page = () => {
  const [data, setData] = useState<any[]>([
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "San Francisco" },
  ]);

  const [deconstructionPattern, setDeconstructionPattern] = useState({
    userId: "id",
    userDetails: ["name", "city"],
    defaultAge: "age",
    message: ["Hello", "Welcome"],
  });

  const transformedData = deconstruction(data, deconstructionPattern);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Data Deconstruction Example</h2>
      <h3>Original Data:</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <h3>Deconstruction Pattern:</h3>
      <pre>{JSON.stringify(deconstructionPattern, null, 2)}</pre>

      <h3>Transformed Data:</h3>
      <pre>{JSON.stringify(transformedData, null, 2)}</pre>
    </div>
  );
};
```
