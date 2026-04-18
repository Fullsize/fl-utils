# isObject

## 函数声明

```typescript
function isObject(obj: unknown): boolean;
```

## 描述

`isObject` 函数用于检查一个值是否为对象类型（`typeof` 结果为 `'object'`）。注意：`null` 的 `typeof` 结果也是 `'object'`，因此 `isObject(null)` 返回 `true`。

## 参数

| 参数名 | 类型      | 描述       | 默认值 |
| ------ | --------- | ---------- | ------ |
| `obj`  | `unknown` | 要检查的值 | —      |

## 返回值

`boolean` — 如果值为对象类型，则返回 `true`；否则返回 `false`。

## 使用示例

```typescript
console.log(isObject({}));           // 输出: true
console.log(isObject(null));         // 输出: true
console.log(isObject([1, 2, 3]));    // 输出: true
console.log(isObject("string"));     // 输出: false
console.log(isObject(123));          // 输出: false
```
