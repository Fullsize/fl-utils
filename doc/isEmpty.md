# isEmpty

## 函数声明

```typescript
function isEmpty(value: any): boolean;
```

## 描述

`isEmpty` 函数用于判断给定的值是否为空。函数会根据不同的数据类型（`null`、`undefined`、数组、对象等）返回 `true` 或 `false`。

## 参数

| 参数名  | 类型  | 描述                     | 默认值 |
| ------- | ----- | ------------------------ | ------ |
| `value` | `any` | 需要检查的值，可以是任意类型 | —      |

## 返回值

`boolean` — 如果给定的值为空，返回 `true`；否则返回 `false`。

## 使用示例

### 检查 null 和 undefined

```typescript
console.log(isEmpty(null));      // 输出: true
console.log(isEmpty(undefined)); // 输出: true
```

### 检查数组和对象

```typescript
console.log(isEmpty([]));           // 输出: true
console.log(isEmpty({}));           // 输出: true
console.log(isEmpty([1, 2, 3]));    // 输出: false
console.log(isEmpty({ key: "val" }));// 输出: false
```

### 检查其他类型

```typescript
console.log(isEmpty(""));    // 输出: false
console.log(isEmpty(0));     // 输出: false
console.log(isEmpty(false)); // 输出: false
```
