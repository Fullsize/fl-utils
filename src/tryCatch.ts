import isPromise from "./is/isPromise";
/**
 * 封装一个函数调用，自动处理异常和Promise
 * 
 * 此函数的目的是简化异步函数和同步函数的错误处理它接受一个函数作为参数，
 * 该函数可以返回一个值或一个Promise，并自动处理其中的异常
 * 
 * @param fn 一个同步或异步函数，不接受参数，返回一个值或一个Promise
 * @returns 返回一个数组，包含可能的错误对象和函数的结果，
 *          如果函数返回的是Promise，则返回Promise对象
 */
export default function tryCatch<T>(
  fn: () => T | Promise<T>
): [Error | null, T | null] | Promise<[Error | null, T | null]> {
  try {
    const result = fn();
    if (isPromise<T>(result)) {
      return result
        .then((res) => [null, res] as [null, T])
        .catch((err) => [err, null] as [Error, null]);
    } else {
      return [null, result];
    }
  } catch (err) {
    return [err as Error, null];
  }
}
