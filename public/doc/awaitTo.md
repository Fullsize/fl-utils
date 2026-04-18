# awaitTo

## 函数声明

```typescript
function to<T, E = Error>(
  promise: Promise<T>,
  errorExt?: object
): Promise<[E, undefined] | [null, T]>;
```

## 描述

`awaitTo` 函数用于将 Promise 对象转换为包含错误和数据的元组。通过将 Promise 的结果转换为 `[err, data]` 的形式，可以更方便地进行错误处理和数据传递，避免使用冗长的 `try...catch` 语法结构。

## 参数

| 参数名     | 类型          | 描述                           | 默认值  |
| ---------- | ------------- | ------------------------------ | ------- |
| `promise`  | `Promise<T>`  | 需要转换的 Promise 对象        | —       |
| `errorExt` | `object`      | 可选参数，用于扩展错误对象的属性 | —       |

## 返回值

`Promise<[E, undefined] | [null, T]>` — 返回一个新的 Promise 对象。成功时解析为 `[null, data]`，失败时解析为 `[error, undefined]`。

## 使用示例

### 基本用法

```typescript
import { awaitTo } from "@fullsize/utils";

const [err, data] = await awaitTo(fetchData());

if (err) {
  console.error("请求失败:", err.message);
} else {
  console.log("请求成功:", data);
}
```

### 扩展错误信息

```typescript
const [err, data] = await awaitTo(fetchData(), { context: "用户列表" });

if (err) {
  // err 对象上会附加 { context: "用户列表" } 属性
  console.error(`${err.context} 请求失败:`, err.message);
}
```
