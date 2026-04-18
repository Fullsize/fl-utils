# isFunction

## 函数声明

```typescript
function isFunction(obj: unknown): boolean;
```

## 描述

`isFunction` 函数用于检查给定的值是否为函数类型。对于 `null` 和 `undefined` 值，返回 `false`。

## 参数

| 参数名 | 类型      | 描述           | 默认值 |
| ------ | --------- | -------------- | ------ |
| `obj`  | `unknown` | 要检查的值     | —      |

## 返回值

`boolean` — 如果值为函数类型，则返回 `true`；否则返回 `false`。

## 使用示例

```typescript
console.log(isFunction(() => {}));       // 输出: true
console.log(isFunction(function() {}));  // 输出: true
console.log(isFunction(123));            // 输出: false
console.log(isFunction(null));           // 输出: false
console.log(isFunction(undefined));      // 输出: false
```
