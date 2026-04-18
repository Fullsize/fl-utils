# sleep

## 函数声明

```typescript
function sleep(ms: number): Promise<void>;
```

## 描述

`sleep` 函数返回一个 Promise，在指定时间后 resolve。常用于异步流程中需要等待的场景。

## 参数

| 参数名 | 类型     | 描述           | 默认值 |
| ------ | -------- | -------------- | ------ |
| `ms`   | `number` | 延迟时间，单位毫秒 | —      |

## 返回值

`Promise<void>` — 在指定时间后 resolve 的 Promise。

## 使用示例

### 等待执行

```typescript
async function loadData() {
  console.log("开始加载");
  await sleep(1000);
  console.log("加载完成");
}

loadData();
// 1秒后输出 "加载完成"
```

### 循环中使用

```typescript
async function retryWithDelay(fn, retries, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i < retries - 1) {
        await sleep(delay);
      }
    }
  }
  throw new Error("All retries failed");
}
```