# isNuil

## 函数声明

```typescript
function isNuil(obj: unknown): boolean;
```

## 描述

`isNuil` 函数用于检查一个值是否为 `null` 或 `undefined`。

## 参数

| 参数名 | 类型      | 描述       | 默认值 |
| ------ | --------- | ---------- | ------ |
| `obj`  | `unknown` | 要检查的值 | —      |

## 返回值

`boolean` — 如果值为 `null` 或 `undefined`，则返回 `true`；否则返回 `false`。

## 使用示例

```typescript
console.log(isNuil(null));       // 输出: true
console.log(isNuil(undefined));  // 输出: true
console.log(isNuil(0));          // 输出: false
console.log(isNuil(""));         // 输出: false
console.log(isNuil(false));      // 输出: false
```
