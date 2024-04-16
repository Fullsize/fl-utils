/**
 * 异步操作池，限制并发数
 * @param poolLimit 池的并发限制数
 * @param iterable 可迭代的任务列表
 * @param iteratorFn 迭代器函数，处理每个任务
 * @returns 所有任务完成后的 Promise
 */
export default async function asyncPool(poolLimit: number, iterable: any[], iteratorFn: Function) {
  const ret = []; // 存储每个任务的 Promise
  const executing = new Set(); // 正在执行的任务集合

  for (const item of iterable) {
    const p = Promise.resolve().then(() => iteratorFn(item, iterable)); // 执行迭代器函数获取 Promise
    ret.push(p); // 将 Promise 存入结果数组
    executing.add(p); // 将 Promise 添加到执行集合
    const clean = () => executing.delete(p); // 完成或失败时清理任务
    p.then(clean).catch(clean);

    if (executing.size >= poolLimit) {
      await Promise.race(executing); // 控制并发数，等待任意一个任务完成
    }
  }

  return Promise.all(ret); // 等待所有任务完成
}
