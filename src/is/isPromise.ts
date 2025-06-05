/**
 * 判断给定的值是否为一个Promise对象
 * 
 * 此函数用于检测一个值是否符合Promise对象的特征它通过检查值的类型是否为对象、不为null，
 * 并且具有then方法且typeof为'function'，来判断该值可能是一个Promise对象
 * 
 * @param value {any} - 需要进行检查的值，可以是任何类型
 * @returns {value is Promise<T>} - 如果给定的值是一个Promise对象，则返回true；否则返回false
 */
export default function isPromise<T>(value: any): value is Promise<T> {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.then === 'function'
  );
}