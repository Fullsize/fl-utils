# once

## 函数声明

```typescript
function once<T extends (...args: any[]) => any>(fn: T): T;
```

## 描述

`once` 函数包装后的函数只会执行一次，后续调用直接返回第一次的结果。

## 参数

| 参数名 | 类型  | 描述             | 默认值 |
| ------ | ----- | ---------------- | ------ |
| `fn`   | `T`   | 需要限制的函数   | —      |

## 返回值

`T` — 返回只执行一次的函数。

## 使用示例

### 初始化函数只执行一次

```typescript
const initialize = once(() => {
  console.log("初始化完成");
  return { status: "ready" };
});

initialize(); // 输出: "初始化完成"，返回 { status: "ready" }
initialize(); // 不输出，直接返回 { status: "ready" }
initialize(); // 不输出，直接返回 { status: "ready" }
```

### 事件只触发一次

```typescript
const handleFirstClick = once(() => {
  console.log("首次点击");
});

button.addEventListener("click", handleFirstClick);
// 无论点击多少次，只会在第一次点击时输出 "首次点击"
```