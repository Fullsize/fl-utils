# toNumber

## 函数声明

```typescript
function toNumber(value: any): number;
```

## 描述

`toNumber` 函数用于将给定的值转换为数字类型。如果值已经是数字类型，则直接返回。

## 参数

| 参数名  | 类型  | 描述               | 默认值 |
| ------- | ----- | ------------------ | ------ |
| `value` | `any` | 需要转换的值       | —      |

## 返回值

`number` — 返回转换后的数字。

## 使用示例

```typescript
toNumber("123");   // 输出: 123
toNumber("3.14");  // 输出: 3.14
toNumber(42);      // 输出: 42
toNumber("abc");   // 输出: NaN
```
