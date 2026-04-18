# groupBy

## 函数声明

```typescript
function groupBy<T>(
  arr: T[],
  key: keyof T | ((item: T) => string | number)
): Record<string, T[]>;
```

## 描述

`groupBy` 函数根据指定的键或函数将数组元素分组，返回一个对象。

## 参数

| 参数名 | 类型                               | 描述                 | 默认值 |
| ------ | ---------------------------------- | -------------------- | ------ |
| `arr`  | `T[]`                              | 需要分组的数组       | —      |
| `key`  | `keyof T \| ((item: T) => string \| number)` | 分组依据，可以是属性名或函数 | —      |

## 返回值

`Record<string, T[]>` — 返回一个对象，键为分组依据，值为对应的数组。

## 使用示例

### 按属性分组

```typescript
const users = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];

groupBy(users, "age");
// 输出: {
//   "20": [{ name: "Alice", age: 20 }, { name: "Charlie", age: 20 }],
//   "30": [{ name: "Bob", age: 30 }]
// }
```

### 按函数分组

```typescript
const numbers = [1, 2, 3, 4, 5, 6];

groupBy(numbers, (n) => n % 2 === 0 ? "even" : "odd");
// 输出: {
//   "odd": [1, 3, 5],
//   "even": [2, 4, 6]
// }
```