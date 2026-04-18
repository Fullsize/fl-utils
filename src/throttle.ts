/**
 * 节流函数
 * 在指定时间间隔内只执行一次，不管触发多少次
 * @param fn 需要节流的函数
 * @param interval 时间间隔，单位毫秒，默认 300ms
 * @returns 返回节流后的函数
 */
export default function throttle<T extends (...args: any[]) => any>(
  fn: T,
  interval: number = 300
): (...args: Parameters<T>) => void {
  let lastTime = 0;
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: Parameters<T>) {
    const now = Date.now();
    const remaining = interval - (now - lastTime);

    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.apply(this, args);
      lastTime = now;
    } else if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args);
        lastTime = Date.now();
        timer = null;
      }, remaining);
    }
  };
}
