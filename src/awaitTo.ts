/**
 * 将Promise对象转换为包含错误和数据的元组的Promise对象
 * 
 * @template T 泛型参数，表示Promise解析成功的数据类型
 * @template E 错误类型，默认为Error类型
 * @param {Promise<T>} promise 需要转换的Promise对象
 * @param {object} [errorExt] 可选参数，用于扩展错误对象的属性
 * @returns {Promise<[E, undefined] | [null, T]>} 返回一个新的Promise对象，包含错误和数据的元组
 * 
 * 此函数的目的是提供一种统一的Promise错误处理方式，通过将Promise的结果转换为元组的形式，
 * 可以更方便地进行错误处理和数据传递在异步编程中，这种方式可以减少嵌套的回调和try/catch块，
 * 提高代码的可读性和可维护性
 */
export default function to<T, E = Error>(
  promise: Promise<T>,
  errorExt?: object,
): Promise<[E, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data) => [null, data])
    .catch<[E, undefined]>((err: unknown) => {
      let finalError: any;

      if (typeof err === 'object' && err !== null) {
        finalError = errorExt
          ? Object.assign(Object.create(Object.getPrototypeOf(err)), err, errorExt)
          : err;
      } else {
        finalError = errorExt
          ? Object.assign(new Error(String(err)), errorExt)
          : new Error(String(err));
      }

      return [finalError, undefined];
    });
}
