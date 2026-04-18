# isEqual

## 函数声明

```typescript
function isEqual(
  obj1: { [x: string]: any },
  obj2: { [x: string]: any }
): boolean;
```

## 描述

`isEqual` 函数用于检查两个对象是否相等，支持多层嵌套对象的深度比较。

## 参数

| 参数名 | 类型                 | 描述           | 默认值 |
| ------ | -------------------- | -------------- | ------ |
| `obj1` | `{ [x: string]: any }`| 第一个对象     | —      |
| `obj2` | `{ [x: string]: any }`| 第二个对象     | —      |

## 返回值

`boolean` — 如果两个对象相等，则返回 `true`；否则返回 `false`。

## 使用示例

```typescript
import { isEqual } from "@fullsize/utils";

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

console.log(isEqual(obj1, obj2)); // 输出: true
console.log(isEqual(obj1, obj3)); // 输出: false
```
