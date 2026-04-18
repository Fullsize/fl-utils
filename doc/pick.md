# pick

## 函数声明

```typescript
function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K>;
```

## 描述

`pick` 函数从对象中选取指定的属性，返回一个只包含这些属性的新对象。

## 参数

| 参数名 | 类型     | 描述               | 默认值 |
| ------ | -------- | ------------------ | ------ |
| `obj`  | `T`      | 源对象             | —      |
| `keys` | `K[]`    | 需要拾取的属性名数组 | —    |

## 返回值

`Pick<T, K>` — 返回只包含指定属性的新对象。

## 使用示例

```typescript
const user = { name: "Alice", age: 30, email: "alice@example.com", role: "admin" };

pick(user, ["name", "email"]);
// 输出: { name: "Alice", email: "alice@example.com" }

pick(user, ["name"]);
// 输出: { name: "Alice" }
```