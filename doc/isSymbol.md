# isSymbol

## 函数声明

```typescript
function isSymbol(value: unknown): boolean;
```

## 描述

`isSymbol` 函数用于检查一个值是否为 `Symbol` 类型。

## 参数

| 参数名  | 类型      | 描述       | 默认值 |
| ------- | --------- | ---------- | ------ |
| `value` | `unknown` | 要检查的值 | —      |

## 返回值

`boolean` — 如果值为 `Symbol` 类型，则返回 `true`；否则返回 `false`。

## 使用示例

```typescript
console.log(isSymbol(Symbol("id")));  // 输出: true
console.log(isSymbol(Symbol.iterator)); // 输出: true
console.log(isSymbol("symbol"));      // 输出: false
console.log(isSymbol(123));           // 输出: false
```
