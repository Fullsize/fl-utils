/**
 * 创建一个记忆化版本的函数，缓存函数的调用结果，当传入相同的参数时，直接返回之前计算的结果。
 * 这样可以避免对于相同参数的重复计算，提高性能。
 * @param fn 需要被记忆化的函数，该函数可以接受任意参数并返回一个值。
 * @returns 返回一个经过记忆化处理的函数。
 * @throws 如果传入的参数不是函数类型，将抛出 TypeError 异常。
 */
export default function memo<T extends (...args: any[]) => any>(fn: T) {
  // 验证传入的参数是否为函数类型
  if (typeof fn !== 'function') {
    throw new TypeError('The argument provided to memo must be a function');
  }

  // 使用对象来缓存函数的调用结果，键是参数的字符串形式，值是函数的返回值
  const cache: Record<string, ReturnType<T>> = {};

  // 返回一个记忆化版本的函数
  return function (...args: Parameters<T>) {
    // 通过将参数序列化为字符串作为缓存的键
    const key = JSON.stringify(args);
    // 如果缓存中存在该键对应的值，则直接返回缓存中的值；否则调用原函数，并将结果存入缓存中
    return cache[key] || (cache[key] = fn(...args));
  } as T;
}