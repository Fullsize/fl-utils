## 方法名称

deepMerge

## 描述

深层次合并多个对象到目标对象中

## 参数

- `target` 目标对象，合并结果将存储在该对象中
- `sources` 要合并的多个源对象

## 返回值

合并后的目标对象

## 使用示例

```javascript
// 导入 deepMerge 方法
import { deepMerge } from "@fullsize/utils";

const App: React.FC = () => {
  const [object1, setObject1] = useState<string>(
    '{"a": 1, "b": {"x": 10, "y": 20}}'
  );
  const [object2, setObject2] = useState<string>(
    '{"b": {"y": 30, "z": 40}, "c": 3}'
  );
  const [mergedObject, setMergedObject] = useState<any>({});

  const handleMerge = () => {
    try {
      const obj1 = JSON.parse(object1);
      const obj2 = JSON.parse(object2);
      const result = deepMerge(obj1, obj2);
      setMergedObject(result);
    } catch (error) {
      alert("Invalid JSON input. Please enter valid JSON objects.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Deep Merge Example</h2>
      <div>
        <textarea
          rows={5}
          style={{ width: "100%", marginBottom: "10px" }}
          placeholder="Enter first JSON object"
          value={object1}
          onChange={(e) => setObject1(e.target.value)}
        />
        <textarea
          rows={5}
          style={{ width: "100%", marginBottom: "10px" }}
          placeholder="Enter second JSON object"
          value={object2}
          onChange={(e) => setObject2(e.target.value)}
        />
        <button onClick={handleMerge}>Merge Objects</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Merged Object:</h3>
        <pre>{JSON.stringify(mergedObject, null, 2)}</pre>
      </div>
    </div>
  );
};
```
