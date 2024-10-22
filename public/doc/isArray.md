## 方法名称

isArray

## 描述

用于检查给定的输入值是否为数组。它还处理 null 和 undefined 值，确保在这些情况下返回 false。

## 参数

- `obj: unknown`：要检查的输入值，可以是任何类型。

## 返回值

- `boolean`: 如果 obj 是数组，则返回 true；否则返回 false。对于 null 和 undefined 值，返回 false。

## 使用示例

```typescript
// 检查不同类型的值是否为数组
console.log(isArray([1, 2, 3])); // 输出: true
console.log(isArray("Hello, world!")); // 输出: false
console.log(isArray(123)); // 输出: false
console.log(isArray(null)); // 输出: false
console.log(isArray(undefined)); // 输出: false
console.log(isArray({ key: "value" })); // 输出: false
```
