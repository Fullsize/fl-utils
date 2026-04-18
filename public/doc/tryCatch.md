# tryCatch

## 函数声明

```typescript
function tryCatch<T>(
  fn: () => T | Promise<T>
): [Error | null, T | null] | Promise<[Error | null, T | null]>;
```

## 描述

`tryCatch` 函数用于封装同步或异步函数的错误捕获逻辑，避免使用冗长的 `try...catch` 语法结构。它统一返回一个数组 `[err, result]`，支持同步和异步函数的自动识别。

## 参数

| 参数名 | 类型                    | 描述                                         | 默认值 |
| ------ | ----------------------- | -------------------------------------------- | ------ |
| `fn`   | `() => T \| Promise<T>` | 需要被执行并捕获异常的函数，可以是同步或异步 | —      |

## 返回值

- **同步调用** — 返回 `[Error | null, T | null]`
- **异步调用** — 返回 `Promise<[Error | null, T | null]>`

## 使用示例

### 同步函数（成功）

```typescript
const [err, res] = tryCatch(() => JSON.parse('{"ok":true}'));

if (err) {
  console.error("解析失败:", err.message);
} else {
  console.log("解析成功:", res); // { ok: true }
}
```

### 同步函数（失败）

```typescript
const [err, res] = tryCatch(() => JSON.parse("{oops}"));

console.log(err?.message); // Unexpected token o in JSON at position 1
```

### 异步函数

```typescript
const [err, res] = await tryCatch(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
});

if (err) {
  console.error("请求出错:", err.message);
} else {
  console.log("数据:", res);
}
```

## 注意事项

- 返回的 `err` 为 `null` 或 `Error`，始终需做判空判断。
