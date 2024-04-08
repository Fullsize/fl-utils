type Func = (...args: any[]) => any;
/**
 * 柯里化函数
 * @param {Func} fn - 需要柯里化的函数
 * @returns {Func} 柯里化后的函数
 */
export default function curry<T extends Func>(fn: T) {
  return function curried(this: any, ...args: any[]): any {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (this: any, ...args2: any[]) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}