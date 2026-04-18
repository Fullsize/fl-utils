# isNull

## 函数声明

```typescript
function isNull(obj: unknown): boolean;
```

## 描述

`isNull` 函数用于检查一个值是否为 `null`。

## 参数

| 参数名 | 类型      | 描述       | 默认值 |
| ------ | --------- | ---------- | ------ |
| `obj`  | `unknown` | 要检查的值 | —      |

## 返回值

`boolean` — 如果值为 `null`，则返回 `true`；否则返回 `false`。

## 使用示例

```typescript
console.log(isNull(null));       // 输出: true
console.log(isNull(undefined));  // 输出: false
console.log(isNull(0));          // 输出: false
console.log(isNull(""));         // 输出: false
```
