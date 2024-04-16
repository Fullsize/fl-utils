# asyncPool 方法使用文档

## 方法名称

asyncPool

## 描述

异步操作池，限制并发数。

## 参数

- `poolLimit`：池的并发限制数。
- `iterable`：可迭代的任务列表。
- `iteratorFn`：迭代器函数，处理每个任务。

## 返回值

所有任务完成后的 Promise。

## 使用示例

```javascript
// 导入 asyncPool 方法
import asyncPool from "@fullsize/utils";

// 模拟异步任务函数
function asyncTask(item) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Task ${item} completed`);
      resolve(item);
    }, 1000); // 模拟任务执行时间 1 秒
  });
}

// 可迭代的任务列表
const tasks = [1, 2, 3, 4, 5];

// 定义迭代器函数
async function iteratorFn(item) {
  return asyncTask(item);
}

// 使用 asyncPool 控制并发数为 2
async function runTasks() {
  const result = await asyncPool(2, tasks, iteratorFn);
  console.log("All tasks completed:", result);
}

runTasks();
```
