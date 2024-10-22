## 方法名称

asyncPool

## 函数声明

```typescript
async function asyncPool(
  poolLimit: number,
  iterable: any[],
  iteratorFn: Function
): Promise<any[]>;
```

## 描述

`asyncPool` 函数用于限制并发执行的异步任务数量。它可以控制在任意时刻最多只能有 `poolLimit` 个异步操作同时执行，任务队列中的其余任务将被等待，直到有任务完成为止。该函数适合处理需要控制并发数的异步操作，如批量请求、文件上传等场景。

## 参数

- `poolLimit: number`：每次允许并发执行的最大异步任务数。
- `iterable: any[]`：可迭代对象，包含要处理的任务或数据项的集合。
- `iteratorFn: Function`：异步迭代函数，接受每个数据项作为参数并返回 Promise。用于对每个任务或数据项执行异步操作。

## 返回值

- `Promise<any[]>`:
  返回包含所有任务结果的 `Promise`，当所有任务完成时，该 `Promise` 会被解析。

## 使用示例

### 示例 1：控制并发请求数量

```typescript
async function fetchData(url: string): Promise<string> {
  const response = await fetch(url);
  return response.text();
}

const urls = [
  "https://example.com/1",
  "https://example.com/2",
  "https://example.com/3",
];

async function run() {
  const results = await asyncPool(2, urls, fetchData);
  console.log(results);
}

run();
// 同时最多执行 2 个请求，所有请求完成后输出结果
```

### 示例 2：文件上传场景

```typescript
async function uploadFile(file: File): Promise<string> {
  // 模拟文件上传
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${file.name} uploaded`), 1000);
  });
}

const files = [file1, file2, file3, file4, file5]; // 假设有 5 个文件需要上传

async function runUploads() {
  const results = await asyncPool(3, files, uploadFile);
  console.log("All uploads finished:", results);
}

runUploads();
// 每次最多执行 3 个文件的上传
```
