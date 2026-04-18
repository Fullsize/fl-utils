/**
 * 只执行一次的函数
 * 包装后的函数只会执行一次，后续调用返回第一次的结果
 * @param fn 需要限制的函数
 * @returns 返回只执行一次的函数
 */
export default function once<T extends (...args: any[]) => any>(fn: T): T {
  let called = false;
  let result: any;

  return function (this: any, ...args: Parameters<T>) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  } as T;
}
