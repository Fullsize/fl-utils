# isEqual 方法说明文档

## 方法名称

isEqual

## 描述

检查两个对象是否相等，支持多层嵌套。

## 参数

- `obj1`：第一个对象。
- `obj2`：第二个对象。

## 返回值

- 如果两个对象相等，则返回 `true`；
- 否则返回 `false`。

## 使用示例

```javascript
// 导入 isEqual 方法
import { isEqual } from "@fullsize/utils";

// 示例对象
const obj1 = {
  name: "Alice",
  age: 30,
  address: { city: "New York", zip: 10001 },
};
const obj2 = {
  name: "Alice",
  age: 30,
  address: { city: "New York", zip: 10001 },
};
const obj3 = { name: "Bob", age: 25 };

// 比较两个对象
const result1 = isEqual(obj1, obj2); // true，obj1 和 obj2 的内容相等
const result2 = isEqual(obj1, obj3); // false，obj1 和 obj3 的内容不相等

console.log(result1); // 输出 true
console.log(result2); // 输出 false
```
