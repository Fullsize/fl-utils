# omit

## 函数声明

```typescript
function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K>;
```

## 描述

`omit` 函数从对象中排除指定的属性，返回一个不包含这些属性的新对象。与 `pick` 功能相反。

## 参数

| 参数名 | 类型     | 描述               | 默认值 |
| ------ | -------- | ------------------ | ------ |
| `obj`  | `T`      | 源对象             | —      |
| `keys` | `K[]`    | 需要忽略的属性名数组 | —    |

## 返回值

`Omit<T, K>` — 返回不包含指定属性的新对象。

## 使用示例

```typescript
const user = { name: "Alice", age: 30, email: "alice@example.com", role: "admin" };

omit(user, ["role"]);
// 输出: { name: "Alice", age: 30, email: "alice@example.com" }

omit(user, ["email", "role"]);
// 输出: { name: "Alice", age: 30 }
```