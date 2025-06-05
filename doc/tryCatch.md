## tryCatch

`tryCatch` 函数用于封装同步或异步函数的错误捕获逻辑，避免使用冗长的 `try...catch` 语法结构。它统一返回一个数组 `[err, result]`，其中 `err` 是捕获到的错误（如有），`result` 是函数执行成功的返回值。

支持同步和异步函数的自动识别，调用者无需额外区分处理方式。

### 函数签名

```ts
function tryCatch<T>(fn: () => T): [Error | null, T | undefined];

function tryCatch<T>(
  fn: () => Promise<T>
): Promise<[Error | null, T | undefined]>;
```

### 参数

- `fn`: 需要被执行并捕获异常的函数。可以是同步函数或异步函数。

### 返回值

- **同步调用** 返回 `[Error | null, T | undefined]`
- **异步调用** 返回 `Promise<[Error | null, T | undefined]>`

---

### 使用示例

#### 同步函数（成功）

```ts
const [err, res] = tryCatch(() => JSON.parse('{"ok":true}'));

if (err) {
  console.error("解析失败:", err.message);
} else {
  console.log("解析成功:", res); // { ok: true }
}
```

#### 同步函数（失败）

```ts
const [err, res] = tryCatch(() => JSON.parse("{oops}"));

console.log(err?.message); // Unexpected token o in JSON at position 1
```

#### 异步函数（成功）

```ts
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

---

### 适用场景

- 避免重复编写 `try { ... } catch (e) { ... }` 结构
- 更加函数式的错误处理方式
- 统一异步/同步异常捕获写法
- React 或 Node 项目中的网络请求、解析处理等高风险操作封装

---

### 提示

- 返回的 `err` 为 `null` 或 `Error`，始终需做判空判断
